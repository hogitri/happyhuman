---
type: session
date: 2026-10-26
---
# 2026-10-26 — Build landing page

## What changed
- Replaced the temporary home page with the bootcamp landing page: header with mobile menu, hero, why, sessions, practical info, trainer, FAQ, final CTA and footer. See [[Features/Landing Page]].
- Added dictionary keys `ui.home`, `ui.skipToContent` and `trainer.imageLabel` (no + en).
- Then, at the user's request: removed the eyebrow badges above section headings (and their dictionary keys) and the light/dark switch from the header; took FAQ out of the header nav; kept one call to action in the hero; made the mobile menu scroll smoothly after closing.
- Updated `web/AGENTS.md` to the new palette rules.

## Why
The copy for the landing page was already in the dictionaries; the user asked to start building the main page.

## Verified
- `npm run lint` and `npm run build` pass.
- Production build screenshotted in headless Chrome: `no` light and `en` dark at 1280px, `no` and `en` at 375px and `no` at 768px. No horizontal scroll.
- Clicked the nav links through Chrome DevTools at 1280px and 375px: smooth scroll, section ends up just under the header.
- Removed the "Hvorfor" values section; restyled the footer as a fjord band with link columns and the language toggle.
- Footer checked at 1280px and 375px: no horizontal scroll, its links scroll smoothly, the language toggle switches to `/en`.
- Not verified: keyboard tab order.

## Follow-ups
- [ ] Real photos instead of placeholders
- [ ] Logo choice ([[Features/Brand Identity]])
- [ ] Kaja to review the page copy
