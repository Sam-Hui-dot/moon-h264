///|
/// Macroblock type classification for inspection and visualization.
pub enum MbKind {
  I4x4
  I16x16
  IPcm
  PSkip
  P16x16
  P16x8
  P8x16
  P8x8
}

///|
pub fn MbKind::label(self : MbKind) -> String {
  match self {
    I4x4 => "I_4x4"
    I16x16 => "I_16x16"
    IPcm => "I_PCM"
    PSkip => "P_Skip"
    P16x16 => "P_16x16"
    P16x8 => "P_16x8"
    P8x16 => "P_8x16"
    P8x8 => "P_8x8"
  }
}

///|
/// Per-macroblock metadata captured during decoding for white-box inspection.
pub struct MbMeta {
  mb_x : Int32
  mb_y : Int32
  kind : MbKind
  qp : Int32
  bits : Int32
  mv_x : Int32 // representative quarter-pel MV (average or top-left)
  mv_y : Int32
  intra_mode : Int32 // primary Intra mode (-1 for Inter)
}

///|
/// Per-frame white-box metadata.
pub struct FrameMeta {
  frame_index : Int32
  frame_num : Int32
  is_idr : Bool
  slice_type : String // "I" or "P"
  width : Int32
  height : Int32
  mb_w : Int32
  mb_h : Int32
  slice_qp : Int32
  nal_bytes : Int32
  mbs : Array[MbMeta]
}

///|
/// A decoded YUV420p video frame (already cropped per SPS frame_cropping).
pub struct DecodedFrame {
  width : Int32
  height : Int32
  y : Bytes
  u : Bytes
  v : Bytes
  matrix_coefficients : Int32
  meta : FrameMeta
}

///|
/// Return the raw contiguous YUV420p byte buffer (`Y + U + V`), bit-exact with FFmpeg `-pix_fmt yuv420p`.
pub fn DecodedFrame::to_yuv420p_bytes(self : DecodedFrame) -> Bytes {
  let buf = Buffer(
    size_hint=self.y.length() + self.u.length() + self.v.length(),
  )
  buf.write_bytesview(self.y[:])
  buf.write_bytesview(self.u[:])
  buf.write_bytesview(self.v[:])
  buf.to_bytes()
}

///|
/// Convert this decoded frame to RGBA8888 using its SPS color matrix (BT.709 if matrix_coefficients == 1, else BT.601).
pub fn DecodedFrame::to_rgba(self : DecodedFrame) -> Bytes {
  yuv420p_to_rgba(
    self.y,
    self.u,
    self.v,
    self.width,
    self.height,
    bt709=self.matrix_coefficients == 1,
  )
}

///|
/// Complete result of decoding an Annex B H.264 stream.
pub struct DecodeResult {
  nalus : Array[NalUnit]
  sps_list : Array[Sps]
  pps_list : Array[Pps]
  frames : Array[DecodedFrame]
}

///|
/// Reference frame stored in the Decoded Picture Buffer (DPB).
priv struct RefFrame {
  pic_id : Int32
  frame_num : Int32
  is_long_term : Bool
  long_term_frame_idx : Int32
  y : FixedArray[Byte]
  u : FixedArray[Byte]
  v : FixedArray[Byte]
}

///|
/// Mutable state for the picture currently being assembled (supports multi-slice frames).
priv struct ActivePicture {
  sps : Sps
  pps : Pps
  frame_num : Int32
  is_idr : Bool
  nal_ref_idc : Int32
  idr_pic_id : Int32
  slice_type : Int32
  slice_qp : Int32
  mut nal_bytes : Int32
  long_term_reference : Bool
  adaptive_marking : Bool
  mmco_ops : Array[MmcoOp]
  mb_w : Int32
  mb_h : Int32
  y : FixedArray[Byte]
  u : FixedArray[Byte]
  v : FixedArray[Byte]
  mb_is_intra : FixedArray[Bool]
  mb_is_i4x4 : FixedArray[Bool]
  mb_qp : FixedArray[Int32]
  mb_slice_id : FixedArray[Int32]
  mb_disable_deblock : FixedArray[Int32]
  mb_alpha_off : FixedArray[Int32]
  mb_beta_off : FixedArray[Int32]
  nnz_luma : FixedArray[Int32] // (mb_w*4) * (mb_h*4)
  nnz_cb : FixedArray[Int32] // (mb_w*2) * (mb_h*2)
  nnz_cr : FixedArray[Int32] // (mb_w*2) * (mb_h*2)
  intra4x4_mode : FixedArray[Int32] // (mb_w*4) * (mb_h*4)
  mv_x : FixedArray[Int32] // (mb_w*4) * (mb_h*4)
  mv_y : FixedArray[Int32] // (mb_w*4) * (mb_h*4)
  ref_idx : FixedArray[Int32] // (mb_w*4) * (mb_h*4), -1 for Intra
  ref_pic_id : FixedArray[Int32] // (mb_w*4) * (mb_h*4)
  mbs : Array[MbMeta]
}

///|
/// Stateful H.264 Constrained Baseline Decoder.
pub struct H264Decoder {
  sps_map : Map[Int32, Sps]
  pps_map : Map[Int32, Pps]
  priv dpb : Array[RefFrame]
  mut next_pic_id : Int32
  mut frame_count : Int32
  mut slice_counter : Int32
  priv mut active : ActivePicture?
}

///|
pub fn H264Decoder::new() -> H264Decoder {
  {
    sps_map: {},
    pps_map: {},
    dpb: [],
    next_pic_id: 1,
    frame_count: 0,
    slice_counter: 0,
    active: None,
  }
}

///|
/// H.264 4x4 block raster-in-MB scan order (idx 0..15 -> lx, ly in 0..3).
let blk4_x : FixedArray[Int32] = [
  0, 1, 0, 1, 2, 3, 2, 3, 0, 1, 0, 1, 2, 3, 2, 3,
]

///|
let blk4_y : FixedArray[Int32] = [
  0, 0, 1, 1, 0, 0, 1, 1, 2, 2, 3, 3, 2, 2, 3, 3,
]

///|
let sub8_x : FixedArray[Int32] = [0, 2, 0, 2]

///|
let sub8_y : FixedArray[Int32] = [0, 0, 2, 2]

///|
let cblk_x : FixedArray[Int32] = [0, 1, 0, 1]

///|
let cblk_y : FixedArray[Int32] = [0, 0, 1, 1]

