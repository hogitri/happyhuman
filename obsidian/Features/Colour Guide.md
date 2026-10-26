---
type: feature
status: in-progress
updated: 2026-10-26
---
# Colour Guide

## Purpose
One place that defines Happy Human's colours, type and building blocks. All pages are built from these tokens and components, so the look stays consistent. The live version is at `/no/styleguide` (or `/en/styleguide`); it is hidden from search engines.

## Palette
Taken from the bootcamp punch card (*klippekort*): calm blue-green with a warm, happy yellow. See [[Decisions/2026-10-26 Brand palette from the punch card]].

| Colour | Hex | Class | Use for |
|---|---|---|---|
| Fjord | `#264653` | `bg-fjord` | Text (light mode), background (dark mode) |
| Sun | `#E9C46A` | `bg-sun` | The main action (buttons) and highlights: badges, icon tiles, the logo dot |
| Mist | `#F4F8F8` | `bg-mist` | Background (light mode), text (dark mode) |
| Link | fjord / sun | `text-link` | Link text: fjord in light mode, sun in dark mode |

Supporting tints: card white `#FFFFFF` (light) / `#2F5564` (dark), muted `#E3ECEE`, muted text `#4F6B76` (light) / `#B9CED4` (dark), border `#D3E0E3` / `#3E6878`. Charts add the rest of the same palette family: green `#2A9D8F`, orange `#F4A261`, red-orange `#E76F51`.

Rules that matter:
- Always put fjord text on sun (6.0:1). White or mist on sun is only 1.7:1, so it is banned.
- Sun is a fill colour on light backgrounds, never text there.
- In light mode, links have the same colour as text, so they are always underlined.
- On a sun section, use the fjord ("inverse") call-to-action button.

All body-text pairs are ≥ 4.5:1 (WCAG AA). The ratios are listed on the style guide page.

## Type
- One typeface: Geist. Headings are Geist semibold with tight tracking (`font-heading` maps to Geist), to match the plain grotesque "Happy Human" wordmark. Bricolage Grotesque was dropped on 2026-10-26 in the "less is more" redesign.
- Body: Geist (`font-sans`).
- Fonts are loaded in `web/lib/fonts.ts`. The punch card uses other (Canva) fonts; the type has not been changed to match yet.

## How it works
- The palette lives in `web/app/globals.css` as CSS variables. shadcn's token names (`--primary`, `--accent`, …) point at the brand colours, so every installed shadcn component is already on brand.
- Brand utilities: `bg-fjord`, `bg-sun`, `bg-mist`, `text-link`.
- Dark mode uses the `.dark` class via `next-themes`. The fjord section tone reuses `.dark` locally, so the components inside it adapt.

## Code
- `web/app/globals.css` — tokens (light and dark)
- `web/app/[lang]/styleguide/page.tsx` — the style guide page
- `web/components/brand/` — Logo, Section (tones: default, muted, fjord, sun), SectionHeading, FacebookCta/SecondaryCta/CtaLink, ValueCard, BrandIcon, Visual (illustrations / photo slot), Logo + LogoMark (H monogram), LanguageToggle, ThemeToggle
- Small edits to shadcn files: the `link` variant uses `text-link` and is always underlined (`components/ui/button.tsx`, `badge.tsx`); new `accent` (sun) badge variant.

## Rules for agents
The binding version of these rules is in the **Design system** section of the root `AGENTS.md`, with a short pointer in `web/AGENTS.md`. The `code-reviewer` agent checks changes against it, and the Definition of done requires it.

## Open questions / TODO
- Replace the text wordmark and the placeholder images once a logo and photos exist. Two logo candidates exist (blocky wordmark, H monogram). See [[Features/Brand Identity]].

## Related
- [[Decisions/2026-10-26 Brand palette from the punch card]]
- [[Decisions/2026-10-26 Brand palette energetic and warm]] (superseded)
- [[Features/UI Components]]
- [[Features/Brand Identity]]
- [[Features/Landing Page]]
