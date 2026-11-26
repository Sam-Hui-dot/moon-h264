///|
/// Errors raised while parsing or decoding an H.264/AVC bitstream.
#derive(Debug, Eq)
pub(all) suberror H264Error {
  UnexpectedEof(String)
  InvalidSyntax(String)
  UnsupportedProfile(String)
  UnsupportedFeature(String)
  MissingParameterSet(String)
}

///|
pub extend H264Error with @debug.Debug::{to_repr}

///|
pub extend H264Error with Eq::{not_equal, equal}

///|
/// Format an H264Error or generic Error into a human-readable string.
pub fn error_message(err : Error) -> String {
  match err {
    H264Error::UnexpectedEof(m) => "UnexpectedEof: \{m}"
    H264Error::InvalidSyntax(m) => "InvalidSyntax: \{m}"
    H264Error::UnsupportedProfile(m) => "UnsupportedProfile: \{m}"
    H264Error::UnsupportedFeature(m) => "UnsupportedFeature: \{m}"
    H264Error::MissingParameterSet(m) => "MissingParameterSet: \{m}"
    other => other.to_string()
  }
}

///|
/// Big-endian bit reader over an RBSP byte buffer with Exp-Golomb decoding.
pub struct BitReader {
  data : Bytes
  mut bit_pos : Int32
  total_bits : Int32
  stop_bit_pos : Int32
}

///|
/// Create a new BitReader over RBSP bytes, precomputing the RBSP stop-one bit position.
pub fn BitReader::new(data : Bytes) -> BitReader {
  let total_bits = data.length() * 8
  // Locate the last non-zero byte and its lowest set bit (rbsp_stop_one_bit).
  let mut last_nz = data.length() - 1
  while last_nz >= 0 && data[last_nz] == b'\x00' {
    last_nz -= 1
  }
  let mut stop_bit_pos = 0
  if last_nz >= 0 {
    let b = data[last_nz].to_int()
    let mut bit_idx = 7
    while bit_idx >= 0 {
      if ((b >> (7 - bit_idx)) & 1) != 0 {
        stop_bit_pos = last_nz * 8 + bit_idx
        break
      }
      bit_idx -= 1
    }
  }
  { data, bit_pos: 0, total_bits, stop_bit_pos, }
}

///|
pub fn BitReader::position(self : BitReader) -> Int32 {
  self.bit_pos
}

///|
pub fn BitReader::remaining_bits(self : BitReader) -> Int32 {
  self.total_bits - self.bit_pos
}

///|
pub fn BitReader::is_byte_aligned(self : BitReader) -> Bool {
  (self.bit_pos & 7) == 0
}

///|
pub fn BitReader::align_to_byte(self : BitReader) -> Unit {
  let rem = self.bit_pos & 7
  if rem != 0 {
    self.bit_pos += 8 - rem
  }
}

///|
/// ITU-T H.264 §7.2 more_rbsp_data().
pub fn BitReader::more_rbsp_data(self : BitReader) -> Bool {
  self.bit_pos < self.stop_bit_pos
}

///|
/// Read a single bit (0 or 1).
pub fn BitReader::read_bit(self : BitReader) -> Int32 raise H264Error {
  if self.bit_pos >= self.total_bits {
    raise H264Error::UnexpectedEof("read_bit at bit \{self.bit_pos}")
  }
  let byte_idx = self.bit_pos >> 3
  let shift = 7 - (self.bit_pos & 7)
  self.bit_pos += 1
  (self.data[byte_idx].to_int() >> shift) & 1
}

///|
/// Read `n` bits (0 <= n <= 31) as an unsigned integer.
pub fn BitReader::read_bits(
  self : BitReader,
  n : Int32,
) -> Int32 raise H264Error {
  if n == 0 {
    return 0
  }
  if n < 0 || n > 31 {
    raise H264Error::InvalidSyntax("read_bits invalid count \{n}")
  }
  if self.bit_pos + n > self.total_bits {
    raise H264Error::UnexpectedEof(
      "read_bits(\{n}) at bit \{self.bit_pos}/\{self.total_bits}",
    )
  }
  let mut val = 0
  let mut rem = n
  while rem > 0 {
    let byte_idx = self.bit_pos >> 3
    let bit_off = self.bit_pos & 7
    let avail = 8 - bit_off
    let take = if rem < avail { rem } else { avail }
    let shift = avail - take
    let mask = (1 << take) - 1
    let chunk = (self.data[byte_idx].to_int() >> shift) & mask
    val = (val << take) | chunk
    self.bit_pos += take
    rem -= take
  }
  val
}