///|
fn ActivePicture::new(
  sps : Sps,
  pps : Pps,
  hdr : SliceHeader,
  raw_size : Int32,
) -> ActivePicture {
  let mb_w = sps.pic_width_in_mbs
  let mb_h = sps.pic_height_in_mbs
  let num_mbs = mb_w * mb_h
  let pic_w = mb_w * 16
  let pic_h = mb_h * 16
  let cw = mb_w * 8
  let ch = mb_h * 8
  let n4 = mb_w * 4 * mb_h * 4
  let n2 = mb_w * 2 * mb_h * 2
  let default_mbs : Array[MbMeta] = Array::makei(num_mbs, fn(i) {
    {
      mb_x: i % mb_w,
      mb_y: i / mb_w,
      kind: MbKind::PSkip,
      qp: hdr.slice_qp_y,
      bits: 0,
      mv_x: 0,
      mv_y: 0,
      intra_mode: -1,
    }
  })
  {
    sps,
    pps,
    frame_num: hdr.frame_num,
    is_idr: hdr.is_idr,
    nal_ref_idc: hdr.nal_ref_idc,
    idr_pic_id: hdr.idr_pic_id,
    slice_type: hdr.slice_type,
    slice_qp: hdr.slice_qp_y,
    nal_bytes: raw_size,
    long_term_reference: hdr.long_term_reference_flag,
    adaptive_marking: hdr.adaptive_ref_pic_marking_mode_flag,
    mmco_ops: hdr.mmco_ops,
    mb_w,
    mb_h,
    y: FixedArray::make(pic_w * pic_h, b'\x80'),
    u: FixedArray::make(cw * ch, b'\x80'),
    v: FixedArray::make(cw * ch, b'\x80'),
    mb_is_intra: FixedArray::make(num_mbs, false),
    mb_is_i4x4: FixedArray::make(num_mbs, false),
    mb_qp: FixedArray::make(num_mbs, hdr.slice_qp_y),
    mb_slice_id: FixedArray::make(num_mbs, -1),
    mb_disable_deblock: FixedArray::make(num_mbs, 0),
    mb_alpha_off: FixedArray::make(num_mbs, 0),
    mb_beta_off: FixedArray::make(num_mbs, 0),
    nnz_luma: FixedArray::make(n4, 0),
    nnz_cb: FixedArray::make(n2, 0),
    nnz_cr: FixedArray::make(n2, 0),
    intra4x4_mode: FixedArray::make(n4, 2),
    mv_x: FixedArray::make(n4, 0),
    mv_y: FixedArray::make(n4, 0),
    ref_idx: FixedArray::make(n4, -1),
    ref_pic_id: FixedArray::make(n4, -1),
    mbs: default_mbs,
  }
}

///|
fn crop_plane(
  plane : FixedArray[Byte],
  src_w : Int32,
  crop_l : Int32,
  crop_t : Int32,
  out_w : Int32,
  out_h : Int32,
) -> Bytes {
  if crop_l == 0 &&
    crop_t == 0 &&
    out_w == src_w &&
    out_w * out_h == plane.length() {
    return Bytes::from_array(plane)
  }
  let out = FixedArray::make(out_w * out_h, b'\x00')
  for r = 0; r < out_h; r = r + 1 {
    let src_row = (crop_t + r) * src_w + crop_l
    let dst_row = r * out_w
    for c = 0; c < out_w; c = c + 1 {
      out[dst_row + c] = plane[src_row + c]
    }
  }
  Bytes::from_array(out)
}

///|
fn build_ref_list_l0(
  dpb : Array[RefFrame],
  sps : Sps,
  hdr : SliceHeader,
) -> Array[RefFrame] {
  let max_fn = 1 << sps.log2_max_frame_num
  // Separate short-term and long-term references
  let short_term : Array[(Int32, RefFrame)] = []
  let long_term : Array[(Int32, RefFrame)] = []
  for r in dpb {
    if r.is_long_term {
      long_term.push((r.long_term_frame_idx, r))
    } else {
      let wrap = if r.frame_num > hdr.frame_num {
        r.frame_num - max_fn
      } else {
        r.frame_num
      }
      short_term.push((wrap, r))
    }
  }
  // Sort short-term descending by FrameNumWrap (insertion sort, DPB <= 16)
  for i = 1; i < short_term.length(); i = i + 1 {
    let key = short_term[i]
    let mut j = i - 1
    while j >= 0 && short_term[j].0 < key.0 {
      short_term[j + 1] = short_term[j]
      j -= 1
    }
    short_term[j + 1] = key
  }
  // Sort long-term ascending by long_term_frame_idx
  for i = 1; i < long_term.length(); i = i + 1 {
    let key = long_term[i]
    let mut j = i - 1
    while j >= 0 && long_term[j].0 > key.0 {
      long_term[j + 1] = long_term[j]
      j -= 1
    }
    long_term[j + 1] = key
  }
  let list : Array[RefFrame] = []
  for p in short_term {
    list.push(p.1)
  }
  for p in long_term {
    list.push(p.1)
  }
  // Apply ref_pic_list_modification_l0 if present
  if hdr.ref_pic_list_mods_l0.length() > 0 && list.length() > 0 {
    let mut pic_num_pred = hdr.frame_num
    let mut ref_idx_l0 = 0
    for m in hdr.ref_pic_list_mods_l0 {
      let mut found_idx = -1
      if m.idc == 0 || m.idc == 1 {
        let mut no_wrap = if m.idc == 0 {
          pic_num_pred - (m.value + 1)
        } else {
          pic_num_pred + (m.value + 1)
        }
        if no_wrap < 0 {
          no_wrap += max_fn
        } else if no_wrap >= max_fn {
          no_wrap -= max_fn
        }
        pic_num_pred = no_wrap
        let target_fn = no_wrap
        for k = 0; k < list.length(); k = k + 1 {
          if !list[k].is_long_term && list[k].frame_num == target_fn {
            found_idx = k
            break
          }
        }
      } else if m.idc == 2 {
        for k = 0; k < list.length(); k = k + 1 {
          if list[k].is_long_term && list[k].long_term_frame_idx == m.value {
            found_idx = k
            break
          }
        }
      }
      if found_idx >= 0 && ref_idx_l0 < list.length() {
        let target = list[found_idx]
        // Shift entries [ref_idx_l0 .. found_idx-1] right by 1
        if found_idx > ref_idx_l0 {
          let mut k = found_idx
          while k > ref_idx_l0 {
            list[k] = list[k - 1]
            k -= 1
          }
          list[ref_idx_l0] = target
        }
        ref_idx_l0 += 1
      }
    }
  }
  list
}

