import json
import shutil
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
OUT_DIR = ROOT / "demo" / "out"

PRESETS = [
    {
        "id": "pan_160x120",
        "title": "Testsrc Pan 160x120 (1/4-pel MC + Crop)",
        "tag": "Inter P + Crop",
        "description": "12 frames of moving testsrc at 160x120 (non-16x height with SPS frame_cropping=8) exercising 1/4-pel Luma 6-tap FIR and P_Skip/P_16x16 motion vectors.",
        "src": ["-f", "lavfi", "-i", "testsrc=size=160x120:rate=12:duration=1.0"],
        "enc": ["-c:v", "libx264", "-profile:v", "baseline", "-pix_fmt", "yuv420p", "-g", "30", "-x264-params", "crf=26:ref=2"],
    },
    {
        "id": "complex_192x128",
        "title": "Testsrc2 192x128 (Multi-Ref P_8x8 + P_16x8)",
        "tag": "Multi-Ref",
        "description": "12 frames of complex synthetic pattern encoded with refs=3 and all macroblock partitions (P_16x16, P_16x8, P_8x16, P_8x8, I_4x4, I_16x16).",
        "src": ["-f", "lavfi", "-i", "testsrc2=size=192x128:rate=12:duration=1.0"],
        "enc": ["-c:v", "libx264", "-profile:v", "baseline", "-pix_fmt", "yuv420p", "-g", "30", "-x264-params", "crf=28:ref=3:partitions=all"],
    },
    {
        "id": "mandelbrot_128x96",
        "title": "Mandelbrot Zoom 128x96 (Multi-IDR GOP=4)",
        "tag": "Multi-IDR",
        "description": "12 frames of fractal zoom with short GOP=4 triggering periodic IDR refreshes, DPB resets, and rich Intra_4x4 directional modes.",
        "src": ["-f", "lavfi", "-i", "mandelbrot=size=128x96:rate=12", "-frames:v", "12"],
        "enc": ["-c:v", "libx264", "-profile:v", "baseline", "-pix_fmt", "yuv420p", "-g", "4", "-keyint_min", "4", "-x264-params", "crf=26:ref=2:scenecut=0"],
    },
    {
        "id": "smpte_intra_128x96",
        "title": "SMPTE Bars 128x96 (Pure Intra + Strong Deblock)",
        "tag": "Intra + Deblock",
        "description": "6 pure Intra frames at QP=32 showcasing Chroma DC/AC reconstruction, 9 Intra_4x4 modes, and ITU-T H.264 bS=4 strong loop deblocking.",
        "src": ["-f", "lavfi", "-i", "smptebars=size=128x96:rate=10", "-frames:v", "6"],
        "enc": ["-c:v", "libx264", "-profile:v", "baseline", "-pix_fmt", "yuv420p", "-g", "1", "-x264-params", "qp=32:scenecut=0"],
    },
]


def main() -> None:
    cmd = ["moon", "build", "--target", "js", "--release", "--deny-warn", "web"]
    print("Running:", " ".join(cmd))
    subprocess.run(cmd, cwd=ROOT, check=True)

    built_js = ROOT / "_build" / "js" / "release" / "build" / "web" / "web.js"
    if not built_js.exists():
        raise FileNotFoundError(f"Expected JS build artifact not found: {built_js}")

    DOCS.mkdir(parents=True, exist_ok=True)
    target_js = DOCS / "moon-h264.js"
    shutil.copy2(built_js, target_js)
    print(f"Copied {built_js} -> {target_js} ({target_js.stat().st_size} bytes)")

    samples_js = DOCS / "samples.js"
    # Regenerate sample streams using ffmpeg if available; otherwise keep committed docs/samples.js
    if shutil.which("ffmpeg"):
        OUT_DIR.mkdir(parents=True, exist_ok=True)
        samples = []
        for meta in PRESETS:
            h264_path = OUT_DIR / f"web_{meta['id']}.h264"
            enc_cmd = (
                ["ffmpeg", "-y", "-hide_banner", "-loglevel", "error"]
                + meta["src"]
                + meta["enc"]
                + ["-f", "h264", str(h264_path)]
            )
            subprocess.run(enc_cmd, check=True)
            raw = h264_path.read_bytes()
            samples.append(
                {
                    "id": meta["id"],
                    "title": meta["title"],
                    "tag": meta["tag"],
                    "description": meta["description"],
                    "size_bytes": len(raw),
                    "hex": raw.hex(),
                }
            )
        samples_js.write_text(
            "globalThis.MOON_H264_SAMPLES = " + json.dumps(samples, ensure_ascii=False) + ";\n",
            encoding="utf-8",
        )
        print(f"Wrote {samples_js} ({samples_js.stat().st_size} bytes, {len(samples)} presets)")
    elif not samples_js.exists():
        raise RuntimeError("ffmpeg not found and docs/samples.js does not exist")

    smoke = (
        "require('./docs/moon-h264.js');\n"
        "require('./docs/samples.js');\n"
        "const M = globalThis.MoonH264;\n"
        "for (const s of globalThis.MOON_H264_SAMPLES) {\n"
        "  const res = M.decodeHex(s.hex);\n"
        "  if (!res.ok) throw new Error('web decodeHex failed for ' + s.id + ': ' + res.error);\n"
        "  if (!res.frames || res.frames.length === 0) throw new Error('no frames decoded for ' + s.id);\n"
        "  const f0 = res.frames[0];\n"
        "  if (f0.rgba.length !== f0.width * f0.height * 4) throw new Error('bad rgba size for ' + s.id);\n"
        "  if (!f0.mb_svg.includes('moon-h264-mb-map')) throw new Error('missing mb svg for ' + s.id);\n"
        "  if (!res.bitrate_svg.includes('moon-h264-bitrate')) throw new Error('missing bitrate svg for ' + s.id);\n"
        "  console.log('WEB_SMOKE_OK', s.id, f0.width + 'x' + f0.height, 'frames=' + res.frames.length, 'nalus=' + res.nalus.length);\n"
        "}\n"
    )
    subprocess.run(["node", "-e", smoke], cwd=ROOT, check=True)


if __name__ == "__main__":
    main()
