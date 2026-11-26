///|
fn parse_hex_bytes(s : String) -> Bytes {
  fn nib(c : Int32) -> Int32 {
    if c >= 48 && c <= 57 {
      c - 48
    } else if c >= 97 && c <= 102 {
      c - 87
    } else {
      c - 55
    }
  }

  let n = s.length() / 2
  let arr = FixedArray::make(n, b'\x00')
  for i = 0; i < n; i = i + 1 {
    arr[i] = ((nib(s[i * 2].to_int()) << 4) | nib(s[i * 2 + 1].to_int())).to_byte()
  }
  Bytes::from_array(arr)
}

///|
/// Real 2-frame 16x16 libx264 Constrained Baseline stream (SPS + PPS + SEI + IDR + P-frame).
let sample_16x16_h264_hex : String = "000000016742c00ada7b011000000300100000030140f1226a0000000168ce092c800000016588843fc4315606042fc0428d98007ad435835c00989e19d0825270b499ffe2a406c80680e70234155abcd486467373febb69130cb98d9d074bbbfccfb288e411647c19ffd82cd2e2a632868fedad4690608a6a45c8f57aea70c7e4799e7abd403e6311b1c074affbe581e723a5281232ffbe0c020002005cc30002e10088006f99852b30b8614a93402d9db00884fb0d27f203b2b7f7380012a0c565d234800dc5c50a4b1a21b1bc50a436b1b4fec1198b6aa1193067f7581ca914f83c4d3f7d00000001419a23d4"

///|
test "decode real 16x16 libx264 baseline stream bit-exact with ffmpeg" {
  let raw = parse_hex_bytes(sample_16x16_h264_hex)
  let res = @moon-h264.decode_annexb(raw)
  assert_eq(res.sps_list.length(), 1)
  assert_eq(res.pps_list.length(), 1)
  assert_eq(res.frames.length(), 2)
  let f0 = res.frames[0]
  assert_eq(f0.width, 16)
  assert_eq(f0.height, 16)
  assert_true(f0.meta.is_idr)
  assert_eq(f0.meta.slice_type, "I")
  let yuv0 = f0.to_yuv420p_bytes()
  assert_eq(yuv0.length(), 384)
  // Exact FFmpeg reference first 8 Y pixels and total YUV byte sum
  assert_eq(yuv0[0].to_int(), 73)
  assert_eq(yuv0[1].to_int(), 72)
  assert_eq(yuv0[2].to_int(), 76)
  assert_eq(yuv0[3].to_int(), 76)
  let mut sum0 = 0
  for i = 0; i < yuv0.length(); i = i + 1 {
    sum0 += yuv0[i].to_int()
  }
  assert_eq(sum0, 37328)
  // Frame 1 (P-frame)
  let f1 = res.frames[1]
  assert_false(f1.meta.is_idr)
  assert_eq(f1.meta.slice_type, "P")
  let yuv1 = f1.to_yuv420p_bytes()
  let mut sum1 = 0
  for i = 0; i < yuv1.length(); i = i + 1 {
    sum1 += yuv1[i].to_int()
  }
  assert_eq(sum1, 37328)
  // RGBA conversion
  let rgba = f0.to_rgba()
  assert_eq(rgba.length(), 16 * 16 * 4)
  assert_eq(rgba[3].to_int(), 255)
  // SVG & Probe reports
  let mb_svg = @moon-h264.render_frame_mb_svg(f0.meta)
  assert_true(mb_svg.contains("moon-h264-mb-map"))
  let br_svg = @moon-h264.render_bitrate_svg(res.frames)
  assert_true(br_svg.contains("moon-h264-bitrate"))
  let probe = @moon-h264.render_probe_text(res)
  assert_true(probe.contains("Decoded frames: 2"))
  let probe_json = @moon-h264.render_probe_json(res)
  assert_true(probe_json.contains("\"frame_count\":2"))
}

///|
test "avcc length-prefixed nalu extraction" {
  // 4-byte length = 3, payload = [0x67, 0x42, 0xC0]
  let avcc : Bytes = [
    b'\x00', b'\x00', b'\x00', b'\x03', b'\x67', b'\x42', b'\xC0',
  ]
  let nalus = @moon-h264.extract_avcc_nalus(avcc)
  assert_eq(nalus.length(), 1)
  assert_eq(nalus[0].nal_unit_type, 7)
  assert_eq(nalus[0].nal_ref_idc, 3)
  assert_eq(nalus[0].rbsp.length(), 2)
}

///|
test "missing parameter set raises error cleanly" {
  // Slice NALU without prior SPS/PPS
  let bad : Bytes = [
    b'\x00', b'\x00', b'\x00', b'\x01', b'\x65', b'\x88', b'\x84',
  ]
  let mut raised = false
  try {
    let _ = @moon-h264.decode_annexb(bad)
  } catch {
    err => {
      let msg = @moon-h264.error_message(err)
      raised = msg.contains("MissingParameterSet")
    }
  }
  assert_true(raised)
}
