---
type: feature
status: exploration
updated: 2026-10-26
---
# Brand Identity

## Purpose
What Happy Human looks like: logo, type, colours and imagery. This note records the early brand explorations (2025) and how they relate to the web app's current [[Features/Colour Guide|Colour Guide]]. Nothing here is final; the founders still need to choose a direction.

Raw images: [[Sources/Brand explorations 2025]] (files in `obsidian/Attachments/`).

## Logo: the blocky wordmark
- **Style:** all-caps, square, geometric display letters built from thick, even strokes, almost like a pixel or stencil font. Corners are cut at 45° (chamfered) instead of rounded, which gives it a sporty, "game"/athletic-number feel.
- **Distinctive letters:** `N` is drawn as an arch (looks like a lowercase `n` / `Π`), `Y` has a square cup, `U`, `O` and `G` are squared with chamfered corners, `M` has a short V in the middle.
- **Spacing:** wide, generous letter spacing; every letter sits in the same square-ish cell, so the word works on a grid.
- **Typeface:** not identified. It may be a custom-drawn wordmark or a modular/techno display font. Ask the designer for the source file or font name before rebuilding it in code.
- **Colour:** strictly one colour: black on white, or white on black. No accent colour in the logo itself.

### Lockups
| Name in Figma | Layout | Good for |
|---|---|---|
| Full | `HAPPY` over `HUMAN`, two lines | Default logo, square-ish spaces, site header |
| Long (horizontal) | `HAPPYHUMAN` on one line | Wide headers, banners |
| Long (vertical) | One letter per row, single column | Tall banners, roll-ups, sleeves |
| Long (two-column vertical) | `HAPPY` and `HUMAN` as two vertical columns | Posters, tall formats |
| HA HU patch | `HA` over `HU` in a small black square | Monogram: clothing patch, favicon, app icon, avatar |

Three different frames are all called "Happy Human Long" in the Figma file; rename them when the logo is finalised.

There is also a playful "HAPPY HOANG" variant, showing the wordmark can be personalised (`HAPPY <name>`). Could be a fun idea for members or events later.

## Second logo: the H monogram (punch card)
The back of the bootcamp punch card has a different logo direction:
- **Mark:** a capital H drawn as two vertical bars joined by two arches that bow towards each other, leaving a small pointed gap between them (it looks a bit like a bridge, an hourglass or two people facing each other).
- **Wordmark:** "Happy Human" in two lines, mixed case, in a plain, medium-weight grotesque sans (similar to Inter; not confirmed).
- **Colour:** near-black `#181600` (very slightly warm) on white.
- **Feel:** calmer, friendlier and more "health/wellbeing" than the blocky wordmark.

So there are now **two competing logo directions**: the blocky wordmark and the H monogram.

**Update (2026-10-26):** the founders say they have "landed on a minimalistic logo icon in addition to the name Happy Human" ([[Brand Strategy]]). The founders confirmed this means **the H monogram + "Happy Human" wordmark**: see [[Decisions/2026-10-26 H monogram as the logo]]. The blocky wordmark below is kept as history. The [[Sources/Clothing moodboard 2026-10|clothing moodboard]] (small, quiet chest logos) also suits a small icon mark more than the wide blocky wordmark.

## Punch card (klippekort)
A 10-session punch card for the bootcamp ("BOOTCAMP KLIPPEKORT", "10 treningsøkter"), made from a Canva template.
- **Colours:** dark blue-green `#264653` background, warm yellow `#E9C46A` stamp boxes and heading, white text. (These two are from a well-known ready-made palette, so they're not unique to us.)
- **Type:** heading in a heavy, wide sans-serif in caps; the rest in a light, thin geometric sans. Exact fonts not identified (Canva fonts).
- **Shapes:** large rounded-corner squares for the stamps.
- **Domain:** shows `www.happyhuman.no`. Check whether the domain is registered.
- **Pricing question:** a 10-session card suggests paid sessions, but [[Bootcamp i Blomvåg]] is free today. Founders to confirm.

## Colours in the explorations
| Colour | Hex (sampled) | Where |
|---|---|---|
| Black | `#000000` | Logo, primary button ("Add to bag"), text |
| White | `#FFFFFF` | Background, logo on dark |
| Teal green | `#009882` | Announcement bar in the shop mockup |
| Light grey | ≈ `#D5D5D5` | Photo backgrounds |
| Off-white | ≈ `#EEECE6` | Product colour swatch |
| Brown | ≈ `#513B2C` | Product colour swatch |
| Dark blue-green | `#264653` | Punch card background |
| Warm yellow | `#E9C46A` | Punch card stamps and heading |
| Near-black | `#181600` | H monogram logo |

The logo and shop mockups feel monochrome, minimal and premium streetwear/athleisure, with a single teal accent. The punch card is warmer and friendlier: blue-green and yellow with rounded shapes.

## Type and UI style in the shop mockup
- Logo centred in a clean white header with a thin divider line.
- Product titles: light-weight, wide geometric sans in caps with wide letter spacing.
- Buttons: square corners (no rounding), solid black primary with white bold caps, outlined secondary.
- Lots of white space and large, grey-backdrop studio photos.

## How it fits with the current web app
The **punch card colours are now the web app's palette** (fjord `#264653`, sun `#E9C46A`, mist `#F4F8F8`). See [[Decisions/2026-10-26 Brand palette from the punch card]] and [[Features/Colour Guide]]. The logo and fonts are still open:

| | Blocky wordmark + shop mockups | Punch card + H monogram | Web app now |
|---|---|---|---|
| Mood | Monochrome, streetwear, premium | Calm, friendly | Calm, friendly (punch card colours) |
| Logo | Blocky chamfered wordmark | Arched H monogram + sans | Text wordmark placeholder |
| Colours | Black/white, teal `#009882` | Blue-green `#264653`, yellow `#E9C46A` | Same as punch card |
| Corners | Square | Rounded | Rounded |

Both logos are one-colour, so either works in fjord on mist or mist on fjord.

Things to watch against the Product principles (`AGENTS.md`):
- The premium, all-black athleisure look and the model-only photos lean towards the "fitness aesthetic" that can feel exclusive. Happy Human's tone is "Vi har plass til alle": photos should show many kinds of people, ages and kids, and focus on energy and fun, not looks.
- The mockups use another brand's photos and layout. Placeholder only; never publish.
- The shop mockups suggest merch/apparel was considered. That is **not a decided product direction**.

## Code
The H monogram is in the web app: `web/components/brand/logo.tsx` (`LogoMark`, plus `Logo` = mark + two-line "Happy Human" in Geist medium). It is redrawn by hand from the punch-card image, so the proportions are approximate; swap in the designer's SVG when it arrives. The monogram is also used in the site illustrations (`web/components/brand/visual.tsx`).

## Open questions / TODO
- Which logo: blocky wordmark or H monogram? (Palette decided: punch card colours.)
- Is the bootcamp moving to paid 10-session cards? Is `happyhuman.no` registered?
- Get the logos as vector (SVG) files and the font names from the designer.
- Rename the duplicate "Happy Human Long" frames.
- Is merch part of the plan?

## Related
- [[Sources/Brand explorations 2025]]
- [[Features/Colour Guide]]
- [[Decisions/2026-10-26 Brand palette energetic and warm]]
