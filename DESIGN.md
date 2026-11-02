---
version: alpha
name: Happy Human
description: Happy Human's design language — a calm fjord-and-mist palette lit by a single warm sun yellow, one plain grotesque (Geist) set large and tight, rounded friendly shapes, generous whitespace and photography of real people training together. Warm, playful and inclusive; never about appearance.

colors:
  # Brand
  sun: "#E9C46A"          # the one main action per view; small highlights
  fjord: "#264653"        # text (light), background (dark, fjord sections)
  mist: "#F4F8F8"         # background (light), text (dark)
  # Light mode roles
  background: "#F4F8F8"
  foreground: "#264653"
  card: "#FFFFFF"
  primary: "#E9C46A"
  on-primary: "#264653"
  secondary: "#E3ECEE"    # alternate section bands, quiet surfaces
  muted-foreground: "#4F6B76"
  border: "#D3E0E3"
  link: "#264653"         # always underlined
  ring: "#264653"
  # Dark mode roles
  dark-background: "#264653"
  dark-foreground: "#F4F8F8"
  dark-card: "#2F5564"
  dark-secondary: "#2F5564"
  dark-muted-foreground: "#B9CED4"
  dark-border: "#3E6878"
  dark-link: "#E9C46A"
  dark-ring: "#E9C46A"
  # Charts only (same palette family)
  chart-green: "#2A9D8F"
  chart-orange: "#F4A261"
  chart-red-orange: "#E76F51"

typography:
  display:          # h1
    fontFamily: Geist
    fontSize: 96px    # 48px mobile, 60px ≥640px
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: -0.05em
  heading-1:        # h2, section headings
    fontFamily: Geist
    fontSize: 60px    # 36px mobile
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.05em
  statement:        # large-type values list
    fontFamily: Geist
    fontSize: 72px    # 36px mobile
    fontWeight: 600
    letterSpacing: -0.05em
  quote:
    fontFamily: Geist
    fontSize: 48px    # 30px mobile
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.05em
  heading-3:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: 600
  heading-4:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: 600
  lead:
    fontFamily: Geist
    fontSize: 20px    # 18px mobile
    fontWeight: 400
  body:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  small:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: 400
  button:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: 600
  wordmark:
    fontFamily: Geist
    fontWeight: 500
    lineHeight: 0.95
    letterSpacing: -0.025em

rounded:
  sm: 8px
  md: 11px
  base: 14px      # --radius 0.875rem
  xl: 20px
  2xl: 25px       # icon tiles, cards
  3xl: 31px       # visuals, large cards
  arch: "top corners full, flat base"  # the motif: photo masks, SunArch
  full: 9999px    # buttons, badges

spacing:
  gutter-mobile: 16px
  gutter: 24px
  section-y-mobile: 80px
  section-y: 128px
  container-max: 1152px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 48px
  split-gap: 80px

components:
  section-default:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    padding: "{spacing.section-y}"
  section-muted:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.foreground}"
  section-fjord:
    description: "Emphasis band. Applies dark-mode tokens locally, so everything inside switches to dark roles."
    backgroundColor: "{colors.fjord}"
    textColor: "{colors.mist}"
  section-sun:
    description: "Closing call-to-action band. Fjord text, fjord button."
    backgroundColor: "{colors.sun}"
    textColor: "{colors.fjord}"
  nav-bar:
    backgroundColor: "{colors.background}"
    height: 64px
    content: "Logo left, one CTA right. No section links; language switch lives in the footer."
  button-primary:
    description: "The single sun button per view."
    backgroundColor: "{colors.sun}"
    textColor: "{colors.fjord}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    height: 48px
    paddingX: 24px
  button-inverse:
    description: "Primary action on a sun section."
    backgroundColor: "{colors.fjord}"
    textColor: "{colors.mist}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    height: 48px
  button-secondary:
    description: "Outline pill with a trailing arrow."
    backgroundColor: transparent
    textColor: "{colors.foreground}"
    borderColor: "{colors.border}"
    rounded: "{rounded.full}"
    height: 48px
  link:
    textColor: "{colors.link}"
    textDecoration: underline
  badge:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.fjord}"
    rounded: "{rounded.full}"
    typography: "12px / 600 / uppercase / wide tracking"
  visual:
    description: "Every image slot. Real photo masked by the arch (or rounded-3xl), or a flat brand illustration (sunrise, sun, mist)."
    rounded: "{rounded.arch}"
    aspectRatio: "4/5 (side-by-side), 16/9–21/9 (hero, wide)"
  value-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.3xl}"
    icon-tile: "48px square, {rounded.2xl}, sun fill, fjord icon"
  sun-arch:
    description: "The motif: a half sun standing on a flat line. 52px as a list bullet, up to 900px as a band."
    backgroundColor: "{colors.sun}"
  details-list:
    description: "Rows with a SunArch bullet, label and text; separated by space, no lines."
  faq-tiles:
    description: "Filled tiles one tone step from the ground, 8px apart; the open tile turns sun with fjord text."
    backgroundColor: "{colors.secondary}"
    rounded: "{rounded.3xl}"
