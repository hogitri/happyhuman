# Happy Human

Instructions for AI coding agents working in this project.

## Project overview

Happy Human is a **lifestyle brand for health and happiness** with three parts:
1. **Fitness services (launching first):** **free** group classes and **paid** personal training, with a holistic wellness approach.
2. **Clothing line (second):** casual wear and athleisure with minimal print or logo, sold **online only on Shopify** (not built into `web/`).
3. **Blog:** mental health, nutrition, workout and outdoor tips, and success stories.

The audience is people aged 18–44 who care about mental and physical health and want to be true to themselves. Marketing runs mainly through Instagram, influencers and ambassadors ("the Happy Human movement"). Details: `obsidian/Brand Strategy.md`. **Build priority for `web/`:** training pages first (group class schedule and sign-up, PT info and booking), then the blog. The shop lives on Shopify. The logo is the H monogram + "Happy Human" wordmark. Decisions are in `obsidian/Decisions/`.

- **Founders:** Kaja Haugen (trainer, MSc sport science, works in anti-doping and health prevention) and Hoang "Hogi" Minh Trinh (serial founder and startup investor, PT background). Profiles in `obsidian/People/`.
- **Starting context:** [Bootcamp i Blomvåg](obsidian/Bootcamp%20i%20Blomvåg.md), Kaja's free community training class: inclusive, kids welcome, organised through a Facebook group today.
- **Source of truth:** `obsidian/Project Overview.md`. Read it at the start of every task.

## Structure

- `web/` — the web app: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, shadcn/ui (`base-nova` preset on Base UI).
  **Read `web/AGENTS.md` before touching `web/`.** This Next.js version has breaking changes from what you may know. Check the docs in `web/node_modules/next/dist/docs/` before writing Next.js code.
- `obsidian/` — Obsidian vault: the project's knowledge base (see below).
- `.claude/` — Claude Code settings, subagents, slash commands and hooks; see `.claude/README.md`.

## Commands

Run from `web/`:

| Command | What it does |
|---------|--------------|
| `npm run dev` | Dev server on http://localhost:3000 |
| `npm run build` | Production build (also type-checks) |
| `npm run lint` | ESLint |

There is no test runner yet.

## Conventions

