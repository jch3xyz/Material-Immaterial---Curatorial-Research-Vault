#!/usr/bin/env bash
#
# Stage the vault's publishable notes into the Quartz `content/` directory.
#
# ALLOWLIST by design: only the folders in PUBLISH are ever copied. _system/
# (pipeline/templates), .claude/ (agent memory), audits/, and inbox/ are never
# staged and can never be published. raw/ (full-text sources) IS published by
# explicit choice, so the reference links into it resolve.
#
# This is the single source of truth for "what goes on the public site" and
# is used by both build-site.sh (local) and the GitHub Actions deploy workflow.
#
set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VAULT="$(cd "$HERE/.." && pwd)"
DEST="$HERE/content"

PUBLISH=(concepts arguments tensions definitions metaphors sources references symbols maps authors books essays raw)

echo "Staging publishable notes -> $DEST"
rm -rf "$DEST"
mkdir -p "$DEST"
for d in "${PUBLISH[@]}"; do
  if [ -d "$VAULT/$d" ]; then
    rsync -a --exclude='.DS_Store' "$VAULT/$d" "$DEST/"
  else
    echo "  (skip: $d not found)"
  fi
done

# Curated landing page becomes the site homepage.
cp "$HERE/home.md" "$DEST/index.md"

# Normalize special characters so Quartz's file-slugs and link-hrefs agree
# (fixes citation links into raw/ chapters titled with ':' '[' '@' etc.).
python3 "$HERE/sanitize-content.py" "$DEST"

echo "Staged $(find "$DEST" -name '*.md' | wc -l | tr -d ' ') notes."
