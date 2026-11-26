///|
fn json_err(err : Error) -> String {
  @json.Json::object({
    "ok": @json.ToJson::to_json(false),
    "error": @json.ToJson::to_json(@moon-h264.error_message(err)),
  }).stringify()
}

///|
fn bytes_to_hex(data : Bytes) -> String {
  let hex = "0123456789abcdef"
  let sb = StringBuilder(size_hint=data.length() * 2)
  for i = 0; i < data.length(); i = i + 1 {
    let b = data[i].to_int()
    sb.write_char(hex[(b >> 4) & 15].to_int().unsafe_to_char())
    sb.write_char(hex[b & 15].to_int().unsafe_to_char())
  }
  sb.to_string()
}

///|
fn hex_nibble(c : Int32) -> Int32 {
  if c >= 48 && c <= 57 {
    c - 48
  } else if c >= 97 && c <= 102 {
    c - 87
  } else if c >= 65 && c <= 70 {
    c - 55
  } else {
    -1
  }
}

///|
fn hex_to_bytes(s : String) -> Bytes {
  let n = s.length() / 2
  let out = FixedArray::make(n, b'\x00')
  for i = 0; i < n; i = i + 1 {
    let hi = hex_nibble(s[i * 2].to_int())
    let lo = hex_nibble(s[i * 2 + 1].to_int())
    if hi >= 0 && lo >= 0 {
      out[i] = ((hi << 4) | lo).to_byte()
    }
  }
  Bytes::from_array(out)
}

///|
/// Decode a hex-encoded Annex B H.264 stream in the browser.
/// Returns JSON with NALU/SPS metadata, per-frame MB/MV anatomy, SVG charts,
/// and hex-encoded Y/U/V + RGBA8888 buffers for Canvas rendering.
pub fn decode_hex_json(hex_stream : String) -> String {
  try {
    let raw = hex_to_bytes(hex_stream)
    let res = @moon-h264.decode_annexb(raw)
    let bitrate_svg = @moon-h264.render_bitrate_svg(res.frames)
    let probe_text = @moon-h264.render_probe_text(res)
    let nalu_arr : Array[@json.Json] = []
    for n in res.nalus {
      nalu_arr.push(
        @json.Json::object({
          "type": @json.ToJson::to_json(n.nal_unit_type),
          "name": @json.ToJson::to_json(
            @moon-h264.nal_unit_type_name(n.nal_unit_type),
          ),
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
          "max_refs": @json.ToJson::to_json(s.max_num_ref_frames),
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
      let rgba = f.to_rgba()
      frame_arr.push(
        @json.Json::object({
          "index": @json.ToJson::to_json(m.frame_index),
          "frame_num": @json.ToJson::to_json(m.frame_num),
          "is_idr": @json.ToJson::to_json(m.is_idr),
          "slice_type": @json.ToJson::to_json(m.slice_type),
          "width": @json.ToJson::to_json(f.width),
          "height": @json.ToJson::to_json(f.height),
          "mb_w": @json.ToJson::to_json(m.mb_w),
          "mb_h": @json.ToJson::to_json(m.mb_h),
          "slice_qp": @json.ToJson::to_json(m.slice_qp),
          "nal_bytes": @json.ToJson::to_json(m.nal_bytes),
          "mb_svg": @json.ToJson::to_json(@moon-h264.render_frame_mb_svg(m)),
          "mbs": @json.Json::array(mb_arr),
          "rgba_hex": @json.ToJson::to_json(bytes_to_hex(rgba)),
          "y_hex": @json.ToJson::to_json(bytes_to_hex(f.y)),
          "u_hex": @json.ToJson::to_json(bytes_to_hex(f.u)),
          "v_hex": @json.ToJson::to_json(bytes_to_hex(f.v)),
        }),
      )
    }
    @json.Json::object({
      "ok": @json.ToJson::to_json(true),
      "probe_text": @json.ToJson::to_json(probe_text),
      "bitrate_svg": @json.ToJson::to_json(bitrate_svg),
      "nalus": @json.Json::array(nalu_arr),
      "sps": @json.Json::array(sps_arr),
      "frames": @json.Json::array(frame_arr),
    }).stringify()
  } catch {
    err => json_err(err)
  }
}

///|
extern "js" fn register_browser_api(decode_fn : (String) -> String) -> Unit =
  #|(decodeFn) => {
  #|  const hexToBytes = (hex) => {
  #|    const out = new Uint8Array(hex.length >> 1);
  #|    for (let i = 0; i < out.length; i++) {
  #|      out[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  #|    }
  #|    return out;
  #|  };
  #|  const bytesToHex = (u8) => {
  #|    let s = "";
  #|    for (let i = 0; i < u8.length; i++) {
  #|      s += u8[i].toString(16).padStart(2, "0");
  #|    }
  #|    return s;
  #|  };
  #|  globalThis.MoonH264 = {
  #|    decodeBytes: (u8) => {
  #|      const raw = JSON.parse(decodeFn(bytesToHex(u8)));
  #|      if (raw.ok && Array.isArray(raw.frames)) {
  #|        for (const f of raw.frames) {
  #|          f.rgba = hexToBytes(f.rgba_hex);
  #|          f.y = hexToBytes(f.y_hex);
  #|          f.u = hexToBytes(f.u_hex);
  #|          f.v = hexToBytes(f.v_hex);
  #|          delete f.rgba_hex;
  #|          delete f.y_hex;
  #|          delete f.u_hex;
  #|          delete f.v_hex;
  #|        }
  #|      }
  #|      return raw;
  #|    },
  #|    decodeHex: (hex) => {
  #|      const raw = JSON.parse(decodeFn(hex));
  #|      if (raw.ok && Array.isArray(raw.frames)) {
  #|        for (const f of raw.frames) {
  #|          f.rgba = hexToBytes(f.rgba_hex);
  #|          f.y = hexToBytes(f.y_hex);
  #|          f.u = hexToBytes(f.u_hex);
  #|          f.v = hexToBytes(f.v_hex);
  #|          delete f.rgba_hex;
  #|          delete f.y_hex;
  #|          delete f.u_hex;
  #|          delete f.v_hex;
  #|        }
  #|      }
  #|      return raw;
  #|    },
  #|  };
  #|}

///|
fn main {
  register_browser_api(decode_hex_json)
}
