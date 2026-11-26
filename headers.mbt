///|
/// Sequence Parameter Set (SPS) parsed from NALU type 7.
pub struct Sps {
  sps_id : Int32
  profile_idc : Int32
  constraint_set_flags : Int32
  level_idc : Int32
  chroma_format_idc : Int32
  bit_depth_luma : Int32
  bit_depth_chroma : Int32
  log2_max_frame_num : Int32
  pic_order_cnt_type : Int32
  log2_max_pic_order_cnt_lsb : Int32
  delta_pic_order_always_zero_flag : Bool
  offset_for_non_ref_pic : Int32
  offset_for_top_to_bottom_field : Int32
  offset_for_ref_frame : Array[Int32]
  max_num_ref_frames : Int32
  gaps_in_frame_num_allowed : Bool
  pic_width_in_mbs : Int32
  pic_height_in_mbs : Int32
  frame_mbs_only_flag : Bool
  direct_8x8_inference_flag : Bool
  frame_cropping_flag : Bool
  crop_left : Int32
  crop_right : Int32
  crop_top : Int32
  crop_bottom : Int32
  matrix_coefficients : Int32
}

///|
/// Cropped display width in pixels.
pub fn Sps::width(self : Sps) -> Int32 {
  let raw_w = self.pic_width_in_mbs * 16
  if self.frame_cropping_flag {
    raw_w - (self.crop_left + self.crop_right) * 2
  } else {
    raw_w
  }
}

///|
/// Cropped display height in pixels.
pub fn Sps::height(self : Sps) -> Int32 {
  let raw_h = self.pic_height_in_mbs * 16
  if self.frame_cropping_flag {
    raw_h - (self.crop_top + self.crop_bottom) * 2
  } else {
    raw_h
  }
}

///|
/// Picture Parameter Set (PPS) parsed from NALU type 8.
pub struct Pps {
  pps_id : Int32
  sps_id : Int32
  entropy_coding_mode_flag : Bool
  bottom_field_pic_order_in_frame_present_flag : Bool
  num_slice_groups_minus1 : Int32
  num_ref_idx_l0_default_active_minus1 : Int32
  num_ref_idx_l1_default_active_minus1 : Int32
  weighted_pred_flag : Bool
  weighted_bipred_idc : Int32
  pic_init_qp_minus26 : Int32
  pic_init_qs_minus26 : Int32
  chroma_qp_index_offset : Int32
  deblocking_filter_control_present_flag : Bool
  constrained_intra_pred_flag : Bool
  redundant_pic_cnt_present_flag : Bool
}

///|
/// Reference picture list modification command (L0).
pub struct RefPicListMod {
  idc : Int32
  value : Int32
}

///|
/// Memory Management Control Operation (MMCO) command.
pub struct MmcoOp {
  op : Int32
  arg1 : Int32
  arg2 : Int32
}

///|
/// Slice Header parsed from NALU type 1 (non-IDR) or type 5 (IDR).
pub struct SliceHeader {
  first_mb_in_slice : Int32
  slice_type : Int32 // normalized mod 5: 0=P, 1=B, 2=I
  pps_id : Int32
  frame_num : Int32
  is_idr : Bool
  nal_ref_idc : Int32
  idr_pic_id : Int32
  pic_order_cnt_lsb : Int32
  delta_pic_order_cnt_0 : Int32
  delta_pic_order_cnt_1 : Int32
  num_ref_idx_l0_active : Int32
  ref_pic_list_mods_l0 : Array[RefPicListMod]
  no_output_of_prior_pics_flag : Bool
  long_term_reference_flag : Bool
  adaptive_ref_pic_marking_mode_flag : Bool
  mmco_ops : Array[MmcoOp]
  slice_qp_y : Int32
  disable_deblocking_filter_idc : Int32
  slice_alpha_c0_offset_div2 : Int32
  slice_beta_offset_div2 : Int32
}

///|
pub fn SliceHeader::is_i_slice(self : SliceHeader) -> Bool {
  self.slice_type == 2 || self.slice_type == 4
}

///|
pub fn SliceHeader::is_p_slice(self : SliceHeader) -> Bool {
  self.slice_type == 0 || self.slice_type == 3
}

///|
fn skip_scaling_list(br : BitReader, size : Int32) -> Unit raise H264Error {
  let mut last_scale = 8
  let mut next_scale = 8
  for _j = 0; _j < size; _j = _j + 1 {
    if next_scale != 0 {
      let delta_scale = br.read_se()
      next_scale = (last_scale + delta_scale + 256) % 256
    }
    if next_scale != 0 {
      last_scale = next_scale
    }
  }
}

