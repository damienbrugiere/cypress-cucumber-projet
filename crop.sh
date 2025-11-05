#!/bin/bash
for file in cypress/videos/*.mp4; do
  ffmpeg -i "$file" -ss 2 -c:v libx264 -preset medium -crf 18 -c:a aac -b:a 128k "cropped_${file##*/}"
done