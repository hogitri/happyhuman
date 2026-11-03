---
version: alpha
name: Happy Human
description: A calm founder editorial on warm paper. Two real people invite you in; one coastal teal band, one pale sun button, square corners, full-bleed graded photography, a regular-weight sans and a light serif.
colors:
  # Brand
  paper: "#FAF8F4"          # light page background
  sand: "#F0ECE4"           # alternate bands, footer, quiet surfaces
  ink: "#232220"            # text (light), text on photos and on sun
  teal: "#24403F"           # the one dark emphasis band per page
  sun: "#F3D88A"            # fill of the one main action per view
  # Light mode roles
  card: "#FFFFFF"
  muted-ink: "#66625B"      # secondary text, roles, captions
  hairline: "#E2DDD3"       # borders, dividers, field strokes
  # Teal band roles (.hh-teal, both themes)
  on-teal: "#F3EFE7"
  on-teal-muted: "#B7C9C5"
  # Dark mode roles
  dark-background: "#1B1B19"
  dark-foreground: "#F3EFE7"
  dark-card: "#262623"      # cards and sand bands after sunset
  dark-muted-foreground: "#B8B2A7"
  dark-border: "#3A3935"
typography:
  display:                  # h1, hero only
    fontFamily: "Albert Sans, sans-serif"
    fontSize: "4.5rem"      # 2.75rem mobile, 3.75rem >=640px
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  headline:                 # h2, one per band
    fontFamily: "Albert Sans, sans-serif"
    fontSize: "3.75rem"     # 2.25rem mobile
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
  title:                    # h3: names, offer titles, values
    fontFamily: "Albert Sans, sans-serif"
    fontSize: "1.5rem"      # up to 2.25rem for offer titles; 1.25rem for value titles
    fontWeight: 400
    letterSpacing: "-0.01em"
  lead:                     # leads, status words, sign-offs
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "1.5rem"      # 1.25rem mobile
    fontWeight: 300
    lineHeight: 1.375
  letter:                   # the founders' letter and the promise
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "1.75rem"     # 1.5rem mobile
    fontWeight: 300
    lineHeight: 1.45
  body:
    fontFamily: "Albert Sans, sans-serif"
    fontSize: "1rem"        # 1.125rem in offer text
    fontWeight: 400
    lineHeight: 1.5
  label:                    # buttons, data labels, the one text link with an arrow
    fontFamily: "Albert Sans, sans-serif"
    fontSize: "0.875rem"    # 0.75rem for data labels and the header button
    fontWeight: 500
    letterSpacing: "0.06em"
rounded:
  none: "0px"
spacing:
  gutter-sm: "16px"
  gutter-md: "24px"
  gutter-lg: "40px"
  band-sm: "96px"
  band-md: "128px"
  band-lg: "144px"
  header: "72px"
components:
  button-primary:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 28px"
    height: "48px"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "40px"
  tab:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "44px"
  tab-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
  card-offer:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "40px"
  band-teal:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.on-teal}"
---

# Design System: Happy Human

> **Outdated (2026-11-03, evening).** The site now uses the "sea and buoy" look: foam `#F2F5F3`, sea glass `#D3E6E0`, deep sea `#0F2B33`, buoy orange `#FF5A36` and seaglass `#9FD3C7`; Albert Sans only, semibold headings; pill buttons and large rounded media; still photos only; Norwegian only. The tokens and rules below describe the earlier founder-editorial version. Until this file is regenerated, the Design system section of `AGENTS.md` and `web/app/globals.css` are the source of truth.

> **Source of truth.** The live style guide (`/no/styleguide`, source `web/app/[lang]/styleguide/page.tsx`), the tokens in `web/app/globals.css` and the Design system section of `AGENTS.md` win if this file disagrees with them. This file summarises the same system for design tools. The reference build is the front page (`web/app/[lang]/page.tsx`, sections in `web/components/home/`). `/trening`, the info pages and parts of the style guide still carry the previous world (Geist, rounded pills, the rising-sun arch, eyebrow badges) and are due a redesign; they are not the reference.

## Overview

**Creative North Star: "The Founders' Letter"**

The movement is two real people inviting you in. The system reads like a calm, well-edited founders' profile: warm paper, a coast photographed full bleed, a letter set large in a light serif and signed by Kaja and Hoang. It refuses the gym-ad default (dark, loud, bodies) and the template grid of icon cards. Personal, professional, clean, modern, styled after The Pilates Class.

Density is low. Each band carries one idea, separated by generous vertical space and thin hairlines rather than boxes. Colour is almost entirely paper, sand and ink; the deep coastal teal appears as exactly one band per page and the pale sun as exactly one filled action per view. Everything is square-cornered.

The voice is Norwegian bokmål first, English second: warm, playful, inclusive ("Vi har plass til alle"), addressing the reader as "du" and speaking as "vi". Imagery shows real people and the real place; never appearance, never before/after.

