# SurfaceBend

[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](package.json)
[![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB.svg)](https://react.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Tactile web-layout prototype for turning interface panels into living, responsive surface scenes.

> **Status:** Public demo-ready · static build verified · URL capture is conceptual in the current version

## Why This Exists

Web pages are usually flat. SurfaceBend explores how a web layout could feel more physical through panel motion, surface behavior, and premium landing-page presentation.

## Key Technical Decisions

**The URL flow is conceptual first.** The current demo focuses on the interaction language before building real capture infrastructure.

**Static Next.js output keeps deployment simple.** The prototype can be hosted publicly without backend capture services.

**Surface behaviors communicate product direction.** Different motion modes make the idea inspectable even before real page rendering is implemented.

## Features

- URL-led concept input
- surface behavior selector
- panel motion preview
- tactile visual language
- responsive landing-style demo

## Run Locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Deployment

| Setting | Value |
|---|---|
| Release scope | Public demo |
| Framework preset | `Next.js` |
| Build command | `pnpm build` |
| Build output directory | `out` |
| Node version | `20.19.6` |

## Verification

```bash
pnpm build
pnpm exec tsc --noEmit
```

## Known Limits

- No real page capture yet.
- No export/share pipeline yet.
- Motion behavior is prototype-level.

## Author

Built by **Sudarshan Chaudhari** — SudarshanTechLabs.
