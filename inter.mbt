///|
fn median3(a : Int32, b : Int32, c : Int32) -> Int32 {
  if a > b {
    if b > c {
      b
    } else if a > c {
      c
    } else {
      a
    }
  } else if a > c {
    a
  } else if b > c {
    c
  } else {
    b
  }
}

///|
fn sample_clamped(
  plane : FixedArray[Byte],
  w : Int32,
  h : Int32,
  x : Int32,
  y : Int32,
) -> Int32 {
  let cx = clamp_int(x, 0, w - 1)
  let cy = clamp_int(y, 0, h - 1)
  plane[cy * w + cx].to_int()
}

///|
fn fir6_h(
  plane : FixedArray[Byte],
  w : Int32,
  h : Int32,
  x : Int32,
  y : Int32,
) -> Int32 {
  let cy = clamp_int(y, 0, h - 1)
  let row = cy * w
  let s0 = plane[row + clamp_int(x - 2, 0, w - 1)].to_int()
  let s1 = plane[row + clamp_int(x - 1, 0, w - 1)].to_int()
  let s2 = plane[row + clamp_int(x, 0, w - 1)].to_int()
  let s3 = plane[row + clamp_int(x + 1, 0, w - 1)].to_int()
  let s4 = plane[row + clamp_int(x + 2, 0, w - 1)].to_int()
  let s5 = plane[row + clamp_int(x + 3, 0, w - 1)].to_int()
  s0 - 5 * s1 + 20 * s2 + 20 * s3 - 5 * s4 + s5
}

///|
fn fir6_v(
  plane : FixedArray[Byte],
  w : Int32,
  h : Int32,
  x : Int32,
  y : Int32,
) -> Int32 {
  let cx = clamp_int(x, 0, w - 1)
  let s0 = plane[clamp_int(y - 2, 0, h - 1) * w + cx].to_int()
  let s1 = plane[clamp_int(y - 1, 0, h - 1) * w + cx].to_int()
  let s2 = plane[clamp_int(y, 0, h - 1) * w + cx].to_int()
  let s3 = plane[clamp_int(y + 1, 0, h - 1) * w + cx].to_int()
  let s4 = plane[clamp_int(y + 2, 0, h - 1) * w + cx].to_int()
  let s5 = plane[clamp_int(y + 3, 0, h - 1) * w + cx].to_int()
  s0 - 5 * s1 + 20 * s2 + 20 * s3 - 5 * s4 + s5
}

///|
fn half_h(
  plane : FixedArray[Byte],
  w : Int32,
  h : Int32,
  x : Int32,
  y : Int32,
) -> Int32 {
  clip_u8((fir6_h(plane, w, h, x, y) + 16) >> 5)
}

///|
fn half_v(
  plane : FixedArray[Byte],
  w : Int32,
  h : Int32,
  x : Int32,
  y : Int32,
) -> Int32 {
  clip_u8((fir6_v(plane, w, h, x, y) + 16) >> 5)
}

///|
fn half_j(
  plane : FixedArray[Byte],
  w : Int32,
  h : Int32,
  x : Int32,
  y : Int32,
) -> Int32 {
  let c0 = fir6_h(plane, w, h, x, y - 2)
  let c1 = fir6_h(plane, w, h, x, y - 1)
  let c2 = fir6_h(plane, w, h, x, y)
  let c3 = fir6_h(plane, w, h, x, y + 1)
  let c4 = fir6_h(plane, w, h, x, y + 2)
  let c5 = fir6_h(plane, w, h, x, y + 3)
  let j = c0 - 5 * c1 + 20 * c2 + 20 * c3 - 5 * c4 + c5
  clip_u8((j + 512) >> 10)
}