**Key Characteristics:**
- Warm paper and sand grounds, charcoal ink, one teal band, one sun fill.
- Albert Sans at regular weight for everything structural; Source Serif 4 light for every warm, longer line.
- Square corners on photos, buttons, tabs, cards and fields.
- Full-bleed or large photography with one shared warm, soft grade.
- Hairline dividers, generous whitespace, one idea per band.
- One authored motion moment per page.

## Colors

A warm, near-neutral paper palette with one deep coastal teal for emphasis and one pale sun yellow reserved for the main action.

### Primary
- **Pale Sun** (`sun`): fill of the single main action per view (the square join button), always with ink text (11.3:1). Also the text-selection colour and the focus ring in dark mode and on the teal band.

### Secondary
- **Coastal Teal** (`teal`): the one dark emphasis band per page ("Plass til alle"). The band sets its own light text tokens (`on-teal`, `on-teal-muted`) and keeps the same colour in both themes.

### Neutral
- **Warm Paper** (`paper`): light page background, header, the hero's founder lockup chip.
- **Sand** (`sand`): alternate bands (the founders), the footer, empty photo slots.
- **Charcoal Ink** (`ink`): body and heading text in light mode, text on photos and on sun, the focus ring in light mode, the active tab fill.
- **Muted Ink** (`muted-ink`): roles, captions, secondary paragraphs, data labels.
- **Hairline** (`hairline`): every border and divider.
- **Card White** (`card`): the one offer card at the close.
- **After Sunset** (`dark-background`, `dark-foreground`, `dark-card`, `dark-muted-foreground`, `dark-border`): dark mode is the same rooms after sunset, a warm charcoal. Sand bands and cards become `dark-card`; the teal band and the sun button keep their colours.

The legacy names `--fjord`, `--mist` and `--link` survive in `globals.css` only as aliases (teal, paper, ink) for the old `/trening` page.

### Named Rules
**The One Sun Rule.** One sun-filled button per view. A repeat of the same action (the header) uses the outline button.

**The One Teal Band Rule.** Teal is a band, used once per page, never a text colour, border or small fill.

**The Ink on Sun Rule.** Text on sun is always ink. Sun is a fill, never text or thin lines on light grounds.

## Typography

**Display Font:** Albert Sans (with sans-serif)
**Body Font:** Albert Sans (with sans-serif)
**Serif Font:** Source Serif 4, light, optical sizes (with Georgia, serif)
**Mono Font:** Geist Mono, code only

**Character:** A calm Scandinavian geometric sans, always at regular weight, carries headings, body and labels; a light serif carries the human voice: leads, the letter, quotes, status words and sign-offs.

### Hierarchy
- **Display** (400, 2.75rem → 3.75rem → 4.5rem, 1.04, -0.025em): the hero h1 only, max ~16ch, balanced.
- **Headline** (400, 2.25rem → 3.75rem, -0.02em): one h2 per band.
- **Title** (400, 1.5rem; 1.875–2.25rem for offer titles; 1.25rem for values, -0.01 to -0.02em): founder names, offer titles, value titles.
- **Lead** (Source Serif 4 300, 1.25rem → 1.5rem, snug): the line under each h2, status words ("Gratis", "Kommer"), the founder lockup, max ~36rem.
- **Letter** (Source Serif 4 300, 1.5rem → 1.75rem, 1.45): the founders' letter, within a 48rem reading column; the promise on the teal band runs larger (up to 2.25rem, 1.4).
- **Body** (400, 1rem; 1.125rem for offer text): bios, values, footer.
- **Label** (500, 0.75–0.875rem, uppercase, 0.06em): button labels, data labels in the offer card, the single arrow text link.

### Named Rules
**The Regular Weight Rule.** Headings are never semibold or bold. Size and tracking carry hierarchy; weight does not. (Footer column titles are the only semibold text.)

**The Serif Speaks Rule.** Anything the founders would say aloud goes in the light serif; anything structural stays in the sans.

**The No Kicker Rule.** No eyebrow or kicker labels above headings. Status words go after the heading, in the serif.

## Layout

Pages are a stack of full-width bands. Gutters are 16px / 24px / 40px (mobile / ≥640px / ≥1024px). Bands use 96px vertical padding on mobile and 128–144px from 768px. Content sits in a 72rem container (`max-w-6xl`) or a 48rem reading column (`max-w-3xl`) for the letter and the close.

Rhythm on the reference page: full-bleed hero → paper (letter) → sand (founders) → paper (offer) → the one teal band → paper (join) → sand footer.

The header is 72px from 1024px: links left, logo centred, outline join button right. Below 1024px the logo and button share the first row and the links sit on a second 44px row under a hairline, so no menu is needed. The hero fills the remaining viewport (min 36rem, max 60rem), with the h1, serif lead and sun button in the sky top-left and the founder lockup bottom-left.

Two-column splits appear only at large widths (heading beside portraits; 3:2 photo and text in the offer). Lists are separated by `border-t` hairlines, not boxes. Mobile first: check at 375, 768 and 1280px with no horizontal scroll.

