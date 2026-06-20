# Status — SurfaceBend

**Last updated:** 2026-06-21
**Maturity:** 🟠 `status-prototype` (single-page demo)

## What's done

- Single-page Next.js 15 UI for the "tactile interface" concept
- URL capture form (no validation — accepts anything)
- Three starter panels: Hero Surface, Feature Stripe, Call To Action — each with title, description, and effect labels
- Surface panel preview component
- Extracted pure helper `lib/selectById.ts` (nullable id variant — `activePanel` can be `null`)
- ESLint configured, 0 errors / 0 warnings
- 7 Vitest tests: 5 for `selectById` (match, missing, null id, empty, defensive first-of-duplicates) + 2 starter-data regression guards (unique IDs, every panel has effects)
- Build, lint, typecheck, tests all green

## What's left

This is a **prototype, not a product.** Real product would need:

- **Actually capture a website** — the URL form currently does nothing with the URL; the preview panels are hardcoded
- **Real bend/ripple/hover effects** — current implementation is CSS-based (despite earlier topics suggesting canvas/webgl, which I removed from the repo metadata). Real "tactile" effects probably want WebGL or a canvas renderer
- **Export functionality** — README says "export-ready outputs," no such feature exists
- **Persistence** — no saved surfaces
- **Product spec** — what does the user actually use this for? Designer prototyping tool? Marketing splash-page builder? Demo for a future SDK?

## Quality gates

| Gate | Status |
|---|---|
| Build | ✅ |
| Lint | ✅ 0 errors |
| Typecheck | ✅ |
| Tests | ✅ 7 / 1 suite |

## Deployment

Not yet deployed. Zero-config Vercel possible.