- Import with the `@/` alias (`@/components/ui/button`, `@/lib/utils`).
- **UI follows the [Design system](#design-system):** brand components from `components/brand/`, theme tokens instead of raw colours, `DESIGN.md` and the front page (`components/home/`) as the reference.
- Add UI components with the shadcn CLI (`npx shadcn@latest add <name>`) into `components/ui/` instead of writing them by hand. Build on the existing components before making new ones.
- Shared helpers go in `lib/`, React hooks in `hooks/`.
- Pages live under `app/[lang]/`. **The site is Norwegian only** (`lib/i18n.ts` has just `no`; `/en/...` links redirect to `/no/...` in `proxy.ts`).
- **No hard-coded user-facing text in components.** Put it in `app/[lang]/dictionaries/no.json` (and `pages/no.json` for the info pages) and load it with `getDictionary`.
- Match the style of the surrounding code.

## Design system

Every page is built from the colour guide and the brand components. **Before building or changing UI, open the style guide** at http://localhost:3000/no/styleguide (source: `web/app/[lang]/styleguide/page.tsx`) and read `obsidian/Features/Colour Guide.md`. The style guide is the source of truth: if you add a token, brand component or pattern, add it to the style guide in the same task. `DESIGN.md` at the repo root is a summary of the same system for design tools (Google Stitch, Figma, Claude); it follows the style guide, so update it too when tokens, type or brand components change.

The current look (since 2026-11-03, "sea and buoy") takes its cues from wearecollins.com and fornebuporten.no/lifestyle: crisp, minimal, the calm of the coast with the energy of a rescue buoy. The front page (`web/components/home/`) is the reference build; `/trening`, the info pages and parts of the style guide still use older layouts. See `obsidian/Decisions/2026-11-03 Sea and buoy front page.md`. Check new UI with `node .claude/skills/design-taste-frontend/scripts/lint.mjs` and `inspect.mjs` (0 FAIL).

### Colours
Defined once in `web/app/globals.css` (`:root` light, `.dark` dark) and mapped onto shadcn's tokens.

| Colour | Token / utility | Use for |
|--------|-----------------|---------|
| Foam `#F2F5F3` | `background` (light), `bg-foam` | Page ground |
| Sea glass `#D3E6E0` | `secondary`, `muted`, `.hh-glass` | Quiet bands and cards (personal training, the founders) |
| Deep sea `#0F2B33` | `foreground` (light), `.hh-deep` | Text; the hero, the bootcamp card and the footer as deep fields |
| Sun `#F3D88A` (token name `buoy`) | `primary`, `.hh-buoy`, `text-buoy` | The **one** main action per view (deep text on it, 10.6:1), the closing panel, the sun and accents in the illustrations. Was buoy orange `#FF5A36` until 2026-11-05 |
| Seaglass `#9FD3C7` | `accent`, `bg-seaglass` | Small calm accents (text selection) |
| Tide `#2F5E62` | `fill-tide` | A deep teal step, only inside illustrations (hills) |

Dark mode is the sea at night (`#0B2026` ground, foam text, `#123039` cards); `.hh-deep`, `.hh-glass` and `.hh-buoy` keep their colours. Legacy names (`--sun`, `--fjord`, `--mist`, `--paper`, `--sand`, `--ink`, `--teal`) point at the new colours.

Rules:
- **Use semantic tokens** and the field classes; **no raw colours** in components.
- **Text on the sun yellow is always deep sea** (never white or foam).
- **One yellow button per view.** The header repeats the action as an outline pill.
- Every text/background pair must reach **4.5:1** (3:1 for text ≥ 24px).

### Type
- **One typeface: Albert Sans** (`web/lib/fonts.ts`). Headings **semibold** with tight tracking (`tracking-[-0.04em]` at display size, `-0.03em` for titles). Source Serif 4 is still loaded for older pages; don't use it in new work. Geist Mono only for code.
- **Five steps** (tokens in `globals.css`): `text-display`, `text-title`, `text-lead` (20px), `text-base` (16px), `text-small` (13px minimum). Headings two lines or fewer at every width. Buttons in sentence case.
- **No eyebrows or kicker labels above headings.**

### Building pages
- Reach for `web/components/brand/*`, then `web/components/ui/*`, then something new. Page sections live in `components/<page>/`.
- Bands: one pair of margins, `px-4 sm:px-8`, `py-24`–`py-40` between sections. Front page order: deep hero (logo, centred headline, orange button, one photo that opens to full width as you scroll) → why (values, a wide illustration, a short description of the sessions) → the offer (bootcamp on deep, personal training on sea glass) → three questions → buoy closing panel → deep footer. **No menu** on any page.
- **Shapes:** pill buttons (`rounded-full`), large media and panels at `rounded-[1.75rem]`, small cards `rounded-2xl`. No hairlines, outlined boxes, shadows, gradients or monospace.

| Brand component | Use it for |
|-----------------|-----------|
| Service illustrations (`components/home/service-illustrations.tsx`) | Flat SVG scenes of the bootcamp (a group at stations by the sea, a child along) and personal training (indoors in the home gym: a front-view back squat in the rack with the trainer beside, bench and dumbbells, the sun in the window). People are built from joints with thick round strokes; colours `glass`, `buoy`, `tide`, `seaglass`, `deep` |
| Exercise pictograms (`components/brand/exercise-icons.tsx`) | One line pictogram per bootcamp station (squat, push-up, lunge, plank, kettlebell, jump rope, mountain climber, mobility), lucide-style 24px; shown in sea-glass tiles on `/trening` |
| `Logo`, `LogoMark` | The H monogram + "Happy Human" wordmark, one colour (`currentColor`) |
| `FacebookCta`, `SecondaryCta`, `CtaLink` | Pill calls to action (`h-12`) |
| `SiteHeader`, `SiteFooter` | Header: the logo only, no menu (the front page puts it in the hero); footer on deep sea. No photo credits on the site |
| `Reveal` | Section entrances for `[data-reveal]` blocks; also pauses looping motion while the tab is hidden |
| `ThemeToggle` | Light/dark/system |

- **Imagery:** places are shown as **flat palette illustrations made from real CC0 photos** (screen-print look: five palette tones and a sun-yellow sun, placed so it stays inside phone crops), and the founders' portraits are gradient-mapped in the same palette (deep sea to foam). Still pictures only, never crossfading or changing. Files in `web/public/images/home/` (`ill-*.webp`, `*-duo.webp`), made from the originals in originals in `images/place`, `images/people`, `images/found`; each carries its origin in a `.json` sidecar). The script recipe is in `obsidian/Features/Landing Page.md`. **Only CC0 or our own photos**, because the site shows no photo credits (CC BY/BY-SA would require one).
- **Motion:** the hero rises in on load; the hero photo opens from a rounded card to full width on scroll; wide pictures drift slightly inside their frames; the illustrations stand still (no reps or rising suns, removed at the user's request); FAQ answers open smoothly (`.hh-details`); the Lettere/Tøffere text fades in; cards lift 4px on hover; buttons press. All inside `prefers-reduced-motion: no-preference`, paused while the tab is hidden. Note: after changing `globals.css`, restart `npm run dev` if the change doesn't show (Turbopack sometimes serves stale CSS), and avoid nested `@starting-style` in it, which made the build drop a whole block.
- **Less is more.** Few sections, short copy, one idea per band.
- **Imagery:** real people training together, different ages, sizes and levels. No before/after, no appearance focus (see Product principles).

### Accessibility and responsiveness
- Mobile first. Check at 375px, 768px and 1280px, with no horizontal scroll.
- Check both light and dark mode. The theme follows the system by default.
- Keyboard: everything reachable, with a visible focus ring (the `ring` token: deep sea in light mode, buoy in dark; don't remove outlines).
- External links (Facebook) open in a new tab with `rel="noopener noreferrer"` and a screen-reader hint (`dict.ui.opensFacebook`).
- Decorative icons get `aria-hidden`; placeholder images get a descriptive `aria-label`.

## Product principles

These apply to every screen, text, email and piece of training content.

- **Language:** user-facing text is **Norwegian bokmål only**. No sentence dashes (use commas or rephrase; number ranges like 8–10 are fine). Use **-en endings**, not -a (gruppen, uken, barnene). Nothing about food, mental health, clothing or outdoor life. Code, comments, commit messages and the vault are in English.
- **Tone:** warm, playful and inclusive: "Vi har plass til alle." The goal is for people to feel *mestring* (mastery) and *treningsglede* (joy in training), not pressure.
- **Health-safe content:**
  - No weight-loss, body-shaming, calorie-counting or "earn your food" framing.
  - No before/after pictures or appearance goals. Talk about energy, strength, fun and community instead.
  - Show an easier and a harder alternative for exercises, so it works for everyone from beginner to very fit.
  - Never promote supplements or performance enhancers (one founder works in anti-doping).
  - Take a holistic view of health, body and mind together.
- **Low barrier:** beginner-friendly, free or cheap to try, and accessible (keyboard, contrast, screen readers, mobile first). See **Design system → Accessibility**.
- **Families:** kids are welcome. Flows such as sign-up should allow for "I'm bringing children."
- **When unsure** whether content is health-safe, flag it for Kaja's review instead of guessing. The `health-content-reviewer` agent can do a first pass.

## Research

For anything that needs looking up (libraries, APIs, tools, best practices, how others solve a problem), hand it to the `researcher` subagent instead of guessing. Do this especially before choosing a technology or design. It saves its findings to `obsidian/Research/`. When a finding leads to a choice, record that choice in `obsidian/Decisions/` and link the research note.

## Subagents and commands

| Agent | Use it for |
|-------|-----------|
| `researcher` | Looking things up; saves notes to `obsidian/Research/` |
| `health-content-reviewer` | Checking user-facing text and training content against the Product principles |
| `copywriter` | Writing bokmål product text into the dictionaries |
| `code-reviewer` | Reviewing the current diff before calling work done |
| `vault-keeper` | Finding and fixing outdated notes, broken links and duplicates in the vault |

Slash commands: `/research`, `/update-vault`, `/log-session`, `/add-source`, `/add-person`, `/decision`. See `.claude/README.md`.

## Definition of done

A task is done when:

1. `npm run lint` and `npm run build` pass in `web/` (if code changed).
2. UI changes have been checked in the browser, in light and dark mode, and at mobile width.
3. UI follows the **Design system**: tokens instead of raw colours, brand components reused, contrast rules met, and any new token or brand component added to the style guide.
4. New user-facing text is in the dictionaries, in bokmål, and follows the Product principles.
5. The vault is updated (see below).
6. Your final message says plainly what was done, what you verified, and anything left unfinished or unverified.

## Privacy

- Founders and team members (`obsidian/People/`) may be documented with their professional background.
- Members, participants, customers and other third parties are **never named**, in the vault or in code fixtures. Refer to them as "a member" or similar.
- Never store private analytics, contact details, secrets, API keys or passwords in the vault or the repo.
- Leave `obsidian/Daily/` alone; it's for the user's personal notes.

## Keeping the Obsidian vault up to date

The vault in `obsidian/` is the project's memory. **Whenever you change code or learn something about the project, update the vault in the same task.** Don't leave it for later.

### Before starting work
Read `obsidian/Home.md`, `obsidian/Project Overview.md` and any notes in `Architecture/`, `Features/`, `Decisions/` or `Research/` related to the task. Treat them as context, and check them against the code. If a note is wrong, fix it.

### What to record, and where

| When you… | Update |
|-----------|--------|
| Add or change a feature, module or component | `Features/<Name>.md` (create from `Templates/Feature.md` if missing) |
| Change how parts of the system connect, the data flow, or the tech stack | `Architecture/Overview.md` or a new note in `Architecture/` |
| Make a non-obvious choice (library, pattern, trade-off, rejected approach) | New note in `Decisions/`, named `YYYY-MM-DD <short title>.md`, from `Templates/Decision.md` |
| Learn project goals, scope, status or requirements from the user | `Project Overview.md` |
| Get source material from the user (web pages, social posts, documents) | Save it as-is in `Sources/` with `url` and `retrieved` date in the frontmatter, then summarise what matters in a context note (e.g. `Bootcamp i Blomvåg.md`) |
| Learn about a founder, team member or key partner | `People/<Name>.md` |
| Introduce or meet a project-specific term | `Glossary.md` |
| Finish a meaningful piece of work | `Sessions/YYYY-MM-DD <short title>.md` from `Templates/Session.md`: what changed, why, follow-ups |

### How to write notes
- Write for a person who has never seen the code: plain language first, details after.
- Link notes with `[[wikilinks]]` (e.g. a feature links to the decisions behind it) and add new top-level notes to `Home.md`.
- Point to code by repo-relative path (`web/app/[lang]/layout.tsx`), not by copying large code blocks.
- Fill in the template frontmatter (`type`, `status`, `date`/`updated`) and replace `{{date}}`/`{{title}}` placeholders with real values.
- Update existing notes instead of creating duplicates. Delete or mark `status: outdated` anything that no longer matches the code.
- Keep it short. Record *why* and *how things fit together*; the code and git history already show *what*.
- Follow the Privacy rules above.
