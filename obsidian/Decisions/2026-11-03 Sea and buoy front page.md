---
type: decision
date: 2026-11-03
status: accepted
---
# Sea and buoy front page, Norwegian only

## Context
After two redesigns on 2026-11-03, the user asked for one combined result: a crisp, visually stunning, minimal front page inspired by wearecollins.com and fornebuporten.no/lifestyle, with motion but no changing pictures, and a palette that gives energy (training) combined with the calm of the coast. It should show what Happy Human is and why, the offer (free bootcamp, paid personal training) and, subtly, who is behind it with their sports background. The copy on the live site (happyhuman.no/no) is good enough, and the site should be **Norwegian only**.

## Decision
- **Palette "sea and buoy":** foam `#F2F5F3`, sea glass `#D3E6E0`, deep sea `#0F2B33`, buoy orange `#FF5A36` (the one main action and the closing panel; deep text on it, 4.8:1), seaglass `#9FD3C7` for small accents.
- **Type:** Albert Sans only, semibold headings with tight tracking, five steps.
- **Shapes and motion:** pill buttons, large rounded media; the hero rises in, the hero photo opens to full width on scroll, photos drift slightly inside their frames, a slow line of the four values moves across the screen. No crossfading pictures.
- **Page:** deep hero ("Trening som gjør deg glad.", orange join button, one photo, 60 / 8–10 / 0 kr) → why (four values, a wide photo of Ulvsund, the moving line, "Ingen før-og-etter-bilder…") → offer (bootcamp on deep sea, personal training on sea glass with "Meld interesse" by email) → Kaja's quote with both founders in one small row → three questions → buoy closing panel → deep footer.
- **Norwegian only:** `lib/i18n.ts` has only `no`; `/en/...` redirects to `/no/...` (308) in `proxy.ts`; the English dictionaries and the language switch are removed.

## Alternatives considered
- The founder editorial and editorial-report versions from earlier the same day: replaced by this request.
- Keeping English: the user asked for Norwegian only.

## Consequences
- The old token names (`--sun`, `--fjord`, …) point at the new colours, so `/trening`, the info pages and the style guide pick up the palette but keep their older layouts (arches, rounded tiles); they need a redesign.
- `DESIGN.md` is marked outdated until it is regenerated; `AGENTS.md` and `globals.css` are the source of truth.
- Personal training has no price or booking yet; "Meld interesse" opens an email to post@happyhuman.no.

## Related
- [[Features/Landing Page]]
- [[Decisions/2026-11-03 Editorial-report overhaul]]
- [[Decisions/2026-10-26 Norwegian bokmål as primary language]]

> **Update 2026-11-03:** the moving line of values was removed (too fast and distracting); the participant gains now stand still under the wide illustration.
> **Update 2026-11-03 (later):** the line of participant gains was removed completely.
> **Update 2026-11-05:** the accent changed back from buoy orange `#FF5A36` to the sun yellow `#F3D88A` (the user's choice). The CSS token is still called `buoy`. Illustration suns are yellow and placed so they stay visible in phone crops.
