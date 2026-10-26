---
type: decision
date: 2026-10-26
status: superseded
---
# Brand palette: energetic and warm

> **Superseded** the same day by [[Decisions/2026-10-26 Brand palette from the punch card]].

## Context
The landing page targets young adults interested in fitness. Happy Human's values are joy in training, mastery, room for everyone, and health for body and mind (see [[Bootcamp i Blomvåg]]). We needed a palette before building pages.

## Decision
Coral `#FF5A3C` (action), lime `#C6F432` (highlight), navy `#14213D` (text / dark background), sand `#FFF6EC` (light background). It is mapped onto shadcn's theme tokens in `web/app/globals.css`. Buttons use navy text on coral, and a darker "coral ink" `#C93A1F` is used for coral text on light backgrounds.

## Alternatives considered
- Fresh & natural (fjord teal + sunny yellow): calmer, but less energetic.
- Bold & dark sporty (violet + neon on black): high energy, but closer to the performance and body-pressure gym look that Happy Human wants to avoid.

## Consequences
- Coral fails contrast with white text, so white-on-coral is banned. Buttons are navy-on-coral.
- Every shadcn component is on brand without per-component styling.

## Related
- [[Features/Colour Guide]]
- [[Features/Brand Identity]]: made without the 2025 logo explorations, which use a monochrome black/white + teal look, or (punch card) blue-green `#264653` + yellow `#E9C46A`. Revisit once the founders pick a direction.
