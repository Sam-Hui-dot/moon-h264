///|
/// ITU-T H.264 Table 8-15: Specification of QPc as a function of qPI.
let chroma_qp_table : FixedArray[Int32] = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 29, 30, 31, 32, 32, 33, 34, 34, 35, 35, 36, 36, 37,
  37, 37, 38, 38, 38, 39, 39, 39, 39,
]

///|
/// Map luma QP + chroma_qp_index_offset to chroma QP (0..39).
pub fn chroma_qp_from_luma(qp_y : Int32, offset : Int32) -> Int32 {
  let qpi = clamp_int(qp_y + offset, 0, 51)
  chroma_qp_table[qpi]
}

///|
/// ITU-T H.264 Table 8-14 normAdjust4x4 (v[qp % 6][pos_class]).
/// pos_class: 0 for (even,even), 1 for (odd,odd), 2 for mixed.
let level_scale_4x4_0 : FixedArray[Int32] = [10, 11, 13, 14, 16, 18]

///|
let level_scale_4x4_1 : FixedArray[Int32] = [16, 18, 20, 23, 25, 29]

///|
let level_scale_4x4_2 : FixedArray[Int32] = [13, 14, 16, 18, 20, 23]

///|
/// Position class for each of the 16 raster positions in a 4x4 block.
let pos_class_4x4 : FixedArray[Int32] = [
  0, 2, 0, 2, 2, 1, 2, 1, 0, 2, 0, 2, 2, 1, 2, 1,
]

///|
fn dequant_scale(qp_mod6 : Int32, idx : Int32) -> Int32 {
  match pos_class_4x4[idx] {
    0 => level_scale_4x4_0[qp_mod6]
    1 => level_scale_4x4_1[qp_mod6]
    _ => level_scale_4x4_2[qp_mod6]
  }
}

///|
/// Dequantize a 4x4 residual block (raster order, 16 ints) in place.
/// If `skip_dc` is true, index 0 is left untouched (already filled by DC Hadamard).
pub fn dequant_4x4(
  block : FixedArray[Int32],
  qp : Int32,
  skip_dc : Bool,
) -> Unit {
  let qp_div6 = qp / 6
  let qp_mod6 = qp % 6
  let start = if skip_dc { 1 } else { 0 }
  for i = start; i < 16; i = i + 1 {
    if block[i] != 0 {
      block[i] = (block[i] * dequant_scale(qp_mod6, i)) << qp_div6
    }
  }
}

///|
/// Inverse 4x4 Hadamard transform + dequantization for Intra_16x16 Luma DC (H.264 §8.5.10).
pub fn inverse_hadamard_luma_dc(
  c : FixedArray[Int32],
  qp : Int32,
) -> FixedArray[Int32] {
  let tmp = FixedArray::make(16, 0)
  // Horizontal butterfly
  for r = 0; r < 4; r = r + 1 {
    let i = r * 4
    let a = c[i] + c[i + 2]
    let b = c[i] - c[i + 2]
    let d = c[i + 1] - c[i + 3]
    let e = c[i + 1] + c[i + 3]
    tmp[i] = a + e
    tmp[i + 1] = b + d
    tmp[i + 2] = b - d
    tmp[i + 3] = a - e
  }
  // Vertical butterfly
  let f = FixedArray::make(16, 0)
  for col = 0; col < 4; col = col + 1 {
    let a = tmp[col] + tmp[col + 8]
    let b = tmp[col] - tmp[col + 8]
    let d = tmp[col + 4] - tmp[col + 12]
    let e = tmp[col + 4] + tmp[col + 12]
    f[col] = a + e
    f[col + 4] = b + d
    f[col + 8] = b - d
    f[col + 12] = a - e
  }
  let qp_div6 = qp / 6
  let qp_mod6 = qp % 6
  let ls = level_scale_4x4_0[qp_mod6] * 16
  let out = FixedArray::make(16, 0)
  if qp >= 36 {
    let shift = qp_div6 - 6
    for i = 0; i < 16; i = i + 1 {
      out[i] = (f[i] * ls) << shift
    }
  } else {
    let shift = 6 - qp_div6
    let round = 1 << (shift - 1)
    for i = 0; i < 16; i = i + 1 {
      out[i] = (f[i] * ls + round) >> shift
    }
  }
  out
}

