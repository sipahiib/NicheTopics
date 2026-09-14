#!/usr/bin/env bash
set -euo pipefail

mkdir -p public/footage
curl -L --fail -o public/footage/warehouse-robots.mp4 https://www.pexels.com/download/video/32386624/
curl -L --fail -o public/footage/smartwatch-health.mp4 https://www.pexels.com/download/video/5974322/
curl -L --fail -o public/footage/ev-charging.mp4 https://www.pexels.com/download/video/4817952/
curl -L --fail -o public/footage/office-team.mp4 https://www.pexels.com/download/video/7165691/
curl -L --fail -o public/footage/solar-farm.mp4 https://www.pexels.com/download/video/19350561/
curl -L --fail -o public/footage/city-timelapse.mp4 https://www.pexels.com/download/video/30397327/
