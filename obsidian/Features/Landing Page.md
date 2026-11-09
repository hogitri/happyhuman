---
type: feature
status: in-progress
updated: 2026-11-03
---
# Landing Page

## Purpose
Two pages share this note:
- **Front page** (`/no`, `/en`): the Happy Human movement, told through its founders Kaja and Hoang. It explains what Happy Human is (training and lifestyle for body and mind), shows who started it, and sends people to a free class. New on 2026-11-03.
- **Training page** (`/no/trening`, `/en/trening`): the old front page about [[Bootcamp i Blomvåg]], moved here unchanged.

## Front page (2026-11-03, "sea and buoy")
Crisp and minimal, inspired by wearecollins.com and fornebuporten.no/lifestyle; copy from the earlier live site. **No menu** on any page: the logo sits alone at the top (inside the hero on the front page). See [[Decisions/2026-11-03 Sea and buoy front page]]. Top to bottom:
1. **Hero** on deep sea: the logo, "Trening som gjør deg glad.", the lead, the sun-yellow "Bli med i gruppa" button and a "Personlig trening" link; one still photo of Hjeltefjorden that opens from a rounded card to full width as you scroll.
2. **Why** (`#bevegelsen`): "Trening skal føles bra i kropp og hode", the four values, a wide photo of Ulvsund, and a short description of the sessions.
3. **Dette tilbyr vi** (`#tilbud`, no "Gratis"/"Betalt" labels on the cards): the bootcamp card (illustration: a group training at stations by the sea, with a child) and the personal training card (illustration: one-to-one training indoors in our home gym, a deep, upright back squat in the rack seen from the front, with the trainer beside, a bench and dumbbells) ("Ta kontakt for ulike pakker tilpasset dine behov"; "Ta kontakt" opens an email).
4. **Lurer du på noe?**: three questions.
5. **Klar for å bli med?**: a sun-yellow panel with the join button.
6. **Footer** on deep sea: logo, contact, pages. No photo credits anywhere: every place photo is CC0 (the hero is the coastal path at Rong, the personal training card Hestdalen on Rong).

Copy rules from the user (2026-11-03): no sentence dashes (commas or rephrased sentences instead; number ranges like 8–10 stay); -en endings instead of -a (gruppen, uken, barnene); nothing about food, mental health, clothing or outdoor life.

## Training page (was the front page until 2026-11-03)

