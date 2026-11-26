///|
/// Parsed H.264 Network Abstraction Layer Unit (NALU).
pub struct NalUnit {
  nal_ref_idc : Int32
  nal_unit_type : Int32
  byte_offset : Int32
  raw_size : Int32
  rbsp : Bytes
}

///|
/// Return a human-readable name for an H.264 nal_unit_type.
pub fn nal_unit_type_name(nal_type : Int32) -> String {
  match nal_type {
    1 => "Slice (non-IDR)"
    2 => "Slice Data Partition A"
    3 => "Slice Data Partition B"
    4 => "Slice Data Partition C"
    5 => "IDR Slice"
    6 => "SEI"
    7 => "SPS"
    8 => "PPS"
    9 => "AUD"
    10 => "End of Sequence"
    11 => "End of Stream"
    12 => "Filler Data"
    _ => "NALU(\{nal_type})"
  }
}

///|
/// Remove Emulation Prevention Bytes (`0x00 0x00 0x03`) from a raw NALU body (excluding header byte)
/// to produce the Raw Byte Sequence Payload (RBSP).
pub fn ebsp_to_rbsp(data : Bytes, start : Int32, end_ : Int32) -> Bytes {
  let buf = Buffer(size_hint=end_ - start)
  let mut i = start
  let mut zeros = 0
  while i < end_ {
    let b = data[i]
    if zeros >= 2 && b == b'\x03' {
      zeros = 0
      i += 1
      continue
    }
    buf.write_byte(b)
    if b == b'\x00' {
      zeros += 1
    } else {
      zeros = 0
    }
    i += 1
  }
  buf.to_bytes()
}

///|
/// Extract all NAL units from an Annex B byte stream (`0x000001` / `0x00000001` start codes).
pub fn extract_annexb_nalus(data : Bytes) -> Array[NalUnit] {
  let n = data.length()
  let starts : Array[Int32] = []
  let prefix_lens : Array[Int32] = []
  let mut i = 0
  while i + 2 < n {
    if data[i] == b'\x00' && data[i + 1] == b'\x00' {
      if data[i + 2] == b'\x01' {
        starts.push(i + 3)
        prefix_lens.push(3)
        i += 3
        continue
      } else if i + 3 < n && data[i + 2] == b'\x00' && data[i + 3] == b'\x01' {
        starts.push(i + 4)
        prefix_lens.push(4)
        i += 4
        continue
      }
    }
    i += 1
  }
  let nalus : Array[NalUnit] = []
  for idx = 0; idx < starts.length(); idx = idx + 1 {
    let s = starts[idx]
    let mut e = if idx + 1 < starts.length() {
      starts[idx + 1] - prefix_lens[idx + 1]
    } else {
      n
    }
    // Trim trailing zero padding before the next start code (Annex B trailing_zero_8bits)
    while e > s && data[e - 1] == b'\x00' {
      e -= 1
    }
    if s >= e {
      continue
    }
    let header = data[s].to_int()
    let nal_ref_idc = (header >> 5) & 0x03
    let nal_unit_type = header & 0x1F
    let rbsp = ebsp_to_rbsp(data, s + 1, e)
    nalus.push({
      nal_ref_idc,
      nal_unit_type,
      byte_offset: s - prefix_lens[idx],
      raw_size: e - s,
      rbsp,
    })
  }
  nalus
}

///|
/// Extract NAL units from an AVCC length-prefixed buffer (`length_size` is typically 4).
pub fn extract_avcc_nalus(
  data : Bytes,
  length_size~ : Int32 = 4,
) -> Array[NalUnit] raise H264Error {
  if length_size < 1 || length_size > 4 {
    raise H264Error::InvalidSyntax("AVCC length_size must be 1..4")
  }
  let nalus : Array[NalUnit] = []
  let n = data.length()
  let mut pos = 0
  while pos + length_size <= n {
    let mut size = 0
    for k = 0; k < length_size; k = k + 1 {
      size = (size << 8) | data[pos + k].to_int()
    }
    let start = pos + length_size
    let end_ = start + size
    if size <= 0 || end_ > n {
      raise H264Error::UnexpectedEof("AVCC NALU length \{size} exceeds buffer")
    }
    let header = data[start].to_int()
    let nal_ref_idc = (header >> 5) & 0x03
    let nal_unit_type = header & 0x1F
    let rbsp = ebsp_to_rbsp(data, start + 1, end_)
    nalus.push({
      nal_ref_idc,
      nal_unit_type,
      byte_offset: pos,
      raw_size: size,
      rbsp,
    })
    pos = end_
  }
  nalus
}
