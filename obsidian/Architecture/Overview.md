# Architecture Overview

## Main parts
- `web/` — the web app. Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4.
  - `web/app/` — routes and the root layout (`layout.tsx` holds app-wide providers).
  - `web/components/ui/` — shadcn/ui components; see [[Features/UI Components]].
  - `web/lib/`, `web/hooks/` — shared helpers and React hooks.
- `obsidian/` — this knowledge base.

Run the app with `npm run dev` in `web/` (serves on http://localhost:3000).

Note: this Next.js version has breaking changes from older versions; read `web/node_modules/next/dist/docs/` before writing Next.js code (see `web/AGENTS.md`).
