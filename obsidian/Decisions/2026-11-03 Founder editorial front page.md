---
type: decision
date: 2026-11-03
status: superseded
---
# Founder editorial front page and a new visual world

## Context
The user (Hoang) asked for a landing page at happyhuman.no that shows the founders' movement and mission: creating happy humans through training and lifestyle. The old front page only described [[Bootcamp i Blomvåg]]. Asked through the `/impeccable` skill, the user chose:
- a **new front page for the movement**, with the bootcamp moved to its own page (`/no/trening`);
- a **new visual expression** instead of the 2026-11-02 world (fjord/mist/sun, Geist, the rising-sun arch);
- **"join a free class"** as the one main action.

In the direction round the user re-rolled twice, steered the second re-roll with "make it personal, professional, clean, modern", and then chose the "Grunnleggerportrett" (founder portrait editorial) card, **styled after [The Pilates Class](https://thepilatesclass.com/)**.

## Decision
The front page tells the movement through its two founders, in a calm editorial style:
- **Colours:** warm paper `#FAF8F4` and sand `#F0ECE4` grounds, charcoal ink `#232220`, one deep coastal teal band `#24403F`, and a pale sun `#F3D88A` used only as the fill of the main action. Dark mode is a warm charcoal; the teal band and sun button keep their colours.
- **Type:** Albert Sans (regular weight, a Scandinavian geometric sans) for headings and body; Source Serif 4 (light) for leads, the founders' letter and other long, warm lines. Geist is gone except Geist Mono for code.
- **Shapes:** square corners everywhere (`--radius: 0`), square buttons with small uppercase labels, thin hairlines between list items.
- **Page:** full-bleed fjord hero with the founders "signing" it → the founders' letter → Kaja and Hoang → the movement as tabs (group classes, PT, clothing, blog; what's not launched yet is marked "Kommer") → "Plass til alle" on teal → the free-class offer → footer.

The direction contract is in `.impeccable/surfaces/web-app-lang-page-tsx.md`; product truth for agents is in `PRODUCT.md`; the design system is in `DESIGN.md`.

## Alternatives considered
- **Gymsalen** (the gym-hall floor and its court lines) and **Merket sti** (trail marks and signposts): first round, re-rolled.
- **Rubber-hose cartoon**, **paper automata**, **rosemaling border**: the "bolder" re-roll, re-rolled.
- **Piktogram** (a clean signage system with exercise pictograms), **departure board**, **hand-drawn zine**: second re-roll; the user picked the founder editorial card instead.
- Keeping the 2026-11-02 world: the user asked for a new visual expression.

## Consequences
- The old tokens (`--fjord`, `--mist`, `--sun`) now point at the new colours, so `/trening`, the info pages and the style guide pick up the new palette automatically, but their layouts are still the old world (arches, pills, semibold headings). They need a redesign pass.
- The arch motif and "one typeface: Geist" rules in [[Decisions/2026-11-02 Rising-sun arch as the one motif]] no longer apply to new work.
- Good photos are now the main gap: the page wants real training and lifestyle photos, and a better portrait of Hoang (the current file is 427 × 534 px).

## Related
- [[Features/Landing Page]]
- [[Decisions/2026-11-02 Rising-sun arch as the one motif]]
- [[Decisions/2026-10-26 Brand palette from the punch card]]

> **Superseded 2026-11-03** by [[Decisions/2026-11-03 Sea and buoy front page]].
