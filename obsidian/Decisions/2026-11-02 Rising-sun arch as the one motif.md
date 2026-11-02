---
type: decision
date: 2026-11-02
status: accepted
---
# Rising-sun arch as the one motif

## Context
The user asked for the landing page to be "visually stunning". The previous version was clean but thin: no photos, a large empty illustration in the hero, and small type blocks separated by hairlines. We used the `design-taste-frontend` skill, which dealt the "One motif" direction (seed 189805591): take one shape from the subject and use it everywhere a designer would normally use a generic rounded rectangle.

## Decision
The motif is the **rising-sun arch** from the H monogram: a half circle standing on a flat line, the sun coming up over the fjord. It is used as:
- the mask on every photo (`Visual shape="arch"`);
- the half sun at poster size (hero card, the values band) and at text size (list bullets) via `SunArch`;
- the hero itself, split like the monogram: a top arch (photo) and a bottom arch (sun).

Items are separated by space or a tone step instead of hairline dividers. Brand colours, Geist and the type scale are unchanged.

## Alternatives considered
- "Split stage" (a sticky photo beside a scrolling column): needs many photos of our own, which we don't have.
- "The place carries it" (full-screen landscape photos): same problem, and it would make the page about scenery rather than training.
- Keeping thin `border-t` dividers: dropped, because they made the page read as a document rather than a brand.

## Consequences
- New brand pieces: `Visual shape="arch"`, `SunArch`, `Logo size="xl"`, `Reveal`. They are on the style guide.
- `AGENTS.md` and `DESIGN.md` now describe the motif and the "space, not hairlines" rule.
- Any new section should reuse the arch, not add a second shape.

## Related
- [[Features/Landing Page]]
- [[Features/Colour Guide]]
- [[Decisions/2026-10-26 H monogram as the logo]]
- [[Decisions/2026-11-02 Open-licensed place photos until we have our own]]
