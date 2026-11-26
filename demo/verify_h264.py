import hashlib
import os
import subprocess
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "demo" / "out"

# 13 real libx264 Constrained Baseline test vectors covering all 0.1.0 features
VECTORS = [
    {
        "name": "intra_only_qp18",
        "desc": "Pure I-frames QP=18 (all 9 Intra4x4 + Intra16x16 + Chroma)",
        "src": ["-f", "lavfi", "-i", "testsrc2=size=128x96:rate=10:duration=0.4"],
        "enc": ["-c:v", "libx264", "-profile:v", "baseline", "-pix_fmt", "yuv420p", "-g", "1", "-x264-params", "qp=18:scenecut=0"],
    },
    {
        "name": "intra_only_qp38",
        "desc": "Pure I-frames QP=38 (strong bS=4 deblocking filter)",
        "src": ["-f", "lavfi", "-i", "smptebars=size=128x96:rate=10:duration=0.4"],
        "enc": ["-c:v", "libx264", "-profile:v", "baseline", "-pix_fmt", "yuv420p", "-g", "1", "-x264-params", "qp=38:scenecut=0"],
    },
    {
        "name": "motion_pan_160x120",
        "desc": "Panning motion 160x120 (non-16x height crop=8 + 1/4-pel MC)",
        "src": ["-f", "lavfi", "-i", "testsrc=size=160x120:rate=15:duration=0.8"],
        "enc": ["-c:v", "libx264", "-profile:v", "baseline", "-pix_fmt", "yuv420p", "-g", "30", "-x264-params", "crf=24:ref=1:subme=7"],
    },
    {
        "name": "motion_complex_320x240",
        "desc": "Complex 320x240 testsrc2 (P_Skip/P16x8/P8x16/P8x8 + refs=3)",
        "src": ["-f", "lavfi", "-i", "testsrc2=size=320x240:rate=15:duration=0.8"],
        "enc": ["-c:v", "libx264", "-profile:v", "baseline", "-pix_fmt", "yuv420p", "-g", "30", "-x264-params", "crf=23:ref=3:partitions=all:subme=7"],
    },
    {
        "name": "no_deblock",
        "desc": "Deblocking disabled (disable_deblocking_filter_idc=1)",
        "src": ["-f", "lavfi", "-i", "testsrc2=size=160x120:rate=10:duration=0.6"],
        "enc": ["-c:v", "libx264", "-profile:v", "baseline", "-pix_fmt", "yuv420p", "-x264-params", "crf=26:deblock=0:0:no-deblock=1"],
    },
    {
        "name": "deblock_offsets",
        "desc": "Non-zero deblocking alpha/beta offsets (deblock=2:-2)",
        "src": ["-f", "lavfi", "-i", "testsrc2=size=160x120:rate=10:duration=0.6"],
        "enc": ["-c:v", "libx264", "-profile:v", "baseline", "-pix_fmt", "yuv420p", "-x264-params", "crf=28:deblock=2:-2:ref=2"],
    },
    {
        "name": "multi_idr_gop",
        "desc": "Short GOP=3 with multiple IDR refreshes & DPB resets",
        "src": ["-f", "lavfi", "-i", "mandelbrot=size=128x96:rate=10", "-frames:v", "12"],
        "enc": ["-c:v", "libx264", "-profile:v", "baseline", "-pix_fmt", "yuv420p", "-g", "3", "-keyint_min", "3", "-x264-params", "crf=24:ref=2:scenecut=0"],
    },
    {
        "name": "edge_16x16",
        "desc": "Minimum 1-MB frame 16x16 (boundary clamping & single-MB edges)",
        "src": ["-f", "lavfi", "-i", "testsrc2=size=16x16:rate=10:duration=0.6"],
        "enc": ["-c:v", "libx264", "-profile:v", "baseline", "-pix_fmt", "yuv420p", "-x264-params", "crf=22:ref=2"],
    },
    {
        "name": "edge_176x144_qcif",
        "desc": "Classic QCIF 176x144 with odd MB count (11x9 MBs)",
        "src": ["-f", "lavfi", "-i", "rgbtestsrc=size=176x144:rate=10:duration=0.6"],
        "enc": ["-c:v", "libx264", "-profile:v", "baseline", "-pix_fmt", "yuv420p", "-x264-params", "crf=24:ref=2"],
    },
    {
        "name": "crop_odd_130x102",
        "desc": "Non-16x width & height (130x102 -> crop_right=7, crop_bottom=5)",
        "src": ["-f", "lavfi", "-i", "testsrc2=size=130x102:rate=10:duration=0.5"],
        "enc": ["-c:v", "libx264", "-profile:v", "baseline", "-pix_fmt", "yuv420p", "-x264-params", "crf=25:ref=2"],
    },
    {
        "name": "flat_color_skip",
        "desc": "Flat static color triggering massive P_Skip runs",
        "src": ["-f", "lavfi", "-i", "color=c=0x3366cc:size=128x96:rate=10:duration=0.6"],
        "enc": ["-c:v", "libx264", "-profile:v", "baseline", "-pix_fmt", "yuv420p", "-x264-params", "crf=28"],
    },
    {
        "name": "multi_slice_3",
        "desc": "Multi-slice frames (3 slices/frame, slice boundary isolation)",
        "src": ["-f", "lavfi", "-i", "testsrc2=size=160x128:rate=10:duration=0.5"],
        "enc": ["-c:v", "libx264", "-profile:v", "baseline", "-pix_fmt", "yuv420p", "-x264-params", "crf=24:slices=3:ref=2"],
    },
    {
        "name": "constrained_intra",
        "desc": "Constrained intra prediction flag (constrained-intra=1)",
        "src": ["-f", "lavfi", "-i", "life=size=128x96:rate=10:mold=10", "-frames:v", "10"],
        "enc": ["-c:v", "libx264", "-profile:v", "baseline", "-pix_fmt", "yuv420p", "-x264-params", "crf=24:constrained-intra=1:ref=2"],
    },
]


