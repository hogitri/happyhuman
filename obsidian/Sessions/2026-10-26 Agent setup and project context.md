---
type: session
date: 2026-10-26
---
# 2026-10-26 — Agent setup and project context

## What changed
- Set up the Obsidian vault as the project's knowledge base, with folders for Architecture, Features, Decisions, Research, Sources, People and Sessions, and templates for each.
- Added source material and context notes: [[Bootcamp i Blomvåg]], [[People/Kaja Haugen]], [[People/Hoang Minh Trinh]].
- Rewrote `AGENTS.md`:
  - project overview (product still to be confirmed)
  - `web/` structure, commands and conventions
  - Product principles: bokmål first, tone, health-safe content, families
  - Privacy rules and a Definition of done
- Decided on bokmål as the primary language: [[Decisions/2026-10-26 Norwegian bokmål as primary language]].
- `.claude/`:
  - **Subagents:** `researcher`, `health-content-reviewer`, `copywriter`, `code-reviewer`, `vault-keeper`.
  - **Commands:** `/research`, `/update-vault`, `/log-session`, `/add-source`, `/add-person`, `/decision`.
  - **Hook:** a Stop hook that reminds agents to update the vault after `web/` changes.
  - **Permissions:** vault edits, web lookups, and read-only git/npm commands allowed; `.env` and `obsidian/Daily/` blocked.
- Git: the whole project is now one repo at the root. `web/` history was kept by moving it under `web/`.

## Why
To give every AI agent the same context (founders, the bootcamp, product values) and to keep the vault up to date automatically rather than by memory.

## Follow-ups
- [ ] Founders decide what Happy Human is, then fill in `Project Overview.md` and the overview in `AGENTS.md`.
- [ ] Commit the in-progress `web/` work (i18n routing, components, styleguide) once it's ready. It was left uncommitted on purpose.
- [ ] Ask Kaja to review the Product principles in `AGENTS.md`.
- [ ] Optional: add a git remote (e.g. GitHub) for backup.
