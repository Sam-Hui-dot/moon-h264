///|
/// Convert a cropped YUV420p frame to RGBA8888 using BT.601 or BT.709 (matrix_coefficients == 1).
pub fn yuv420p_to_rgba(
  y_plane : Bytes,
  u_plane : Bytes,
  v_plane : Bytes,
  width : Int32,
  height : Int32,
  bt709~ : Bool = false,
) -> Bytes {
  let cw = (width + 1) >> 1
  let out = FixedArray::make(width * height * 4, b'\xFF')
  for y = 0; y < height; y = y + 1 {
    let y_row = y * width
    let c_row = (y >> 1) * cw
    let dst_row = y * width * 4
    for x = 0; x < width; x = x + 1 {
      let yy = y_plane[y_row + x].to_int() - 16
      let uu = u_plane[c_row + (x >> 1)].to_int() - 128
      let vv = v_plane[c_row + (x >> 1)].to_int() - 128
      let c_val = 298 * (if yy < 0 { 0 } else { yy })
      let (r, g, b) = if bt709 {
        (
          clip_u8((c_val + 459 * vv + 128) >> 8),
          clip_u8((c_val - 55 * uu - 136 * vv + 128) >> 8),
          clip_u8((c_val + 541 * uu + 128) >> 8),
        )
      } else {
        (
          clip_u8((c_val + 409 * vv + 128) >> 8),
          clip_u8((c_val - 100 * uu - 208 * vv + 128) >> 8),
          clip_u8((c_val + 516 * uu + 128) >> 8),
        )
      }
      let p = dst_row + x * 4
      out[p] = r.to_byte()
      out[p + 1] = g.to_byte()
      out[p + 2] = b.to_byte()
      out[p + 3] = b'\xFF'
    }
  }
  Bytes::from_array(out)
}
