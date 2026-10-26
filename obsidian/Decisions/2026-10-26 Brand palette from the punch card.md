---
type: decision
date: 2026-10-26
status: accepted
---
# Brand palette from the punch card

## Context
The web app started with a coral/lime/navy/sand palette ([[Decisions/2026-10-26 Brand palette energetic and warm]]), chosen before we had seen the existing brand material. The founders then shared early explorations ([[Features/Brand Identity]]), including a bootcamp punch card already in use. Hoang chose its colours as the brand palette.

## Decision
Fjord `#264653` (text / dark background), sun `#E9C46A` (main action and highlights) and mist `#F4F8F8` (light background), mapped onto shadcn's theme tokens in `web/app/globals.css`. Buttons are sun with fjord text in both light and dark mode. Links use a `--link` token (fjord on light, sun on dark) and are always underlined.

## Alternatives considered
- Keep coral/lime/navy/sand: not connected to any existing Happy Human material.
- Monochrome black/white + teal `#009882` from the blocky-logo shop mockups: felt more like premium streetwear than "room for everyone".

## Consequences
- The colours match the real bootcamp material, so print and web feel like one brand.
- White text on sun fails contrast (1.7:1), so sun always gets fjord text. Sun can't be used as text on light backgrounds.
- In light mode the link colour equals the text colour, so links need an underline.
- Fjord and sun come from a widely used ready-made palette, so they are not distinctive on their own; the logo and type have to carry the identity.
- Logo and fonts are still undecided.

## Related
- [[Features/Colour Guide]]
- [[Features/Brand Identity]]