///|
fn H264Decoder::update_dpb(self : H264Decoder, pic : ActivePicture) -> Unit {
  if pic.is_idr {
    self.dpb.clear()
  }
  if pic.nal_ref_idc == 0 {
    return
  }
  let max_fn = 1 << pic.sps.log2_max_frame_num
  if !pic.is_idr && pic.adaptive_marking {
    for op in pic.mmco_ops {
      match op.op {
        1 => {
          // Mark short-term ref unused
          let target_fn = (pic.frame_num - (op.arg1 + 1) + max_fn) % max_fn
          let mut idx = -1
          for i = 0; i < self.dpb.length(); i = i + 1 {
            if !self.dpb[i].is_long_term && self.dpb[i].frame_num == target_fn {
              idx = i
              break
            }
          }
          if idx >= 0 {
            let _ = self.dpb.remove(idx)
          }
        }
        2 => {
          // Mark long-term ref unused
          let mut idx = -1
          for i = 0; i < self.dpb.length(); i = i + 1 {
            if self.dpb[i].is_long_term &&
              self.dpb[i].long_term_frame_idx == op.arg1 {
              idx = i
              break
            }
          }
          if idx >= 0 {
            let _ = self.dpb.remove(idx)
          }
        }
        5 => self.dpb.clear()
        _ => ()
      }
    }
  }
  let max_refs = if pic.sps.max_num_ref_frames > 0 {
    pic.sps.max_num_ref_frames
  } else {
    1
  }
  // Sliding window eviction
  while self.dpb.length() >= max_refs {
    // Evict oldest short-term ref (first short-term in FIFO order)
    let mut evict = -1
    for i = 0; i < self.dpb.length(); i = i + 1 {
      if !self.dpb[i].is_long_term {
        evict = i
        break
      }
    }
    if evict >= 0 {
      let _ = self.dpb.remove(evict)
    } else {
      let _ = self.dpb.remove(0)
    }
  }
  let pid = self.next_pic_id
  self.next_pic_id += 1
  self.dpb.push({
    pic_id: pid,
    frame_num: pic.frame_num,
    is_long_term: pic.is_idr && pic.long_term_reference,
    long_term_frame_idx: 0,
    y: pic.y,
    u: pic.u,
    v: pic.v,
  })
}

///|
fn H264Decoder::finalize_active(self : H264Decoder) -> DecodedFrame? {
  match self.active {
    None => None
    Some(pic) => {
      self.active = None
      // Run ITU-T H.264 §8.7 in-loop deblocking filter
      deblock_frame(
        pic.y,
        pic.u,
        pic.v,
        pic.mb_w,
        pic.mb_h,
        pic.mb_is_intra,
        pic.mb_qp,
        pic.mb_slice_id,
        pic.mb_disable_deblock,
        pic.mb_alpha_off,
        pic.mb_beta_off,
        pic.pps.chroma_qp_index_offset,
        pic.nnz_luma,
        pic.mv_x,
        pic.mv_y,
        pic.ref_pic_id,
      )
      // Output cropped YUV420p
      let sps = pic.sps
      let out_w = sps.width()
      let out_h = sps.height()
      let cl = if sps.frame_cropping_flag { sps.crop_left * 2 } else { 0 }
      let ct = if sps.frame_cropping_flag { sps.crop_top * 2 } else { 0 }
      let y_bytes = crop_plane(pic.y, pic.mb_w * 16, cl, ct, out_w, out_h)
      let cw_out = (out_w + 1) >> 1
      let ch_out = (out_h + 1) >> 1
      let u_bytes = crop_plane(
        pic.u,
        pic.mb_w * 8,
        cl >> 1,
        ct >> 1,
        cw_out,
        ch_out,
      )
      let v_bytes = crop_plane(
        pic.v,
        pic.mb_w * 8,
        cl >> 1,
        ct >> 1,
        cw_out,
        ch_out,
      )
      let frame_idx = self.frame_count
      self.frame_count += 1
      // Store reference frame in DPB (after deblocking, per spec!)
      self.update_dpb(pic)
      let meta : FrameMeta = {
        frame_index: frame_idx,
        frame_num: pic.frame_num,
        is_idr: pic.is_idr,
        slice_type: if pic.slice_type == 2 || pic.slice_type == 4 {
          "I"
        } else {
          "P"
        },
        width: out_w,
        height: out_h,
        mb_w: pic.mb_w,
        mb_h: pic.mb_h,
        slice_qp: pic.slice_qp,
        nal_bytes: pic.nal_bytes,
        mbs: pic.mbs,
      }
      Some({
        width: out_w,
        height: out_h,
        y: y_bytes,
        u: u_bytes,
        v: v_bytes,
        matrix_coefficients: sps.matrix_coefficients,
        meta,
      })
    }
  }
}

///|
fn compute_nc_luma(
  pic : ActivePicture,
  cur_slice_id : Int32,
  bx : Int32,
  by : Int32,
) -> Int32 {
  let stride4 = pic.mb_w * 4
  let avail_l = bx > 0 &&
    pic.mb_slice_id[(by >> 2) * pic.mb_w + ((bx - 1) >> 2)] == cur_slice_id
  let avail_t = by > 0 &&
    pic.mb_slice_id[((by - 1) >> 2) * pic.mb_w + (bx >> 2)] == cur_slice_id
  if avail_l && avail_t {
    (
      pic.nnz_luma[by * stride4 + bx - 1] +
      pic.nnz_luma[(by - 1) * stride4 + bx] +
      1
    ) >>
    1
  } else if avail_l {
    pic.nnz_luma[by * stride4 + bx - 1]
  } else if avail_t {
    pic.nnz_luma[(by - 1) * stride4 + bx]
  } else {
    0
  }
}

///|
fn compute_nc_chroma(
  pic : ActivePicture,
  nnz : FixedArray[Int32],
  cur_slice_id : Int32,
  cx : Int32,
  cy : Int32,
) -> Int32 {
  let stride2 = pic.mb_w * 2
  let avail_l = cx > 0 &&
    pic.mb_slice_id[(cy >> 1) * pic.mb_w + ((cx - 1) >> 1)] == cur_slice_id
  let avail_t = cy > 0 &&
    pic.mb_slice_id[((cy - 1) >> 1) * pic.mb_w + (cx >> 1)] == cur_slice_id
  if avail_l && avail_t {
    (nnz[cy * stride2 + cx - 1] + nnz[(cy - 1) * stride2 + cx] + 1) >> 1
  } else if avail_l {
    nnz[cy * stride2 + cx - 1]
  } else if avail_t {
    nnz[(cy - 1) * stride2 + cx]
  } else {
    0
  }
}

///|
fn set_mv_rect(
  pic : ActivePicture,
  bx : Int32,
  by : Int32,
  bw4 : Int32,
  bh4 : Int32,
  mvx : Int32,
  mvy : Int32,
  ref_i : Int32,
  ref_pid : Int32,
) -> Unit {
  let stride4 = pic.mb_w * 4
  for dy = 0; dy < bh4; dy = dy + 1 {
    let row = (by + dy) * stride4 + bx
    for dx = 0; dx < bw4; dx = dx + 1 {
      pic.mv_x[row + dx] = mvx
      pic.mv_y[row + dx] = mvy
      pic.ref_idx[row + dx] = ref_i
      pic.ref_pic_id[row + dx] = ref_pid
    }
  }
}