///|
/// ITU-T H.264 §8.4.2.2.1 Luma 1/4-pixel motion compensation for a `bw x bh` block.
pub fn mc_luma_block(
  ref_y : FixedArray[Byte],
  dst_y : FixedArray[Byte],
  pic_w : Int32,
  pic_h : Int32,
  x0 : Int32,
  y0 : Int32,
  bw : Int32,
  bh : Int32,
  mvx : Int32,
  mvy : Int32,
) -> Unit {
  let x_int = x0 + (mvx >> 2)
  let y_int = y0 + (mvy >> 2)
  let dx = mvx & 3
  let dy = mvy & 3
  // Fast path for integer-pel MVs
  if dx == 0 && dy == 0 {
    for r = 0; r < bh; r = r + 1 {
      let sy = clamp_int(y_int + r, 0, pic_h - 1) * pic_w
      let dy_row = (y0 + r) * pic_w + x0
      for c = 0; c < bw; c = c + 1 {
        let sx = clamp_int(x_int + c, 0, pic_w - 1)
        dst_y[dy_row + c] = ref_y[sy + sx]
      }
    }
    return
  }
  for r = 0; r < bh; r = r + 1 {
    let ry = y_int + r
    let dst_row = (y0 + r) * pic_w + x0
    for c = 0; c < bw; c = c + 1 {
      let rx = x_int + c
      let p = match (dx, dy) {
        (2, 0) => half_h(ref_y, pic_w, pic_h, rx, ry)
        (0, 2) => half_v(ref_y, pic_w, pic_h, rx, ry)
        (2, 2) => half_j(ref_y, pic_w, pic_h, rx, ry)
        (1, 0) =>
          (
            sample_clamped(ref_y, pic_w, pic_h, rx, ry) +
            half_h(ref_y, pic_w, pic_h, rx, ry) +
            1
          ) >>
          1
        (3, 0) =>
          (
            half_h(ref_y, pic_w, pic_h, rx, ry) +
            sample_clamped(ref_y, pic_w, pic_h, rx + 1, ry) +
            1
          ) >>
          1
        (0, 1) =>
          (
            sample_clamped(ref_y, pic_w, pic_h, rx, ry) +
            half_v(ref_y, pic_w, pic_h, rx, ry) +
            1
          ) >>
          1
        (0, 3) =>
          (
            half_v(ref_y, pic_w, pic_h, rx, ry) +
            sample_clamped(ref_y, pic_w, pic_h, rx, ry + 1) +
            1
          ) >>
          1
        (1, 2) =>
          (
            half_v(ref_y, pic_w, pic_h, rx, ry) +
            half_j(ref_y, pic_w, pic_h, rx, ry) +
            1
          ) >>
          1
        (3, 2) =>
          (
            half_j(ref_y, pic_w, pic_h, rx, ry) +
            half_v(ref_y, pic_w, pic_h, rx + 1, ry) +
            1
          ) >>
          1
        (2, 1) =>
          (
            half_h(ref_y, pic_w, pic_h, rx, ry) +
            half_j(ref_y, pic_w, pic_h, rx, ry) +
            1
          ) >>
          1
        (2, 3) =>
          (
            half_j(ref_y, pic_w, pic_h, rx, ry) +
            half_h(ref_y, pic_w, pic_h, rx, ry + 1) +
            1
          ) >>
          1
        (1, 1) =>
          (
            half_h(ref_y, pic_w, pic_h, rx, ry) +
            half_v(ref_y, pic_w, pic_h, rx, ry) +
            1
          ) >>
          1
        (3, 1) =>
          (
            half_h(ref_y, pic_w, pic_h, rx, ry) +
            half_v(ref_y, pic_w, pic_h, rx + 1, ry) +
            1
          ) >>
          1
        (1, 3) =>
          (
            half_v(ref_y, pic_w, pic_h, rx, ry) +
            half_h(ref_y, pic_w, pic_h, rx, ry + 1) +
            1
          ) >>
          1
        _ =>
          // (3, 3)
          (
            half_v(ref_y, pic_w, pic_h, rx + 1, ry) +
            half_h(ref_y, pic_w, pic_h, rx, ry + 1) +
            1
          ) >>
          1
      }
      dst_y[dst_row + c] = p.to_byte()
    }
  }
}

///|
/// ITU-T H.264 §8.4.2.2.2 Chroma 1/8-pixel bilinear motion compensation for a `bw x bh` block.
pub fn mc_chroma_block(
  ref_c : FixedArray[Byte],
  dst_c : FixedArray[Byte],
  cw : Int32,
  ch : Int32,
  x0 : Int32,
  y0 : Int32,
  bw : Int32,
  bh : Int32,
  mvx : Int32,
  mvy : Int32,
) -> Unit {
  let x_int = x0 + (mvx >> 3)
  let y_int = y0 + (mvy >> 3)
  let dx = mvx & 7
  let dy = mvy & 7
  let w00 = (8 - dx) * (8 - dy)
  let w01 = dx * (8 - dy)
  let w10 = (8 - dx) * dy
  let w11 = dx * dy
  for r = 0; r < bh; r = r + 1 {
    let sy0 = clamp_int(y_int + r, 0, ch - 1) * cw
    let sy1 = clamp_int(y_int + r + 1, 0, ch - 1) * cw
    let dst_row = (y0 + r) * cw + x0
    for c = 0; c < bw; c = c + 1 {
      let sx0 = clamp_int(x_int + c, 0, cw - 1)
      let sx1 = clamp_int(x_int + c + 1, 0, cw - 1)
      let a = ref_c[sy0 + sx0].to_int()
      let b = ref_c[sy0 + sx1].to_int()
      let cc = ref_c[sy1 + sx0].to_int()
      let d = ref_c[sy1 + sx1].to_int()
      dst_c[dst_row + c] = ((w00 * a + w01 * b + w10 * cc + w11 * d + 32) >> 6).to_byte()
    }
  }
}

