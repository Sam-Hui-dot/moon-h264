///|
/// Render a human-readable probe summary of an H.264 stream (NALUs, SPS, PPS, Frames).
pub fn render_probe_text(res : DecodeResult) -> String {
  let sb = StringBuilder()
  sb.write_string("moon-h264 stream probe\n")
  sb.write_string("======================\n")
  sb.write_string("NAL units: \{res.nalus.length()}\n")
  sb.write_string("SPS count: \{res.sps_list.length()}\n")
  for s in res.sps_list {
    sb.write_string(
      "  SPS[\{s.sps_id}]: profile_idc=\{s.profile_idc} level_idc=\{s.level_idc} \{s.width()}x\{s.height()} (\{s.pic_width_in_mbs}x\{s.pic_height_in_mbs} MBs) max_refs=\{s.max_num_ref_frames} poc_type=\{s.pic_order_cnt_type} crop=(\{s.crop_left},\{s.crop_right},\{s.crop_top},\{s.crop_bottom})\n",
    )
  }
  sb.write_string("PPS count: \{res.pps_list.length()}\n")
  for p in res.pps_list {
    let ent = if p.entropy_coding_mode_flag { "CABAC" } else { "CAVLC" }
    sb.write_string(
      "  PPS[\{p.pps_id}]->SPS[\{p.sps_id}]: \{ent} init_qp=\{26 + p.pic_init_qp_minus26} chroma_qp_off=\{p.chroma_qp_index_offset} deblock_ctrl=\{p.deblocking_filter_control_present_flag}\n",
    )
  }
  sb.write_string("Decoded frames: \{res.frames.length()}\n")
  for f in res.frames {
    let m = f.meta
    let mut i4 = 0
    let mut i16 = 0
    let mut pskip = 0
    let mut pinter = 0
    for mb in m.mbs {
      match mb.kind {
        MbKind::I4x4 => i4 += 1
        MbKind::I16x16 | MbKind::IPcm => i16 += 1
        MbKind::PSkip => pskip += 1
        _ => pinter += 1
      }
    }
    let idr = if m.is_idr { "IDR" } else { "   " }
    sb.write_string(
      "  Frame #\{m.frame_index} \{m.slice_type} \{idr} fn=\{m.frame_num} \{m.width}x\{m.height} qp=\{m.slice_qp} bytes=\{m.nal_bytes} MBs(I4=\{i4},I16=\{i16},P=\{pinter},Skip=\{pskip})\n",
    )
  }
  sb.to_string()
}

///|
/// Render a structured JSON summary of the decoded stream (without raw pixel buffers).
pub fn render_probe_json(res : DecodeResult) -> String {
  let nalu_arr : Array[@json.Json] = []
  for n in res.nalus {
    nalu_arr.push(
      @json.Json::object({
        "type": @json.ToJson::to_json(n.nal_unit_type),
        "name": @json.ToJson::to_json(nal_unit_type_name(n.nal_unit_type)),
        "nal_ref_idc": @json.ToJson::to_json(n.nal_ref_idc),
        "offset": @json.ToJson::to_json(n.byte_offset),
        "size": @json.ToJson::to_json(n.raw_size),
      }),
    )
  }
  let sps_arr : Array[@json.Json] = []
  for s in res.sps_list {
    sps_arr.push(
      @json.Json::object({
        "sps_id": @json.ToJson::to_json(s.sps_id),
        "profile_idc": @json.ToJson::to_json(s.profile_idc),
        "level_idc": @json.ToJson::to_json(s.level_idc),
        "width": @json.ToJson::to_json(s.width()),
        "height": @json.ToJson::to_json(s.height()),
        "mb_w": @json.ToJson::to_json(s.pic_width_in_mbs),
        "mb_h": @json.ToJson::to_json(s.pic_height_in_mbs),
        "max_num_ref_frames": @json.ToJson::to_json(s.max_num_ref_frames),
        "poc_type": @json.ToJson::to_json(s.pic_order_cnt_type),
      }),
    )
  }
  let frame_arr : Array[@json.Json] = []
  for f in res.frames {
    let m = f.meta
    let mb_arr : Array[@json.Json] = []
    for mb in m.mbs {
      mb_arr.push(
        @json.Json::object({
          "x": @json.ToJson::to_json(mb.mb_x),
          "y": @json.ToJson::to_json(mb.mb_y),
          "kind": @json.ToJson::to_json(mb.kind.label()),
          "qp": @json.ToJson::to_json(mb.qp),
          "bits": @json.ToJson::to_json(mb.bits),
          "mvx": @json.ToJson::to_json(mb.mv_x),
          "mvy": @json.ToJson::to_json(mb.mv_y),
          "imode": @json.ToJson::to_json(mb.intra_mode),
        }),
      )
    }
    frame_arr.push(
      @json.Json::object({
        "index": @json.ToJson::to_json(m.frame_index),
        "frame_num": @json.ToJson::to_json(m.frame_num),
        "is_idr": @json.ToJson::to_json(m.is_idr),
        "slice_type": @json.ToJson::to_json(m.slice_type),
        "width": @json.ToJson::to_json(m.width),
        "height": @json.ToJson::to_json(m.height),
        "mb_w": @json.ToJson::to_json(m.mb_w),
        "mb_h": @json.ToJson::to_json(m.mb_h),
        "slice_qp": @json.ToJson::to_json(m.slice_qp),
        "nal_bytes": @json.ToJson::to_json(m.nal_bytes),
        "mbs": @json.Json::array(mb_arr),
      }),
    )
  }
  @json.Json::object({
    "nalus": @json.Json::array(nalu_arr),
    "sps": @json.Json::array(sps_arr),
    "frame_count": @json.ToJson::to_json(res.frames.length()),
    "frames": @json.Json::array(frame_arr),
  }).stringify()
}
