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
- **UI follows the [Design system](#design-system):** brand components from `components/brand/`, theme tokens instead of raw colours, and the style guide at `/no/styleguide` as the reference.
- Add UI components with the shadcn CLI (`npx shadcn@latest add <name>`) into `components/ui/` instead of writing them by hand. Build on the existing components before making new ones.
- Shared helpers go in `lib/`, React hooks in `hooks/`.
- Pages live under `app/[lang]/`. Locales are set in `lib/i18n.ts` (`no` is the default, `en` secondary).
- **No hard-coded user-facing text in components.** Put it in `app/[lang]/dictionaries/no.json` and `en.json`, and load it with `getDictionary`. Keep both files in sync.
- Match the style of the surrounding code.

## Design system

Every page is built from the colour guide and the brand components. **Before building or changing UI, open the style guide** at http://localhost:3000/no/styleguide (source: `web/app/[lang]/styleguide/page.tsx`) and read `obsidian/Features/Colour Guide.md`. The style guide is the source of truth: if you add a token, brand component or pattern, add it to the style guide in the same task.

### Colours
The palette is defined once, in `web/app/globals.css` (`:root` for light, `.dark` for dark), and mapped onto shadcn's tokens.

| Colour | Token / utility | Use for |
|--------|-----------------|---------|
| Sun `#E9C46A` | `primary`, `accent`, `bg-sun` | The **one** main action per view (e.g. "Bli med i gruppa"); small highlights: eyebrow badges, icon tiles, the logo dot |
| Fjord `#264653` | `foreground` (light), `bg-fjord` | Text in light mode; background in dark mode and fjord sections; focus rings (light) |
| Mist `#F4F8F8` | `background` (light), `bg-mist` | Page background in light mode; text in dark mode |
| Light fjord `#E3ECEE` | `secondary`, `muted` | Alternate section bands, quiet surfaces |
| Link (fjord / sun) | `text-link` | Link text: fjord on light, sun on dark. Always underlined |

Rules:
- **Use semantic tokens** (`bg-background`, `text-foreground`, `text-muted-foreground`, `bg-primary`, `bg-card`, `border-border`) so dark mode works automatically. Use the brand utilities (`bg-sun`, `bg-fjord`, …) only for deliberate brand moments.
- **No raw colours** in components: no hex, `rgb()`, `oklch()` or Tailwind palette colours like `bg-zinc-50` or `text-orange-500`. Need a new colour? Add a token to `globals.css` and the style guide, with light and dark values.
- **Never white or mist text on sun** (1.7:1, fails WCAG). Text on sun is fjord (`text-primary-foreground`, 6.0:1).
- **Sun is a fill, never text** or thin lines on light backgrounds (`text-primary` on mist or white fails).
- **Links are always underlined**: in light mode `text-link` has the same colour as body text.
- **One sun button per view.** Secondary actions use `SecondaryCta` or the `outline`/`ghost` button variants.
- On a **sun section**, use `FacebookCta tone="inverse"` (fjord button), never a sun button.
- Every text/background pair must reach **4.5:1** (3:1 for text ≥ 24px or bold ≥ 19px). Check new pairs and list them on the style guide.

### Type
- **One typeface: Geist.** Headings `h1`–`h4` are Geist semibold with tight tracking (`font-heading` maps to Geist in `globals.css`), matching the plain grotesque of the "Happy Human" wordmark. Don't add other fonts; fonts live in `web/lib/fonts.ts`.
- Use the scale shown on the style guide: h1 `text-5xl sm:text-6xl md:text-8xl`, h2 `text-4xl md:text-6xl` (both `font-semibold tracking-tighter`, via `SectionHeading`), h3 `text-2xl font-semibold`, h4 `text-xl font-semibold`, lead `text-lg md:text-xl text-muted-foreground`, body `text-base`. No `font-bold`/`font-extrabold` headings.

### Building pages
- **Reach for components in this order:** `web/components/brand/*` first, then `web/components/ui/*` (shadcn), and only then something new. Put new reusable brand pieces in `components/brand/` and page-specific sections in `components/<page>/` (e.g. `components/landing/`).
- Page layout = a stack of `Section`s. Alternate tones for rhythm (`default` → `muted` → … → `fjord`/`sun` for emphasis). Each section starts with a `SectionHeading` (title, optional lead; no eyebrow badges on the landing page). Don't hand-roll padding or max-width; `Section` handles them.
- The `fjord` tone applies the `.dark` class locally, so components inside it switch to dark tokens. Don't override colours inside it.

| Brand component | Use it for |
|-----------------|-----------|
| `Logo`, `LogoMark` | The H monogram + two-line "Happy Human" wordmark (`sm` in headers, `lg` in heroes); `LogoMark` alone for small spaces and icons. Always one colour (`currentColor`); never retype the name as a logo by hand |
| `Section` / `SectionHeading` | Every page band and its heading |
| `FacebookCta`, `SecondaryCta`, `CtaLink` | Pill-shaped calls to action (`h-12 rounded-full`) |
| `ValueCard` + `BrandIcon` | Icon + title + text cards. Icons are referenced by name from the dictionaries; add new ones to `components/brand/icons.tsx` |
| `Visual` | Every image slot. Without `src` it draws a brand illustration (`scene` = `sunrise`, `sun`, `mist`); pass `src` + `alt` for a real photo (rendered with `next/image`). Never show "Bilde:"-style placeholder labels |
| `LanguageToggle`, `ThemeToggle` | Language (NO/EN links) and light/dark/system switching. The language switch lives in the **footer**, not the navbar or mobile menu |

- Shape and feel: rounded and friendly (`--radius` 0.875rem, `rounded-2xl`/`rounded-3xl` cards, `rounded-full` buttons and badges), generous whitespace, icons from `lucide-react` only.
- **Less is more.** Few sections, short copy, lots of white space (`Section` uses `py-20 md:py-32`). Prefer one big visual and large type over grids of small cards, icons and badges. Use thin `border-t` dividers instead of boxes. Don't add a section or element unless it earns its place.
- **Visuals carry the page.** Every main section on the landing page pairs text with a large `Visual` (rounded-3xl, aspect 4/5 or wider), or is itself large type (the values list).
- **Imagery:** show real people training together, having fun, of different ages, sizes and levels. No before/after shots, no shirtless "physique" photos, no focus on appearance (see Product principles).
- **Editing shadcn files** in `components/ui/` is allowed for brand reasons (e.g. the `link` variant uses `text-link` and is always underlined, Badge has an `accent` variant). Keep such edits small and note them in `obsidian/Features/Colour Guide.md`. Re-running `shadcn add --overwrite` would undo them.

### Accessibility and responsiveness
- Mobile first. Check at 375px, 768px and 1280px, with no horizontal scroll.
- Check both light and dark mode. The theme follows the system by default.
- Keyboard: everything reachable, with a visible focus ring (the `ring` token: fjord in light mode, sun in dark; don't remove outlines).
- External links (Facebook) open in a new tab with `rel="noopener noreferrer"` and a screen-reader hint (`dict.ui.opensFacebook`).
- Decorative icons get `aria-hidden`; placeholder images get a descriptive `aria-label`.

## Product principles

These apply to every screen, text, email and piece of training content.

- **Language:** user-facing text is in **Norwegian bokmål** first, with English as secondary. Code, comments, commit messages and the vault are in English.
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
| `copywriter` | Writing bokmål (and English) product text into the dictionaries |
| `code-reviewer` | Reviewing the current diff before calling work done |
| `vault-keeper` | Finding and fixing outdated notes, broken links and duplicates in the vault |

Slash commands: `/research`, `/update-vault`, `/log-session`, `/add-source`, `/add-person`, `/decision`. See `.claude/README.md`.

## Definition of done

A task is done when:

1. `npm run lint` and `npm run build` pass in `web/` (if code changed).
2. UI changes have been checked in the browser, in both `no` and `en`, in light and dark mode, and at mobile width.
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
