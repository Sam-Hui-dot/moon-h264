///|
/// Zig-zag scan order for 4x4 blocks (scan_idx -> raster_idx).
pub let zigzag_4x4 : FixedArray[Int32] = [
  0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15,
]

///|
/// A single VLC table entry: (code, bit_len, packed_val).
/// For coeff_token, packed_val = (total_coeff << 2) | trailing_ones.
priv struct VlcEntry {
  code : Int32
  len : Int32
  val : Int32
}

///|
fn vlc_decode(
  br : BitReader,
  table : FixedArray[VlcEntry],
) -> Int32 raise H264Error {
  let mut max_len = 0
  for i = 0; i < table.length(); i = i + 1 {
    if table[i].len > max_len {
      max_len = table[i].len
    }
  }
  let peek = br.peek_bits(max_len)
  for i = 0; i < table.length(); i = i + 1 {
    let e = table[i]
    let shifted = peek >> (max_len - e.len)
    if shifted == e.code {
      br.skip_bits(e.len)
      return e.val
    }
  }
  raise H264Error::InvalidSyntax(
    "CAVLC VLC decode failed at bit \{br.position()} (peek=\{peek})",
  )
}

///|
fn ct(code : Int32, len : Int32, tc : Int32, t1 : Int32) -> VlcEntry {
  { code, len, val: (tc << 2) | t1, }
}

///|
fn ve(code : Int32, len : Int32, val : Int32) -> VlcEntry {
  { code, len, val, }
}

///|
/// ITU-T H.264 Table 9-5: coeff_token for 0 <= nC < 2.
let coeff_token_0_1 : FixedArray[VlcEntry] = [
  ct(1, 1, 0, 0),
  ct(5, 6, 1, 0),
  ct(1, 2, 1, 1),
  ct(7, 8, 2, 0),
  ct(4, 6, 2, 1),
  ct(1, 3, 2, 2),
  ct(7, 9, 3, 0),
  ct(6, 8, 3, 1),
  ct(5, 7, 3, 2),
  ct(3, 5, 3, 3),
  ct(7, 10, 4, 0),
  ct(6, 9, 4, 1),
  ct(5, 8, 4, 2),
  ct(3, 6, 4, 3),
  ct(7, 11, 5, 0),
  ct(6, 10, 5, 1),
  ct(5, 9, 5, 2),
  ct(4, 7, 5, 3),
  ct(15, 13, 6, 0),
  ct(6, 11, 6, 1),
  ct(5, 10, 6, 2),
  ct(4, 8, 6, 3),
  ct(11, 13, 7, 0),
  ct(14, 13, 7, 1),
  ct(5, 11, 7, 2),
  ct(4, 9, 7, 3),
  ct(8, 13, 8, 0),
  ct(10, 13, 8, 1),
  ct(13, 13, 8, 2),
  ct(4, 10, 8, 3),
  ct(15, 14, 9, 0),
  ct(14, 14, 9, 1),
  ct(9, 13, 9, 2),
  ct(4, 11, 9, 3),
  ct(11, 14, 10, 0),
  ct(10, 14, 10, 1),
  ct(13, 14, 10, 2),
  ct(12, 13, 10, 3),
  ct(15, 15, 11, 0),
  ct(14, 15, 11, 1),
  ct(9, 14, 11, 2),
  ct(12, 14, 11, 3),
  ct(11, 15, 12, 0),
  ct(10, 15, 12, 1),
  ct(13, 15, 12, 2),
  ct(8, 14, 12, 3),
  ct(15, 16, 13, 0),
  ct(1, 15, 13, 1),
  ct(9, 15, 13, 2),
  ct(12, 15, 13, 3),
  ct(11, 16, 14, 0),
  ct(14, 16, 14, 1),
  ct(13, 16, 14, 2),
  ct(8, 15, 14, 3),
  ct(7, 16, 15, 0),
  ct(10, 16, 15, 1),
  ct(9, 16, 15, 2),
  ct(12, 16, 15, 3),
  ct(4, 16, 16, 0),
  ct(6, 16, 16, 1),
  ct(5, 16, 16, 2),
  ct(8, 16, 16, 3),
]