///|
/// Compute ITU-T H.264 §8.4.1.3 median MV predictor for a partition at 4x4 grid coords `(bx, by)`
/// with width `bw4` (in 4x4 blocks).
/// `part_mode`: 0=normal/16x16/8x8/etc, 1=16x8_top, 2=16x8_bot, 3=8x16_left, 4=8x16_right.
pub fn predict_mv_l0(
  mv_x : FixedArray[Int32],
  mv_y : FixedArray[Int32],
  ref_idx : FixedArray[Int32],
  mb_slice_id : FixedArray[Int32],
  mb_w : Int32,
  cur_slice_id : Int32,
  bx : Int32,
  by : Int32,
  bw4 : Int32,
  cur_ref : Int32,
  part_mode : Int32,
) -> (Int32, Int32) {
  let stride4 = mb_w * 4
  let cur_mb_y = by >> 2
  // Helper: check if 4x4 block (nx, ny) is inside frame and same slice
  fn is_avail(nx : Int32, ny : Int32) -> Bool {
    if nx < 0 || ny < 0 || nx >= stride4 {
      return false
    }
    let n_mb_idx = (ny >> 2) * mb_w + (nx >> 2)
    mb_slice_id[n_mb_idx] == cur_slice_id
  }

  let ax = bx - 1
  let ay = by
  let avail_a = is_avail(ax, ay)
  let bx_n = bx
  let by_n = by - 1
  let avail_b = is_avail(bx_n, by_n)
  // C is at (bx + bw4, by - 1); check whether C has already been decoded in scan order!
  let cx = bx + bw4
  let cy = by - 1
  let c_decoded = if cy < 0 || cx >= stride4 {
    false
  } else {
    let c_mb_x = cx >> 2
    let c_mb_y = cy >> 2
    if c_mb_y < cur_mb_y {
      true
    } else if c_mb_y > cur_mb_y {
      false
    } else if c_mb_x > bx >> 2 {
      false // next MB in same row is not yet decoded
    } else {
      // Same MB: check if 4x4 block (cx&3, cy&3) is decoded before (bx&3, by&3)
      // In H.264 8x8/4x4 scan order, a block at (lx, ly) with ly == (by&3)-1 and lx == (bx&3)+bw4
      // is NOT decoded iff it crosses from left 8x8 (x<2) into right 8x8 (x>=2) while y>=2?
      // Actually: blocks 0..3 = (0..1,0..1), 4..7 = (2..3,0..1), 8..11 = (0..1,2..3), 12..15 = (2..3,2..3).
      // So (cx&3, cy&3) is NOT yet decoded iff:
      //   - cur is in (0..1, 0..1) and C is in (2..3, 0..1) -> i.e. by&3 == 1 && (bx&3)+bw4 == 2
      //   - cur is in (0..1, 2..3) and C is in (2..3, 2..3) -> i.e. by&3 == 3 && (bx&3)+bw4 == 2
      // Notice (bx&3)+bw4 == 2 and (by&3 == 1 || by&3 == 3)!
      !(((by & 3) == 1 || (by & 3) == 3) && (bx & 3) + bw4 == 2)
    }
  }
  let mut avail_c = c_decoded && is_avail(cx, cy)
  let mut ref_c = -1
  let mut mv_cx = 0
  let mut mv_cy = 0
  if avail_c {
    let idx = cy * stride4 + cx
    ref_c = ref_idx[idx]
    mv_cx = mv_x[idx]
    mv_cy = mv_y[idx]
  } else {
    // Substitute D = (bx - 1, by - 1)
    let dx_n = bx - 1
    let dy_n = by - 1
    if is_avail(dx_n, dy_n) {
      avail_c = true
      let idx = dy_n * stride4 + dx_n
      ref_c = ref_idx[idx]
      mv_cx = mv_x[idx]
      mv_cy = mv_y[idx]
    }
  }
  let ref_a = if avail_a { ref_idx[ay * stride4 + ax] } else { -1 }
  let mv_ax = if avail_a { mv_x[ay * stride4 + ax] } else { 0 }
  let mv_ay = if avail_a { mv_y[ay * stride4 + ax] } else { 0 }
  let ref_b = if avail_b { ref_idx[by_n * stride4 + bx_n] } else { -1 }
  let mv_bx = if avail_b { mv_x[by_n * stride4 + bx_n] } else { 0 }
  let mv_by = if avail_b { mv_y[by_n * stride4 + bx_n] } else { 0 }
  // Directional overrides (§8.4.1.3.1)
  if part_mode == 1 && avail_b && ref_b == cur_ref {
    return (mv_bx, mv_by)
  }
  if part_mode == 2 && avail_a && ref_a == cur_ref {
    return (mv_ax, mv_ay)
  }
  if part_mode == 3 && avail_a && ref_a == cur_ref {
    return (mv_ax, mv_ay)
  }
  if part_mode == 4 && avail_c && ref_c == cur_ref {
    return (mv_cx, mv_cy)
  }
  // If only A is available (neither B nor C/D available)
  if avail_a && !avail_b && !avail_c {
    return (mv_ax, mv_ay)
  }
  // If exactly one of A, B, C matches cur_ref, return it
  let match_a = if avail_a && ref_a == cur_ref { 1 } else { 0 }
  let match_b = if avail_b && ref_b == cur_ref { 1 } else { 0 }
  let match_c = if avail_c && ref_c == cur_ref { 1 } else { 0 }
  if match_a + match_b + match_c == 1 {
    if match_a == 1 {
      return (mv_ax, mv_ay)
    }
    if match_b == 1 {
      return (mv_bx, mv_by)
    }
    return (mv_cx, mv_cy)
  }
  (median3(mv_ax, mv_bx, mv_cx), median3(mv_ay, mv_by, mv_cy))
}