///|
fn decode_chroma_residual(
  br : BitReader,
  pic : ActivePicture,
  cur_slice_id : Int32,
  mb_x : Int32,
  mb_y : Int32,
  cbp_chroma : Int32,
  qp_y : Int32,
) -> Unit raise H264Error {
  if cbp_chroma == 0 {
    return
  }
  let qp_c = chroma_qp_from_luma(qp_y, pic.pps.chroma_qp_index_offset)
  let cw = pic.mb_w * 8
  let stride2 = pic.mb_w * 2
  let cx0 = mb_x * 2
  let cy0 = mb_y * 2
  // 1. Chroma DC (Cb then Cr)
  let cb_dc_raw = FixedArray::make(4, 0)
  let cr_dc_raw = FixedArray::make(4, 0)
  let cb_dc_nnz = decode_cavlc_block(br, cb_dc_raw, 0, 4, -1)
  let cr_dc_nnz = decode_cavlc_block(br, cr_dc_raw, 0, 4, -1)
  let cb_dc = if cb_dc_nnz > 0 {
    inverse_hadamard_chroma_dc(cb_dc_raw, qp_c)
  } else {
    FixedArray::make(4, 0)
  }
  let cr_dc = if cr_dc_nnz > 0 {
    inverse_hadamard_chroma_dc(cr_dc_raw, qp_c)
  } else {
    FixedArray::make(4, 0)
  }
  // 2. Chroma AC (if cbp_chroma == 2) + IDCT add
  if cbp_chroma == 2 {
    // Cb 4 blocks
    for i = 0; i < 4; i = i + 1 {
      let cx = cx0 + cblk_x[i]
      let cy = cy0 + cblk_y[i]
      let nc = compute_nc_chroma(pic, pic.nnz_cb, cur_slice_id, cx, cy)
      let blk = FixedArray::make(16, 0)
      let ac_nnz = decode_cavlc_block(br, blk, 1, 15, nc)
      pic.nnz_cb[cy * stride2 + cx] = ac_nnz
      if ac_nnz > 0 {
        dequant_4x4(blk, qp_c, true)
        blk[0] = cb_dc[i]
        idct_4x4_add(blk, pic.u, cw, cx * 4, cy * 4)
      } else if cb_dc[i] != 0 {
        idct_4x4_dc_add(cb_dc[i], pic.u, cw, cx * 4, cy * 4)
      }
    }
    // Cr 4 blocks
    for i = 0; i < 4; i = i + 1 {
      let cx = cx0 + cblk_x[i]
      let cy = cy0 + cblk_y[i]
      let nc = compute_nc_chroma(pic, pic.nnz_cr, cur_slice_id, cx, cy)
      let blk = FixedArray::make(16, 0)
      let ac_nnz = decode_cavlc_block(br, blk, 1, 15, nc)
      pic.nnz_cr[cy * stride2 + cx] = ac_nnz
      if ac_nnz > 0 {
        dequant_4x4(blk, qp_c, true)
        blk[0] = cr_dc[i]
        idct_4x4_add(blk, pic.v, cw, cx * 4, cy * 4)
      } else if cr_dc[i] != 0 {
        idct_4x4_dc_add(cr_dc[i], pic.v, cw, cx * 4, cy * 4)
      }
    }
  } else {
    // DC-only chroma
    for i = 0; i < 4; i = i + 1 {
      let cx = cx0 + cblk_x[i]
      let cy = cy0 + cblk_y[i]
      if cb_dc[i] != 0 {
        idct_4x4_dc_add(cb_dc[i], pic.u, cw, cx * 4, cy * 4)
      }
      if cr_dc[i] != 0 {
        idct_4x4_dc_add(cr_dc[i], pic.v, cw, cx * 4, cy * 4)
      }
    }
  }
}

///|
fn decode_luma_4x4_residual(
  br : BitReader,
  pic : ActivePicture,
  cur_slice_id : Int32,
  mb_x : Int32,
  mb_y : Int32,
  cbp_luma : Int32,
  qp_y : Int32,
) -> Unit raise H264Error {
  let pic_w = pic.mb_w * 16
  let stride4 = pic.mb_w * 4
  let bx0 = mb_x * 4
  let by0 = mb_y * 4
  for i8 = 0; i8 < 4; i8 = i8 + 1 {
    if ((cbp_luma >> i8) & 1) == 0 {
      continue
    }
    for j4 = 0; j4 < 4; j4 = j4 + 1 {
      let blk_idx = i8 * 4 + j4
      let bx = bx0 + blk4_x[blk_idx]
      let by = by0 + blk4_y[blk_idx]
      let nc = compute_nc_luma(pic, cur_slice_id, bx, by)
      let blk = FixedArray::make(16, 0)
      let nnz = decode_cavlc_block(br, blk, 0, 16, nc)
      pic.nnz_luma[by * stride4 + bx] = nnz
      if nnz > 0 {
        dequant_4x4(blk, qp_y, false)
        idct_4x4_add(blk, pic.y, pic_w, bx * 4, by * 4)
      }
    }
  }
}

