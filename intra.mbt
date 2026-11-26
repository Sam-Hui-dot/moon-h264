///|
/// Predict a 4x4 Luma block using ITU-T H.264 §8.3.1.2 (all 9 Intra_4x4 modes).
pub fn predict_intra_4x4(
  plane : FixedArray[Byte],
  stride : Int32,
  x0 : Int32,
  y0 : Int32,
  mode : Int32,
  avail_top : Bool,
  avail_left : Bool,
  avail_top_right : Bool,
  avail_top_left : Bool,
) -> Unit {
  let t = FixedArray::make(8, 128)
  let l = FixedArray::make(4, 128)
  if avail_top {
    let top_row = (y0 - 1) * stride
    for i = 0; i < 4; i = i + 1 {
      t[i] = plane[top_row + x0 + i].to_int()
    }
    if avail_top_right {
      for i = 0; i < 4; i = i + 1 {
        t[4 + i] = plane[top_row + x0 + 4 + i].to_int()
      }
    } else {
      let rep = t[3]
      t[4] = rep
      t[5] = rep
      t[6] = rep
      t[7] = rep
    }
  }
  if avail_left {
    for i = 0; i < 4; i = i + 1 {
      l[i] = plane[(y0 + i) * stride + x0 - 1].to_int()
    }
  }
  let tl = if avail_top_left {
    plane[(y0 - 1) * stride + x0 - 1].to_int()
  } else {
    128
  }
  let pred = FixedArray::make(16, 128)
  match mode {
    // 0: Vertical
    0 =>
      for y = 0; y < 4; y = y + 1 {
        for x = 0; x < 4; x = x + 1 {
          pred[y * 4 + x] = t[x]
        }
      }
    // 1: Horizontal
    1 =>
      for y = 0; y < 4; y = y + 1 {
        for x = 0; x < 4; x = x + 1 {
          pred[y * 4 + x] = l[y]
        }
      }
    // 2: DC
    2 => {
      let dc = if avail_top && avail_left {
        (t[0] + t[1] + t[2] + t[3] + l[0] + l[1] + l[2] + l[3] + 4) >> 3
      } else if avail_top {
        (t[0] + t[1] + t[2] + t[3] + 2) >> 2
      } else if avail_left {
        (l[0] + l[1] + l[2] + l[3] + 2) >> 2
      } else {
        128
      }
      for i = 0; i < 16; i = i + 1 {
        pred[i] = dc
      }
    }
    // 3: Diagonal Down-Left
    3 =>
      for y = 0; y < 4; y = y + 1 {
        for x = 0; x < 4; x = x + 1 {
          let v = if x == 3 && y == 3 {
            (t[6] + 3 * t[7] + 2) >> 2
          } else {
            (t[x + y] + 2 * t[x + y + 1] + t[x + y + 2] + 2) >> 2
          }
          pred[y * 4 + x] = v
        }
      }
    // 4: Diagonal Down-Right
    4 => {
      let d0 = (l[3] + 2 * l[2] + l[1] + 2) >> 2
      let d1 = (l[2] + 2 * l[1] + l[0] + 2) >> 2
      let d2 = (l[1] + 2 * l[0] + tl + 2) >> 2
      let d3 = (l[0] + 2 * tl + t[0] + 2) >> 2
      let d4 = (tl + 2 * t[0] + t[1] + 2) >> 2
      let d5 = (t[0] + 2 * t[1] + t[2] + 2) >> 2
      let d6 = (t[1] + 2 * t[2] + t[3] + 2) >> 2
      pred[12] = d0
      pred[8] = d1
      pred[13] = d1
      pred[4] = d2
      pred[9] = d2
      pred[14] = d2
      pred[0] = d3
      pred[5] = d3
      pred[10] = d3
      pred[15] = d3
      pred[1] = d4
      pred[6] = d4
      pred[11] = d4
      pred[2] = d5
      pred[7] = d5
      pred[3] = d6
    }
    // 5: Vertical-Right
    5 => {
      let vr0 = (tl + t[0] + 1) >> 1
      let vr1 = (t[0] + t[1] + 1) >> 1
      let vr2 = (t[1] + t[2] + 1) >> 1
      let vr3 = (t[2] + t[3] + 1) >> 1
      let vr4 = (l[0] + 2 * tl + t[0] + 2) >> 2
      let vr5 = (tl + 2 * t[0] + t[1] + 2) >> 2
      let vr6 = (t[0] + 2 * t[1] + t[2] + 2) >> 2
      let vr7 = (t[1] + 2 * t[2] + t[3] + 2) >> 2
      let vr8 = (tl + 2 * l[0] + l[1] + 2) >> 2
      let vr9 = (l[0] + 2 * l[1] + l[2] + 2) >> 2
      pred[0] = vr0
      pred[9] = vr0
      pred[1] = vr1
      pred[10] = vr1
      pred[2] = vr2
      pred[11] = vr2
      pred[3] = vr3
      pred[4] = vr4
      pred[13] = vr4
      pred[5] = vr5
      pred[14] = vr5
      pred[6] = vr6
      pred[15] = vr6
      pred[7] = vr7
      pred[8] = vr8
      pred[12] = vr9
    }
    // 6: Horizontal-Down
    6 => {
      let hd0 = (tl + l[0] + 1) >> 1
      let hd1 = (l[0] + 2 * tl + t[0] + 2) >> 2
      let hd2 = (tl + 2 * t[0] + t[1] + 2) >> 2
      let hd3 = (t[0] + 2 * t[1] + t[2] + 2) >> 2
      let hd4 = (l[0] + l[1] + 1) >> 1
      let hd5 = (tl + 2 * l[0] + l[1] + 2) >> 2
      let hd6 = (l[1] + l[2] + 1) >> 1
      let hd7 = (l[0] + 2 * l[1] + l[2] + 2) >> 2
      let hd8 = (l[2] + l[3] + 1) >> 1
      let hd9 = (l[1] + 2 * l[2] + l[3] + 2) >> 2
      pred[0] = hd0
      pred[6] = hd0
      pred[1] = hd1
      pred[7] = hd1
      pred[2] = hd2
      pred[3] = hd3
      pred[4] = hd4
      pred[10] = hd4
      pred[5] = hd5
      pred[11] = hd5
      pred[8] = hd6
      pred[14] = hd6
      pred[9] = hd7
      pred[15] = hd7
      pred[12] = hd8
      pred[13] = hd9
    }
    // 7: Vertical-Left
    7 => {
      pred[0] = (t[0] + t[1] + 1) >> 1
      pred[1] = (t[1] + t[2] + 1) >> 1
      pred[2] = (t[2] + t[3] + 1) >> 1
      pred[3] = (t[3] + t[4] + 1) >> 1
      pred[4] = (t[0] + 2 * t[1] + t[2] + 2) >> 2
      pred[5] = (t[1] + 2 * t[2] + t[3] + 2) >> 2
      pred[6] = (t[2] + 2 * t[3] + t[4] + 2) >> 2
      pred[7] = (t[3] + 2 * t[4] + t[5] + 2) >> 2
      pred[8] = (t[1] + t[2] + 1) >> 1
      pred[9] = (t[2] + t[3] + 1) >> 1
      pred[10] = (t[3] + t[4] + 1) >> 1
      pred[11] = (t[4] + t[5] + 1) >> 1
      pred[12] = (t[1] + 2 * t[2] + t[3] + 2) >> 2
      pred[13] = (t[2] + 2 * t[3] + t[4] + 2) >> 2
      pred[14] = (t[3] + 2 * t[4] + t[5] + 2) >> 2
      pred[15] = (t[4] + 2 * t[5] + t[6] + 2) >> 2
    }
    // 8: Horizontal-Up
    _ => {
      let hu0 = (l[0] + l[1] + 1) >> 1
      let hu1 = (l[0] + 2 * l[1] + l[2] + 2) >> 2
      let hu2 = (l[1] + l[2] + 1) >> 1
      let hu3 = (l[1] + 2 * l[2] + l[3] + 2) >> 2
      let hu4 = (l[2] + l[3] + 1) >> 1
      let hu5 = (l[2] + 3 * l[3] + 2) >> 2
      let hu6 = l[3]
      pred[0] = hu0
      pred[1] = hu1
      pred[2] = hu2
      pred[3] = hu3
      pred[4] = hu2
      pred[5] = hu3
      pred[6] = hu4
      pred[7] = hu5
      pred[8] = hu4
      pred[9] = hu5
      pred[10] = hu6
      pred[11] = hu6
      pred[12] = hu6
      pred[13] = hu6
      pred[14] = hu6
      pred[15] = hu6
    }
  }
  for y = 0; y < 4; y = y + 1 {
    let base = (y0 + y) * stride + x0
    for x = 0; x < 4; x = x + 1 {
      plane[base + x] = pred[y * 4 + x].to_byte()
    }
  }
}

