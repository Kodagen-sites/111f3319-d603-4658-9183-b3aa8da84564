#!/usr/bin/env bash
# ---------------------------------------------------------------
# stitch-scenes.sh
# Concatenates all scene-N.mp4 files in raw/ into raw/final.mp4
#
# Usage:
#   ./scripts/stitch-scenes.sh
# ---------------------------------------------------------------

set -euo pipefail

RAW_DIR="raw"
OUT="${RAW_DIR}/final.mp4"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "✗ ffmpeg not found. Install it first."
  exit 1
fi

# Find all scene-N.mp4 sorted
SCENES=$(ls -1 "${RAW_DIR}"/scene-*.mp4 2>/dev/null | sort)
COUNT=$(echo "$SCENES" | wc -l | tr -d ' ')

if [ -z "$SCENES" ] || [ "$COUNT" -eq 0 ]; then
  echo "✗ No scene-*.mp4 files in ${RAW_DIR}/"
  exit 1
fi

echo "→ Stitching ${COUNT} scenes into ${OUT}"

# Build filter_complex for N inputs
INPUTS=""
FILTER=""
for i in $(seq 0 $((COUNT - 1))); do
  FILE=$(echo "$SCENES" | sed -n "$((i + 1))p")
  INPUTS="$INPUTS -i $FILE"
  FILTER="$FILTER[$i:v]"
done
FILTER="${FILTER}concat=n=${COUNT}:v=1[outv]"

ffmpeg -hide_banner -loglevel warning -y \
  $INPUTS \
  -filter_complex "$FILTER" \
  -map "[outv]" \
  -c:v libx264 -crf 18 -preset slow \
  "$OUT"

DURATION=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$OUT" 2>/dev/null)
echo "✓ Wrote ${OUT} (duration: ${DURATION}s)"
