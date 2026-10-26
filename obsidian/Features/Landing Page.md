---
type: feature
status: in-progress
updated: 2026-10-26
---
# Landing Page

## Purpose
The front page at `/no` (and `/en`). It presents [[Bootcamp i Blomvåg]] to new people and sends them to the Facebook group, which is where sessions are posted and sign-up happens today. It is the first real page of the site.

## How it works
A short, "less is more" page (redesigned 2026-10-26 at the user's request): few sections, short copy, lots of white space, and big visuals. Top to bottom:
1. **Header**: H-monogram logo and the yellow (sun) "Bli med i gruppa" button, the page's main call to action (moved here from the hero at the user's request). Not sticky; it scrolls away with the page. No section links, mobile menu or language switch.
2. **Hero**: very large headline and one-line lead (no button), then a wide illustration (sun over the fjord) and three quick facts (60 min, 8–10 stations, 0 kr).
3. **Values** (`#why`): the four values as large type, one per row with a short line beside it, divided by thin lines.
4. **Øktene** (`#sessions`): an illustration plus a title, a lead and a simple list: format, where, when, price, what to bring. This replaces the old tabs and the separate "Praktisk" cards.
5. **Treneren** (`#trainer`, fjord band): Kaja's quote in large type, her name and role, a two-sentence bio and her credentials as one small line.
6. **FAQ** (`#faq`): three questions, plain dividers.
7. **Final CTA**: sun band with the fjord join button.
8. **Footer**: logo, tagline, copyright, Facebook link and the NO/EN switch.

Images use the `Visual` brand component: until real photos exist, it draws brand illustrations (sunrise, sun, mist) built from the palette and the monogram. There are no "Bilde:" placeholder labels.

All text comes from the dictionaries (`hero`, `why`, `sessions`, `trainer`, `faq`, `finalCta`, `footer`). There is a skip-to-content link for keyboard users, and every external link says it opens Facebook. Copy was checked by the `health-content-reviewer`; its small wording fixes are applied.

## Code
- `web/app/[lang]/page.tsx` — assembles the sections
- `web/components/landing/` — `site-header`, `hero`, `values`, `sessions`, `trainer`, `faq`, `final-cta`, `site-footer`
- `web/components/brand/visual.tsx` — illustrations / photo slot; `web/components/brand/logo.tsx` — `Logo` and `LogoMark`
- `web/app/[lang]/dictionaries/{no,en}.json` — all copy; new keys `ui.home`, `ui.skipToContent`, `trainer.imageLabel`, `footer.linksTitle`, `footer.placeTitle`, `footer.place`, `footer.facebook`

## Open questions / TODO
- **For Kaja:** add an FAQ on injuries, pregnancy and health conditions ("tell Kaja, ask your doctor or physio if unsure, pain means stop")? Suggested by the health-content review; not added without her OK.
- **For Kaja:** soften "intensiv" in the sessions title ("En leken time med høy energi")? It sits next to "Ingen krav til form".
- Replace the gradient photo placeholders with real photos (people of different ages and levels training together; see the imagery rules in `AGENTS.md`).
- The H monogram is redrawn by hand from the punch card; replace it with the designer's SVG when available ([[Features/Brand Identity]]).
- The page says the bootcamp is free ("0 kr", FAQ). A 10-session punch card exists; update the copy if pricing changes.
- No real schedule on the page yet: it points to the Facebook group.

## Related
- [[Features/Colour Guide]]
- [[Bootcamp i Blomvåg]]
- [[Decisions/2026-10-26 Brand palette from the punch card]]
