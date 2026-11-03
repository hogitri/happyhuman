---
type: session
date: 2026-11-03
---
# 2026-11-03 — Movement front page

## What changed
- New front page at `/no` and `/en` that presents the Happy Human movement through Kaja and Hoang: fjord hero, the founders' letter, the founders, the movement as tabs (group classes, PT, clothing, blog), "Plass til alle" and the free-class offer. See [[Features/Landing Page]].
- The old bootcamp front page moved unchanged to `/no/trening` (added to the sitemap).
- New visual world site-wide through the shared tokens: paper, sand, ink, teal and a pale sun; Albert Sans + Source Serif 4; square corners. See [[Decisions/2026-11-03 Founder editorial front page]].
- New header (links, centred logo, outline join button; links on a second row on phones) and square buttons everywhere.
- Warm, soft graded copies of the hero, Blomvåg and portrait photos in `web/public/images/home/`; every photo now carries its origin as an embedded comment. The footer credits mark the edited photos as "bearbeidet"/"edited" (`modified` in `web/lib/photo-credits.ts`), as CC BY-SA requires; derivatives keep the original licence.
- `PRODUCT.md` (product truth for design agents) at the project root; `AGENTS.md` design section and the style guide rewritten; `DESIGN.md` regenerated.
- Tools installed this session: Playwright CLI (global, npm prefix moved to `~/.npm-global`), Emil Kowalski's animation and design skills and the Impeccable design skill (with hooks in `.claude/settings.local.json`).

- Later the same day: overhauled the front page layout with the `design-taste-frontend` skill (editorial-report direction, brand kept): crossfading coast hero, founder chapters, the Lettere/Tøffere switch, questions as reading text, a picture strip and sea clip, a new ink footer, five type steps and no hairlines or uppercase labels site-wide. See [[Decisions/2026-11-03 Editorial-report overhaul]].
- Final version the same evening: the "sea and buoy" front page (palette, Albert Sans only, pill buttons, rounded media, motion without changing pictures), copy from the live site, and the site made **Norwegian only** (English dictionaries and the language switch removed, `/en` redirects to `/no`). See [[Decisions/2026-11-03 Sea and buoy front page]].
- Follow-up edits: menu removed on every page; the numbers band and the founders/quote section removed from the front page; the moving line now lists what participants get; personal training price says "Ta kontakt for ulike pakker tilpasset dine behov"; photo credits moved from the footer to `/om-oss`; on `/trening` the values band and Kaja's quote are removed and Hoang is added; no sentence dashes; nothing about food, mental health, clothing or outdoor life; Kaja's football and Hoang's basketball careers on `/om-oss`.
- More edits: `/om-oss` rewritten (plain lead, what we do = bootcamp and personal training, no roles, Hoang's Agens and Atlas roles, links to Antidoping Norge, Agens, Atlas Accelerator and the Facebook group); photo credits removed entirely, so the two CC BY-SA photos (Hjeltefjorden, the kettlebell) were replaced with CC0 ones; -en endings across the copy; `/trening` without the intro, with new illustrations and "Folkene bak Happy Human".
- Place photos replaced by flat palette illustrations made from the real CC0 photos (with a buoy-orange sun); founders' portraits gradient-mapped in the palette and upscaled; exercise pictograms and practical icons on `/trening`.
- The moving line (marquee) is replaced by a still, centred line of the participant gains; the user found the motion disturbing and too fast.
- The line of participant gains is removed completely.
- The offer cards now show drawn illustrations of the services themselves (group bootcamp, personal training) instead of landscapes.
- The personal training illustration now shows indoor one-to-one training in the home gym (squat rack, bench, dumbbells).
- `/trening` no longer has the people section; `/om-oss` was expanded with Kaja's and Hoang's backgrounds (futsal national team, BLNO), checked with a web search where possible.

## Why
The founders want happyhuman.no to show the movement and its mission, not only the bootcamp. The user chose the founder editorial direction styled after The Pilates Class, through Impeccable's direction rounds.

## Follow-ups
- [ ] Kaja and Hoang approve or rewrite the letter, bios and facts (`home` in the dictionaries).
- [ ] Real training and lifestyle photos; a sharper portrait of Hoang (current 427 × 534 px).
- [ ] Redesign `/trening`, the info pages and the rest of the style guide in the new world.
- [ ] Instagram link once the handle is confirmed.
