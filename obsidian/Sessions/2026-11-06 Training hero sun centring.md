---
type: session
date: 2026-11-06
---
# 2026-11-06 Training hero sun centring

## What changed
- `/trening` hero: the three words (Leken, Intensiv, For alle) now sit in the middle of the half sun, horizontally and vertically, at 375, 768 and 1280px in light and dark mode (`web/components/landing/hero.tsx`). See [[Features/Landing Page]].
- The sun and the words share their own box, and the word block is centred on the half disc's centroid (57% down). Values share one row and labels the next (subgrid), so one wrapping label can't skew the block.
- Phones: side padding 8% instead of 12%, so "store og små" no longer wraps. Large screens: less gap above the sun so the card doesn't clip its bottom.

## Why
- The user still saw the words off-centre after [[Sessions/2026-11-05 Training hero polish]]. That fix positioned the words against a box that included the padding above the sun, and the wrapped label made the block bottom-heavy.

## Follow-ups
- [ ] While the sun rises in on load (`hh-rise-in`), the words briefly sit on the dark card above it. Pre-existing; consider fading the words in with the sun.