///|
/// ITU-T H.264 Table 9-5: coeff_token for 2 <= nC < 4.
let coeff_token_2_3 : FixedArray[VlcEntry] = [
  ct(3, 2, 0, 0),
  ct(11, 6, 1, 0),
  ct(2, 2, 1, 1),
  ct(7, 6, 2, 0),
  ct(7, 5, 2, 1),
  ct(3, 3, 2, 2),
  ct(7, 7, 3, 0),
  ct(10, 6, 3, 1),
  ct(9, 6, 3, 2),
  ct(5, 4, 3, 3),
  ct(7, 8, 4, 0),
  ct(6, 6, 4, 1),
  ct(5, 6, 4, 2),
  ct(4, 4, 4, 3),
  ct(4, 8, 5, 0),
  ct(6, 7, 5, 1),
  ct(5, 7, 5, 2),
  ct(6, 5, 5, 3),
  ct(7, 9, 6, 0),
  ct(6, 8, 6, 1),
  ct(5, 8, 6, 2),
  ct(8, 6, 6, 3),
  ct(15, 11, 7, 0),
  ct(6, 9, 7, 1),
  ct(5, 9, 7, 2),
  ct(4, 6, 7, 3),
  ct(11, 11, 8, 0),
  ct(14, 11, 8, 1),
  ct(13, 11, 8, 2),
  ct(4, 7, 8, 3),
  ct(15, 12, 9, 0),
  ct(10, 11, 9, 1),
  ct(9, 11, 9, 2),
  ct(4, 9, 9, 3),
  ct(11, 12, 10, 0),
  ct(14, 12, 10, 1),
  ct(13, 12, 10, 2),
  ct(12, 11, 10, 3),
  ct(8, 12, 11, 0),
  ct(10, 12, 11, 1),
  ct(9, 12, 11, 2),
  ct(8, 11, 11, 3),
  ct(15, 13, 12, 0),
  ct(14, 13, 12, 1),
  ct(13, 13, 12, 2),
  ct(12, 12, 12, 3),
  ct(11, 13, 13, 0),
  ct(10, 13, 13, 1),
  ct(9, 13, 13, 2),
  ct(12, 13, 13, 3),
  ct(7, 13, 14, 0),
  ct(11, 14, 14, 1),
  ct(6, 13, 14, 2),
  ct(8, 13, 14, 3),
  ct(9, 14, 15, 0),
  ct(8, 14, 15, 1),
  ct(10, 14, 15, 2),
  ct(1, 13, 15, 3),
  ct(7, 14, 16, 0),
  ct(6, 14, 16, 1),
  ct(5, 14, 16, 2),
  ct(4, 14, 16, 3),
]

///|
/// ITU-T H.264 Table 9-5: coeff_token for 4 <= nC < 8.
let coeff_token_4_7_exact : FixedArray[VlcEntry] = [
  ct(15, 4, 0, 0),
  ct(15, 6, 1, 0),
  ct(14, 4, 1, 1),
  ct(11, 6, 2, 0),
  ct(15, 5, 2, 1),
  ct(13, 4, 2, 2),
  ct(8, 6, 3, 0),
  ct(12, 5, 3, 1),
  ct(14, 5, 3, 2),
  ct(12, 4, 3, 3),
  ct(15, 7, 4, 0),
  ct(10, 5, 4, 1),
  ct(11, 5, 4, 2),
  ct(11, 4, 4, 3),
  ct(11, 7, 5, 0),
  ct(8, 5, 5, 1),
  ct(9, 5, 5, 2),
  ct(10, 4, 5, 3),
  ct(9, 7, 6, 0),
  ct(14, 6, 6, 1),
  ct(13, 6, 6, 2),
  ct(9, 4, 6, 3),
  ct(8, 7, 7, 0),
  ct(10, 6, 7, 1),
  ct(9, 6, 7, 2),
  ct(8, 4, 7, 3),
  ct(15, 8, 8, 0),
  ct(14, 7, 8, 1),
  ct(13, 7, 8, 2),
  ct(13, 5, 8, 3),
  ct(11, 8, 9, 0),
  ct(14, 8, 9, 1),
  ct(10, 7, 9, 2),
  ct(12, 6, 9, 3),
  ct(15, 9, 10, 0),
  ct(10, 8, 10, 1),
  ct(13, 8, 10, 2),
  ct(12, 7, 10, 3),
  ct(11, 9, 11, 0),
  ct(14, 9, 11, 1),
  ct(9, 8, 11, 2),
  ct(12, 8, 11, 3),
  ct(8, 9, 12, 0),
  ct(10, 9, 12, 1),
  ct(13, 9, 12, 2),
  ct(8, 8, 12, 3),
  ct(13, 10, 13, 0),
  ct(7, 9, 13, 1),
  ct(9, 9, 13, 2),
  ct(12, 9, 13, 3),
  ct(9, 10, 14, 0),
  ct(12, 10, 14, 1),
  ct(11, 10, 14, 2),
  ct(10, 10, 14, 3),
  ct(5, 10, 15, 0),
  ct(8, 10, 15, 1),
  ct(7, 10, 15, 2),
  ct(6, 10, 15, 3),
  ct(1, 10, 16, 0),
  ct(4, 10, 16, 1),
  ct(3, 10, 16, 2),
  ct(2, 10, 16, 3),
]

