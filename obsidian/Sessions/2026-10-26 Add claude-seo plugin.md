---
type: session
date: 2026-10-26
---
# 2026-10-26 — Add claude-seo plugin

## What changed
- Installed the [claude-seo](https://github.com/AgriciDaniel/claude-seo) Claude Code plugin (v2.5.0) at project scope. `.claude/settings.json` now lists its marketplace and enables it; `.claude/README.md` describes it.
- It adds 26 SEO skills (`/seo …`) and 19 SEO subagents, plus a hook that checks Schema.org markup after file edits.

## Why
The user wanted the SEO skills available for Happy Human. Installing it as a plugin (instead of the repo's `install.sh`, which copies files into `~/.claude`) keeps it tied to this project, lets its hook run, and makes updates and removal a single command.

## Follow-ups
- [ ] Install Python 3.11+ (only 3.9 is on this Mac), then run `~/.claude/plugins/cache/agricidaniel-claude-seo/claude-seo/2.5.0/scripts/claude-seo setup` so the plugin's scripts work.
