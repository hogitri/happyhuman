---
type: decision
date: 2026-11-02
status: accepted
---
# Open-licensed place photos until we have our own

## Context
The redesigned landing page needs real pictures, but we have no photos of classes yet, and members can't be shown without their consent. Stock photos of strangers training would look like our members, which would be misleading.

## Decision
Use openly licensed photos of **the place** (Blomvåg, Ulvsund, Hjeltefjorden from Rong) and of **simple equipment** (a kettlebell), from Wikimedia Commons, plus Kaja's own portrait. No photo shows people presented as members or a class. Every photo is credited in the footer (`web/lib/photo-credits.ts`):
- "Blomvaag" and "Ulvsund" by Tollef Salemann, CC0
- "Hjeltefjorden seen from Rong pier" by Sileas, CC BY-SA 4.0
- "Kettlebell truebalance romeike" by Detlef Romeike, CC BY-SA 2.5

The photos are cropped (arch mask) but not otherwise altered.

## Alternatives considered
- Brand illustrations only (the old `Visual` scenes): kept for empty slots, but a page with no real pictures read as unfinished.
- Stock photos of people training: rejected as misleading, and against the imagery rules (real people training *with us*).

## Consequences
- Replace them with our own class photos when they exist (with members' consent). CC BY-SA credits must stay as long as those photos are used.

## Related
- [[Features/Landing Page]]
- [[Decisions/2026-11-02 Rising-sun arch as the one motif]]

> **Update 2026-11-03:** the site no longer shows photo credits, so only CC0 photos (and our own) are used. The CC BY-SA photos of Hjeltefjorden and the kettlebell were removed.