///|
/// Decode coeff_token (TotalCoeff, TrailingOnes) per ITU-T H.264 §9.2.1 Table 9-5.
pub fn decode_coeff_token(
  br : BitReader,
  nc : Int32,
) -> (Int32, Int32) raise H264Error {
  if nc == -1 {
    let v = vlc_decode(br, coeff_token_chroma_dc_spec)
    return (v >> 2, v & 3)
  }
  if nc >= 8 {
    let code = br.read_bits(6)
    if code == 3 {
      return (0, 0)
    }
    let tc = (code >> 2) + 1
    let t1 = code & 3
    return (tc, t1)
  }
  let table = if nc < 2 {
    coeff_token_0_1
  } else if nc < 4 {
    coeff_token_2_3
  } else {
    coeff_token_4_7_exact
  }
  let v = vlc_decode(br, table)
  (v >> 2, v & 3)
}

///|
/// ITU-T H.264 Table 9-5 Chroma DC (nC == -1, 4:2:0) exact bit patterns:
/// tc=0,t1=0: 01 (len 2)
/// tc=1,t1=0: 000111 (len 6)
/// tc=1,t1=1: 1 (len 1)
/// tc=2,t1=0: 000100 (len 6)
/// tc=2,t1=1: 000110 (len 6)
/// tc=2,t1=2: 001 (len 3)
/// tc=3,t1=0: 000011 (len 6)
/// tc=3,t1=1: 0000110 (len 7)? NO!
/// Per ITU-T H.264 Table 9-5 (2010/2017):
/// (0,0)=01 (2)
/// (1,0)=000111 (6), (1,1)=1 (1)
/// (2,0)=000100 (6), (2,1)=000110 (6), (2,2)=001 (3)
/// (3,0)=000011 (6), (3,1)=0000011 (7), (3,2)=0000010 (7), (3,3)=000101 (6)
/// (4,0)=000010 (6), (4,1)=00000011 (8), (4,2)=00000010 (8), (4,3)=0000000 (7)
/// Check Kraft sum:
/// 1/2 + 1/4 + 1/8 + 6/64 + 3/128 + 2/256 = 128+64+32+24+6+2 = 256/256 = 1.000000 EXACT!
let coeff_token_chroma_dc_spec : FixedArray[VlcEntry] = [
  ct(1, 1, 1, 1),
  ct(1, 2, 0, 0),
  ct(1, 3, 2, 2),
  ct(7, 6, 1, 0),
  ct(6, 6, 2, 1),
  ct(5, 6, 3, 3),
  ct(4, 6, 2, 0),
  ct(3, 6, 3, 0),
  ct(2, 6, 4, 0),
  ct(3, 7, 3, 1),
  ct(2, 7, 3, 2),
  ct(0, 7, 4, 3),
  ct(3, 8, 4, 1),
  ct(2, 8, 4, 2),
]