///|
fn is_high_profile(profile_idc : Int32) -> Bool {
  profile_idc == 100 ||
  profile_idc == 110 ||
  profile_idc == 122 ||
  profile_idc == 244 ||
  profile_idc == 44 ||
  profile_idc == 83 ||
  profile_idc == 86 ||
  profile_idc == 118 ||
  profile_idc == 128 ||
  profile_idc == 138 ||
  profile_idc == 139 ||
  profile_idc == 134 ||
  profile_idc == 135
}

///|
/// Parse an SPS from its RBSP bytes (ITU-T H.264 §7.3.2.1.1).
pub fn parse_sps(rbsp : Bytes) -> Sps raise H264Error {
  let br = BitReader::new(rbsp)
  let profile_idc = br.read_bits(8)
  let constraint_set_flags = br.read_bits(8)
  let level_idc = br.read_bits(8)
  let sps_id = br.read_ue()
  let mut chroma_format_idc = 1
  let mut bit_depth_luma = 8
  let mut bit_depth_chroma = 8
  if is_high_profile(profile_idc) {
    chroma_format_idc = br.read_ue()
    if chroma_format_idc == 3 {
      let _ = br.read_bit() // separate_colour_plane_flag
    }
    bit_depth_luma = br.read_ue() + 8
    bit_depth_chroma = br.read_ue() + 8
    let _ = br.read_bit() // qpprime_y_zero_transform_bypass_flag
    let seq_scaling_matrix_present_flag = br.read_bit()
    if seq_scaling_matrix_present_flag != 0 {
      let count = if chroma_format_idc != 3 { 8 } else { 12 }
      for i = 0; i < count; i = i + 1 {
        if br.read_bit() != 0 {
          skip_scaling_list(br, if i < 6 { 16 } else { 64 })
        }
      }
    }
  }
  let log2_max_frame_num = br.read_ue() + 4
  let pic_order_cnt_type = br.read_ue()
  let mut log2_max_pic_order_cnt_lsb = 4
  let mut delta_pic_order_always_zero_flag = false
  let mut offset_for_non_ref_pic = 0
  let mut offset_for_top_to_bottom_field = 0
  let offset_for_ref_frame : Array[Int32] = []
  if pic_order_cnt_type == 0 {
    log2_max_pic_order_cnt_lsb = br.read_ue() + 4
  } else if pic_order_cnt_type == 1 {
    delta_pic_order_always_zero_flag = br.read_bit() != 0
    offset_for_non_ref_pic = br.read_se()
    offset_for_top_to_bottom_field = br.read_se()
    let num_ref = br.read_ue()
    for _i = 0; _i < num_ref; _i = _i + 1 {
      offset_for_ref_frame.push(br.read_se())
    }
  }
  let max_num_ref_frames = br.read_ue()
  let gaps_in_frame_num_allowed = br.read_bit() != 0
  let pic_width_in_mbs = br.read_ue() + 1
  let pic_height_in_map_units = br.read_ue() + 1
  let frame_mbs_only_flag = br.read_bit() != 0
  if !frame_mbs_only_flag {
    let _ = br.read_bit() // mb_adaptive_frame_field_flag
  }
  let pic_height_in_mbs = if frame_mbs_only_flag {
    pic_height_in_map_units
  } else {
    pic_height_in_map_units * 2
  }
  let direct_8x8_inference_flag = br.read_bit() != 0
  let frame_cropping_flag = br.read_bit() != 0
  let mut crop_left = 0
  let mut crop_right = 0
  let mut crop_top = 0
  let mut crop_bottom = 0
  if frame_cropping_flag {
    crop_left = br.read_ue()
    crop_right = br.read_ue()
    crop_top = br.read_ue()
    crop_bottom = br.read_ue()
  }
  let mut matrix_coefficients = 6 // default BT.601
  if br.remaining_bits() > 0 && br.read_bit() != 0 {
    // vui_parameters_present_flag: parse up to colour_description for matrix_coefficients
    if br.remaining_bits() > 0 && br.read_bit() != 0 {
      // aspect_ratio_info_present_flag
      let aspect_ratio_idc = br.read_bits(8)
      if aspect_ratio_idc == 255 {
        let _ = br.read_bits(16)
        let _ = br.read_bits(16)
      }
    }
    if br.remaining_bits() > 0 && br.read_bit() != 0 {
      // overscan_info_present_flag
      let _ = br.read_bit()
    }
    if br.remaining_bits() > 0 && br.read_bit() != 0 {
      // video_signal_type_present_flag
      let _ = br.read_bits(3) // video_format
      let _ = br.read_bit() // video_full_range_flag
      if br.read_bit() != 0 {
        // colour_description_present_flag
        let _ = br.read_bits(8) // colour_primaries
        let _ = br.read_bits(8) // transfer_characteristics
        matrix_coefficients = br.read_bits(8)
      }
    }
  }
  {
    sps_id,
    profile_idc,
    constraint_set_flags,
    level_idc,
    chroma_format_idc,
    bit_depth_luma,
    bit_depth_chroma,
    log2_max_frame_num,
    pic_order_cnt_type,
    log2_max_pic_order_cnt_lsb,
    delta_pic_order_always_zero_flag,
    offset_for_non_ref_pic,
    offset_for_top_to_bottom_field,
    offset_for_ref_frame,
    max_num_ref_frames,
    gaps_in_frame_num_allowed,
    pic_width_in_mbs,
    pic_height_in_mbs,
    frame_mbs_only_flag,
    direct_8x8_inference_flag,
    frame_cropping_flag,
    crop_left,
    crop_right,
    crop_top,
    crop_bottom,
    matrix_coefficients,
  }
}