---

# Happy Human — DESIGN.md

> A summary of the design system for design tools and AI agents (Google Stitch, Figma, Claude, Lovable, etc.). **The live style guide is the source of truth:** `/no/styleguide` (code: `web/app/[lang]/styleguide/page.tsx`), with tokens in `web/app/globals.css` and rules in `AGENTS.md` → *Design system* and *Product principles*. If this file and those disagree, they win; update this file.

## Overview

Happy Human is a lifestyle brand for health and happiness: free group classes and paid personal training first, then an athleisure clothing line and a blog. The audience is people aged 18–44 who care about mental and physical health. It started as a free community bootcamp on the Norwegian west coast, open to every level, kids welcome.

The look is **calm water lit by sunshine**: a deep blue-green *fjord*, a pale *mist* and a single warm *sun* yellow, taken from the bootcamp punch card. It should feel warm, playful and inclusive, like a training session where everyone goes home happier than they came. Not a gym ad: no aggression, no neon, no dark "grind" aesthetic.

**One motif.** The rising-sun arch from the H monogram (a half circle standing on a flat line) is the page's only decorative shape: photo masks, the half sun in the hero and the sunrise band, list bullets.

**Less is more.** Few sections, short copy, big type, one large visual per section and a lot of white space. Prefer one strong image and one sentence over a grid of small cards, icons and badges.

## Colors

### Brand & accent
- **Sun `#E9C46A`**: the **one** main action per view (e.g. "Bli med i gruppa"), plus small highlights: badges, icon tiles, the logo dot, key facts on fjord. A fill colour, never text on light backgrounds.
- **Fjord `#264653`**: body text in light mode; page background in dark mode; emphasis bands; focus ring in light mode.
- **Mist `#F4F8F8`**: page background in light mode; text in dark mode.

### Surface
- Light: background mist `#F4F8F8`, cards white `#FFFFFF`, quiet bands light fjord `#E3ECEE`.
- Dark: background fjord `#264653`, cards and quiet bands `#2F5564`.
- Borders: `#D3E0E3` (light), `#3E6878` (dark). Used on inputs and the language toggle; not as dividers.

### Text
- Body: fjord on light, mist on dark.
- Secondary text: `#4F6B76` (light), `#B9CED4` (dark).
- Links: fjord (light) / sun (dark), **always underlined** (light-mode links share the body colour).
- On sun: always fjord.

### Approved contrast pairs (WCAG, light / dark)
| Pair | Light | Dark |
|---|---|---|
| background / foreground | 9.4:1 | 9.4:1 |
| card / card text | 10.1:1 | 7.5:1 |
| sun / fjord text | 6.0:1 | 6.0:1 |
| secondary / text | 8.4:1 | 7.5:1 |
| muted / muted text | 4.7:1 | 4.9:1 |
| background / link | 9.4:1 | 6.0:1 |

Every text/background pair must reach 4.5:1 (3:1 for text ≥ 24px or bold ≥ 19px). **White or mist on sun is 1.7:1 and is banned.**

### Semantic
Destructive red is shadcn's default (light `oklch(0.577 0.245 27)`, dark `oklch(0.704 0.191 22)`). Chart colours (green `#2A9D8F`, orange `#F4A261`, red-orange `#E76F51`) are for data only, never UI chrome.