On `/trening`, the half sun in the hero now carries three words instead of numbers: **Leken** (og variert), **Intensiv** (på ditt nivå), **For alle** (store og små). The user disliked "60 minutter / 8–10 stasjoner / 0 kr alltid gratis". Since 2026-11-09 the words sit in the **lower half** of the sun, centred in that half (75% down the arch, `top-3/4 -translate-y-1/2` in `web/components/landing/hero.tsx`), so the arch keeps open sky above them and there is as much air above the words as below; the labels are 80% deep sea so the words read first. The user asked for this after a centred version (2026-11-06, on the half disc's centroid at 57%). Positions are measured against a box that holds only the sun, not the 48px gap above it. A subgrid keeps the three values on one row and the labels on the next; on phones the side padding is 8% so "store og små" stays on one line. On large screens the gap above the sun is smaller (`lg:pt-6`) so the card never clips the bottom of the sun.
Since 2026-11-03 the intro ("Vi trener ved sjøen…"), the values band ("Ingen før-og-etter-bilder…") and Kaja's quote are removed; "Slik er en time" has three simple flat illustrations (arriving, a warm-up ring, an easier and a harder step) instead of the big diagram; and the people section was later removed (Kaja and Hoang are presented on `/om-oss`). The layout below is from the 2026-11-02 world. Since 2026-11-03 it uses the new header, palette and fonts through the shared tokens, but still has the arches, pills and semibold headings: it needs a redesign in the new world. The header no longer links to its sections.

Redesigned on 2026-11-02 to be "visually stunning" ([[Decisions/2026-11-02 Rising-sun arch as the one motif]]). The whole page is built from **one shape**: the rising-sun arch in the H monogram. It shows up as the hero's two halves, the mask on every photo, the bullets in the lists, and a full-width sunrise band. Top to bottom:
1. **Header** (now: the logo only, sticky at the top since 2026-11-05, `web/components/landing/site-header.tsx`; was: logo, four section links (Timen, Stasjonene, Kaja, Spørsmål; hidden on phones) and an outline "Bli med i gruppa" button). The hero holds the page's one sun button.
2. **Hero**: the monogram split in two. Right: a tall arch-shaped still photo of Blomvåg (it crossfaded to Ulvsund until 2026-11-05, removed at the user's request: pictures never change). Left: a card with the headline, lead and sun button, with a big half sun rising from its bottom edge carrying three words about the class (Leken, Intensiv, For alle).
3. **Intro** (statement): one sentence with three small arch-shaped photos set into the line (the fjord, a kettlebell, the village).
4. **Slik er en time** (`#timen`, muted band): a diagram of ~130 small half suns going from scattered (people arriving) to a tight ribbon (warm-up) to neat sun-coloured rows (stations), with three steps under it.
5. **Velg ditt nivå** (`#stasjoner`): the page's **one live thing**. A Lettere/Tøffere switch changes all 8 sample stations to their easier or harder version, and the sun in each bullet rises higher on the harder level. Below it: the practical list (where, when, price, what to bring, kids).
6. **Trening som føles bra** (`#verdier`, fjord band): the four values in large type, and a big sun that rises out of the band's bottom edge as you scroll, carrying "Ingen før-og-etter-bilder…".
7. **Trent av en idrettsviter** (`#kaja`): an inset panel with Kaja's portrait under the arch, cropped by the panel's bottom edge, her background, her why, her quote and three facts.
8. **FAQ** (`#faq`): sticky heading and seven filled tiles (native `<details name>`, one open at a time); the open one turns sun.
9. **Final CTA**: a row of tiles cropped off both screen edges: the fjord photo, the sun tile with the fjord join button and a large monogram, and a flat fjord tile.
10. **Footer**: the logo built large across the page, then columns (tagline/place, info pages, contact, photo credits), copyright and the NO/EN switch.

**Live switch:** pure CSS (radio inputs + `:has()`), so it works without JavaScript and from the keyboard. Browsers without `:has()` show both versions.

**Motion** (all inside `prefers-reduced-motion: no-preference`): the hero photo's slow drift, the hero sun rising on load, staggered section entrances (`components/brand/reveal.tsx`, run once per block, so nothing is hidden without JavaScript), the sunrise linked to scroll, and press/hover feedback on controls.

**Photos:** openly licensed pictures of Blomvåg and around from Wikimedia Commons, credited in the footer (`web/lib/photo-credits.ts`), plus Kaja's own portrait. None of them shows a class or members. See [[Decisions/2026-11-02 Open-licensed place photos until we have our own]].

The English headline is "Feel-good training." (not a literal translation of "Trening som gjør deg glad."), so it fits on two lines at every width.

All text comes from the dictionaries (`nav`, `hero`, `intro`, `session`, `stations`, `why`, `trainer`, `faq`, `finalCta`, `footer`).

## Code
- Front page: `web/app/[lang]/page.tsx`; sections in `web/components/home/` (`hero`, `letter`, `founders`, `offer`, `room-for-all`, `join`)
- Training page: `web/app/[lang]/trening/page.tsx`
- `web/app/[lang]/page.tsx` — assembles the sections and mounts `Reveal`
- `web/components/landing/` — `site-header`, `hero`, `intro`, `session`, `stations`, `values`, `trainer`, `faq`, `final-cta`, `site-footer`
- `web/components/brand/visual.tsx` — `Visual` (now with `shape="arch"` and crossfading `src` arrays) and `SunArch`; `logo.tsx` — `Logo` (new `xl` size)
- `web/components/brand/reveal.tsx` — section entrances
- `web/app/globals.css` — level switch and motion rules (end of file)
- `web/public/images/place/`, `web/public/images/people/` — photos; credits in `web/lib/photo-credits.ts`

## Open questions / TODO
- **For Kaja and Hoang:** approve or rewrite the front page texts, bios and facts (`home` in the dictionaries).
- Real photos for the front page: training and lifestyle photos, and a sharper portrait of Hoang (current file 427 × 534 px).
- Redesign `/trening` (and the info pages and style guide) in the new visual world.
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