///|
/// ITU-T H.264 Table 9-7 / 9-8: total_zeros tables for 4x4 blocks (index = total_coeff - 1, 0..14).
let total_zeros_4x4 : FixedArray[FixedArray[VlcEntry]] = [
  // total_coeff = 1
  [
    ve(1, 1, 0),
    ve(3, 3, 1),
    ve(2, 3, 2),
    ve(3, 4, 3),
    ve(2, 4, 4),
    ve(3, 5, 5),
    ve(2, 5, 6),
    ve(3, 6, 7),
    ve(2, 6, 8),
    ve(3, 7, 9),
    ve(2, 7, 10),
    ve(3, 8, 11),
    ve(2, 8, 12),
    ve(3, 9, 13),
    ve(2, 9, 14),
    ve(1, 9, 15),
  ],
  // total_coeff = 2
  [
    ve(7, 3, 0),
    ve(6, 3, 1),
    ve(5, 3, 2),
    ve(4, 3, 3),
    ve(3, 3, 4),
    ve(5, 4, 5),
    ve(4, 4, 6),
    ve(3, 4, 7),
    ve(2, 4, 8),
    ve(3, 5, 9),
    ve(2, 5, 10),
    ve(3, 6, 11),
    ve(2, 6, 12),
    ve(1, 6, 13),
    ve(0, 6, 14),
  ],
  // total_coeff = 3
  [
    ve(5, 4, 0),
    ve(7, 3, 1),
    ve(6, 3, 2),
    ve(5, 3, 3),
    ve(4, 4, 4),
    ve(3, 4, 5),
    ve(4, 3, 6),
    ve(3, 3, 7),
    ve(2, 4, 8),
    ve(3, 5, 9),
    ve(2, 5, 10),
    ve(1, 6, 11),
    ve(1, 5, 12),
    ve(0, 6, 13),
  ],
  // total_coeff = 4
  [
    ve(3, 5, 0),
    ve(7, 3, 1),
    ve(5, 4, 2),
    ve(4, 4, 3),
    ve(6, 3, 4),
    ve(5, 3, 5),
    ve(4, 3, 6),
    ve(3, 4, 7),
    ve(3, 3, 8),
    ve(2, 4, 9),
    ve(2, 5, 10),
    ve(1, 5, 11),
    ve(0, 5, 12),
  ],
  // total_coeff = 5
  [
    ve(5, 4, 0),
    ve(4, 4, 1),
    ve(3, 4, 2),
    ve(7, 3, 3),
    ve(6, 3, 4),
    ve(5, 3, 5),
    ve(4, 3, 6),
    ve(3, 3, 7),
    ve(2, 4, 8),
    ve(1, 5, 9),
    ve(1, 4, 10),
    ve(0, 5, 11),
  ],
  // total_coeff = 6
  [
    ve(1, 6, 0),
    ve(1, 5, 1),
    ve(7, 3, 2),
    ve(6, 3, 3),
    ve(5, 3, 4),
    ve(4, 3, 5),
    ve(3, 3, 6),
    ve(2, 3, 7),
    ve(1, 4, 8),
    ve(1, 3, 9),
    ve(0, 6, 10),
  ],
  // total_coeff = 7
  [
    ve(1, 6, 0),
    ve(1, 5, 1),
    ve(5, 3, 2),
    ve(4, 3, 3),
    ve(3, 3, 4),
    ve(3, 2, 5),
    ve(2, 3, 6),
    ve(1, 4, 7),
    ve(1, 3, 8),
    ve(0, 6, 9),
  ],
  // total_coeff = 8
  [
    ve(1, 6, 0),
    ve(1, 4, 1),
    ve(1, 5, 2),
    ve(3, 3, 3),
    ve(3, 2, 4),
    ve(2, 2, 5),
    ve(2, 3, 6),
    ve(1, 3, 7),
    ve(0, 6, 8),
  ],
  // total_coeff = 9
  [
    ve(1, 6, 0),
    ve(0, 6, 1),
    ve(1, 4, 2),
    ve(3, 2, 3),
    ve(2, 2, 4),
    ve(1, 3, 5),
    ve(1, 2, 6),
    ve(1, 5, 7),
  ],
  // total_coeff = 10
  [
    ve(1, 5, 0),
    ve(0, 5, 1),
    ve(1, 3, 2),
    ve(3, 2, 3),
    ve(2, 2, 4),
    ve(1, 2, 5),
    ve(1, 4, 6),
  ],
  // total_coeff = 11
  [ve(0, 4, 0), ve(1, 4, 1), ve(1, 3, 2), ve(2, 3, 3), ve(1, 1, 4), ve(3, 3, 5)],
  // total_coeff = 12
  [ve(0, 4, 0), ve(1, 4, 1), ve(1, 2, 2), ve(1, 1, 3), ve(1, 3, 4)],
  // total_coeff = 13
  [ve(0, 3, 0), ve(1, 3, 1), ve(1, 1, 2), ve(1, 2, 3)],
  // total_coeff = 14
  [ve(0, 2, 0), ve(1, 2, 1), ve(1, 1, 2)],
  // total_coeff = 15
  [ve(0, 1, 0), ve(1, 1, 1)],
]