///|
/// Predict a 16x16 Luma macroblock using ITU-T H.264 §8.3.3 (4 Intra_16x16 modes).
pub fn predict_intra_16x16(
  plane : FixedArray[Byte],
  stride : Int32,
  x0 : Int32,
  y0 : Int32,
  mode : Int32,
  avail_top : Bool,
  avail_left : Bool,
) -> Unit {
  match mode {
    // 0: Vertical
    0 => {
      let top_row = (y0 - 1) * stride + x0
      for y = 0; y < 16; y = y + 1 {
        let dst = (y0 + y) * stride + x0
        for x = 0; x < 16; x = x + 1 {
          plane[dst + x] = plane[top_row + x]
        }
      }
    }
    // 1: Horizontal
    1 =>
      for y = 0; y < 16; y = y + 1 {
        let v = plane[(y0 + y) * stride + x0 - 1]
        let dst = (y0 + y) * stride + x0
        for x = 0; x < 16; x = x + 1 {
          plane[dst + x] = v
        }
      }
    // 2: DC
    2 => {
      let mut sum = 0
      let dc = if avail_top && avail_left {
        for i = 0; i < 16; i = i + 1 {
          sum += plane[(y0 - 1) * stride + x0 + i].to_int()
          sum += plane[(y0 + i) * stride + x0 - 1].to_int()
        }
        (sum + 16) >> 5
      } else if avail_top {
        for i = 0; i < 16; i = i + 1 {
          sum += plane[(y0 - 1) * stride + x0 + i].to_int()
        }
        (sum + 8) >> 4
      } else if avail_left {
        for i = 0; i < 16; i = i + 1 {
          sum += plane[(y0 + i) * stride + x0 - 1].to_int()
        }
        (sum + 8) >> 4
      } else {
        128
      }
      let b = dc.to_byte()
      for y = 0; y < 16; y = y + 1 {
        let dst = (y0 + y) * stride + x0
        for x = 0; x < 16; x = x + 1 {
          plane[dst + x] = b
        }
      }
    }
    // 3: Plane
    _ => {
      let mut h = 0
      let mut v = 0
      let top_row = (y0 - 1) * stride
      for i = 0; i < 8; i = i + 1 {
        h += (i + 1) *
          (
            plane[top_row + x0 + 8 + i].to_int() -
            plane[top_row + x0 + 6 - i].to_int()
          )
        v += (i + 1) *
          (
            plane[(y0 + 8 + i) * stride + x0 - 1].to_int() -
            plane[(y0 + 6 - i) * stride + x0 - 1].to_int()
          )
      }
      let a = 16 *
        (
          plane[(y0 + 15) * stride + x0 - 1].to_int() +
          plane[top_row + x0 + 15].to_int()
        )
      let b = (5 * h + 32) >> 6
      let c = (5 * v + 32) >> 6
      for y = 0; y < 16; y = y + 1 {
        let dst = (y0 + y) * stride + x0
        for x = 0; x < 16; x = x + 1 {
          plane[dst + x] = clip_u8((a + b * (x - 7) + c * (y - 7) + 16) >> 5).to_byte()
        }
      }
    }
  }
}