## Elevation & Depth

Flat. There are no shadows. Depth comes from tonal bands (paper, sand, teal), hairlines, and photography. The hero's founder lockup sits on a flat paper chip over the photo; the closing offer card is set off by a hairline and a white fill, not a shadow.

### Named Rules
**The Flat Paper Rule.** Surfaces are flat at every state. Separate with tone or a hairline, never a shadow.

## Shapes

Square corners everywhere (`--radius: 0`): photos, portraits, buttons, tabs, the offer card, fields. The NO/EN language toggle in the footer is still a pill carried over from the previous world; it is drift, not a pattern to copy. Photos are cropped to 4:5 (portraits), 4:3 (offer) or full bleed (hero). The H monogram (two bars joined by two arches) is the only recurring silhouette; it also stands in, at 15% ink, for things that are not launched yet.

## Components

### Buttons
Square, quiet and certain.
- **Shape:** square corners (0px), 48px tall.
- **Primary:** sun fill, ink label, 28px side padding, uppercase 0.875rem label at 0.06em tracking, weight 500, trailing external-link icon for Facebook. Hover dims the fill to 80%.
- **Outline:** paper fill, hairline border, ink label; 40px tall in the header with a 0.75rem label. Hover fills with sand.
- **Focus:** visible ring in the `ring` token (ink in light, sun in dark and on teal); outlines are never removed.

### Tabs (signature interaction)
The offer section's switch between Fellestimer / Personlig trening / Klær / Blogg.
- **Style:** square 44px buttons, hairline border, 0.875rem ink label, 8px gap, wrapping on small screens.
- **States:** hover darkens the border to ink; the active tab fills with ink and the label turns paper.
- **Content:** one large 4:3 photo and a text column per tab; items not yet launched show the monogram on sand instead of a photo and a serif status word ("Kommer").

### Cards / Containers
- **Corner Style:** square.
- **Background:** card white (dark: `dark-card`).
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** one hairline.
- **Internal Padding:** 24px mobile, 40px from 640px.
- Used once, at the close: a two-column list of facts (uppercase muted labels over 1.25rem values) above a full-width sun button.

### Navigation
Header links are 0.875rem ink text with an underline that fades in on hover (6px offset). Footer links are always underlined at 30% ink, full ink on hover. Links in running text are always underlined and share the body colour. The language switch lives in the footer.

### Founder lockup
Two square portraits side by side with "Startet av Kaja og Hoang" (or the letter's signature) in the light serif. It appears on a paper chip in the hero corner (anchoring to the founders band) and under a hairline as the letter's signature.

### Logo
The H monogram plus the two-line "Happy Human" wordmark, Albert Sans medium, always one colour (`currentColor`). Small and centred in the header, large at the top of the footer. Never retype the name as a logo.

### Photography
Full bleed or large, square-cornered, with one shared warm, soft grade (graded copies in `web/public/images/home/`, originals in `images/place` and `images/people`; every raster carries its provenance). Real photos only: our own, or openly licensed photos of the place credited in the footer.

### Motion
One authored moment per page: the founders' letter paragraphs rise 12px from 25% opacity as they scroll in (scroll-driven, transform and opacity only), plus a slow 700ms fade on tab images. Everything sits inside `prefers-reduced-motion: no-preference`.

## Do's and Don'ts

### Do:
- **Do** build pages as full-width bands on paper and sand, with exactly one teal band for the page's emphasis.
- **Do** keep one sun-filled button per view, with ink text; repeats use the outline button.
- **Do** set headings in Albert Sans at regular weight with tight negative tracking, and every lead, letter, quote and sign-off in Source Serif 4 light.
- **Do** use square corners on photos, buttons, tabs, cards and fields.
- **Do** separate list items with thin hairlines, and let generous whitespace do the rest.
- **Do** show real people training together, of different ages, sizes and levels, and kids, since kids are welcome; show the real place.
- **Do** write user-facing text in Norwegian bokmål first, English second, warm and inclusive, in the dictionaries.
- **Do** keep every text pair at 4.5:1 (3:1 at 24px and up) in both themes, with a visible focus ring.

### Don't:
- **Don't** use semibold or bold headings, or add fonts beyond Albert Sans, Source Serif 4 and Geist Mono (code only).
- **Don't** put kicker or eyebrow labels above headings, or badges anywhere.
- **Don't** round corners or use pill shapes.
- **Don't** add shadows; depth is tone and hairlines.
- **Don't** use teal as text or a small accent, or sun as text or a thin line.
- **Don't** build grids of icon cards.
- **Don't** show before/after pictures, shirtless "physique" shots, or anything focused on appearance or weight.
- **Don't** present stock photos of strangers as members, or invent class photos, testimonials or prices.
- **Don't** copy patterns from `/trening`, the info pages or the old parts of the style guide (arches, pills, eyebrow badges); they belong to the previous world.
