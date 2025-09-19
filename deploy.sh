#!/bin/bash
set -e
MSG=${1:-"feat: polish site, themes, PWA, recruiter"}
git add -A
git commit -m "$MSG" || echo "⚠️ Nothing to commit"
git push -f origin main
vercel --prod --yes
