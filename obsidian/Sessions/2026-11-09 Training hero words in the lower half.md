---
type: session
date: 2026-11-09
---
# 2026-11-09 Training hero words in the lower half

## What changed
- `/trening` hero: the three words (Leken, Intensiv, For alle) moved from the middle of the half sun to the middle of its lower half (75% down; the block spans about 60–90% on phones, 65–85% on desktop). Labels are 80% deep sea for a clearer hierarchy. See [[Features/Landing Page]].
- Checked at 375, 768 and 1280px, light and dark, no horizontal scroll; labels stay on one line on phones.
- Footer (`web/components/landing/site-footer.tsx`): the street address (`COMPANY.address`) is gone from the bottom line at the user's request; it still shows the company name and org. nr., and the address stays on `/kontakt`.
- Earlier the same day: pushed `main` to production (happyhuman.no) with the 2026-11-05/06 hero changes and the sticky header.

## Why
- The user wanted the words in the lower half of the sun, not its middle, and asked for the most visually appealing placement: centring them in the lower half leaves the arch open above and balances the space around the words.

- The user didn't want the street address in the footer on every page.

## Follow-ups
- [ ] While the sun rises in on load (`hh-rise-in`), the words briefly sit on the dark card above it (see [[Sessions/2026-11-06 Training hero sun centring]]).