///|
/// Parse a PPS from its RBSP bytes (ITU-T H.264 §7.3.2.2).
pub fn parse_pps(rbsp : Bytes) -> Pps raise H264Error {
  let br = BitReader::new(rbsp)
  let pps_id = br.read_ue()
  let sps_id = br.read_ue()
  let entropy_coding_mode_flag = br.read_bit() != 0
  let bottom_field_pic_order_in_frame_present_flag = br.read_bit() != 0
  let num_slice_groups_minus1 = br.read_ue()
  if num_slice_groups_minus1 > 0 {
    raise H264Error::UnsupportedFeature(
      "FMO slice groups (num_slice_groups_minus1=\{num_slice_groups_minus1}) not supported in 0.1.0",
    )
  }
  let num_ref_idx_l0_default_active_minus1 = br.read_ue()
  let num_ref_idx_l1_default_active_minus1 = br.read_ue()
  let weighted_pred_flag = br.read_bit() != 0
  let weighted_bipred_idc = br.read_bits(2)
  let pic_init_qp_minus26 = br.read_se()
  let pic_init_qs_minus26 = br.read_se()
  let chroma_qp_index_offset = br.read_se()
  let deblocking_filter_control_present_flag = br.read_bit() != 0
  let constrained_intra_pred_flag = br.read_bit() != 0
  let redundant_pic_cnt_present_flag = br.read_bit() != 0
  {
    pps_id,
    sps_id,
    entropy_coding_mode_flag,
    bottom_field_pic_order_in_frame_present_flag,
    num_slice_groups_minus1,
    num_ref_idx_l0_default_active_minus1,
    num_ref_idx_l1_default_active_minus1,
    weighted_pred_flag,
    weighted_bipred_idc,
    pic_init_qp_minus26,
    pic_init_qs_minus26,
    chroma_qp_index_offset,
    deblocking_filter_control_present_flag,
    constrained_intra_pred_flag,
    redundant_pic_cnt_present_flag,
  }
}

