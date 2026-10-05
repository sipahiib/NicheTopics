"""Transfer only produced delivery files to temporary Composio upload storage."""
import json
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "build/weekly-ai-muse"
FILES = {"master": ("meta-muse-master.mp4", "video/mp4"),
         "thumbnail": ("thumbnail.png", "image/png"),
         "captions": ("captions.en.srt", "application/octet-stream")}


def main():
    transfers = json.loads((OUT / "upload-transfer.json").read_text())
    for name in sys.argv[1:]:
        filename, mime = FILES[name]
        upload_url = transfers[name]["upload_url"]
        with tempfile.NamedTemporaryFile(mode="w", suffix=".curl", delete=True) as config:
            config.write(f'url = "{upload_url}"\nrequest = "PUT"\n')
            config.write(f'header = "Content-Type: {mime}"\nupload-file = "{OUT / filename}"\n')
            config.flush()
            subprocess.run(["curl", "--fail", "--silent", "--show-error", "--config", config.name,
                            "--output", str(OUT / f"{name}-transfer-response.txt")], check=True)
        print(f"Transferred {name}: {(OUT / filename).stat().st_size} bytes")


if __name__ == "__main__":
    main()
