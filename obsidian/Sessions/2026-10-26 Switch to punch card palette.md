---
type: session
date: 2026-10-26
---
# 2026-10-26 — Switch to punch card palette

## What changed
- Replaced the coral/lime/navy/sand palette with the bootcamp punch card colours: fjord `#264653`, sun `#E9C46A`, mist `#F4F8F8`, plus a `--link` token (`web/app/globals.css`).
- Renamed brand variants: Section tones `navy`/`coral` → `fjord`/`sun`; ValueCard icon tones `lime`/`coral` → `sun`/`fjord`; PlaceholderImage gradients → `sun`/`fjord`/`mist` (`web/components/brand/`).
- shadcn `link` variants in `button.tsx` and `badge.tsx` now use `text-link` and are always underlined.
- Style guide page (`web/app/[lang]/styleguide/page.tsx`) shows the new colours, contrast ratios and rules.
- Vault: [[Features/Colour Guide]], [[Features/Brand Identity]], new [[Decisions/2026-10-26 Brand palette from the punch card]], old palette decision marked superseded, Glossary.

## Why
Hoang chose the punch card colours so the website matches the bootcamp material already in use.

## Verified
- `npm run lint` and `npm run build` pass.
- Production build checked in headless Chrome: style guide in light and dark mode, home page in `no` and `en` at 390px.

## Follow-ups
- [ ] Choose the logo (blocky wordmark or H monogram) and get SVGs
- [ ] Decide whether the type should change to match the punch card
