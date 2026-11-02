---
type: session
date: 2026-11-02
---
# UI review command and DESIGN.md

## What changed
- Installed `@playwright/cli` globally (for browser checks).
- Added `/ui-review` (`.claude/commands/ui-review.md`): Vercel's Web Interface Guidelines, adapted for bokmål copy (sentence case, «guillemets», "vi" allowed) and the Design system.
- Installed the upstream `web-design-guidelines` skill (`.claude/skills/`, `skills-lock.json`). It fetches Vercel's rules unmodified; `/ui-review` is preferred for this project.
- Cloned [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) outside the repo (`~/Developer/awesome-design-md`) as a format reference.
- Wrote `DESIGN.md` at the repo root: Happy Human's design system in the Stitch format, for design tools working outside the codebase. See [[Features/Colour Guide]].

- Redesigned the landing page with the `design-taste-frontend` skill (direction "One motif", seed 189805591): rising-sun arch motif, real photos of Blomvåg, a Lettere/Tøffere level switch, motion layer. See [[Features/Landing Page]], [[Decisions/2026-11-02 Rising-sun arch as the one motif]], [[Decisions/2026-11-02 Open-licensed place photos until we have our own]].
- Fixed `ValueCard` titles to `font-semibold`.

## Why
So mockups, ambassador pages and Instagram assets made in other tools stay on brand, and UI code gets a consistent accessibility/UX review.

## Follow-ups
- Run `/ui-review` on `web/`.
- Kaja to confirm: sample stations, the drafted injury/pregnancy FAQ (left out), "always free" promise, kettlebell technique note, kids' supervision line, indoor shoes.
- Decide whether to keep both the skill and `/ui-review`.