def find_cli() -> Path:
    exe = "main.exe" if os.name == "nt" else "main"
    p = ROOT / "_build" / "native" / "release" / "build" / "cmd" / "main" / exe
    if not p.exists():
        raise FileNotFoundError(f"Native CLI not found: {p}")
    return p


def sha256_bytes(b: bytes) -> str:
    return hashlib.sha256(b).hexdigest()


def main() -> None:
    cli = find_cli()
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    rows = []
    total_frames = 0
    total_decode_s = 0.0
    failures = 0

    for vec in VECTORS:
        name = vec["name"]
        h264_path = OUT_DIR / f"{name}.h264"
        ff_yuv_path = OUT_DIR / f"{name}.ffmpeg.yuv"
        moon_yuv_path = OUT_DIR / f"{name}.moon.yuv"

        # 1. Encode real Constrained Baseline H.264 stream with ffmpeg/libx264
        enc_cmd = ["ffmpeg", "-y", "-hide_banner", "-loglevel", "error"] + vec["src"] + vec["enc"] + ["-f", "h264", str(h264_path)]
        subprocess.run(enc_cmd, check=True)

        # 2. Decode reference YUV420p with ffmpeg
        dec_cmd = ["ffmpeg", "-y", "-hide_banner", "-loglevel", "error", "-i", str(h264_path), "-f", "rawvideo", "-pix_fmt", "yuv420p", str(ff_yuv_path)]
        subprocess.run(dec_cmd, check=True)

        # 3. Decode with moon-h264 native CLI
        t0 = time.perf_counter()
        proc = subprocess.run([str(cli), "decode", str(h264_path), "--out", str(moon_yuv_path)], capture_output=True, text=True, check=True)
        dt = time.perf_counter() - t0
        total_decode_s += dt

        # Parse DECODED frames=N size=WxH
        line = proc.stdout.strip().splitlines()[-1]
        parts = dict(tok.split("=", 1) for tok in line.split()[1:] if "=" in tok)
        nframes = int(parts["frames"])
        w, h = map(int, parts["size"].split("x"))
        total_frames += nframes

        ff_bytes = ff_yuv_path.read_bytes()
        moon_bytes = moon_yuv_path.read_bytes()

        frame_size = w * h * 3 // 2
        if len(ff_bytes) != len(moon_bytes):
            print(f"FAIL {name}: length mismatch ffmpeg={len(ff_bytes)} moon={len(moon_bytes)}")
            failures += 1
            rows.append((name, f"{w}x{h}", nframes, h264_path.stat().st_size, "LEN_MISMATCH", f"{dt*1000:.1f} ms"))
            continue

        mismatched_frames = []
        for fi in range(nframes):
            s = fi * frame_size
            e = s + frame_size
            if ff_bytes[s:e] != moon_bytes[s:e]:
                # Find first differing byte & plane
                y_sz = w * h
                u_sz = y_sz // 4
                first_diff = -1
                max_err = 0
                diff_cnt = 0
                for k in range(frame_size):
                    d = abs(ff_bytes[s + k] - moon_bytes[s + k])
                    if d != 0:
                        if first_diff < 0:
                            first_diff = k
                        diff_cnt += 1
                        if d > max_err:
                            max_err = d
                plane = "Y" if first_diff < y_sz else ("U" if first_diff < y_sz + u_sz else "V")
                mismatched_frames.append((fi, plane, first_diff, diff_cnt, max_err))

        if mismatched_frames:
            failures += 1
            fi, plane, pos, cnt, me = mismatched_frames[0]
            print(f"FAIL {name}: {len(mismatched_frames)}/{nframes} frames differ (first: frame #{fi} plane={plane} offset={pos} diff_bytes={cnt} max_err={me})")
            rows.append((name, f"{w}x{h}", nframes, h264_path.stat().st_size, f"DIFF ({len(mismatched_frames)}/{nframes})", f"{dt*1000:.1f} ms"))
        else:
            digest = sha256_bytes(moon_bytes)[:12]
            fps = nframes / dt if dt > 0 else 0.0
            print(f"PASS {name:24s} {w:3d}x{h:<3d} frames={nframes:2d} stream={h264_path.stat().st_size:6d}B sha256={digest}.. ({fps:6.1f} fps)")
            rows.append((name, f"{w}x{h}", nframes, h264_path.stat().st_size, f"0-byte diff (`{digest}`)", f"{fps:.1f} fps"))

    avg_fps = total_frames / total_decode_s if total_decode_s > 0 else 0.0
    summary = [
        "## `moon-h264` vs `FFmpeg` Bit-Exact YUV420p Differential Oracle",
        "",
        f"- **Vectors**: {len(VECTORS) - failures}/{len(VECTORS)} passed (0-byte, 0-pixel diff, PSNR = ∞)",
        f"- **Total frames verified**: {total_frames} frames ({avg_fps:.1f} aggregate native FPS)",
        "",
        "| Stream | Resolution | Frames | Size (B) | FFmpeg SHA-256 Oracle | Native Speed |",
        "| --- | --- | ---: | ---: | --- | ---: |",
    ]
    for r in rows:
        summary.append(f"| `{r[0]}` | {r[1]} | {r[2]} | {r[3]} | {r[4]} | {r[5]} |")

    summary_path = OUT_DIR / "h264-oracle-summary.md"
    summary_path.write_text("\n".join(summary) + "\n", encoding="utf-8")
    print(f"\nWrote {summary_path} — {len(VECTORS) - failures}/{len(VECTORS)} passed, {total_frames} frames, {avg_fps:.1f} avg FPS")
    if failures > 0:
        sys.exit(1)


if __name__ == "__main__":
    main()
