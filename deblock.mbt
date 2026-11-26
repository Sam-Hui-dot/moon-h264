///|
/// ITU-T H.264 Table 8-16: alpha threshold indexed by indexA (0..51).
let alpha_table : FixedArray[Int32] = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 5, 6, 7, 8, 9, 10, 12, 13,
  15, 17, 20, 22, 25, 28, 32, 36, 40, 45, 50, 56, 63, 71, 80, 90, 101, 113, 127,
  144, 162, 182, 203, 226, 255, 255,
]

///|
/// ITU-T H.264 Table 8-16: beta threshold indexed by indexB (0..51).
let beta_table : FixedArray[Int32] = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 6,
  6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17,
  17, 18, 18,
]

///|
/// ITU-T H.264 Table 8-16: tC0 clipping values [indexA * 3 + (bS - 1)].
let tc0_table : FixedArray[Int32] = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 3, 1, 2, 3, 2, 2, 3, 2, 2, 4, 2, 3, 4,
  2, 3, 4, 3, 3, 5, 3, 4, 6, 3, 4, 6, 4, 5, 7, 4, 5, 8, 4, 6, 9, 5, 7, 10, 6, 8,
  11, 6, 8, 13, 7, 10, 14, 8, 11, 16, 9, 12, 18, 10, 13, 20, 11, 15, 23, 13, 17,
  25,
]

///|
/// Filter a single 1D sample line across a Luma edge (step = 1 for vertical edge, stride for horizontal edge).
fn filter_luma_line(
  plane : FixedArray[Byte],
  q0_idx : Int32,
  step : Int32,
  bs : Int32,
  alpha : Int32,
  beta : Int32,
  tc0 : Int32,
) -> Unit {
  let p0 = plane[q0_idx - step].to_int()
  let p1 = plane[q0_idx - 2 * step].to_int()
  let q0 = plane[q0_idx].to_int()
  let q1 = plane[q0_idx + step].to_int()
  if abs_int(p0 - q0) >= alpha ||
    abs_int(p1 - p0) >= beta ||
    abs_int(q1 - q0) >= beta {
    return
  }
  let p2 = plane[q0_idx - 3 * step].to_int()
  let q2 = plane[q0_idx + 2 * step].to_int()
  let ap = abs_int(p2 - p0) < beta
  let aq = abs_int(q2 - q0) < beta
  if bs < 4 {
    let tc = tc0 + (if ap { 1 } else { 0 }) + (if aq { 1 } else { 0 })
    let delta = clamp_int((((q0 - p0) << 2) + (p1 - q1) + 4) >> 3, -tc, tc)
    plane[q0_idx - step] = clip_u8(p0 + delta).to_byte()
    plane[q0_idx] = clip_u8(q0 - delta).to_byte()
    if ap {
      let dp1 = clamp_int(
        (p2 + ((p0 + q0 + 1) >> 1) - (p1 << 1)) >> 1,
        -tc0,
        tc0,
      )
      plane[q0_idx - 2 * step] = clip_u8(p1 + dp1).to_byte()
    }
    if aq {
      let dq1 = clamp_int(
        (q2 + ((p0 + q0 + 1) >> 1) - (q1 << 1)) >> 1,
        -tc0,
        tc0,
      )
      plane[q0_idx + step] = clip_u8(q1 + dq1).to_byte()
    }
  } else {
    // Strong filter (bS == 4)
    let small_gap = abs_int(p0 - q0) < (alpha >> 2) + 2
    if ap && small_gap {
      let p3 = plane[q0_idx - 4 * step].to_int()
      plane[q0_idx - step] = ((p2 + 2 * p1 + 2 * p0 + 2 * q0 + q1 + 4) >> 3).to_byte()
      plane[q0_idx - 2 * step] = ((p2 + p1 + p0 + q0 + 2) >> 2).to_byte()
      plane[q0_idx - 3 * step] = ((2 * p3 + 3 * p2 + p1 + p0 + q0 + 4) >> 3).to_byte()
    } else {
      plane[q0_idx - step] = ((2 * p1 + p0 + q1 + 2) >> 2).to_byte()
    }
    if aq && small_gap {
      let q3 = plane[q0_idx + 3 * step].to_int()
      plane[q0_idx] = ((p1 + 2 * p0 + 2 * q0 + 2 * q1 + q2 + 4) >> 3).to_byte()
      plane[q0_idx + step] = ((p0 + q0 + q1 + q2 + 2) >> 2).to_byte()
      plane[q0_idx + 2 * step] = ((2 * q3 + 3 * q2 + q1 + q0 + p0 + 4) >> 3).to_byte()
    } else {
      plane[q0_idx] = ((2 * q1 + q0 + p1 + 2) >> 2).to_byte()
    }
  }
}

