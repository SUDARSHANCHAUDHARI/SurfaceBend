# SurfaceBend

[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](package.json)
[![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB.svg)](https://react.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Tactile web-layout prototype for turning interface panels into living, responsive surface scenes.

> **Status:** Public demo-ready · static build verified · URL capture is conceptual in the current version

## Table of Contents

- [Why This Exists](#why-this-exists)
- [Key Technical Decisions](#key-technical-decisions)
- [Features](#features)
- [Run Locally](#run-locally)
- [Deployment](#deployment)
- [Verification](#verification)
- [Known Limits](#known-limits)
- [About](#about)

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

---

## About

I'm Sudarshan Chaudhari, a Senior Quality Engineer, Test Automation specialist, and AI systems builder based in Bangkok, Thailand.

I have 13+ years of experience in software quality engineering, working across SaaS, fintech, gaming, web, mobile, cloud, and digital signage platforms. My background combines hands-on test automation with QA leadership, test strategy, CI/CD, release quality, production investigation, and cross-platform validation.

Alongside my professional QA career, I run [SudarshanTechLabs](https://sudarshantechlabs.com/), my independent engineering and product lab where I design, build, test, and ship software across Android, web, AI, cybersecurity, developer tooling, and cross-platform applications.

### What I work on

- ⚙️ **Quality Engineering & Test Automation** — Playwright, Selenium, Cypress, Appium, API testing, automation frameworks, end-to-end testing, CI/CD, release gates, GitHub Actions, risk-based testing, and production validation
- 🤖 **AI Systems & Automation** — AI agents, multi-agent orchestration, MCP servers, AI-assisted QA, prompt tooling, developer workflows, automation systems, and Claude Code plugins
- 📱 **Mobile & Cross-Platform Applications** — Android applications built with Kotlin and Jetpack Compose, Google Play releases, automated build and publishing pipelines, and cross-platform development spanning iOS, web, Windows, and macOS
- 🌐 **Web Applications & Platforms** — Full-stack applications using Next.js, TypeScript, Firebase, Cloudflare, REST APIs, and modern web infrastructure
- 🛠️ **Developer Tooling & CLI Engineering** — Rust, Python, TypeScript, CLI utilities, multi-repository tooling, build automation, release tooling, and engineering productivity systems
- 🛡️ **Cybersecurity & Observability** — Threat detection, log analysis, security auditing, vulnerability assessment, monitoring, and security-focused developer tools
- 📺 **Digital Signage & Device Platforms** — Content validation, playback testing, device compatibility, production investigation, monitoring, and QA across diverse hardware and operating-system environments

My work sits at the intersection of quality engineering, automation, AI, and software development. I approach products with a QA mindset from the beginning: understanding failure modes, designing for testability, automating repetitive work, and building release confidence into the engineering process.

Through SudarshanTechLabs, I also build products and tools from idea to production, covering architecture, development, testing, CI/CD, release automation, monitoring, and ongoing maintenance.

🌐 [sudarshantechlabs.com](https://sudarshantechlabs.com/) · 💼 [LinkedIn](https://linkedin.com/in/sudarshan-chaudhari) · 🐙 [GitHub](https://github.com/SUDARSHANCHAUDHARI) · ✉️ [sunny.sudarshan@gmail.com](mailto:sunny.sudarshan@gmail.com)
