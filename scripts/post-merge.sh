#!/usr/bin/env bash
set -euo pipefail

pnpm install --no-frozen-lockfile --lockfile=false
pnpm run build