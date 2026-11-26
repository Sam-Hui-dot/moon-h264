///|
let usage : String =
  #|moon-h264 decode <INPUT.h264> --out <OUTPUT.yuv>
  #|moon-h264 probe <INPUT.h264> [--format text|json]
  #|moon-h264 inspect <INPUT.h264> [--frame N] [--mode mb|bitrate] [--out FILE.svg]

///|
async fn cmd_decode(args : Array[String]) -> Unit {
  guard args.length() >= 4 else {
    println(usage)
    abort("decode requires <INPUT.h264> --out <OUTPUT.yuv>")
  }
  let in_path = args[1]
  let mut out_path = ""
  let mut i = 2
  while i < args.length() {
    if args[i] == "--out" && i + 1 < args.length() {
      out_path = args[i + 1]
      i += 2
    } else {
      i += 1
    }
  }
  guard out_path.length() > 0 else { abort("missing --out <OUTPUT.yuv>") }
  let raw = @fs.read_file(in_path).binary()
  let res = @moon-h264.decode_annexb(raw)
  let buf = Buffer()
  for f in res.frames {
    buf.write_bytesview(f.y[:])
    buf.write_bytesview(f.u[:])
    buf.write_bytesview(f.v[:])
  }
  @fs.write_file(out_path, buf.to_bytes(), create_mode=CreateOrTruncate)
  let w = if res.frames.length() > 0 { res.frames[0].width } else { 0 }
  let h = if res.frames.length() > 0 { res.frames[0].height } else { 0 }
  println(
    "DECODED frames=\{res.frames.length()} size=\{w}x\{h} yuv_bytes=\{buf.length()}",
  )
}

///|
async fn cmd_probe(args : Array[String]) -> Unit {
  guard args.length() >= 2 else {
    println(usage)
    abort("probe requires <INPUT.h264>")
  }
  let in_path = args[1]
  let mut fmt = "text"
  let mut i = 2
  while i < args.length() {
    if args[i] == "--format" && i + 1 < args.length() {
      fmt = args[i + 1]
      i += 2
    } else {
      i += 1
    }
  }
  let raw = @fs.read_file(in_path).binary()
  let res = @moon-h264.decode_annexb(raw)
  if fmt == "json" {
    println(@moon-h264.render_probe_json(res))
  } else {
    println(@moon-h264.render_probe_text(res))
  }
}

///|
async fn cmd_inspect(args : Array[String]) -> Unit {
  guard args.length() >= 2 else {
    println(usage)
    abort("inspect requires <INPUT.h264>")
  }
  let in_path = args[1]
  let mut frame_idx = 0
  let mut mode = "mb"
  let mut out_path : String? = None
  let mut i = 2
  while i < args.length() {
    if args[i] == "--frame" && i + 1 < args.length() {
      frame_idx = @string.parse_int(args[i + 1]) catch { _ => 0 }
      i += 2
    } else if args[i] == "--mode" && i + 1 < args.length() {
      mode = args[i + 1]
      i += 2
    } else if args[i] == "--out" && i + 1 < args.length() {
      out_path = Some(args[i + 1])
      i += 2
    } else {
      i += 1
    }
  }
  let raw = @fs.read_file(in_path).binary()
  let res = @moon-h264.decode_annexb(raw)
  let svg = if mode == "bitrate" {
    @moon-h264.render_bitrate_svg(res.frames)
  } else {
    guard frame_idx >= 0 && frame_idx < res.frames.length() else {
      abort("frame index out of range")
    }
    @moon-h264.render_frame_mb_svg(res.frames[frame_idx].meta)
  }
  match out_path {
    Some(p) => @fs.write_file(p, svg, create_mode=CreateOrTruncate)
    None => println(svg)
  }
}

///|
async fn main {
  let all_args = @env.args()
  let args : Array[String] = []
  for i = 1; i < all_args.length(); i = i + 1 {
    args.push(all_args[i])
  }
  if args.length() == 0 {
    println(usage)
    return
  }
  match args[0] {
    "decode" => cmd_decode(args)
    "probe" => cmd_probe(args)
    "inspect" => cmd_inspect(args)
    _ => {
      println(usage)
      abort("unknown subcommand: \{args[0]}")
    }
  }
}
