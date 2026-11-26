///|
test "cavlc vlc tables are prefix-free with exact kraft sums" {
  assert_true(@moon-h264.verify_cavlc_tables_integrity())
}

///|
test "exp-golomb and emulation prevention byte removal" {
  let ebsp : Bytes = [
    b'\x00', b'\x00', b'\x03', b'\x01', b'\x00', b'\x00', b'\x03', b'\x00',
  ]
  let rbsp = @moon-h264.ebsp_to_rbsp(ebsp, 0, ebsp.length())
  assert_eq(rbsp.length(), 6)
  assert_eq(rbsp[2], b'\x01')
  assert_eq(rbsp[5], b'\x00')
  let br = @moon-h264.BitReader::new([b'\xA6', b'\x48'])
  assert_eq(br.read_ue(), 0)
  assert_eq(br.read_ue(), 1)
  assert_eq(br.read_ue(), 2)
  assert_eq(br.read_ue(), 3)
  assert_false(br.more_rbsp_data())
}

///|
test "inverse transform dc roundtrip" {
  let plane = FixedArray::make(16, b'\x80')
  let block = FixedArray::make(16, 0)
  block[0] = 640
  @moon-h264.idct_4x4_add(block, plane, 4, 0, 0)
  for i = 0; i < 16; i = i + 1 {
    assert_eq(plane[i].to_int(), 138)
  }
}