## Typography

### Font family
**One typeface: Geist** (sans), with Geist Mono only for code. Its plain grotesque matches the "Happy Human" wordmark. Don't introduce display or serif fonts.

### Hierarchy
| Role | Size (mobile → desktop) | Weight | Notes |
|---|---|---|---|
| Display / h1 | 48 → 60 → 96px | 600 | line-height 0.98, tracking -0.05em, balanced wrap |
| Section heading / h2 | 36 → 60px | 600 | line-height 1.05, tracking -0.05em |
| Statement (values list) | 36 → 72px | 600 | one short word or phrase per line |
| Quote | 30 → 48px | 600 | Norwegian «guillemets» |
| h3 | 24px | 600 | |
| h4 | 20px | 600 | |
| Lead | 18 → 20px | 400 | secondary text colour, pretty wrap |
| Body | 16px | 400 | |
| Small / labels | 14px | 400–500 | secondary text colour |
| Button | 16px (14px in header) | 600 | |

### Principles
- Headings are semibold with tight tracking. **Never bold or extra-bold headings.**
- Big type does the work that decoration would do elsewhere.
- Copy is Norwegian bokmål first (English secondary): sentence case, «guillemets», `…` not `...`. Norwegian compound words are long, so let text wrap rather than truncate.

## Layout

### Spacing system
Section bands have 80px vertical padding on mobile and 128px from 768px up, with 16px side gutters (24px from 640px). Inside a section, stack content with 16 / 32 / 48px gaps.

### Grid & container
Content sits in a centred container, max 1152px. Two-column splits (visual + text) stack on mobile and sit side by side from 1024px with an 80px gap, either 1:1 or 2:3.

### Whitespace philosophy
White space is the brand. If a section feels empty, make the type or the visual bigger instead of adding elements. Don't add a section or element unless it earns its place.

### Page rhythm
A page is a vertical stack of full-width bands. Alternate tones for rhythm: **default → muted → … → fjord** for emphasis (e.g. the trainer), and end with a **sun** call-to-action band. Each band opens with a heading (and optional lead). No eyebrow badges on the landing page.

### Responsive strategy
Mobile first. Check at 375px, 768px and 1280px with no horizontal scroll. Visuals switch aspect ratio by breakpoint (hero 4:5 → 16:9 → 21:9).

## Elevation & Depth

Flat. Depth comes from tone changes between bands and filled tiles one tone step from the ground, never from shadows or hairlines. Separate items with space.

## Shapes

### Border radius scale
Base radius 14px. Cards and visuals use 25–31px (`rounded-2xl`/`rounded-3xl`); buttons and badges are full pills. Rounded and friendly everywhere; no sharp corners on interactive elements.

### Logo
An **H monogram** (two bars joined by two arches that meet in the middle) next to a two-line "Happy / Human" wordmark in Geist medium. Always **one colour** (fjord on light, mist on dark, fjord on sun). The monogram alone works as an icon, stamp or oversized cropped graphic.

### Photography geometry
Large arch-masked frames (round top, flat base) at 4:5 or wider; small arch thumbnails can sit inside a line of text. Real photos first: our own, then openly licensed photos of Blomvåg and the coast (credited in the footer). Otherwise flat brand illustrations fill the slots: a sun rising over the fjord ("sunrise"), an oversized cropped monogram on sun ("sun"), a quiet monogram on mist ("mist").

## Components

### Navigation
64px header on the page background: logo left, one call-to-action right. On pages whose main sun button is elsewhere, the header CTA is an outline pill so only one sun button shows per view. The language switch (NO/EN) and theme switch live in the footer.

### Hero
The monogram split in two: an arch-masked photo of Blomvåg (slow crossfade) beside a card with the h1, lead and sun button, a big half sun rising from the card's bottom edge carrying three stats (e.g. "60 minutter", "8–10 stasjoner", "0 kr alltid gratis").

### Buttons
- **Primary**: sun pill, fjord text, 48px tall, 24px horizontal padding, semibold 16px. One per view.
- **Inverse**: fjord pill with mist text, for sun sections.
- **Secondary**: outline pill with a trailing arrow.
- **External** (Facebook group): trailing external-link icon; opens in a new tab with a screen-reader hint.
- **Ghost / link**: for tertiary actions; links are underlined.