///|
/// Filter a single 1D sample line across a Chroma edge.
fn filter_chroma_line(
  plane : FixedArray[Byte],
  q0_idx : Int32,
  step : Int32,
  bs : Int32,
  alpha : Int32,
  beta : Int32,
  tc0 : Int32,
) -> Unit {
  let p0 = plane[q0_idx - step].to_int()
  let p1 = plane[q0_idx - 2 * step].to_int()
  let q0 = plane[q0_idx].to_int()
  let q1 = plane[q0_idx + step].to_int()
  if abs_int(p0 - q0) >= alpha ||
    abs_int(p1 - p0) >= beta ||
    abs_int(q1 - q0) >= beta {
    return
  }
  if bs < 4 {
    let tc = tc0 + 1
    let delta = clamp_int((((q0 - p0) << 2) + (p1 - q1) + 4) >> 3, -tc, tc)
    plane[q0_idx - step] = clip_u8(p0 + delta).to_byte()
    plane[q0_idx] = clip_u8(q0 - delta).to_byte()
  } else {
    plane[q0_idx - step] = ((2 * p1 + p0 + q1 + 2) >> 2).to_byte()
    plane[q0_idx] = ((2 * q1 + q0 + p1 + 2) >> 2).to_byte()
  }
}

///|
/// Compute boundary strength bS (0..4) between 4x4 block `p` and `q` (ITU-T H.264 §8.7.2.1).
fn compute_bs(
  mb_is_intra : FixedArray[Bool],
  mb_w : Int32,
  nnz_luma : FixedArray[Int32],
  mv_x : FixedArray[Int32],
  mv_y : FixedArray[Int32],
  ref_pic_id : FixedArray[Int32],
  px : Int32,
  py : Int32,
  qx : Int32,
  qy : Int32,
  is_mb_edge : Bool,
) -> Int32 {
  let stride4 = mb_w * 4
  let p_mb = (py >> 2) * mb_w + (px >> 2)
  let q_mb = (qy >> 2) * mb_w + (qx >> 2)
  if mb_is_intra[p_mb] || mb_is_intra[q_mb] {
    return if is_mb_edge { 4 } else { 3 }
  }
  let p_idx = py * stride4 + px
  let q_idx = qy * stride4 + qx
  if nnz_luma[p_idx] > 0 || nnz_luma[q_idx] > 0 {
    return 2
  }
  if ref_pic_id[p_idx] != ref_pic_id[q_idx] {
    return 1
  }
  if abs_int(mv_x[p_idx] - mv_x[q_idx]) >= 4 ||
    abs_int(mv_y[p_idx] - mv_y[q_idx]) >= 4 {
    return 1
  }
  0
}

