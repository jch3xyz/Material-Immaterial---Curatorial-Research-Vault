#!/usr/bin/env bash
#
# Local build/preview entry point for the Quartz site.
#
#   .site/build-site.sh            # build into .site/public
#   .site/build-site.sh --serve    # build and serve at http://localhost:8080
#
# Staging (which notes get published) lives in stage-content.sh — the single
# source of truth shared with the GitHub Actions deploy workflow.
#
set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

"$HERE/stage-content.sh"

cd "$HERE"
npx quartz plugin install
if [ "${1:-}" = "--serve" ]; then
  npx quartz build --serve
else
  npx quartz build
fi
