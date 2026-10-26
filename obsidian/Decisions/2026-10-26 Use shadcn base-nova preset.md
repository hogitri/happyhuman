---
type: decision
date: 2026-10-26
status: accepted
---
# Use shadcn base-nova preset

## Context
We needed a component library for the Next.js app in `web/`.

## Decision
Use shadcn/ui, set up with `shadcn init --defaults`, which picks the `base-nova` preset (Base UI underneath, neutral colours, Lucide icons). Install every registry UI component up front.

## Alternatives considered
- Radix-based shadcn style — the older default; not chosen because we accepted the CLI's current default.
- Installing components one at a time as needed — fewer files, but the user asked for all of them.

## Consequences
- All components are local source files we can edit freely.
- Unused components add files to the repo; delete them later if they get in the way.
- Docs/examples written for the Radix style may differ slightly from our Base UI components.

## Related
- [[Features/UI Components]]