///|
/// Run the full ITU-T H.264 §8.7 in-loop deblocking filter over an entire decoded frame.
pub fn deblock_frame(
  y_plane : FixedArray[Byte],
  u_plane : FixedArray[Byte],
  v_plane : FixedArray[Byte],
  mb_w : Int32,
  mb_h : Int32,
  mb_is_intra : FixedArray[Bool],
  mb_qp : FixedArray[Int32],
  mb_slice_id : FixedArray[Int32],
  mb_disable_deblock : FixedArray[Int32],
  mb_alpha_off : FixedArray[Int32],
  mb_beta_off : FixedArray[Int32],
  chroma_qp_offset : Int32,
  nnz_luma : FixedArray[Int32],
  mv_x : FixedArray[Int32],
  mv_y : FixedArray[Int32],
  ref_pic_id : FixedArray[Int32],
) -> Unit {
  let pic_w = mb_w * 16
  let cw = mb_w * 8
  for mb_y = 0; mb_y < mb_h; mb_y = mb_y + 1 {
    for mb_x = 0; mb_x < mb_w; mb_x = mb_x + 1 {
      let mb_idx = mb_y * mb_w + mb_x
      let idc = mb_disable_deblock[mb_idx]
      if idc == 1 {
        continue
      }
      let alpha_off = mb_alpha_off[mb_idx] * 2
      let beta_off = mb_beta_off[mb_idx] * 2
      let q_qp = mb_qp[mb_idx]
      let q_slice = mb_slice_id[mb_idx]
      let bx0 = mb_x * 4
      let by0 = mb_y * 4
      // 1. Vertical edges (edge = 0, 1, 2, 3 -> pixel x = mb_x*16 + edge*4)
      for edge = 0; edge < 4; edge = edge + 1 {
        if edge == 0 && mb_x == 0 {
          continue
        }
        let p_mb = if edge == 0 { mb_idx - 1 } else { mb_idx }
        if edge == 0 && idc == 2 && mb_slice_id[p_mb] != q_slice {
          continue
        }
        let p_qp = mb_qp[p_mb]
        let qp_av = (p_qp + q_qp + 1) >> 1
        let idx_a = clamp_int(qp_av + alpha_off, 0, 51)
        let idx_b = clamp_int(qp_av + beta_off, 0, 51)
        let alpha = alpha_table[idx_a]
        let beta = beta_table[idx_b]
        let is_mb_edge = edge == 0
        let qx_px = mb_x * 16 + edge * 4
        let bs_arr = FixedArray::make(4, 0)
        for seg = 0; seg < 4; seg = seg + 1 {
          let bs = compute_bs(
            mb_is_intra,
            mb_w,
            nnz_luma,
            mv_x,
            mv_y,
            ref_pic_id,
            bx0 + edge - 1,
            by0 + seg,
            bx0 + edge,
            by0 + seg,
            is_mb_edge,
          )
          bs_arr[seg] = bs
          if bs > 0 && (alpha > 0 || beta > 0) {
            let tc0 = if bs < 4 { tc0_table[idx_a * 3 + bs - 1] } else { 0 }
            let y_base = mb_y * 16 + seg * 4
            for line = 0; line < 4; line = line + 1 {
              filter_luma_line(
                y_plane,
                (y_base + line) * pic_w + qx_px,
                1,
                bs,
                alpha,
                beta,
                tc0,
              )
            }
          }
        }
        // Chroma vertical edges at edge == 0 and edge == 2
        if edge == 0 || edge == 2 {
          let p_qpc = chroma_qp_from_luma(p_qp, chroma_qp_offset)
          let q_qpc = chroma_qp_from_luma(q_qp, chroma_qp_offset)
          let qpc_av = (p_qpc + q_qpc + 1) >> 1
          let idx_ac = clamp_int(qpc_av + alpha_off, 0, 51)
          let idx_bc = clamp_int(qpc_av + beta_off, 0, 51)
          let alpha_c = alpha_table[idx_ac]
          let beta_c = beta_table[idx_bc]
          let cqx_px = mb_x * 8 + (edge >> 1) * 4
          for seg = 0; seg < 4; seg = seg + 1 {
            let bs = bs_arr[seg]
            if bs > 0 && (alpha_c > 0 || beta_c > 0) {
              let tc0_c = if bs < 4 {
                tc0_table[idx_ac * 3 + bs - 1]
              } else {
                0
              }
              let cy_base = mb_y * 8 + seg * 2
              for line = 0; line < 2; line = line + 1 {
                let idx = (cy_base + line) * cw + cqx_px
                filter_chroma_line(u_plane, idx, 1, bs, alpha_c, beta_c, tc0_c)
                filter_chroma_line(v_plane, idx, 1, bs, alpha_c, beta_c, tc0_c)
              }
            }
          }
        }
      }
      // 2. Horizontal edges (edge = 0, 1, 2, 3 -> pixel y = mb_y*16 + edge*4)
      for edge = 0; edge < 4; edge = edge + 1 {
        if edge == 0 && mb_y == 0 {
          continue
        }
        let p_mb = if edge == 0 { mb_idx - mb_w } else { mb_idx }
        if edge == 0 && idc == 2 && mb_slice_id[p_mb] != q_slice {
          continue
        }
        let p_qp = mb_qp[p_mb]
        let qp_av = (p_qp + q_qp + 1) >> 1
        let idx_a = clamp_int(qp_av + alpha_off, 0, 51)
        let idx_b = clamp_int(qp_av + beta_off, 0, 51)
        let alpha = alpha_table[idx_a]
        let beta = beta_table[idx_b]
        let is_mb_edge = edge == 0
        let qy_px = mb_y * 16 + edge * 4
        let bs_arr = FixedArray::make(4, 0)
        for seg = 0; seg < 4; seg = seg + 1 {
          let bs = compute_bs(
            mb_is_intra,
            mb_w,
            nnz_luma,
            mv_x,
            mv_y,
            ref_pic_id,
            bx0 + seg,
            by0 + edge - 1,
            bx0 + seg,
            by0 + edge,
            is_mb_edge,
          )
          bs_arr[seg] = bs
          if bs > 0 && (alpha > 0 || beta > 0) {
            let tc0 = if bs < 4 { tc0_table[idx_a * 3 + bs - 1] } else { 0 }
            let x_base = mb_x * 16 + seg * 4
            for line = 0; line < 4; line = line + 1 {
              filter_luma_line(
                y_plane,
                qy_px * pic_w + x_base + line,
                pic_w,
                bs,
                alpha,
                beta,
                tc0,
              )
            }
          }
        }
        // Chroma horizontal edges at edge == 0 and edge == 2
        if edge == 0 || edge == 2 {
          let p_qpc = chroma_qp_from_luma(p_qp, chroma_qp_offset)
          let q_qpc = chroma_qp_from_luma(q_qp, chroma_qp_offset)
          let qpc_av = (p_qpc + q_qpc + 1) >> 1
          let idx_ac = clamp_int(qpc_av + alpha_off, 0, 51)
          let idx_bc = clamp_int(qpc_av + beta_off, 0, 51)
          let alpha_c = alpha_table[idx_ac]
          let beta_c = beta_table[idx_bc]
          let cqy_px = mb_y * 8 + (edge >> 1) * 4
          for seg = 0; seg < 4; seg = seg + 1 {
            let bs = bs_arr[seg]
            if bs > 0 && (alpha_c > 0 || beta_c > 0) {
              let tc0_c = if bs < 4 {
                tc0_table[idx_ac * 3 + bs - 1]
              } else {
                0
              }
              let cx_base = mb_x * 8 + seg * 2
              for line = 0; line < 2; line = line + 1 {
                let idx = cqy_px * cw + cx_base + line
                filter_chroma_line(u_plane, idx, cw, bs, alpha_c, beta_c, tc0_c)
                filter_chroma_line(v_plane, idx, cw, bs, alpha_c, beta_c, tc0_c)
              }
            }
          }
        }
      }
    }
  }
}