///|
fn decode_intra_mb(
  br : BitReader,
  pic : ActivePicture,
  cur_slice_id : Int32,
  mb_x : Int32,
  mb_y : Int32,
  i_mb_type : Int32, // 0 = I_4x4, 1..24 = I_16x16, 25 = I_PCM
  cur_qp : Int32,
) -> (Int32, MbKind, Int32) raise H264Error {
  let mb_idx = mb_y * pic.mb_w + mb_x
  let pic_w = pic.mb_w * 16
  let cw = pic.mb_w * 8
  let stride4 = pic.mb_w * 4
  let stride2 = pic.mb_w * 2
  let bx0 = mb_x * 4
  let by0 = mb_y * 4
  pic.mb_is_intra[mb_idx] = true
  let cip = pic.pps.constrained_intra_pred_flag

  // Helper: check MB-level intra neighbor availability
  fn mb_avail_intra(n_mb_x : Int32, n_mb_y : Int32) -> Bool {
    if n_mb_x < 0 || n_mb_y < 0 || n_mb_x >= pic.mb_w {
      return false
    }
    let n_idx = n_mb_y * pic.mb_w + n_mb_x
    if pic.mb_slice_id[n_idx] != cur_slice_id {
      return false
    }
    if cip && !pic.mb_is_intra[n_idx] {
      return false
    }
    true
  }

  let avail_mb_l = mb_avail_intra(mb_x - 1, mb_y)
  let avail_mb_t = mb_avail_intra(mb_x, mb_y - 1)

  if i_mb_type == 25 {
    // I_PCM: byte-align and read 256 Y + 64 U + 64 V raw samples
    br.align_to_byte()
    for y = 0; y < 16; y = y + 1 {
      let row = (mb_y * 16 + y) * pic_w + mb_x * 16
      for x = 0; x < 16; x = x + 1 {
        pic.y[row + x] = br.read_aligned_byte().to_byte()
      }
    }
    for y = 0; y < 8; y = y + 1 {
      let row = (mb_y * 8 + y) * cw + mb_x * 8
      for x = 0; x < 8; x = x + 1 {
        pic.u[row + x] = br.read_aligned_byte().to_byte()
      }
    }
    for y = 0; y < 8; y = y + 1 {
      let row = (mb_y * 8 + y) * cw + mb_x * 8
      for x = 0; x < 8; x = x + 1 {
        pic.v[row + x] = br.read_aligned_byte().to_byte()
      }
    }
    // Per H.264 §7.3.5 / §9.2.1: I_PCM sets nnz=16 and qp=0
    for dy = 0; dy < 4; dy = dy + 1 {
      for dx = 0; dx < 4; dx = dx + 1 {
        pic.nnz_luma[(by0 + dy) * stride4 + bx0 + dx] = 16
        pic.intra4x4_mode[(by0 + dy) * stride4 + bx0 + dx] = 2
      }
    }
    for dy = 0; dy < 2; dy = dy + 1 {
      for dx = 0; dx < 2; dx = dx + 1 {
        pic.nnz_cb[(mb_y * 2 + dy) * stride2 + mb_x * 2 + dx] = 16
        pic.nnz_cr[(mb_y * 2 + dy) * stride2 + mb_x * 2 + dx] = 16
      }
    }
    pic.mb_qp[mb_idx] = 0
    return (0, MbKind::IPcm, 2)
  }

  if i_mb_type == 0 {
    // I_4x4
    pic.mb_is_i4x4[mb_idx] = true
    let modes = FixedArray::make(16, 2)
    for blk = 0; blk < 16; blk = blk + 1 {
      let lx = blk4_x[blk]
      let ly = blk4_y[blk]
      let bx = bx0 + lx
      let by = by0 + ly
      let a_avail = if lx > 0 { true } else { avail_mb_l }
      let b_avail = if ly > 0 { true } else { avail_mb_t }
      let mpm = if !a_avail || !b_avail {
        2
      } else {
        let a_mb = (by >> 2) * pic.mb_w + ((bx - 1) >> 2)
        let b_mb = ((by - 1) >> 2) * pic.mb_w + (bx >> 2)
        let ma = if pic.mb_is_i4x4[a_mb] {
          pic.intra4x4_mode[by * stride4 + bx - 1]
        } else {
          2
        }
        let mb_mode = if pic.mb_is_i4x4[b_mb] {
          pic.intra4x4_mode[(by - 1) * stride4 + bx]
        } else {
          2
        }
        if ma < mb_mode {
          ma
        } else {
          mb_mode
        }
      }
      let prev_flag = br.read_bit()
      let mode = if prev_flag != 0 {
        mpm
      } else {
        let rem = br.read_bits(3)
        if rem < mpm {
          rem
        } else {
          rem + 1
        }
      }
      modes[blk] = mode
      pic.intra4x4_mode[by * stride4 + bx] = mode
    }
    let chroma_mode = br.read_ue()
    let cbp = br.read_me(true)
    let cbp_luma = cbp & 15
    let cbp_chroma = cbp >> 4
    let mut qp = cur_qp
    if cbp_luma > 0 || cbp_chroma > 0 {
      let qp_delta = br.read_se()
      qp = ((qp + qp_delta) % 52 + 52) % 52
    }
    pic.mb_qp[mb_idx] = qp
    // Predict & reconstruct each 4x4 Luma block in scan order (so reconstructed pixels feed subsequent blocks!)
    for i8 = 0; i8 < 4; i8 = i8 + 1 {
      let has_res = ((cbp_luma >> i8) & 1) != 0
      for j4 = 0; j4 < 4; j4 = j4 + 1 {
        let blk = i8 * 4 + j4
        let lx = blk4_x[blk]
        let ly = blk4_y[blk]
        let bx = bx0 + lx
        let by = by0 + ly
        let avail_l = if lx > 0 { true } else { avail_mb_l }
        let avail_t = if ly > 0 { true } else { avail_mb_t }
        let avail_tl = if lx > 0 && ly > 0 {
          true
        } else if lx == 0 && ly == 0 {
          mb_avail_intra(mb_x - 1, mb_y - 1)
        } else if lx == 0 {
          avail_mb_l
        } else {
          avail_mb_t
        }
        let avail_tr = if !avail_t {
          false
        } else if lx == 3 && ly != 0 {
          false
        } else if (lx & 1) == 1 && (ly & 1) == 1 {
          false
        } else if lx == 3 && ly == 0 {
          mb_avail_intra(mb_x + 1, mb_y - 1)
        } else {
          true
        }
        predict_intra_4x4(
          pic.y,
          pic_w,
          bx * 4,
          by * 4,
          modes[blk],
          avail_t,
          avail_l,
          avail_tr,
          avail_tl,
        )
        if has_res {
          let nc = compute_nc_luma(pic, cur_slice_id, bx, by)
          let coeffs = FixedArray::make(16, 0)
          let nnz = decode_cavlc_block(br, coeffs, 0, 16, nc)
          pic.nnz_luma[by * stride4 + bx] = nnz
          if nnz > 0 {
            dequant_4x4(coeffs, qp, false)
            idct_4x4_add(coeffs, pic.y, pic_w, bx * 4, by * 4)
          }
        }
      }
    }
    // Predict & reconstruct Chroma 8x8
    predict_intra_chroma_8x8(
      pic.u,
      cw,
      mb_x * 8,
      mb_y * 8,
      chroma_mode,
      avail_mb_t,
      avail_mb_l,
    )
    predict_intra_chroma_8x8(
      pic.v,
      cw,
      mb_x * 8,
      mb_y * 8,
      chroma_mode,
      avail_mb_t,
      avail_mb_l,
    )
    decode_chroma_residual(br, pic, cur_slice_id, mb_x, mb_y, cbp_chroma, qp)
    return (qp, MbKind::I4x4, modes[0])
  }

  // I_16x16 (i_mb_type in 1..24)
  let t = i_mb_type - 1
  let pred_mode = t & 3
  let cbp_chroma = (t >> 2) % 3
  let cbp_luma = if t >= 12 { 15 } else { 0 }
  let chroma_mode = br.read_ue()
  let qp_delta = br.read_se()
  let qp = ((cur_qp + qp_delta) % 52 + 52) % 52
  pic.mb_qp[mb_idx] = qp
  // Predict 16x16 Luma
  predict_intra_16x16(
    pic.y,
    pic_w,
    mb_x * 16,
    mb_y * 16,
    pred_mode,
    avail_mb_t,
    avail_mb_l,
  )
  // Decode 4x4 Luma DC Hadamard block
  let nc_dc = compute_nc_luma(pic, cur_slice_id, bx0, by0)
  let dc_raw = FixedArray::make(16, 0)
  let dc_nnz = decode_cavlc_block(br, dc_raw, 0, 16, nc_dc)
  let dc = if dc_nnz > 0 {
    inverse_hadamard_luma_dc(dc_raw, qp)
  } else {
    FixedArray::make(16, 0)
  }
  // Decode 16 Luma AC blocks (if cbp_luma != 0) and apply IDCT
  for blk = 0; blk < 16; blk = blk + 1 {
    let lx = blk4_x[blk]
    let ly = blk4_y[blk]
    let bx = bx0 + lx
    let by = by0 + ly
    let dc_val = dc[ly * 4 + lx]
    if cbp_luma != 0 {
      let nc = compute_nc_luma(pic, cur_slice_id, bx, by)
      let ac = FixedArray::make(16, 0)
      let ac_nnz = decode_cavlc_block(br, ac, 1, 15, nc)
      pic.nnz_luma[by * stride4 + bx] = ac_nnz
      if ac_nnz > 0 {
        dequant_4x4(ac, qp, true)
        ac[0] = dc_val
        idct_4x4_add(ac, pic.y, pic_w, bx * 4, by * 4)
      } else if dc_val != 0 {
        idct_4x4_dc_add(dc_val, pic.y, pic_w, bx * 4, by * 4)
      }
    } else if dc_val != 0 {
      idct_4x4_dc_add(dc_val, pic.y, pic_w, bx * 4, by * 4)
    }
  }
  // Predict & reconstruct Chroma 8x8
  predict_intra_chroma_8x8(
    pic.u,
    cw,
    mb_x * 8,
    mb_y * 8,
    chroma_mode,
    avail_mb_t,
    avail_mb_l,
  )
  predict_intra_chroma_8x8(
    pic.v,
    cw,
    mb_x * 8,
    mb_y * 8,
    chroma_mode,
    avail_mb_t,
    avail_mb_l,
  )
  decode_chroma_residual(br, pic, cur_slice_id, mb_x, mb_y, cbp_chroma, qp)
  (qp, MbKind::I16x16, pred_mode)
}