### Inputs & forms
shadcn inputs on brand tokens: border colour, 14px radius, visible focus ring (fjord in light, sun in dark). Labels always visible. Sign-up flows allow "I'm bringing children".

### Cards & containers
- **Value card**: white (light) / `#2F5564` (dark) card, 48px sun icon tile with a fjord line icon, h4 title, short muted text.
- **Details list**: rows with a small `SunArch` bullet, a semibold label and body text, separated by space.
- **FAQ**: filled tiles (one open at a time); the open tile turns sun with fjord text.
- **Level switch**: a segmented pill (Lettere / Tøffere) that switches every exercise between its easier and harder version; the selected option is filled with the foreground colour.

### Icons
`lucide-react` line icons only, decorative ones hidden from screen readers. Usually inside a sun or fjord rounded tile.

### Signature patterns
- **Values as large type**: each value one huge line ("Mestring", "Treningsglede", "Plass til alle", "Kropp og sinn") with a short explanation beside it.
- **Trainer quote on fjord**: a big quote in «guillemets», name and role small, key facts with sun-coloured numbers.
- **Sun closing band**: centred heading and lead, fjord join button.

## Imagery & content

- Show **real people training together**, having fun: different ages, sizes and levels, outdoors by the sea, kids welcome.
- **Never**: before/after shots, shirtless "physique" photos, focus on appearance, weight loss, calorie counting, "earn your food", supplements or performance enhancers.
- Talk about **energy, strength, fun, community, mestring (mastery) and treningsglede (joy in training)**. Every exercise shows an easier and a harder alternative.
- Voice: warm, playful, inclusive; address the reader as "du", the brand speaks as "vi" ("Vi har plass til alle").

## Do's and Don'ts

### Do
- Use semantic roles (background, foreground, card, primary, muted) so dark mode works automatically.
- Use one sun button per view; fjord text on sun, always.
- Pair each main section with one large rounded visual, or make it large type.
- Use space, big headings and tone steps; reuse the arch instead of new shapes.
- Keep focus rings visible and everything keyboard-reachable.
- Design light and dark together; the theme follows the system.

### Don't
- Don't use white or mist text on sun, or sun as text/thin lines on light backgrounds.
- Don't add colours outside the palette (no neon, no gradients, no grey Tailwind palettes).
- Don't add fonts, bold headings or eyebrow badges on the landing page.
- Don't fill sections with grids of small cards, icons and badges.
- Don't use placeholder labels like "Bilde:" in visible UI.
- Don't retype "Happy Human" as a logo; use the monogram + wordmark.
- Don't show appearance-focused or before/after imagery.

## Responsive Behavior

| Breakpoint | Changes |
|---|---|
| < 640px | 16px gutters, h1 48px, h2 36px, everything stacked, hero visual 4:5 |
| ≥ 640px | 24px gutters, h1 60px, hero visual 16:9 |
| ≥ 768px | section padding 128px, h1 96px, h2 60px |
| ≥ 1024px | two-column splits, hero visual 21:9 |

Touch targets are at least 40px (header CTA) and 48px (main CTAs).

## Agent Prompt Guide

**Quick reference:** background mist `#F4F8F8` · text fjord `#264653` · one action in sun `#E9C46A` with fjord text · quiet bands `#E3ECEE` · dark mode swaps fjord and mist, cards `#2F5564` · Geist semibold, tight tracking · pills for buttons, 31px-rounded visuals · lots of white space.

**Example prompts:**
- "Using DESIGN.md, design a mobile-first page for booking a personal training intro session: a big h1, short lead, one large arch-masked photo of the trainer, a details list (duration, price, place) with SunArch bullets, and one sun 'Book a time' button."
- "Using DESIGN.md, design an Instagram story (1080×1920) announcing a free Saturday class: fjord background, huge mist Geist headline in bokmål, sun circle like a rising sun, H monogram small in the corner."
- "Using DESIGN.md, design a blog post layout for mental-health and nutrition articles: generous reading width, h1 in display size, lead in muted text, one wide visual, underlined links, no sidebar clutter."
