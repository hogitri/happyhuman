---
type: session
date: 2026-11-05
---
# 2026-11-05 Training hero polish

## What changed
- `/trening` hero: the three words in the half sun (Leken, Intensiv, For alle) now sit on the half disc's visual middle instead of its bottom edge, and the values stay on one line when a label wraps on phones (`web/components/landing/hero.tsx`). Committed as 5b8c700.
- Colour check after the switch to sun yellow: every colour on `/trening` renders yellow locally and on happyhuman.no. The last orange token (the unused chart colour `#F4A261`, `--chart-4` light / `--chart-3` dark) now points at tide / sea glass in `web/app/globals.css`. Stale "orange" wording fixed in `AGENTS.md`, `DESIGN.md`, `web/components/home/join.tsx` and [[Features/Landing Page]].
- `/trening` hero photo: one still photo of Blomvåg instead of a crossfade to Ulvsund. The crossfade is gone from the code: `Visual` (`web/components/brand/visual.tsx`) takes a single `src`, and the `hh-crossfade` animation is removed from `globals.css`. The style guide example matches.

## Why
- The user saw the words sitting too low in the sun and asked for them centred.
- The user still saw an orange sun on `/trening`; nothing orange is served, so it was most likely a cached page or stale dev CSS.
- The user doesn't want changing pictures, in line with the design rule "still pictures only".

## Follow-ups
- [ ] `web/public/images/home/ill-ulvsund-tall.webp` is no longer used; delete it or find it a place.
- [ ] Commit and push the colour and photo changes.
