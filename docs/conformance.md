# `moon-h264` Conformance Matrix (v0.1.0)

`Sam-Hui-dot/moon-h264` implements **ITU-T H.264 / ISO/IEC 14496-10 Constrained Baseline Profile (`profile_idc = 66`, 4:2:0 8-bit progressive)** in pure MoonBit with zero third-party dependencies in the root library.

## Supported Features (`0.1.0`)

| Area | Spec Section | Status | Notes |
| --- | --- | --- | --- |
| Annex B (`0x000001` / `0x00000001`) & AVCC NALU framing | §B.1 / ISO 14496-15 | Supported | Automatic Emulation Prevention Byte (`0x00 0x00 0x03`) removal |
| Exp-Golomb (`ue`, `se`, `te`, `me`) & `more_rbsp_data` | §7.2, §9.1 | Supported | Precomputed RBSP stop-one bit position |
| SPS / PPS / Slice Header parsing | §7.3.2–7.3.3 | Supported | Includes `frame_cropping`, POC types 0/1/2, VUI `matrix_coefficients`, RPLM, MMCO |
| CAVLC entropy decoding | §9.2 | Supported | All 5 `coeff_token` tables, `level`, 15+3 `total_zeros` tables, `run_before`, verified prefix-free with exact Kraft sums |
| Integer inverse quantization & transforms | §8.5.10–8.5.12 | Supported | 4x4 IDCT butterfly, 4x4 Luma DC Hadamard, 2x2 Chroma DC Hadamard, Chroma QP table |
| Intra prediction (`I_4x4`, `I_16x16`, Chroma 8x8, `I_PCM`) | §8.3 | Supported | All 9 `I_4x4` modes, 4 `I_16x16` modes, 4 Chroma modes (with quadrant DC rule), `constrained_intra_pred_flag` |
| P-slice Inter prediction & sub-pixel MC | §8.4 | Supported | `P_Skip`, `P_16x16`, `P_16x8`, `P_8x16`, `P_8x8` / `P_8x8ref0` (8x8/8x4/4x8/4x4), median MV predictor, 6-tap FIR 1/4-pel Luma MC, 1/8-pel bilinear Chroma MC |
| In-loop deblocking filter | §8.7 | Supported | Exact `bS` (0..4), `Alpha`/`Beta`/`tC0` tables, normal (`bS=1..3`) & strong (`bS=4`) Luma/Chroma filters, `disable_deblocking_filter_idc` (0/1/2), alpha/beta offsets |
| Multi-slice frames & DPB | §8.2.5 | Supported | Sliding-window reference queue, IDR reset, MMCO, L0 reference list modification |
| Color conversion | ITU-R BT.601 / BT.709 | Supported | Cropped YUV420p output & RGBA8888 conversion |

## Planned Roadmap (`0.2.0` → `0.3.0`)

- **`0.2.0` (Main Profile)**: Full **CABAC** binary arithmetic entropy decoder (`entropy_coding_mode_flag = 1`), **B-Slice** bidirectional prediction & Direct mode, weighted prediction.
- **`0.3.0` (Container & High Profile)**: ISO BMFF / MP4 (`moov`/`mdat`/`avcC`) demuxer, High Profile 8x8 integer transform & custom scaling matrices, and SIMD/hotspot profiling.

## Differential Oracle Verification

Every commit is verified in CI by `demo/verify_h264.py` against `FFmpeg` across **13 real `libx264` Constrained Baseline streams (94 frames total)**:
- Pure Intra QP=18 & QP=38 (strong `bS=4` deblocking)
- 160x120 panning motion (non-16x height crop + 1/4-pel MC)
- 320x240 complex `testsrc2` (`refs=3`, `partitions=all`, `subme=7`)
- Deblocking disabled (`no-deblock=1`) & custom offsets (`deblock=2:-2`)
- Multi-IDR short GOP (`-g 3`)
- Edge dimensions: `16x16`, QCIF `176x144`, odd-cropped `130x102`
- Flat static color (`P_Skip` runs), multi-slice (`slices=3`), and `constrained-intra=1`

Assertion: **0-byte, 0-pixel error (exact SHA-256 match, PSNR = ∞)** on every frame's `Y + U + V` buffer.