///|
fn mc_partition(
  ref_frame : RefFrame,
  pic : ActivePicture,
  bx : Int32,
  by : Int32,
  bw4 : Int32,
  bh4 : Int32,
  mvx : Int32,
  mvy : Int32,
) -> Unit {
  let pic_w = pic.mb_w * 16
  let pic_h = pic.mb_h * 16
  let cw = pic.mb_w * 8
  let ch = pic.mb_h * 8
  mc_luma_block(
    ref_frame.y,
    pic.y,
    pic_w,
    pic_h,
    bx * 4,
    by * 4,
    bw4 * 4,
    bh4 * 4,
    mvx,
    mvy,
  )
  mc_chroma_block(
    ref_frame.u,
    pic.u,
    cw,
    ch,
    bx * 2,
    by * 2,
    bw4 * 2,
    bh4 * 2,
    mvx,
    mvy,
  )
  mc_chroma_block(
    ref_frame.v,
    pic.v,
    cw,
    ch,
    bx * 2,
    by * 2,
    bw4 * 2,
    bh4 * 2,
    mvx,
    mvy,
  )
}

///|
fn get_ref_frame(
  ref_list : Array[RefFrame],
  ref_idx : Int32,
) -> RefFrame raise H264Error {
  if ref_idx < 0 || ref_idx >= ref_list.length() {
    raise H264Error::InvalidSyntax(
      "ref_idx_l0=\{ref_idx} out of range (len=\{ref_list.length()})",
    )
  }
  ref_list[ref_idx]
}

///|
fn decode_p_skip_mb(
  pic : ActivePicture,
  cur_slice_id : Int32,
  mb_x : Int32,
  mb_y : Int32,
  cur_qp : Int32,
  ref_list : Array[RefFrame],
) -> Unit raise H264Error {
  let mb_idx = mb_y * pic.mb_w + mb_x
  let bx0 = mb_x * 4
  let by0 = mb_y * 4
  let stride4 = pic.mb_w * 4
  pic.mb_slice_id[mb_idx] = cur_slice_id
  pic.mb_qp[mb_idx] = cur_qp
  pic.mb_is_intra[mb_idx] = false
  // H.264 §8.4.1.1 P_Skip MV derivation
  let avail_a = mb_x > 0 && pic.mb_slice_id[mb_idx - 1] == cur_slice_id
  let avail_b = mb_y > 0 && pic.mb_slice_id[mb_idx - pic.mb_w] == cur_slice_id
  let zero_mv = if !avail_a || !avail_b {
    true
  } else {
    let a_idx = by0 * stride4 + bx0 - 1
    let b_idx = (by0 - 1) * stride4 + bx0
    (pic.ref_idx[a_idx] == 0 && pic.mv_x[a_idx] == 0 && pic.mv_y[a_idx] == 0) ||
    (pic.ref_idx[b_idx] == 0 && pic.mv_x[b_idx] == 0 && pic.mv_y[b_idx] == 0)
  }
  let (mvx, mvy) = if zero_mv {
    (0, 0)
  } else {
    predict_mv_l0(
      pic.mv_x,
      pic.mv_y,
      pic.ref_idx,
      pic.mb_slice_id,
      pic.mb_w,
      cur_slice_id,
      bx0,
      by0,
      4,
      0,
      0,
    )
  }
  let rf = get_ref_frame(ref_list, 0)
  set_mv_rect(pic, bx0, by0, 4, 4, mvx, mvy, 0, rf.pic_id)
  mc_partition(rf, pic, bx0, by0, 4, 4, mvx, mvy)
  pic.mbs[mb_idx] = {
    mb_x,
    mb_y,
    kind: MbKind::PSkip,
    qp: cur_qp,
    bits: 0,
    mv_x: mvx,
    mv_y: mvy,
    intra_mode: -1,
  }
}

