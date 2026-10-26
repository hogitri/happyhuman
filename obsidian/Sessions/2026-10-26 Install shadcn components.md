---
type: session
date: 2026-10-26
---
# 2026-10-26 — Install shadcn components

## What changed
- Initialised shadcn/ui in `web/` (`components.json`, `lib/utils.ts`, theme variables in `app/globals.css`).
- Installed all 64 registry UI components into `web/components/ui/` plus hooks in `web/hooks/`.
- Wrapped the app in `TooltipProvider` and added `<Toaster />` in `web/app/layout.tsx`.
- Type-check passes; dev server serves the page.

## Why
The user wants a full component library available before building pages. See [[Features/UI Components]] and [[Decisions/2026-10-26 Use shadcn base-nova preset]].

## Follow-ups
- [ ] Decide whether to install shadcn blocks (dashboard, login, sidebar layouts)
- [ ] Choose between `toast` and `sonner` for notifications