///|
/// ITU-T H.264 Table 9-9(a): total_zeros for Chroma DC 2x2 (index = total_coeff - 1, 0..2).
let total_zeros_chroma_dc : FixedArray[FixedArray[VlcEntry]] = [
  // total_coeff = 1
  [ve(1, 1, 0), ve(1, 2, 1), ve(1, 3, 2), ve(0, 3, 3)],
  // total_coeff = 2
  [ve(1, 1, 0), ve(1, 2, 1), ve(0, 2, 2)],
  // total_coeff = 3
  [ve(1, 1, 0), ve(0, 1, 1)],
]

///|
/// ITU-T H.264 Table 9-10: run_before for zerosLeft = 1..6.
let run_before_tables : FixedArray[FixedArray[VlcEntry]] = [
  // zerosLeft = 1
  [ve(1, 1, 0), ve(0, 1, 1)],
  // zerosLeft = 2
  [ve(1, 1, 0), ve(1, 2, 1), ve(0, 2, 2)],
  // zerosLeft = 3
  [ve(3, 2, 0), ve(2, 2, 1), ve(1, 2, 2), ve(0, 2, 3)],
  // zerosLeft = 4
  [ve(3, 2, 0), ve(2, 2, 1), ve(1, 2, 2), ve(1, 3, 3), ve(0, 3, 4)],
  // zerosLeft = 5
  [ve(3, 2, 0), ve(2, 2, 1), ve(3, 3, 2), ve(2, 3, 3), ve(1, 3, 4), ve(0, 3, 5)],
  // zerosLeft = 6
  [
    ve(3, 2, 0),
    ve(0, 3, 1),
    ve(1, 3, 2),
    ve(3, 3, 3),
    ve(2, 3, 4),
    ve(5, 3, 5),
    ve(4, 3, 6),
  ],
]

///|
fn decode_run_before(
  br : BitReader,
  zeros_left : Int32,
) -> Int32 raise H264Error {
  if zeros_left <= 6 {
    return vlc_decode(br, run_before_tables[zeros_left - 1])
  }
  // zerosLeft > 6: 3-bit code for 0..6, or unary 0s + 1 for >= 7
  let p = br.peek_bits(3)
  if p != 0 {
    br.skip_bits(3)
    return 7 - p
  }
  br.skip_bits(3)
  let mut run = 7
  while br.read_bit() == 0 {
    run += 1
    if run > 15 {
      raise H264Error::InvalidSyntax("run_before overflow")
    }
  }
  run
}

