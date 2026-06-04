# Release Memory: SurfaceBend
_Last updated: 2026-06-04_

## Current Status

SurfaceBend is a static Next.js prototype for tactile web-layout interface scenes. README says real page capture and richer motion are future work.

Known verification: `pnpm build` and `pnpm exec tsc --noEmit` passed on 2026-06-04. The latest `pnpm build` also confirmed static output with `out/index.html` and `out/_headers`.

## Release Target

Public demo release.

## Success Criteria

- Production build passes.
- URL concept flow and surface behavior selection work.
- Demo clearly labels capture as conceptual if not real.
- Visual presentation feels polished on desktop and mobile.
- Live URL is added after deployment.

## Ordered Plan

1. Run `pnpm build`.
2. Remove generated `out/` from git consideration unless intentionally deploying static output.
3. Verify URL capture form and surface panel behavior.
4. Clarify README/demo copy around conceptual capture.
5. Deploy as a Cloudflare Pages demo.
6. Add live URL to README.

## Risks

- Real users may expect actual page capture.
- Full production requires real capture pipeline, export/share flow, and deeper motion.

## First Task

Deploy demo after a quick browser smoke check.

## Latest Prep Notes

- Added README release-scope note clarifying conceptual capture.
- Added Cloudflare Pages setup: `.nvmrc`, README deployment values, and static `_headers`.
- Added `out` to `.gitignore`.
- Standalone `next lint` is not configured and prompts interactively; use build/typecheck as current release gate until ESLint is migrated.
- Polished README with public-demo status, technical decisions, deployment settings, verification, known limits, and author section.