///|
fn fill_4x4(
  plane : FixedArray[Byte],
  stride : Int32,
  x0 : Int32,
  y0 : Int32,
  val : Int32,
) -> Unit {
  let b = val.to_byte()
  for y = 0; y < 4; y = y + 1 {
    let dst = (y0 + y) * stride + x0
    for x = 0; x < 4; x = x + 1 {
      plane[dst + x] = b
    }
  }
}

///|
/// Predict an 8x8 Chroma plane (Cb or Cr) using ITU-T H.264 §8.3.4 (4 Chroma modes).
pub fn predict_intra_chroma_8x8(
  plane : FixedArray[Byte],
  stride : Int32,
  x0 : Int32,
  y0 : Int32,
  mode : Int32,
  avail_top : Bool,
  avail_left : Bool,
) -> Unit {
  match mode {
    // 0: DC (per-4x4 quadrant rule per H.264 §8.3.4.1)
    0 => {
      let mut s_t0 = 0
      let mut s_t1 = 0
      let mut s_l0 = 0
      let mut s_l1 = 0
      if avail_top {
        let tr = (y0 - 1) * stride + x0
        for i = 0; i < 4; i = i + 1 {
          s_t0 += plane[tr + i].to_int()
          s_t1 += plane[tr + 4 + i].to_int()
        }
      }
      if avail_left {
        for i = 0; i < 4; i = i + 1 {
          s_l0 += plane[(y0 + i) * stride + x0 - 1].to_int()
          s_l1 += plane[(y0 + 4 + i) * stride + x0 - 1].to_int()
        }
      }
      let dc00 = if avail_top && avail_left {
        (s_t0 + s_l0 + 4) >> 3
      } else if avail_top {
        (s_t0 + 2) >> 2
      } else if avail_left {
        (s_l0 + 2) >> 2
      } else {
        128
      }
      let dc01 = if avail_top {
        (s_t1 + 2) >> 2
      } else if avail_left {
        (s_l0 + 2) >> 2
      } else {
        128
      }
      let dc10 = if avail_left {
        (s_l1 + 2) >> 2
      } else if avail_top {
        (s_t0 + 2) >> 2
      } else {
        128
      }
      let dc11 = if avail_top && avail_left {
        (s_t1 + s_l1 + 4) >> 3
      } else if avail_top {
        (s_t1 + 2) >> 2
      } else if avail_left {
        (s_l1 + 2) >> 2
      } else {
        128
      }
      fill_4x4(plane, stride, x0, y0, dc00)
      fill_4x4(plane, stride, x0 + 4, y0, dc01)
      fill_4x4(plane, stride, x0, y0 + 4, dc10)
      fill_4x4(plane, stride, x0 + 4, y0 + 4, dc11)
    }
    // 1: Horizontal
    1 =>
      for y = 0; y < 8; y = y + 1 {
        let v = plane[(y0 + y) * stride + x0 - 1]
        let dst = (y0 + y) * stride + x0
        for x = 0; x < 8; x = x + 1 {
          plane[dst + x] = v
        }
      }
    // 2: Vertical
    2 => {
      let top_row = (y0 - 1) * stride + x0
      for y = 0; y < 8; y = y + 1 {
        let dst = (y0 + y) * stride + x0
        for x = 0; x < 8; x = x + 1 {
          plane[dst + x] = plane[top_row + x]
        }
      }
    }
    // 3: Plane
    _ => {
      let mut h = 0
      let mut v = 0
      let top_row = (y0 - 1) * stride
      for i = 0; i < 4; i = i + 1 {
        h += (i + 1) *
          (
            plane[top_row + x0 + 4 + i].to_int() -
            plane[top_row + x0 + 2 - i].to_int()
          )
        v += (i + 1) *
          (
            plane[(y0 + 4 + i) * stride + x0 - 1].to_int() -
            plane[(y0 + 2 - i) * stride + x0 - 1].to_int()
          )
      }
      let a = 16 *
        (
          plane[(y0 + 7) * stride + x0 - 1].to_int() +
          plane[top_row + x0 + 7].to_int()
        )
      let b = (17 * h + 16) >> 5
      let c = (17 * v + 16) >> 5
      for y = 0; y < 8; y = y + 1 {
        let dst = (y0 + y) * stride + x0
        for x = 0; x < 8; x = x + 1 {
          plane[dst + x] = clip_u8((a + b * (x - 3) + c * (y - 3) + 16) >> 5).to_byte()
        }
      }
    }
  }
}
