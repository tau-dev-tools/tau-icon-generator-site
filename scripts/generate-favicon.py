from __future__ import annotations

import json
from pathlib import Path

from PIL import Image


PROJECT_ROOT = Path(__file__).resolve().parents[1]
INPUT_PNG = PROJECT_ROOT / "public" / "appicon.png"

OUTPUTS = {
    "png16": PROJECT_ROOT / "favicon-16x16.png",
    "png32": PROJECT_ROOT / "favicon-32x32.png",
    "apple180": PROJECT_ROOT / "apple-touch-icon.png",
    "ico": PROJECT_ROOT / "favicon.ico",
    "manifest": PROJECT_ROOT / "site.webmanifest",
}


def resize_square(img: Image.Image, size: int) -> Image.Image:
    # Ensure RGBA so transparent backgrounds stay transparent
    img = img.convert("RGBA")

    # If it's not square, contain it within a square canvas
    w, h = img.size
    if w != h:
        side = max(w, h)
        canvas = Image.new("RGBA", (side, side), (0, 0, 0, 0))
        canvas.paste(img, ((side - w) // 2, (side - h) // 2))
        img = canvas

    return img.resize((size, size), resample=Image.Resampling.LANCZOS)


def main() -> None:
    if not INPUT_PNG.exists():
        raise SystemExit(f"Missing input file: {INPUT_PNG}")

    base = Image.open(INPUT_PNG)

    resize_square(base, 16).save(OUTPUTS["png16"], format="PNG", optimize=True)
    resize_square(base, 32).save(OUTPUTS["png32"], format="PNG", optimize=True)
    resize_square(base, 180).save(OUTPUTS["apple180"], format="PNG", optimize=True)

    # Generate an .ico with multiple embedded sizes for compatibility
    ico_sizes = [(16, 16), (24, 24), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
    base_rgba = resize_square(base, 256)
    base_rgba.save(OUTPUTS["ico"], format="ICO", sizes=ico_sizes)

    manifest = {
        "name": "TAU Icon Generator",
        "short_name": "TAU",
        "icons": [
            {"src": "favicon-16x16.png", "sizes": "16x16", "type": "image/png"},
            {"src": "favicon-32x32.png", "sizes": "32x32", "type": "image/png"},
            {"src": "apple-touch-icon.png", "sizes": "180x180", "type": "image/png"},
        ],
        "display": "standalone",
    }
    OUTPUTS["manifest"].write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")

    print("Generated:")
    for key in ["ico", "png16", "png32", "apple180", "manifest"]:
        print(f"- {OUTPUTS[key].relative_to(PROJECT_ROOT)}")


if __name__ == "__main__":
    main()