///|
/// Parse a Slice Header from a BitReader positioned at the start of a slice RBSP (ITU-T H.264 §7.3.3).
pub fn parse_slice_header(
  br : BitReader,
  nal_unit_type : Int32,
  nal_ref_idc : Int32,
  sps_map : Map[Int32, Sps],
  pps_map : Map[Int32, Pps],
) -> (SliceHeader, Sps, Pps) raise H264Error {
  let first_mb_in_slice = br.read_ue()
  let raw_slice_type = br.read_ue()
  let slice_type = raw_slice_type % 5
  if slice_type == 1 {
    raise H264Error::UnsupportedFeature(
      "B-slices are planned for 0.2.0 (Constrained Baseline 0.1.0 supports I/P slices)",
    )
  }
  let pps_id = br.read_ue()
  let pps = match pps_map.get(pps_id) {
    Some(p) => p
    None => raise H264Error::MissingParameterSet("PPS \{pps_id} not found")
  }
  if pps.entropy_coding_mode_flag {
    raise H264Error::UnsupportedProfile(
      "CABAC entropy coding is planned for 0.2.0 (0.1.0 supports CAVLC Constrained Baseline)",
    )
  }
  let sps = match sps_map.get(pps.sps_id) {
    Some(s) => s
    None => raise H264Error::MissingParameterSet("SPS \{pps.sps_id} not found")
  }
  if !sps.frame_mbs_only_flag {
    raise H264Error::UnsupportedFeature(
      "Interlaced field/MBAFF coding not supported in Constrained Baseline 0.1.0",
    )
  }
  if sps.chroma_format_idc != 1 || sps.bit_depth_luma != 8 {
    raise H264Error::UnsupportedProfile(
      "Only 4:2:0 8-bit video is supported in 0.1.0",
    )
  }
  let frame_num = br.read_bits(sps.log2_max_frame_num)
  let is_idr = nal_unit_type == 5
  let idr_pic_id = if is_idr { br.read_ue() } else { 0 }
  let mut pic_order_cnt_lsb = 0
  let mut delta_pic_order_cnt_0 = 0
  let mut delta_pic_order_cnt_1 = 0
  if sps.pic_order_cnt_type == 0 {
    pic_order_cnt_lsb = br.read_bits(sps.log2_max_pic_order_cnt_lsb)
    if pps.bottom_field_pic_order_in_frame_present_flag {
      let _ = br.read_se()
    }
  } else if sps.pic_order_cnt_type == 1 && !sps.delta_pic_order_always_zero_flag {
    delta_pic_order_cnt_0 = br.read_se()
    if pps.bottom_field_pic_order_in_frame_present_flag {
      delta_pic_order_cnt_1 = br.read_se()
    }
  }
  if pps.redundant_pic_cnt_present_flag {
    let _ = br.read_ue()
  }
  let mut num_ref_idx_l0_active = pps.num_ref_idx_l0_default_active_minus1 + 1
  if slice_type == 0 || slice_type == 3 {
    let override_flag = br.read_bit()
    if override_flag != 0 {
      num_ref_idx_l0_active = br.read_ue() + 1
    }
  }
  // ref_pic_list_modification()
  let ref_pic_list_mods_l0 : Array[RefPicListMod] = []
  if slice_type != 2 && slice_type != 4 {
    if br.read_bit() != 0 {
      while true {
        let idc = br.read_ue()
        if idc == 3 {
          break
        }
        let val = br.read_ue()
        ref_pic_list_mods_l0.push({ idc, value: val, })
      }
    }
  }
  // dec_ref_pic_marking()
  let mut no_output_of_prior_pics_flag = false
  let mut long_term_reference_flag = false
  let mut adaptive_ref_pic_marking_mode_flag = false
  let mmco_ops : Array[MmcoOp] = []
  if nal_ref_idc != 0 {
    if is_idr {
      no_output_of_prior_pics_flag = br.read_bit() != 0
      long_term_reference_flag = br.read_bit() != 0
    } else {
      adaptive_ref_pic_marking_mode_flag = br.read_bit() != 0
      if adaptive_ref_pic_marking_mode_flag {
        while true {
          let op = br.read_ue()
          if op == 0 {
            break
          }
          match op {
            1 | 2 | 4 | 6 => {
              let arg1 = br.read_ue()
              mmco_ops.push({ op, arg1, arg2: 0, })
            }
            3 => {
              let arg1 = br.read_ue()
              let arg2 = br.read_ue()
              mmco_ops.push({ op, arg1, arg2, })
            }
            5 => mmco_ops.push({ op, arg1: 0, arg2: 0, })
            _ => raise H264Error::InvalidSyntax("Unknown MMCO operation \{op}")
          }
        }
      }
    }
  }
  let slice_qp_delta = br.read_se()
  let slice_qp_y = 26 + pps.pic_init_qp_minus26 + slice_qp_delta
  let mut disable_deblocking_filter_idc = 0
  let mut slice_alpha_c0_offset_div2 = 0
  let mut slice_beta_offset_div2 = 0
  if pps.deblocking_filter_control_present_flag {
    disable_deblocking_filter_idc = br.read_ue()
    if disable_deblocking_filter_idc != 1 {
      slice_alpha_c0_offset_div2 = br.read_se()
      slice_beta_offset_div2 = br.read_se()
    }
  }
  let header : SliceHeader = {
    first_mb_in_slice,
    slice_type,
    pps_id,
    frame_num,
    is_idr,
    nal_ref_idc,
    idr_pic_id,
    pic_order_cnt_lsb,
    delta_pic_order_cnt_0,
    delta_pic_order_cnt_1,
    num_ref_idx_l0_active,
    ref_pic_list_mods_l0,
    no_output_of_prior_pics_flag,
    long_term_reference_flag,
    adaptive_ref_pic_marking_mode_flag,
    mmco_ops,
    slice_qp_y,
    disable_deblocking_filter_idc,
    slice_alpha_c0_offset_div2,
    slice_beta_offset_div2,
  }
  (header, sps, pps)
}
