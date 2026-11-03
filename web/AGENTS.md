<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Happy Human design system

Project-wide rules live in the root `../AGENTS.md`. Read its **Design system** section before building UI. In short:

- Reference build: the front page, `app/[lang]/page.tsx` and `components/home/`.
- Palette in `app/globals.css`: foam, sea glass, deep sea, buoy orange (the one main action, deep text on it), seaglass; field classes `.hh-deep`, `.hh-glass`, `.hh-buoy`. No raw colours in components.
- Albert Sans only, semibold headings, five type steps; pill buttons; large rounded media; still photos only.
- Norwegian only: all text comes from `app/[lang]/dictionaries/no.json`.
