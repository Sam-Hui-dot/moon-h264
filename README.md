# moon-h264

Pure-MoonBit **ITU-T H.264 / AVC Constrained Baseline** video decoder, bit-exact FFmpeg-verified YUV420p engine, white-box macroblock/MV inspector, and zero-upload browser player.

- **Live Browser Workbench**: [https://sam-hui-dot.github.io/moon-h264/](https://sam-hui-dot.github.io/moon-h264/)
- **Mooncakes Package**: `Sam-Hui-dot/moon-h264` (`0.1.0`)
- **Targets**: `wasm`, `wasm-gc`, `js`, `native` (zero third-party dependencies in the root library)

## Highlights

1. **Bit-Exact ITU-T H.264 Constrained Baseline Decoding**:
   - Full Annex B / AVCC NALU framing with Emulation Prevention Byte (`0x00 0x00 0x03`) stripping.
   - Complete CAVLC entropy decoder (all `coeff_token`, `level`, `total_zeros`, and `run_before` tables mathematically verified prefix-free with exact Kraft sums).
   - Exact integer inverse quantization, 4x4 IDCT, 4x4 Luma DC Hadamard, and 2x2 Chroma DC Hadamard transforms.
   - All 9 `Intra_4x4`, 4 `Intra_16x16`, 4 `Chroma_8x8` modes, and `I_PCM` raw passthrough.
   - Full P-slice Inter decoding (`P_Skip`, `P_16x16`, `P_16x8`, `P_8x16`, `P_8x8` / `P_8x8ref0` with 8x8/8x4/4x8/4x4 sub-partitions), median MV prediction, 6-tap FIR 1/4-pel Luma MC, and 1/8-pel bilinear Chroma MC.
   - Full §8.7 in-loop deblocking filter (`bS = 0..4`, normal & strong filters, slice boundaries, alpha/beta offsets) and multi-reference DPB.
2. **13/13 Real `libx264` Streams Verified Bit-Exact Against `FFmpeg`**:
   - Every decoded frame's cropped `Y + U + V` buffer matches `ffmpeg -f rawvideo -pix_fmt yuv420p` with **0-byte, 0-pixel error (exact SHA-256 parity, PSNR = ∞)** across 94 frames at **216+ aggregate native FPS** (up to 573 FPS on 160x120 and 363 FPS on 320x240).
3. **White-Box Anatomy & Zero-Upload Browser Player**:
   - Exposes per-frame NALU/SPS/PPS structure, macroblock type grid, QP, bit counts, and L0 motion vectors as structured metadata and native SVGs (`render_frame_mb_svg`, `render_bitrate_svg`).
   - Interactive HTML5 Canvas player with Y/U/V plane views, MB type overlays, MV arrows, and drag-and-drop local `.h264` decoding.

## Library Quickstart

Add `"Sam-Hui-dot/moon-h264@0.1.0"` to your `moon.mod` and import `"Sam-Hui-dot/moon-h264" @h264` in `moon.pkg`:

```moonbit
let res = @h264.decode_annexb(h264_bytes)
for frame in res.frames {
  let yuv420p : Bytes = frame.to_yuv420p_bytes()
  let rgba8888 : Bytes = frame.to_rgba()
  let mb_svg : String = @h264.render_frame_mb_svg(frame.meta)
  ignore((yuv420p, rgba8888, mb_svg))
}
```

## CLI Usage

```bash
# Decode Annex B .h264 to raw YUV420p
moon run --target native cmd/main -- decode input.h264 --out output.yuv

# Probe NALU / SPS / PPS / frame summary (text or json)
moon run --target native cmd/main -- probe input.h264 --format text

# Export native SVG macroblock/MV anatomy or bitrate distribution
moon run --target native cmd/main -- inspect input.h264 --frame 0 --mode mb --out frame0.svg
moon run --target native cmd/main -- inspect input.h264 --mode bitrate --out bitrate.svg
```

## Verification & Conformance

- See [docs/conformance.md](docs/conformance.md) for the full feature matrix and `0.2.0` / `0.3.0` roadmap.
- Run the 13-stream `FFmpeg` bit-exact differential oracle locally:

```bash
moon build --target native --release --deny-warn cmd/main
python3 demo/verify_h264.py
```

## License

Apache-2.0
