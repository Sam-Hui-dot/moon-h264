///|
/// Render a native SVG macroblock & motion-vector anatomy map for a decoded frame.
pub fn render_frame_mb_svg(meta : FrameMeta) -> String {
  let cell = 24
  let pad_x = 24
  let pad_y = 56
  let legend_h = 44
  let grid_w = meta.mb_w * cell
  let grid_h = meta.mb_h * cell
  let svg_w = if grid_w + pad_x * 2 > 540 { grid_w + pad_x * 2 } else { 540 }
  let svg_h = pad_y + grid_h + legend_h + 16
  let sb = StringBuilder()
  sb.write_string(
    "<svg class=\"moon-h264-mb-map\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 \{svg_w} \{svg_h}\" width=\"\{svg_w}\" height=\"\{svg_h}\">",
  )
  sb.write_string(
    "<rect width=\"100%\" height=\"100%\" fill=\"#0f172a\" rx=\"10\"/>",
  )
  let idr_tag = if meta.is_idr { " (IDR)" } else { "" }
  sb.write_string(
    "<text x=\"\{pad_x}\" y=\"26\" fill=\"#f8fafc\" font-family=\"ui-monospace,monospace\" font-size=\"14\" font-weight=\"700\">Frame #\{meta.frame_index} [\{meta.slice_type}\{idr_tag}] \{meta.width}x\{meta.height} | QP=\{meta.slice_qp} | \{meta.nal_bytes} B</text>",
  )
  sb.write_string(
    "<text x=\"\{pad_x}\" y=\"44\" fill=\"#94a3b8\" font-family=\"ui-monospace,monospace\" font-size=\"11\">Macroblock grid: \{meta.mb_w}x\{meta.mb_h} (\{meta.mbs.length()} MBs) — color=MB type, white arrows=L0 MV</text>",
  )
  // Draw MB cells
  for mb in meta.mbs {
    let x = pad_x + mb.mb_x * cell
    let y = pad_y + mb.mb_y * cell
    let fill = match mb.kind {
      MbKind::I4x4 => "#ef4444"
      MbKind::I16x16 => "#f97316"
      MbKind::IPcm => "#ec4899"
      MbKind::PSkip => "#334155"
      MbKind::P16x16 => "#2563eb"
      MbKind::P16x8 => "#0ea5e9"
      MbKind::P8x16 => "#06b6d4"
      MbKind::P8x8 => "#10b981"
    }
    sb.write_string(
      "<rect x=\"\{x}\" y=\"\{y}\" width=\"\{cell - 1}\" height=\"\{cell - 1}\" fill=\"\{fill}\" fill-opacity=\"0.85\" stroke=\"#0f172a\" stroke-width=\"1\"/>",
    )
    // Draw MV arrow if non-zero
    if mb.mv_x != 0 || mb.mv_y != 0 {
      let cx = x + cell / 2
      let cy = y + cell / 2
      let dx = clamp_int(mb.mv_x / 2, -cell / 2 + 2, cell / 2 - 2)
      let dy = clamp_int(mb.mv_y / 2, -cell / 2 + 2, cell / 2 - 2)
      let ex = cx + dx
      let ey = cy + dy
      sb.write_string(
        "<line x1=\"\{cx}\" y1=\"\{cy}\" x2=\"\{ex}\" y2=\"\{ey}\" stroke=\"#f8fafc\" stroke-width=\"1.4\" stroke-linecap=\"round\"/>",
      )
      sb.write_string(
        "<circle cx=\"\{ex}\" cy=\"\{ey}\" r=\"1.6\" fill=\"#fde047\"/>",
      )
    }
  }
  // Legend
  let ly = pad_y + grid_h + 24
  let items : Array[(String, String)] = [
    ("#ef4444", "I_4x4"),
    ("#f97316", "I_16x16"),
    ("#2563eb", "P_16x16"),
    ("#0ea5e9", "P_16x8/8x16"),
    ("#10b981", "P_8x8"),
    ("#334155", "P_Skip"),
  ]
  let mut lx = pad_x
  for item in items {
    sb.write_string(
      "<rect x=\"\{lx}\" y=\"\{ly - 10}\" width=\"11\" height=\"11\" rx=\"2\" fill=\"\{item.0}\"/>",
    )
    sb.write_string(
      "<text x=\"\{lx + 15}\" y=\"\{ly}\" fill=\"#cbd5e1\" font-family=\"ui-monospace,monospace\" font-size=\"11\">\{item.1}</text>",
    )
    lx += 82
  }
  sb.write_string("</svg>")
  sb.to_string()
}

///|
/// Render a native SVG per-frame bitrate & I/P bar chart across all decoded frames.
pub fn render_bitrate_svg(frames : Array[DecodedFrame]) -> String {
  let n = frames.length()
  let svg_w = 640
  let svg_h = 220
  let pad_l = 48
  let pad_r = 20
  let pad_t = 38
  let pad_b = 34
  let plot_w = svg_w - pad_l - pad_r
  let plot_h = svg_h - pad_t - pad_b
  let mut max_bytes = 1
  for f in frames {
    if f.meta.nal_bytes > max_bytes {
      max_bytes = f.meta.nal_bytes
    }
  }
  let sb = StringBuilder()
  sb.write_string(
    "<svg class=\"moon-h264-bitrate\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 \{svg_w} \{svg_h}\" width=\"\{svg_w}\" height=\"\{svg_h}\">",
  )
  sb.write_string(
    "<rect width=\"100%\" height=\"100%\" fill=\"#0f172a\" rx=\"10\"/>",
  )
  sb.write_string(
    "<text x=\"\{pad_l}\" y=\"22\" fill=\"#f8fafc\" font-family=\"ui-monospace,monospace\" font-size=\"13\" font-weight=\"700\">Frame NAL Size Distribution (\{n} frames, peak=\{max_bytes} B)</text>",
  )
  if n > 0 {
    let slot = plot_w / n
    let bw = if slot > 4 { slot - 2 } else { 2 }
    for i = 0; i < n; i = i + 1 {
      let f = frames[i]
      let h = f.meta.nal_bytes * plot_h / max_bytes
      let bh = if h > 2 { h } else { 2 }
      let x = pad_l + i * slot
      let y = pad_t + plot_h - bh
      let col = if f.meta.is_idr {
        "#ef4444"
      } else if f.meta.slice_type == "I" {
        "#f97316"
      } else {
        "#38bdf8"
      }
      sb.write_string(
        "<rect x=\"\{x}\" y=\"\{y}\" width=\"\{bw}\" height=\"\{bh}\" rx=\"2\" fill=\"\{col}\"/>",
      )
    }
  }
  sb.write_string(
    "<line x1=\"\{pad_l}\" y1=\"\{pad_t + plot_h}\" x2=\"\{svg_w - pad_r}\" y2=\"\{pad_t + plot_h}\" stroke=\"#475569\" stroke-width=\"1\"/>",
  )
  sb.write_string(
    "<text x=\"\{pad_l}\" y=\"\{svg_h - 10}\" fill=\"#94a3b8\" font-family=\"ui-monospace,monospace\" font-size=\"10\">Red=IDR, Orange=I, Blue=P</text>",
  )
  sb.write_string("</svg>")
  sb.to_string()
}
