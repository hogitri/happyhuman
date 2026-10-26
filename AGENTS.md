# Happy Human

Instructions for AI coding agents working in this project.

## Project overview

Happy Human is at the idea stage: **what the product is has not been decided yet (to be confirmed by the founders)**. Don't invent a product direction. When a task depends on it, ask.

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
- Add UI components with the shadcn CLI (`npx shadcn@latest add <name>`) into `components/ui/` instead of writing them by hand. Build on the existing components before making new ones.
- Shared helpers go in `lib/`, React hooks in `hooks/`.
- Pages live under `app/[lang]/`. Locales are set in `lib/i18n.ts` (`no` is the default, `en` secondary).
- **No hard-coded user-facing text in components.** Put it in `app/[lang]/dictionaries/no.json` and `en.json`, and load it with `getDictionary`. Keep both files in sync.
- Match the style of the surrounding code.

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
- **Low barrier:** beginner-friendly, free or cheap to try, and accessible (keyboard, contrast, screen readers, mobile first).
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
2. UI changes have been checked in the browser, in both `no` and `en` and at mobile width.
3. New user-facing text is in the dictionaries, in bokmål, and follows the Product principles.
4. The vault is updated (see below).
5. Your final message says plainly what was done, what you verified, and anything left unfinished or unverified.

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
