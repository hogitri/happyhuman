---
type: decision
date: 2026-11-03
status: superseded
---
# Editorial-report overhaul of the front page

## Context
Right after the founder editorial front page ([[Decisions/2026-11-03 Founder editorial front page]]) was finished, the user ran the `design-taste-frontend` skill (tasteskill v2) on it. Its audit measured hairlines, small uppercase labels, 13 font sizes, headings wrapping past two lines on phones and too little motion. The user chose **Overhaul**, the **editorial-report** direction ("the printed annual"), and option **(a)**: keep the brand's colours and typefaces, deal only the composition.

## Decision
- The front page is laid out like a printed programme (seed 1151770175, sheet in `.taste-skill/direction.json`): a full-bleed hero where four graded views of the coast around Rong and Blomvåg slowly crossfade, with two next-step cards bottom-right and the sun button in the header; a mosaic about the movement; Kaja and Hoang as full-screen chapters on teal and ink fields, plus an "Og deg" chapter; how a class works as a diagram of squares; **the one live thing**, a Lettere/Tøffere switch on eight sample stations; questions as reading text; a strip of three pictures (two photos and a sea clip) above a teal band whose underlined phrase is the action; an ink footer with the name first.
- Idea: Happy Human's promise of an easier and a harder version of every exercise becomes something the visitor can try on the page.
- House rules now apply site-wide: no hairlines, outlined boxes, uppercase labels, eyebrows, gradients, shadows or monospace; five type steps; headings two lines or fewer.
- Kept: palette (paper, sand, ink, teal, sun), Albert Sans + Source Serif 4, the H monogram logo, URLs, nav labels and anchors.

## Alternatives considered
- `split-stage` (a fixed photo beside a scrolling column) and `place-carries-it` (full-screen photos): both need more photos of our own than exist.
- Option (b), new colours and fonts from the draw: declined to keep the brand recognisable.

## Consequences
- New real pictures from Wikimedia Commons (CC0): the coastal path at Rong and Hestdalen; a CC BY 3.0 sea clip (Zelenogradsk, a generic sea, not our coast). All credited in the footer, graded copies marked "bearbeidet".
- `inspect.mjs` shows 0 FAIL at 1440, 768 and 390 on the production build; one warning kept on purpose (the warm "cream" paper is the brand's).
- The eight stations are still sample content for Kaja to confirm; the founders' bios and texts still need their approval.

## Related
- [[Features/Landing Page]]
- [[Decisions/2026-11-03 Founder editorial front page]]

> **Superseded 2026-11-03** by [[Decisions/2026-11-03 Sea and buoy front page]].
