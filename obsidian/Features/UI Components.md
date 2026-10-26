---
type: feature
status: in-progress
updated: 2026-10-26
---
# UI Components

## Purpose
A ready-made library of UI building blocks (buttons, dialogs, forms, tables, sidebar, charts, toasts…) so pages can be built without hand-rolling common components. They come from [[Glossary#shadcn/ui|shadcn/ui]], which copies the component source into the repo, so we own and can edit every file.

## How it works
- The `shadcn` CLI reads `web/components.json` (style `base-nova`, neutral colours, Lucide icons) and writes components into `web/components/ui/`.
- Components are built on Base UI (`@base-ui/react`) and styled with Tailwind v4. Theme colours are CSS variables in `web/app/globals.css`, with light and dark values.
- Class names are merged with `cn` (re-exported from `web/lib/utils.ts`).
- Two app-wide wrappers live in `web/app/layout.tsx`: `TooltipProvider` (needed for tooltips) and `<Toaster />` (shows `sonner` toasts).
- Import a component like this: `import { Button } from "@/components/ui/button"`.
- Add or update one with `npx shadcn@latest add <name>` from `web/`.

## Code
- `web/components/ui/` — 64 components (every `ui` item in the shadcn registry)
- `web/hooks/` — `use-mobile.ts`, `use-highlighted-code.ts`
- `web/lib/utils.ts` — `cn` helper
- `web/components.json` — shadcn config

## Open questions / TODO
- Registry `form` has no files in the `base-nova` style; use `field` for forms.
- Blocks (ready-made pages like dashboards and login screens) are not installed.
- Both `toast` and `sonner` are installed; pick one for notifications.

## Related
- [[Decisions/2026-10-26 Use shadcn base-nova preset]]
- [[Architecture/Overview]]