///|
fn decode_p_inter_mb(
  br : BitReader,
  pic : ActivePicture,
  hdr : SliceHeader,
  cur_slice_id : Int32,
  mb_x : Int32,
  mb_y : Int32,
  p_mb_type : Int32, // 0=16x16, 1=16x8, 2=8x16, 3=P_8x8, 4=P_8x8ref0
  cur_qp : Int32,
  ref_list : Array[RefFrame],
) -> (Int32, MbKind, Int32, Int32) raise H264Error {
  let mb_idx = mb_y * pic.mb_w + mb_x
  let bx0 = mb_x * 4
  let by0 = mb_y * 4
  let max_ref_idx = hdr.num_ref_idx_l0_active - 1
  pic.mb_is_intra[mb_idx] = false
  let mut rep_mvx = 0
  let mut rep_mvy = 0
  let kind : MbKind = match p_mb_type {
    0 => {
      // P_L0_16x16
      let ref_i = if max_ref_idx > 0 { br.read_te(max_ref_idx) } else { 0 }
      let (pmvx, pmvy) = predict_mv_l0(
        pic.mv_x,
        pic.mv_y,
        pic.ref_idx,
        pic.mb_slice_id,
        pic.mb_w,
        cur_slice_id,
        bx0,
        by0,
        4,
        ref_i,
        0,
      )
      let mvx = pmvx + br.read_se()
      let mvy = pmvy + br.read_se()
      let rf = get_ref_frame(ref_list, ref_i)
      set_mv_rect(pic, bx0, by0, 4, 4, mvx, mvy, ref_i, rf.pic_id)
      mc_partition(rf, pic, bx0, by0, 4, 4, mvx, mvy)
      rep_mvx = mvx
      rep_mvy = mvy
      MbKind::P16x16
    }
    1 => {
      // P_L0_L0_16x8
      let ref0 = if max_ref_idx > 0 { br.read_te(max_ref_idx) } else { 0 }
      let ref1 = if max_ref_idx > 0 { br.read_te(max_ref_idx) } else { 0 }
      let (p0x, p0y) = predict_mv_l0(
        pic.mv_x,
        pic.mv_y,
        pic.ref_idx,
        pic.mb_slice_id,
        pic.mb_w,
        cur_slice_id,
        bx0,
        by0,
        4,
        ref0,
        1,
      )
      let mv0x = p0x + br.read_se()
      let mv0y = p0y + br.read_se()
      let rf0 = get_ref_frame(ref_list, ref0)
      set_mv_rect(pic, bx0, by0, 4, 2, mv0x, mv0y, ref0, rf0.pic_id)
      let (p1x, p1y) = predict_mv_l0(
        pic.mv_x,
        pic.mv_y,
        pic.ref_idx,
        pic.mb_slice_id,
        pic.mb_w,
        cur_slice_id,
        bx0,
        by0 + 2,
        4,
        ref1,
        2,
      )
      let mv1x = p1x + br.read_se()
      let mv1y = p1y + br.read_se()
      let rf1 = get_ref_frame(ref_list, ref1)
      set_mv_rect(pic, bx0, by0 + 2, 4, 2, mv1x, mv1y, ref1, rf1.pic_id)
      mc_partition(rf0, pic, bx0, by0, 4, 2, mv0x, mv0y)
      mc_partition(rf1, pic, bx0, by0 + 2, 4, 2, mv1x, mv1y)
      rep_mvx = (mv0x + mv1x) >> 1
      rep_mvy = (mv0y + mv1y) >> 1
      MbKind::P16x8
    }
    2 => {
      // P_L0_L0_8x16
      let ref0 = if max_ref_idx > 0 { br.read_te(max_ref_idx) } else { 0 }
      let ref1 = if max_ref_idx > 0 { br.read_te(max_ref_idx) } else { 0 }
      let (p0x, p0y) = predict_mv_l0(
        pic.mv_x,
        pic.mv_y,
        pic.ref_idx,
        pic.mb_slice_id,
        pic.mb_w,
        cur_slice_id,
        bx0,
        by0,
        2,
        ref0,
        3,
      )
      let mv0x = p0x + br.read_se()
      let mv0y = p0y + br.read_se()
      let rf0 = get_ref_frame(ref_list, ref0)
      set_mv_rect(pic, bx0, by0, 2, 4, mv0x, mv0y, ref0, rf0.pic_id)
      let (p1x, p1y) = predict_mv_l0(
        pic.mv_x,
        pic.mv_y,
        pic.ref_idx,
        pic.mb_slice_id,
        pic.mb_w,
        cur_slice_id,
        bx0 + 2,
        by0,
        2,
        ref1,
        4,
      )
      let mv1x = p1x + br.read_se()
      let mv1y = p1y + br.read_se()
      let rf1 = get_ref_frame(ref_list, ref1)
      set_mv_rect(pic, bx0 + 2, by0, 2, 4, mv1x, mv1y, ref1, rf1.pic_id)
      mc_partition(rf0, pic, bx0, by0, 2, 4, mv0x, mv0y)
      mc_partition(rf1, pic, bx0 + 2, by0, 2, 4, mv1x, mv1y)
      rep_mvx = (mv0x + mv1x) >> 1
      rep_mvy = (mv0y + mv1y) >> 1
      MbKind::P8x16
    }
    _ => {
      // P_8x8 (3) or P_8x8ref0 (4)
      let sub_types = FixedArray::make(4, 0)
      for s = 0; s < 4; s = s + 1 {
        sub_types[s] = br.read_ue()
      }
      let sub_refs = FixedArray::make(4, 0)
      if p_mb_type == 3 && max_ref_idx > 0 {
        for s = 0; s < 4; s = s + 1 {
          sub_refs[s] = br.read_te(max_ref_idx)
        }
      }
      let mut sum_x = 0
      let mut sum_y = 0
      let mut cnt = 0
      for s = 0; s < 4; s = s + 1 {
        let sx = bx0 + sub8_x[s]
        let sy = by0 + sub8_y[s]
        let ref_i = sub_refs[s]
        let rf = get_ref_frame(ref_list, ref_i)
        match sub_types[s] {
          0 => {
            // 8x8
            let (px, py) = predict_mv_l0(
              pic.mv_x,
              pic.mv_y,
              pic.ref_idx,
              pic.mb_slice_id,
              pic.mb_w,
              cur_slice_id,
              sx,
              sy,
              2,
              ref_i,
              0,
            )
            let mx = px + br.read_se()
            let my = py + br.read_se()
            set_mv_rect(pic, sx, sy, 2, 2, mx, my, ref_i, rf.pic_id)
            mc_partition(rf, pic, sx, sy, 2, 2, mx, my)
            sum_x += mx
            sum_y += my
            cnt += 1
          }
          1 =>
            // 8x4 (2 parts)
            for p = 0; p < 2; p = p + 1 {
              let (px, py) = predict_mv_l0(
                pic.mv_x,
                pic.mv_y,
                pic.ref_idx,
                pic.mb_slice_id,
                pic.mb_w,
                cur_slice_id,
                sx,
                sy + p,
                2,
                ref_i,
                0,
              )
              let mx = px + br.read_se()
              let my = py + br.read_se()
              set_mv_rect(pic, sx, sy + p, 2, 1, mx, my, ref_i, rf.pic_id)
              mc_partition(rf, pic, sx, sy + p, 2, 1, mx, my)
              sum_x += mx
              sum_y += my
              cnt += 1
            }
          2 =>
            // 4x8 (2 parts)
            for p = 0; p < 2; p = p + 1 {
              let (px, py) = predict_mv_l0(
                pic.mv_x,
                pic.mv_y,
                pic.ref_idx,
                pic.mb_slice_id,
                pic.mb_w,
                cur_slice_id,
                sx + p,
                sy,
                1,
                ref_i,
                0,
              )
              let mx = px + br.read_se()
              let my = py + br.read_se()
              set_mv_rect(pic, sx + p, sy, 1, 2, mx, my, ref_i, rf.pic_id)
              mc_partition(rf, pic, sx + p, sy, 1, 2, mx, my)
              sum_x += mx
              sum_y += my
              cnt += 1
            }
          _ =>
            // 4x4 (4 parts)
            for p = 0; p < 4; p = p + 1 {
              let px0 = sx + (p & 1)
              let py0 = sy + (p >> 1)
              let (px, py) = predict_mv_l0(
                pic.mv_x,
                pic.mv_y,
                pic.ref_idx,
                pic.mb_slice_id,
                pic.mb_w,
                cur_slice_id,
                px0,
                py0,
                1,
                ref_i,
                0,
              )
              let mx = px + br.read_se()
              let my = py + br.read_se()
              set_mv_rect(pic, px0, py0, 1, 1, mx, my, ref_i, rf.pic_id)
              mc_partition(rf, pic, px0, py0, 1, 1, mx, my)
              sum_x += mx
              sum_y += my
              cnt += 1
            }
        }
      }
      if cnt > 0 {
        rep_mvx = sum_x / cnt
        rep_mvy = sum_y / cnt
      }
      MbKind::P8x8
    }
  }
  let cbp = br.read_me(false)
  let cbp_luma = cbp & 15
  let cbp_chroma = cbp >> 4
  let mut qp = cur_qp
  if cbp_luma > 0 || cbp_chroma > 0 {
    let qp_delta = br.read_se()
    qp = ((qp + qp_delta) % 52 + 52) % 52
  }
  pic.mb_qp[mb_idx] = qp
  if cbp_luma > 0 {
    decode_luma_4x4_residual(br, pic, cur_slice_id, mb_x, mb_y, cbp_luma, qp)
  }
  if cbp_chroma > 0 {
    decode_chroma_residual(br, pic, cur_slice_id, mb_x, mb_y, cbp_chroma, qp)
  }
  (qp, kind, rep_mvx, rep_mvy)
}

