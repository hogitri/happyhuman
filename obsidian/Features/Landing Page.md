---
type: feature
status: in-progress
updated: 2026-11-02
---
# Landing Page

## Purpose
The front page at `/no` (and `/en`). It presents [[Bootcamp i Blomvåg]] to new people and sends them to the Facebook group, which is where sessions are posted and sign-up happens today. It is the first real page of the site.

## How it works
Redesigned on 2026-11-02 to be "visually stunning" ([[Decisions/2026-11-02 Rising-sun arch as the one motif]]). The whole page is built from **one shape**: the rising-sun arch in the H monogram. It shows up as the hero's two halves, the mask on every photo, the bullets in the lists, and a full-width sunrise band. Top to bottom:
1. **Header**: logo, four section links (Timen, Stasjonene, Kaja, Spørsmål; hidden on phones) and an outline "Bli med i gruppa" button. The hero holds the page's one sun button.
2. **Hero**: the monogram split in two. Right: a tall arch-shaped photo of Blomvåg that slowly crossfades to Ulvsund. Left: a card with the headline, lead and sun button, with a big half sun rising from its bottom edge carrying the three facts (60 min, 8–10 stations, 0 kr).
3. **Intro** (statement): one sentence with three small arch-shaped photos set into the line (the fjord, a kettlebell, the village).
4. **Slik er en time** (`#timen`, muted band): a diagram of ~130 small half suns going from scattered (people arriving) to a tight ribbon (warm-up) to neat sun-coloured rows (stations), with three steps under it.
5. **Velg ditt nivå** (`#stasjoner`): the page's **one live thing**. A Lettere/Tøffere switch changes all 8 sample stations to their easier or harder version, and the sun in each bullet rises higher on the harder level. Below it: the practical list (where, when, price, what to bring, kids).
6. **Trening som føles bra** (`#verdier`, fjord band): the four values in large type, and a big sun that rises out of the band's bottom edge as you scroll, carrying "Ingen før-og-etter-bilder…".
7. **Trent av en idrettsviter** (`#kaja`): an inset panel with Kaja's portrait under the arch, cropped by the panel's bottom edge, her background, her why, her quote and three facts.
8. **FAQ** (`#faq`): sticky heading and seven filled tiles (native `<details name>`, one open at a time); the open one turns sun.
9. **Final CTA**: a row of tiles cropped off both screen edges: the fjord photo, the sun tile with the fjord join button and a large monogram, and a flat fjord tile.
10. **Footer**: the logo built large across the page, then columns (tagline/place, info pages, contact, photo credits), copyright and the NO/EN switch.

**Live switch:** pure CSS (radio inputs + `:has()`), so it works without JavaScript and from the keyboard. Browsers without `:has()` show both versions.

**Motion** (all inside `prefers-reduced-motion: no-preference`): hero photo crossfade and slow drift, the hero sun rising on load, staggered section entrances (`components/brand/reveal.tsx`, run once per block, so nothing is hidden without JavaScript), the sunrise linked to scroll, and press/hover feedback on controls.

**Photos:** openly licensed pictures of Blomvåg and around from Wikimedia Commons, credited in the footer (`web/lib/photo-credits.ts`), plus Kaja's own portrait. None of them shows a class or members. See [[Decisions/2026-11-02 Open-licensed place photos until we have our own]].

The English headline is "Feel-good training." (not a literal translation of "Trening som gjør deg glad."), so it fits on two lines at every width.

All text comes from the dictionaries (`nav`, `hero`, `intro`, `session`, `stations`, `why`, `trainer`, `faq`, `finalCta`, `footer`).

## Code
- `web/app/[lang]/page.tsx` — assembles the sections and mounts `Reveal`
- `web/components/landing/` — `site-header`, `hero`, `intro`, `session`, `stations`, `values`, `trainer`, `faq`, `final-cta`, `site-footer`
- `web/components/brand/visual.tsx` — `Visual` (now with `shape="arch"` and crossfading `src` arrays) and `SunArch`; `logo.tsx` — `Logo` (new `xl` size)
- `web/components/brand/reveal.tsx` — section entrances
- `web/app/globals.css` — level switch and motion rules (end of file)
- `web/public/images/place/`, `web/public/images/people/` — photos; credits in `web/lib/photo-credits.ts`

## Open questions / TODO
- **For Kaja:** confirm or replace the 8 sample stations and their easier/harder versions (`stations.items`). They are examples written for the design.
- **For Kaja:** an FAQ on injuries, pregnancy and health conditions was drafted and taken out again, as agreed earlier, until she approves the wording.
- Replace the place photos with our own photos of classes (people of different ages and levels training together) once they exist and members have agreed to be shown.
- Kaja's portrait is a national-team photo from her archive (`obsidian/Attachments`); swap it for a training-context photo if she prefers.
- The H monogram is redrawn by hand from the punch card; replace it with the designer's SVG when available ([[Features/Brand Identity]]).
- No real schedule on the page yet: it points to the Facebook group.

## Related
- [[Features/Colour Guide]]
- [[Bootcamp i Blomvåg]]
- [[Decisions/2026-11-02 Rising-sun arch as the one motif]]
- [[Decisions/2026-11-02 Open-licensed place photos until we have our own]]
- [[Decisions/2026-10-26 Brand palette from the punch card]]
