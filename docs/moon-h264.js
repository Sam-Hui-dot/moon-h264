const $reinterpret_view = new DataView(new ArrayBuffer(8));
function $i64_reinterpret_f64(a) {
  $reinterpret_view.setBigUint64(0, BigInt.asUintN(64, a), false);
  return $reinterpret_view.getFloat64(0, false);
}
function $oob() {
  throw new Error("Index out of bounds");
}
class $PanicError extends Error {}
function $panic(message) {
  throw new $PanicError(message);
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function _M0TPB4IterGUsRPC14json4JsonEE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB9ArrayViewGyE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $makebytes(a, b) {
  const arr = new Uint8Array(a);
  if (b !== 0) {
    arr.fill(b);
  }
  return arr;
}
function _M0TPB5ArrayGRP215Sam_2dHui_2ddot11moon_2dh2646MbMetaE(param0, param1) {
  this.buf = param0;
  this.len = param1;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function _M0TPB3MapGsRPC14json4JsonE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGsRPC14json4JsonE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB8MutLocalGORPB5EntryGsRPC14json4JsonEE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
const $bytes_literal$0 = new Uint8Array();
function _M0TPC16buffer6Buffer(param0, param1) {
  this.data = param0;
  this.len = param1;
}
function _M0DTPC14json4Json4Null() {}
_M0DTPC14json4Json4Null.prototype.$tag = 0;
function _M0DTPC14json4Json4True() {}
_M0DTPC14json4Json4True.prototype.$tag = 1;
const _M0DTPC14json4Json4True__ = new _M0DTPC14json4Json4True();
function _M0DTPC14json4Json5False() {}
_M0DTPC14json4Json5False.prototype.$tag = 2;
const _M0DTPC14json4Json5False__ = new _M0DTPC14json4Json5False();
function _M0DTPC14json4Json6Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json4Json6Number.prototype.$tag = 3;
function _M0DTPC14json4Json6String(param0) {
  this._0 = param0;
}
_M0DTPC14json4Json6String.prototype.$tag = 4;
function _M0DTPC14json4Json5Array(param0) {
  this._0 = param0;
}
_M0DTPC14json4Json5Array.prototype.$tag = 5;
function _M0DTPC14json4Json6Object(param0) {
  this._0 = param0;
}
_M0DTPC14json4Json6Object.prototype.$tag = 6;
function _M0TPB5ArrayGsE(param0, param1) {
  this.buf = param0;
  this.len = param1;
}
function _M0TPB5ArrayGRPC14json10WriteFrameE(param0, param1) {
  this.buf = param0;
  this.len = param1;
}
function _M0DTPC14json10WriteFrame5Array(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json10WriteFrame5Array.prototype.$tag = 0;
function _M0DTPC14json10WriteFrame6Object(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json10WriteFrame6Object.prototype.$tag = 1;
function _M0TPB5ArrayGiE(param0, param1) {
  this.buf = param0;
  this.len = param1;
}
function _M0TPB5ArrayGRP215Sam_2dHui_2ddot11moon_2dh2647NalUnitE(param0, param1) {
  this.buf = param0;
  this.len = param1;
}
function _M0TP215Sam_2dHui_2ddot11moon_2dh2647NalUnit(param0, param1, param2, param3, param4) {
  this.nal_ref_idc = param0;
  this.nal_unit_type = param1;
  this.byte_offset = param2;
  this.raw_size = param3;
  this.rbsp = param4;
}
function _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error57Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eUnexpectedEof(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error57Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eUnexpectedEof.prototype.$tag = 4;
function _M0DTPC15error5Error57Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eInvalidSyntax(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error57Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eInvalidSyntax.prototype.$tag = 3;
function _M0DTPC15error5Error62Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eUnsupportedProfile(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error62Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eUnsupportedProfile.prototype.$tag = 2;
function _M0DTPC15error5Error62Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eUnsupportedFeature(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error62Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eUnsupportedFeature.prototype.$tag = 1;
function _M0DTPC15error5Error63Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eMissingParameterSet(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error63Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eMissingParameterSet.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok.prototype.$tag = 1;
function _M0TP215Sam_2dHui_2ddot11moon_2dh2649BitReader(param0, param1, param2, param3) {
  this.data = param0;
  this.bit_pos = param1;
  this.total_bits = param2;
  this.stop_bit_pos = param3;
}
function _M0DTPC16result6ResultGRP215Sam_2dHui_2ddot11moon_2dh2643SpsRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP215Sam_2dHui_2ddot11moon_2dh2643SpsRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP215Sam_2dHui_2ddot11moon_2dh2643SpsRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP215Sam_2dHui_2ddot11moon_2dh2643SpsRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok.prototype.$tag = 1;
function _M0TP215Sam_2dHui_2ddot11moon_2dh2643Sps(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14, param15, param16, param17, param18, param19, param20, param21, param22, param23, param24, param25) {
  this.sps_id = param0;
  this.profile_idc = param1;
  this.constraint_set_flags = param2;
  this.level_idc = param3;
  this.chroma_format_idc = param4;
  this.bit_depth_luma = param5;
  this.bit_depth_chroma = param6;
  this.log2_max_frame_num = param7;
  this.pic_order_cnt_type = param8;
  this.log2_max_pic_order_cnt_lsb = param9;
  this.delta_pic_order_always_zero_flag = param10;
  this.offset_for_non_ref_pic = param11;
  this.offset_for_top_to_bottom_field = param12;
  this.offset_for_ref_frame = param13;
  this.max_num_ref_frames = param14;
  this.gaps_in_frame_num_allowed = param15;
  this.pic_width_in_mbs = param16;
  this.pic_height_in_mbs = param17;
  this.frame_mbs_only_flag = param18;
  this.direct_8x8_inference_flag = param19;
  this.frame_cropping_flag = param20;
  this.crop_left = param21;
  this.crop_right = param22;
  this.crop_top = param23;
  this.crop_bottom = param24;
  this.matrix_coefficients = param25;
}
function _M0DTPC16result6ResultGRP215Sam_2dHui_2ddot11moon_2dh2643PpsRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP215Sam_2dHui_2ddot11moon_2dh2643PpsRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP215Sam_2dHui_2ddot11moon_2dh2643PpsRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP215Sam_2dHui_2ddot11moon_2dh2643PpsRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok.prototype.$tag = 1;
function _M0TP215Sam_2dHui_2ddot11moon_2dh2643Pps(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14) {
  this.pps_id = param0;
  this.sps_id = param1;
  this.entropy_coding_mode_flag = param2;
  this.bottom_field_pic_order_in_frame_present_flag = param3;
  this.num_slice_groups_minus1 = param4;
  this.num_ref_idx_l0_default_active_minus1 = param5;
  this.num_ref_idx_l1_default_active_minus1 = param6;
  this.weighted_pred_flag = param7;
  this.weighted_bipred_idc = param8;
  this.pic_init_qp_minus26 = param9;
  this.pic_init_qs_minus26 = param10;
  this.chroma_qp_index_offset = param11;
  this.deblocking_filter_control_present_flag = param12;
  this.constrained_intra_pred_flag = param13;
  this.redundant_pic_cnt_present_flag = param14;
}
function _M0DTPC16result6ResultGURP215Sam_2dHui_2ddot11moon_2dh26411SliceHeaderRP215Sam_2dHui_2ddot11moon_2dh2643SpsRP215Sam_2dHui_2ddot11moon_2dh2643PpsERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURP215Sam_2dHui_2ddot11moon_2dh26411SliceHeaderRP215Sam_2dHui_2ddot11moon_2dh2643SpsRP215Sam_2dHui_2ddot11moon_2dh2643PpsERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGURP215Sam_2dHui_2ddot11moon_2dh26411SliceHeaderRP215Sam_2dHui_2ddot11moon_2dh2643SpsRP215Sam_2dHui_2ddot11moon_2dh2643PpsERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURP215Sam_2dHui_2ddot11moon_2dh26411SliceHeaderRP215Sam_2dHui_2ddot11moon_2dh2643SpsRP215Sam_2dHui_2ddot11moon_2dh2643PpsERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok.prototype.$tag = 1;
function _M0TPB5ArrayGRP215Sam_2dHui_2ddot11moon_2dh26413RefPicListModE(param0, param1) {
  this.buf = param0;
  this.len = param1;
}
function _M0TP215Sam_2dHui_2ddot11moon_2dh26413RefPicListMod(param0, param1) {
  this.idc = param0;
  this.value = param1;
}
function _M0TPB5ArrayGRP215Sam_2dHui_2ddot11moon_2dh2646MmcoOpE(param0, param1) {
  this.buf = param0;
  this.len = param1;
}
function _M0TP215Sam_2dHui_2ddot11moon_2dh2646MmcoOp(param0, param1, param2) {
  this.op = param0;
  this.arg1 = param1;
  this.arg2 = param2;
}
function _M0TP215Sam_2dHui_2ddot11moon_2dh26411SliceHeader(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14, param15, param16, param17, param18, param19) {
  this.first_mb_in_slice = param0;
  this.slice_type = param1;
  this.pps_id = param2;
  this.frame_num = param3;
  this.is_idr = param4;
  this.nal_ref_idc = param5;
  this.idr_pic_id = param6;
  this.pic_order_cnt_lsb = param7;
  this.delta_pic_order_cnt_0 = param8;
  this.delta_pic_order_cnt_1 = param9;
  this.num_ref_idx_l0_active = param10;
  this.ref_pic_list_mods_l0 = param11;
  this.no_output_of_prior_pics_flag = param12;
  this.long_term_reference_flag = param13;
  this.adaptive_ref_pic_marking_mode_flag = param14;
  this.mmco_ops = param15;
  this.slice_qp_y = param16;
  this.disable_deblocking_filter_idc = param17;
  this.slice_alpha_c0_offset_div2 = param18;
  this.slice_beta_offset_div2 = param19;
}
function _M0TP215Sam_2dHui_2ddot11moon_2dh26411H264Decoder(param0, param1, param2, param3, param4, param5, param6) {
  this.sps_map = param0;
  this.pps_map = param1;
  this.dpb = param2;
  this.next_pic_id = param3;
  this.frame_count = param4;
  this.slice_counter = param5;
  this.active = param6;
}
function _M0TPB9ArrayViewGUiRP215Sam_2dHui_2ddot11moon_2dh2643SpsEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUiRP215Sam_2dHui_2ddot11moon_2dh2643PpsEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB5ArrayGRP215Sam_2dHui_2ddot11moon_2dh2648RefFrameE(param0, param1) {
  this.buf = param0;
  this.len = param1;
}
function _M0TP215Sam_2dHui_2ddot11moon_2dh2646MbMeta(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.mb_x = param0;
  this.mb_y = param1;
  this.kind = param2;
  this.qp = param3;
  this.bits = param4;
  this.mv_x = param5;
  this.mv_y = param6;
  this.intra_mode = param7;
}
function _M0TP215Sam_2dHui_2ddot11moon_2dh26413ActivePicture(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14, param15, param16, param17, param18, param19, param20, param21, param22, param23, param24, param25, param26, param27, param28, param29, param30, param31, param32) {
  this.sps = param0;
  this.pps = param1;
  this.frame_num = param2;
  this.is_idr = param3;
  this.nal_ref_idc = param4;
  this.idr_pic_id = param5;
  this.slice_type = param6;
  this.slice_qp = param7;
  this.nal_bytes = param8;
  this.long_term_reference = param9;
  this.adaptive_marking = param10;
  this.mmco_ops = param11;
  this.mb_w = param12;
  this.mb_h = param13;
  this.y = param14;
  this.u = param15;
  this.v = param16;
  this.mb_is_intra = param17;
  this.mb_is_i4x4 = param18;
  this.mb_qp = param19;
  this.mb_slice_id = param20;
  this.mb_disable_deblock = param21;
  this.mb_alpha_off = param22;
  this.mb_beta_off = param23;
  this.nnz_luma = param24;
  this.nnz_cb = param25;
  this.nnz_cr = param26;
  this.intra4x4_mode = param27;
  this.mv_x = param28;
  this.mv_y = param29;
  this.ref_idx = param30;
  this.ref_pic_id = param31;
  this.mbs = param32;
}
function _M0TPB5ArrayGUiRP215Sam_2dHui_2ddot11moon_2dh2648RefFrameEE(param0, param1) {
  this.buf = param0;
  this.len = param1;
}
function _M0TP215Sam_2dHui_2ddot11moon_2dh2648RefFrame(param0, param1, param2, param3, param4, param5, param6) {
  this.pic_id = param0;
  this.frame_num = param1;
  this.is_long_term = param2;
  this.long_term_frame_idx = param3;
  this.y = param4;
  this.u = param5;
  this.v = param6;
}
function _M0TP215Sam_2dHui_2ddot11moon_2dh2649FrameMeta(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
  this.frame_index = param0;
  this.frame_num = param1;
  this.is_idr = param2;
  this.slice_type = param3;
  this.width = param4;
  this.height = param5;
  this.mb_w = param6;
  this.mb_h = param7;
  this.slice_qp = param8;
  this.nal_bytes = param9;
  this.mbs = param10;
}
function _M0TP215Sam_2dHui_2ddot11moon_2dh26412DecodedFrame(param0, param1, param2, param3, param4, param5, param6) {
  this.width = param0;
  this.height = param1;
  this.y = param2;
  this.u = param3;
  this.v = param4;
  this.matrix_coefficients = param5;
  this.meta = param6;
}
function _M0TP215Sam_2dHui_2ddot11moon_2dh2648VlcEntry(param0, param1, param2) {
  this.code = param0;
  this.len = param1;
  this.val = param2;
}
function _M0DTPC16result6ResultGUiiERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiiERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUiiERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiiERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGUiRP215Sam_2dHui_2ddot11moon_2dh2646MbKindiERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRP215Sam_2dHui_2ddot11moon_2dh2646MbKindiERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUiRP215Sam_2dHui_2ddot11moon_2dh2646MbKindiERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRP215Sam_2dHui_2ddot11moon_2dh2646MbKindiERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP215Sam_2dHui_2ddot11moon_2dh2648RefFrameRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP215Sam_2dHui_2ddot11moon_2dh2648RefFrameRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP215Sam_2dHui_2ddot11moon_2dh2648RefFrameRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP215Sam_2dHui_2ddot11moon_2dh2648RefFrameRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGUiRP215Sam_2dHui_2ddot11moon_2dh2646MbKindiiERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRP215Sam_2dHui_2ddot11moon_2dh2646MbKindiiERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUiRP215Sam_2dHui_2ddot11moon_2dh2646MbKindiiERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRP215Sam_2dHui_2ddot11moon_2dh2646MbKindiiERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORP215Sam_2dHui_2ddot11moon_2dh26412DecodedFrameRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORP215Sam_2dHui_2ddot11moon_2dh26412DecodedFrameRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORP215Sam_2dHui_2ddot11moon_2dh26412DecodedFrameRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORP215Sam_2dHui_2ddot11moon_2dh26412DecodedFrameRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok.prototype.$tag = 1;
function _M0TPB5ArrayGRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(param0, param1) {
  this.buf = param0;
  this.len = param1;
}
function _M0TPB5ArrayGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(param0, param1) {
  this.buf = param0;
  this.len = param1;
}
function _M0TPB5ArrayGRP215Sam_2dHui_2ddot11moon_2dh26412DecodedFrameE(param0, param1) {
  this.buf = param0;
  this.len = param1;
}
function _M0DTPC16result6ResultGRP215Sam_2dHui_2ddot11moon_2dh26412DecodeResultRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP215Sam_2dHui_2ddot11moon_2dh26412DecodeResultRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP215Sam_2dHui_2ddot11moon_2dh26412DecodeResultRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP215Sam_2dHui_2ddot11moon_2dh26412DecodeResultRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok.prototype.$tag = 1;
function _M0TP215Sam_2dHui_2ddot11moon_2dh26412DecodeResult(param0, param1, param2, param3) {
  this.nalus = param0;
  this.sps_list = param1;
  this.pps_list = param2;
  this.frames = param3;
}
function _M0TPB9ArrayViewGUsRPC14json4JsonEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB5ArrayGRPC14json4JsonE(param0, param1) {
  this.buf = param0;
  this.len = param1;
}
const _M0FP315Sam_2dHui_2ddot11moon_2dh2643web22register__browser__api = (decodeFn) => {
  const hexToBytes = (hex) => {
    const out = new Uint8Array(hex.length >> 1);
    for (let i = 0; i < out.length; i++) {
      out[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
    }
    return out;
  };
  const bytesToHex = (u8) => {
    let s = "";
    for (let i = 0; i < u8.length; i++) {
      s += u8[i].toString(16).padStart(2, "0");
    }
    return s;
  };
  globalThis.MoonH264 = {
    decodeBytes: (u8) => {
      const raw = JSON.parse(decodeFn(bytesToHex(u8)));
      if (raw.ok && Array.isArray(raw.frames)) {
        for (const f of raw.frames) {
          f.rgba = hexToBytes(f.rgba_hex);
          f.y = hexToBytes(f.y_hex);
          f.u = hexToBytes(f.u_hex);
          f.v = hexToBytes(f.v_hex);
          delete f.rgba_hex;
          delete f.y_hex;
          delete f.u_hex;
          delete f.v_hex;
        }
      }
      return raw;
    },
    decodeHex: (hex) => {
      const raw = JSON.parse(decodeFn(hex));
      if (raw.ok && Array.isArray(raw.frames)) {
        for (const f of raw.frames) {
          f.rgba = hexToBytes(f.rgba_hex);
          f.y = hexToBytes(f.y_hex);
          f.u = hexToBytes(f.u_hex);
          f.v = hexToBytes(f.v_hex);
          delete f.rgba_hex;
          delete f.y_hex;
          delete f.u_hex;
          delete f.v_hex;
        }
      }
      return raw;
    },
  };
};
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
function _M0FP15Error10to__string(_e) {
  const _f = _M0FP15Error10_2amethods[_e.$tag]._1;
  return _f(_e);
}
const _M0FP15Error13_2amethods__0 = { _0: "Sam-Hui-dot/moon-h264.H264Error.MissingParameterSet", _1: (_e) => _M0FP15Error10_2amethods[_e.$tag]._0 };
const _M0FP15Error13_2amethods__1 = { _0: "Sam-Hui-dot/moon-h264.H264Error.UnsupportedFeature", _1: (_e) => _M0FP15Error10_2amethods[_e.$tag]._0 };
const _M0FP15Error13_2amethods__2 = { _0: "Sam-Hui-dot/moon-h264.H264Error.UnsupportedProfile", _1: (_e) => _M0FP15Error10_2amethods[_e.$tag]._0 };
const _M0FP15Error13_2amethods__3 = { _0: "Sam-Hui-dot/moon-h264.H264Error.InvalidSyntax", _1: (_e) => _M0FP15Error10_2amethods[_e.$tag]._0 };
const _M0FP15Error13_2amethods__4 = { _0: "Sam-Hui-dot/moon-h264.H264Error.UnexpectedEof", _1: (_e) => _M0FP15Error10_2amethods[_e.$tag]._0 };
const _M0FP15Error10_2amethods = [_M0FP15Error13_2amethods__0, _M0FP15Error13_2amethods__1, _M0FP15Error13_2amethods__2, _M0FP15Error13_2amethods__3, _M0FP15Error13_2amethods__4];
const _M0FPB18double__max__value = $i64_reinterpret_f64(9218868437227405311n);
const _M0FPB18double__min__value = $i64_reinterpret_f64(18442240474082181119n);
const _M0MPB4Iter4nextN6constrS449GUsRPC14json4JsonEE = 0;
const _M0MPB4Iter4nextN6constrS450GUsRPC14json4JsonEE = 0;
const _M0MPB4Iter3newN6constrS459GUsRPC14json4JsonEE = 0;
const _M0FP215Sam_2dHui_2ddot11moon_2dh26417chroma__qp__table = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 29, 30, 31, 32, 32, 33, 34, 34, 35, 35, 36, 36, 37, 37, 37, 38, 38, 38, 39, 39, 39, 39];
const _M0FP215Sam_2dHui_2ddot11moon_2dh26420level__scale__4x4__0 = [10, 11, 13, 14, 16, 18];
const _M0FP215Sam_2dHui_2ddot11moon_2dh26420level__scale__4x4__1 = [16, 18, 20, 23, 25, 29];
const _M0FP215Sam_2dHui_2ddot11moon_2dh26420level__scale__4x4__2 = [13, 14, 16, 18, 20, 23];
const _M0FP215Sam_2dHui_2ddot11moon_2dh26415pos__class__4x4 = [0, 2, 0, 2, 2, 1, 2, 1, 0, 2, 0, 2, 2, 1, 2, 1];
const _M0FP215Sam_2dHui_2ddot11moon_2dh2647blk4__x = [0, 1, 0, 1, 2, 3, 2, 3, 0, 1, 0, 1, 2, 3, 2, 3];
const _M0FP215Sam_2dHui_2ddot11moon_2dh2647blk4__y = [0, 0, 1, 1, 0, 0, 1, 1, 2, 2, 3, 3, 2, 2, 3, 3];
const _M0FP215Sam_2dHui_2ddot11moon_2dh2647sub8__x = [0, 2, 0, 2];
const _M0FP215Sam_2dHui_2ddot11moon_2dh2647sub8__y = [0, 0, 2, 2];
const _M0FP215Sam_2dHui_2ddot11moon_2dh2647cblk__x = [0, 1, 0, 1];
const _M0FP215Sam_2dHui_2ddot11moon_2dh2647cblk__y = [0, 0, 1, 1];
const _M0FP215Sam_2dHui_2ddot11moon_2dh26412alpha__table = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 5, 6, 7, 8, 9, 10, 12, 13, 15, 17, 20, 22, 25, 28, 32, 36, 40, 45, 50, 56, 63, 71, 80, 90, 101, 113, 127, 144, 162, 182, 203, 226, 255, 255];
const _M0FP215Sam_2dHui_2ddot11moon_2dh26411beta__table = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18];
const _M0FP215Sam_2dHui_2ddot11moon_2dh26410tc0__table = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 3, 1, 2, 3, 2, 2, 3, 2, 2, 4, 2, 3, 4, 2, 3, 4, 3, 3, 5, 3, 4, 6, 3, 4, 6, 4, 5, 7, 4, 5, 8, 4, 6, 9, 5, 7, 10, 6, 8, 11, 6, 8, 13, 7, 10, 14, 8, 11, 16, 9, 12, 18, 10, 13, 20, 11, 15, 23, 13, 17, 25];
const _M0FP215Sam_2dHui_2ddot11moon_2dh26411zigzag__4x4 = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15];
const _M0FP215Sam_2dHui_2ddot11moon_2dh26417cbp__inter__table = [0, 16, 1, 2, 4, 8, 32, 3, 5, 10, 12, 15, 47, 7, 11, 13, 14, 6, 9, 31, 35, 37, 42, 44, 33, 34, 36, 40, 39, 43, 45, 46, 17, 18, 20, 24, 19, 21, 26, 28, 23, 27, 29, 30, 22, 25, 38, 41];
const _M0FP215Sam_2dHui_2ddot11moon_2dh26417cbp__intra__table = [47, 31, 15, 0, 23, 27, 29, 30, 7, 11, 13, 14, 39, 43, 45, 46, 16, 3, 5, 10, 12, 19, 21, 26, 28, 35, 37, 42, 44, 1, 2, 4, 8, 17, 18, 20, 24, 6, 9, 22, 25, 32, 33, 34, 36, 40, 38, 41];
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FP215Sam_2dHui_2ddot11moon_2dh26422render__frame__mb__svgN5tupleS1106 = { _0: "#ef4444", _1: "I_4x4" };
const _M0FP215Sam_2dHui_2ddot11moon_2dh26422render__frame__mb__svgN5tupleS1107 = { _0: "#f97316", _1: "I_16x16" };
const _M0FP215Sam_2dHui_2ddot11moon_2dh26422render__frame__mb__svgN5tupleS1108 = { _0: "#2563eb", _1: "P_16x16" };
const _M0FP215Sam_2dHui_2ddot11moon_2dh26422render__frame__mb__svgN5tupleS1109 = { _0: "#0ea5e9", _1: "P_16x8/8x16" };
const _M0FP215Sam_2dHui_2ddot11moon_2dh26422render__frame__mb__svgN5tupleS1110 = { _0: "#10b981", _1: "P_8x8" };
const _M0FP215Sam_2dHui_2ddot11moon_2dh26422render__frame__mb__svgN5tupleS1111 = { _0: "#334155", _1: "P_Skip" };
const _M0FP315Sam_2dHui_2ddot11moon_2dh2643web14bytes__to__hexN3hexS2690 = "0123456789abcdef";
const _M0FP215Sam_2dHui_2ddot11moon_2dh26419decode__p__skip__mbN5tupleS2463 = { _0: 0, _1: 0 };
const _M0FP215Sam_2dHui_2ddot11moon_2dh26418coeff__token__2__3 = [_M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(3, 2, 0, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(11, 6, 1, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(2, 2, 1, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(7, 6, 2, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(7, 5, 2, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(3, 3, 2, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(7, 7, 3, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(10, 6, 3, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(9, 6, 3, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(5, 4, 3, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(7, 8, 4, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(6, 6, 4, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(5, 6, 4, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(4, 4, 4, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(4, 8, 5, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(6, 7, 5, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(5, 7, 5, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(6, 5, 5, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(7, 9, 6, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(6, 8, 6, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(5, 8, 6, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(8, 6, 6, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(15, 11, 7, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(6, 9, 7, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(5, 9, 7, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(4, 6, 7, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(11, 11, 8, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(14, 11, 8, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(13, 11, 8, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(4, 7, 8, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(15, 12, 9, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(10, 11, 9, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(9, 11, 9, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(4, 9, 9, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(11, 12, 10, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(14, 12, 10, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(13, 12, 10, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(12, 11, 10, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(8, 12, 11, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(10, 12, 11, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(9, 12, 11, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(8, 11, 11, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(15, 13, 12, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(14, 13, 12, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(13, 13, 12, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(12, 12, 12, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(11, 13, 13, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(10, 13, 13, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(9, 13, 13, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(12, 13, 13, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(7, 13, 14, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(11, 14, 14, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(6, 13, 14, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(8, 13, 14, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(9, 14, 15, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(8, 14, 15, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(10, 14, 15, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(1, 13, 15, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(7, 14, 16, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(6, 14, 16, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(5, 14, 16, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(4, 14, 16, 3)];
const _M0FP215Sam_2dHui_2ddot11moon_2dh26430coeff__token__chroma__dc__spec = [_M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(1, 1, 1, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(1, 2, 0, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(1, 3, 2, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(7, 6, 1, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(6, 6, 2, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(5, 6, 3, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(4, 6, 2, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(3, 6, 3, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(2, 6, 4, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(3, 7, 3, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(2, 7, 3, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(0, 7, 4, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(3, 8, 4, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(2, 8, 4, 2)];
const _M0FP215Sam_2dHui_2ddot11moon_2dh26418coeff__token__0__1 = [_M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(1, 1, 0, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(5, 6, 1, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(1, 2, 1, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(7, 8, 2, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(4, 6, 2, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(1, 3, 2, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(7, 9, 3, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(6, 8, 3, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(5, 7, 3, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(3, 5, 3, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(7, 10, 4, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(6, 9, 4, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(5, 8, 4, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(3, 6, 4, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(7, 11, 5, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(6, 10, 5, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(5, 9, 5, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(4, 7, 5, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(15, 13, 6, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(6, 11, 6, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(5, 10, 6, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(4, 8, 6, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(11, 13, 7, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(14, 13, 7, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(5, 11, 7, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(4, 9, 7, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(8, 13, 8, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(10, 13, 8, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(13, 13, 8, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(4, 10, 8, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(15, 14, 9, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(14, 14, 9, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(9, 13, 9, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(4, 11, 9, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(11, 14, 10, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(10, 14, 10, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(13, 14, 10, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(12, 13, 10, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(15, 15, 11, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(14, 15, 11, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(9, 14, 11, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(12, 14, 11, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(11, 15, 12, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(10, 15, 12, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(13, 15, 12, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(8, 14, 12, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(15, 16, 13, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(1, 15, 13, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(9, 15, 13, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(12, 15, 13, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(11, 16, 14, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(14, 16, 14, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(13, 16, 14, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(8, 15, 14, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(7, 16, 15, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(10, 16, 15, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(9, 16, 15, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(12, 16, 15, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(4, 16, 16, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(6, 16, 16, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(5, 16, 16, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(8, 16, 16, 3)];
const _M0FP215Sam_2dHui_2ddot11moon_2dh26425coeff__token__4__7__exact = [_M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(15, 4, 0, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(15, 6, 1, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(14, 4, 1, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(11, 6, 2, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(15, 5, 2, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(13, 4, 2, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(8, 6, 3, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(12, 5, 3, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(14, 5, 3, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(12, 4, 3, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(15, 7, 4, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(10, 5, 4, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(11, 5, 4, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(11, 4, 4, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(11, 7, 5, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(8, 5, 5, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(9, 5, 5, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(10, 4, 5, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(9, 7, 6, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(14, 6, 6, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(13, 6, 6, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(9, 4, 6, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(8, 7, 7, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(10, 6, 7, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(9, 6, 7, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(8, 4, 7, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(15, 8, 8, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(14, 7, 8, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(13, 7, 8, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(13, 5, 8, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(11, 8, 9, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(14, 8, 9, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(10, 7, 9, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(12, 6, 9, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(15, 9, 10, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(10, 8, 10, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(13, 8, 10, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(12, 7, 10, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(11, 9, 11, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(14, 9, 11, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(9, 8, 11, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(12, 8, 11, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(8, 9, 12, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(10, 9, 12, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(13, 9, 12, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(8, 8, 12, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(13, 10, 13, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(7, 9, 13, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(9, 9, 13, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(12, 9, 13, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(9, 10, 14, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(12, 10, 14, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(11, 10, 14, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(10, 10, 14, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(5, 10, 15, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(8, 10, 15, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(7, 10, 15, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(6, 10, 15, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(1, 10, 16, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(4, 10, 16, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(3, 10, 16, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(2, 10, 16, 3)];
const _M0FP215Sam_2dHui_2ddot11moon_2dh26420decode__coeff__tokenN5tupleS2219 = { _0: 0, _1: 0 };
const _M0FP215Sam_2dHui_2ddot11moon_2dh26424total__zeros__chroma__dc = [[_M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 1, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 2, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 3, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(0, 3, 3)], [_M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 1, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 2, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(0, 2, 2)], [_M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 1, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(0, 1, 1)]];
const _M0FP215Sam_2dHui_2ddot11moon_2dh26419run__before__tables = [[_M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 1, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(0, 1, 1)], [_M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 1, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 2, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(0, 2, 2)], [_M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 2, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 2, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 2, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(0, 2, 3)], [_M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 2, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 2, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 2, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 3, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(0, 3, 4)], [_M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 2, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 2, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 3, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 3, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 3, 4), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(0, 3, 5)], [_M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 2, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(0, 3, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 3, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 3, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 3, 4), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(5, 3, 5), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(4, 3, 6)]];
const _M0FP215Sam_2dHui_2ddot11moon_2dh26417total__zeros__4x4 = [[_M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 1, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 3, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 3, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 4, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 4, 4), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 5, 5), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 5, 6), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 6, 7), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 6, 8), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 7, 9), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 7, 10), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 8, 11), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 8, 12), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 9, 13), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 9, 14), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 9, 15)], [_M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(7, 3, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(6, 3, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(5, 3, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(4, 3, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 3, 4), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(5, 4, 5), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(4, 4, 6), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 4, 7), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 4, 8), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 5, 9), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 5, 10), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 6, 11), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 6, 12), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 6, 13), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(0, 6, 14)], [_M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(5, 4, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(7, 3, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(6, 3, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(5, 3, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(4, 4, 4), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 4, 5), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(4, 3, 6), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 3, 7), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 4, 8), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 5, 9), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 5, 10), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 6, 11), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 5, 12), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(0, 6, 13)], [_M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 5, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(7, 3, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(5, 4, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(4, 4, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(6, 3, 4), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(5, 3, 5), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(4, 3, 6), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 4, 7), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 3, 8), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 4, 9), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 5, 10), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 5, 11), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(0, 5, 12)], [_M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(5, 4, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(4, 4, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 4, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(7, 3, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(6, 3, 4), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(5, 3, 5), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(4, 3, 6), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 3, 7), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 4, 8), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 5, 9), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 4, 10), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(0, 5, 11)], [_M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 6, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 5, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(7, 3, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(6, 3, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(5, 3, 4), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(4, 3, 5), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 3, 6), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 3, 7), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 4, 8), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 3, 9), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(0, 6, 10)], [_M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 6, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 5, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(5, 3, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(4, 3, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 3, 4), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 2, 5), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 3, 6), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 4, 7), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 3, 8), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(0, 6, 9)], [_M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 6, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 4, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 5, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 3, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 2, 4), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 2, 5), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 3, 6), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 3, 7), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(0, 6, 8)], [_M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 6, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(0, 6, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 4, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 2, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 2, 4), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 3, 5), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 2, 6), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 5, 7)], [_M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 5, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(0, 5, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 3, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 2, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 2, 4), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 2, 5), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 4, 6)], [_M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(0, 4, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 4, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 3, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(2, 3, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 1, 4), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(3, 3, 5)], [_M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(0, 4, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 4, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 2, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 1, 3), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 3, 4)], [_M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(0, 3, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 3, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 1, 2), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 2, 3)], [_M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(0, 2, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 2, 1), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 1, 2)], [_M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(0, 1, 0), _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(1, 1, 1)]];
const _M0FP215Sam_2dHui_2ddot11moon_2dh26417decode__intra__mbN5tupleS2338 = { _0: 0, _1: 2, _2: 2 };
function _M0FPB13consume4__acc(acc, input) {
  const _p = (acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  return Math.imul(_p << 17 | (_p >>> 15 | 0), 668265263) | 0;
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGRP215Sam_2dHui_2ddot11moon_2dh26412DecodedFrameEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    let _tmp$2 = len > 0;
    while (true) {
      const i = _tmp;
      const _more = _tmp$2;
      if (_more) {
        const _tmp$3 = dst_offset + i | 0;
        const _tmp$4 = src_offset + i | 0;
        if (_tmp$3 >>> 0 < dst.length) {
          dst[_tmp$3] = _tmp$4 >>> 0 < src.length ? src[_tmp$4] : $oob();
        } else {
          $oob();
        }
        _tmp = i - 1 | 0;
        _tmp$2 = i > 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPC15array10FixedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    let _tmp$2 = len > 0;
    while (true) {
      const i = _tmp;
      const _more = _tmp$2;
      if (_more) {
        const _tmp$3 = dst_offset + i | 0;
        const _tmp$4 = src_offset + i | 0;
        if (_tmp$3 >>> 0 < dst.length) {
          dst[_tmp$3] = _tmp$4 >>> 0 < src.length ? src[_tmp$4] : $oob();
        } else {
          $oob();
        }
        _tmp = i - 1 | 0;
        _tmp$2 = i > 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGiEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    let _tmp$2 = len > 0;
    while (true) {
      const i = _tmp;
      const _more = _tmp$2;
      if (_more) {
        const _tmp$3 = dst_offset + i | 0;
        const _tmp$4 = src_offset + i | 0;
        if (_tmp$3 >>> 0 < dst.length) {
          dst[_tmp$3] = _tmp$4 >>> 0 < src.length ? src[_tmp$4] : $oob();
        } else {
          $oob();
        }
        _tmp = i - 1 | 0;
        _tmp$2 = i > 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGyEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    let _tmp$2 = len > 0;
    while (true) {
      const i = _tmp;
      const _more = _tmp$2;
      if (_more) {
        const _tmp$3 = dst_offset + i | 0;
        const _tmp$4 = src_offset + i | 0;
        if (_tmp$3 >>> 0 < dst.length) {
          dst[_tmp$3] = _tmp$4 >>> 0 < src.length ? src[_tmp$4] : $oob();
        } else {
          $oob();
        }
        _tmp = i - 1 | 0;
        _tmp$2 = i > 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPB18UninitializedArray12unsafe__blitGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGRP215Sam_2dHui_2ddot11moon_2dh26412DecodedFrameEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB18UninitializedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGyEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB18UninitializedArray12unsafe__blitGiE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGiEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB18UninitializedArray23unsafe__make__and__blitGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(src, allocate_len, src_offset, dst_offset, blit_len) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(dst, dst_offset, src, src_offset, blit_len);
  return dst;
}
function _M0MPB18UninitializedArray23unsafe__make__and__blitGyE(src, allocate_len, src_offset, dst_offset, blit_len) {
  const dst = new Uint8Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, blit_len);
  return dst;
}
function _M0MPB18UninitializedArray23unsafe__make__and__blitGiE(src, allocate_len, src_offset, dst_offset, blit_len) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGiE(dst, dst_offset, src, src_offset, blit_len);
  return dst;
}
function _M0MPB13StringBuilder13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGdE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGdE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGbE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGbE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB18UninitializedArray23make__and__blit_2einnerGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(src, allocate_len, len, src_offset, dst_offset) {
  let _tmp;
  if (allocate_len >= 0) {
    let _tmp$2;
    if (len >= 0) {
      let _tmp$3;
      const _p = src.length;
      if (src_offset >= 0 && src_offset <= (_p - len | 0)) {
        _tmp$3 = dst_offset >= 0 && dst_offset <= (allocate_len - len | 0);
      } else {
        _tmp$3 = false;
      }
      _tmp$2 = _tmp$3;
    } else {
      _tmp$2 = false;
    }
    _tmp = _tmp$2;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    return _M0MPB18UninitializedArray23unsafe__make__and__blitGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(src, allocate_len, src_offset, dst_offset, len);
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(89);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "bounds check failed: allocate_len = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, allocate_len);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", src_offset = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, src_offset);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", dst_offset = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, dst_offset);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", len = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, len);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", src.length = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, src.length);
    return $panic(_string_builder.val);
  }
}
function _M0MPB18UninitializedArray23make__and__blit_2einnerGiE(src, allocate_len, len, src_offset, dst_offset) {
  let _tmp;
  if (allocate_len >= 0) {
    let _tmp$2;
    if (len >= 0) {
      let _tmp$3;
      const _p = src.length;
      if (src_offset >= 0 && src_offset <= (_p - len | 0)) {
        _tmp$3 = dst_offset >= 0 && dst_offset <= (allocate_len - len | 0);
      } else {
        _tmp$3 = false;
      }
      _tmp$2 = _tmp$3;
    } else {
      _tmp$2 = false;
    }
    _tmp = _tmp$2;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    return _M0MPB18UninitializedArray23unsafe__make__and__blitGiE(src, allocate_len, src_offset, dst_offset, len);
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(89);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "bounds check failed: allocate_len = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, allocate_len);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", src_offset = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, src_offset);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", dst_offset = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, dst_offset);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", len = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, len);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", src.length = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, src.length);
    return $panic(_string_builder.val);
  }
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return size_hint >= 0 ? new _M0TPB13StringBuilder("") : $panic("size_hint must be non-negative");
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0MPC14byte4Byte7to__hexN14to__hex__digitS416(i) {
  if (i < 10) {
    const _p = (i + 48 | 0) & 255;
    return _p;
  } else {
    const _p = (i + 97 | 0) & 255;
    const _p$2 = (_p - 10 | 0) & 255;
    return _p$2;
  }
}
function _M0MPC14byte4Byte7to__hex(b) {
  const _self = _M0MPB13StringBuilder21StringBuilder_2einner(8);
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS416((b / 16 | 0) & 255));
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS416((b % 16 | 0) & 255));
  const _p = _self;
  return _p.val;
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String21clamped__view_2einner(self, start, end) {
  const len = self.length;
  let lo;
  if (start <= 0) {
    lo = 0;
  } else {
    if (start >= len) {
      lo = len;
    } else {
      let _tmp;
      const _p = self.charCodeAt(start);
      if (_p >= 56320 && _p <= 57343) {
        const _p$2 = self.charCodeAt(start - 1 | 0);
        _tmp = _p$2 >= 55296 && _p$2 <= 56319;
      } else {
        _tmp = false;
      }
      if (_tmp) {
        lo = start + 1 | 0;
      } else {
        lo = start;
      }
    }
  }
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _e = _Some;
    if (_e <= 0) {
      hi = 0;
    } else {
      if (_e >= len) {
        hi = len;
      } else {
        let _tmp;
        const _p = self.charCodeAt(_e);
        if (_p >= 56320 && _p <= 57343) {
          const _p$2 = self.charCodeAt(_e - 1 | 0);
          _tmp = _p$2 >= 55296 && _p$2 <= 56319;
        } else {
          _tmp = false;
        }
        if (_tmp) {
          hi = _e - 1 | 0;
        } else {
          hi = _e;
        }
      }
    }
  }
  return lo >= hi ? new _M0TPC16string10StringView(self, lo, lo) : new _M0TPC16string10StringView(self, lo, hi);
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String21clamped__view_2einner(value, start, start + len | 0));
}
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, self);
}
function _M0IP016_24default__implPB4Show6outputGiE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC13int3IntPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGdE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16double6DoublePB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGbE(self, logger) {
  logger.method_table.method_0(logger.self, self ? "true" : "false");
}
function _M0MPB4Iter4nextGUsRPC14json4JsonEE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS450GUsRPC14json4JsonEE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS449GUsRPC14json4JsonEE;
    }
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPB4Iter3newGUsRPC14json4JsonEE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS459GUsRPC14json4JsonEE;
  }
  return new _M0TPB4IterGUsRPC14json4JsonEE(f, size_hint$2);
}
function _M0MPC15array10FixedArray21clamped__view_2einnerGyE(self, start, end) {
  const len = self.length;
  const lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _end = _Some;
    hi = _end < 0 ? 0 : _end > len ? len : _end;
  }
  const hi$2 = hi > lo ? hi : lo;
  return new _M0TPB9ArrayViewGyE(self, lo, hi$2);
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0MPC16string6String19exact__view_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    if (start < len) {
      const _p = self.charCodeAt(start);
      if (!(_p >= 56320 && _p <= 57343)) {
      } else {
        $panic();
      }
    }
    if (end$2 < len) {
      const _p = self.charCodeAt(end$2);
      if (!(_p >= 56320 && _p <= 57343)) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self, start, end$2);
  } else {
    return $panic();
  }
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0MPC16string6String6repeat(self, n) {
  if (n < 0) {
    return $panic("negative repeat count");
  } else {
    if (n === 0) {
      return "";
    } else {
      if (n === 1) {
        return self;
      } else {
        const len = self.length;
        const total = Math.imul(len, n) | 0;
        if (len === 0 || (total / n | 0) === len) {
          const buf = _M0MPB13StringBuilder21StringBuilder_2einner(total);
          const str = self;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < n) {
              _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          return buf.val;
        } else {
          return $panic("repeat result too large");
        }
      }
    }
  }
}
function _M0FPB23array__growth__capacity(current, len, required) {
  if (required < len) {
    $panic("Array capacity overflow");
  }
  const start = current === 0 ? 8 : current;
  let _tmp = start;
  while (true) {
    const space = _tmp;
    if (space < required) {
      const next = Math.imul(space, 2) | 0;
      if (next <= space) {
        return required;
      }
      _tmp = next;
      continue;
    } else {
      return space;
    }
  }
}
function _M0MPC15array5Array8capacityGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self) {
  return self.buf.length;
}
function _M0MPC15array5Array8capacityGiE(self) {
  return self.buf.length;
}
function _M0MPC15array5Array14resize__bufferGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self, new_capacity) {
  const old_buf = self.buf;
  self.buf = [];
  const len = self.len;
  const copy_len = len < new_capacity ? len : new_capacity;
  const new_buf = _M0MPB18UninitializedArray23make__and__blit_2einnerGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(old_buf, new_capacity, copy_len, 0, 0);
  self.buf = new_buf;
}
function _M0MPC15array5Array14resize__bufferGiE(self, new_capacity) {
  const old_buf = self.buf;
  self.buf = [];
  const len = self.len;
  const copy_len = len < new_capacity ? len : new_capacity;
  const new_buf = _M0MPB18UninitializedArray23make__and__blit_2einnerGiE(old_buf, new_capacity, copy_len, 0, 0);
  self.buf = new_buf;
}
function _M0MPC15array5Array7reallocGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self, required) {
  const old_cap = _M0MPC15array5Array8capacityGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self);
  const new_cap = _M0FPB23array__growth__capacity(old_cap, self.len, required);
  _M0MPC15array5Array14resize__bufferGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self, new_cap);
}
function _M0MPC15array5Array7reallocGiE(self, required) {
  const old_cap = _M0MPC15array5Array8capacityGiE(self);
  const new_cap = _M0FPB23array__growth__capacity(old_cap, self.len, required);
  _M0MPC15array5Array14resize__bufferGiE(self, new_cap);
}
function _M0MPC15array5Array4pushGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self, value) {
  if (self.len === self.buf.length) {
    _M0MPC15array5Array7reallocGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self, self.len + 1 | 0);
  }
  const length = self.len;
  self.buf[length] = value;
  self.len = length + 1 | 0;
}
function _M0MPC15array5Array4pushGiE(self, value) {
  if (self.len === self.buf.length) {
    _M0MPC15array5Array7reallocGiE(self, self.len + 1 | 0);
  }
  const length = self.len;
  self.buf[length] = value;
  self.len = length + 1 | 0;
}
function _M0IPC13int3IntPB4Show10to__string(self) {
  return _M0MPC13int3Int18to__string_2einner(self, 10);
}
function _M0MPC15array5Array20unsafe__make__uninitGRP215Sam_2dHui_2ddot11moon_2dh2646MbMetaE(len) {
  return new _M0TPB5ArrayGRP215Sam_2dHui_2ddot11moon_2dh2646MbMetaE(new Array(len), len);
}
function _M0FPB21calc__grow__threshold(capacity) {
  return (Math.imul(capacity / 16 | 0, 13) | 0) + ((Math.imul(capacity % 16 | 0, 13) | 0) / 16 | 0) | 0;
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0FPB8new__mapGsRPC14json4JsonE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsRPC14json4JsonE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB8new__mapGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB8new__mapGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB21capacity__for__length(length) {
  if (length <= _M0FPB21calc__grow__threshold(1073741824)) {
    let capacity = _M0MPC13int3Int20next__power__of__two(length);
    if (length > _M0FPB21calc__grow__threshold(capacity)) {
      capacity = Math.imul(capacity, 2) | 0;
    }
    return capacity;
  } else {
    return $panic("Map capacity overflow");
  }
}
function _M0MPB3Map20add__entry__to__tailGsRPC14json4JsonE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGsRPC14json4JsonE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10push__awayGsRPC14json4JsonE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPC14json4JsonE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPC14json4JsonE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRPC14json4JsonE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRPC14json4JsonE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRPC14json4JsonE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPC14json4JsonE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGsRPC14json4JsonE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRPC14json4JsonE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPC14json4JsonE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC14json4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRPC14json4JsonE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPC14json4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPC14json4JsonE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPC14json4JsonE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPC14json4JsonE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC14json4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGsRPC14json4JsonE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPC14json4JsonE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(self, key, value) {
  _M0MPB3Map15set__with__hashGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3setGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self, key, value) {
  _M0MPB3Map15set__with__hashGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3MapGsRPC14json4JsonE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0FPB21capacity__for__length(_capacity > length ? _capacity : length);
  }
  const m = _M0FPB8new__mapGsRPC14json4JsonE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPC14json4JsonE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0FPB21capacity__for__length(_capacity > length ? _capacity : length);
  }
  const m = _M0FPB8new__mapGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0FPB21capacity__for__length(_capacity > length ? _capacity : length);
  }
  const m = _M0FPB8new__mapGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map4iterGsRPC14json4JsonE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsRPC14json4JsonEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGUsRPC14json4JsonEE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind = curr_entry.val;
        if (_bind === undefined) {
          break _L;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _key = _x.key;
          const _value = _x.value;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return { _0: _key, _1: _value };
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0IPC13int3IntPB4Hash4hash(self) {
  const acc = (((_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0) >>> 0) + (4 >>> 0) | 0;
  return _M0FPB13finalize__acc(_M0FPB13consume4__acc(acc, self));
}
function _M0MPC15array10FixedArray23unsafe__make__and__blitGyE(src, allocate_len, init, src_offset, dst_offset, blit_len) {
  const dst = $makebytes(allocate_len, init);
  _M0MPC15array10FixedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, blit_len);
  return dst;
}
function _M0MPC15array10FixedArray23make__and__blit_2einnerGyE(src, allocate_len, init, len, src_offset, dst_offset) {
  let _tmp;
  if (allocate_len >= 0) {
    let _tmp$2;
    if (len >= 0) {
      let _tmp$3;
      const _p = src.length;
      if (src_offset >= 0 && src_offset <= (_p - len | 0)) {
        _tmp$3 = dst_offset >= 0 && dst_offset <= (allocate_len - len | 0);
      } else {
        _tmp$3 = false;
      }
      _tmp$2 = _tmp$3;
    } else {
      _tmp$2 = false;
    }
    _tmp = _tmp$2;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    return _M0MPC15array10FixedArray23unsafe__make__and__blitGyE(src, allocate_len, init, src_offset, dst_offset, len);
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(89);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "bounds check failed: allocate_len = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, allocate_len);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", src_offset = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, src_offset);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", dst_offset = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, dst_offset);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", len = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, len);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", src.length = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, src.length);
    return $panic(_string_builder.val);
  }
}
function _M0IPC16double6DoublePB4Show10to__string(self) {
  return String(self);
}
function _M0MPC15bytes5Bytes11from__array(arr) {
  const len = arr.end - arr.start | 0;
  if (len === 0) {
    return $bytes_literal$0;
  }
  const result = _M0MPB18UninitializedArray23unsafe__make__and__blitGyE(arr.buf, len, arr.start, 0, len);
  return result;
}
function _M0MPC15array5Array28unsafe__truncate__to__lengthGRP215Sam_2dHui_2ddot11moon_2dh2648RefFrameE(self, new_len) {
  if (new_len <= self.len) {
    self.len = new_len;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array6removeGRP215Sam_2dHui_2ddot11moon_2dh2648RefFrameE(self, index) {
  if (index >= 0 && index < self.len) {
    const value = self.buf[index];
    _M0MPB18UninitializedArray12unsafe__blitGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self.buf, index, self.buf, index + 1 | 0, (self.len - index | 0) - 1 | 0);
    _M0MPC15array5Array28unsafe__truncate__to__lengthGRP215Sam_2dHui_2ddot11moon_2dh2648RefFrameE(self, self.len - 1 | 0);
    return value;
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(60);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "index out of bounds: the len is from 0 to ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, self.len);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " but the index is ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, index);
    return $panic(_string_builder.val);
  }
}
function _M0MPC15array5Array3popGRPC14json10WriteFrameE(self) {
  const len = self.len;
  if (len === 0) {
    return undefined;
  } else {
    const index = len - 1 | 0;
    const v = self.buf[index];
    self.len = index;
    return v;
  }
}
function _M0MPC15array5Array5clearGRP215Sam_2dHui_2ddot11moon_2dh2648RefFrameE(self) {
  _M0MPC15array5Array28unsafe__truncate__to__lengthGRP215Sam_2dHui_2ddot11moon_2dh2648RefFrameE(self, 0);
}
function _M0FPC16buffer24buffer__growth__capacity(current, len, required) {
  if (required < len) {
    $panic("Buffer capacity overflow");
  }
  const start = current <= 0 ? 1 : current;
  let _tmp = start;
  while (true) {
    const space = _tmp;
    if (space >= required) {
      return space;
    }
    const next = Math.imul(space, 2) | 0;
    if (next <= space) {
      return required;
    }
    _tmp = next;
    continue;
  }
}
function _M0MPC16buffer6Buffer4grow(self, required) {
  const new_capacity = _M0FPC16buffer24buffer__growth__capacity(self.data.length, self.len, required);
  const new_data = _M0MPC15array10FixedArray23make__and__blit_2einnerGyE(self.data, new_capacity, 0, self.len, 0, 0);
  self.data = new_data;
}
function _M0MPC16buffer6Buffer14Buffer_2einner(size_hint) {
  const initial = size_hint < 1 ? 1 : size_hint;
  const data = $makebytes(initial, 0);
  return new _M0TPC16buffer6Buffer(data, 0);
}
function _M0MPC16buffer6Buffer11write__byte(self, value) {
  if (self.len >= self.data.length) {
    _M0MPC16buffer6Buffer4grow(self, self.len + 1 | 0);
  }
  self.data[self.len] = value;
  self.len = self.len + 1 | 0;
}
function _M0MPC16buffer6Buffer9to__bytes(self) {
  return _M0MPC15bytes5Bytes11from__array(_M0MPC15array10FixedArray21clamped__view_2einnerGyE(self.data, 0, self.len));
}
function _M0MPC14json4Json4JsonGdE(value) {
  return _M0IPC16double6DoublePC14json6ToJson8to__json(value);
}
function _M0IPC14bool4BoolPC14json6ToJson8to__json(self) {
  return self ? _M0DTPC14json4Json4True__ : _M0DTPC14json4Json5False__;
}
function _M0IPC13int3IntPC14json6ToJson8to__json(self) {
  const _p = self + 0;
  const _p$2 = undefined;
  return new _M0DTPC14json4Json6Number(_p, _p$2);
}
function _M0IPC16double6DoublePC14json6ToJson8to__json(self) {
  if (self !== self) {
    const _p = "NaN";
    return new _M0DTPC14json4Json6String(_p);
  } else {
    if (self > $i64_reinterpret_f64(9218868437227405311n)) {
      const _p = "Infinity";
      return new _M0DTPC14json4Json6String(_p);
    } else {
      if (self < $i64_reinterpret_f64(18442240474082181119n)) {
        const _p = "-Infinity";
        return new _M0DTPC14json4Json6String(_p);
      } else {
        const _p = undefined;
        return new _M0DTPC14json4Json6Number(self, _p);
      }
    }
  }
}
function _M0FPC14json20need__escape__scalar(str, escape_slash, start, end) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      const _p = str.charCodeAt(i);
      if (_p === 34 || (_p === 92 || (_p < 32 || escape_slash && _p === 47))) {
        return true;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPC14json12need__escape(str, escape_slash) {
  return _M0FPC14json20need__escape__scalar(str, escape_slash, 0, str.length);
}
function _M0FPC14json13write__escape(buf, code) {
  switch (code) {
    case 34: {
      _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\\"");
      return;
    }
    case 92: {
      _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\\\");
      return;
    }
    case 47: {
      _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\/");
      return;
    }
    case 10: {
      _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\n");
      return;
    }
    case 13: {
      _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\r");
      return;
    }
    case 8: {
      _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\b");
      return;
    }
    case 9: {
      _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\t");
      return;
    }
    case 12: {
      _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\f");
      return;
    }
    default: {
      _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\u00");
      _M0MPB13StringBuilder13write__objectGsE(buf, _M0MPC14byte4Byte7to__hex(code & 255));
      return;
    }
  }
}
function _M0FPC14json14write__escaped(buf, str, escape_slash) {
  if (!_M0FPC14json12need__escape(str, escape_slash)) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
    return undefined;
  }
  const _bind = str.length;
  let _tmp = 0;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp;
    const run_start = _tmp$2;
    if (i < _bind) {
      const code = str.charCodeAt(i);
      if (code === 34 || (code === 92 || (code < 32 || escape_slash && code === 47))) {
        _M0IPB13StringBuilderPB6Logger11write__view(buf, _M0MPC16string6String19exact__view_2einner(str, run_start, i));
        _M0FPC14json13write__escape(buf, code);
        _tmp = i + 1 | 0;
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        _tmp = i + 1 | 0;
        continue;
      }
    } else {
      _M0IPB13StringBuilderPB6Logger11write__view(buf, _M0MPC16string6String19exact__view_2einner(str, run_start, undefined));
      return;
    }
  }
}
function _M0FPC14json13write__indent(buf, cache, level, indent) {
  while (true) {
    if (cache.len <= level) {
      if (cache.len >= 1) {
        const _bind = cache.len - 1 | 0;
        const _last = cache.buf[_bind];
        _M0MPC15array5Array4pushGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(cache, `${_last}${_M0MPC16string6String6repeat(" ", indent)}`);
      } else {
        _M0MPC15array5Array4pushGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(cache, "\n");
      }
      continue;
    } else {
      break;
    }
  }
  if (level < 0 || level >= cache.len) {
    $panic();
  }
  _M0IPB13StringBuilderPB6Logger13write__string(buf, cache.buf[level]);
}
function _M0MPC14json4Json17stringify_2einner(self, escape_slash, indent, replacer) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const indent_cache = new _M0TPB5ArrayGsE([], 0);
  const stack = new _M0TPB5ArrayGRPC14json10WriteFrameE([], 0);
  let depth = 0;
  let _tmp = self;
  _L: while (true) {
    const x = _tmp;
    if (x === undefined) {
      if (stack.len === 0) {
        break;
      } else {
        const _bind = stack.len - 1 | 0;
        const _x = stack.buf[_bind];
        if (_x.$tag === 0) {
          const _Array = _x;
          const _arr = _Array._0;
          const _i = _Array._1;
          if (_i < _arr.len) {
            if (_i < 0 || _i >= _arr.len) {
              $panic();
            }
            const element = _arr.buf[_i];
            _Array._1 = _i + 1 | 0;
            if (_i > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 44);
              if (indent > 0) {
                _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
              }
            }
            _tmp = element;
            continue;
          } else {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(stack);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 93);
            _tmp = undefined;
            continue;
          }
        } else {
          const _Object = _x;
          const _iterator = _Object._0;
          const _first = _Object._1;
          const _bind$2 = _M0MPB4Iter4nextGUsRPC14json4JsonEE(_iterator);
          if (_bind$2 === undefined) {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(stack);
            if (indent > 0 && !_first) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 125);
            _tmp = undefined;
            continue;
          } else {
            const _Some = _bind$2;
            const _x$2 = _Some;
            const _k = _x$2._0;
            const _v = _x$2._1;
            let v2 = _v;
            if (replacer === undefined) {
            } else {
              const _Some$2 = replacer;
              const _replacer = _Some$2;
              const _func = _replacer.f;
              const _bind$3 = _func(_k, _v);
              if (_bind$3 === undefined) {
                _tmp = undefined;
                continue;
              } else {
                const _Some$3 = _bind$3;
                const _v$2 = _Some$3;
                v2 = _v$2;
              }
            }
            if (!_first) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 44);
            }
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
            _M0FPC14json14write__escaped(buf, _k, escape_slash);
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "\":");
            if (indent > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 32);
            }
            _Object._1 = false;
            _tmp = v2;
            continue;
          }
        }
      }
    } else {
      const _Some = x;
      const _value = _Some;
      switch (_value.$tag) {
        case 6: {
          const _Object = _value;
          const _members = _Object._0;
          if (_members.size === 0) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "{}");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 123);
            _M0MPC15array5Array4pushGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(stack, new _M0DTPC14json10WriteFrame6Object(_M0MPB3Map4iterGsRPC14json4JsonE(_members), true));
          }
          break;
        }
        case 5: {
          const _Array = _value;
          const _arr = _Array._0;
          if (_arr.len === 0) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "[]");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 91);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0MPC15array5Array4pushGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(stack, new _M0DTPC14json10WriteFrame5Array(_arr, 0));
          }
          break;
        }
        case 4: {
          const _String = _value;
          const _s = _String._0;
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
          _M0FPC14json14write__escaped(buf, _s, escape_slash);
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
          break;
        }
        case 3: {
          const _Number = _value;
          const _n = _Number._0;
          const _repr = _Number._1;
          if (_repr === undefined) {
            if (!(_n >= _M0FPB18double__min__value && _n <= _M0FPB18double__max__value)) {
              _tmp = _M0MPC14json4Json4JsonGdE(_n);
              continue _L;
            } else {
              _M0MPB13StringBuilder13write__objectGdE(buf, _n);
            }
          } else {
            const _Some$2 = _repr;
            const _r = _Some$2;
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _r);
          }
          break;
        }
        case 1: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "true");
          break;
        }
        case 2: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "false");
          break;
        }
        default: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "null");
        }
      }
      _tmp = undefined;
      continue;
    }
  }
  return buf.val;
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26422render__frame__mb__svg(meta) {
  const grid_w = Math.imul(meta.mb_w, 24) | 0;
  const grid_h = Math.imul(meta.mb_h, 24) | 0;
  const svg_w = (grid_w + 48 | 0) > 540 ? grid_w + 48 | 0 : 540;
  const svg_h = ((56 + grid_h | 0) + 44 | 0) + 16 | 0;
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(8);
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(100);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "<svg class=\"moon-h264-mb-map\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, svg_w);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, svg_h);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" width=\"");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, svg_w);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" height=\"");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, svg_h);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\">");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, _string_builder.val);
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "<rect width=\"100%\" height=\"100%\" fill=\"#0f172a\" rx=\"10\"/>");
  const idr_tag = meta.is_idr ? " (IDR)" : "";
  const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(133);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "<text x=\"");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, 24);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\" y=\"26\" fill=\"#f8fafc\" font-family=\"ui-monospace,monospace\" font-size=\"14\" font-weight=\"700\">Frame #");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, meta.frame_index);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " [");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, meta.slice_type);
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, idr_tag);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "] ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, meta.width);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "x");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, meta.height);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " | QP=");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, meta.slice_qp);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " | ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, meta.nal_bytes);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " B</text>");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, _string_builder$2.val);
  const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(155);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "<text x=\"");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, 24);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\" y=\"44\" fill=\"#94a3b8\" font-family=\"ui-monospace,monospace\" font-size=\"11\">Macroblock grid: ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, meta.mb_w);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "x");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, meta.mb_h);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, " (");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, meta.mbs.len);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, " MBs) — color=MB type, white arrows=L0 MV</text>");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, _string_builder$3.val);
  const _bind = meta.mbs;
  const _bind$2 = _bind.len;
  const _bind$3 = _bind.buf;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const mb = _bind$3[_];
      const x = 24 + (Math.imul(mb.mb_x, 24) | 0) | 0;
      const y = 56 + (Math.imul(mb.mb_y, 24) | 0) | 0;
      const _bind$4 = mb.kind;
      let fill;
      switch (_bind$4) {
        case 0: {
          fill = "#ef4444";
          break;
        }
        case 1: {
          fill = "#f97316";
          break;
        }
        case 2: {
          fill = "#ec4899";
          break;
        }
        case 3: {
          fill = "#334155";
          break;
        }
        case 4: {
          fill = "#2563eb";
          break;
        }
        case 5: {
          fill = "#0ea5e9";
          break;
        }
        case 6: {
          fill = "#06b6d4";
          break;
        }
        default: {
          fill = "#10b981";
        }
      }
      const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(98);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "<rect x=\"");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, x);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "\" y=\"");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, y);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "\" width=\"");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, 23);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "\" height=\"");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, 23);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "\" fill=\"");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$4, fill);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "\" fill-opacity=\"0.85\" stroke=\"#0f172a\" stroke-width=\"1\"/>");
      _M0IPB13StringBuilderPB6Logger13write__string(sb, _string_builder$4.val);
      if (mb.mv_x !== 0 || mb.mv_y !== 0) {
        const cx = x + 12 | 0;
        const cy = y + 12 | 0;
        const _p = mb.mv_x / 2 | 0;
        const dx = _p < -10 ? -10 : _p > 10 ? 10 : _p;
        const _p$2 = mb.mv_y / 2 | 0;
        const dy = _p$2 < -10 ? -10 : _p$2 > 10 ? 10 : _p$2;
        const ex = cx + dx | 0;
        const ey = cy + dy | 0;
        const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(90);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "<line x1=\"");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, cx);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "\" y1=\"");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, cy);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "\" x2=\"");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, ex);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "\" y2=\"");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, ey);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "\" stroke=\"#f8fafc\" stroke-width=\"1.4\" stroke-linecap=\"round\"/>");
        _M0IPB13StringBuilderPB6Logger13write__string(sb, _string_builder$5.val);
        const _string_builder$6 = _M0MPB13StringBuilder21StringBuilder_2einner(44);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, "<circle cx=\"");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$6, ex);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, "\" cy=\"");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$6, ey);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, "\" r=\"1.6\" fill=\"#fde047\"/>");
        _M0IPB13StringBuilderPB6Logger13write__string(sb, _string_builder$6.val);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const ly = (56 + grid_h | 0) + 24 | 0;
  let items_buf = [_M0FP215Sam_2dHui_2ddot11moon_2dh26422render__frame__mb__svgN5tupleS1106, _M0FP215Sam_2dHui_2ddot11moon_2dh26422render__frame__mb__svgN5tupleS1107, _M0FP215Sam_2dHui_2ddot11moon_2dh26422render__frame__mb__svgN5tupleS1108, _M0FP215Sam_2dHui_2ddot11moon_2dh26422render__frame__mb__svgN5tupleS1109, _M0FP215Sam_2dHui_2ddot11moon_2dh26422render__frame__mb__svgN5tupleS1110, _M0FP215Sam_2dHui_2ddot11moon_2dh26422render__frame__mb__svgN5tupleS1111];
  let items_len = 6;
  let lx = 24;
  const _bind$4 = items_len;
  const _bind$5 = items_buf;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const item = _bind$5[_];
      const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(55);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "<rect x=\"");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, lx);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "\" y=\"");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, ly - 10 | 0);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "\" width=\"11\" height=\"11\" rx=\"2\" fill=\"");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$4, item._0);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "\"/>");
      _M0IPB13StringBuilderPB6Logger13write__string(sb, _string_builder$4.val);
      const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(90);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "<text x=\"");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, lx + 15 | 0);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "\" y=\"");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, ly);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "\" fill=\"#cbd5e1\" font-family=\"ui-monospace,monospace\" font-size=\"11\">");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$5, item._1);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "</text>");
      _M0IPB13StringBuilderPB6Logger13write__string(sb, _string_builder$5.val);
      lx = lx + 82 | 0;
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "</svg>");
  return sb.val;
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26420render__bitrate__svg(frames) {
  const n = frames.len;
  let max_bytes = 1;
  const _bind = frames.len;
  const _bind$2 = frames.buf;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const f = _bind$2[_];
      if (f.meta.nal_bytes > max_bytes) {
        max_bytes = f.meta.nal_bytes;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(8);
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(101);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "<svg class=\"moon-h264-bitrate\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, 640);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, 220);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" width=\"");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, 640);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" height=\"");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, 220);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\">");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, _string_builder.val);
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "<rect width=\"100%\" height=\"100%\" fill=\"#0f172a\" rx=\"10\"/>");
  const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(156);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "<text x=\"");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, 48);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\" y=\"22\" fill=\"#f8fafc\" font-family=\"ui-monospace,monospace\" font-size=\"13\" font-weight=\"700\">Frame NAL Size Distribution (");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, n);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " frames, peak=");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, max_bytes);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " B)</text>");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, _string_builder$2.val);
  if (n > 0) {
    const slot = 572 / n | 0;
    const bw = slot > 4 ? slot - 2 | 0 : 2;
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < n) {
        if (i < 0 || i >= frames.len) {
          $panic();
        }
        const f = frames.buf[i];
        const h = (Math.imul(f.meta.nal_bytes, 148) | 0) / max_bytes | 0;
        const bh = h > 2 ? h : 2;
        const x = 48 + (Math.imul(i, slot) | 0) | 0;
        const y = 186 - bh | 0;
        const col = f.meta.is_idr ? "#ef4444" : f.meta.slice_type === "I" ? "#f97316" : "#38bdf8";
        const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(51);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "<rect x=\"");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, x);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\" y=\"");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, y);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\" width=\"");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, bw);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\" height=\"");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, bh);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\" rx=\"2\" fill=\"");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, col);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\"/>");
        _M0IPB13StringBuilderPB6Logger13write__string(sb, _string_builder$3.val);
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(65);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "<line x1=\"");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, 48);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\" y1=\"");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, 186);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\" x2=\"");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, 620);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\" y2=\"");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, 186);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\" stroke=\"#475569\" stroke-width=\"1\"/>");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, _string_builder$3.val);
  const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(115);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "<text x=\"");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, 48);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "\" y=\"");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, 210);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "\" fill=\"#94a3b8\" font-family=\"ui-monospace,monospace\" font-size=\"10\">Red=IDR, Orange=I, Blue=P</text>");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, _string_builder$4.val);
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "</svg>");
  return sb.val;
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26422chroma__qp__from__luma(qp_y, offset) {
  const _p = qp_y + offset | 0;
  const qpi = _p < 0 ? 0 : _p > 51 ? 51 : _p;
  return qpi >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh26417chroma__qp__table.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh26417chroma__qp__table[qpi] : $oob();
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26414dequant__scale(qp_mod6, idx) {
  const _bind = idx >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh26415pos__class__4x4.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh26415pos__class__4x4[idx] : $oob();
  switch (_bind) {
    case 0: {
      return qp_mod6 >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh26420level__scale__4x4__0.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh26420level__scale__4x4__0[qp_mod6] : $oob();
    }
    case 1: {
      return qp_mod6 >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh26420level__scale__4x4__1.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh26420level__scale__4x4__1[qp_mod6] : $oob();
    }
    default: {
      return qp_mod6 >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh26420level__scale__4x4__2.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh26420level__scale__4x4__2[qp_mod6] : $oob();
    }
  }
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26412dequant__4x4(block, qp, skip_dc) {
  const qp_div6 = qp / 6 | 0;
  const qp_mod6 = qp % 6 | 0;
  const start = skip_dc ? 1 : 0;
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < 16) {
      if ((i >>> 0 < block.length ? block[i] : $oob()) !== 0) {
        if (i >>> 0 < block.length) {
          block[i] = Math.imul(i >>> 0 < block.length ? block[i] : $oob(), _M0FP215Sam_2dHui_2ddot11moon_2dh26414dequant__scale(qp_mod6, i)) << qp_div6;
        } else {
          $oob();
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26427inverse__hadamard__luma__dc(c, qp) {
  const tmp = $make_array_len_and_init(16, 0);
  let _tmp = 0;
  while (true) {
    const r = _tmp;
    if (r < 4) {
      const i = Math.imul(r, 4) | 0;
      const _tmp$2 = i >>> 0 < c.length ? c[i] : $oob();
      const _tmp$3 = i + 2 | 0;
      const a = _tmp$2 + (_tmp$3 >>> 0 < c.length ? c[_tmp$3] : $oob()) | 0;
      const _tmp$4 = i >>> 0 < c.length ? c[i] : $oob();
      const _tmp$5 = i + 2 | 0;
      const b = _tmp$4 - (_tmp$5 >>> 0 < c.length ? c[_tmp$5] : $oob()) | 0;
      const _tmp$6 = i + 1 | 0;
      const _tmp$7 = _tmp$6 >>> 0 < c.length ? c[_tmp$6] : $oob();
      const _tmp$8 = i + 3 | 0;
      const d = _tmp$7 - (_tmp$8 >>> 0 < c.length ? c[_tmp$8] : $oob()) | 0;
      const _tmp$9 = i + 1 | 0;
      const _tmp$10 = _tmp$9 >>> 0 < c.length ? c[_tmp$9] : $oob();
      const _tmp$11 = i + 3 | 0;
      const e = _tmp$10 + (_tmp$11 >>> 0 < c.length ? c[_tmp$11] : $oob()) | 0;
      if (i >>> 0 < tmp.length) {
        tmp[i] = a + e | 0;
      } else {
        $oob();
      }
      const _tmp$12 = i + 1 | 0;
      if (_tmp$12 >>> 0 < tmp.length) {
        tmp[_tmp$12] = b + d | 0;
      } else {
        $oob();
      }
      const _tmp$13 = i + 2 | 0;
      if (_tmp$13 >>> 0 < tmp.length) {
        tmp[_tmp$13] = b - d | 0;
      } else {
        $oob();
      }
      const _tmp$14 = i + 3 | 0;
      if (_tmp$14 >>> 0 < tmp.length) {
        tmp[_tmp$14] = a - e | 0;
      } else {
        $oob();
      }
      _tmp = r + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const f = $make_array_len_and_init(16, 0);
  let _tmp$2 = 0;
  while (true) {
    const col = _tmp$2;
    if (col < 4) {
      const _tmp$3 = col >>> 0 < tmp.length ? tmp[col] : $oob();
      const _tmp$4 = col + 8 | 0;
      const a = _tmp$3 + (_tmp$4 >>> 0 < tmp.length ? tmp[_tmp$4] : $oob()) | 0;
      const _tmp$5 = col >>> 0 < tmp.length ? tmp[col] : $oob();
      const _tmp$6 = col + 8 | 0;
      const b = _tmp$5 - (_tmp$6 >>> 0 < tmp.length ? tmp[_tmp$6] : $oob()) | 0;
      const _tmp$7 = col + 4 | 0;
      const _tmp$8 = _tmp$7 >>> 0 < tmp.length ? tmp[_tmp$7] : $oob();
      const _tmp$9 = col + 12 | 0;
      const d = _tmp$8 - (_tmp$9 >>> 0 < tmp.length ? tmp[_tmp$9] : $oob()) | 0;
      const _tmp$10 = col + 4 | 0;
      const _tmp$11 = _tmp$10 >>> 0 < tmp.length ? tmp[_tmp$10] : $oob();
      const _tmp$12 = col + 12 | 0;
      const e = _tmp$11 + (_tmp$12 >>> 0 < tmp.length ? tmp[_tmp$12] : $oob()) | 0;
      if (col >>> 0 < f.length) {
        f[col] = a + e | 0;
      } else {
        $oob();
      }
      const _tmp$13 = col + 4 | 0;
      if (_tmp$13 >>> 0 < f.length) {
        f[_tmp$13] = b + d | 0;
      } else {
        $oob();
      }
      const _tmp$14 = col + 8 | 0;
      if (_tmp$14 >>> 0 < f.length) {
        f[_tmp$14] = b - d | 0;
      } else {
        $oob();
      }
      const _tmp$15 = col + 12 | 0;
      if (_tmp$15 >>> 0 < f.length) {
        f[_tmp$15] = a - e | 0;
      } else {
        $oob();
      }
      _tmp$2 = col + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const qp_div6 = qp / 6 | 0;
  const qp_mod6 = qp % 6 | 0;
  const ls = Math.imul(qp_mod6 >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh26420level__scale__4x4__0.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh26420level__scale__4x4__0[qp_mod6] : $oob(), 16) | 0;
  const out = $make_array_len_and_init(16, 0);
  if (qp >= 36) {
    const shift = qp_div6 - 6 | 0;
    let _tmp$3 = 0;
    while (true) {
      const i = _tmp$3;
      if (i < 16) {
        if (i >>> 0 < out.length) {
          out[i] = Math.imul(i >>> 0 < f.length ? f[i] : $oob(), ls) << shift;
        } else {
          $oob();
        }
        _tmp$3 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  } else {
    const shift = 6 - qp_div6 | 0;
    const round = 1 << (shift - 1 | 0);
    let _tmp$3 = 0;
    while (true) {
      const i = _tmp$3;
      if (i < 16) {
        if (i >>> 0 < out.length) {
          out[i] = (Math.imul(i >>> 0 < f.length ? f[i] : $oob(), ls) | 0) + round >> shift;
        } else {
          $oob();
        }
        _tmp$3 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  return out;
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26429inverse__hadamard__chroma__dc(c, qp_c) {
  const f0 = (((0 >>> 0 < c.length ? c[0] : $oob()) + (1 >>> 0 < c.length ? c[1] : $oob()) | 0) + (2 >>> 0 < c.length ? c[2] : $oob()) | 0) + (3 >>> 0 < c.length ? c[3] : $oob()) | 0;
  const f1 = (((0 >>> 0 < c.length ? c[0] : $oob()) - (1 >>> 0 < c.length ? c[1] : $oob()) | 0) + (2 >>> 0 < c.length ? c[2] : $oob()) | 0) - (3 >>> 0 < c.length ? c[3] : $oob()) | 0;
  const f2 = (((0 >>> 0 < c.length ? c[0] : $oob()) + (1 >>> 0 < c.length ? c[1] : $oob()) | 0) - (2 >>> 0 < c.length ? c[2] : $oob()) | 0) - (3 >>> 0 < c.length ? c[3] : $oob()) | 0;
  const f3 = (((0 >>> 0 < c.length ? c[0] : $oob()) - (1 >>> 0 < c.length ? c[1] : $oob()) | 0) - (2 >>> 0 < c.length ? c[2] : $oob()) | 0) + (3 >>> 0 < c.length ? c[3] : $oob()) | 0;
  const qp_div6 = qp_c / 6 | 0;
  const qp_mod6 = qp_c % 6 | 0;
  const ls = qp_mod6 >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh26420level__scale__4x4__0.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh26420level__scale__4x4__0[qp_mod6] : $oob();
  const out = $make_array_len_and_init(4, 0);
  if (0 >>> 0 < out.length) {
    out[0] = Math.imul(f0, ls) << qp_div6 >> 1;
  } else {
    $oob();
  }
  if (1 >>> 0 < out.length) {
    out[1] = Math.imul(f1, ls) << qp_div6 >> 1;
  } else {
    $oob();
  }
  if (2 >>> 0 < out.length) {
    out[2] = Math.imul(f2, ls) << qp_div6 >> 1;
  } else {
    $oob();
  }
  if (3 >>> 0 < out.length) {
    out[3] = Math.imul(f3, ls) << qp_div6 >> 1;
  } else {
    $oob();
  }
  return out;
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26414idct__4x4__add(coeffs, plane, stride, x0, y0) {
  const tmp = $make_array_len_and_init(16, 0);
  let _tmp = 0;
  while (true) {
    const r = _tmp;
    if (r < 4) {
      const i = Math.imul(r, 4) | 0;
      const d0 = i >>> 0 < coeffs.length ? coeffs[i] : $oob();
      const _tmp$2 = i + 1 | 0;
      const d1 = _tmp$2 >>> 0 < coeffs.length ? coeffs[_tmp$2] : $oob();
      const _tmp$3 = i + 2 | 0;
      const d2 = _tmp$3 >>> 0 < coeffs.length ? coeffs[_tmp$3] : $oob();
      const _tmp$4 = i + 3 | 0;
      const d3 = _tmp$4 >>> 0 < coeffs.length ? coeffs[_tmp$4] : $oob();
      const e0 = d0 + d2 | 0;
      const e1 = d0 - d2 | 0;
      const e2 = (d1 >> 1) - d3 | 0;
      const e3 = d1 + (d3 >> 1) | 0;
      if (i >>> 0 < tmp.length) {
        tmp[i] = e0 + e3 | 0;
      } else {
        $oob();
      }
      const _tmp$5 = i + 1 | 0;
      if (_tmp$5 >>> 0 < tmp.length) {
        tmp[_tmp$5] = e1 + e2 | 0;
      } else {
        $oob();
      }
      const _tmp$6 = i + 2 | 0;
      if (_tmp$6 >>> 0 < tmp.length) {
        tmp[_tmp$6] = e1 - e2 | 0;
      } else {
        $oob();
      }
      const _tmp$7 = i + 3 | 0;
      if (_tmp$7 >>> 0 < tmp.length) {
        tmp[_tmp$7] = e0 - e3 | 0;
      } else {
        $oob();
      }
      _tmp = r + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = 0;
  while (true) {
    const col = _tmp$2;
    if (col < 4) {
      const t0 = col >>> 0 < tmp.length ? tmp[col] : $oob();
      const _tmp$3 = col + 4 | 0;
      const t1 = _tmp$3 >>> 0 < tmp.length ? tmp[_tmp$3] : $oob();
      const _tmp$4 = col + 8 | 0;
      const t2 = _tmp$4 >>> 0 < tmp.length ? tmp[_tmp$4] : $oob();
      const _tmp$5 = col + 12 | 0;
      const t3 = _tmp$5 >>> 0 < tmp.length ? tmp[_tmp$5] : $oob();
      const f0 = t0 + t2 | 0;
      const f1 = t0 - t2 | 0;
      const f2 = (t1 >> 1) - t3 | 0;
      const f3 = t1 + (t3 >> 1) | 0;
      const r0 = (f0 + f3 | 0) + 32 >> 6;
      const r1 = (f1 + f2 | 0) + 32 >> 6;
      const r2 = (f1 - f2 | 0) + 32 >> 6;
      const r3 = (f0 - f3 | 0) + 32 >> 6;
      const p0 = ((Math.imul(y0, stride) | 0) + x0 | 0) + col | 0;
      const p1 = ((Math.imul(y0 + 1 | 0, stride) | 0) + x0 | 0) + col | 0;
      const p2 = ((Math.imul(y0 + 2 | 0, stride) | 0) + x0 | 0) + col | 0;
      const p3 = ((Math.imul(y0 + 3 | 0, stride) | 0) + x0 | 0) + col | 0;
      const _p = (p0 >>> 0 < plane.length ? plane[p0] : $oob()) + r0 | 0;
      if (p0 >>> 0 < plane.length) {
        plane[p0] = (_p < 0 ? 0 : _p > 255 ? 255 : _p) & 255;
      } else {
        $oob();
      }
      const _p$2 = (p1 >>> 0 < plane.length ? plane[p1] : $oob()) + r1 | 0;
      if (p1 >>> 0 < plane.length) {
        plane[p1] = (_p$2 < 0 ? 0 : _p$2 > 255 ? 255 : _p$2) & 255;
      } else {
        $oob();
      }
      const _p$3 = (p2 >>> 0 < plane.length ? plane[p2] : $oob()) + r2 | 0;
      if (p2 >>> 0 < plane.length) {
        plane[p2] = (_p$3 < 0 ? 0 : _p$3 > 255 ? 255 : _p$3) & 255;
      } else {
        $oob();
      }
      const _p$4 = (p3 >>> 0 < plane.length ? plane[p3] : $oob()) + r3 | 0;
      if (p3 >>> 0 < plane.length) {
        plane[p3] = (_p$4 < 0 ? 0 : _p$4 > 255 ? 255 : _p$4) & 255;
      } else {
        $oob();
      }
      _tmp$2 = col + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26418idct__4x4__dc__add(dc_val, plane, stride, x0, y0) {
  const delta = dc_val + 32 >> 6;
  if (delta === 0) {
    return undefined;
  }
  let _tmp = 0;
  while (true) {
    const r = _tmp;
    if (r < 4) {
      const base = (Math.imul(y0 + r | 0, stride) | 0) + x0 | 0;
      let _tmp$2 = 0;
      while (true) {
        const c = _tmp$2;
        if (c < 4) {
          const _tmp$3 = base + c | 0;
          const _tmp$4 = base + c | 0;
          const _p = (_tmp$4 >>> 0 < plane.length ? plane[_tmp$4] : $oob()) + delta | 0;
          if (_tmp$3 >>> 0 < plane.length) {
            plane[_tmp$3] = (_p < 0 ? 0 : _p > 255 ? 255 : _p) & 255;
          } else {
            $oob();
          }
          _tmp$2 = c + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = r + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MP215Sam_2dHui_2ddot11moon_2dh2643Sps6height(self) {
  const raw_h = Math.imul(self.pic_height_in_mbs, 16) | 0;
  return self.frame_cropping_flag ? raw_h - (Math.imul(self.crop_top + self.crop_bottom | 0, 2) | 0) | 0 : raw_h;
}
function _M0MP215Sam_2dHui_2ddot11moon_2dh2643Sps5width(self) {
  const raw_w = Math.imul(self.pic_width_in_mbs, 16) | 0;
  return self.frame_cropping_flag ? raw_w - (Math.imul(self.crop_left + self.crop_right | 0, 2) | 0) | 0 : raw_w;
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26419render__probe__text(res) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(8);
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "moon-h264 stream probe\n");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "======================\n");
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(12);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "NAL units: ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, res.nalus.len);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\n");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, _string_builder.val);
  const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(12);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "SPS count: ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, res.sps_list.len);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\n");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, _string_builder$2.val);
  const _bind = res.sps_list;
  const _bind$2 = _bind.len;
  const _bind$3 = _bind.buf;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const s = _bind$3[_];
      const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(74);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "  SPS[");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, s.sps_id);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "]: profile_idc=");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, s.profile_idc);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, " level_idc=");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, s.level_idc);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, " ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, _M0MP215Sam_2dHui_2ddot11moon_2dh2643Sps5width(s));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "x");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, _M0MP215Sam_2dHui_2ddot11moon_2dh2643Sps6height(s));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, " (");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, s.pic_width_in_mbs);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "x");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, s.pic_height_in_mbs);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, " MBs) max_refs=");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, s.max_num_ref_frames);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, " poc_type=");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, s.pic_order_cnt_type);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, " crop=(");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, s.crop_left);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ",");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, s.crop_right);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ",");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, s.crop_top);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ",");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, s.crop_bottom);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ")\n");
      _M0IPB13StringBuilderPB6Logger13write__string(sb, _string_builder$3.val);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(12);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "PPS count: ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, res.pps_list.len);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\n");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, _string_builder$3.val);
  const _bind$4 = res.pps_list;
  const _bind$5 = _bind$4.len;
  const _bind$6 = _bind$4.buf;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$5) {
      const p = _bind$6[_];
      const ent = p.entropy_coding_mode_flag ? "CABAC" : "CAVLC";
      const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(55);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "  PPS[");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, p.pps_id);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "]->SPS[");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, p.sps_id);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "]: ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$4, ent);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, " init_qp=");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, 26 + p.pic_init_qp_minus26 | 0);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, " chroma_qp_off=");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, p.chroma_qp_index_offset);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, " deblock_ctrl=");
      _M0MPB13StringBuilder13write__objectGbE(_string_builder$4, p.deblocking_filter_control_present_flag);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "\n");
      _M0IPB13StringBuilderPB6Logger13write__string(sb, _string_builder$4.val);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(17);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "Decoded frames: ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, res.frames.len);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "\n");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, _string_builder$4.val);
  const _bind$7 = res.frames;
  const _bind$8 = _bind$7.len;
  const _bind$9 = _bind$7.buf;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$8) {
      const f = _bind$9[_];
      const m = f.meta;
      let i4 = 0;
      let i16 = 0;
      let pskip = 0;
      let pinter = 0;
      const _bind$10 = m.mbs;
      const _bind$11 = _bind$10.len;
      const _bind$12 = _bind$10.buf;
      let _tmp$4 = 0;
      while (true) {
        const _$2 = _tmp$4;
        if (_$2 < _bind$11) {
          const mb = _bind$12[_$2];
          _L: {
            _L$2: {
              const _bind$13 = mb.kind;
              switch (_bind$13) {
                case 0: {
                  i4 = i4 + 1 | 0;
                  break;
                }
                case 1: {
                  break _L$2;
                }
                case 2: {
                  break _L$2;
                }
                case 3: {
                  pskip = pskip + 1 | 0;
                  break;
                }
                default: {
                  pinter = pinter + 1 | 0;
                }
              }
              break _L;
            }
            i16 = i16 + 1 | 0;
          }
          _tmp$4 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const idr = m.is_idr ? "IDR" : "   ";
      const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(52);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "  Frame #");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, m.frame_index);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, " ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$5, m.slice_type);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, " ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$5, idr);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, " fn=");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, m.frame_num);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, " ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, m.width);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "x");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, m.height);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, " qp=");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, m.slice_qp);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, " bytes=");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, m.nal_bytes);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, " MBs(I4=");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, i4);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, ",I16=");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, i16);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, ",P=");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, pinter);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, ",Skip=");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, pskip);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, ")\n");
      _M0IPB13StringBuilderPB6Logger13write__string(sb, _string_builder$5.val);
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return sb.val;
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26421nal__unit__type__name(nal_type) {
  switch (nal_type) {
    case 1: {
      return "Slice (non-IDR)";
    }
    case 2: {
      return "Slice Data Partition A";
    }
    case 3: {
      return "Slice Data Partition B";
    }
    case 4: {
      return "Slice Data Partition C";
    }
    case 5: {
      return "IDR Slice";
    }
    case 6: {
      return "SEI";
    }
    case 7: {
      return "SPS";
    }
    case 8: {
      return "PPS";
    }
    case 9: {
      return "AUD";
    }
    case 10: {
      return "End of Sequence";
    }
    case 11: {
      return "End of Stream";
    }
    case 12: {
      return "Filler Data";
    }
    default: {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(6);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "NALU(");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, nal_type);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ")");
      return _string_builder.val;
    }
  }
}
function _M0MP215Sam_2dHui_2ddot11moon_2dh2646MbKind5label(self) {
  switch (self) {
    case 0: {
      return "I_4x4";
    }
    case 1: {
      return "I_16x16";
    }
    case 2: {
      return "I_PCM";
    }
    case 3: {
      return "P_Skip";
    }
    case 4: {
      return "P_16x16";
    }
    case 5: {
      return "P_16x8";
    }
    case 6: {
      return "P_8x16";
    }
    default: {
      return "P_8x8";
    }
  }
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26414ebsp__to__rbsp(data, start, end_) {
  const buf = _M0MPC16buffer6Buffer14Buffer_2einner(end_ - start | 0);
  let i = start;
  let zeros = 0;
  while (true) {
    if (i < end_) {
      const _tmp = i;
      const b = _tmp >>> 0 < data.length ? data[_tmp] : $oob();
      if (zeros >= 2 && b === 3) {
        zeros = 0;
        i = i + 1 | 0;
        continue;
      }
      _M0MPC16buffer6Buffer11write__byte(buf, b);
      if (b === 0) {
        zeros = zeros + 1 | 0;
      } else {
        zeros = 0;
      }
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPC16buffer6Buffer9to__bytes(buf);
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26422extract__annexb__nalus(data) {
  const n = data.length;
  const starts = new _M0TPB5ArrayGiE([], 0);
  const prefix_lens = new _M0TPB5ArrayGiE([], 0);
  let i = 0;
  while (true) {
    if ((i + 2 | 0) < n) {
      let _tmp;
      const _tmp$2 = i;
      if ((_tmp$2 >>> 0 < data.length ? data[_tmp$2] : $oob()) === 0) {
        const _tmp$3 = i + 1 | 0;
        _tmp = (_tmp$3 >>> 0 < data.length ? data[_tmp$3] : $oob()) === 0;
      } else {
        _tmp = false;
      }
      if (_tmp) {
        const _tmp$3 = i + 2 | 0;
        if ((_tmp$3 >>> 0 < data.length ? data[_tmp$3] : $oob()) === 1) {
          _M0MPC15array5Array4pushGiE(starts, i + 3 | 0);
          _M0MPC15array5Array4pushGiE(prefix_lens, 3);
          i = i + 3 | 0;
          continue;
        } else {
          let _tmp$4;
          if ((i + 3 | 0) < n) {
            let _tmp$5;
            const _tmp$6 = i + 2 | 0;
            if ((_tmp$6 >>> 0 < data.length ? data[_tmp$6] : $oob()) === 0) {
              const _tmp$7 = i + 3 | 0;
              _tmp$5 = (_tmp$7 >>> 0 < data.length ? data[_tmp$7] : $oob()) === 1;
            } else {
              _tmp$5 = false;
            }
            _tmp$4 = _tmp$5;
          } else {
            _tmp$4 = false;
          }
          if (_tmp$4) {
            _M0MPC15array5Array4pushGiE(starts, i + 4 | 0);
            _M0MPC15array5Array4pushGiE(prefix_lens, 4);
            i = i + 4 | 0;
            continue;
          }
        }
      }
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const nalus = new _M0TPB5ArrayGRP215Sam_2dHui_2ddot11moon_2dh2647NalUnitE([], 0);
  let _tmp = 0;
  while (true) {
    const idx = _tmp;
    if (idx < starts.len) {
      _L: {
        if (idx < 0 || idx >= starts.len) {
          $panic();
        }
        const s = starts.buf[idx];
        let e;
        if ((idx + 1 | 0) < starts.len) {
          const _bind = idx + 1 | 0;
          if (_bind < 0 || _bind >= starts.len) {
            $panic();
          }
          const _tmp$2 = starts.buf[_bind];
          const _bind$2 = idx + 1 | 0;
          if (_bind$2 < 0 || _bind$2 >= prefix_lens.len) {
            $panic();
          }
          e = _tmp$2 - prefix_lens.buf[_bind$2] | 0;
        } else {
          e = n;
        }
        while (true) {
          let _tmp$2;
          if (e > s) {
            const _tmp$3 = e - 1 | 0;
            _tmp$2 = (_tmp$3 >>> 0 < data.length ? data[_tmp$3] : $oob()) === 0;
          } else {
            _tmp$2 = false;
          }
          if (_tmp$2) {
            e = e - 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (s >= e) {
          break _L;
        }
        const header = s >>> 0 < data.length ? data[s] : $oob();
        const nal_ref_idc = header >> 5 & 3;
        const nal_unit_type = header & 31;
        const rbsp = _M0FP215Sam_2dHui_2ddot11moon_2dh26414ebsp__to__rbsp(data, s + 1 | 0, e);
        if (idx < 0 || idx >= prefix_lens.len) {
          $panic();
        }
        _M0MPC15array5Array4pushGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(nalus, new _M0TP215Sam_2dHui_2ddot11moon_2dh2647NalUnit(nal_ref_idc, nal_unit_type, s - prefix_lens.buf[idx] | 0, e - s | 0, rbsp));
        break _L;
      }
      _tmp = idx + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return nalus;
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26419predict__intra__4x4(plane, stride, x0, y0, mode, avail_top, avail_left, avail_top_right, avail_top_left) {
  const t = $make_array_len_and_init(8, 128);
  const l = $make_array_len_and_init(4, 128);
  if (avail_top) {
    const top_row = Math.imul(y0 - 1 | 0, stride) | 0;
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < 4) {
        const _tmp$2 = (top_row + x0 | 0) + i | 0;
        if (i >>> 0 < t.length) {
          t[i] = _tmp$2 >>> 0 < plane.length ? plane[_tmp$2] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (avail_top_right) {
      let _tmp$2 = 0;
      while (true) {
        const i = _tmp$2;
        if (i < 4) {
          const _tmp$3 = 4 + i | 0;
          const _tmp$4 = ((top_row + x0 | 0) + 4 | 0) + i | 0;
          if (_tmp$3 >>> 0 < t.length) {
            t[_tmp$3] = _tmp$4 >>> 0 < plane.length ? plane[_tmp$4] : $oob();
          } else {
            $oob();
          }
          _tmp$2 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const rep = 3 >>> 0 < t.length ? t[3] : $oob();
      if (4 >>> 0 < t.length) {
        t[4] = rep;
      } else {
        $oob();
      }
      if (5 >>> 0 < t.length) {
        t[5] = rep;
      } else {
        $oob();
      }
      if (6 >>> 0 < t.length) {
        t[6] = rep;
      } else {
        $oob();
      }
      if (7 >>> 0 < t.length) {
        t[7] = rep;
      } else {
        $oob();
      }
    }
  }
  if (avail_left) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < 4) {
        const _tmp$2 = ((Math.imul(y0 + i | 0, stride) | 0) + x0 | 0) - 1 | 0;
        if (i >>> 0 < l.length) {
          l[i] = _tmp$2 >>> 0 < plane.length ? plane[_tmp$2] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  let tl;
  if (avail_top_left) {
    const _tmp = ((Math.imul(y0 - 1 | 0, stride) | 0) + x0 | 0) - 1 | 0;
    tl = _tmp >>> 0 < plane.length ? plane[_tmp] : $oob();
  } else {
    tl = 128;
  }
  const pred = $make_array_len_and_init(16, 128);
  switch (mode) {
    case 0: {
      let _tmp = 0;
      while (true) {
        const y = _tmp;
        if (y < 4) {
          let _tmp$2 = 0;
          while (true) {
            const x = _tmp$2;
            if (x < 4) {
              const _tmp$3 = (Math.imul(y, 4) | 0) + x | 0;
              if (_tmp$3 >>> 0 < pred.length) {
                pred[_tmp$3] = x >>> 0 < t.length ? t[x] : $oob();
              } else {
                $oob();
              }
              _tmp$2 = x + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp = y + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      break;
    }
    case 1: {
      let _tmp$2 = 0;
      while (true) {
        const y = _tmp$2;
        if (y < 4) {
          let _tmp$3 = 0;
          while (true) {
            const x = _tmp$3;
            if (x < 4) {
              const _tmp$4 = (Math.imul(y, 4) | 0) + x | 0;
              if (_tmp$4 >>> 0 < pred.length) {
                pred[_tmp$4] = y >>> 0 < l.length ? l[y] : $oob();
              } else {
                $oob();
              }
              _tmp$3 = x + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp$2 = y + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      break;
    }
    case 2: {
      const dc = avail_top && avail_left ? ((((((((0 >>> 0 < t.length ? t[0] : $oob()) + (1 >>> 0 < t.length ? t[1] : $oob()) | 0) + (2 >>> 0 < t.length ? t[2] : $oob()) | 0) + (3 >>> 0 < t.length ? t[3] : $oob()) | 0) + (0 >>> 0 < l.length ? l[0] : $oob()) | 0) + (1 >>> 0 < l.length ? l[1] : $oob()) | 0) + (2 >>> 0 < l.length ? l[2] : $oob()) | 0) + (3 >>> 0 < l.length ? l[3] : $oob()) | 0) + 4 >> 3 : avail_top ? ((((0 >>> 0 < t.length ? t[0] : $oob()) + (1 >>> 0 < t.length ? t[1] : $oob()) | 0) + (2 >>> 0 < t.length ? t[2] : $oob()) | 0) + (3 >>> 0 < t.length ? t[3] : $oob()) | 0) + 2 >> 2 : avail_left ? ((((0 >>> 0 < l.length ? l[0] : $oob()) + (1 >>> 0 < l.length ? l[1] : $oob()) | 0) + (2 >>> 0 < l.length ? l[2] : $oob()) | 0) + (3 >>> 0 < l.length ? l[3] : $oob()) | 0) + 2 >> 2 : 128;
      let _tmp$3 = 0;
      while (true) {
        const i = _tmp$3;
        if (i < 16) {
          if (i >>> 0 < pred.length) {
            pred[i] = dc;
          } else {
            $oob();
          }
          _tmp$3 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      break;
    }
    case 3: {
      let _tmp$4 = 0;
      while (true) {
        const y = _tmp$4;
        if (y < 4) {
          let _tmp$5 = 0;
          while (true) {
            const x = _tmp$5;
            if (x < 4) {
              let v;
              if (x === 3 && y === 3) {
                v = ((6 >>> 0 < t.length ? t[6] : $oob()) + (Math.imul(3, 7 >>> 0 < t.length ? t[7] : $oob()) | 0) | 0) + 2 >> 2;
              } else {
                const _tmp$6 = x + y | 0;
                const _tmp$7 = _tmp$6 >>> 0 < t.length ? t[_tmp$6] : $oob();
                const _tmp$8 = (x + y | 0) + 1 | 0;
                const _tmp$9 = _tmp$7 + (Math.imul(2, _tmp$8 >>> 0 < t.length ? t[_tmp$8] : $oob()) | 0) | 0;
                const _tmp$10 = (x + y | 0) + 2 | 0;
                v = (_tmp$9 + (_tmp$10 >>> 0 < t.length ? t[_tmp$10] : $oob()) | 0) + 2 >> 2;
              }
              const _tmp$6 = (Math.imul(y, 4) | 0) + x | 0;
              if (_tmp$6 >>> 0 < pred.length) {
                pred[_tmp$6] = v;
              } else {
                $oob();
              }
              _tmp$5 = x + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp$4 = y + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      break;
    }
    case 4: {
      const d0 = (((3 >>> 0 < l.length ? l[3] : $oob()) + (Math.imul(2, 2 >>> 0 < l.length ? l[2] : $oob()) | 0) | 0) + (1 >>> 0 < l.length ? l[1] : $oob()) | 0) + 2 >> 2;
      const d1 = (((2 >>> 0 < l.length ? l[2] : $oob()) + (Math.imul(2, 1 >>> 0 < l.length ? l[1] : $oob()) | 0) | 0) + (0 >>> 0 < l.length ? l[0] : $oob()) | 0) + 2 >> 2;
      const d2 = (((1 >>> 0 < l.length ? l[1] : $oob()) + (Math.imul(2, 0 >>> 0 < l.length ? l[0] : $oob()) | 0) | 0) + tl | 0) + 2 >> 2;
      const d3 = (((0 >>> 0 < l.length ? l[0] : $oob()) + (Math.imul(2, tl) | 0) | 0) + (0 >>> 0 < t.length ? t[0] : $oob()) | 0) + 2 >> 2;
      const d4 = ((tl + (Math.imul(2, 0 >>> 0 < t.length ? t[0] : $oob()) | 0) | 0) + (1 >>> 0 < t.length ? t[1] : $oob()) | 0) + 2 >> 2;
      const d5 = (((0 >>> 0 < t.length ? t[0] : $oob()) + (Math.imul(2, 1 >>> 0 < t.length ? t[1] : $oob()) | 0) | 0) + (2 >>> 0 < t.length ? t[2] : $oob()) | 0) + 2 >> 2;
      const d6 = (((1 >>> 0 < t.length ? t[1] : $oob()) + (Math.imul(2, 2 >>> 0 < t.length ? t[2] : $oob()) | 0) | 0) + (3 >>> 0 < t.length ? t[3] : $oob()) | 0) + 2 >> 2;
      if (12 >>> 0 < pred.length) {
        pred[12] = d0;
      } else {
        $oob();
      }
      if (8 >>> 0 < pred.length) {
        pred[8] = d1;
      } else {
        $oob();
      }
      if (13 >>> 0 < pred.length) {
        pred[13] = d1;
      } else {
        $oob();
      }
      if (4 >>> 0 < pred.length) {
        pred[4] = d2;
      } else {
        $oob();
      }
      if (9 >>> 0 < pred.length) {
        pred[9] = d2;
      } else {
        $oob();
      }
      if (14 >>> 0 < pred.length) {
        pred[14] = d2;
      } else {
        $oob();
      }
      if (0 >>> 0 < pred.length) {
        pred[0] = d3;
      } else {
        $oob();
      }
      if (5 >>> 0 < pred.length) {
        pred[5] = d3;
      } else {
        $oob();
      }
      if (10 >>> 0 < pred.length) {
        pred[10] = d3;
      } else {
        $oob();
      }
      if (15 >>> 0 < pred.length) {
        pred[15] = d3;
      } else {
        $oob();
      }
      if (1 >>> 0 < pred.length) {
        pred[1] = d4;
      } else {
        $oob();
      }
      if (6 >>> 0 < pred.length) {
        pred[6] = d4;
      } else {
        $oob();
      }
      if (11 >>> 0 < pred.length) {
        pred[11] = d4;
      } else {
        $oob();
      }
      if (2 >>> 0 < pred.length) {
        pred[2] = d5;
      } else {
        $oob();
      }
      if (7 >>> 0 < pred.length) {
        pred[7] = d5;
      } else {
        $oob();
      }
      if (3 >>> 0 < pred.length) {
        pred[3] = d6;
      } else {
        $oob();
      }
      break;
    }
    case 5: {
      const vr0 = (tl + (0 >>> 0 < t.length ? t[0] : $oob()) | 0) + 1 >> 1;
      const vr1 = ((0 >>> 0 < t.length ? t[0] : $oob()) + (1 >>> 0 < t.length ? t[1] : $oob()) | 0) + 1 >> 1;
      const vr2 = ((1 >>> 0 < t.length ? t[1] : $oob()) + (2 >>> 0 < t.length ? t[2] : $oob()) | 0) + 1 >> 1;
      const vr3 = ((2 >>> 0 < t.length ? t[2] : $oob()) + (3 >>> 0 < t.length ? t[3] : $oob()) | 0) + 1 >> 1;
      const vr4 = (((0 >>> 0 < l.length ? l[0] : $oob()) + (Math.imul(2, tl) | 0) | 0) + (0 >>> 0 < t.length ? t[0] : $oob()) | 0) + 2 >> 2;
      const vr5 = ((tl + (Math.imul(2, 0 >>> 0 < t.length ? t[0] : $oob()) | 0) | 0) + (1 >>> 0 < t.length ? t[1] : $oob()) | 0) + 2 >> 2;
      const vr6 = (((0 >>> 0 < t.length ? t[0] : $oob()) + (Math.imul(2, 1 >>> 0 < t.length ? t[1] : $oob()) | 0) | 0) + (2 >>> 0 < t.length ? t[2] : $oob()) | 0) + 2 >> 2;
      const vr7 = (((1 >>> 0 < t.length ? t[1] : $oob()) + (Math.imul(2, 2 >>> 0 < t.length ? t[2] : $oob()) | 0) | 0) + (3 >>> 0 < t.length ? t[3] : $oob()) | 0) + 2 >> 2;
      const vr8 = ((tl + (Math.imul(2, 0 >>> 0 < l.length ? l[0] : $oob()) | 0) | 0) + (1 >>> 0 < l.length ? l[1] : $oob()) | 0) + 2 >> 2;
      const vr9 = (((0 >>> 0 < l.length ? l[0] : $oob()) + (Math.imul(2, 1 >>> 0 < l.length ? l[1] : $oob()) | 0) | 0) + (2 >>> 0 < l.length ? l[2] : $oob()) | 0) + 2 >> 2;
      if (0 >>> 0 < pred.length) {
        pred[0] = vr0;
      } else {
        $oob();
      }
      if (9 >>> 0 < pred.length) {
        pred[9] = vr0;
      } else {
        $oob();
      }
      if (1 >>> 0 < pred.length) {
        pred[1] = vr1;
      } else {
        $oob();
      }
      if (10 >>> 0 < pred.length) {
        pred[10] = vr1;
      } else {
        $oob();
      }
      if (2 >>> 0 < pred.length) {
        pred[2] = vr2;
      } else {
        $oob();
      }
      if (11 >>> 0 < pred.length) {
        pred[11] = vr2;
      } else {
        $oob();
      }
      if (3 >>> 0 < pred.length) {
        pred[3] = vr3;
      } else {
        $oob();
      }
      if (4 >>> 0 < pred.length) {
        pred[4] = vr4;
      } else {
        $oob();
      }
      if (13 >>> 0 < pred.length) {
        pred[13] = vr4;
      } else {
        $oob();
      }
      if (5 >>> 0 < pred.length) {
        pred[5] = vr5;
      } else {
        $oob();
      }
      if (14 >>> 0 < pred.length) {
        pred[14] = vr5;
      } else {
        $oob();
      }
      if (6 >>> 0 < pred.length) {
        pred[6] = vr6;
      } else {
        $oob();
      }
      if (15 >>> 0 < pred.length) {
        pred[15] = vr6;
      } else {
        $oob();
      }
      if (7 >>> 0 < pred.length) {
        pred[7] = vr7;
      } else {
        $oob();
      }
      if (8 >>> 0 < pred.length) {
        pred[8] = vr8;
      } else {
        $oob();
      }
      if (12 >>> 0 < pred.length) {
        pred[12] = vr9;
      } else {
        $oob();
      }
      break;
    }
    case 6: {
      const hd0 = (tl + (0 >>> 0 < l.length ? l[0] : $oob()) | 0) + 1 >> 1;
      const hd1 = (((0 >>> 0 < l.length ? l[0] : $oob()) + (Math.imul(2, tl) | 0) | 0) + (0 >>> 0 < t.length ? t[0] : $oob()) | 0) + 2 >> 2;
      const hd2 = ((tl + (Math.imul(2, 0 >>> 0 < t.length ? t[0] : $oob()) | 0) | 0) + (1 >>> 0 < t.length ? t[1] : $oob()) | 0) + 2 >> 2;
      const hd3 = (((0 >>> 0 < t.length ? t[0] : $oob()) + (Math.imul(2, 1 >>> 0 < t.length ? t[1] : $oob()) | 0) | 0) + (2 >>> 0 < t.length ? t[2] : $oob()) | 0) + 2 >> 2;
      const hd4 = ((0 >>> 0 < l.length ? l[0] : $oob()) + (1 >>> 0 < l.length ? l[1] : $oob()) | 0) + 1 >> 1;
      const hd5 = ((tl + (Math.imul(2, 0 >>> 0 < l.length ? l[0] : $oob()) | 0) | 0) + (1 >>> 0 < l.length ? l[1] : $oob()) | 0) + 2 >> 2;
      const hd6 = ((1 >>> 0 < l.length ? l[1] : $oob()) + (2 >>> 0 < l.length ? l[2] : $oob()) | 0) + 1 >> 1;
      const hd7 = (((0 >>> 0 < l.length ? l[0] : $oob()) + (Math.imul(2, 1 >>> 0 < l.length ? l[1] : $oob()) | 0) | 0) + (2 >>> 0 < l.length ? l[2] : $oob()) | 0) + 2 >> 2;
      const hd8 = ((2 >>> 0 < l.length ? l[2] : $oob()) + (3 >>> 0 < l.length ? l[3] : $oob()) | 0) + 1 >> 1;
      const hd9 = (((1 >>> 0 < l.length ? l[1] : $oob()) + (Math.imul(2, 2 >>> 0 < l.length ? l[2] : $oob()) | 0) | 0) + (3 >>> 0 < l.length ? l[3] : $oob()) | 0) + 2 >> 2;
      if (0 >>> 0 < pred.length) {
        pred[0] = hd0;
      } else {
        $oob();
      }
      if (6 >>> 0 < pred.length) {
        pred[6] = hd0;
      } else {
        $oob();
      }
      if (1 >>> 0 < pred.length) {
        pred[1] = hd1;
      } else {
        $oob();
      }
      if (7 >>> 0 < pred.length) {
        pred[7] = hd1;
      } else {
        $oob();
      }
      if (2 >>> 0 < pred.length) {
        pred[2] = hd2;
      } else {
        $oob();
      }
      if (3 >>> 0 < pred.length) {
        pred[3] = hd3;
      } else {
        $oob();
      }
      if (4 >>> 0 < pred.length) {
        pred[4] = hd4;
      } else {
        $oob();
      }
      if (10 >>> 0 < pred.length) {
        pred[10] = hd4;
      } else {
        $oob();
      }
      if (5 >>> 0 < pred.length) {
        pred[5] = hd5;
      } else {
        $oob();
      }
      if (11 >>> 0 < pred.length) {
        pred[11] = hd5;
      } else {
        $oob();
      }
      if (8 >>> 0 < pred.length) {
        pred[8] = hd6;
      } else {
        $oob();
      }
      if (14 >>> 0 < pred.length) {
        pred[14] = hd6;
      } else {
        $oob();
      }
      if (9 >>> 0 < pred.length) {
        pred[9] = hd7;
      } else {
        $oob();
      }
      if (15 >>> 0 < pred.length) {
        pred[15] = hd7;
      } else {
        $oob();
      }
      if (12 >>> 0 < pred.length) {
        pred[12] = hd8;
      } else {
        $oob();
      }
      if (13 >>> 0 < pred.length) {
        pred[13] = hd9;
      } else {
        $oob();
      }
      break;
    }
    case 7: {
      if (0 >>> 0 < pred.length) {
        pred[0] = ((0 >>> 0 < t.length ? t[0] : $oob()) + (1 >>> 0 < t.length ? t[1] : $oob()) | 0) + 1 >> 1;
      } else {
        $oob();
      }
      if (1 >>> 0 < pred.length) {
        pred[1] = ((1 >>> 0 < t.length ? t[1] : $oob()) + (2 >>> 0 < t.length ? t[2] : $oob()) | 0) + 1 >> 1;
      } else {
        $oob();
      }
      if (2 >>> 0 < pred.length) {
        pred[2] = ((2 >>> 0 < t.length ? t[2] : $oob()) + (3 >>> 0 < t.length ? t[3] : $oob()) | 0) + 1 >> 1;
      } else {
        $oob();
      }
      if (3 >>> 0 < pred.length) {
        pred[3] = ((3 >>> 0 < t.length ? t[3] : $oob()) + (4 >>> 0 < t.length ? t[4] : $oob()) | 0) + 1 >> 1;
      } else {
        $oob();
      }
      if (4 >>> 0 < pred.length) {
        pred[4] = (((0 >>> 0 < t.length ? t[0] : $oob()) + (Math.imul(2, 1 >>> 0 < t.length ? t[1] : $oob()) | 0) | 0) + (2 >>> 0 < t.length ? t[2] : $oob()) | 0) + 2 >> 2;
      } else {
        $oob();
      }
      if (5 >>> 0 < pred.length) {
        pred[5] = (((1 >>> 0 < t.length ? t[1] : $oob()) + (Math.imul(2, 2 >>> 0 < t.length ? t[2] : $oob()) | 0) | 0) + (3 >>> 0 < t.length ? t[3] : $oob()) | 0) + 2 >> 2;
      } else {
        $oob();
      }
      if (6 >>> 0 < pred.length) {
        pred[6] = (((2 >>> 0 < t.length ? t[2] : $oob()) + (Math.imul(2, 3 >>> 0 < t.length ? t[3] : $oob()) | 0) | 0) + (4 >>> 0 < t.length ? t[4] : $oob()) | 0) + 2 >> 2;
      } else {
        $oob();
      }
      if (7 >>> 0 < pred.length) {
        pred[7] = (((3 >>> 0 < t.length ? t[3] : $oob()) + (Math.imul(2, 4 >>> 0 < t.length ? t[4] : $oob()) | 0) | 0) + (5 >>> 0 < t.length ? t[5] : $oob()) | 0) + 2 >> 2;
      } else {
        $oob();
      }
      if (8 >>> 0 < pred.length) {
        pred[8] = ((1 >>> 0 < t.length ? t[1] : $oob()) + (2 >>> 0 < t.length ? t[2] : $oob()) | 0) + 1 >> 1;
      } else {
        $oob();
      }
      if (9 >>> 0 < pred.length) {
        pred[9] = ((2 >>> 0 < t.length ? t[2] : $oob()) + (3 >>> 0 < t.length ? t[3] : $oob()) | 0) + 1 >> 1;
      } else {
        $oob();
      }
      if (10 >>> 0 < pred.length) {
        pred[10] = ((3 >>> 0 < t.length ? t[3] : $oob()) + (4 >>> 0 < t.length ? t[4] : $oob()) | 0) + 1 >> 1;
      } else {
        $oob();
      }
      if (11 >>> 0 < pred.length) {
        pred[11] = ((4 >>> 0 < t.length ? t[4] : $oob()) + (5 >>> 0 < t.length ? t[5] : $oob()) | 0) + 1 >> 1;
      } else {
        $oob();
      }
      if (12 >>> 0 < pred.length) {
        pred[12] = (((1 >>> 0 < t.length ? t[1] : $oob()) + (Math.imul(2, 2 >>> 0 < t.length ? t[2] : $oob()) | 0) | 0) + (3 >>> 0 < t.length ? t[3] : $oob()) | 0) + 2 >> 2;
      } else {
        $oob();
      }
      if (13 >>> 0 < pred.length) {
        pred[13] = (((2 >>> 0 < t.length ? t[2] : $oob()) + (Math.imul(2, 3 >>> 0 < t.length ? t[3] : $oob()) | 0) | 0) + (4 >>> 0 < t.length ? t[4] : $oob()) | 0) + 2 >> 2;
      } else {
        $oob();
      }
      if (14 >>> 0 < pred.length) {
        pred[14] = (((3 >>> 0 < t.length ? t[3] : $oob()) + (Math.imul(2, 4 >>> 0 < t.length ? t[4] : $oob()) | 0) | 0) + (5 >>> 0 < t.length ? t[5] : $oob()) | 0) + 2 >> 2;
      } else {
        $oob();
      }
      if (15 >>> 0 < pred.length) {
        pred[15] = (((4 >>> 0 < t.length ? t[4] : $oob()) + (Math.imul(2, 5 >>> 0 < t.length ? t[5] : $oob()) | 0) | 0) + (6 >>> 0 < t.length ? t[6] : $oob()) | 0) + 2 >> 2;
      } else {
        $oob();
      }
      break;
    }
    default: {
      const hu0 = ((0 >>> 0 < l.length ? l[0] : $oob()) + (1 >>> 0 < l.length ? l[1] : $oob()) | 0) + 1 >> 1;
      const hu1 = (((0 >>> 0 < l.length ? l[0] : $oob()) + (Math.imul(2, 1 >>> 0 < l.length ? l[1] : $oob()) | 0) | 0) + (2 >>> 0 < l.length ? l[2] : $oob()) | 0) + 2 >> 2;
      const hu2 = ((1 >>> 0 < l.length ? l[1] : $oob()) + (2 >>> 0 < l.length ? l[2] : $oob()) | 0) + 1 >> 1;
      const hu3 = (((1 >>> 0 < l.length ? l[1] : $oob()) + (Math.imul(2, 2 >>> 0 < l.length ? l[2] : $oob()) | 0) | 0) + (3 >>> 0 < l.length ? l[3] : $oob()) | 0) + 2 >> 2;
      const hu4 = ((2 >>> 0 < l.length ? l[2] : $oob()) + (3 >>> 0 < l.length ? l[3] : $oob()) | 0) + 1 >> 1;
      const hu5 = ((2 >>> 0 < l.length ? l[2] : $oob()) + (Math.imul(3, 3 >>> 0 < l.length ? l[3] : $oob()) | 0) | 0) + 2 >> 2;
      const hu6 = 3 >>> 0 < l.length ? l[3] : $oob();
      if (0 >>> 0 < pred.length) {
        pred[0] = hu0;
      } else {
        $oob();
      }
      if (1 >>> 0 < pred.length) {
        pred[1] = hu1;
      } else {
        $oob();
      }
      if (2 >>> 0 < pred.length) {
        pred[2] = hu2;
      } else {
        $oob();
      }
      if (3 >>> 0 < pred.length) {
        pred[3] = hu3;
      } else {
        $oob();
      }
      if (4 >>> 0 < pred.length) {
        pred[4] = hu2;
      } else {
        $oob();
      }
      if (5 >>> 0 < pred.length) {
        pred[5] = hu3;
      } else {
        $oob();
      }
      if (6 >>> 0 < pred.length) {
        pred[6] = hu4;
      } else {
        $oob();
      }
      if (7 >>> 0 < pred.length) {
        pred[7] = hu5;
      } else {
        $oob();
      }
      if (8 >>> 0 < pred.length) {
        pred[8] = hu4;
      } else {
        $oob();
      }
      if (9 >>> 0 < pred.length) {
        pred[9] = hu5;
      } else {
        $oob();
      }
      if (10 >>> 0 < pred.length) {
        pred[10] = hu6;
      } else {
        $oob();
      }
      if (11 >>> 0 < pred.length) {
        pred[11] = hu6;
      } else {
        $oob();
      }
      if (12 >>> 0 < pred.length) {
        pred[12] = hu6;
      } else {
        $oob();
      }
      if (13 >>> 0 < pred.length) {
        pred[13] = hu6;
      } else {
        $oob();
      }
      if (14 >>> 0 < pred.length) {
        pred[14] = hu6;
      } else {
        $oob();
      }
      if (15 >>> 0 < pred.length) {
        pred[15] = hu6;
      } else {
        $oob();
      }
    }
  }
  let _tmp$5 = 0;
  while (true) {
    const y = _tmp$5;
    if (y < 4) {
      const base = (Math.imul(y0 + y | 0, stride) | 0) + x0 | 0;
      let _tmp$6 = 0;
      while (true) {
        const x = _tmp$6;
        if (x < 4) {
          const _tmp$7 = base + x | 0;
          const _tmp$8 = (Math.imul(y, 4) | 0) + x | 0;
          if (_tmp$7 >>> 0 < plane.length) {
            plane[_tmp$7] = (_tmp$8 >>> 0 < pred.length ? pred[_tmp$8] : $oob()) & 255;
          } else {
            $oob();
          }
          _tmp$6 = x + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$5 = y + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26421predict__intra__16x16(plane, stride, x0, y0, mode, avail_top, avail_left) {
  switch (mode) {
    case 0: {
      const top_row = (Math.imul(y0 - 1 | 0, stride) | 0) + x0 | 0;
      let _tmp = 0;
      while (true) {
        const y = _tmp;
        if (y < 16) {
          const dst = (Math.imul(y0 + y | 0, stride) | 0) + x0 | 0;
          let _tmp$2 = 0;
          while (true) {
            const x = _tmp$2;
            if (x < 16) {
              const _tmp$3 = dst + x | 0;
              const _tmp$4 = top_row + x | 0;
              if (_tmp$3 >>> 0 < plane.length) {
                plane[_tmp$3] = _tmp$4 >>> 0 < plane.length ? plane[_tmp$4] : $oob();
              } else {
                $oob();
              }
              _tmp$2 = x + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp = y + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
    case 1: {
      let _tmp$2 = 0;
      while (true) {
        const y = _tmp$2;
        if (y < 16) {
          const _tmp$3 = ((Math.imul(y0 + y | 0, stride) | 0) + x0 | 0) - 1 | 0;
          const v = _tmp$3 >>> 0 < plane.length ? plane[_tmp$3] : $oob();
          const dst = (Math.imul(y0 + y | 0, stride) | 0) + x0 | 0;
          let _tmp$4 = 0;
          while (true) {
            const x = _tmp$4;
            if (x < 16) {
              const _tmp$5 = dst + x | 0;
              if (_tmp$5 >>> 0 < plane.length) {
                plane[_tmp$5] = v;
              } else {
                $oob();
              }
              _tmp$4 = x + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp$2 = y + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
    case 2: {
      let sum = 0;
      let dc;
      if (avail_top && avail_left) {
        let _tmp$3 = 0;
        while (true) {
          const i = _tmp$3;
          if (i < 16) {
            const _tmp$4 = sum;
            const _tmp$5 = ((Math.imul(y0 - 1 | 0, stride) | 0) + x0 | 0) + i | 0;
            sum = _tmp$4 + (_tmp$5 >>> 0 < plane.length ? plane[_tmp$5] : $oob()) | 0;
            const _tmp$6 = sum;
            const _tmp$7 = ((Math.imul(y0 + i | 0, stride) | 0) + x0 | 0) - 1 | 0;
            sum = _tmp$6 + (_tmp$7 >>> 0 < plane.length ? plane[_tmp$7] : $oob()) | 0;
            _tmp$3 = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        dc = sum + 16 >> 5;
      } else {
        if (avail_top) {
          let _tmp$3 = 0;
          while (true) {
            const i = _tmp$3;
            if (i < 16) {
              const _tmp$4 = sum;
              const _tmp$5 = ((Math.imul(y0 - 1 | 0, stride) | 0) + x0 | 0) + i | 0;
              sum = _tmp$4 + (_tmp$5 >>> 0 < plane.length ? plane[_tmp$5] : $oob()) | 0;
              _tmp$3 = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          dc = sum + 8 >> 4;
        } else {
          if (avail_left) {
            let _tmp$3 = 0;
            while (true) {
              const i = _tmp$3;
              if (i < 16) {
                const _tmp$4 = sum;
                const _tmp$5 = ((Math.imul(y0 + i | 0, stride) | 0) + x0 | 0) - 1 | 0;
                sum = _tmp$4 + (_tmp$5 >>> 0 < plane.length ? plane[_tmp$5] : $oob()) | 0;
                _tmp$3 = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            dc = sum + 8 >> 4;
          } else {
            dc = 128;
          }
        }
      }
      const b = dc & 255;
      let _tmp$3 = 0;
      while (true) {
        const y = _tmp$3;
        if (y < 16) {
          const dst = (Math.imul(y0 + y | 0, stride) | 0) + x0 | 0;
          let _tmp$4 = 0;
          while (true) {
            const x = _tmp$4;
            if (x < 16) {
              const _tmp$5 = dst + x | 0;
              if (_tmp$5 >>> 0 < plane.length) {
                plane[_tmp$5] = b;
              } else {
                $oob();
              }
              _tmp$4 = x + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp$3 = y + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
    default: {
      let h = 0;
      let v = 0;
      const top_row$2 = Math.imul(y0 - 1 | 0, stride) | 0;
      let _tmp$4 = 0;
      while (true) {
        const i = _tmp$4;
        if (i < 8) {
          const _tmp$5 = h;
          const _tmp$6 = i + 1 | 0;
          const _tmp$7 = ((top_row$2 + x0 | 0) + 8 | 0) + i | 0;
          const _tmp$8 = _tmp$7 >>> 0 < plane.length ? plane[_tmp$7] : $oob();
          const _tmp$9 = ((top_row$2 + x0 | 0) + 6 | 0) - i | 0;
          h = _tmp$5 + (Math.imul(_tmp$6, _tmp$8 - (_tmp$9 >>> 0 < plane.length ? plane[_tmp$9] : $oob()) | 0) | 0) | 0;
          const _tmp$10 = v;
          const _tmp$11 = i + 1 | 0;
          const _tmp$12 = ((Math.imul((y0 + 8 | 0) + i | 0, stride) | 0) + x0 | 0) - 1 | 0;
          const _tmp$13 = _tmp$12 >>> 0 < plane.length ? plane[_tmp$12] : $oob();
          const _tmp$14 = ((Math.imul((y0 + 6 | 0) - i | 0, stride) | 0) + x0 | 0) - 1 | 0;
          v = _tmp$10 + (Math.imul(_tmp$11, _tmp$13 - (_tmp$14 >>> 0 < plane.length ? plane[_tmp$14] : $oob()) | 0) | 0) | 0;
          _tmp$4 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _tmp$5 = ((Math.imul(y0 + 15 | 0, stride) | 0) + x0 | 0) - 1 | 0;
      const _tmp$6 = _tmp$5 >>> 0 < plane.length ? plane[_tmp$5] : $oob();
      const _tmp$7 = (top_row$2 + x0 | 0) + 15 | 0;
      const a = Math.imul(16, _tmp$6 + (_tmp$7 >>> 0 < plane.length ? plane[_tmp$7] : $oob()) | 0) | 0;
      const b$2 = (Math.imul(5, h) | 0) + 32 >> 6;
      const c = (Math.imul(5, v) | 0) + 32 >> 6;
      let _tmp$8 = 0;
      while (true) {
        const y = _tmp$8;
        if (y < 16) {
          const dst = (Math.imul(y0 + y | 0, stride) | 0) + x0 | 0;
          let _tmp$9 = 0;
          while (true) {
            const x = _tmp$9;
            if (x < 16) {
              const _tmp$10 = dst + x | 0;
              const _p = ((a + (Math.imul(b$2, x - 7 | 0) | 0) | 0) + (Math.imul(c, y - 7 | 0) | 0) | 0) + 16 >> 5;
              if (_tmp$10 >>> 0 < plane.length) {
                plane[_tmp$10] = (_p < 0 ? 0 : _p > 255 ? 255 : _p) & 255;
              } else {
                $oob();
              }
              _tmp$9 = x + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp$8 = y + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
  }
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh2649fill__4x4(plane, stride, x0, y0, val) {
  const b = val & 255;
  let _tmp = 0;
  while (true) {
    const y = _tmp;
    if (y < 4) {
      const dst = (Math.imul(y0 + y | 0, stride) | 0) + x0 | 0;
      let _tmp$2 = 0;
      while (true) {
        const x = _tmp$2;
        if (x < 4) {
          const _tmp$3 = dst + x | 0;
          if (_tmp$3 >>> 0 < plane.length) {
            plane[_tmp$3] = b;
          } else {
            $oob();
          }
          _tmp$2 = x + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = y + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26427predict__intra__chroma__8x8(plane, stride, x0, y0, mode, avail_top, avail_left) {
  switch (mode) {
    case 0: {
      let s_t0 = 0;
      let s_t1 = 0;
      let s_l0 = 0;
      let s_l1 = 0;
      if (avail_top) {
        const tr = (Math.imul(y0 - 1 | 0, stride) | 0) + x0 | 0;
        let _tmp = 0;
        while (true) {
          const i = _tmp;
          if (i < 4) {
            const _tmp$2 = s_t0;
            const _tmp$3 = tr + i | 0;
            s_t0 = _tmp$2 + (_tmp$3 >>> 0 < plane.length ? plane[_tmp$3] : $oob()) | 0;
            const _tmp$4 = s_t1;
            const _tmp$5 = (tr + 4 | 0) + i | 0;
            s_t1 = _tmp$4 + (_tmp$5 >>> 0 < plane.length ? plane[_tmp$5] : $oob()) | 0;
            _tmp = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
      if (avail_left) {
        let _tmp = 0;
        while (true) {
          const i = _tmp;
          if (i < 4) {
            const _tmp$2 = s_l0;
            const _tmp$3 = ((Math.imul(y0 + i | 0, stride) | 0) + x0 | 0) - 1 | 0;
            s_l0 = _tmp$2 + (_tmp$3 >>> 0 < plane.length ? plane[_tmp$3] : $oob()) | 0;
            const _tmp$4 = s_l1;
            const _tmp$5 = ((Math.imul((y0 + 4 | 0) + i | 0, stride) | 0) + x0 | 0) - 1 | 0;
            s_l1 = _tmp$4 + (_tmp$5 >>> 0 < plane.length ? plane[_tmp$5] : $oob()) | 0;
            _tmp = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
      const dc00 = avail_top && avail_left ? (s_t0 + s_l0 | 0) + 4 >> 3 : avail_top ? s_t0 + 2 >> 2 : avail_left ? s_l0 + 2 >> 2 : 128;
      const dc01 = avail_top ? s_t1 + 2 >> 2 : avail_left ? s_l0 + 2 >> 2 : 128;
      const dc10 = avail_left ? s_l1 + 2 >> 2 : avail_top ? s_t0 + 2 >> 2 : 128;
      const dc11 = avail_top && avail_left ? (s_t1 + s_l1 | 0) + 4 >> 3 : avail_top ? s_t1 + 2 >> 2 : avail_left ? s_l1 + 2 >> 2 : 128;
      _M0FP215Sam_2dHui_2ddot11moon_2dh2649fill__4x4(plane, stride, x0, y0, dc00);
      _M0FP215Sam_2dHui_2ddot11moon_2dh2649fill__4x4(plane, stride, x0 + 4 | 0, y0, dc01);
      _M0FP215Sam_2dHui_2ddot11moon_2dh2649fill__4x4(plane, stride, x0, y0 + 4 | 0, dc10);
      _M0FP215Sam_2dHui_2ddot11moon_2dh2649fill__4x4(plane, stride, x0 + 4 | 0, y0 + 4 | 0, dc11);
      return;
    }
    case 1: {
      let _tmp = 0;
      while (true) {
        const y = _tmp;
        if (y < 8) {
          const _tmp$2 = ((Math.imul(y0 + y | 0, stride) | 0) + x0 | 0) - 1 | 0;
          const v = _tmp$2 >>> 0 < plane.length ? plane[_tmp$2] : $oob();
          const dst = (Math.imul(y0 + y | 0, stride) | 0) + x0 | 0;
          let _tmp$3 = 0;
          while (true) {
            const x = _tmp$3;
            if (x < 8) {
              const _tmp$4 = dst + x | 0;
              if (_tmp$4 >>> 0 < plane.length) {
                plane[_tmp$4] = v;
              } else {
                $oob();
              }
              _tmp$3 = x + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp = y + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
    case 2: {
      const top_row = (Math.imul(y0 - 1 | 0, stride) | 0) + x0 | 0;
      let _tmp$2 = 0;
      while (true) {
        const y = _tmp$2;
        if (y < 8) {
          const dst = (Math.imul(y0 + y | 0, stride) | 0) + x0 | 0;
          let _tmp$3 = 0;
          while (true) {
            const x = _tmp$3;
            if (x < 8) {
              const _tmp$4 = dst + x | 0;
              const _tmp$5 = top_row + x | 0;
              if (_tmp$4 >>> 0 < plane.length) {
                plane[_tmp$4] = _tmp$5 >>> 0 < plane.length ? plane[_tmp$5] : $oob();
              } else {
                $oob();
              }
              _tmp$3 = x + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp$2 = y + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
    default: {
      let h = 0;
      let v = 0;
      const top_row$2 = Math.imul(y0 - 1 | 0, stride) | 0;
      let _tmp$3 = 0;
      while (true) {
        const i = _tmp$3;
        if (i < 4) {
          const _tmp$4 = h;
          const _tmp$5 = i + 1 | 0;
          const _tmp$6 = ((top_row$2 + x0 | 0) + 4 | 0) + i | 0;
          const _tmp$7 = _tmp$6 >>> 0 < plane.length ? plane[_tmp$6] : $oob();
          const _tmp$8 = ((top_row$2 + x0 | 0) + 2 | 0) - i | 0;
          h = _tmp$4 + (Math.imul(_tmp$5, _tmp$7 - (_tmp$8 >>> 0 < plane.length ? plane[_tmp$8] : $oob()) | 0) | 0) | 0;
          const _tmp$9 = v;
          const _tmp$10 = i + 1 | 0;
          const _tmp$11 = ((Math.imul((y0 + 4 | 0) + i | 0, stride) | 0) + x0 | 0) - 1 | 0;
          const _tmp$12 = _tmp$11 >>> 0 < plane.length ? plane[_tmp$11] : $oob();
          const _tmp$13 = ((Math.imul((y0 + 2 | 0) - i | 0, stride) | 0) + x0 | 0) - 1 | 0;
          v = _tmp$9 + (Math.imul(_tmp$10, _tmp$12 - (_tmp$13 >>> 0 < plane.length ? plane[_tmp$13] : $oob()) | 0) | 0) | 0;
          _tmp$3 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _tmp$4 = ((Math.imul(y0 + 7 | 0, stride) | 0) + x0 | 0) - 1 | 0;
      const _tmp$5 = _tmp$4 >>> 0 < plane.length ? plane[_tmp$4] : $oob();
      const _tmp$6 = (top_row$2 + x0 | 0) + 7 | 0;
      const a = Math.imul(16, _tmp$5 + (_tmp$6 >>> 0 < plane.length ? plane[_tmp$6] : $oob()) | 0) | 0;
      const b = (Math.imul(17, h) | 0) + 16 >> 5;
      const c = (Math.imul(17, v) | 0) + 16 >> 5;
      let _tmp$7 = 0;
      while (true) {
        const y = _tmp$7;
        if (y < 8) {
          const dst = (Math.imul(y0 + y | 0, stride) | 0) + x0 | 0;
          let _tmp$8 = 0;
          while (true) {
            const x = _tmp$8;
            if (x < 8) {
              const _tmp$9 = dst + x | 0;
              const _p = ((a + (Math.imul(b, x - 3 | 0) | 0) | 0) + (Math.imul(c, y - 3 | 0) | 0) | 0) + 16 >> 5;
              if (_tmp$9 >>> 0 < plane.length) {
                plane[_tmp$9] = (_p < 0 ? 0 : _p > 255 ? 255 : _p) & 255;
              } else {
                $oob();
              }
              _tmp$8 = x + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp$7 = y + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
  }
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh2647median3(a, b, c) {
  return a > b ? (b > c ? b : a > c ? c : a) : a > c ? a : b > c ? c : b;
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26415sample__clamped(plane, w, h, x, y) {
  const _p = w - 1 | 0;
  const cx = x < 0 ? 0 : x > _p ? _p : x;
  const _p$2 = h - 1 | 0;
  const cy = y < 0 ? 0 : y > _p$2 ? _p$2 : y;
  const _tmp = (Math.imul(cy, w) | 0) + cx | 0;
  return _tmp >>> 0 < plane.length ? plane[_tmp] : $oob();
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh2647fir6__h(plane, w, h, x, y) {
  const _p = h - 1 | 0;
  const cy = y < 0 ? 0 : y > _p ? _p : y;
  const row = Math.imul(cy, w) | 0;
  const _p$2 = x - 2 | 0;
  const _p$3 = w - 1 | 0;
  const _tmp = row + (_p$2 < 0 ? 0 : _p$2 > _p$3 ? _p$3 : _p$2) | 0;
  const s0 = _tmp >>> 0 < plane.length ? plane[_tmp] : $oob();
  const _p$4 = x - 1 | 0;
  const _p$5 = w - 1 | 0;
  const _tmp$2 = row + (_p$4 < 0 ? 0 : _p$4 > _p$5 ? _p$5 : _p$4) | 0;
  const s1 = _tmp$2 >>> 0 < plane.length ? plane[_tmp$2] : $oob();
  const _p$6 = w - 1 | 0;
  const _tmp$3 = row + (x < 0 ? 0 : x > _p$6 ? _p$6 : x) | 0;
  const s2 = _tmp$3 >>> 0 < plane.length ? plane[_tmp$3] : $oob();
  const _p$7 = x + 1 | 0;
  const _p$8 = w - 1 | 0;
  const _tmp$4 = row + (_p$7 < 0 ? 0 : _p$7 > _p$8 ? _p$8 : _p$7) | 0;
  const s3 = _tmp$4 >>> 0 < plane.length ? plane[_tmp$4] : $oob();
  const _p$9 = x + 2 | 0;
  const _p$10 = w - 1 | 0;
  const _tmp$5 = row + (_p$9 < 0 ? 0 : _p$9 > _p$10 ? _p$10 : _p$9) | 0;
  const s4 = _tmp$5 >>> 0 < plane.length ? plane[_tmp$5] : $oob();
  const _p$11 = x + 3 | 0;
  const _p$12 = w - 1 | 0;
  const _tmp$6 = row + (_p$11 < 0 ? 0 : _p$11 > _p$12 ? _p$12 : _p$11) | 0;
  const s5 = _tmp$6 >>> 0 < plane.length ? plane[_tmp$6] : $oob();
  return ((((s0 - (Math.imul(5, s1) | 0) | 0) + (Math.imul(20, s2) | 0) | 0) + (Math.imul(20, s3) | 0) | 0) - (Math.imul(5, s4) | 0) | 0) + s5 | 0;
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh2647fir6__v(plane, w, h, x, y) {
  const _p = w - 1 | 0;
  const cx = x < 0 ? 0 : x > _p ? _p : x;
  const _p$2 = y - 2 | 0;
  const _p$3 = h - 1 | 0;
  const _tmp = (Math.imul(_p$2 < 0 ? 0 : _p$2 > _p$3 ? _p$3 : _p$2, w) | 0) + cx | 0;
  const s0 = _tmp >>> 0 < plane.length ? plane[_tmp] : $oob();
  const _p$4 = y - 1 | 0;
  const _p$5 = h - 1 | 0;
  const _tmp$2 = (Math.imul(_p$4 < 0 ? 0 : _p$4 > _p$5 ? _p$5 : _p$4, w) | 0) + cx | 0;
  const s1 = _tmp$2 >>> 0 < plane.length ? plane[_tmp$2] : $oob();
  const _p$6 = h - 1 | 0;
  const _tmp$3 = (Math.imul(y < 0 ? 0 : y > _p$6 ? _p$6 : y, w) | 0) + cx | 0;
  const s2 = _tmp$3 >>> 0 < plane.length ? plane[_tmp$3] : $oob();
  const _p$7 = y + 1 | 0;
  const _p$8 = h - 1 | 0;
  const _tmp$4 = (Math.imul(_p$7 < 0 ? 0 : _p$7 > _p$8 ? _p$8 : _p$7, w) | 0) + cx | 0;
  const s3 = _tmp$4 >>> 0 < plane.length ? plane[_tmp$4] : $oob();
  const _p$9 = y + 2 | 0;
  const _p$10 = h - 1 | 0;
  const _tmp$5 = (Math.imul(_p$9 < 0 ? 0 : _p$9 > _p$10 ? _p$10 : _p$9, w) | 0) + cx | 0;
  const s4 = _tmp$5 >>> 0 < plane.length ? plane[_tmp$5] : $oob();
  const _p$11 = y + 3 | 0;
  const _p$12 = h - 1 | 0;
  const _tmp$6 = (Math.imul(_p$11 < 0 ? 0 : _p$11 > _p$12 ? _p$12 : _p$11, w) | 0) + cx | 0;
  const s5 = _tmp$6 >>> 0 < plane.length ? plane[_tmp$6] : $oob();
  return ((((s0 - (Math.imul(5, s1) | 0) | 0) + (Math.imul(20, s2) | 0) | 0) + (Math.imul(20, s3) | 0) | 0) - (Math.imul(5, s4) | 0) | 0) + s5 | 0;
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh2647half__h(plane, w, h, x, y) {
  const _p = _M0FP215Sam_2dHui_2ddot11moon_2dh2647fir6__h(plane, w, h, x, y) + 16 >> 5;
  return _p < 0 ? 0 : _p > 255 ? 255 : _p;
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh2647half__v(plane, w, h, x, y) {
  const _p = _M0FP215Sam_2dHui_2ddot11moon_2dh2647fir6__v(plane, w, h, x, y) + 16 >> 5;
  return _p < 0 ? 0 : _p > 255 ? 255 : _p;
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh2647half__j(plane, w, h, x, y) {
  const c0 = _M0FP215Sam_2dHui_2ddot11moon_2dh2647fir6__h(plane, w, h, x, y - 2 | 0);
  const c1 = _M0FP215Sam_2dHui_2ddot11moon_2dh2647fir6__h(plane, w, h, x, y - 1 | 0);
  const c2 = _M0FP215Sam_2dHui_2ddot11moon_2dh2647fir6__h(plane, w, h, x, y);
  const c3 = _M0FP215Sam_2dHui_2ddot11moon_2dh2647fir6__h(plane, w, h, x, y + 1 | 0);
  const c4 = _M0FP215Sam_2dHui_2ddot11moon_2dh2647fir6__h(plane, w, h, x, y + 2 | 0);
  const c5 = _M0FP215Sam_2dHui_2ddot11moon_2dh2647fir6__h(plane, w, h, x, y + 3 | 0);
  const j = ((((c0 - (Math.imul(5, c1) | 0) | 0) + (Math.imul(20, c2) | 0) | 0) + (Math.imul(20, c3) | 0) | 0) - (Math.imul(5, c4) | 0) | 0) + c5 | 0;
  const _p = j + 512 >> 10;
  return _p < 0 ? 0 : _p > 255 ? 255 : _p;
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26415mc__luma__block(ref_y, dst_y, pic_w, pic_h, x0, y0, bw, bh, mvx, mvy) {
  const x_int = x0 + (mvx >> 2) | 0;
  const y_int = y0 + (mvy >> 2) | 0;
  const dx = mvx & 3;
  const dy = mvy & 3;
  if (dx === 0 && dy === 0) {
    let _tmp = 0;
    while (true) {
      const r = _tmp;
      if (r < bh) {
        const _p = y_int + r | 0;
        const _p$2 = pic_h - 1 | 0;
        const sy = Math.imul(_p < 0 ? 0 : _p > _p$2 ? _p$2 : _p, pic_w) | 0;
        const dy_row = (Math.imul(y0 + r | 0, pic_w) | 0) + x0 | 0;
        let _tmp$2 = 0;
        while (true) {
          const c = _tmp$2;
          if (c < bw) {
            const _p$3 = x_int + c | 0;
            const _p$4 = pic_w - 1 | 0;
            const sx = _p$3 < 0 ? 0 : _p$3 > _p$4 ? _p$4 : _p$3;
            const _tmp$3 = dy_row + c | 0;
            const _tmp$4 = sy + sx | 0;
            if (_tmp$3 >>> 0 < dst_y.length) {
              dst_y[_tmp$3] = _tmp$4 >>> 0 < ref_y.length ? ref_y[_tmp$4] : $oob();
            } else {
              $oob();
            }
            _tmp$2 = c + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp = r + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return undefined;
  }
  let _tmp = 0;
  while (true) {
    const r = _tmp;
    if (r < bh) {
      const ry = y_int + r | 0;
      const dst_row = (Math.imul(y0 + r | 0, pic_w) | 0) + x0 | 0;
      let _tmp$2 = 0;
      while (true) {
        const c = _tmp$2;
        if (c < bw) {
          const rx = x_int + c | 0;
          let p;
          _L: {
            _L$2: {
              switch (dx) {
                case 2: {
                  switch (dy) {
                    case 0: {
                      p = _M0FP215Sam_2dHui_2ddot11moon_2dh2647half__h(ref_y, pic_w, pic_h, rx, ry);
                      break;
                    }
                    case 2: {
                      p = _M0FP215Sam_2dHui_2ddot11moon_2dh2647half__j(ref_y, pic_w, pic_h, rx, ry);
                      break;
                    }
                    case 1: {
                      p = (_M0FP215Sam_2dHui_2ddot11moon_2dh2647half__h(ref_y, pic_w, pic_h, rx, ry) + _M0FP215Sam_2dHui_2ddot11moon_2dh2647half__j(ref_y, pic_w, pic_h, rx, ry) | 0) + 1 >> 1;
                      break;
                    }
                    case 3: {
                      p = (_M0FP215Sam_2dHui_2ddot11moon_2dh2647half__j(ref_y, pic_w, pic_h, rx, ry) + _M0FP215Sam_2dHui_2ddot11moon_2dh2647half__h(ref_y, pic_w, pic_h, rx, ry + 1 | 0) | 0) + 1 >> 1;
                      break;
                    }
                    default: {
                      break _L$2;
                    }
                  }
                  break;
                }
                case 0: {
                  switch (dy) {
                    case 2: {
                      p = _M0FP215Sam_2dHui_2ddot11moon_2dh2647half__v(ref_y, pic_w, pic_h, rx, ry);
                      break;
                    }
                    case 1: {
                      p = (_M0FP215Sam_2dHui_2ddot11moon_2dh26415sample__clamped(ref_y, pic_w, pic_h, rx, ry) + _M0FP215Sam_2dHui_2ddot11moon_2dh2647half__v(ref_y, pic_w, pic_h, rx, ry) | 0) + 1 >> 1;
                      break;
                    }
                    case 3: {
                      p = (_M0FP215Sam_2dHui_2ddot11moon_2dh2647half__v(ref_y, pic_w, pic_h, rx, ry) + _M0FP215Sam_2dHui_2ddot11moon_2dh26415sample__clamped(ref_y, pic_w, pic_h, rx, ry + 1 | 0) | 0) + 1 >> 1;
                      break;
                    }
                    default: {
                      break _L$2;
                    }
                  }
                  break;
                }
                case 1: {
                  switch (dy) {
                    case 0: {
                      p = (_M0FP215Sam_2dHui_2ddot11moon_2dh26415sample__clamped(ref_y, pic_w, pic_h, rx, ry) + _M0FP215Sam_2dHui_2ddot11moon_2dh2647half__h(ref_y, pic_w, pic_h, rx, ry) | 0) + 1 >> 1;
                      break;
                    }
                    case 2: {
                      p = (_M0FP215Sam_2dHui_2ddot11moon_2dh2647half__v(ref_y, pic_w, pic_h, rx, ry) + _M0FP215Sam_2dHui_2ddot11moon_2dh2647half__j(ref_y, pic_w, pic_h, rx, ry) | 0) + 1 >> 1;
                      break;
                    }
                    case 1: {
                      p = (_M0FP215Sam_2dHui_2ddot11moon_2dh2647half__h(ref_y, pic_w, pic_h, rx, ry) + _M0FP215Sam_2dHui_2ddot11moon_2dh2647half__v(ref_y, pic_w, pic_h, rx, ry) | 0) + 1 >> 1;
                      break;
                    }
                    case 3: {
                      p = (_M0FP215Sam_2dHui_2ddot11moon_2dh2647half__v(ref_y, pic_w, pic_h, rx, ry) + _M0FP215Sam_2dHui_2ddot11moon_2dh2647half__h(ref_y, pic_w, pic_h, rx, ry + 1 | 0) | 0) + 1 >> 1;
                      break;
                    }
                    default: {
                      break _L$2;
                    }
                  }
                  break;
                }
                case 3: {
                  switch (dy) {
                    case 0: {
                      p = (_M0FP215Sam_2dHui_2ddot11moon_2dh2647half__h(ref_y, pic_w, pic_h, rx, ry) + _M0FP215Sam_2dHui_2ddot11moon_2dh26415sample__clamped(ref_y, pic_w, pic_h, rx + 1 | 0, ry) | 0) + 1 >> 1;
                      break;
                    }
                    case 2: {
                      p = (_M0FP215Sam_2dHui_2ddot11moon_2dh2647half__j(ref_y, pic_w, pic_h, rx, ry) + _M0FP215Sam_2dHui_2ddot11moon_2dh2647half__v(ref_y, pic_w, pic_h, rx + 1 | 0, ry) | 0) + 1 >> 1;
                      break;
                    }
                    case 1: {
                      p = (_M0FP215Sam_2dHui_2ddot11moon_2dh2647half__h(ref_y, pic_w, pic_h, rx, ry) + _M0FP215Sam_2dHui_2ddot11moon_2dh2647half__v(ref_y, pic_w, pic_h, rx + 1 | 0, ry) | 0) + 1 >> 1;
                      break;
                    }
                    default: {
                      break _L$2;
                    }
                  }
                  break;
                }
                default: {
                  break _L$2;
                }
              }
              break _L;
            }
            p = (_M0FP215Sam_2dHui_2ddot11moon_2dh2647half__v(ref_y, pic_w, pic_h, rx + 1 | 0, ry) + _M0FP215Sam_2dHui_2ddot11moon_2dh2647half__h(ref_y, pic_w, pic_h, rx, ry + 1 | 0) | 0) + 1 >> 1;
          }
          const _tmp$3 = dst_row + c | 0;
          if (_tmp$3 >>> 0 < dst_y.length) {
            dst_y[_tmp$3] = p & 255;
          } else {
            $oob();
          }
          _tmp$2 = c + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = r + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26417mc__chroma__block(ref_c, dst_c, cw, ch, x0, y0, bw, bh, mvx, mvy) {
  const x_int = x0 + (mvx >> 3) | 0;
  const y_int = y0 + (mvy >> 3) | 0;
  const dx = mvx & 7;
  const dy = mvy & 7;
  const w00 = Math.imul(8 - dx | 0, 8 - dy | 0) | 0;
  const w01 = Math.imul(dx, 8 - dy | 0) | 0;
  const w10 = Math.imul(8 - dx | 0, dy) | 0;
  const w11 = Math.imul(dx, dy) | 0;
  let _tmp = 0;
  while (true) {
    const r = _tmp;
    if (r < bh) {
      const _p = y_int + r | 0;
      const _p$2 = ch - 1 | 0;
      const sy0 = Math.imul(_p < 0 ? 0 : _p > _p$2 ? _p$2 : _p, cw) | 0;
      const _p$3 = (y_int + r | 0) + 1 | 0;
      const _p$4 = ch - 1 | 0;
      const sy1 = Math.imul(_p$3 < 0 ? 0 : _p$3 > _p$4 ? _p$4 : _p$3, cw) | 0;
      const dst_row = (Math.imul(y0 + r | 0, cw) | 0) + x0 | 0;
      let _tmp$2 = 0;
      while (true) {
        const c = _tmp$2;
        if (c < bw) {
          const _p$5 = x_int + c | 0;
          const _p$6 = cw - 1 | 0;
          const sx0 = _p$5 < 0 ? 0 : _p$5 > _p$6 ? _p$6 : _p$5;
          const _p$7 = (x_int + c | 0) + 1 | 0;
          const _p$8 = cw - 1 | 0;
          const sx1 = _p$7 < 0 ? 0 : _p$7 > _p$8 ? _p$8 : _p$7;
          const _tmp$3 = sy0 + sx0 | 0;
          const a = _tmp$3 >>> 0 < ref_c.length ? ref_c[_tmp$3] : $oob();
          const _tmp$4 = sy0 + sx1 | 0;
          const b = _tmp$4 >>> 0 < ref_c.length ? ref_c[_tmp$4] : $oob();
          const _tmp$5 = sy1 + sx0 | 0;
          const cc = _tmp$5 >>> 0 < ref_c.length ? ref_c[_tmp$5] : $oob();
          const _tmp$6 = sy1 + sx1 | 0;
          const d = _tmp$6 >>> 0 < ref_c.length ? ref_c[_tmp$6] : $oob();
          const _tmp$7 = dst_row + c | 0;
          if (_tmp$7 >>> 0 < dst_c.length) {
            dst_c[_tmp$7] = ((((Math.imul(w00, a) | 0) + (Math.imul(w01, b) | 0) | 0) + (Math.imul(w10, cc) | 0) | 0) + (Math.imul(w11, d) | 0) | 0) + 32 >> 6 & 255;
          } else {
            $oob();
          }
          _tmp$2 = c + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = r + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26415predict__mv__l0N9is__availS1647(_env, nx, ny) {
  const cur_slice_id = _env._3;
  const mb_w = _env._2;
  const stride4 = _env._1;
  const mb_slice_id = _env._0;
  if (nx < 0 || (ny < 0 || nx >= stride4)) {
    return false;
  }
  const n_mb_idx = (Math.imul(ny >> 2, mb_w) | 0) + (nx >> 2) | 0;
  return (n_mb_idx >>> 0 < mb_slice_id.length ? mb_slice_id[n_mb_idx] : $oob()) === cur_slice_id;
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26415predict__mv__l0(mv_x, mv_y, ref_idx, mb_slice_id, mb_w, cur_slice_id, bx, by, bw4, cur_ref, part_mode) {
  const stride4 = Math.imul(mb_w, 4) | 0;
  const cur_mb_y = by >> 2;
  const _env = { _0: mb_slice_id, _1: stride4, _2: mb_w, _3: cur_slice_id };
  const ax = bx - 1 | 0;
  const avail_a = _M0FP215Sam_2dHui_2ddot11moon_2dh26415predict__mv__l0N9is__availS1647(_env, ax, by);
  const by_n = by - 1 | 0;
  const avail_b = _M0FP215Sam_2dHui_2ddot11moon_2dh26415predict__mv__l0N9is__availS1647(_env, bx, by_n);
  const cx = bx + bw4 | 0;
  const cy = by - 1 | 0;
  let c_decoded;
  if (cy < 0 || cx >= stride4) {
    c_decoded = false;
  } else {
    const c_mb_x = cx >> 2;
    const c_mb_y = cy >> 2;
    c_decoded = c_mb_y < cur_mb_y ? true : c_mb_y > cur_mb_y ? false : c_mb_x > bx >> 2 ? false : !(((by & 3) === 1 || (by & 3) === 3) && ((bx & 3) + bw4 | 0) === 2);
  }
  let avail_c = c_decoded && _M0FP215Sam_2dHui_2ddot11moon_2dh26415predict__mv__l0N9is__availS1647(_env, cx, cy);
  let ref_c = -1;
  let mv_cx = 0;
  let mv_cy = 0;
  if (avail_c) {
    const idx = (Math.imul(cy, stride4) | 0) + cx | 0;
    ref_c = idx >>> 0 < ref_idx.length ? ref_idx[idx] : $oob();
    mv_cx = idx >>> 0 < mv_x.length ? mv_x[idx] : $oob();
    mv_cy = idx >>> 0 < mv_y.length ? mv_y[idx] : $oob();
  } else {
    const dx_n = bx - 1 | 0;
    const dy_n = by - 1 | 0;
    if (_M0FP215Sam_2dHui_2ddot11moon_2dh26415predict__mv__l0N9is__availS1647(_env, dx_n, dy_n)) {
      avail_c = true;
      const idx = (Math.imul(dy_n, stride4) | 0) + dx_n | 0;
      ref_c = idx >>> 0 < ref_idx.length ? ref_idx[idx] : $oob();
      mv_cx = idx >>> 0 < mv_x.length ? mv_x[idx] : $oob();
      mv_cy = idx >>> 0 < mv_y.length ? mv_y[idx] : $oob();
    }
  }
  let ref_a;
  if (avail_a) {
    const _tmp = (Math.imul(by, stride4) | 0) + ax | 0;
    ref_a = _tmp >>> 0 < ref_idx.length ? ref_idx[_tmp] : $oob();
  } else {
    ref_a = -1;
  }
  let mv_ax;
  if (avail_a) {
    const _tmp = (Math.imul(by, stride4) | 0) + ax | 0;
    mv_ax = _tmp >>> 0 < mv_x.length ? mv_x[_tmp] : $oob();
  } else {
    mv_ax = 0;
  }
  let mv_ay;
  if (avail_a) {
    const _tmp = (Math.imul(by, stride4) | 0) + ax | 0;
    mv_ay = _tmp >>> 0 < mv_y.length ? mv_y[_tmp] : $oob();
  } else {
    mv_ay = 0;
  }
  let ref_b;
  if (avail_b) {
    const _tmp = (Math.imul(by_n, stride4) | 0) + bx | 0;
    ref_b = _tmp >>> 0 < ref_idx.length ? ref_idx[_tmp] : $oob();
  } else {
    ref_b = -1;
  }
  let mv_bx;
  if (avail_b) {
    const _tmp = (Math.imul(by_n, stride4) | 0) + bx | 0;
    mv_bx = _tmp >>> 0 < mv_x.length ? mv_x[_tmp] : $oob();
  } else {
    mv_bx = 0;
  }
  let mv_by;
  if (avail_b) {
    const _tmp = (Math.imul(by_n, stride4) | 0) + bx | 0;
    mv_by = _tmp >>> 0 < mv_y.length ? mv_y[_tmp] : $oob();
  } else {
    mv_by = 0;
  }
  if (part_mode === 1 && (avail_b && ref_b === cur_ref)) {
    return { _0: mv_bx, _1: mv_by };
  }
  if (part_mode === 2 && (avail_a && ref_a === cur_ref)) {
    return { _0: mv_ax, _1: mv_ay };
  }
  if (part_mode === 3 && (avail_a && ref_a === cur_ref)) {
    return { _0: mv_ax, _1: mv_ay };
  }
  if (part_mode === 4 && (avail_c && ref_c === cur_ref)) {
    return { _0: mv_cx, _1: mv_cy };
  }
  if (avail_a && (!avail_b && !avail_c)) {
    return { _0: mv_ax, _1: mv_ay };
  }
  const match_a = avail_a && ref_a === cur_ref ? 1 : 0;
  const match_b = avail_b && ref_b === cur_ref ? 1 : 0;
  const match_c = avail_c && ref_c === cur_ref ? 1 : 0;
  if (((match_a + match_b | 0) + match_c | 0) === 1) {
    if (match_a === 1) {
      return { _0: mv_ax, _1: mv_ay };
    }
    if (match_b === 1) {
      return { _0: mv_bx, _1: mv_by };
    }
    return { _0: mv_cx, _1: mv_cy };
  }
  return { _0: _M0FP215Sam_2dHui_2ddot11moon_2dh2647median3(mv_ax, mv_bx, mv_cx), _1: _M0FP215Sam_2dHui_2ddot11moon_2dh2647median3(mv_ay, mv_by, mv_cy) };
}
function _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(self) {
  if (self.bit_pos >= self.total_bits) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(16);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "read_bit at bit ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, self.bit_pos);
    return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(new _M0DTPC15error5Error57Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eUnexpectedEof(_string_builder.val));
  }
  const byte_idx = self.bit_pos >> 3;
  const shift = 7 - (self.bit_pos & 7) | 0;
  self.bit_pos = self.bit_pos + 1 | 0;
  const _tmp = self.data;
  return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok((byte_idx >>> 0 < _tmp.length ? _tmp[byte_idx] : $oob()) >> shift & 1);
}
function _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader10read__bits(self, n) {
  if (n === 0) {
    return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(0);
  }
  if (n < 0 || n > 31) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(24);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "read_bits invalid count ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, n);
    return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(new _M0DTPC15error5Error57Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eInvalidSyntax(_string_builder.val));
  }
  if ((self.bit_pos + n | 0) > self.total_bits) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(20);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "read_bits(");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, n);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ") at bit ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, self.bit_pos);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "/");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, self.total_bits);
    return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(new _M0DTPC15error5Error57Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eUnexpectedEof(_string_builder.val));
  }
  let val = 0;
  let rem = n;
  while (true) {
    if (rem > 0) {
      const byte_idx = self.bit_pos >> 3;
      const bit_off = self.bit_pos & 7;
      const avail = 8 - bit_off | 0;
      const take = rem < avail ? rem : avail;
      const shift = avail - take | 0;
      const mask = (1 << take) - 1 | 0;
      const _tmp = self.data;
      const chunk = (byte_idx >>> 0 < _tmp.length ? _tmp[byte_idx] : $oob()) >> shift & mask;
      val = val << take | chunk;
      self.bit_pos = self.bit_pos + take | 0;
      rem = rem - take | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(val);
}
function _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(self) {
  let leading_zeros = 0;
  while (true) {
    const _bind = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(self);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    if (_tmp === 0) {
      leading_zeros = leading_zeros + 1 | 0;
      if (leading_zeros > 31) {
        return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(new _M0DTPC15error5Error57Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eInvalidSyntax("ue(v) leading zeros overflow"));
      }
      continue;
    } else {
      break;
    }
  }
  let _tmp;
  if (leading_zeros === 0) {
    _tmp = 0;
  } else {
    const _bind = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader10read__bits(self, leading_zeros);
    let suffix;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      suffix = _ok._0;
    } else {
      return _bind;
    }
    _tmp = ((1 << leading_zeros) - 1 | 0) + suffix | 0;
  }
  return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(_tmp);
}
function _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(self) {
  const _bind = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(self);
  let code_num;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    code_num = _ok._0;
  } else {
    return _bind;
  }
  return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(code_num === 0 ? 0 : (code_num & 1) === 1 ? code_num + 1 >> 1 : -(code_num >> 1) | 0);
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26419skip__scaling__list(br, size) {
  let last_scale = 8;
  let next_scale = 8;
  let _tmp = 0;
  while (true) {
    const _j = _tmp;
    if (_j < size) {
      if (next_scale !== 0) {
        const _bind = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
        let delta_scale;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          delta_scale = _ok._0;
        } else {
          return _bind;
        }
        next_scale = ((last_scale + delta_scale | 0) + 256 | 0) % 256 | 0;
      }
      if (next_scale !== 0) {
        last_scale = next_scale;
      }
      _tmp = _j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(undefined);
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26417is__high__profile(profile_idc) {
  return profile_idc === 100 || (profile_idc === 110 || (profile_idc === 122 || (profile_idc === 244 || (profile_idc === 44 || (profile_idc === 83 || (profile_idc === 86 || (profile_idc === 118 || (profile_idc === 128 || (profile_idc === 138 || (profile_idc === 139 || (profile_idc === 134 || profile_idc === 135)))))))))));
}
function _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader3new(data) {
  const total_bits = Math.imul(data.length, 8) | 0;
  let last_nz = data.length - 1 | 0;
  while (true) {
    let _tmp;
    if (last_nz >= 0) {
      const _tmp$2 = last_nz;
      _tmp = (_tmp$2 >>> 0 < data.length ? data[_tmp$2] : $oob()) === 0;
    } else {
      _tmp = false;
    }
    if (_tmp) {
      last_nz = last_nz - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let stop_bit_pos = 0;
  if (last_nz >= 0) {
    const _tmp = last_nz;
    const b = _tmp >>> 0 < data.length ? data[_tmp] : $oob();
    let bit_idx = 7;
    while (true) {
      if (bit_idx >= 0) {
        if ((b >> (7 - bit_idx | 0) & 1) !== 0) {
          stop_bit_pos = (Math.imul(last_nz, 8) | 0) + bit_idx | 0;
          break;
        }
        bit_idx = bit_idx - 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  return new _M0TP215Sam_2dHui_2ddot11moon_2dh2649BitReader(data, 0, total_bits, stop_bit_pos);
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26410parse__sps(rbsp) {
  const br = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader3new(rbsp);
  const _bind = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader10read__bits(br, 8);
  let profile_idc;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    profile_idc = _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader10read__bits(br, 8);
  let constraint_set_flags;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    constraint_set_flags = _ok._0;
  } else {
    return _bind$2;
  }
  const _bind$3 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader10read__bits(br, 8);
  let level_idc;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    level_idc = _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
  let sps_id;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    sps_id = _ok._0;
  } else {
    return _bind$4;
  }
  let chroma_format_idc = 1;
  let bit_depth_luma = 8;
  let bit_depth_chroma = 8;
  if (_M0FP215Sam_2dHui_2ddot11moon_2dh26417is__high__profile(profile_idc)) {
    const _bind$5 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
    let _tmp;
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      _tmp = _ok._0;
    } else {
      return _bind$5;
    }
    chroma_format_idc = _tmp;
    if (chroma_format_idc === 3) {
      const _bind$6 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        _ok._0;
      } else {
        return _bind$6;
      }
    }
    const _bind$6 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
    let _tmp$2;
    if (_bind$6.$tag === 1) {
      const _ok = _bind$6;
      _tmp$2 = _ok._0;
    } else {
      return _bind$6;
    }
    bit_depth_luma = _tmp$2 + 8 | 0;
    const _bind$7 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
    let _tmp$3;
    if (_bind$7.$tag === 1) {
      const _ok = _bind$7;
      _tmp$3 = _ok._0;
    } else {
      return _bind$7;
    }
    bit_depth_chroma = _tmp$3 + 8 | 0;
    const _bind$8 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
    if (_bind$8.$tag === 1) {
      const _ok = _bind$8;
      _ok._0;
    } else {
      return _bind$8;
    }
    const _bind$9 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
    let seq_scaling_matrix_present_flag;
    if (_bind$9.$tag === 1) {
      const _ok = _bind$9;
      seq_scaling_matrix_present_flag = _ok._0;
    } else {
      return _bind$9;
    }
    if (seq_scaling_matrix_present_flag !== 0) {
      const count = chroma_format_idc !== 3 ? 8 : 12;
      let _tmp$4 = 0;
      while (true) {
        const i = _tmp$4;
        if (i < count) {
          const _bind$10 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
          let _tmp$5;
          if (_bind$10.$tag === 1) {
            const _ok = _bind$10;
            _tmp$5 = _ok._0;
          } else {
            return _bind$10;
          }
          if (_tmp$5 !== 0) {
            const _bind$11 = _M0FP215Sam_2dHui_2ddot11moon_2dh26419skip__scaling__list(br, i < 6 ? 16 : 64);
            if (_bind$11.$tag === 1) {
              const _ok = _bind$11;
              _ok._0;
            } else {
              return _bind$11;
            }
          }
          _tmp$4 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
  }
  const _bind$5 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
  let _tmp;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _tmp = _ok._0;
  } else {
    return _bind$5;
  }
  const log2_max_frame_num = _tmp + 4 | 0;
  const _bind$6 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
  let pic_order_cnt_type;
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    pic_order_cnt_type = _ok._0;
  } else {
    return _bind$6;
  }
  let log2_max_pic_order_cnt_lsb = 4;
  let delta_pic_order_always_zero_flag = false;
  let offset_for_non_ref_pic = 0;
  let offset_for_top_to_bottom_field = 0;
  const offset_for_ref_frame = new _M0TPB5ArrayGiE([], 0);
  if (pic_order_cnt_type === 0) {
    const _bind$7 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
    let _tmp$2;
    if (_bind$7.$tag === 1) {
      const _ok = _bind$7;
      _tmp$2 = _ok._0;
    } else {
      return _bind$7;
    }
    log2_max_pic_order_cnt_lsb = _tmp$2 + 4 | 0;
  } else {
    if (pic_order_cnt_type === 1) {
      const _bind$7 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
      let _tmp$2;
      if (_bind$7.$tag === 1) {
        const _ok = _bind$7;
        _tmp$2 = _ok._0;
      } else {
        return _bind$7;
      }
      delta_pic_order_always_zero_flag = _tmp$2 !== 0;
      const _bind$8 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
      let _tmp$3;
      if (_bind$8.$tag === 1) {
        const _ok = _bind$8;
        _tmp$3 = _ok._0;
      } else {
        return _bind$8;
      }
      offset_for_non_ref_pic = _tmp$3;
      const _bind$9 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
      let _tmp$4;
      if (_bind$9.$tag === 1) {
        const _ok = _bind$9;
        _tmp$4 = _ok._0;
      } else {
        return _bind$9;
      }
      offset_for_top_to_bottom_field = _tmp$4;
      const _bind$10 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
      let num_ref;
      if (_bind$10.$tag === 1) {
        const _ok = _bind$10;
        num_ref = _ok._0;
      } else {
        return _bind$10;
      }
      let _tmp$5 = 0;
      while (true) {
        const _i = _tmp$5;
        if (_i < num_ref) {
          const _bind$11 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
          let _tmp$6;
          if (_bind$11.$tag === 1) {
            const _ok = _bind$11;
            _tmp$6 = _ok._0;
          } else {
            return _bind$11;
          }
          _M0MPC15array5Array4pushGiE(offset_for_ref_frame, _tmp$6);
          _tmp$5 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
  }
  const _bind$7 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
  let max_num_ref_frames;
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    max_num_ref_frames = _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
  let _tmp$2;
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _tmp$2 = _ok._0;
  } else {
    return _bind$8;
  }
  const gaps_in_frame_num_allowed = _tmp$2 !== 0;
  const _bind$9 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
  let _tmp$3;
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _tmp$3 = _ok._0;
  } else {
    return _bind$9;
  }
  const pic_width_in_mbs = _tmp$3 + 1 | 0;
  const _bind$10 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
  let _tmp$4;
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _tmp$4 = _ok._0;
  } else {
    return _bind$10;
  }
  const pic_height_in_map_units = _tmp$4 + 1 | 0;
  const _bind$11 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
  let _tmp$5;
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _tmp$5 = _ok._0;
  } else {
    return _bind$11;
  }
  const frame_mbs_only_flag = _tmp$5 !== 0;
  if (!frame_mbs_only_flag) {
    const _bind$12 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
    if (_bind$12.$tag === 1) {
      const _ok = _bind$12;
      _ok._0;
    } else {
      return _bind$12;
    }
  }
  const pic_height_in_mbs = frame_mbs_only_flag ? pic_height_in_map_units : Math.imul(pic_height_in_map_units, 2) | 0;
  const _bind$12 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
  let _tmp$6;
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _tmp$6 = _ok._0;
  } else {
    return _bind$12;
  }
  const direct_8x8_inference_flag = _tmp$6 !== 0;
  const _bind$13 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
  let _tmp$7;
  if (_bind$13.$tag === 1) {
    const _ok = _bind$13;
    _tmp$7 = _ok._0;
  } else {
    return _bind$13;
  }
  const frame_cropping_flag = _tmp$7 !== 0;
  let crop_left = 0;
  let crop_right = 0;
  let crop_top = 0;
  let crop_bottom = 0;
  if (frame_cropping_flag) {
    const _bind$14 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
    let _tmp$8;
    if (_bind$14.$tag === 1) {
      const _ok = _bind$14;
      _tmp$8 = _ok._0;
    } else {
      return _bind$14;
    }
    crop_left = _tmp$8;
    const _bind$15 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
    let _tmp$9;
    if (_bind$15.$tag === 1) {
      const _ok = _bind$15;
      _tmp$9 = _ok._0;
    } else {
      return _bind$15;
    }
    crop_right = _tmp$9;
    const _bind$16 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
    let _tmp$10;
    if (_bind$16.$tag === 1) {
      const _ok = _bind$16;
      _tmp$10 = _ok._0;
    } else {
      return _bind$16;
    }
    crop_top = _tmp$10;
    const _bind$17 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
    let _tmp$11;
    if (_bind$17.$tag === 1) {
      const _ok = _bind$17;
      _tmp$11 = _ok._0;
    } else {
      return _bind$17;
    }
    crop_bottom = _tmp$11;
  }
  let matrix_coefficients = 6;
  let _tmp$8;
  if ((br.total_bits - br.bit_pos | 0) > 0) {
    const _bind$14 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
    let _tmp$9;
    if (_bind$14.$tag === 1) {
      const _ok = _bind$14;
      _tmp$9 = _ok._0;
    } else {
      return _bind$14;
    }
    _tmp$8 = _tmp$9 !== 0;
  } else {
    _tmp$8 = false;
  }
  if (_tmp$8) {
    let _tmp$9;
    if ((br.total_bits - br.bit_pos | 0) > 0) {
      const _bind$14 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
      let _tmp$10;
      if (_bind$14.$tag === 1) {
        const _ok = _bind$14;
        _tmp$10 = _ok._0;
      } else {
        return _bind$14;
      }
      _tmp$9 = _tmp$10 !== 0;
    } else {
      _tmp$9 = false;
    }
    if (_tmp$9) {
      const _bind$14 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader10read__bits(br, 8);
      let aspect_ratio_idc;
      if (_bind$14.$tag === 1) {
        const _ok = _bind$14;
        aspect_ratio_idc = _ok._0;
      } else {
        return _bind$14;
      }
      if (aspect_ratio_idc === 255) {
        const _bind$15 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader10read__bits(br, 16);
        if (_bind$15.$tag === 1) {
          const _ok = _bind$15;
          _ok._0;
        } else {
          return _bind$15;
        }
        const _bind$16 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader10read__bits(br, 16);
        if (_bind$16.$tag === 1) {
          const _ok = _bind$16;
          _ok._0;
        } else {
          return _bind$16;
        }
      }
    }
    let _tmp$10;
    if ((br.total_bits - br.bit_pos | 0) > 0) {
      const _bind$14 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
      let _tmp$11;
      if (_bind$14.$tag === 1) {
        const _ok = _bind$14;
        _tmp$11 = _ok._0;
      } else {
        return _bind$14;
      }
      _tmp$10 = _tmp$11 !== 0;
    } else {
      _tmp$10 = false;
    }
    if (_tmp$10) {
      const _bind$14 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
      if (_bind$14.$tag === 1) {
        const _ok = _bind$14;
        _ok._0;
      } else {
        return _bind$14;
      }
    }
    let _tmp$11;
    if ((br.total_bits - br.bit_pos | 0) > 0) {
      const _bind$14 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
      let _tmp$12;
      if (_bind$14.$tag === 1) {
        const _ok = _bind$14;
        _tmp$12 = _ok._0;
      } else {
        return _bind$14;
      }
      _tmp$11 = _tmp$12 !== 0;
    } else {
      _tmp$11 = false;
    }
    if (_tmp$11) {
      const _bind$14 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader10read__bits(br, 3);
      if (_bind$14.$tag === 1) {
        const _ok = _bind$14;
        _ok._0;
      } else {
        return _bind$14;
      }
      const _bind$15 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
      if (_bind$15.$tag === 1) {
        const _ok = _bind$15;
        _ok._0;
      } else {
        return _bind$15;
      }
      const _bind$16 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
      let _tmp$12;
      if (_bind$16.$tag === 1) {
        const _ok = _bind$16;
        _tmp$12 = _ok._0;
      } else {
        return _bind$16;
      }
      if (_tmp$12 !== 0) {
        const _bind$17 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader10read__bits(br, 8);
        if (_bind$17.$tag === 1) {
          const _ok = _bind$17;
          _ok._0;
        } else {
          return _bind$17;
        }
        const _bind$18 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader10read__bits(br, 8);
        if (_bind$18.$tag === 1) {
          const _ok = _bind$18;
          _ok._0;
        } else {
          return _bind$18;
        }
        const _bind$19 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader10read__bits(br, 8);
        let _tmp$13;
        if (_bind$19.$tag === 1) {
          const _ok = _bind$19;
          _tmp$13 = _ok._0;
        } else {
          return _bind$19;
        }
        matrix_coefficients = _tmp$13;
      }
    }
  }
  return new _M0DTPC16result6ResultGRP215Sam_2dHui_2ddot11moon_2dh2643SpsRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(new _M0TP215Sam_2dHui_2ddot11moon_2dh2643Sps(sps_id, profile_idc, constraint_set_flags, level_idc, chroma_format_idc, bit_depth_luma, bit_depth_chroma, log2_max_frame_num, pic_order_cnt_type, log2_max_pic_order_cnt_lsb, delta_pic_order_always_zero_flag, offset_for_non_ref_pic, offset_for_top_to_bottom_field, offset_for_ref_frame, max_num_ref_frames, gaps_in_frame_num_allowed, pic_width_in_mbs, pic_height_in_mbs, frame_mbs_only_flag, direct_8x8_inference_flag, frame_cropping_flag, crop_left, crop_right, crop_top, crop_bottom, matrix_coefficients));
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26410parse__pps(rbsp) {
  const br = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader3new(rbsp);
  const _bind = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
  let pps_id;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    pps_id = _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
  let sps_id;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    sps_id = _ok._0;
  } else {
    return _bind$2;
  }
  const _bind$3 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
  let _tmp;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _tmp = _ok._0;
  } else {
    return _bind$3;
  }
  const entropy_coding_mode_flag = _tmp !== 0;
  const _bind$4 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
  let _tmp$2;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _tmp$2 = _ok._0;
  } else {
    return _bind$4;
  }
  const bottom_field_pic_order_in_frame_present_flag = _tmp$2 !== 0;
  const _bind$5 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
  let num_slice_groups_minus1;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    num_slice_groups_minus1 = _ok._0;
  } else {
    return _bind$5;
  }
  if (num_slice_groups_minus1 > 0) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(66);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "FMO slice groups (num_slice_groups_minus1=");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, num_slice_groups_minus1);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ") not supported in 0.1.0");
    return new _M0DTPC16result6ResultGRP215Sam_2dHui_2ddot11moon_2dh2643PpsRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(new _M0DTPC15error5Error62Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eUnsupportedFeature(_string_builder.val));
  }
  const _bind$6 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
  let num_ref_idx_l0_default_active_minus1;
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    num_ref_idx_l0_default_active_minus1 = _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
  let num_ref_idx_l1_default_active_minus1;
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    num_ref_idx_l1_default_active_minus1 = _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
  let _tmp$3;
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _tmp$3 = _ok._0;
  } else {
    return _bind$8;
  }
  const weighted_pred_flag = _tmp$3 !== 0;
  const _bind$9 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader10read__bits(br, 2);
  let weighted_bipred_idc;
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    weighted_bipred_idc = _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
  let pic_init_qp_minus26;
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    pic_init_qp_minus26 = _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
  let pic_init_qs_minus26;
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    pic_init_qs_minus26 = _ok._0;
  } else {
    return _bind$11;
  }
  const _bind$12 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
  let chroma_qp_index_offset;
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    chroma_qp_index_offset = _ok._0;
  } else {
    return _bind$12;
  }
  const _bind$13 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
  let _tmp$4;
  if (_bind$13.$tag === 1) {
    const _ok = _bind$13;
    _tmp$4 = _ok._0;
  } else {
    return _bind$13;
  }
  const deblocking_filter_control_present_flag = _tmp$4 !== 0;
  const _bind$14 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
  let _tmp$5;
  if (_bind$14.$tag === 1) {
    const _ok = _bind$14;
    _tmp$5 = _ok._0;
  } else {
    return _bind$14;
  }
  const constrained_intra_pred_flag = _tmp$5 !== 0;
  const _bind$15 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
  let _tmp$6;
  if (_bind$15.$tag === 1) {
    const _ok = _bind$15;
    _tmp$6 = _ok._0;
  } else {
    return _bind$15;
  }
  const redundant_pic_cnt_present_flag = _tmp$6 !== 0;
  return new _M0DTPC16result6ResultGRP215Sam_2dHui_2ddot11moon_2dh2643PpsRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(new _M0TP215Sam_2dHui_2ddot11moon_2dh2643Pps(pps_id, sps_id, entropy_coding_mode_flag, bottom_field_pic_order_in_frame_present_flag, num_slice_groups_minus1, num_ref_idx_l0_default_active_minus1, num_ref_idx_l1_default_active_minus1, weighted_pred_flag, weighted_bipred_idc, pic_init_qp_minus26, pic_init_qs_minus26, chroma_qp_index_offset, deblocking_filter_control_present_flag, constrained_intra_pred_flag, redundant_pic_cnt_present_flag));
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26420parse__slice__header(br, nal_unit_type, nal_ref_idc, sps_map, pps_map) {
  const _bind = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
  let first_mb_in_slice;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    first_mb_in_slice = _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
  let raw_slice_type;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    raw_slice_type = _ok._0;
  } else {
    return _bind$2;
  }
  const slice_type = raw_slice_type % 5 | 0;
  if (slice_type === 1) {
    return new _M0DTPC16result6ResultGURP215Sam_2dHui_2ddot11moon_2dh26411SliceHeaderRP215Sam_2dHui_2ddot11moon_2dh2643SpsRP215Sam_2dHui_2ddot11moon_2dh2643PpsERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(new _M0DTPC15error5Error62Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eUnsupportedFeature("B-slices are planned for 0.2.0 (Constrained Baseline 0.1.0 supports I/P slices)"));
  }
  const _bind$3 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
  let pps_id;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    pps_id = _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = _M0MPB3Map3getGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(pps_map, pps_id);
  let pps;
  if (_bind$4 === undefined) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(14);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "PPS ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, pps_id);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " not found");
    return new _M0DTPC16result6ResultGURP215Sam_2dHui_2ddot11moon_2dh26411SliceHeaderRP215Sam_2dHui_2ddot11moon_2dh2643SpsRP215Sam_2dHui_2ddot11moon_2dh2643PpsERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(new _M0DTPC15error5Error63Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eMissingParameterSet(_string_builder.val));
  } else {
    const _Some = _bind$4;
    pps = _Some;
  }
  if (pps.entropy_coding_mode_flag) {
    return new _M0DTPC16result6ResultGURP215Sam_2dHui_2ddot11moon_2dh26411SliceHeaderRP215Sam_2dHui_2ddot11moon_2dh2643SpsRP215Sam_2dHui_2ddot11moon_2dh2643PpsERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(new _M0DTPC15error5Error62Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eUnsupportedProfile("CABAC entropy coding is planned for 0.2.0 (0.1.0 supports CAVLC Constrained Baseline)"));
  }
  const _bind$5 = _M0MPB3Map3getGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(sps_map, pps.sps_id);
  let sps;
  if (_bind$5 === undefined) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(14);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "SPS ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, pps.sps_id);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " not found");
    return new _M0DTPC16result6ResultGURP215Sam_2dHui_2ddot11moon_2dh26411SliceHeaderRP215Sam_2dHui_2ddot11moon_2dh2643SpsRP215Sam_2dHui_2ddot11moon_2dh2643PpsERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(new _M0DTPC15error5Error63Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eMissingParameterSet(_string_builder.val));
  } else {
    const _Some = _bind$5;
    sps = _Some;
  }
  if (!sps.frame_mbs_only_flag) {
    return new _M0DTPC16result6ResultGURP215Sam_2dHui_2ddot11moon_2dh26411SliceHeaderRP215Sam_2dHui_2ddot11moon_2dh2643SpsRP215Sam_2dHui_2ddot11moon_2dh2643PpsERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(new _M0DTPC15error5Error62Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eUnsupportedFeature("Interlaced field/MBAFF coding not supported in Constrained Baseline 0.1.0"));
  }
  if (sps.chroma_format_idc !== 1 || sps.bit_depth_luma !== 8) {
    return new _M0DTPC16result6ResultGURP215Sam_2dHui_2ddot11moon_2dh26411SliceHeaderRP215Sam_2dHui_2ddot11moon_2dh2643SpsRP215Sam_2dHui_2ddot11moon_2dh2643PpsERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(new _M0DTPC15error5Error62Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eUnsupportedProfile("Only 4:2:0 8-bit video is supported in 0.1.0"));
  }
  const _bind$6 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader10read__bits(br, sps.log2_max_frame_num);
  let frame_num;
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    frame_num = _ok._0;
  } else {
    return _bind$6;
  }
  const is_idr = nal_unit_type === 5;
  let idr_pic_id;
  if (is_idr) {
    const _bind$7 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
    if (_bind$7.$tag === 1) {
      const _ok = _bind$7;
      idr_pic_id = _ok._0;
    } else {
      return _bind$7;
    }
  } else {
    idr_pic_id = 0;
  }
  let pic_order_cnt_lsb = 0;
  let delta_pic_order_cnt_0 = 0;
  let delta_pic_order_cnt_1 = 0;
  if (sps.pic_order_cnt_type === 0) {
    const _bind$7 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader10read__bits(br, sps.log2_max_pic_order_cnt_lsb);
    let _tmp;
    if (_bind$7.$tag === 1) {
      const _ok = _bind$7;
      _tmp = _ok._0;
    } else {
      return _bind$7;
    }
    pic_order_cnt_lsb = _tmp;
    if (pps.bottom_field_pic_order_in_frame_present_flag) {
      const _bind$8 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
      if (_bind$8.$tag === 1) {
        const _ok = _bind$8;
        _ok._0;
      } else {
        return _bind$8;
      }
    }
  } else {
    if (sps.pic_order_cnt_type === 1 && !sps.delta_pic_order_always_zero_flag) {
      const _bind$7 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
      let _tmp;
      if (_bind$7.$tag === 1) {
        const _ok = _bind$7;
        _tmp = _ok._0;
      } else {
        return _bind$7;
      }
      delta_pic_order_cnt_0 = _tmp;
      if (pps.bottom_field_pic_order_in_frame_present_flag) {
        const _bind$8 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
        let _tmp$2;
        if (_bind$8.$tag === 1) {
          const _ok = _bind$8;
          _tmp$2 = _ok._0;
        } else {
          return _bind$8;
        }
        delta_pic_order_cnt_1 = _tmp$2;
      }
    }
  }
  if (pps.redundant_pic_cnt_present_flag) {
    const _bind$7 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
    if (_bind$7.$tag === 1) {
      const _ok = _bind$7;
      _ok._0;
    } else {
      return _bind$7;
    }
  }
  let num_ref_idx_l0_active = pps.num_ref_idx_l0_default_active_minus1 + 1 | 0;
  if (slice_type === 0 || slice_type === 3) {
    const _bind$7 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
    let override_flag;
    if (_bind$7.$tag === 1) {
      const _ok = _bind$7;
      override_flag = _ok._0;
    } else {
      return _bind$7;
    }
    if (override_flag !== 0) {
      const _bind$8 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
      let _tmp;
      if (_bind$8.$tag === 1) {
        const _ok = _bind$8;
        _tmp = _ok._0;
      } else {
        return _bind$8;
      }
      num_ref_idx_l0_active = _tmp + 1 | 0;
    }
  }
  const ref_pic_list_mods_l0 = new _M0TPB5ArrayGRP215Sam_2dHui_2ddot11moon_2dh26413RefPicListModE([], 0);
  if (slice_type !== 2 && slice_type !== 4) {
    const _bind$7 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
    let _tmp;
    if (_bind$7.$tag === 1) {
      const _ok = _bind$7;
      _tmp = _ok._0;
    } else {
      return _bind$7;
    }
    if (_tmp !== 0) {
      while (true) {
        const _bind$8 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
        let idc;
        if (_bind$8.$tag === 1) {
          const _ok = _bind$8;
          idc = _ok._0;
        } else {
          return _bind$8;
        }
        if (idc === 3) {
          break;
        }
        const _bind$9 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
        let val;
        if (_bind$9.$tag === 1) {
          const _ok = _bind$9;
          val = _ok._0;
        } else {
          return _bind$9;
        }
        _M0MPC15array5Array4pushGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(ref_pic_list_mods_l0, new _M0TP215Sam_2dHui_2ddot11moon_2dh26413RefPicListMod(idc, val));
        continue;
      }
    }
  }
  let no_output_of_prior_pics_flag = false;
  let long_term_reference_flag = false;
  let adaptive_ref_pic_marking_mode_flag = false;
  const mmco_ops = new _M0TPB5ArrayGRP215Sam_2dHui_2ddot11moon_2dh2646MmcoOpE([], 0);
  if (nal_ref_idc !== 0) {
    if (is_idr) {
      const _bind$7 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
      let _tmp;
      if (_bind$7.$tag === 1) {
        const _ok = _bind$7;
        _tmp = _ok._0;
      } else {
        return _bind$7;
      }
      no_output_of_prior_pics_flag = _tmp !== 0;
      const _bind$8 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
      let _tmp$2;
      if (_bind$8.$tag === 1) {
        const _ok = _bind$8;
        _tmp$2 = _ok._0;
      } else {
        return _bind$8;
      }
      long_term_reference_flag = _tmp$2 !== 0;
    } else {
      const _bind$7 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
      let _tmp;
      if (_bind$7.$tag === 1) {
        const _ok = _bind$7;
        _tmp = _ok._0;
      } else {
        return _bind$7;
      }
      adaptive_ref_pic_marking_mode_flag = _tmp !== 0;
      if (adaptive_ref_pic_marking_mode_flag) {
        while (true) {
          const _bind$8 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
          let op;
          if (_bind$8.$tag === 1) {
            const _ok = _bind$8;
            op = _ok._0;
          } else {
            return _bind$8;
          }
          if (op === 0) {
            break;
          }
          _L: {
            _L$2: {
              switch (op) {
                case 1: {
                  break _L$2;
                }
                case 2: {
                  break _L$2;
                }
                case 4: {
                  break _L$2;
                }
                case 6: {
                  break _L$2;
                }
                case 3: {
                  const _bind$9 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
                  let arg1;
                  if (_bind$9.$tag === 1) {
                    const _ok = _bind$9;
                    arg1 = _ok._0;
                  } else {
                    return _bind$9;
                  }
                  const _bind$10 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
                  let arg2;
                  if (_bind$10.$tag === 1) {
                    const _ok = _bind$10;
                    arg2 = _ok._0;
                  } else {
                    return _bind$10;
                  }
                  _M0MPC15array5Array4pushGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(mmco_ops, new _M0TP215Sam_2dHui_2ddot11moon_2dh2646MmcoOp(op, arg1, arg2));
                  break;
                }
                case 5: {
                  _M0MPC15array5Array4pushGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(mmco_ops, new _M0TP215Sam_2dHui_2ddot11moon_2dh2646MmcoOp(op, 0, 0));
                  break;
                }
                default: {
                  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(23);
                  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Unknown MMCO operation ");
                  _M0MPB13StringBuilder13write__objectGiE(_string_builder, op);
                  return new _M0DTPC16result6ResultGURP215Sam_2dHui_2ddot11moon_2dh26411SliceHeaderRP215Sam_2dHui_2ddot11moon_2dh2643SpsRP215Sam_2dHui_2ddot11moon_2dh2643PpsERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(new _M0DTPC15error5Error57Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eInvalidSyntax(_string_builder.val));
                }
              }
              break _L;
            }
            const _bind$9 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
            let arg1;
            if (_bind$9.$tag === 1) {
              const _ok = _bind$9;
              arg1 = _ok._0;
            } else {
              return _bind$9;
            }
            _M0MPC15array5Array4pushGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(mmco_ops, new _M0TP215Sam_2dHui_2ddot11moon_2dh2646MmcoOp(op, arg1, 0));
          }
          continue;
        }
      }
    }
  }
  const _bind$7 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
  let slice_qp_delta;
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    slice_qp_delta = _ok._0;
  } else {
    return _bind$7;
  }
  const slice_qp_y = (26 + pps.pic_init_qp_minus26 | 0) + slice_qp_delta | 0;
  let disable_deblocking_filter_idc = 0;
  let slice_alpha_c0_offset_div2 = 0;
  let slice_beta_offset_div2 = 0;
  if (pps.deblocking_filter_control_present_flag) {
    const _bind$8 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
    let _tmp;
    if (_bind$8.$tag === 1) {
      const _ok = _bind$8;
      _tmp = _ok._0;
    } else {
      return _bind$8;
    }
    disable_deblocking_filter_idc = _tmp;
    if (disable_deblocking_filter_idc !== 1) {
      const _bind$9 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
      let _tmp$2;
      if (_bind$9.$tag === 1) {
        const _ok = _bind$9;
        _tmp$2 = _ok._0;
      } else {
        return _bind$9;
      }
      slice_alpha_c0_offset_div2 = _tmp$2;
      const _bind$10 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
      let _tmp$3;
      if (_bind$10.$tag === 1) {
        const _ok = _bind$10;
        _tmp$3 = _ok._0;
      } else {
        return _bind$10;
      }
      slice_beta_offset_div2 = _tmp$3;
    }
  }
  const header = new _M0TP215Sam_2dHui_2ddot11moon_2dh26411SliceHeader(first_mb_in_slice, slice_type, pps_id, frame_num, is_idr, nal_ref_idc, idr_pic_id, pic_order_cnt_lsb, delta_pic_order_cnt_0, delta_pic_order_cnt_1, num_ref_idx_l0_active, ref_pic_list_mods_l0, no_output_of_prior_pics_flag, long_term_reference_flag, adaptive_ref_pic_marking_mode_flag, mmco_ops, slice_qp_y, disable_deblocking_filter_idc, slice_alpha_c0_offset_div2, slice_beta_offset_div2);
  return new _M0DTPC16result6ResultGURP215Sam_2dHui_2ddot11moon_2dh26411SliceHeaderRP215Sam_2dHui_2ddot11moon_2dh2643SpsRP215Sam_2dHui_2ddot11moon_2dh2643PpsERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok({ _0: header, _1: sps, _2: pps });
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26425yuv420p__to__rgba_2einner(y_plane, u_plane, v_plane, width, height, bt709) {
  const cw = width + 1 >> 1;
  const out = $makebytes(Math.imul(Math.imul(width, height) | 0, 4) | 0, 255);
  let _tmp = 0;
  while (true) {
    const y = _tmp;
    if (y < height) {
      const y_row = Math.imul(y, width) | 0;
      const c_row = Math.imul(y >> 1, cw) | 0;
      const dst_row = Math.imul(Math.imul(y, width) | 0, 4) | 0;
      let _tmp$2 = 0;
      while (true) {
        const x = _tmp$2;
        if (x < width) {
          const _tmp$3 = y_row + x | 0;
          const yy = (_tmp$3 >>> 0 < y_plane.length ? y_plane[_tmp$3] : $oob()) - 16 | 0;
          const _tmp$4 = c_row + (x >> 1) | 0;
          const uu = (_tmp$4 >>> 0 < u_plane.length ? u_plane[_tmp$4] : $oob()) - 128 | 0;
          const _tmp$5 = c_row + (x >> 1) | 0;
          const vv = (_tmp$5 >>> 0 < v_plane.length ? v_plane[_tmp$5] : $oob()) - 128 | 0;
          const c_val = Math.imul(298, yy < 0 ? 0 : yy) | 0;
          let r;
          let g;
          let b;
          _L: {
            if (bt709) {
              const _p = (c_val + (Math.imul(459, vv) | 0) | 0) + 128 >> 8;
              const _tmp$6 = _p < 0 ? 0 : _p > 255 ? 255 : _p;
              const _p$2 = ((c_val - (Math.imul(55, uu) | 0) | 0) - (Math.imul(136, vv) | 0) | 0) + 128 >> 8;
              const _tmp$7 = _p$2 < 0 ? 0 : _p$2 > 255 ? 255 : _p$2;
              const _p$3 = (c_val + (Math.imul(541, uu) | 0) | 0) + 128 >> 8;
              r = _tmp$6;
              g = _tmp$7;
              b = _p$3 < 0 ? 0 : _p$3 > 255 ? 255 : _p$3;
              break _L;
            } else {
              const _p = (c_val + (Math.imul(409, vv) | 0) | 0) + 128 >> 8;
              const _tmp$6 = _p < 0 ? 0 : _p > 255 ? 255 : _p;
              const _p$2 = ((c_val - (Math.imul(100, uu) | 0) | 0) - (Math.imul(208, vv) | 0) | 0) + 128 >> 8;
              const _tmp$7 = _p$2 < 0 ? 0 : _p$2 > 255 ? 255 : _p$2;
              const _p$3 = (c_val + (Math.imul(516, uu) | 0) | 0) + 128 >> 8;
              r = _tmp$6;
              g = _tmp$7;
              b = _p$3 < 0 ? 0 : _p$3 > 255 ? 255 : _p$3;
              break _L;
            }
          }
          const p = dst_row + (Math.imul(x, 4) | 0) | 0;
          if (p >>> 0 < out.length) {
            out[p] = r & 255;
          } else {
            $oob();
          }
          const _tmp$6 = p + 1 | 0;
          if (_tmp$6 >>> 0 < out.length) {
            out[_tmp$6] = g & 255;
          } else {
            $oob();
          }
          const _tmp$7 = p + 2 | 0;
          if (_tmp$7 >>> 0 < out.length) {
            out[_tmp$7] = b & 255;
          } else {
            $oob();
          }
          const _tmp$8 = p + 3 | 0;
          if (_tmp$8 >>> 0 < out.length) {
            out[_tmp$8] = 255;
          } else {
            $oob();
          }
          _tmp$2 = x + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = y + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(out, 0, out.length));
}
function _M0MP215Sam_2dHui_2ddot11moon_2dh26412DecodedFrame8to__rgba(self) {
  return _M0FP215Sam_2dHui_2ddot11moon_2dh26425yuv420p__to__rgba_2einner(self.y, self.u, self.v, self.width, self.height, self.matrix_coefficients === 1);
}
function _M0MP215Sam_2dHui_2ddot11moon_2dh26411H264Decoder3new() {
  const _bind = [];
  const _tmp = _M0MPB3Map3MapGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(new _M0TPB9ArrayViewGUiRP215Sam_2dHui_2ddot11moon_2dh2643SpsEE(_bind, 0, 0), undefined);
  const _bind$2 = [];
  return new _M0TP215Sam_2dHui_2ddot11moon_2dh26411H264Decoder(_tmp, _M0MPB3Map3MapGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(new _M0TPB9ArrayViewGUiRP215Sam_2dHui_2ddot11moon_2dh2643PpsEE(_bind$2, 0, 0), undefined), new _M0TPB5ArrayGRP215Sam_2dHui_2ddot11moon_2dh2648RefFrameE([], 0), 1, 0, 0, undefined);
}
function _M0MP215Sam_2dHui_2ddot11moon_2dh26413ActivePicture3new(sps, pps, hdr, raw_size) {
  const mb_w = sps.pic_width_in_mbs;
  const mb_h = sps.pic_height_in_mbs;
  const num_mbs = Math.imul(mb_w, mb_h) | 0;
  const pic_w = Math.imul(mb_w, 16) | 0;
  const pic_h = Math.imul(mb_h, 16) | 0;
  const cw = Math.imul(mb_w, 8) | 0;
  const ch = Math.imul(mb_h, 8) | 0;
  const n4 = Math.imul(Math.imul(Math.imul(mb_w, 4) | 0, mb_h) | 0, 4) | 0;
  const n2 = Math.imul(Math.imul(Math.imul(mb_w, 2) | 0, mb_h) | 0, 2) | 0;
  let default_mbs;
  if (num_mbs <= 0) {
    default_mbs = new _M0TPB5ArrayGRP215Sam_2dHui_2ddot11moon_2dh2646MbMetaE([], 0);
  } else {
    const _p = _M0MPC15array5Array20unsafe__make__uninitGRP215Sam_2dHui_2ddot11moon_2dh2646MbMetaE(num_mbs);
    let _tmp = 0;
    while (true) {
      const _p$2 = _tmp;
      if (_p$2 < num_mbs) {
        const _p$3 = new _M0TP215Sam_2dHui_2ddot11moon_2dh2646MbMeta(_p$2 % mb_w | 0, _p$2 / mb_w | 0, 3, hdr.slice_qp_y, 0, 0, 0, -1);
        _p.buf[_p$2] = _p$3;
        _tmp = _p$2 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    default_mbs = _p;
  }
  return new _M0TP215Sam_2dHui_2ddot11moon_2dh26413ActivePicture(sps, pps, hdr.frame_num, hdr.is_idr, hdr.nal_ref_idc, hdr.idr_pic_id, hdr.slice_type, hdr.slice_qp_y, raw_size, hdr.long_term_reference_flag, hdr.adaptive_ref_pic_marking_mode_flag, hdr.mmco_ops, mb_w, mb_h, $makebytes(Math.imul(pic_w, pic_h) | 0, 128), $makebytes(Math.imul(cw, ch) | 0, 128), $makebytes(Math.imul(cw, ch) | 0, 128), $make_array_len_and_init(num_mbs, false), $make_array_len_and_init(num_mbs, false), $make_array_len_and_init(num_mbs, hdr.slice_qp_y), $make_array_len_and_init(num_mbs, -1), $make_array_len_and_init(num_mbs, 0), $make_array_len_and_init(num_mbs, 0), $make_array_len_and_init(num_mbs, 0), $make_array_len_and_init(n4, 0), $make_array_len_and_init(n2, 0), $make_array_len_and_init(n2, 0), $make_array_len_and_init(n4, 2), $make_array_len_and_init(n4, 0), $make_array_len_and_init(n4, 0), $make_array_len_and_init(n4, -1), $make_array_len_and_init(n4, -1), default_mbs);
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26411crop__plane(plane, src_w, crop_l, crop_t, out_w, out_h) {
  if (crop_l === 0 && (crop_t === 0 && (out_w === src_w && (Math.imul(out_w, out_h) | 0) === plane.length))) {
    return _M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(plane, 0, plane.length));
  }
  const out = $makebytes(Math.imul(out_w, out_h) | 0, 0);
  let _tmp = 0;
  while (true) {
    const r = _tmp;
    if (r < out_h) {
      const src_row = (Math.imul(crop_t + r | 0, src_w) | 0) + crop_l | 0;
      const dst_row = Math.imul(r, out_w) | 0;
      let _tmp$2 = 0;
      while (true) {
        const c = _tmp$2;
        if (c < out_w) {
          const _tmp$3 = dst_row + c | 0;
          const _tmp$4 = src_row + c | 0;
          if (_tmp$3 >>> 0 < out.length) {
            out[_tmp$3] = _tmp$4 >>> 0 < plane.length ? plane[_tmp$4] : $oob();
          } else {
            $oob();
          }
          _tmp$2 = c + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = r + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(out, 0, out.length));
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26420build__ref__list__l0(dpb, sps, hdr) {
  const max_fn = 1 << sps.log2_max_frame_num;
  const short_term = new _M0TPB5ArrayGUiRP215Sam_2dHui_2ddot11moon_2dh2648RefFrameEE([], 0);
  const long_term = new _M0TPB5ArrayGUiRP215Sam_2dHui_2ddot11moon_2dh2648RefFrameEE([], 0);
  const _bind = dpb.len;
  const _bind$2 = dpb.buf;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const r = _bind$2[_];
      if (r.is_long_term) {
        _M0MPC15array5Array4pushGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(long_term, { _0: r.long_term_frame_idx, _1: r });
      } else {
        const wrap = r.frame_num > hdr.frame_num ? r.frame_num - max_fn | 0 : r.frame_num;
        _M0MPC15array5Array4pushGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(short_term, { _0: wrap, _1: r });
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = 1;
  while (true) {
    const i = _tmp$2;
    if (i < short_term.len) {
      if (i < 0 || i >= short_term.len) {
        $panic();
      }
      const key = short_term.buf[i];
      let j = i - 1 | 0;
      while (true) {
        let _tmp$3;
        if (j >= 0) {
          const _bind$3 = j;
          if (_bind$3 < 0 || _bind$3 >= short_term.len) {
            $panic();
          }
          _tmp$3 = short_term.buf[_bind$3]._0 < key._0;
        } else {
          _tmp$3 = false;
        }
        if (_tmp$3) {
          const _bind$3 = j + 1 | 0;
          const _bind$4 = j;
          if (_bind$4 < 0 || _bind$4 >= short_term.len) {
            $panic();
          }
          const _bind$5 = short_term.buf[_bind$4];
          if (_bind$3 < 0 || _bind$3 >= short_term.len) {
            $panic();
          }
          short_term.buf[_bind$3] = _bind$5;
          j = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _bind$3 = j + 1 | 0;
      if (_bind$3 < 0 || _bind$3 >= short_term.len) {
        $panic();
      }
      short_term.buf[_bind$3] = key;
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$3 = 1;
  while (true) {
    const i = _tmp$3;
    if (i < long_term.len) {
      if (i < 0 || i >= long_term.len) {
        $panic();
      }
      const key = long_term.buf[i];
      let j = i - 1 | 0;
      while (true) {
        let _tmp$4;
        if (j >= 0) {
          const _bind$3 = j;
          if (_bind$3 < 0 || _bind$3 >= long_term.len) {
            $panic();
          }
          _tmp$4 = long_term.buf[_bind$3]._0 > key._0;
        } else {
          _tmp$4 = false;
        }
        if (_tmp$4) {
          const _bind$3 = j + 1 | 0;
          const _bind$4 = j;
          if (_bind$4 < 0 || _bind$4 >= long_term.len) {
            $panic();
          }
          const _bind$5 = long_term.buf[_bind$4];
          if (_bind$3 < 0 || _bind$3 >= long_term.len) {
            $panic();
          }
          long_term.buf[_bind$3] = _bind$5;
          j = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _bind$3 = j + 1 | 0;
      if (_bind$3 < 0 || _bind$3 >= long_term.len) {
        $panic();
      }
      long_term.buf[_bind$3] = key;
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const list = new _M0TPB5ArrayGRP215Sam_2dHui_2ddot11moon_2dh2648RefFrameE([], 0);
  const _bind$3 = short_term.len;
  const _bind$4 = short_term.buf;
  let _tmp$4 = 0;
  while (true) {
    const _ = _tmp$4;
    if (_ < _bind$3) {
      const p = _bind$4[_];
      _M0MPC15array5Array4pushGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(list, p._1);
      _tmp$4 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$5 = long_term.len;
  const _bind$6 = long_term.buf;
  let _tmp$5 = 0;
  while (true) {
    const _ = _tmp$5;
    if (_ < _bind$5) {
      const p = _bind$6[_];
      _M0MPC15array5Array4pushGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(list, p._1);
      _tmp$5 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (hdr.ref_pic_list_mods_l0.len > 0 && list.len > 0) {
    let pic_num_pred = hdr.frame_num;
    let ref_idx_l0 = 0;
    const _bind$7 = hdr.ref_pic_list_mods_l0;
    const _bind$8 = _bind$7.len;
    const _bind$9 = _bind$7.buf;
    let _tmp$6 = 0;
    while (true) {
      const _ = _tmp$6;
      if (_ < _bind$8) {
        const m = _bind$9[_];
        let found_idx = -1;
        if (m.idc === 0 || m.idc === 1) {
          let no_wrap = m.idc === 0 ? pic_num_pred - (m.value + 1 | 0) | 0 : pic_num_pred + (m.value + 1 | 0) | 0;
          if (no_wrap < 0) {
            no_wrap = no_wrap + max_fn | 0;
          } else {
            if (no_wrap >= max_fn) {
              no_wrap = no_wrap - max_fn | 0;
            }
          }
          pic_num_pred = no_wrap;
          const target_fn = no_wrap;
          let _tmp$7 = 0;
          while (true) {
            const k = _tmp$7;
            if (k < list.len) {
              let _tmp$8;
              if (k < 0 || k >= list.len) {
                $panic();
              }
              if (!list.buf[k].is_long_term) {
                if (k < 0 || k >= list.len) {
                  $panic();
                }
                _tmp$8 = list.buf[k].frame_num === target_fn;
              } else {
                _tmp$8 = false;
              }
              if (_tmp$8) {
                found_idx = k;
                break;
              }
              _tmp$7 = k + 1 | 0;
              continue;
            } else {
              break;
            }
          }
        } else {
          if (m.idc === 2) {
            let _tmp$7 = 0;
            while (true) {
              const k = _tmp$7;
              if (k < list.len) {
                let _tmp$8;
                if (k < 0 || k >= list.len) {
                  $panic();
                }
                if (list.buf[k].is_long_term) {
                  if (k < 0 || k >= list.len) {
                    $panic();
                  }
                  _tmp$8 = list.buf[k].long_term_frame_idx === m.value;
                } else {
                  _tmp$8 = false;
                }
                if (_tmp$8) {
                  found_idx = k;
                  break;
                }
                _tmp$7 = k + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          }
        }
        if (found_idx >= 0 && ref_idx_l0 < list.len) {
          const _bind$10 = found_idx;
          if (_bind$10 < 0 || _bind$10 >= list.len) {
            $panic();
          }
          const target = list.buf[_bind$10];
          if (found_idx > ref_idx_l0) {
            let k = found_idx;
            while (true) {
              if (k > ref_idx_l0) {
                const _bind$11 = k;
                const _bind$12 = k - 1 | 0;
                if (_bind$12 < 0 || _bind$12 >= list.len) {
                  $panic();
                }
                const _bind$13 = list.buf[_bind$12];
                if (_bind$11 < 0 || _bind$11 >= list.len) {
                  $panic();
                }
                list.buf[_bind$11] = _bind$13;
                k = k - 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _bind$11 = ref_idx_l0;
            if (_bind$11 < 0 || _bind$11 >= list.len) {
              $panic();
            }
            list.buf[_bind$11] = target;
          }
          ref_idx_l0 = ref_idx_l0 + 1 | 0;
        }
        _tmp$6 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  return list;
}
function _M0MP215Sam_2dHui_2ddot11moon_2dh26411H264Decoder11update__dpb(self, pic) {
  if (pic.is_idr) {
    _M0MPC15array5Array5clearGRP215Sam_2dHui_2ddot11moon_2dh2648RefFrameE(self.dpb);
  }
  if (pic.nal_ref_idc === 0) {
    return undefined;
  }
  const max_fn = 1 << pic.sps.log2_max_frame_num;
  if (!pic.is_idr && pic.adaptive_marking) {
    const _bind = pic.mmco_ops;
    const _bind$2 = _bind.len;
    const _bind$3 = _bind.buf;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const op = _bind$3[_];
        const _bind$4 = op.op;
        switch (_bind$4) {
          case 1: {
            const target_fn = ((pic.frame_num - (op.arg1 + 1 | 0) | 0) + max_fn | 0) % max_fn | 0;
            let idx = -1;
            let _tmp$2 = 0;
            while (true) {
              const i = _tmp$2;
              if (i < self.dpb.len) {
                let _tmp$3;
                const _bind$5 = self.dpb;
                if (i < 0 || i >= _bind$5.len) {
                  $panic();
                }
                if (!_bind$5.buf[i].is_long_term) {
                  const _bind$6 = self.dpb;
                  if (i < 0 || i >= _bind$6.len) {
                    $panic();
                  }
                  _tmp$3 = _bind$6.buf[i].frame_num === target_fn;
                } else {
                  _tmp$3 = false;
                }
                if (_tmp$3) {
                  idx = i;
                  break;
                }
                _tmp$2 = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            if (idx >= 0) {
              _M0MPC15array5Array6removeGRP215Sam_2dHui_2ddot11moon_2dh2648RefFrameE(self.dpb, idx);
            }
            break;
          }
          case 2: {
            let idx$2 = -1;
            let _tmp$3 = 0;
            while (true) {
              const i = _tmp$3;
              if (i < self.dpb.len) {
                let _tmp$4;
                const _bind$5 = self.dpb;
                if (i < 0 || i >= _bind$5.len) {
                  $panic();
                }
                if (_bind$5.buf[i].is_long_term) {
                  const _bind$6 = self.dpb;
                  if (i < 0 || i >= _bind$6.len) {
                    $panic();
                  }
                  _tmp$4 = _bind$6.buf[i].long_term_frame_idx === op.arg1;
                } else {
                  _tmp$4 = false;
                }
                if (_tmp$4) {
                  idx$2 = i;
                  break;
                }
                _tmp$3 = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            if (idx$2 >= 0) {
              _M0MPC15array5Array6removeGRP215Sam_2dHui_2ddot11moon_2dh2648RefFrameE(self.dpb, idx$2);
            }
            break;
          }
          case 5: {
            _M0MPC15array5Array5clearGRP215Sam_2dHui_2ddot11moon_2dh2648RefFrameE(self.dpb);
            break;
          }
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  const max_refs = pic.sps.max_num_ref_frames > 0 ? pic.sps.max_num_ref_frames : 1;
  while (true) {
    if (self.dpb.len >= max_refs) {
      let evict = -1;
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < self.dpb.len) {
          const _bind = self.dpb;
          if (i < 0 || i >= _bind.len) {
            $panic();
          }
          if (!_bind.buf[i].is_long_term) {
            evict = i;
            break;
          }
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (evict >= 0) {
        _M0MPC15array5Array6removeGRP215Sam_2dHui_2ddot11moon_2dh2648RefFrameE(self.dpb, evict);
      } else {
        _M0MPC15array5Array6removeGRP215Sam_2dHui_2ddot11moon_2dh2648RefFrameE(self.dpb, 0);
      }
      continue;
    } else {
      break;
    }
  }
  const pid = self.next_pic_id;
  self.next_pic_id = self.next_pic_id + 1 | 0;
  _M0MPC15array5Array4pushGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self.dpb, new _M0TP215Sam_2dHui_2ddot11moon_2dh2648RefFrame(pid, pic.frame_num, pic.is_idr && pic.long_term_reference, 0, pic.y, pic.u, pic.v));
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26411compute__bs(mb_is_intra, mb_w, nnz_luma, mv_x, mv_y, ref_pic_id, px, py, qx, qy, is_mb_edge) {
  const stride4 = Math.imul(mb_w, 4) | 0;
  const p_mb = (Math.imul(py >> 2, mb_w) | 0) + (px >> 2) | 0;
  const q_mb = (Math.imul(qy >> 2, mb_w) | 0) + (qx >> 2) | 0;
  if ((p_mb >>> 0 < mb_is_intra.length ? mb_is_intra[p_mb] : $oob()) || (q_mb >>> 0 < mb_is_intra.length ? mb_is_intra[q_mb] : $oob())) {
    return is_mb_edge ? 4 : 3;
  }
  const p_idx = (Math.imul(py, stride4) | 0) + px | 0;
  const q_idx = (Math.imul(qy, stride4) | 0) + qx | 0;
  if ((p_idx >>> 0 < nnz_luma.length ? nnz_luma[p_idx] : $oob()) > 0 || (q_idx >>> 0 < nnz_luma.length ? nnz_luma[q_idx] : $oob()) > 0) {
    return 2;
  }
  if ((p_idx >>> 0 < ref_pic_id.length ? ref_pic_id[p_idx] : $oob()) !== (q_idx >>> 0 < ref_pic_id.length ? ref_pic_id[q_idx] : $oob())) {
    return 1;
  }
  let _tmp;
  const _p = (p_idx >>> 0 < mv_x.length ? mv_x[p_idx] : $oob()) - (q_idx >>> 0 < mv_x.length ? mv_x[q_idx] : $oob()) | 0;
  if ((_p < 0 ? -_p | 0 : _p) >= 4) {
    _tmp = true;
  } else {
    const _p$2 = (p_idx >>> 0 < mv_y.length ? mv_y[p_idx] : $oob()) - (q_idx >>> 0 < mv_y.length ? mv_y[q_idx] : $oob()) | 0;
    _tmp = (_p$2 < 0 ? -_p$2 | 0 : _p$2) >= 4;
  }
  if (_tmp) {
    return 1;
  }
  return 0;
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26420filter__chroma__line(plane, q0_idx, step, bs, alpha, beta, tc0) {
  const _tmp = q0_idx - step | 0;
  const p0 = _tmp >>> 0 < plane.length ? plane[_tmp] : $oob();
  const _tmp$2 = q0_idx - (Math.imul(2, step) | 0) | 0;
  const p1 = _tmp$2 >>> 0 < plane.length ? plane[_tmp$2] : $oob();
  const q0 = q0_idx >>> 0 < plane.length ? plane[q0_idx] : $oob();
  const _tmp$3 = q0_idx + step | 0;
  const q1 = _tmp$3 >>> 0 < plane.length ? plane[_tmp$3] : $oob();
  let _tmp$4;
  const _p = p0 - q0 | 0;
  if ((_p < 0 ? -_p | 0 : _p) >= alpha) {
    _tmp$4 = true;
  } else {
    let _tmp$5;
    const _p$2 = p1 - p0 | 0;
    if ((_p$2 < 0 ? -_p$2 | 0 : _p$2) >= beta) {
      _tmp$5 = true;
    } else {
      const _p$3 = q1 - q0 | 0;
      _tmp$5 = (_p$3 < 0 ? -_p$3 | 0 : _p$3) >= beta;
    }
    _tmp$4 = _tmp$5;
  }
  if (_tmp$4) {
    return undefined;
  }
  if (bs < 4) {
    const tc = tc0 + 1 | 0;
    const _p$2 = ((q0 - p0 << 2) + (p1 - q1 | 0) | 0) + 4 >> 3;
    const _p$3 = -tc | 0;
    const delta = _p$2 < _p$3 ? _p$3 : _p$2 > tc ? tc : _p$2;
    const _tmp$5 = q0_idx - step | 0;
    const _p$4 = p0 + delta | 0;
    if (_tmp$5 >>> 0 < plane.length) {
      plane[_tmp$5] = (_p$4 < 0 ? 0 : _p$4 > 255 ? 255 : _p$4) & 255;
    } else {
      $oob();
    }
    const _p$5 = q0 - delta | 0;
    if (q0_idx >>> 0 < plane.length) {
      plane[q0_idx] = (_p$5 < 0 ? 0 : _p$5 > 255 ? 255 : _p$5) & 255;
    } else {
      $oob();
    }
    return;
  } else {
    const _tmp$5 = q0_idx - step | 0;
    if (_tmp$5 >>> 0 < plane.length) {
      plane[_tmp$5] = (((Math.imul(2, p1) | 0) + p0 | 0) + q1 | 0) + 2 >> 2 & 255;
    } else {
      $oob();
    }
    if (q0_idx >>> 0 < plane.length) {
      plane[q0_idx] = (((Math.imul(2, q1) | 0) + q0 | 0) + p1 | 0) + 2 >> 2 & 255;
    } else {
      $oob();
    }
    return;
  }
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26418filter__luma__line(plane, q0_idx, step, bs, alpha, beta, tc0) {
  const _tmp = q0_idx - step | 0;
  const p0 = _tmp >>> 0 < plane.length ? plane[_tmp] : $oob();
  const _tmp$2 = q0_idx - (Math.imul(2, step) | 0) | 0;
  const p1 = _tmp$2 >>> 0 < plane.length ? plane[_tmp$2] : $oob();
  const q0 = q0_idx >>> 0 < plane.length ? plane[q0_idx] : $oob();
  const _tmp$3 = q0_idx + step | 0;
  const q1 = _tmp$3 >>> 0 < plane.length ? plane[_tmp$3] : $oob();
  let _tmp$4;
  const _p = p0 - q0 | 0;
  if ((_p < 0 ? -_p | 0 : _p) >= alpha) {
    _tmp$4 = true;
  } else {
    let _tmp$5;
    const _p$2 = p1 - p0 | 0;
    if ((_p$2 < 0 ? -_p$2 | 0 : _p$2) >= beta) {
      _tmp$5 = true;
    } else {
      const _p$3 = q1 - q0 | 0;
      _tmp$5 = (_p$3 < 0 ? -_p$3 | 0 : _p$3) >= beta;
    }
    _tmp$4 = _tmp$5;
  }
  if (_tmp$4) {
    return undefined;
  }
  const _tmp$5 = q0_idx - (Math.imul(3, step) | 0) | 0;
  const p2 = _tmp$5 >>> 0 < plane.length ? plane[_tmp$5] : $oob();
  const _tmp$6 = q0_idx + (Math.imul(2, step) | 0) | 0;
  const q2 = _tmp$6 >>> 0 < plane.length ? plane[_tmp$6] : $oob();
  const _p$2 = p2 - p0 | 0;
  const ap = (_p$2 < 0 ? -_p$2 | 0 : _p$2) < beta;
  const _p$3 = q2 - q0 | 0;
  const aq = (_p$3 < 0 ? -_p$3 | 0 : _p$3) < beta;
  if (bs < 4) {
    const tc = (tc0 + (ap ? 1 : 0) | 0) + (aq ? 1 : 0) | 0;
    const _p$4 = ((q0 - p0 << 2) + (p1 - q1 | 0) | 0) + 4 >> 3;
    const _p$5 = -tc | 0;
    const delta = _p$4 < _p$5 ? _p$5 : _p$4 > tc ? tc : _p$4;
    const _tmp$7 = q0_idx - step | 0;
    const _p$6 = p0 + delta | 0;
    if (_tmp$7 >>> 0 < plane.length) {
      plane[_tmp$7] = (_p$6 < 0 ? 0 : _p$6 > 255 ? 255 : _p$6) & 255;
    } else {
      $oob();
    }
    const _p$7 = q0 - delta | 0;
    if (q0_idx >>> 0 < plane.length) {
      plane[q0_idx] = (_p$7 < 0 ? 0 : _p$7 > 255 ? 255 : _p$7) & 255;
    } else {
      $oob();
    }
    if (ap) {
      const _p$8 = (p2 + ((p0 + q0 | 0) + 1 >> 1) | 0) - (p1 << 1) >> 1;
      const _p$9 = -tc0 | 0;
      const dp1 = _p$8 < _p$9 ? _p$9 : _p$8 > tc0 ? tc0 : _p$8;
      const _tmp$8 = q0_idx - (Math.imul(2, step) | 0) | 0;
      const _p$10 = p1 + dp1 | 0;
      if (_tmp$8 >>> 0 < plane.length) {
        plane[_tmp$8] = (_p$10 < 0 ? 0 : _p$10 > 255 ? 255 : _p$10) & 255;
      } else {
        $oob();
      }
    }
    if (aq) {
      const _p$8 = (q2 + ((p0 + q0 | 0) + 1 >> 1) | 0) - (q1 << 1) >> 1;
      const _p$9 = -tc0 | 0;
      const dq1 = _p$8 < _p$9 ? _p$9 : _p$8 > tc0 ? tc0 : _p$8;
      const _tmp$8 = q0_idx + step | 0;
      const _p$10 = q1 + dq1 | 0;
      if (_tmp$8 >>> 0 < plane.length) {
        plane[_tmp$8] = (_p$10 < 0 ? 0 : _p$10 > 255 ? 255 : _p$10) & 255;
      } else {
        $oob();
      }
      return;
    } else {
      return;
    }
  } else {
    const _p$4 = p0 - q0 | 0;
    const small_gap = (_p$4 < 0 ? -_p$4 | 0 : _p$4) < ((alpha >> 2) + 2 | 0);
    if (ap && small_gap) {
      const _tmp$7 = q0_idx - (Math.imul(4, step) | 0) | 0;
      const p3 = _tmp$7 >>> 0 < plane.length ? plane[_tmp$7] : $oob();
      const _tmp$8 = q0_idx - step | 0;
      if (_tmp$8 >>> 0 < plane.length) {
        plane[_tmp$8] = ((((p2 + (Math.imul(2, p1) | 0) | 0) + (Math.imul(2, p0) | 0) | 0) + (Math.imul(2, q0) | 0) | 0) + q1 | 0) + 4 >> 3 & 255;
      } else {
        $oob();
      }
      const _tmp$9 = q0_idx - (Math.imul(2, step) | 0) | 0;
      if (_tmp$9 >>> 0 < plane.length) {
        plane[_tmp$9] = (((p2 + p1 | 0) + p0 | 0) + q0 | 0) + 2 >> 2 & 255;
      } else {
        $oob();
      }
      const _tmp$10 = q0_idx - (Math.imul(3, step) | 0) | 0;
      if (_tmp$10 >>> 0 < plane.length) {
        plane[_tmp$10] = (((((Math.imul(2, p3) | 0) + (Math.imul(3, p2) | 0) | 0) + p1 | 0) + p0 | 0) + q0 | 0) + 4 >> 3 & 255;
      } else {
        $oob();
      }
    } else {
      const _tmp$7 = q0_idx - step | 0;
      if (_tmp$7 >>> 0 < plane.length) {
        plane[_tmp$7] = (((Math.imul(2, p1) | 0) + p0 | 0) + q1 | 0) + 2 >> 2 & 255;
      } else {
        $oob();
      }
    }
    if (aq && small_gap) {
      const _tmp$7 = q0_idx + (Math.imul(3, step) | 0) | 0;
      const q3 = _tmp$7 >>> 0 < plane.length ? plane[_tmp$7] : $oob();
      if (q0_idx >>> 0 < plane.length) {
        plane[q0_idx] = ((((p1 + (Math.imul(2, p0) | 0) | 0) + (Math.imul(2, q0) | 0) | 0) + (Math.imul(2, q1) | 0) | 0) + q2 | 0) + 4 >> 3 & 255;
      } else {
        $oob();
      }
      const _tmp$8 = q0_idx + step | 0;
      if (_tmp$8 >>> 0 < plane.length) {
        plane[_tmp$8] = (((p0 + q0 | 0) + q1 | 0) + q2 | 0) + 2 >> 2 & 255;
      } else {
        $oob();
      }
      const _tmp$9 = q0_idx + (Math.imul(2, step) | 0) | 0;
      if (_tmp$9 >>> 0 < plane.length) {
        plane[_tmp$9] = (((((Math.imul(2, q3) | 0) + (Math.imul(3, q2) | 0) | 0) + q1 | 0) + q0 | 0) + p0 | 0) + 4 >> 3 & 255;
      } else {
        $oob();
      }
      return;
    } else {
      if (q0_idx >>> 0 < plane.length) {
        plane[q0_idx] = (((Math.imul(2, q1) | 0) + q0 | 0) + p1 | 0) + 2 >> 2 & 255;
      } else {
        $oob();
      }
      return;
    }
  }
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26414deblock__frame(y_plane, u_plane, v_plane, mb_w, mb_h, mb_is_intra, mb_qp, mb_slice_id, mb_disable_deblock, mb_alpha_off, mb_beta_off, chroma_qp_offset, nnz_luma, mv_x, mv_y, ref_pic_id) {
  const pic_w = Math.imul(mb_w, 16) | 0;
  const cw = Math.imul(mb_w, 8) | 0;
  let _tmp = 0;
  while (true) {
    const mb_y = _tmp;
    if (mb_y < mb_h) {
      let _tmp$2 = 0;
      while (true) {
        const mb_x = _tmp$2;
        if (mb_x < mb_w) {
          _L: {
            const mb_idx = (Math.imul(mb_y, mb_w) | 0) + mb_x | 0;
            const idc = mb_idx >>> 0 < mb_disable_deblock.length ? mb_disable_deblock[mb_idx] : $oob();
            if (idc === 1) {
              break _L;
            }
            const alpha_off = Math.imul(mb_idx >>> 0 < mb_alpha_off.length ? mb_alpha_off[mb_idx] : $oob(), 2) | 0;
            const beta_off = Math.imul(mb_idx >>> 0 < mb_beta_off.length ? mb_beta_off[mb_idx] : $oob(), 2) | 0;
            const q_qp = mb_idx >>> 0 < mb_qp.length ? mb_qp[mb_idx] : $oob();
            const q_slice = mb_idx >>> 0 < mb_slice_id.length ? mb_slice_id[mb_idx] : $oob();
            const bx0 = Math.imul(mb_x, 4) | 0;
            const by0 = Math.imul(mb_y, 4) | 0;
            let _tmp$3 = 0;
            while (true) {
              const edge = _tmp$3;
              if (edge < 4) {
                _L$2: {
                  if (edge === 0 && mb_x === 0) {
                    break _L$2;
                  }
                  const p_mb = edge === 0 ? mb_idx - 1 | 0 : mb_idx;
                  if (edge === 0 && (idc === 2 && (p_mb >>> 0 < mb_slice_id.length ? mb_slice_id[p_mb] : $oob()) !== q_slice)) {
                    break _L$2;
                  }
                  const p_qp = p_mb >>> 0 < mb_qp.length ? mb_qp[p_mb] : $oob();
                  const qp_av = (p_qp + q_qp | 0) + 1 >> 1;
                  const _p = qp_av + alpha_off | 0;
                  const idx_a = _p < 0 ? 0 : _p > 51 ? 51 : _p;
                  const _p$2 = qp_av + beta_off | 0;
                  const idx_b = _p$2 < 0 ? 0 : _p$2 > 51 ? 51 : _p$2;
                  const alpha = idx_a >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh26412alpha__table.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh26412alpha__table[idx_a] : $oob();
                  const beta = idx_b >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh26411beta__table.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh26411beta__table[idx_b] : $oob();
                  const is_mb_edge = edge === 0;
                  const qx_px = (Math.imul(mb_x, 16) | 0) + (Math.imul(edge, 4) | 0) | 0;
                  const bs_arr = $make_array_len_and_init(4, 0);
                  let _tmp$4 = 0;
                  while (true) {
                    const seg = _tmp$4;
                    if (seg < 4) {
                      const bs = _M0FP215Sam_2dHui_2ddot11moon_2dh26411compute__bs(mb_is_intra, mb_w, nnz_luma, mv_x, mv_y, ref_pic_id, (bx0 + edge | 0) - 1 | 0, by0 + seg | 0, bx0 + edge | 0, by0 + seg | 0, is_mb_edge);
                      if (seg >>> 0 < bs_arr.length) {
                        bs_arr[seg] = bs;
                      } else {
                        $oob();
                      }
                      if (bs > 0 && (alpha > 0 || beta > 0)) {
                        let tc0;
                        if (bs < 4) {
                          const _tmp$5 = ((Math.imul(idx_a, 3) | 0) + bs | 0) - 1 | 0;
                          tc0 = _tmp$5 >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh26410tc0__table.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh26410tc0__table[_tmp$5] : $oob();
                        } else {
                          tc0 = 0;
                        }
                        const y_base = (Math.imul(mb_y, 16) | 0) + (Math.imul(seg, 4) | 0) | 0;
                        let _tmp$5 = 0;
                        while (true) {
                          const line = _tmp$5;
                          if (line < 4) {
                            _M0FP215Sam_2dHui_2ddot11moon_2dh26418filter__luma__line(y_plane, (Math.imul(y_base + line | 0, pic_w) | 0) + qx_px | 0, 1, bs, alpha, beta, tc0);
                            _tmp$5 = line + 1 | 0;
                            continue;
                          } else {
                            break;
                          }
                        }
                      }
                      _tmp$4 = seg + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  if (edge === 0 || edge === 2) {
                    const p_qpc = _M0FP215Sam_2dHui_2ddot11moon_2dh26422chroma__qp__from__luma(p_qp, chroma_qp_offset);
                    const q_qpc = _M0FP215Sam_2dHui_2ddot11moon_2dh26422chroma__qp__from__luma(q_qp, chroma_qp_offset);
                    const qpc_av = (p_qpc + q_qpc | 0) + 1 >> 1;
                    const _p$3 = qpc_av + alpha_off | 0;
                    const idx_ac = _p$3 < 0 ? 0 : _p$3 > 51 ? 51 : _p$3;
                    const _p$4 = qpc_av + beta_off | 0;
                    const idx_bc = _p$4 < 0 ? 0 : _p$4 > 51 ? 51 : _p$4;
                    const alpha_c = idx_ac >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh26412alpha__table.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh26412alpha__table[idx_ac] : $oob();
                    const beta_c = idx_bc >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh26411beta__table.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh26411beta__table[idx_bc] : $oob();
                    const cqx_px = (Math.imul(mb_x, 8) | 0) + (Math.imul(edge >> 1, 4) | 0) | 0;
                    let _tmp$5 = 0;
                    while (true) {
                      const seg = _tmp$5;
                      if (seg < 4) {
                        const bs = seg >>> 0 < bs_arr.length ? bs_arr[seg] : $oob();
                        if (bs > 0 && (alpha_c > 0 || beta_c > 0)) {
                          let tc0_c;
                          if (bs < 4) {
                            const _tmp$6 = ((Math.imul(idx_ac, 3) | 0) + bs | 0) - 1 | 0;
                            tc0_c = _tmp$6 >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh26410tc0__table.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh26410tc0__table[_tmp$6] : $oob();
                          } else {
                            tc0_c = 0;
                          }
                          const cy_base = (Math.imul(mb_y, 8) | 0) + (Math.imul(seg, 2) | 0) | 0;
                          let _tmp$6 = 0;
                          while (true) {
                            const line = _tmp$6;
                            if (line < 2) {
                              const idx = (Math.imul(cy_base + line | 0, cw) | 0) + cqx_px | 0;
                              _M0FP215Sam_2dHui_2ddot11moon_2dh26420filter__chroma__line(u_plane, idx, 1, bs, alpha_c, beta_c, tc0_c);
                              _M0FP215Sam_2dHui_2ddot11moon_2dh26420filter__chroma__line(v_plane, idx, 1, bs, alpha_c, beta_c, tc0_c);
                              _tmp$6 = line + 1 | 0;
                              continue;
                            } else {
                              break;
                            }
                          }
                        }
                        _tmp$5 = seg + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                  }
                  break _L$2;
                }
                _tmp$3 = edge + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            let _tmp$4 = 0;
            while (true) {
              const edge = _tmp$4;
              if (edge < 4) {
                _L$2: {
                  if (edge === 0 && mb_y === 0) {
                    break _L$2;
                  }
                  const p_mb = edge === 0 ? mb_idx - mb_w | 0 : mb_idx;
                  if (edge === 0 && (idc === 2 && (p_mb >>> 0 < mb_slice_id.length ? mb_slice_id[p_mb] : $oob()) !== q_slice)) {
                    break _L$2;
                  }
                  const p_qp = p_mb >>> 0 < mb_qp.length ? mb_qp[p_mb] : $oob();
                  const qp_av = (p_qp + q_qp | 0) + 1 >> 1;
                  const _p = qp_av + alpha_off | 0;
                  const idx_a = _p < 0 ? 0 : _p > 51 ? 51 : _p;
                  const _p$2 = qp_av + beta_off | 0;
                  const idx_b = _p$2 < 0 ? 0 : _p$2 > 51 ? 51 : _p$2;
                  const alpha = idx_a >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh26412alpha__table.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh26412alpha__table[idx_a] : $oob();
                  const beta = idx_b >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh26411beta__table.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh26411beta__table[idx_b] : $oob();
                  const is_mb_edge = edge === 0;
                  const qy_px = (Math.imul(mb_y, 16) | 0) + (Math.imul(edge, 4) | 0) | 0;
                  const bs_arr = $make_array_len_and_init(4, 0);
                  let _tmp$5 = 0;
                  while (true) {
                    const seg = _tmp$5;
                    if (seg < 4) {
                      const bs = _M0FP215Sam_2dHui_2ddot11moon_2dh26411compute__bs(mb_is_intra, mb_w, nnz_luma, mv_x, mv_y, ref_pic_id, bx0 + seg | 0, (by0 + edge | 0) - 1 | 0, bx0 + seg | 0, by0 + edge | 0, is_mb_edge);
                      if (seg >>> 0 < bs_arr.length) {
                        bs_arr[seg] = bs;
                      } else {
                        $oob();
                      }
                      if (bs > 0 && (alpha > 0 || beta > 0)) {
                        let tc0;
                        if (bs < 4) {
                          const _tmp$6 = ((Math.imul(idx_a, 3) | 0) + bs | 0) - 1 | 0;
                          tc0 = _tmp$6 >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh26410tc0__table.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh26410tc0__table[_tmp$6] : $oob();
                        } else {
                          tc0 = 0;
                        }
                        const x_base = (Math.imul(mb_x, 16) | 0) + (Math.imul(seg, 4) | 0) | 0;
                        let _tmp$6 = 0;
                        while (true) {
                          const line = _tmp$6;
                          if (line < 4) {
                            _M0FP215Sam_2dHui_2ddot11moon_2dh26418filter__luma__line(y_plane, ((Math.imul(qy_px, pic_w) | 0) + x_base | 0) + line | 0, pic_w, bs, alpha, beta, tc0);
                            _tmp$6 = line + 1 | 0;
                            continue;
                          } else {
                            break;
                          }
                        }
                      }
                      _tmp$5 = seg + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  if (edge === 0 || edge === 2) {
                    const p_qpc = _M0FP215Sam_2dHui_2ddot11moon_2dh26422chroma__qp__from__luma(p_qp, chroma_qp_offset);
                    const q_qpc = _M0FP215Sam_2dHui_2ddot11moon_2dh26422chroma__qp__from__luma(q_qp, chroma_qp_offset);
                    const qpc_av = (p_qpc + q_qpc | 0) + 1 >> 1;
                    const _p$3 = qpc_av + alpha_off | 0;
                    const idx_ac = _p$3 < 0 ? 0 : _p$3 > 51 ? 51 : _p$3;
                    const _p$4 = qpc_av + beta_off | 0;
                    const idx_bc = _p$4 < 0 ? 0 : _p$4 > 51 ? 51 : _p$4;
                    const alpha_c = idx_ac >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh26412alpha__table.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh26412alpha__table[idx_ac] : $oob();
                    const beta_c = idx_bc >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh26411beta__table.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh26411beta__table[idx_bc] : $oob();
                    const cqy_px = (Math.imul(mb_y, 8) | 0) + (Math.imul(edge >> 1, 4) | 0) | 0;
                    let _tmp$6 = 0;
                    while (true) {
                      const seg = _tmp$6;
                      if (seg < 4) {
                        const bs = seg >>> 0 < bs_arr.length ? bs_arr[seg] : $oob();
                        if (bs > 0 && (alpha_c > 0 || beta_c > 0)) {
                          let tc0_c;
                          if (bs < 4) {
                            const _tmp$7 = ((Math.imul(idx_ac, 3) | 0) + bs | 0) - 1 | 0;
                            tc0_c = _tmp$7 >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh26410tc0__table.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh26410tc0__table[_tmp$7] : $oob();
                          } else {
                            tc0_c = 0;
                          }
                          const cx_base = (Math.imul(mb_x, 8) | 0) + (Math.imul(seg, 2) | 0) | 0;
                          let _tmp$7 = 0;
                          while (true) {
                            const line = _tmp$7;
                            if (line < 2) {
                              const idx = ((Math.imul(cqy_px, cw) | 0) + cx_base | 0) + line | 0;
                              _M0FP215Sam_2dHui_2ddot11moon_2dh26420filter__chroma__line(u_plane, idx, cw, bs, alpha_c, beta_c, tc0_c);
                              _M0FP215Sam_2dHui_2ddot11moon_2dh26420filter__chroma__line(v_plane, idx, cw, bs, alpha_c, beta_c, tc0_c);
                              _tmp$7 = line + 1 | 0;
                              continue;
                            } else {
                              break;
                            }
                          }
                        }
                        _tmp$6 = seg + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                  }
                  break _L$2;
                }
                _tmp$4 = edge + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            break _L;
          }
          _tmp$2 = mb_x + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = mb_y + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MP215Sam_2dHui_2ddot11moon_2dh26411H264Decoder16finalize__active(self) {
  const _bind = self.active;
  if (_bind === undefined) {
    return undefined;
  } else {
    const _Some = _bind;
    const _pic = _Some;
    self.active = undefined;
    _M0FP215Sam_2dHui_2ddot11moon_2dh26414deblock__frame(_pic.y, _pic.u, _pic.v, _pic.mb_w, _pic.mb_h, _pic.mb_is_intra, _pic.mb_qp, _pic.mb_slice_id, _pic.mb_disable_deblock, _pic.mb_alpha_off, _pic.mb_beta_off, _pic.pps.chroma_qp_index_offset, _pic.nnz_luma, _pic.mv_x, _pic.mv_y, _pic.ref_pic_id);
    const sps = _pic.sps;
    const out_w = _M0MP215Sam_2dHui_2ddot11moon_2dh2643Sps5width(sps);
    const out_h = _M0MP215Sam_2dHui_2ddot11moon_2dh2643Sps6height(sps);
    const cl = sps.frame_cropping_flag ? Math.imul(sps.crop_left, 2) | 0 : 0;
    const ct = sps.frame_cropping_flag ? Math.imul(sps.crop_top, 2) | 0 : 0;
    const y_bytes = _M0FP215Sam_2dHui_2ddot11moon_2dh26411crop__plane(_pic.y, Math.imul(_pic.mb_w, 16) | 0, cl, ct, out_w, out_h);
    const cw_out = out_w + 1 >> 1;
    const ch_out = out_h + 1 >> 1;
    const u_bytes = _M0FP215Sam_2dHui_2ddot11moon_2dh26411crop__plane(_pic.u, Math.imul(_pic.mb_w, 8) | 0, cl >> 1, ct >> 1, cw_out, ch_out);
    const v_bytes = _M0FP215Sam_2dHui_2ddot11moon_2dh26411crop__plane(_pic.v, Math.imul(_pic.mb_w, 8) | 0, cl >> 1, ct >> 1, cw_out, ch_out);
    const frame_idx = self.frame_count;
    self.frame_count = self.frame_count + 1 | 0;
    _M0MP215Sam_2dHui_2ddot11moon_2dh26411H264Decoder11update__dpb(self, _pic);
    const meta = new _M0TP215Sam_2dHui_2ddot11moon_2dh2649FrameMeta(frame_idx, _pic.frame_num, _pic.is_idr, _pic.slice_type === 2 || _pic.slice_type === 4 ? "I" : "P", out_w, out_h, _pic.mb_w, _pic.mb_h, _pic.slice_qp, _pic.nal_bytes, _pic.mbs);
    return new _M0TP215Sam_2dHui_2ddot11moon_2dh26412DecodedFrame(out_w, out_h, y_bytes, u_bytes, v_bytes, sps.matrix_coefficients, meta);
  }
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26417compute__nc__luma(pic, cur_slice_id, bx, by) {
  const stride4 = Math.imul(pic.mb_w, 4) | 0;
  let avail_l;
  if (bx > 0) {
    const _tmp = pic.mb_slice_id;
    const _tmp$2 = (Math.imul(by >> 2, pic.mb_w) | 0) + (bx - 1 >> 2) | 0;
    avail_l = (_tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob()) === cur_slice_id;
  } else {
    avail_l = false;
  }
  let avail_t;
  if (by > 0) {
    const _tmp = pic.mb_slice_id;
    const _tmp$2 = (Math.imul(by - 1 >> 2, pic.mb_w) | 0) + (bx >> 2) | 0;
    avail_t = (_tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob()) === cur_slice_id;
  } else {
    avail_t = false;
  }
  if (avail_l && avail_t) {
    const _tmp = pic.nnz_luma;
    const _tmp$2 = ((Math.imul(by, stride4) | 0) + bx | 0) - 1 | 0;
    const _tmp$3 = _tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob();
    const _tmp$4 = pic.nnz_luma;
    const _tmp$5 = (Math.imul(by - 1 | 0, stride4) | 0) + bx | 0;
    return (_tmp$3 + (_tmp$5 >>> 0 < _tmp$4.length ? _tmp$4[_tmp$5] : $oob()) | 0) + 1 >> 1;
  } else {
    if (avail_l) {
      const _tmp = pic.nnz_luma;
      const _tmp$2 = ((Math.imul(by, stride4) | 0) + bx | 0) - 1 | 0;
      return _tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob();
    } else {
      if (avail_t) {
        const _tmp = pic.nnz_luma;
        const _tmp$2 = (Math.imul(by - 1 | 0, stride4) | 0) + bx | 0;
        return _tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob();
      } else {
        return 0;
      }
    }
  }
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26419compute__nc__chroma(pic, nnz, cur_slice_id, cx, cy) {
  const stride2 = Math.imul(pic.mb_w, 2) | 0;
  let avail_l;
  if (cx > 0) {
    const _tmp = pic.mb_slice_id;
    const _tmp$2 = (Math.imul(cy >> 1, pic.mb_w) | 0) + (cx - 1 >> 1) | 0;
    avail_l = (_tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob()) === cur_slice_id;
  } else {
    avail_l = false;
  }
  let avail_t;
  if (cy > 0) {
    const _tmp = pic.mb_slice_id;
    const _tmp$2 = (Math.imul(cy - 1 >> 1, pic.mb_w) | 0) + (cx >> 1) | 0;
    avail_t = (_tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob()) === cur_slice_id;
  } else {
    avail_t = false;
  }
  if (avail_l && avail_t) {
    const _tmp = ((Math.imul(cy, stride2) | 0) + cx | 0) - 1 | 0;
    const _tmp$2 = _tmp >>> 0 < nnz.length ? nnz[_tmp] : $oob();
    const _tmp$3 = (Math.imul(cy - 1 | 0, stride2) | 0) + cx | 0;
    return (_tmp$2 + (_tmp$3 >>> 0 < nnz.length ? nnz[_tmp$3] : $oob()) | 0) + 1 >> 1;
  } else {
    if (avail_l) {
      const _tmp = ((Math.imul(cy, stride2) | 0) + cx | 0) - 1 | 0;
      return _tmp >>> 0 < nnz.length ? nnz[_tmp] : $oob();
    } else {
      if (avail_t) {
        const _tmp = (Math.imul(cy - 1 | 0, stride2) | 0) + cx | 0;
        return _tmp >>> 0 < nnz.length ? nnz[_tmp] : $oob();
      } else {
        return 0;
      }
    }
  }
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26413set__mv__rect(pic, bx, by, bw4, bh4, mvx, mvy, ref_i, ref_pid) {
  const stride4 = Math.imul(pic.mb_w, 4) | 0;
  let _tmp = 0;
  while (true) {
    const dy = _tmp;
    if (dy < bh4) {
      const row = (Math.imul(by + dy | 0, stride4) | 0) + bx | 0;
      let _tmp$2 = 0;
      while (true) {
        const dx = _tmp$2;
        if (dx < bw4) {
          const _tmp$3 = pic.mv_x;
          const _tmp$4 = row + dx | 0;
          if (_tmp$4 >>> 0 < _tmp$3.length) {
            _tmp$3[_tmp$4] = mvx;
          } else {
            $oob();
          }
          const _tmp$5 = pic.mv_y;
          const _tmp$6 = row + dx | 0;
          if (_tmp$6 >>> 0 < _tmp$5.length) {
            _tmp$5[_tmp$6] = mvy;
          } else {
            $oob();
          }
          const _tmp$7 = pic.ref_idx;
          const _tmp$8 = row + dx | 0;
          if (_tmp$8 >>> 0 < _tmp$7.length) {
            _tmp$7[_tmp$8] = ref_i;
          } else {
            $oob();
          }
          const _tmp$9 = pic.ref_pic_id;
          const _tmp$10 = row + dx | 0;
          if (_tmp$10 >>> 0 < _tmp$9.length) {
            _tmp$9[_tmp$10] = ref_pid;
          } else {
            $oob();
          }
          _tmp$2 = dx + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = dy + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh2642ct(code, len, tc, t1) {
  return new _M0TP215Sam_2dHui_2ddot11moon_2dh2648VlcEntry(code, len, tc << 2 | t1);
}
function _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader10peek__bits(self, n) {
  const saved = self.bit_pos;
  const avail = self.total_bits - self.bit_pos | 0;
  const to_read = n <= avail ? n : avail > 0 ? avail : 0;
  let val = 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < to_read) {
      const pos = saved + i | 0;
      const _tmp$2 = self.data;
      const _tmp$3 = pos >> 3;
      const b = (_tmp$3 >>> 0 < _tmp$2.length ? _tmp$2[_tmp$3] : $oob()) >> (7 - (pos & 7) | 0) & 1;
      val = val << 1 | b;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (to_read < n) {
    val = val << (n - to_read | 0);
  }
  return val;
}
function _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader10skip__bits(self, n) {
  if ((self.bit_pos + n | 0) > self.total_bits) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(19);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "skip_bits(");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, n);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ") at bit ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, self.bit_pos);
    return new _M0DTPC16result6ResultGuRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(new _M0DTPC15error5Error57Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eUnexpectedEof(_string_builder.val));
  }
  self.bit_pos = self.bit_pos + n | 0;
  return new _M0DTPC16result6ResultGuRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(undefined);
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26411vlc__decode(br, table) {
  let max_len = 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < table.length) {
      if ((i >>> 0 < table.length ? table[i] : $oob()).len > max_len) {
        max_len = (i >>> 0 < table.length ? table[i] : $oob()).len;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const peek = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader10peek__bits(br, max_len);
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < table.length) {
      const e = i >>> 0 < table.length ? table[i] : $oob();
      const shifted = peek >> (max_len - e.len | 0);
      if (shifted === e.code) {
        const _bind = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader10skip__bits(br, e.len);
        if (_bind.$tag === 1) {
          const _ok = _bind;
          _ok._0;
        } else {
          return _bind;
        }
        return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(e.val);
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(39);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "CAVLC VLC decode failed at bit ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, br.bit_pos);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " (peek=");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, peek);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ")");
  return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(new _M0DTPC15error5Error57Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eInvalidSyntax(_string_builder.val));
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26420decode__coeff__token(br, nc) {
  if (nc === -1) {
    const _bind = _M0FP215Sam_2dHui_2ddot11moon_2dh26411vlc__decode(br, _M0FP215Sam_2dHui_2ddot11moon_2dh26430coeff__token__chroma__dc__spec);
    let v;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      v = _ok._0;
    } else {
      return _bind;
    }
    return new _M0DTPC16result6ResultGUiiERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok({ _0: v >> 2, _1: v & 3 });
  }
  if (nc >= 8) {
    const _bind = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader10read__bits(br, 6);
    let code;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      code = _ok._0;
    } else {
      return _bind;
    }
    if (code === 3) {
      return new _M0DTPC16result6ResultGUiiERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(_M0FP215Sam_2dHui_2ddot11moon_2dh26420decode__coeff__tokenN5tupleS2219);
    }
    const tc = (code >> 2) + 1 | 0;
    const t1 = code & 3;
    return new _M0DTPC16result6ResultGUiiERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok({ _0: tc, _1: t1 });
  }
  const table = nc < 2 ? _M0FP215Sam_2dHui_2ddot11moon_2dh26418coeff__token__0__1 : nc < 4 ? _M0FP215Sam_2dHui_2ddot11moon_2dh26418coeff__token__2__3 : _M0FP215Sam_2dHui_2ddot11moon_2dh26425coeff__token__4__7__exact;
  const _bind = _M0FP215Sam_2dHui_2ddot11moon_2dh26411vlc__decode(br, table);
  let v;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    v = _ok._0;
  } else {
    return _bind;
  }
  return new _M0DTPC16result6ResultGUiiERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok({ _0: v >> 2, _1: v & 3 });
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh2642ve(code, len, val) {
  return new _M0TP215Sam_2dHui_2ddot11moon_2dh2648VlcEntry(code, len, val);
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26419decode__run__before(br, zeros_left) {
  if (zeros_left <= 6) {
    const _tmp = zeros_left - 1 | 0;
    const _bind = _M0FP215Sam_2dHui_2ddot11moon_2dh26411vlc__decode(br, _tmp >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh26419run__before__tables.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh26419run__before__tables[_tmp] : $oob());
    let _tmp$2;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp$2 = _ok._0;
    } else {
      return _bind;
    }
    return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(_tmp$2);
  }
  const p = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader10peek__bits(br, 3);
  if (p !== 0) {
    const _bind = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader10skip__bits(br, 3);
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
    return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(7 - p | 0);
  }
  const _bind = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader10skip__bits(br, 3);
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  let run = 7;
  while (true) {
    const _bind$2 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    if (_tmp === 0) {
      run = run + 1 | 0;
      if (run > 15) {
        return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(new _M0DTPC15error5Error57Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eInvalidSyntax("run_before overflow"));
      }
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(run);
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26420decode__cavlc__block(br, out, start_idx, max_num_coeff, nc) {
  const _bind = _M0FP215Sam_2dHui_2ddot11moon_2dh26420decode__coeff__token(br, nc);
  let _bind$2;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _bind$2 = _ok._0;
  } else {
    return _bind;
  }
  const _total_coeff = _bind$2._0;
  const _trailing_ones = _bind$2._1;
  if (_total_coeff === 0) {
    return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(0);
  }
  if (_total_coeff > max_num_coeff) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(31);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "CAVLC total_coeff=");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, _total_coeff);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " exceeds max=");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, max_num_coeff);
    return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(new _M0DTPC15error5Error57Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eInvalidSyntax(_string_builder.val));
  }
  const levels = $make_array_len_and_init(16, 0);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _trailing_ones) {
      const _bind$3 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
      let sign;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        sign = _ok._0;
      } else {
        return _bind$3;
      }
      if (i >>> 0 < levels.length) {
        levels[i] = sign === 0 ? 1 : -1;
      } else {
        $oob();
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let suffix_length = _total_coeff > 10 && _trailing_ones < 3 ? 1 : 0;
  let _tmp$2 = _trailing_ones;
  while (true) {
    const i = _tmp$2;
    if (i < _total_coeff) {
      let level_prefix = 0;
      while (true) {
        const _bind$3 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
        let _tmp$3;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp$3 = _ok._0;
        } else {
          return _bind$3;
        }
        if (_tmp$3 === 0) {
          level_prefix = level_prefix + 1 | 0;
          if (level_prefix > 31) {
            return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(new _M0DTPC15error5Error57Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eInvalidSyntax("CAVLC level_prefix overflow"));
          }
          continue;
        } else {
          break;
        }
      }
      const level_suffix_size = level_prefix === 14 && suffix_length === 0 ? 4 : level_prefix >= 15 ? level_prefix - 3 | 0 : suffix_length;
      let level_suffix;
      if (level_suffix_size > 0) {
        const _bind$3 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader10read__bits(br, level_suffix_size);
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          level_suffix = _ok._0;
        } else {
          return _bind$3;
        }
      } else {
        level_suffix = 0;
      }
      const prefix_clamped = level_prefix < 15 ? level_prefix : 15;
      let level_code = (prefix_clamped << suffix_length) + level_suffix | 0;
      if (level_prefix >= 15 && suffix_length === 0) {
        level_code = level_code + 15 | 0;
      }
      if (level_prefix >= 16) {
        level_code = level_code + ((1 << (level_prefix - 3 | 0)) - 4096 | 0) | 0;
      }
      if (i === _trailing_ones && _trailing_ones < 3) {
        level_code = level_code + 2 | 0;
      }
      const level = (level_code & 1) === 0 ? level_code + 2 >> 1 : (-level_code | 0) - 1 >> 1;
      if (i >>> 0 < levels.length) {
        levels[i] = level;
      } else {
        $oob();
      }
      if (suffix_length === 0) {
        suffix_length = 1;
      }
      if ((level < 0 ? -level | 0 : level) > 3 << (suffix_length - 1 | 0) && suffix_length < 6) {
        suffix_length = suffix_length + 1 | 0;
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let zeros_left = 0;
  if (_total_coeff < max_num_coeff) {
    if (max_num_coeff === 4) {
      const _tmp$3 = _total_coeff - 1 | 0;
      const _bind$3 = _M0FP215Sam_2dHui_2ddot11moon_2dh26411vlc__decode(br, _tmp$3 >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh26424total__zeros__chroma__dc.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh26424total__zeros__chroma__dc[_tmp$3] : $oob());
      let _tmp$4;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$4 = _ok._0;
      } else {
        return _bind$3;
      }
      zeros_left = _tmp$4;
    } else {
      const _tmp$3 = _total_coeff - 1 | 0;
      const _bind$3 = _M0FP215Sam_2dHui_2ddot11moon_2dh26411vlc__decode(br, _tmp$3 >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh26417total__zeros__4x4.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh26417total__zeros__4x4[_tmp$3] : $oob());
      let _tmp$4;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$4 = _ok._0;
      } else {
        return _bind$3;
      }
      zeros_left = _tmp$4;
    }
  }
  const runs = $make_array_len_and_init(16, 0);
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < (_total_coeff - 1 | 0)) {
      if (zeros_left > 0) {
        const _bind$3 = _M0FP215Sam_2dHui_2ddot11moon_2dh26419decode__run__before(br, zeros_left);
        let run;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          run = _ok._0;
        } else {
          return _bind$3;
        }
        if (i >>> 0 < runs.length) {
          runs[i] = run;
        } else {
          $oob();
        }
        zeros_left = zeros_left - run | 0;
        if (zeros_left < 0) {
          return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(new _M0DTPC15error5Error57Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eInvalidSyntax("CAVLC zeros_left became negative"));
        }
      } else {
        if (i >>> 0 < runs.length) {
          runs[i] = 0;
        } else {
          $oob();
        }
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$4 = _total_coeff - 1 | 0;
  if (_tmp$4 >>> 0 < runs.length) {
    runs[_tmp$4] = zeros_left;
  } else {
    $oob();
  }
  let coeff_num = -1;
  let i = _total_coeff - 1 | 0;
  while (true) {
    if (i >= 0) {
      const _tmp$5 = coeff_num;
      const _tmp$6 = i;
      coeff_num = _tmp$5 + ((_tmp$6 >>> 0 < runs.length ? runs[_tmp$6] : $oob()) + 1 | 0) | 0;
      const scan_idx = start_idx + coeff_num | 0;
      if (max_num_coeff === 4) {
        if (scan_idx < 0 || scan_idx >= 4) {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(39);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "CAVLC chroma DC scan_idx out of range: ");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, scan_idx);
          return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(new _M0DTPC15error5Error57Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eInvalidSyntax(_string_builder.val));
        }
        const _tmp$7 = i;
        if (scan_idx >>> 0 < out.length) {
          out[scan_idx] = _tmp$7 >>> 0 < levels.length ? levels[_tmp$7] : $oob();
        } else {
          $oob();
        }
      } else {
        if (scan_idx < 0 || scan_idx >= 16) {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(33);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "CAVLC 4x4 scan_idx out of range: ");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, scan_idx);
          return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(new _M0DTPC15error5Error57Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eInvalidSyntax(_string_builder.val));
        }
        const _tmp$7 = scan_idx >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh26411zigzag__4x4.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh26411zigzag__4x4[scan_idx] : $oob();
        const _tmp$8 = i;
        if (_tmp$7 >>> 0 < out.length) {
          out[_tmp$7] = _tmp$8 >>> 0 < levels.length ? levels[_tmp$8] : $oob();
        } else {
          $oob();
        }
      }
      i = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(_total_coeff);
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26424decode__chroma__residual(br, pic, cur_slice_id, mb_x, mb_y, cbp_chroma, qp_y) {
  if (cbp_chroma === 0) {
    return new _M0DTPC16result6ResultGuRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(undefined);
  }
  const qp_c = _M0FP215Sam_2dHui_2ddot11moon_2dh26422chroma__qp__from__luma(qp_y, pic.pps.chroma_qp_index_offset);
  const cw = Math.imul(pic.mb_w, 8) | 0;
  const stride2 = Math.imul(pic.mb_w, 2) | 0;
  const cx0 = Math.imul(mb_x, 2) | 0;
  const cy0 = Math.imul(mb_y, 2) | 0;
  const cb_dc_raw = $make_array_len_and_init(4, 0);
  const cr_dc_raw = $make_array_len_and_init(4, 0);
  const _bind = _M0FP215Sam_2dHui_2ddot11moon_2dh26420decode__cavlc__block(br, cb_dc_raw, 0, 4, -1);
  let cb_dc_nnz;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    cb_dc_nnz = _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = _M0FP215Sam_2dHui_2ddot11moon_2dh26420decode__cavlc__block(br, cr_dc_raw, 0, 4, -1);
  let cr_dc_nnz;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    cr_dc_nnz = _ok._0;
  } else {
    return _bind$2;
  }
  const cb_dc = cb_dc_nnz > 0 ? _M0FP215Sam_2dHui_2ddot11moon_2dh26429inverse__hadamard__chroma__dc(cb_dc_raw, qp_c) : $make_array_len_and_init(4, 0);
  const cr_dc = cr_dc_nnz > 0 ? _M0FP215Sam_2dHui_2ddot11moon_2dh26429inverse__hadamard__chroma__dc(cr_dc_raw, qp_c) : $make_array_len_and_init(4, 0);
  if (cbp_chroma === 2) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < 4) {
        const cx = cx0 + (i >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh2647cblk__x.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh2647cblk__x[i] : $oob()) | 0;
        const cy = cy0 + (i >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh2647cblk__y.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh2647cblk__y[i] : $oob()) | 0;
        const nc = _M0FP215Sam_2dHui_2ddot11moon_2dh26419compute__nc__chroma(pic, pic.nnz_cb, cur_slice_id, cx, cy);
        const blk = $make_array_len_and_init(16, 0);
        const _bind$3 = _M0FP215Sam_2dHui_2ddot11moon_2dh26420decode__cavlc__block(br, blk, 1, 15, nc);
        let ac_nnz;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          ac_nnz = _ok._0;
        } else {
          return _bind$3;
        }
        const _tmp$2 = pic.nnz_cb;
        const _tmp$3 = (Math.imul(cy, stride2) | 0) + cx | 0;
        if (_tmp$3 >>> 0 < _tmp$2.length) {
          _tmp$2[_tmp$3] = ac_nnz;
        } else {
          $oob();
        }
        if (ac_nnz > 0) {
          _M0FP215Sam_2dHui_2ddot11moon_2dh26412dequant__4x4(blk, qp_c, true);
          if (0 >>> 0 < blk.length) {
            blk[0] = i >>> 0 < cb_dc.length ? cb_dc[i] : $oob();
          } else {
            $oob();
          }
          _M0FP215Sam_2dHui_2ddot11moon_2dh26414idct__4x4__add(blk, pic.u, cw, Math.imul(cx, 4) | 0, Math.imul(cy, 4) | 0);
        } else {
          if ((i >>> 0 < cb_dc.length ? cb_dc[i] : $oob()) !== 0) {
            _M0FP215Sam_2dHui_2ddot11moon_2dh26418idct__4x4__dc__add(i >>> 0 < cb_dc.length ? cb_dc[i] : $oob(), pic.u, cw, Math.imul(cx, 4) | 0, Math.imul(cy, 4) | 0);
          }
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < 4) {
        const cx = cx0 + (i >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh2647cblk__x.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh2647cblk__x[i] : $oob()) | 0;
        const cy = cy0 + (i >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh2647cblk__y.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh2647cblk__y[i] : $oob()) | 0;
        const nc = _M0FP215Sam_2dHui_2ddot11moon_2dh26419compute__nc__chroma(pic, pic.nnz_cr, cur_slice_id, cx, cy);
        const blk = $make_array_len_and_init(16, 0);
        const _bind$3 = _M0FP215Sam_2dHui_2ddot11moon_2dh26420decode__cavlc__block(br, blk, 1, 15, nc);
        let ac_nnz;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          ac_nnz = _ok._0;
        } else {
          return _bind$3;
        }
        const _tmp$3 = pic.nnz_cr;
        const _tmp$4 = (Math.imul(cy, stride2) | 0) + cx | 0;
        if (_tmp$4 >>> 0 < _tmp$3.length) {
          _tmp$3[_tmp$4] = ac_nnz;
        } else {
          $oob();
        }
        if (ac_nnz > 0) {
          _M0FP215Sam_2dHui_2ddot11moon_2dh26412dequant__4x4(blk, qp_c, true);
          if (0 >>> 0 < blk.length) {
            blk[0] = i >>> 0 < cr_dc.length ? cr_dc[i] : $oob();
          } else {
            $oob();
          }
          _M0FP215Sam_2dHui_2ddot11moon_2dh26414idct__4x4__add(blk, pic.v, cw, Math.imul(cx, 4) | 0, Math.imul(cy, 4) | 0);
        } else {
          if ((i >>> 0 < cr_dc.length ? cr_dc[i] : $oob()) !== 0) {
            _M0FP215Sam_2dHui_2ddot11moon_2dh26418idct__4x4__dc__add(i >>> 0 < cr_dc.length ? cr_dc[i] : $oob(), pic.v, cw, Math.imul(cx, 4) | 0, Math.imul(cy, 4) | 0);
          }
        }
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  } else {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < 4) {
        const cx = cx0 + (i >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh2647cblk__x.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh2647cblk__x[i] : $oob()) | 0;
        const cy = cy0 + (i >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh2647cblk__y.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh2647cblk__y[i] : $oob()) | 0;
        if ((i >>> 0 < cb_dc.length ? cb_dc[i] : $oob()) !== 0) {
          _M0FP215Sam_2dHui_2ddot11moon_2dh26418idct__4x4__dc__add(i >>> 0 < cb_dc.length ? cb_dc[i] : $oob(), pic.u, cw, Math.imul(cx, 4) | 0, Math.imul(cy, 4) | 0);
        }
        if ((i >>> 0 < cr_dc.length ? cr_dc[i] : $oob()) !== 0) {
          _M0FP215Sam_2dHui_2ddot11moon_2dh26418idct__4x4__dc__add(i >>> 0 < cr_dc.length ? cr_dc[i] : $oob(), pic.v, cw, Math.imul(cx, 4) | 0, Math.imul(cy, 4) | 0);
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  return new _M0DTPC16result6ResultGuRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(undefined);
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26427decode__luma__4x4__residual(br, pic, cur_slice_id, mb_x, mb_y, cbp_luma, qp_y) {
  const pic_w = Math.imul(pic.mb_w, 16) | 0;
  const stride4 = Math.imul(pic.mb_w, 4) | 0;
  const bx0 = Math.imul(mb_x, 4) | 0;
  const by0 = Math.imul(mb_y, 4) | 0;
  let _tmp = 0;
  while (true) {
    const i8 = _tmp;
    if (i8 < 4) {
      _L: {
        if ((cbp_luma >> i8 & 1) === 0) {
          break _L;
        }
        let _tmp$2 = 0;
        while (true) {
          const j4 = _tmp$2;
          if (j4 < 4) {
            const blk_idx = (Math.imul(i8, 4) | 0) + j4 | 0;
            const bx = bx0 + (blk_idx >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh2647blk4__x.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh2647blk4__x[blk_idx] : $oob()) | 0;
            const by = by0 + (blk_idx >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh2647blk4__y.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh2647blk4__y[blk_idx] : $oob()) | 0;
            const nc = _M0FP215Sam_2dHui_2ddot11moon_2dh26417compute__nc__luma(pic, cur_slice_id, bx, by);
            const blk = $make_array_len_and_init(16, 0);
            const _bind = _M0FP215Sam_2dHui_2ddot11moon_2dh26420decode__cavlc__block(br, blk, 0, 16, nc);
            let nnz;
            if (_bind.$tag === 1) {
              const _ok = _bind;
              nnz = _ok._0;
            } else {
              return _bind;
            }
            const _tmp$3 = pic.nnz_luma;
            const _tmp$4 = (Math.imul(by, stride4) | 0) + bx | 0;
            if (_tmp$4 >>> 0 < _tmp$3.length) {
              _tmp$3[_tmp$4] = nnz;
            } else {
              $oob();
            }
            if (nnz > 0) {
              _M0FP215Sam_2dHui_2ddot11moon_2dh26412dequant__4x4(blk, qp_y, false);
              _M0FP215Sam_2dHui_2ddot11moon_2dh26414idct__4x4__add(blk, pic.y, pic_w, Math.imul(bx, 4) | 0, Math.imul(by, 4) | 0);
            }
            _tmp$2 = j4 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break _L;
      }
      _tmp = i8 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(undefined);
}
function _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader15align__to__byte(self) {
  const rem = self.bit_pos & 7;
  if (rem !== 0) {
    self.bit_pos = self.bit_pos + (8 - rem | 0) | 0;
    return;
  } else {
    return;
  }
}
function _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader19read__aligned__byte(self) {
  if ((self.bit_pos + 8 | 0) > self.total_bits) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(25);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "read_aligned_byte at bit ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, self.bit_pos);
    return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(new _M0DTPC15error5Error57Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eUnexpectedEof(_string_builder.val));
  }
  const _tmp = self.data;
  const _tmp$2 = self.bit_pos >> 3;
  const b = _tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob();
  self.bit_pos = self.bit_pos + 8 | 0;
  return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(b);
}
function _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__me(self, is_intra) {
  const _bind = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(self);
  let code_num;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    code_num = _ok._0;
  } else {
    return _bind;
  }
  if (code_num < 0 || code_num >= 48) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(29);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "me(v) code_num out of range: ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, code_num);
    return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(new _M0DTPC15error5Error57Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eInvalidSyntax(_string_builder.val));
  }
  return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(is_intra ? (code_num >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh26417cbp__intra__table.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh26417cbp__intra__table[code_num] : $oob()) : code_num >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh26417cbp__inter__table.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh26417cbp__inter__table[code_num] : $oob());
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26417decode__intra__mbN16mb__avail__intraS2337(_env, n_mb_x, n_mb_y) {
  const cip = _env._2;
  const cur_slice_id = _env._1;
  const pic = _env._0;
  if (n_mb_x < 0 || (n_mb_y < 0 || n_mb_x >= pic.mb_w)) {
    return false;
  }
  const n_idx = (Math.imul(n_mb_y, pic.mb_w) | 0) + n_mb_x | 0;
  const _tmp = pic.mb_slice_id;
  if ((n_idx >>> 0 < _tmp.length ? _tmp[n_idx] : $oob()) !== cur_slice_id) {
    return false;
  }
  let _tmp$2;
  if (cip) {
    const _tmp$3 = pic.mb_is_intra;
    _tmp$2 = !(n_idx >>> 0 < _tmp$3.length ? _tmp$3[n_idx] : $oob());
  } else {
    _tmp$2 = false;
  }
  if (_tmp$2) {
    return false;
  }
  return true;
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26417decode__intra__mb(br, pic, cur_slice_id, mb_x, mb_y, i_mb_type, cur_qp) {
  const mb_idx = (Math.imul(mb_y, pic.mb_w) | 0) + mb_x | 0;
  const pic_w = Math.imul(pic.mb_w, 16) | 0;
  const cw = Math.imul(pic.mb_w, 8) | 0;
  const stride4 = Math.imul(pic.mb_w, 4) | 0;
  const stride2 = Math.imul(pic.mb_w, 2) | 0;
  const bx0 = Math.imul(mb_x, 4) | 0;
  const by0 = Math.imul(mb_y, 4) | 0;
  const _tmp = pic.mb_is_intra;
  if (mb_idx >>> 0 < _tmp.length) {
    _tmp[mb_idx] = true;
  } else {
    $oob();
  }
  const cip = pic.pps.constrained_intra_pred_flag;
  const _env = { _0: pic, _1: cur_slice_id, _2: cip };
  const avail_mb_l = _M0FP215Sam_2dHui_2ddot11moon_2dh26417decode__intra__mbN16mb__avail__intraS2337(_env, mb_x - 1 | 0, mb_y);
  const avail_mb_t = _M0FP215Sam_2dHui_2ddot11moon_2dh26417decode__intra__mbN16mb__avail__intraS2337(_env, mb_x, mb_y - 1 | 0);
  if (i_mb_type === 25) {
    _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader15align__to__byte(br);
    let _tmp$2 = 0;
    while (true) {
      const y = _tmp$2;
      if (y < 16) {
        const row = (Math.imul((Math.imul(mb_y, 16) | 0) + y | 0, pic_w) | 0) + (Math.imul(mb_x, 16) | 0) | 0;
        let _tmp$3 = 0;
        while (true) {
          const x = _tmp$3;
          if (x < 16) {
            const _tmp$4 = pic.y;
            const _tmp$5 = row + x | 0;
            const _bind = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader19read__aligned__byte(br);
            let _tmp$6;
            if (_bind.$tag === 1) {
              const _ok = _bind;
              _tmp$6 = _ok._0;
            } else {
              return _bind;
            }
            if (_tmp$5 >>> 0 < _tmp$4.length) {
              _tmp$4[_tmp$5] = _tmp$6 & 255;
            } else {
              $oob();
            }
            _tmp$3 = x + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp$2 = y + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let _tmp$3 = 0;
    while (true) {
      const y = _tmp$3;
      if (y < 8) {
        const row = (Math.imul((Math.imul(mb_y, 8) | 0) + y | 0, cw) | 0) + (Math.imul(mb_x, 8) | 0) | 0;
        let _tmp$4 = 0;
        while (true) {
          const x = _tmp$4;
          if (x < 8) {
            const _tmp$5 = pic.u;
            const _tmp$6 = row + x | 0;
            const _bind = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader19read__aligned__byte(br);
            let _tmp$7;
            if (_bind.$tag === 1) {
              const _ok = _bind;
              _tmp$7 = _ok._0;
            } else {
              return _bind;
            }
            if (_tmp$6 >>> 0 < _tmp$5.length) {
              _tmp$5[_tmp$6] = _tmp$7 & 255;
            } else {
              $oob();
            }
            _tmp$4 = x + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp$3 = y + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let _tmp$4 = 0;
    while (true) {
      const y = _tmp$4;
      if (y < 8) {
        const row = (Math.imul((Math.imul(mb_y, 8) | 0) + y | 0, cw) | 0) + (Math.imul(mb_x, 8) | 0) | 0;
        let _tmp$5 = 0;
        while (true) {
          const x = _tmp$5;
          if (x < 8) {
            const _tmp$6 = pic.v;
            const _tmp$7 = row + x | 0;
            const _bind = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader19read__aligned__byte(br);
            let _tmp$8;
            if (_bind.$tag === 1) {
              const _ok = _bind;
              _tmp$8 = _ok._0;
            } else {
              return _bind;
            }
            if (_tmp$7 >>> 0 < _tmp$6.length) {
              _tmp$6[_tmp$7] = _tmp$8 & 255;
            } else {
              $oob();
            }
            _tmp$5 = x + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp$4 = y + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let _tmp$5 = 0;
    while (true) {
      const dy = _tmp$5;
      if (dy < 4) {
        let _tmp$6 = 0;
        while (true) {
          const dx = _tmp$6;
          if (dx < 4) {
            const _tmp$7 = pic.nnz_luma;
            const _tmp$8 = ((Math.imul(by0 + dy | 0, stride4) | 0) + bx0 | 0) + dx | 0;
            if (_tmp$8 >>> 0 < _tmp$7.length) {
              _tmp$7[_tmp$8] = 16;
            } else {
              $oob();
            }
            const _tmp$9 = pic.intra4x4_mode;
            const _tmp$10 = ((Math.imul(by0 + dy | 0, stride4) | 0) + bx0 | 0) + dx | 0;
            if (_tmp$10 >>> 0 < _tmp$9.length) {
              _tmp$9[_tmp$10] = 2;
            } else {
              $oob();
            }
            _tmp$6 = dx + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp$5 = dy + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let _tmp$6 = 0;
    while (true) {
      const dy = _tmp$6;
      if (dy < 2) {
        let _tmp$7 = 0;
        while (true) {
          const dx = _tmp$7;
          if (dx < 2) {
            const _tmp$8 = pic.nnz_cb;
            const _tmp$9 = ((Math.imul((Math.imul(mb_y, 2) | 0) + dy | 0, stride2) | 0) + (Math.imul(mb_x, 2) | 0) | 0) + dx | 0;
            if (_tmp$9 >>> 0 < _tmp$8.length) {
              _tmp$8[_tmp$9] = 16;
            } else {
              $oob();
            }
            const _tmp$10 = pic.nnz_cr;
            const _tmp$11 = ((Math.imul((Math.imul(mb_y, 2) | 0) + dy | 0, stride2) | 0) + (Math.imul(mb_x, 2) | 0) | 0) + dx | 0;
            if (_tmp$11 >>> 0 < _tmp$10.length) {
              _tmp$10[_tmp$11] = 16;
            } else {
              $oob();
            }
            _tmp$7 = dx + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp$6 = dy + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _tmp$7 = pic.mb_qp;
    if (mb_idx >>> 0 < _tmp$7.length) {
      _tmp$7[mb_idx] = 0;
    } else {
      $oob();
    }
    return new _M0DTPC16result6ResultGUiRP215Sam_2dHui_2ddot11moon_2dh2646MbKindiERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(_M0FP215Sam_2dHui_2ddot11moon_2dh26417decode__intra__mbN5tupleS2338);
  }
  if (i_mb_type === 0) {
    const _tmp$2 = pic.mb_is_i4x4;
    if (mb_idx >>> 0 < _tmp$2.length) {
      _tmp$2[mb_idx] = true;
    } else {
      $oob();
    }
    const modes = $make_array_len_and_init(16, 2);
    let _tmp$3 = 0;
    while (true) {
      const blk = _tmp$3;
      if (blk < 16) {
        const lx = blk >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh2647blk4__x.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh2647blk4__x[blk] : $oob();
        const ly = blk >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh2647blk4__y.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh2647blk4__y[blk] : $oob();
        const bx = bx0 + lx | 0;
        const by = by0 + ly | 0;
        const a_avail = lx > 0 ? true : avail_mb_l;
        const b_avail = ly > 0 ? true : avail_mb_t;
        let mpm;
        if (!a_avail || !b_avail) {
          mpm = 2;
        } else {
          const a_mb = (Math.imul(by >> 2, pic.mb_w) | 0) + (bx - 1 >> 2) | 0;
          const b_mb = (Math.imul(by - 1 >> 2, pic.mb_w) | 0) + (bx >> 2) | 0;
          let ma;
          const _tmp$4 = pic.mb_is_i4x4;
          if (a_mb >>> 0 < _tmp$4.length ? _tmp$4[a_mb] : $oob()) {
            const _tmp$5 = pic.intra4x4_mode;
            const _tmp$6 = ((Math.imul(by, stride4) | 0) + bx | 0) - 1 | 0;
            ma = _tmp$6 >>> 0 < _tmp$5.length ? _tmp$5[_tmp$6] : $oob();
          } else {
            ma = 2;
          }
          let mb_mode;
          const _tmp$5 = pic.mb_is_i4x4;
          if (b_mb >>> 0 < _tmp$5.length ? _tmp$5[b_mb] : $oob()) {
            const _tmp$6 = pic.intra4x4_mode;
            const _tmp$7 = (Math.imul(by - 1 | 0, stride4) | 0) + bx | 0;
            mb_mode = _tmp$7 >>> 0 < _tmp$6.length ? _tmp$6[_tmp$7] : $oob();
          } else {
            mb_mode = 2;
          }
          mpm = ma < mb_mode ? ma : mb_mode;
        }
        const _bind = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(br);
        let prev_flag;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          prev_flag = _ok._0;
        } else {
          return _bind;
        }
        let mode;
        if (prev_flag !== 0) {
          mode = mpm;
        } else {
          const _bind$2 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader10read__bits(br, 3);
          let rem;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            rem = _ok._0;
          } else {
            return _bind$2;
          }
          mode = rem < mpm ? rem : rem + 1 | 0;
        }
        if (blk >>> 0 < modes.length) {
          modes[blk] = mode;
        } else {
          $oob();
        }
        const _tmp$4 = pic.intra4x4_mode;
        const _tmp$5 = (Math.imul(by, stride4) | 0) + bx | 0;
        if (_tmp$5 >>> 0 < _tmp$4.length) {
          _tmp$4[_tmp$5] = mode;
        } else {
          $oob();
        }
        _tmp$3 = blk + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
    let chroma_mode;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      chroma_mode = _ok._0;
    } else {
      return _bind;
    }
    const _bind$2 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__me(br, true);
    let cbp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      cbp = _ok._0;
    } else {
      return _bind$2;
    }
    const cbp_luma = cbp & 15;
    const cbp_chroma = cbp >> 4;
    let qp = cur_qp;
    if (cbp_luma > 0 || cbp_chroma > 0) {
      const _bind$3 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
      let qp_delta;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        qp_delta = _ok._0;
      } else {
        return _bind$3;
      }
      qp = (((qp + qp_delta | 0) % 52 | 0) + 52 | 0) % 52 | 0;
    }
    const _tmp$4 = pic.mb_qp;
    if (mb_idx >>> 0 < _tmp$4.length) {
      _tmp$4[mb_idx] = qp;
    } else {
      $oob();
    }
    let _tmp$5 = 0;
    while (true) {
      const i8 = _tmp$5;
      if (i8 < 4) {
        const has_res = (cbp_luma >> i8 & 1) !== 0;
        let _tmp$6 = 0;
        while (true) {
          const j4 = _tmp$6;
          if (j4 < 4) {
            const blk = (Math.imul(i8, 4) | 0) + j4 | 0;
            const lx = blk >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh2647blk4__x.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh2647blk4__x[blk] : $oob();
            const ly = blk >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh2647blk4__y.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh2647blk4__y[blk] : $oob();
            const bx = bx0 + lx | 0;
            const by = by0 + ly | 0;
            const avail_l = lx > 0 ? true : avail_mb_l;
            const avail_t = ly > 0 ? true : avail_mb_t;
            const avail_tl = lx > 0 && ly > 0 ? true : lx === 0 && ly === 0 ? _M0FP215Sam_2dHui_2ddot11moon_2dh26417decode__intra__mbN16mb__avail__intraS2337(_env, mb_x - 1 | 0, mb_y - 1 | 0) : lx === 0 ? avail_mb_l : avail_mb_t;
            const avail_tr = !avail_t ? false : lx === 3 && ly !== 0 ? false : (lx & 1) === 1 && (ly & 1) === 1 ? false : lx === 3 && ly === 0 ? _M0FP215Sam_2dHui_2ddot11moon_2dh26417decode__intra__mbN16mb__avail__intraS2337(_env, mb_x + 1 | 0, mb_y - 1 | 0) : true;
            _M0FP215Sam_2dHui_2ddot11moon_2dh26419predict__intra__4x4(pic.y, pic_w, Math.imul(bx, 4) | 0, Math.imul(by, 4) | 0, blk >>> 0 < modes.length ? modes[blk] : $oob(), avail_t, avail_l, avail_tr, avail_tl);
            if (has_res) {
              const nc = _M0FP215Sam_2dHui_2ddot11moon_2dh26417compute__nc__luma(pic, cur_slice_id, bx, by);
              const coeffs = $make_array_len_and_init(16, 0);
              const _bind$3 = _M0FP215Sam_2dHui_2ddot11moon_2dh26420decode__cavlc__block(br, coeffs, 0, 16, nc);
              let nnz;
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                nnz = _ok._0;
              } else {
                return _bind$3;
              }
              const _tmp$7 = pic.nnz_luma;
              const _tmp$8 = (Math.imul(by, stride4) | 0) + bx | 0;
              if (_tmp$8 >>> 0 < _tmp$7.length) {
                _tmp$7[_tmp$8] = nnz;
              } else {
                $oob();
              }
              if (nnz > 0) {
                _M0FP215Sam_2dHui_2ddot11moon_2dh26412dequant__4x4(coeffs, qp, false);
                _M0FP215Sam_2dHui_2ddot11moon_2dh26414idct__4x4__add(coeffs, pic.y, pic_w, Math.imul(bx, 4) | 0, Math.imul(by, 4) | 0);
              }
            }
            _tmp$6 = j4 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp$5 = i8 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0FP215Sam_2dHui_2ddot11moon_2dh26427predict__intra__chroma__8x8(pic.u, cw, Math.imul(mb_x, 8) | 0, Math.imul(mb_y, 8) | 0, chroma_mode, avail_mb_t, avail_mb_l);
    _M0FP215Sam_2dHui_2ddot11moon_2dh26427predict__intra__chroma__8x8(pic.v, cw, Math.imul(mb_x, 8) | 0, Math.imul(mb_y, 8) | 0, chroma_mode, avail_mb_t, avail_mb_l);
    const _bind$3 = _M0FP215Sam_2dHui_2ddot11moon_2dh26424decode__chroma__residual(br, pic, cur_slice_id, mb_x, mb_y, cbp_chroma, qp);
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _ok._0;
    } else {
      return _bind$3;
    }
    return new _M0DTPC16result6ResultGUiRP215Sam_2dHui_2ddot11moon_2dh2646MbKindiERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok({ _0: qp, _1: 0, _2: 0 >>> 0 < modes.length ? modes[0] : $oob() });
  }
  const t = i_mb_type - 1 | 0;
  const pred_mode = t & 3;
  const cbp_chroma = (t >> 2) % 3 | 0;
  const cbp_luma = t >= 12 ? 15 : 0;
  const _bind = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
  let chroma_mode;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    chroma_mode = _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
  let qp_delta;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    qp_delta = _ok._0;
  } else {
    return _bind$2;
  }
  const qp = (((cur_qp + qp_delta | 0) % 52 | 0) + 52 | 0) % 52 | 0;
  const _tmp$2 = pic.mb_qp;
  if (mb_idx >>> 0 < _tmp$2.length) {
    _tmp$2[mb_idx] = qp;
  } else {
    $oob();
  }
  _M0FP215Sam_2dHui_2ddot11moon_2dh26421predict__intra__16x16(pic.y, pic_w, Math.imul(mb_x, 16) | 0, Math.imul(mb_y, 16) | 0, pred_mode, avail_mb_t, avail_mb_l);
  const nc_dc = _M0FP215Sam_2dHui_2ddot11moon_2dh26417compute__nc__luma(pic, cur_slice_id, bx0, by0);
  const dc_raw = $make_array_len_and_init(16, 0);
  const _bind$3 = _M0FP215Sam_2dHui_2ddot11moon_2dh26420decode__cavlc__block(br, dc_raw, 0, 16, nc_dc);
  let dc_nnz;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    dc_nnz = _ok._0;
  } else {
    return _bind$3;
  }
  const dc = dc_nnz > 0 ? _M0FP215Sam_2dHui_2ddot11moon_2dh26427inverse__hadamard__luma__dc(dc_raw, qp) : $make_array_len_and_init(16, 0);
  let _tmp$3 = 0;
  while (true) {
    const blk = _tmp$3;
    if (blk < 16) {
      const lx = blk >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh2647blk4__x.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh2647blk4__x[blk] : $oob();
      const ly = blk >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh2647blk4__y.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh2647blk4__y[blk] : $oob();
      const bx = bx0 + lx | 0;
      const by = by0 + ly | 0;
      const _tmp$4 = (Math.imul(ly, 4) | 0) + lx | 0;
      const dc_val = _tmp$4 >>> 0 < dc.length ? dc[_tmp$4] : $oob();
      if (cbp_luma !== 0) {
        const nc = _M0FP215Sam_2dHui_2ddot11moon_2dh26417compute__nc__luma(pic, cur_slice_id, bx, by);
        const ac = $make_array_len_and_init(16, 0);
        const _bind$4 = _M0FP215Sam_2dHui_2ddot11moon_2dh26420decode__cavlc__block(br, ac, 1, 15, nc);
        let ac_nnz;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          ac_nnz = _ok._0;
        } else {
          return _bind$4;
        }
        const _tmp$5 = pic.nnz_luma;
        const _tmp$6 = (Math.imul(by, stride4) | 0) + bx | 0;
        if (_tmp$6 >>> 0 < _tmp$5.length) {
          _tmp$5[_tmp$6] = ac_nnz;
        } else {
          $oob();
        }
        if (ac_nnz > 0) {
          _M0FP215Sam_2dHui_2ddot11moon_2dh26412dequant__4x4(ac, qp, true);
          if (0 >>> 0 < ac.length) {
            ac[0] = dc_val;
          } else {
            $oob();
          }
          _M0FP215Sam_2dHui_2ddot11moon_2dh26414idct__4x4__add(ac, pic.y, pic_w, Math.imul(bx, 4) | 0, Math.imul(by, 4) | 0);
        } else {
          if (dc_val !== 0) {
            _M0FP215Sam_2dHui_2ddot11moon_2dh26418idct__4x4__dc__add(dc_val, pic.y, pic_w, Math.imul(bx, 4) | 0, Math.imul(by, 4) | 0);
          }
        }
      } else {
        if (dc_val !== 0) {
          _M0FP215Sam_2dHui_2ddot11moon_2dh26418idct__4x4__dc__add(dc_val, pic.y, pic_w, Math.imul(bx, 4) | 0, Math.imul(by, 4) | 0);
        }
      }
      _tmp$3 = blk + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0FP215Sam_2dHui_2ddot11moon_2dh26427predict__intra__chroma__8x8(pic.u, cw, Math.imul(mb_x, 8) | 0, Math.imul(mb_y, 8) | 0, chroma_mode, avail_mb_t, avail_mb_l);
  _M0FP215Sam_2dHui_2ddot11moon_2dh26427predict__intra__chroma__8x8(pic.v, cw, Math.imul(mb_x, 8) | 0, Math.imul(mb_y, 8) | 0, chroma_mode, avail_mb_t, avail_mb_l);
  const _bind$4 = _M0FP215Sam_2dHui_2ddot11moon_2dh26424decode__chroma__residual(br, pic, cur_slice_id, mb_x, mb_y, cbp_chroma, qp);
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  return new _M0DTPC16result6ResultGUiRP215Sam_2dHui_2ddot11moon_2dh2646MbKindiERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok({ _0: qp, _1: 1, _2: pred_mode });
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26413mc__partition(ref_frame, pic, bx, by, bw4, bh4, mvx, mvy) {
  const pic_w = Math.imul(pic.mb_w, 16) | 0;
  const pic_h = Math.imul(pic.mb_h, 16) | 0;
  const cw = Math.imul(pic.mb_w, 8) | 0;
  const ch = Math.imul(pic.mb_h, 8) | 0;
  _M0FP215Sam_2dHui_2ddot11moon_2dh26415mc__luma__block(ref_frame.y, pic.y, pic_w, pic_h, Math.imul(bx, 4) | 0, Math.imul(by, 4) | 0, Math.imul(bw4, 4) | 0, Math.imul(bh4, 4) | 0, mvx, mvy);
  _M0FP215Sam_2dHui_2ddot11moon_2dh26417mc__chroma__block(ref_frame.u, pic.u, cw, ch, Math.imul(bx, 2) | 0, Math.imul(by, 2) | 0, Math.imul(bw4, 2) | 0, Math.imul(bh4, 2) | 0, mvx, mvy);
  _M0FP215Sam_2dHui_2ddot11moon_2dh26417mc__chroma__block(ref_frame.v, pic.v, cw, ch, Math.imul(bx, 2) | 0, Math.imul(by, 2) | 0, Math.imul(bw4, 2) | 0, Math.imul(bh4, 2) | 0, mvx, mvy);
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26415get__ref__frame(ref_list, ref_idx) {
  if (ref_idx < 0 || ref_idx >= ref_list.len) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(31);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "ref_idx_l0=");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, ref_idx);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " out of range (len=");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, ref_list.len);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ")");
    return new _M0DTPC16result6ResultGRP215Sam_2dHui_2ddot11moon_2dh2648RefFrameRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(new _M0DTPC15error5Error57Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eInvalidSyntax(_string_builder.val));
  }
  if (ref_idx < 0 || ref_idx >= ref_list.len) {
    $panic();
  }
  return new _M0DTPC16result6ResultGRP215Sam_2dHui_2ddot11moon_2dh2648RefFrameRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(ref_list.buf[ref_idx]);
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26419decode__p__skip__mb(pic, cur_slice_id, mb_x, mb_y, cur_qp, ref_list) {
  const mb_idx = (Math.imul(mb_y, pic.mb_w) | 0) + mb_x | 0;
  const bx0 = Math.imul(mb_x, 4) | 0;
  const by0 = Math.imul(mb_y, 4) | 0;
  const stride4 = Math.imul(pic.mb_w, 4) | 0;
  const _tmp = pic.mb_slice_id;
  if (mb_idx >>> 0 < _tmp.length) {
    _tmp[mb_idx] = cur_slice_id;
  } else {
    $oob();
  }
  const _tmp$2 = pic.mb_qp;
  if (mb_idx >>> 0 < _tmp$2.length) {
    _tmp$2[mb_idx] = cur_qp;
  } else {
    $oob();
  }
  const _tmp$3 = pic.mb_is_intra;
  if (mb_idx >>> 0 < _tmp$3.length) {
    _tmp$3[mb_idx] = false;
  } else {
    $oob();
  }
  let avail_a;
  if (mb_x > 0) {
    const _tmp$4 = pic.mb_slice_id;
    const _tmp$5 = mb_idx - 1 | 0;
    avail_a = (_tmp$5 >>> 0 < _tmp$4.length ? _tmp$4[_tmp$5] : $oob()) === cur_slice_id;
  } else {
    avail_a = false;
  }
  let avail_b;
  if (mb_y > 0) {
    const _tmp$4 = pic.mb_slice_id;
    const _tmp$5 = mb_idx - pic.mb_w | 0;
    avail_b = (_tmp$5 >>> 0 < _tmp$4.length ? _tmp$4[_tmp$5] : $oob()) === cur_slice_id;
  } else {
    avail_b = false;
  }
  let zero_mv;
  if (!avail_a || !avail_b) {
    zero_mv = true;
  } else {
    const a_idx = ((Math.imul(by0, stride4) | 0) + bx0 | 0) - 1 | 0;
    const b_idx = (Math.imul(by0 - 1 | 0, stride4) | 0) + bx0 | 0;
    let _tmp$4;
    const _tmp$5 = pic.ref_idx;
    if ((a_idx >>> 0 < _tmp$5.length ? _tmp$5[a_idx] : $oob()) === 0) {
      let _tmp$6;
      const _tmp$7 = pic.mv_x;
      if ((a_idx >>> 0 < _tmp$7.length ? _tmp$7[a_idx] : $oob()) === 0) {
        const _tmp$8 = pic.mv_y;
        _tmp$6 = (a_idx >>> 0 < _tmp$8.length ? _tmp$8[a_idx] : $oob()) === 0;
      } else {
        _tmp$6 = false;
      }
      _tmp$4 = _tmp$6;
    } else {
      _tmp$4 = false;
    }
    if (_tmp$4) {
      zero_mv = true;
    } else {
      let _tmp$6;
      const _tmp$7 = pic.ref_idx;
      if ((b_idx >>> 0 < _tmp$7.length ? _tmp$7[b_idx] : $oob()) === 0) {
        let _tmp$8;
        const _tmp$9 = pic.mv_x;
        if ((b_idx >>> 0 < _tmp$9.length ? _tmp$9[b_idx] : $oob()) === 0) {
          const _tmp$10 = pic.mv_y;
          _tmp$8 = (b_idx >>> 0 < _tmp$10.length ? _tmp$10[b_idx] : $oob()) === 0;
        } else {
          _tmp$8 = false;
        }
        _tmp$6 = _tmp$8;
      } else {
        _tmp$6 = false;
      }
      zero_mv = _tmp$6;
    }
  }
  const _bind = zero_mv ? _M0FP215Sam_2dHui_2ddot11moon_2dh26419decode__p__skip__mbN5tupleS2463 : _M0FP215Sam_2dHui_2ddot11moon_2dh26415predict__mv__l0(pic.mv_x, pic.mv_y, pic.ref_idx, pic.mb_slice_id, pic.mb_w, cur_slice_id, bx0, by0, 4, 0, 0);
  const _mvx = _bind._0;
  const _mvy = _bind._1;
  const _bind$2 = _M0FP215Sam_2dHui_2ddot11moon_2dh26415get__ref__frame(ref_list, 0);
  let rf;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    rf = _ok._0;
  } else {
    return _bind$2;
  }
  _M0FP215Sam_2dHui_2ddot11moon_2dh26413set__mv__rect(pic, bx0, by0, 4, 4, _mvx, _mvy, 0, rf.pic_id);
  _M0FP215Sam_2dHui_2ddot11moon_2dh26413mc__partition(rf, pic, bx0, by0, 4, 4, _mvx, _mvy);
  const _bind$3 = pic.mbs;
  const _bind$4 = new _M0TP215Sam_2dHui_2ddot11moon_2dh2646MbMeta(mb_x, mb_y, 3, cur_qp, 0, _mvx, _mvy, -1);
  if (mb_idx < 0 || mb_idx >= _bind$3.len) {
    $panic();
  }
  _bind$3.buf[mb_idx] = _bind$4;
  return new _M0DTPC16result6ResultGuRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(undefined);
}
function _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__te(self, max_val) {
  if (max_val <= 0) {
    return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(0);
  } else {
    if (max_val === 1) {
      const _bind = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader9read__bit(self);
      let _tmp;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        return _bind;
      }
      return new _M0DTPC16result6ResultGiRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(1 - _tmp | 0);
    } else {
      return _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(self);
    }
  }
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26420decode__p__inter__mb(br, pic, hdr, cur_slice_id, mb_x, mb_y, p_mb_type, cur_qp, ref_list) {
  const mb_idx = (Math.imul(mb_y, pic.mb_w) | 0) + mb_x | 0;
  const bx0 = Math.imul(mb_x, 4) | 0;
  const by0 = Math.imul(mb_y, 4) | 0;
  const max_ref_idx = hdr.num_ref_idx_l0_active - 1 | 0;
  const _tmp = pic.mb_is_intra;
  if (mb_idx >>> 0 < _tmp.length) {
    _tmp[mb_idx] = false;
  } else {
    $oob();
  }
  let rep_mvx = 0;
  let rep_mvy = 0;
  let kind;
  switch (p_mb_type) {
    case 0: {
      let ref_i;
      if (max_ref_idx > 0) {
        const _bind = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__te(br, max_ref_idx);
        if (_bind.$tag === 1) {
          const _ok = _bind;
          ref_i = _ok._0;
        } else {
          return _bind;
        }
      } else {
        ref_i = 0;
      }
      const _bind = _M0FP215Sam_2dHui_2ddot11moon_2dh26415predict__mv__l0(pic.mv_x, pic.mv_y, pic.ref_idx, pic.mb_slice_id, pic.mb_w, cur_slice_id, bx0, by0, 4, ref_i, 0);
      const _pmvx = _bind._0;
      const _pmvy = _bind._1;
      const _bind$2 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        return _bind$2;
      }
      const mvx = _pmvx + _tmp$2 | 0;
      const _bind$3 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
      let _tmp$3;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$3 = _ok._0;
      } else {
        return _bind$3;
      }
      const mvy = _pmvy + _tmp$3 | 0;
      const _bind$4 = _M0FP215Sam_2dHui_2ddot11moon_2dh26415get__ref__frame(ref_list, ref_i);
      let rf;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        rf = _ok._0;
      } else {
        return _bind$4;
      }
      _M0FP215Sam_2dHui_2ddot11moon_2dh26413set__mv__rect(pic, bx0, by0, 4, 4, mvx, mvy, ref_i, rf.pic_id);
      _M0FP215Sam_2dHui_2ddot11moon_2dh26413mc__partition(rf, pic, bx0, by0, 4, 4, mvx, mvy);
      rep_mvx = mvx;
      rep_mvy = mvy;
      kind = 4;
      break;
    }
    case 1: {
      let ref0;
      if (max_ref_idx > 0) {
        const _bind$5 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__te(br, max_ref_idx);
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          ref0 = _ok._0;
        } else {
          return _bind$5;
        }
      } else {
        ref0 = 0;
      }
      let ref1;
      if (max_ref_idx > 0) {
        const _bind$5 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__te(br, max_ref_idx);
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          ref1 = _ok._0;
        } else {
          return _bind$5;
        }
      } else {
        ref1 = 0;
      }
      const _bind$5 = _M0FP215Sam_2dHui_2ddot11moon_2dh26415predict__mv__l0(pic.mv_x, pic.mv_y, pic.ref_idx, pic.mb_slice_id, pic.mb_w, cur_slice_id, bx0, by0, 4, ref0, 1);
      const _p0x = _bind$5._0;
      const _p0y = _bind$5._1;
      const _bind$6 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
      let _tmp$4;
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        _tmp$4 = _ok._0;
      } else {
        return _bind$6;
      }
      const mv0x = _p0x + _tmp$4 | 0;
      const _bind$7 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
      let _tmp$5;
      if (_bind$7.$tag === 1) {
        const _ok = _bind$7;
        _tmp$5 = _ok._0;
      } else {
        return _bind$7;
      }
      const mv0y = _p0y + _tmp$5 | 0;
      const _bind$8 = _M0FP215Sam_2dHui_2ddot11moon_2dh26415get__ref__frame(ref_list, ref0);
      let rf0;
      if (_bind$8.$tag === 1) {
        const _ok = _bind$8;
        rf0 = _ok._0;
      } else {
        return _bind$8;
      }
      _M0FP215Sam_2dHui_2ddot11moon_2dh26413set__mv__rect(pic, bx0, by0, 4, 2, mv0x, mv0y, ref0, rf0.pic_id);
      const _bind$9 = _M0FP215Sam_2dHui_2ddot11moon_2dh26415predict__mv__l0(pic.mv_x, pic.mv_y, pic.ref_idx, pic.mb_slice_id, pic.mb_w, cur_slice_id, bx0, by0 + 2 | 0, 4, ref1, 2);
      const _p1x = _bind$9._0;
      const _p1y = _bind$9._1;
      const _bind$10 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
      let _tmp$6;
      if (_bind$10.$tag === 1) {
        const _ok = _bind$10;
        _tmp$6 = _ok._0;
      } else {
        return _bind$10;
      }
      const mv1x = _p1x + _tmp$6 | 0;
      const _bind$11 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
      let _tmp$7;
      if (_bind$11.$tag === 1) {
        const _ok = _bind$11;
        _tmp$7 = _ok._0;
      } else {
        return _bind$11;
      }
      const mv1y = _p1y + _tmp$7 | 0;
      const _bind$12 = _M0FP215Sam_2dHui_2ddot11moon_2dh26415get__ref__frame(ref_list, ref1);
      let rf1;
      if (_bind$12.$tag === 1) {
        const _ok = _bind$12;
        rf1 = _ok._0;
      } else {
        return _bind$12;
      }
      _M0FP215Sam_2dHui_2ddot11moon_2dh26413set__mv__rect(pic, bx0, by0 + 2 | 0, 4, 2, mv1x, mv1y, ref1, rf1.pic_id);
      _M0FP215Sam_2dHui_2ddot11moon_2dh26413mc__partition(rf0, pic, bx0, by0, 4, 2, mv0x, mv0y);
      _M0FP215Sam_2dHui_2ddot11moon_2dh26413mc__partition(rf1, pic, bx0, by0 + 2 | 0, 4, 2, mv1x, mv1y);
      rep_mvx = mv0x + mv1x >> 1;
      rep_mvy = mv0y + mv1y >> 1;
      kind = 5;
      break;
    }
    case 2: {
      let ref0$2;
      if (max_ref_idx > 0) {
        const _bind$13 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__te(br, max_ref_idx);
        if (_bind$13.$tag === 1) {
          const _ok = _bind$13;
          ref0$2 = _ok._0;
        } else {
          return _bind$13;
        }
      } else {
        ref0$2 = 0;
      }
      let ref1$2;
      if (max_ref_idx > 0) {
        const _bind$13 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__te(br, max_ref_idx);
        if (_bind$13.$tag === 1) {
          const _ok = _bind$13;
          ref1$2 = _ok._0;
        } else {
          return _bind$13;
        }
      } else {
        ref1$2 = 0;
      }
      const _bind$13 = _M0FP215Sam_2dHui_2ddot11moon_2dh26415predict__mv__l0(pic.mv_x, pic.mv_y, pic.ref_idx, pic.mb_slice_id, pic.mb_w, cur_slice_id, bx0, by0, 2, ref0$2, 3);
      const _p0x$2 = _bind$13._0;
      const _p0y$2 = _bind$13._1;
      const _bind$14 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
      let _tmp$8;
      if (_bind$14.$tag === 1) {
        const _ok = _bind$14;
        _tmp$8 = _ok._0;
      } else {
        return _bind$14;
      }
      const mv0x$2 = _p0x$2 + _tmp$8 | 0;
      const _bind$15 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
      let _tmp$9;
      if (_bind$15.$tag === 1) {
        const _ok = _bind$15;
        _tmp$9 = _ok._0;
      } else {
        return _bind$15;
      }
      const mv0y$2 = _p0y$2 + _tmp$9 | 0;
      const _bind$16 = _M0FP215Sam_2dHui_2ddot11moon_2dh26415get__ref__frame(ref_list, ref0$2);
      let rf0$2;
      if (_bind$16.$tag === 1) {
        const _ok = _bind$16;
        rf0$2 = _ok._0;
      } else {
        return _bind$16;
      }
      _M0FP215Sam_2dHui_2ddot11moon_2dh26413set__mv__rect(pic, bx0, by0, 2, 4, mv0x$2, mv0y$2, ref0$2, rf0$2.pic_id);
      const _bind$17 = _M0FP215Sam_2dHui_2ddot11moon_2dh26415predict__mv__l0(pic.mv_x, pic.mv_y, pic.ref_idx, pic.mb_slice_id, pic.mb_w, cur_slice_id, bx0 + 2 | 0, by0, 2, ref1$2, 4);
      const _p1x$2 = _bind$17._0;
      const _p1y$2 = _bind$17._1;
      const _bind$18 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
      let _tmp$10;
      if (_bind$18.$tag === 1) {
        const _ok = _bind$18;
        _tmp$10 = _ok._0;
      } else {
        return _bind$18;
      }
      const mv1x$2 = _p1x$2 + _tmp$10 | 0;
      const _bind$19 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
      let _tmp$11;
      if (_bind$19.$tag === 1) {
        const _ok = _bind$19;
        _tmp$11 = _ok._0;
      } else {
        return _bind$19;
      }
      const mv1y$2 = _p1y$2 + _tmp$11 | 0;
      const _bind$20 = _M0FP215Sam_2dHui_2ddot11moon_2dh26415get__ref__frame(ref_list, ref1$2);
      let rf1$2;
      if (_bind$20.$tag === 1) {
        const _ok = _bind$20;
        rf1$2 = _ok._0;
      } else {
        return _bind$20;
      }
      _M0FP215Sam_2dHui_2ddot11moon_2dh26413set__mv__rect(pic, bx0 + 2 | 0, by0, 2, 4, mv1x$2, mv1y$2, ref1$2, rf1$2.pic_id);
      _M0FP215Sam_2dHui_2ddot11moon_2dh26413mc__partition(rf0$2, pic, bx0, by0, 2, 4, mv0x$2, mv0y$2);
      _M0FP215Sam_2dHui_2ddot11moon_2dh26413mc__partition(rf1$2, pic, bx0 + 2 | 0, by0, 2, 4, mv1x$2, mv1y$2);
      rep_mvx = mv0x$2 + mv1x$2 >> 1;
      rep_mvy = mv0y$2 + mv1y$2 >> 1;
      kind = 6;
      break;
    }
    default: {
      const sub_types = $make_array_len_and_init(4, 0);
      let _tmp$12 = 0;
      while (true) {
        const s = _tmp$12;
        if (s < 4) {
          const _bind$21 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
          let _tmp$13;
          if (_bind$21.$tag === 1) {
            const _ok = _bind$21;
            _tmp$13 = _ok._0;
          } else {
            return _bind$21;
          }
          if (s >>> 0 < sub_types.length) {
            sub_types[s] = _tmp$13;
          } else {
            $oob();
          }
          _tmp$12 = s + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const sub_refs = $make_array_len_and_init(4, 0);
      if (p_mb_type === 3 && max_ref_idx > 0) {
        let _tmp$13 = 0;
        while (true) {
          const s = _tmp$13;
          if (s < 4) {
            const _bind$21 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__te(br, max_ref_idx);
            let _tmp$14;
            if (_bind$21.$tag === 1) {
              const _ok = _bind$21;
              _tmp$14 = _ok._0;
            } else {
              return _bind$21;
            }
            if (s >>> 0 < sub_refs.length) {
              sub_refs[s] = _tmp$14;
            } else {
              $oob();
            }
            _tmp$13 = s + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
      let sum_x = 0;
      let sum_y = 0;
      let cnt = 0;
      let _tmp$13 = 0;
      while (true) {
        const s = _tmp$13;
        if (s < 4) {
          const sx = bx0 + (s >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh2647sub8__x.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh2647sub8__x[s] : $oob()) | 0;
          const sy = by0 + (s >>> 0 < _M0FP215Sam_2dHui_2ddot11moon_2dh2647sub8__y.length ? _M0FP215Sam_2dHui_2ddot11moon_2dh2647sub8__y[s] : $oob()) | 0;
          const ref_i$2 = s >>> 0 < sub_refs.length ? sub_refs[s] : $oob();
          const _bind$21 = _M0FP215Sam_2dHui_2ddot11moon_2dh26415get__ref__frame(ref_list, ref_i$2);
          let rf$2;
          if (_bind$21.$tag === 1) {
            const _ok = _bind$21;
            rf$2 = _ok._0;
          } else {
            return _bind$21;
          }
          const _bind$22 = s >>> 0 < sub_types.length ? sub_types[s] : $oob();
          switch (_bind$22) {
            case 0: {
              const _bind$23 = _M0FP215Sam_2dHui_2ddot11moon_2dh26415predict__mv__l0(pic.mv_x, pic.mv_y, pic.ref_idx, pic.mb_slice_id, pic.mb_w, cur_slice_id, sx, sy, 2, ref_i$2, 0);
              const _px = _bind$23._0;
              const _py = _bind$23._1;
              const _bind$24 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
              let _tmp$14;
              if (_bind$24.$tag === 1) {
                const _ok = _bind$24;
                _tmp$14 = _ok._0;
              } else {
                return _bind$24;
              }
              const mx = _px + _tmp$14 | 0;
              const _bind$25 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
              let _tmp$15;
              if (_bind$25.$tag === 1) {
                const _ok = _bind$25;
                _tmp$15 = _ok._0;
              } else {
                return _bind$25;
              }
              const my = _py + _tmp$15 | 0;
              _M0FP215Sam_2dHui_2ddot11moon_2dh26413set__mv__rect(pic, sx, sy, 2, 2, mx, my, ref_i$2, rf$2.pic_id);
              _M0FP215Sam_2dHui_2ddot11moon_2dh26413mc__partition(rf$2, pic, sx, sy, 2, 2, mx, my);
              sum_x = sum_x + mx | 0;
              sum_y = sum_y + my | 0;
              cnt = cnt + 1 | 0;
              break;
            }
            case 1: {
              let _tmp$16 = 0;
              while (true) {
                const p = _tmp$16;
                if (p < 2) {
                  const _bind$26 = _M0FP215Sam_2dHui_2ddot11moon_2dh26415predict__mv__l0(pic.mv_x, pic.mv_y, pic.ref_idx, pic.mb_slice_id, pic.mb_w, cur_slice_id, sx, sy + p | 0, 2, ref_i$2, 0);
                  const _px$2 = _bind$26._0;
                  const _py$2 = _bind$26._1;
                  const _bind$27 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
                  let _tmp$17;
                  if (_bind$27.$tag === 1) {
                    const _ok = _bind$27;
                    _tmp$17 = _ok._0;
                  } else {
                    return _bind$27;
                  }
                  const mx$2 = _px$2 + _tmp$17 | 0;
                  const _bind$28 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
                  let _tmp$18;
                  if (_bind$28.$tag === 1) {
                    const _ok = _bind$28;
                    _tmp$18 = _ok._0;
                  } else {
                    return _bind$28;
                  }
                  const my$2 = _py$2 + _tmp$18 | 0;
                  _M0FP215Sam_2dHui_2ddot11moon_2dh26413set__mv__rect(pic, sx, sy + p | 0, 2, 1, mx$2, my$2, ref_i$2, rf$2.pic_id);
                  _M0FP215Sam_2dHui_2ddot11moon_2dh26413mc__partition(rf$2, pic, sx, sy + p | 0, 2, 1, mx$2, my$2);
                  sum_x = sum_x + mx$2 | 0;
                  sum_y = sum_y + my$2 | 0;
                  cnt = cnt + 1 | 0;
                  _tmp$16 = p + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              break;
            }
            case 2: {
              let _tmp$17 = 0;
              while (true) {
                const p = _tmp$17;
                if (p < 2) {
                  const _bind$26 = _M0FP215Sam_2dHui_2ddot11moon_2dh26415predict__mv__l0(pic.mv_x, pic.mv_y, pic.ref_idx, pic.mb_slice_id, pic.mb_w, cur_slice_id, sx + p | 0, sy, 1, ref_i$2, 0);
                  const _px$2 = _bind$26._0;
                  const _py$2 = _bind$26._1;
                  const _bind$27 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
                  let _tmp$18;
                  if (_bind$27.$tag === 1) {
                    const _ok = _bind$27;
                    _tmp$18 = _ok._0;
                  } else {
                    return _bind$27;
                  }
                  const mx$2 = _px$2 + _tmp$18 | 0;
                  const _bind$28 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
                  let _tmp$19;
                  if (_bind$28.$tag === 1) {
                    const _ok = _bind$28;
                    _tmp$19 = _ok._0;
                  } else {
                    return _bind$28;
                  }
                  const my$2 = _py$2 + _tmp$19 | 0;
                  _M0FP215Sam_2dHui_2ddot11moon_2dh26413set__mv__rect(pic, sx + p | 0, sy, 1, 2, mx$2, my$2, ref_i$2, rf$2.pic_id);
                  _M0FP215Sam_2dHui_2ddot11moon_2dh26413mc__partition(rf$2, pic, sx + p | 0, sy, 1, 2, mx$2, my$2);
                  sum_x = sum_x + mx$2 | 0;
                  sum_y = sum_y + my$2 | 0;
                  cnt = cnt + 1 | 0;
                  _tmp$17 = p + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              break;
            }
            default: {
              let _tmp$18 = 0;
              while (true) {
                const p = _tmp$18;
                if (p < 4) {
                  const px0 = sx + (p & 1) | 0;
                  const py0 = sy + (p >> 1) | 0;
                  const _bind$26 = _M0FP215Sam_2dHui_2ddot11moon_2dh26415predict__mv__l0(pic.mv_x, pic.mv_y, pic.ref_idx, pic.mb_slice_id, pic.mb_w, cur_slice_id, px0, py0, 1, ref_i$2, 0);
                  const _px$2 = _bind$26._0;
                  const _py$2 = _bind$26._1;
                  const _bind$27 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
                  let _tmp$19;
                  if (_bind$27.$tag === 1) {
                    const _ok = _bind$27;
                    _tmp$19 = _ok._0;
                  } else {
                    return _bind$27;
                  }
                  const mx$2 = _px$2 + _tmp$19 | 0;
                  const _bind$28 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
                  let _tmp$20;
                  if (_bind$28.$tag === 1) {
                    const _ok = _bind$28;
                    _tmp$20 = _ok._0;
                  } else {
                    return _bind$28;
                  }
                  const my$2 = _py$2 + _tmp$20 | 0;
                  _M0FP215Sam_2dHui_2ddot11moon_2dh26413set__mv__rect(pic, px0, py0, 1, 1, mx$2, my$2, ref_i$2, rf$2.pic_id);
                  _M0FP215Sam_2dHui_2ddot11moon_2dh26413mc__partition(rf$2, pic, px0, py0, 1, 1, mx$2, my$2);
                  sum_x = sum_x + mx$2 | 0;
                  sum_y = sum_y + my$2 | 0;
                  cnt = cnt + 1 | 0;
                  _tmp$18 = p + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
            }
          }
          _tmp$13 = s + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (cnt > 0) {
        rep_mvx = sum_x / cnt | 0;
        rep_mvy = sum_y / cnt | 0;
      }
      kind = 7;
    }
  }
  const _bind$21 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__me(br, false);
  let cbp;
  if (_bind$21.$tag === 1) {
    const _ok = _bind$21;
    cbp = _ok._0;
  } else {
    return _bind$21;
  }
  const cbp_luma = cbp & 15;
  const cbp_chroma = cbp >> 4;
  let qp = cur_qp;
  if (cbp_luma > 0 || cbp_chroma > 0) {
    const _bind$22 = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__se(br);
    let qp_delta;
    if (_bind$22.$tag === 1) {
      const _ok = _bind$22;
      qp_delta = _ok._0;
    } else {
      return _bind$22;
    }
    qp = (((qp + qp_delta | 0) % 52 | 0) + 52 | 0) % 52 | 0;
  }
  const _tmp$14 = pic.mb_qp;
  if (mb_idx >>> 0 < _tmp$14.length) {
    _tmp$14[mb_idx] = qp;
  } else {
    $oob();
  }
  if (cbp_luma > 0) {
    const _bind$22 = _M0FP215Sam_2dHui_2ddot11moon_2dh26427decode__luma__4x4__residual(br, pic, cur_slice_id, mb_x, mb_y, cbp_luma, qp);
    if (_bind$22.$tag === 1) {
      const _ok = _bind$22;
      _ok._0;
    } else {
      return _bind$22;
    }
  }
  if (cbp_chroma > 0) {
    const _bind$22 = _M0FP215Sam_2dHui_2ddot11moon_2dh26424decode__chroma__residual(br, pic, cur_slice_id, mb_x, mb_y, cbp_chroma, qp);
    if (_bind$22.$tag === 1) {
      const _ok = _bind$22;
      _ok._0;
    } else {
      return _bind$22;
    }
  }
  return new _M0DTPC16result6ResultGUiRP215Sam_2dHui_2ddot11moon_2dh2646MbKindiiERP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok({ _0: qp, _1: kind, _2: rep_mvx, _3: rep_mvy });
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26419decode__slice__data(br, pic, hdr, cur_slice_id, ref_list) {
  const num_mbs = Math.imul(pic.mb_w, pic.mb_h) | 0;
  let mb_addr = hdr.first_mb_in_slice;
  let cur_qp = hdr.slice_qp_y;
  const is_i = hdr.slice_type === 2 || hdr.slice_type === 4;
  while (true) {
    if (mb_addr < num_mbs) {
      if (!is_i) {
        const _bind = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
        let skip_run;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          skip_run = _ok._0;
        } else {
          return _bind;
        }
        let _tmp = 0;
        while (true) {
          const _s = _tmp;
          if (_s < skip_run) {
            if (mb_addr >= num_mbs) {
              return new _M0DTPC16result6ResultGuRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(undefined);
            }
            const mx = mb_addr % pic.mb_w | 0;
            const my = mb_addr / pic.mb_w | 0;
            const _tmp$2 = pic.mb_disable_deblock;
            const _tmp$3 = mb_addr;
            if (_tmp$3 >>> 0 < _tmp$2.length) {
              _tmp$2[_tmp$3] = hdr.disable_deblocking_filter_idc;
            } else {
              $oob();
            }
            const _tmp$4 = pic.mb_alpha_off;
            const _tmp$5 = mb_addr;
            if (_tmp$5 >>> 0 < _tmp$4.length) {
              _tmp$4[_tmp$5] = hdr.slice_alpha_c0_offset_div2;
            } else {
              $oob();
            }
            const _tmp$6 = pic.mb_beta_off;
            const _tmp$7 = mb_addr;
            if (_tmp$7 >>> 0 < _tmp$6.length) {
              _tmp$6[_tmp$7] = hdr.slice_beta_offset_div2;
            } else {
              $oob();
            }
            const _bind$2 = _M0FP215Sam_2dHui_2ddot11moon_2dh26419decode__p__skip__mb(pic, cur_slice_id, mx, my, cur_qp, ref_list);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
            mb_addr = mb_addr + 1 | 0;
            _tmp = _s + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (mb_addr >= num_mbs || !(br.bit_pos < br.stop_bit_pos)) {
          return new _M0DTPC16result6ResultGuRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(undefined);
        }
      }
      const bit_start = br.bit_pos;
      const mx = mb_addr % pic.mb_w | 0;
      const my = mb_addr / pic.mb_w | 0;
      const _tmp = pic.mb_slice_id;
      const _tmp$2 = mb_addr;
      if (_tmp$2 >>> 0 < _tmp.length) {
        _tmp[_tmp$2] = cur_slice_id;
      } else {
        $oob();
      }
      const _tmp$3 = pic.mb_disable_deblock;
      const _tmp$4 = mb_addr;
      if (_tmp$4 >>> 0 < _tmp$3.length) {
        _tmp$3[_tmp$4] = hdr.disable_deblocking_filter_idc;
      } else {
        $oob();
      }
      const _tmp$5 = pic.mb_alpha_off;
      const _tmp$6 = mb_addr;
      if (_tmp$6 >>> 0 < _tmp$5.length) {
        _tmp$5[_tmp$6] = hdr.slice_alpha_c0_offset_div2;
      } else {
        $oob();
      }
      const _tmp$7 = pic.mb_beta_off;
      const _tmp$8 = mb_addr;
      if (_tmp$8 >>> 0 < _tmp$7.length) {
        _tmp$7[_tmp$8] = hdr.slice_beta_offset_div2;
      } else {
        $oob();
      }
      const _bind = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader8read__ue(br);
      let mb_type;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        mb_type = _ok._0;
      } else {
        return _bind;
      }
      if (is_i) {
        const _bind$2 = _M0FP215Sam_2dHui_2ddot11moon_2dh26417decode__intra__mb(br, pic, cur_slice_id, mx, my, mb_type, cur_qp);
        let _bind$3;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _bind$3 = _ok._0;
        } else {
          return _bind$2;
        }
        const _new_qp = _bind$3._0;
        const _kind = _bind$3._1;
        const _imode = _bind$3._2;
        cur_qp = _new_qp;
        const _bind$4 = pic.mbs;
        const _bind$5 = mb_addr;
        const _bind$6 = new _M0TP215Sam_2dHui_2ddot11moon_2dh2646MbMeta(mx, my, _kind, cur_qp, br.bit_pos - bit_start | 0, 0, 0, _imode);
        if (_bind$5 < 0 || _bind$5 >= _bind$4.len) {
          $panic();
        }
        _bind$4.buf[_bind$5] = _bind$6;
      } else {
        if (mb_type >= 5) {
          const _bind$2 = _M0FP215Sam_2dHui_2ddot11moon_2dh26417decode__intra__mb(br, pic, cur_slice_id, mx, my, mb_type - 5 | 0, cur_qp);
          let _bind$3;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _bind$3 = _ok._0;
          } else {
            return _bind$2;
          }
          const _new_qp = _bind$3._0;
          const _kind = _bind$3._1;
          const _imode = _bind$3._2;
          cur_qp = _new_qp;
          const _bind$4 = pic.mbs;
          const _bind$5 = mb_addr;
          const _bind$6 = new _M0TP215Sam_2dHui_2ddot11moon_2dh2646MbMeta(mx, my, _kind, cur_qp, br.bit_pos - bit_start | 0, 0, 0, _imode);
          if (_bind$5 < 0 || _bind$5 >= _bind$4.len) {
            $panic();
          }
          _bind$4.buf[_bind$5] = _bind$6;
        } else {
          const _bind$2 = _M0FP215Sam_2dHui_2ddot11moon_2dh26420decode__p__inter__mb(br, pic, hdr, cur_slice_id, mx, my, mb_type, cur_qp, ref_list);
          let _bind$3;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _bind$3 = _ok._0;
          } else {
            return _bind$2;
          }
          const _new_qp = _bind$3._0;
          const _kind = _bind$3._1;
          const _mvx = _bind$3._2;
          const _mvy = _bind$3._3;
          cur_qp = _new_qp;
          const _bind$4 = pic.mbs;
          const _bind$5 = mb_addr;
          const _bind$6 = new _M0TP215Sam_2dHui_2ddot11moon_2dh2646MbMeta(mx, my, _kind, cur_qp, br.bit_pos - bit_start | 0, _mvx, _mvy, -1);
          if (_bind$5 < 0 || _bind$5 >= _bind$4.len) {
            $panic();
          }
          _bind$4.buf[_bind$5] = _bind$6;
        }
      }
      mb_addr = mb_addr + 1 | 0;
      if (!(br.bit_pos < br.stop_bit_pos)) {
        break;
      }
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(undefined);
}
function _M0MP215Sam_2dHui_2ddot11moon_2dh26411H264Decoder10push__nalu(self, nalu) {
  _L: {
    _L$2: {
      const _bind = nalu.nal_unit_type;
      switch (_bind) {
        case 7: {
          const _bind$2 = _M0FP215Sam_2dHui_2ddot11moon_2dh26410parse__sps(nalu.rbsp);
          let sps;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            sps = _ok._0;
          } else {
            return _bind$2;
          }
          _M0MPB3Map3setGiRP215Sam_2dHui_2ddot11moon_2dh2643SpsE(self.sps_map, sps.sps_id, sps);
          return new _M0DTPC16result6ResultGORP215Sam_2dHui_2ddot11moon_2dh26412DecodedFrameRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(undefined);
        }
        case 8: {
          const _bind$3 = _M0FP215Sam_2dHui_2ddot11moon_2dh26410parse__pps(nalu.rbsp);
          let pps;
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            pps = _ok._0;
          } else {
            return _bind$3;
          }
          _M0MPB3Map3setGiRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(self.pps_map, pps.pps_id, pps);
          return new _M0DTPC16result6ResultGORP215Sam_2dHui_2ddot11moon_2dh26412DecodedFrameRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(undefined);
        }
        case 1: {
          break _L$2;
        }
        case 5: {
          break _L$2;
        }
        case 6: {
          break _L;
        }
        case 9: {
          break _L;
        }
        case 10: {
          break _L;
        }
        case 11: {
          break _L;
        }
        case 12: {
          break _L;
        }
        default: {
          return new _M0DTPC16result6ResultGORP215Sam_2dHui_2ddot11moon_2dh26412DecodedFrameRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(undefined);
        }
      }
    }
    const br = _M0MP215Sam_2dHui_2ddot11moon_2dh2649BitReader3new(nalu.rbsp);
    const _bind = _M0FP215Sam_2dHui_2ddot11moon_2dh26420parse__slice__header(br, nalu.nal_unit_type, nalu.nal_ref_idc, self.sps_map, self.pps_map);
    let _bind$2;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _bind$2 = _ok._0;
    } else {
      return _bind;
    }
    const _hdr = _bind$2._0;
    const _sps = _bind$2._1;
    const _pps = _bind$2._2;
    let emitted = undefined;
    const _bind$3 = self.active;
    let is_new_pic;
    if (_bind$3 === undefined) {
      is_new_pic = true;
    } else {
      const _Some = _bind$3;
      const _prev = _Some;
      if (_hdr.first_mb_in_slice === 0) {
        is_new_pic = true;
      } else {
        let _tmp;
        if (_hdr.frame_num !== _prev.frame_num) {
          _tmp = true;
        } else {
          let _tmp$2;
          const _p = _hdr.is_idr;
          const _p$2 = _prev.is_idr;
          if (!(_p === _p$2)) {
            _tmp$2 = true;
          } else {
            _tmp$2 = _hdr.is_idr && _hdr.idr_pic_id !== _prev.idr_pic_id;
          }
          _tmp = _tmp$2;
        }
        is_new_pic = _tmp;
      }
    }
    if (is_new_pic) {
      emitted = _M0MP215Sam_2dHui_2ddot11moon_2dh26411H264Decoder16finalize__active(self);
      self.active = _M0MP215Sam_2dHui_2ddot11moon_2dh26413ActivePicture3new(_sps, _pps, _hdr, nalu.raw_size);
    } else {
      const _bind$4 = self.active;
      if (_bind$4 === undefined) {
      } else {
        const _Some = _bind$4;
        const _p = _Some;
        _p.nal_bytes = _p.nal_bytes + nalu.raw_size | 0;
      }
    }
    const _bind$4 = self.active;
    let pic;
    if (_bind$4 === undefined) {
      return new _M0DTPC16result6ResultGORP215Sam_2dHui_2ddot11moon_2dh26412DecodedFrameRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE3Err(new _M0DTPC15error5Error57Sam_2dHui_2ddot_2fmoon_2dh264_2eH264Error_2eInvalidSyntax("no active picture"));
    } else {
      const _Some = _bind$4;
      pic = _Some;
    }
    self.slice_counter = self.slice_counter + 1 | 0;
    const slice_id = self.slice_counter;
    const ref_list = _hdr.slice_type === 0 || _hdr.slice_type === 3 ? _M0FP215Sam_2dHui_2ddot11moon_2dh26420build__ref__list__l0(self.dpb, _sps, _hdr) : new _M0TPB5ArrayGRP215Sam_2dHui_2ddot11moon_2dh2648RefFrameE([], 0);
    const _bind$5 = _M0FP215Sam_2dHui_2ddot11moon_2dh26419decode__slice__data(br, pic, _hdr, slice_id, ref_list);
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      _ok._0;
    } else {
      return _bind$5;
    }
    return new _M0DTPC16result6ResultGORP215Sam_2dHui_2ddot11moon_2dh26412DecodedFrameRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(emitted);
  }
  return new _M0DTPC16result6ResultGORP215Sam_2dHui_2ddot11moon_2dh26412DecodedFrameRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(undefined);
}
function _M0MP215Sam_2dHui_2ddot11moon_2dh26411H264Decoder5flush(self) {
  return _M0MP215Sam_2dHui_2ddot11moon_2dh26411H264Decoder16finalize__active(self);
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26414decode__annexb(data) {
  const nalus = _M0FP215Sam_2dHui_2ddot11moon_2dh26422extract__annexb__nalus(data);
  const dec = _M0MP215Sam_2dHui_2ddot11moon_2dh26411H264Decoder3new();
  const sps_list = new _M0TPB5ArrayGRP215Sam_2dHui_2ddot11moon_2dh2643SpsE([], 0);
  const pps_list = new _M0TPB5ArrayGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE([], 0);
  const frames = new _M0TPB5ArrayGRP215Sam_2dHui_2ddot11moon_2dh26412DecodedFrameE([], 0);
  const _bind = nalus.len;
  const _bind$2 = nalus.buf;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const nalu = _bind$2[_];
      if (nalu.nal_unit_type === 7) {
        const _bind$3 = _M0FP215Sam_2dHui_2ddot11moon_2dh26410parse__sps(nalu.rbsp);
        let _tmp$2;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp$2 = _ok._0;
        } else {
          return _bind$3;
        }
        _M0MPC15array5Array4pushGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(sps_list, _tmp$2);
      } else {
        if (nalu.nal_unit_type === 8) {
          const _bind$3 = _M0FP215Sam_2dHui_2ddot11moon_2dh26410parse__pps(nalu.rbsp);
          let _tmp$2;
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _tmp$2 = _ok._0;
          } else {
            return _bind$3;
          }
          _M0MPC15array5Array4pushGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(pps_list, _tmp$2);
        }
      }
      const _bind$3 = _M0MP215Sam_2dHui_2ddot11moon_2dh26411H264Decoder10push__nalu(dec, nalu);
      let _bind$4;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _bind$4 = _ok._0;
      } else {
        return _bind$3;
      }
      if (_bind$4 === undefined) {
      } else {
        const _Some = _bind$4;
        const _f = _Some;
        _M0MPC15array5Array4pushGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(frames, _f);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$3 = _M0MP215Sam_2dHui_2ddot11moon_2dh26411H264Decoder5flush(dec);
  if (_bind$3 === undefined) {
  } else {
    const _Some = _bind$3;
    const _f = _Some;
    _M0MPC15array5Array4pushGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(frames, _f);
  }
  return new _M0DTPC16result6ResultGRP215Sam_2dHui_2ddot11moon_2dh26412DecodeResultRP215Sam_2dHui_2ddot11moon_2dh2649H264ErrorE2Ok(new _M0TP215Sam_2dHui_2ddot11moon_2dh26412DecodeResult(nalus, sps_list, pps_list, frames));
}
function _M0FP215Sam_2dHui_2ddot11moon_2dh26414error__message(err) {
  switch (err.$tag) {
    case 4: {
      const _UnexpectedEof = err;
      const _m = _UnexpectedEof._0;
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(15);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "UnexpectedEof: ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _m);
      return _string_builder.val;
    }
    case 3: {
      const _InvalidSyntax = err;
      const _m$2 = _InvalidSyntax._0;
      const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(15);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "InvalidSyntax: ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _m$2);
      return _string_builder$2.val;
    }
    case 2: {
      const _UnsupportedProfile = err;
      const _m$3 = _UnsupportedProfile._0;
      const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(20);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "UnsupportedProfile: ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, _m$3);
      return _string_builder$3.val;
    }
    case 1: {
      const _UnsupportedFeature = err;
      const _m$4 = _UnsupportedFeature._0;
      const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(20);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "UnsupportedFeature: ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$4, _m$4);
      return _string_builder$4.val;
    }
    case 0: {
      const _MissingParameterSet = err;
      const _m$5 = _MissingParameterSet._0;
      const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(21);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "MissingParameterSet: ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$5, _m$5);
      return _string_builder$5.val;
    }
    default: {
      return _M0FP15Error10to__string(err);
    }
  }
}
function _M0FP315Sam_2dHui_2ddot11moon_2dh2643web9json__err(err) {
  const _tmp = { _0: "ok", _1: _M0IPC14bool4BoolPC14json6ToJson8to__json(false) };
  const _p = _M0FP215Sam_2dHui_2ddot11moon_2dh26414error__message(err);
  const _bind = [_tmp, { _0: "error", _1: new _M0DTPC14json4Json6String(_p) }];
  const _p$2 = _M0MPB3Map3MapGsRPC14json4JsonE(new _M0TPB9ArrayViewGUsRPC14json4JsonEE(_bind, 0, 2), undefined);
  return _M0MPC14json4Json17stringify_2einner(new _M0DTPC14json4Json6Object(_p$2), false, 0, undefined);
}
function _M0FP315Sam_2dHui_2ddot11moon_2dh2643web14bytes__to__hex(data) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(Math.imul(data.length, 2) | 0);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < data.length) {
      const b = i >>> 0 < data.length ? data[i] : $oob();
      const _tmp$2 = b >> 4 & 15;
      _M0IPB13StringBuilderPB6Logger11write__char(sb, _tmp$2 >>> 0 < _M0FP315Sam_2dHui_2ddot11moon_2dh2643web14bytes__to__hexN3hexS2690.length ? _M0FP315Sam_2dHui_2ddot11moon_2dh2643web14bytes__to__hexN3hexS2690.charCodeAt(_tmp$2) : $oob());
      const _tmp$3 = b & 15;
      _M0IPB13StringBuilderPB6Logger11write__char(sb, _tmp$3 >>> 0 < _M0FP315Sam_2dHui_2ddot11moon_2dh2643web14bytes__to__hexN3hexS2690.length ? _M0FP315Sam_2dHui_2ddot11moon_2dh2643web14bytes__to__hexN3hexS2690.charCodeAt(_tmp$3) : $oob());
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return sb.val;
}
function _M0FP315Sam_2dHui_2ddot11moon_2dh2643web11hex__nibble(c) {
  return c >= 48 && c <= 57 ? c - 48 | 0 : c >= 97 && c <= 102 ? c - 87 | 0 : c >= 65 && c <= 70 ? c - 55 | 0 : -1;
}
function _M0FP315Sam_2dHui_2ddot11moon_2dh2643web14hex__to__bytes(s) {
  const n = s.length / 2 | 0;
  const out = $makebytes(n, 0);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < n) {
      const _tmp$2 = Math.imul(i, 2) | 0;
      const hi = _M0FP315Sam_2dHui_2ddot11moon_2dh2643web11hex__nibble(_tmp$2 >>> 0 < s.length ? s.charCodeAt(_tmp$2) : $oob());
      const _tmp$3 = (Math.imul(i, 2) | 0) + 1 | 0;
      const lo = _M0FP315Sam_2dHui_2ddot11moon_2dh2643web11hex__nibble(_tmp$3 >>> 0 < s.length ? s.charCodeAt(_tmp$3) : $oob());
      if (hi >= 0 && lo >= 0) {
        if (i >>> 0 < out.length) {
          out[i] = (hi << 4 | lo) & 255;
        } else {
          $oob();
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(out, 0, out.length));
}
function _M0FP315Sam_2dHui_2ddot11moon_2dh2643web17decode__hex__json(hex_stream) {
  let _try_err;
  _L: {
    const raw = _M0FP315Sam_2dHui_2ddot11moon_2dh2643web14hex__to__bytes(hex_stream);
    const _bind = _M0FP215Sam_2dHui_2ddot11moon_2dh26414decode__annexb(raw);
    let res;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      res = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    const bitrate_svg = _M0FP215Sam_2dHui_2ddot11moon_2dh26420render__bitrate__svg(res.frames);
    const probe_text = _M0FP215Sam_2dHui_2ddot11moon_2dh26419render__probe__text(res);
    const nalu_arr = new _M0TPB5ArrayGRPC14json4JsonE([], 0);
    const _bind$2 = res.nalus;
    const _bind$3 = _bind$2.len;
    const _bind$4 = _bind$2.buf;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$3) {
        const n = _bind$4[_];
        const _tmp$2 = { _0: "type", _1: _M0IPC13int3IntPC14json6ToJson8to__json(n.nal_unit_type) };
        const _p = _M0FP215Sam_2dHui_2ddot11moon_2dh26421nal__unit__type__name(n.nal_unit_type);
        const _bind$5 = [_tmp$2, { _0: "name", _1: new _M0DTPC14json4Json6String(_p) }, { _0: "nal_ref_idc", _1: _M0IPC13int3IntPC14json6ToJson8to__json(n.nal_ref_idc) }, { _0: "offset", _1: _M0IPC13int3IntPC14json6ToJson8to__json(n.byte_offset) }, { _0: "size", _1: _M0IPC13int3IntPC14json6ToJson8to__json(n.raw_size) }];
        const _p$2 = _M0MPB3Map3MapGsRPC14json4JsonE(new _M0TPB9ArrayViewGUsRPC14json4JsonEE(_bind$5, 0, 5), undefined);
        _M0MPC15array5Array4pushGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(nalu_arr, new _M0DTPC14json4Json6Object(_p$2));
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const sps_arr = new _M0TPB5ArrayGRPC14json4JsonE([], 0);
    const _bind$5 = res.sps_list;
    const _bind$6 = _bind$5.len;
    const _bind$7 = _bind$5.buf;
    let _tmp$2 = 0;
    while (true) {
      const _ = _tmp$2;
      if (_ < _bind$6) {
        const s = _bind$7[_];
        const _bind$8 = [{ _0: "sps_id", _1: _M0IPC13int3IntPC14json6ToJson8to__json(s.sps_id) }, { _0: "profile_idc", _1: _M0IPC13int3IntPC14json6ToJson8to__json(s.profile_idc) }, { _0: "level_idc", _1: _M0IPC13int3IntPC14json6ToJson8to__json(s.level_idc) }, { _0: "width", _1: _M0IPC13int3IntPC14json6ToJson8to__json(_M0MP215Sam_2dHui_2ddot11moon_2dh2643Sps5width(s)) }, { _0: "height", _1: _M0IPC13int3IntPC14json6ToJson8to__json(_M0MP215Sam_2dHui_2ddot11moon_2dh2643Sps6height(s)) }, { _0: "mb_w", _1: _M0IPC13int3IntPC14json6ToJson8to__json(s.pic_width_in_mbs) }, { _0: "mb_h", _1: _M0IPC13int3IntPC14json6ToJson8to__json(s.pic_height_in_mbs) }, { _0: "max_refs", _1: _M0IPC13int3IntPC14json6ToJson8to__json(s.max_num_ref_frames) }, { _0: "poc_type", _1: _M0IPC13int3IntPC14json6ToJson8to__json(s.pic_order_cnt_type) }];
        const _p = _M0MPB3Map3MapGsRPC14json4JsonE(new _M0TPB9ArrayViewGUsRPC14json4JsonEE(_bind$8, 0, 9), undefined);
        _M0MPC15array5Array4pushGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(sps_arr, new _M0DTPC14json4Json6Object(_p));
        _tmp$2 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const frame_arr = new _M0TPB5ArrayGRPC14json4JsonE([], 0);
    const _bind$8 = res.frames;
    const _bind$9 = _bind$8.len;
    const _bind$10 = _bind$8.buf;
    let _tmp$3 = 0;
    while (true) {
      const _ = _tmp$3;
      if (_ < _bind$9) {
        const f = _bind$10[_];
        const m = f.meta;
        const mb_arr = new _M0TPB5ArrayGRPC14json4JsonE([], 0);
        const _bind$11 = m.mbs;
        const _bind$12 = _bind$11.len;
        const _bind$13 = _bind$11.buf;
        let _tmp$4 = 0;
        while (true) {
          const _$2 = _tmp$4;
          if (_$2 < _bind$12) {
            const mb = _bind$13[_$2];
            const _tmp$5 = { _0: "x", _1: _M0IPC13int3IntPC14json6ToJson8to__json(mb.mb_x) };
            const _tmp$6 = { _0: "y", _1: _M0IPC13int3IntPC14json6ToJson8to__json(mb.mb_y) };
            const _p = _M0MP215Sam_2dHui_2ddot11moon_2dh2646MbKind5label(mb.kind);
            const _bind$14 = [_tmp$5, _tmp$6, { _0: "kind", _1: new _M0DTPC14json4Json6String(_p) }, { _0: "qp", _1: _M0IPC13int3IntPC14json6ToJson8to__json(mb.qp) }, { _0: "bits", _1: _M0IPC13int3IntPC14json6ToJson8to__json(mb.bits) }, { _0: "mvx", _1: _M0IPC13int3IntPC14json6ToJson8to__json(mb.mv_x) }, { _0: "mvy", _1: _M0IPC13int3IntPC14json6ToJson8to__json(mb.mv_y) }, { _0: "imode", _1: _M0IPC13int3IntPC14json6ToJson8to__json(mb.intra_mode) }];
            const _p$2 = _M0MPB3Map3MapGsRPC14json4JsonE(new _M0TPB9ArrayViewGUsRPC14json4JsonEE(_bind$14, 0, 8), undefined);
            _M0MPC15array5Array4pushGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(mb_arr, new _M0DTPC14json4Json6Object(_p$2));
            _tmp$4 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const rgba = _M0MP215Sam_2dHui_2ddot11moon_2dh26412DecodedFrame8to__rgba(f);
        const _tmp$5 = { _0: "index", _1: _M0IPC13int3IntPC14json6ToJson8to__json(m.frame_index) };
        const _tmp$6 = { _0: "frame_num", _1: _M0IPC13int3IntPC14json6ToJson8to__json(m.frame_num) };
        const _tmp$7 = { _0: "is_idr", _1: _M0IPC14bool4BoolPC14json6ToJson8to__json(m.is_idr) };
        const _p = m.slice_type;
        const _tmp$8 = { _0: "slice_type", _1: new _M0DTPC14json4Json6String(_p) };
        const _tmp$9 = { _0: "width", _1: _M0IPC13int3IntPC14json6ToJson8to__json(f.width) };
        const _tmp$10 = { _0: "height", _1: _M0IPC13int3IntPC14json6ToJson8to__json(f.height) };
        const _tmp$11 = { _0: "mb_w", _1: _M0IPC13int3IntPC14json6ToJson8to__json(m.mb_w) };
        const _tmp$12 = { _0: "mb_h", _1: _M0IPC13int3IntPC14json6ToJson8to__json(m.mb_h) };
        const _tmp$13 = { _0: "slice_qp", _1: _M0IPC13int3IntPC14json6ToJson8to__json(m.slice_qp) };
        const _tmp$14 = { _0: "nal_bytes", _1: _M0IPC13int3IntPC14json6ToJson8to__json(m.nal_bytes) };
        const _p$2 = _M0FP215Sam_2dHui_2ddot11moon_2dh26422render__frame__mb__svg(m);
        const _tmp$15 = { _0: "mb_svg", _1: new _M0DTPC14json4Json6String(_p$2) };
        const _tmp$16 = { _0: "mbs", _1: new _M0DTPC14json4Json5Array(mb_arr) };
        const _p$3 = _M0FP315Sam_2dHui_2ddot11moon_2dh2643web14bytes__to__hex(rgba);
        const _tmp$17 = { _0: "rgba_hex", _1: new _M0DTPC14json4Json6String(_p$3) };
        const _p$4 = _M0FP315Sam_2dHui_2ddot11moon_2dh2643web14bytes__to__hex(f.y);
        const _tmp$18 = { _0: "y_hex", _1: new _M0DTPC14json4Json6String(_p$4) };
        const _p$5 = _M0FP315Sam_2dHui_2ddot11moon_2dh2643web14bytes__to__hex(f.u);
        const _tmp$19 = { _0: "u_hex", _1: new _M0DTPC14json4Json6String(_p$5) };
        const _p$6 = _M0FP315Sam_2dHui_2ddot11moon_2dh2643web14bytes__to__hex(f.v);
        const _bind$14 = [_tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$18, _tmp$19, { _0: "v_hex", _1: new _M0DTPC14json4Json6String(_p$6) }];
        const _p$7 = _M0MPB3Map3MapGsRPC14json4JsonE(new _M0TPB9ArrayViewGUsRPC14json4JsonEE(_bind$14, 0, 16), undefined);
        _M0MPC15array5Array4pushGRP215Sam_2dHui_2ddot11moon_2dh2643PpsE(frame_arr, new _M0DTPC14json4Json6Object(_p$7));
        _tmp$3 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$11 = [{ _0: "ok", _1: _M0IPC14bool4BoolPC14json6ToJson8to__json(true) }, { _0: "probe_text", _1: new _M0DTPC14json4Json6String(probe_text) }, { _0: "bitrate_svg", _1: new _M0DTPC14json4Json6String(bitrate_svg) }, { _0: "nalus", _1: new _M0DTPC14json4Json5Array(nalu_arr) }, { _0: "sps", _1: new _M0DTPC14json4Json5Array(sps_arr) }, { _0: "frames", _1: new _M0DTPC14json4Json5Array(frame_arr) }];
    const _p = _M0MPB3Map3MapGsRPC14json4JsonE(new _M0TPB9ArrayViewGUsRPC14json4JsonEE(_bind$11, 0, 6), undefined);
    return _M0MPC14json4Json17stringify_2einner(new _M0DTPC14json4Json6Object(_p), false, 0, undefined);
  }
  return _M0FP315Sam_2dHui_2ddot11moon_2dh2643web9json__err(_try_err);
}
(() => {
  _M0FP315Sam_2dHui_2ddot11moon_2dh2643web22register__browser__api(_M0FP315Sam_2dHui_2ddot11moon_2dh2643web17decode__hex__json);
})();