///|
/// Decode a residual block via CAVLC (ITU-T H.264 §9.2) into `out` (in raster order for 4x4,
/// or 0..3 for 2x2 Chroma DC). Returns `total_coeff`.
/// - `start_idx`: 0 for full 16-coeff or DC block, 1 for AC-only (15 coeffs).
/// - `max_num_coeff`: 16, 15, or 4 (Chroma DC).
/// - `nc`: context count (-1 for Chroma DC 2x2, or >= 0 for 4x4 luma/chroma).
pub fn decode_cavlc_block(
  br : BitReader,
  out : FixedArray[Int32],
  start_idx : Int32,
  max_num_coeff : Int32,
  nc : Int32,
) -> Int32 raise H264Error {
  let (total_coeff, trailing_ones) = decode_coeff_token(br, nc)
  if total_coeff == 0 {
    return 0
  }
  if total_coeff > max_num_coeff {
    raise H264Error::InvalidSyntax(
      "CAVLC total_coeff=\{total_coeff} exceeds max=\{max_num_coeff}",
    )
  }
  let levels = FixedArray::make(16, 0)
  // 1. Trailing ones signs
  for i = 0; i < trailing_ones; i = i + 1 {
    let sign = br.read_bit()
    levels[i] = if sign == 0 { 1 } else { -1 }
  }
  // 2. Remaining non-zero levels
  let mut suffix_length = if total_coeff > 10 && trailing_ones < 3 {
    1
  } else {
    0
  }
  for i = trailing_ones; i < total_coeff; i = i + 1 {
    let mut level_prefix = 0
    while br.read_bit() == 0 {
      level_prefix += 1
      if level_prefix > 31 {
        raise H264Error::InvalidSyntax("CAVLC level_prefix overflow")
      }
    }
    let level_suffix_size = if level_prefix == 14 && suffix_length == 0 {
      4
    } else if level_prefix >= 15 {
      level_prefix - 3
    } else {
      suffix_length
    }
    let level_suffix = if level_suffix_size > 0 {
      br.read_bits(level_suffix_size)
    } else {
      0
    }
    let prefix_clamped = if level_prefix < 15 { level_prefix } else { 15 }
    let mut level_code = (prefix_clamped << suffix_length) + level_suffix
    if level_prefix >= 15 && suffix_length == 0 {
      level_code += 15
    }
    if level_prefix >= 16 {
      level_code += (1 << (level_prefix - 3)) - 4096
    }
    if i == trailing_ones && trailing_ones < 3 {
      level_code += 2
    }
    let level = if (level_code & 1) == 0 {
      (level_code + 2) >> 1
    } else {
      (-level_code - 1) >> 1
    }
    levels[i] = level
    if suffix_length == 0 {
      suffix_length = 1
    }
    if abs_int(level) > 3 << (suffix_length - 1) && suffix_length < 6 {
      suffix_length += 1
    }
  }
  // 3. total_zeros
  let mut zeros_left = 0
  if total_coeff < max_num_coeff {
    if max_num_coeff == 4 {
      zeros_left = vlc_decode(br, total_zeros_chroma_dc[total_coeff - 1])
    } else {
      zeros_left = vlc_decode(br, total_zeros_4x4[total_coeff - 1])
    }
  }
  // 4. run_before
  let runs = FixedArray::make(16, 0)
  for i = 0; i < total_coeff - 1; i = i + 1 {
    if zeros_left > 0 {
      let run = decode_run_before(br, zeros_left)
      runs[i] = run
      zeros_left -= run
      if zeros_left < 0 {
        raise H264Error::InvalidSyntax("CAVLC zeros_left became negative")
      }
    } else {
      runs[i] = 0
    }
  }
  runs[total_coeff - 1] = zeros_left
  // 5. Reconstruct in scan order and map to raster order
  let mut coeff_num = -1
  let mut i = total_coeff - 1
  while i >= 0 {
    coeff_num += runs[i] + 1
    let scan_idx = start_idx + coeff_num
    if max_num_coeff == 4 {
      if scan_idx < 0 || scan_idx >= 4 {
        raise H264Error::InvalidSyntax(
          "CAVLC chroma DC scan_idx out of range: \{scan_idx}",
        )
      }
      out[scan_idx] = levels[i]
    } else {
      if scan_idx < 0 || scan_idx >= 16 {
        raise H264Error::InvalidSyntax(
          "CAVLC 4x4 scan_idx out of range: \{scan_idx}",
        )
      }
      out[zigzag_4x4[scan_idx]] = levels[i]
    }
    i -= 1
  }
  total_coeff
}

///|
fn check_vlc_kraft(
  table : FixedArray[VlcEntry],
  expected_num : Int32,
  max_bits : Int32,
) -> Bool {
  let mut sum = 0
  for i = 0; i < table.length(); i = i + 1 {
    let e = table[i]
    sum += 1 << (max_bits - e.len)
    for j = i + 1; j < table.length(); j = j + 1 {
      let o = table[j]
      let min_l = if e.len < o.len { e.len } else { o.len }
      let p1 = e.code >> (e.len - min_l)
      let p2 = o.code >> (o.len - min_l)
      if p1 == p2 {
        return false
      }
    }
  }
  sum == expected_num
}

///|
/// Self-check that all built-in CAVLC VLC tables are prefix-free and satisfy exact Kraft sums.
pub fn verify_cavlc_tables_integrity() -> Bool {
  if !check_vlc_kraft(coeff_token_0_1, 65534, 16) {
    return false
  }
  if !check_vlc_kraft(coeff_token_2_3, 16382, 14) {
    return false
  }
  if !check_vlc_kraft(coeff_token_4_7_exact, 1023, 10) {
    return false
  }
  if !check_vlc_kraft(coeff_token_chroma_dc_spec, 256, 8) {
    return false
  }
  if !check_vlc_kraft(total_zeros_4x4[0], 511, 9) {
    return false
  }
  for tc = 2; tc <= 15; tc = tc + 1 {
    if !check_vlc_kraft(total_zeros_4x4[tc - 1], 1 << 9, 9) {
      return false
    }
  }
  for tc = 1; tc <= 3; tc = tc + 1 {
    if !check_vlc_kraft(total_zeros_chroma_dc[tc - 1], 1 << 4, 4) {
      return false
    }
  }
  for zl = 1; zl <= 6; zl = zl + 1 {
    if !check_vlc_kraft(run_before_tables[zl - 1], 1 << 4, 4) {
      return false
    }
  }
  true
}