///|
fn decode_slice_data(
  br : BitReader,
  pic : ActivePicture,
  hdr : SliceHeader,
  cur_slice_id : Int32,
  ref_list : Array[RefFrame],
) -> Unit raise H264Error {
  let num_mbs = pic.mb_w * pic.mb_h
  let mut mb_addr = hdr.first_mb_in_slice
  let mut cur_qp = hdr.slice_qp_y
  let is_i = hdr.is_i_slice()
  while mb_addr < num_mbs {
    if !is_i {
      let skip_run = br.read_ue()
      for _s = 0; _s < skip_run; _s = _s + 1 {
        if mb_addr >= num_mbs {
          return
        }
        let mx = mb_addr % pic.mb_w
        let my = mb_addr / pic.mb_w
        pic.mb_disable_deblock[mb_addr] = hdr.disable_deblocking_filter_idc
        pic.mb_alpha_off[mb_addr] = hdr.slice_alpha_c0_offset_div2
        pic.mb_beta_off[mb_addr] = hdr.slice_beta_offset_div2
        decode_p_skip_mb(pic, cur_slice_id, mx, my, cur_qp, ref_list)
        mb_addr += 1
      }
      if mb_addr >= num_mbs || !br.more_rbsp_data() {
        return
      }
    }
    let bit_start = br.position()
    let mx = mb_addr % pic.mb_w
    let my = mb_addr / pic.mb_w
    pic.mb_slice_id[mb_addr] = cur_slice_id
    pic.mb_disable_deblock[mb_addr] = hdr.disable_deblocking_filter_idc
    pic.mb_alpha_off[mb_addr] = hdr.slice_alpha_c0_offset_div2
    pic.mb_beta_off[mb_addr] = hdr.slice_beta_offset_div2
    let mb_type = br.read_ue()
    if is_i {
      let (new_qp, kind, imode) = decode_intra_mb(
        br, pic, cur_slice_id, mx, my, mb_type, cur_qp,
      )
      cur_qp = new_qp
      pic.mbs[mb_addr] = {
        mb_x: mx,
        mb_y: my,
        kind,
        qp: cur_qp,
        bits: br.position() - bit_start,
        mv_x: 0,
        mv_y: 0,
        intra_mode: imode,
      }
    } else if mb_type >= 5 {
      // Intra MB inside a P-slice (I_4x4 = 5, I_16x16 = 6..29, I_PCM = 30)
      let (new_qp, kind, imode) = decode_intra_mb(
        br,
        pic,
        cur_slice_id,
        mx,
        my,
        mb_type - 5,
        cur_qp,
      )
      cur_qp = new_qp
      pic.mbs[mb_addr] = {
        mb_x: mx,
        mb_y: my,
        kind,
        qp: cur_qp,
        bits: br.position() - bit_start,
        mv_x: 0,
        mv_y: 0,
        intra_mode: imode,
      }
    } else {
      let (new_qp, kind, mvx, mvy) = decode_p_inter_mb(
        br, pic, hdr, cur_slice_id, mx, my, mb_type, cur_qp, ref_list,
      )
      cur_qp = new_qp
      pic.mbs[mb_addr] = {
        mb_x: mx,
        mb_y: my,
        kind,
        qp: cur_qp,
        bits: br.position() - bit_start,
        mv_x: mvx,
        mv_y: mvy,
        intra_mode: -1,
      }
    }
    mb_addr += 1
    if !br.more_rbsp_data() {
      break
    }
  }
}

///|
/// Push a single parsed NAL unit into the decoder; returns a completed DecodedFrame if this NALU
/// closed a previous picture.
pub fn H264Decoder::push_nalu(
  self : H264Decoder,
  nalu : NalUnit,
) -> DecodedFrame? raise H264Error {
  match nalu.nal_unit_type {
    7 => {
      let sps = parse_sps(nalu.rbsp)
      self.sps_map[sps.sps_id] = sps
      None
    }
    8 => {
      let pps = parse_pps(nalu.rbsp)
      self.pps_map[pps.pps_id] = pps
      None
    }
    1 | 5 => {
      let br = BitReader::new(nalu.rbsp)
      let (hdr, sps, pps) = parse_slice_header(
        br,
        nalu.nal_unit_type,
        nalu.nal_ref_idc,
        self.sps_map,
        self.pps_map,
      )
      // Detect whether this slice starts a new picture
      let mut emitted : DecodedFrame? = None
      let is_new_pic = match self.active {
        None => true
        Some(prev) =>
          hdr.first_mb_in_slice == 0 ||
          hdr.frame_num != prev.frame_num ||
          hdr.is_idr != prev.is_idr ||
          (hdr.is_idr && hdr.idr_pic_id != prev.idr_pic_id)
      }
      if is_new_pic {
        emitted = self.finalize_active()
        self.active = Some(ActivePicture::new(sps, pps, hdr, nalu.raw_size))
      } else {
        match self.active {
          Some(p) => p.nal_bytes += nalu.raw_size
          None => ()
        }
      }
      let pic = match self.active {
        Some(p) => p
        None => raise H264Error::InvalidSyntax("no active picture")
      }
      self.slice_counter += 1
      let slice_id = self.slice_counter
      let ref_list = if hdr.is_p_slice() {
        build_ref_list_l0(self.dpb, sps, hdr)
      } else {
        []
      }
      decode_slice_data(br, pic, hdr, slice_id, ref_list)
      emitted
    }
    // SEI, AUD, Filler, End of Sequence/Stream: ignore gracefully
    6 | 9 | 10 | 11 | 12 => None
    _ => None
  }
}

///|
/// Flush any remaining in-progress picture at end of stream.
pub fn H264Decoder::flush(self : H264Decoder) -> DecodedFrame? {
  self.finalize_active()
}

///|
/// Decode a complete Annex B H.264 byte stream into all frames and structural metadata.
pub fn decode_annexb(data : Bytes) -> DecodeResult raise H264Error {
  let nalus = extract_annexb_nalus(data)
  let dec = H264Decoder::new()
  let sps_list : Array[Sps] = []
  let pps_list : Array[Pps] = []
  let frames : Array[DecodedFrame] = []
  for nalu in nalus {
    if nalu.nal_unit_type == 7 {
      sps_list.push(parse_sps(nalu.rbsp))
    } else if nalu.nal_unit_type == 8 {
      pps_list.push(parse_pps(nalu.rbsp))
    }
    match dec.push_nalu(nalu) {
      Some(f) => frames.push(f)
      None => ()
    }
  }
  match dec.flush() {
    Some(f) => frames.push(f)
    None => ()
  }
  { nalus, sps_list, pps_list, frames, }
}
