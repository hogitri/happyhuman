# Architecture Overview

## Main parts
- `web/` — the web app. Next.js 16 (App Router, Turbopack, `cacheComponents` on), React 19, TypeScript, Tailwind CSS v4.
  - `web/proxy.ts` — redirects URLs without a language to `/no` or `/en`. See [[Decisions/2026-10-26 i18n with lang route segment]].
  - `web/app/[lang]/` — every page lives under the language segment. `layout.tsx` is the root layout (fonts, theme, tooltip and toast providers).
  - `web/app/[lang]/dictionaries/` — all page text, in `no.json` and `en.json`.
  - `web/app/[lang]/styleguide/` — the colour guide; see [[Features/Colour Guide]].
  - `web/app/global-not-found.tsx` — the 404 page for unknown URLs.
  - `web/components/ui/` — shadcn/ui components; see [[Features/UI Components]].
  - `web/components/brand/` — Happy Human building blocks built on the shadcn components. Pages use these.
  - `web/lib/` — `i18n.ts` (locales), `fonts.ts`, `site.ts` (Facebook group URL), `utils.ts`.
  - `web/hooks/` — shared React hooks.
- `obsidian/` — this knowledge base.

Run the app with `npm run dev` in `web/` (serves on http://localhost:3000).

Known dev-server quirk: a running `npm run dev` (Turbopack) can miss newly created route folders and keep returning 404 for them, even though `npm run build` serves them. Saving the page file again doesn't always help; restart the dev server. Seen on 2026-10-26 with `/[lang]/personvern` and `/[lang]/salgsvilkar`.

Note: this Next.js version has breaking changes from older versions; read `web/node_modules/next/dist/docs/` before writing Next.js code (see `web/AGENTS.md`).