///|
/// Peek `n` bits (0 <= n <= 31), zero-padding if fewer than `n` bits remain.
pub fn BitReader::peek_bits(self : BitReader, n : Int32) -> Int32 {
  let saved = self.bit_pos
  let avail = self.total_bits - self.bit_pos
  let to_read = if n <= avail { n } else if avail > 0 { avail } else { 0 }
  let mut val = 0
  for i = 0; i < to_read; i = i + 1 {
    let pos = saved + i
    let b = (self.data[pos >> 3].to_int() >> (7 - (pos & 7))) & 1
    val = (val << 1) | b
  }
  if to_read < n {
    val = val << (n - to_read)
  }
  val
}

///|
pub fn BitReader::skip_bits(
  self : BitReader,
  n : Int32,
) -> Unit raise H264Error {
  if self.bit_pos + n > self.total_bits {
    raise H264Error::UnexpectedEof("skip_bits(\{n}) at bit \{self.bit_pos}")
  }
  self.bit_pos += n
}

///|
/// Read a raw aligned byte (used by I_PCM).
pub fn BitReader::read_aligned_byte(self : BitReader) -> Int32 raise H264Error {
  if self.bit_pos + 8 > self.total_bits {
    raise H264Error::UnexpectedEof("read_aligned_byte at bit \{self.bit_pos}")
  }
  let b = self.data[self.bit_pos >> 3].to_int()
  self.bit_pos += 8
  b
}

///|
/// Unsigned Exp-Golomb code ue(v) (ITU-T H.264 §9.1).
pub fn BitReader::read_ue(self : BitReader) -> Int32 raise H264Error {
  let mut leading_zeros = 0
  while self.read_bit() == 0 {
    leading_zeros += 1
    if leading_zeros > 31 {
      raise H264Error::InvalidSyntax("ue(v) leading zeros overflow")
    }
  }
  if leading_zeros == 0 {
    0
  } else {
    let suffix = self.read_bits(leading_zeros)
    (1 << leading_zeros) - 1 + suffix
  }
}

///|
/// Signed Exp-Golomb code se(v) (ITU-T H.264 §9.1.1).
pub fn BitReader::read_se(self : BitReader) -> Int32 raise H264Error {
  let code_num = self.read_ue()
  if code_num == 0 {
    0
  } else if (code_num & 1) == 1 {
    (code_num + 1) >> 1
  } else {
    -(code_num >> 1)
  }
}

///|
/// Truncated Exp-Golomb code te(v) (ITU-T H.264 §9.1).
pub fn BitReader::read_te(
  self : BitReader,
  max_val : Int32,
) -> Int32 raise H264Error {
  if max_val <= 0 {
    0
  } else if max_val == 1 {
    1 - self.read_bit()
  } else {
    self.read_ue()
  }
}

///|
/// ITU-T H.264 Table 9-4: coded_block_pattern mapping for Intra_4x4 (4:2:0).
let cbp_intra_table : FixedArray[Int32] = [
  47, 31, 15, 0, 23, 27, 29, 30, 7, 11, 13, 14, 39, 43, 45, 46, 16, 3, 5, 10, 12,
  19, 21, 26, 28, 35, 37, 42, 44, 1, 2, 4, 8, 17, 18, 20, 24, 6, 9, 22, 25, 32, 33,
  34, 36, 40, 38, 41,
]

///|
/// ITU-T H.264 Table 9-4: coded_block_pattern mapping for Inter (4:2:0).
let cbp_inter_table : FixedArray[Int32] = [
  0, 16, 1, 2, 4, 8, 32, 3, 5, 10, 12, 15, 47, 7, 11, 13, 14, 6, 9, 31, 35, 37, 42,
  44, 33, 34, 36, 40, 39, 43, 45, 46, 17, 18, 20, 24, 19, 21, 26, 28, 23, 27, 29,
  30, 22, 25, 38, 41,
]

///|
/// Mapped Exp-Golomb code me(v) for 4:2:0 coded_block_pattern.
pub fn BitReader::read_me(
  self : BitReader,
  is_intra : Bool,
) -> Int32 raise H264Error {
  let code_num = self.read_ue()
  if code_num < 0 || code_num >= 48 {
    raise H264Error::InvalidSyntax("me(v) code_num out of range: \{code_num}")
  }
  if is_intra {
    cbp_intra_table[code_num]
  } else {
    cbp_inter_table[code_num]
  }
}

///|
fn clamp_int(v : Int32, lo : Int32, hi : Int32) -> Int32 {
  if v < lo {
    lo
  } else if v > hi {
    hi
  } else {
    v
  }
}

///|
fn clip_u8(v : Int32) -> Int32 {
  if v < 0 {
    0
  } else if v > 255 {
    255
  } else {
    v
  }
}

///|
fn abs_int(v : Int32) -> Int32 {
  if v < 0 {
    -v
  } else {
    v
  }
}