///|
/// Inverse 2x2 Hadamard transform + dequantization for Chroma DC (H.264 §8.5.11).
pub fn inverse_hadamard_chroma_dc(
  c : FixedArray[Int32],
  qp_c : Int32,
) -> FixedArray[Int32] {
  let f0 = c[0] + c[1] + c[2] + c[3]
  let f1 = c[0] - c[1] + c[2] - c[3]
  let f2 = c[0] + c[1] - c[2] - c[3]
  let f3 = c[0] - c[1] - c[2] + c[3]
  let qp_div6 = qp_c / 6
  let qp_mod6 = qp_c % 6
  let ls = level_scale_4x4_0[qp_mod6]
  let out = FixedArray::make(4, 0)
  out[0] = (f0 * ls) << qp_div6 >> 1
  out[1] = (f1 * ls) << qp_div6 >> 1
  out[2] = (f2 * ls) << qp_div6 >> 1
  out[3] = (f3 * ls) << qp_div6 >> 1
  out
}

///|
/// Inverse 4x4 integer DCT (H.264 §8.5.12.2), adding residual to a plane at (x0, y0).
pub fn idct_4x4_add(
  coeffs : FixedArray[Int32],
  plane : FixedArray[Byte],
  stride : Int32,
  x0 : Int32,
  y0 : Int32,
) -> Unit {
  let tmp = FixedArray::make(16, 0)
  // Horizontal transform
  for r = 0; r < 4; r = r + 1 {
    let i = r * 4
    let d0 = coeffs[i]
    let d1 = coeffs[i + 1]
    let d2 = coeffs[i + 2]
    let d3 = coeffs[i + 3]
    let e0 = d0 + d2
    let e1 = d0 - d2
    let e2 = (d1 >> 1) - d3
    let e3 = d1 + (d3 >> 1)
    tmp[i] = e0 + e3
    tmp[i + 1] = e1 + e2
    tmp[i + 2] = e1 - e2
    tmp[i + 3] = e0 - e3
  }
  // Vertical transform + rounding + clip
  for col = 0; col < 4; col = col + 1 {
    let t0 = tmp[col]
    let t1 = tmp[col + 4]
    let t2 = tmp[col + 8]
    let t3 = tmp[col + 12]
    let f0 = t0 + t2
    let f1 = t0 - t2
    let f2 = (t1 >> 1) - t3
    let f3 = t1 + (t3 >> 1)
    let r0 = (f0 + f3 + 32) >> 6
    let r1 = (f1 + f2 + 32) >> 6
    let r2 = (f1 - f2 + 32) >> 6
    let r3 = (f0 - f3 + 32) >> 6
    let p0 = (y0 + 0) * stride + x0 + col
    let p1 = (y0 + 1) * stride + x0 + col
    let p2 = (y0 + 2) * stride + x0 + col
    let p3 = (y0 + 3) * stride + x0 + col
    plane[p0] = clip_u8(plane[p0].to_int() + r0).to_byte()
    plane[p1] = clip_u8(plane[p1].to_int() + r1).to_byte()
    plane[p2] = clip_u8(plane[p2].to_int() + r2).to_byte()
    plane[p3] = clip_u8(plane[p3].to_int() + r3).to_byte()
  }
}

///|
/// Fast path: add a DC-only 4x4 residual block to a plane at (x0, y0).
pub fn idct_4x4_dc_add(
  dc_val : Int32,
  plane : FixedArray[Byte],
  stride : Int32,
  x0 : Int32,
  y0 : Int32,
) -> Unit {
  let delta = (dc_val + 32) >> 6
  if delta == 0 {
    return
  }
  for r = 0; r < 4; r = r + 1 {
    let base = (y0 + r) * stride + x0
    for c = 0; c < 4; c = c + 1 {
      plane[base + c] = clip_u8(plane[base + c].to_int() + delta).to_byte()
    }
  }
}
