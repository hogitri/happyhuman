<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Happy Human design system

Project-wide rules live in the root `../AGENTS.md`. Read its **Design system** section before building UI. In short:

- Style guide: `app/[lang]/styleguide/page.tsx` (http://localhost:3000/no/styleguide). Keep it updated when you add tokens or brand components.
- Colour tokens: `app/globals.css` (light `:root`, dark `.dark`). No raw hex values or Tailwind palette colours in components.
- Build pages from `components/brand/*` (Logo/LogoMark, Section, SectionHeading, FacebookCta, Visual, …), then page sections in `components/landing/`, then `components/ui/*` (shadcn).
- Fjord text on sun (never white), sun only as a fill on light backgrounds, and `text-link` links are always underlined.
- All text comes from `app/[lang]/dictionaries/{no,en}.json`.
