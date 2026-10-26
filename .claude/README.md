# .claude

Claude Code configuration for Happy Human. Project-wide instructions live in `AGENTS.md` (loaded through `CLAUDE.md`).

| Path | What it is |
|------|------------|
| `settings.json` | Shared settings: permissions, the vault-reminder hook, and plugins |
| `settings.local.json` | (optional, create it yourself) your personal overrides; git-ignored |
| `hooks/vault-reminder.sh` | Stop hook: if files in `web/` changed after the newest vault note, asks the agent to update `obsidian/` before finishing |

## Permissions (`settings.json`)
- **Allowed without asking:** editing the vault (`obsidian/**`), WebSearch, WebFetch, `npm run lint/build/dev`, and `git status/diff/log`.
- **Blocked:** reading `.env` files anywhere, and reading or editing `obsidian/Daily/` (personal notes).

## Subagents (`agents/`)

| Agent | What it does | Can edit? |
|-------|--------------|-----------|
| `researcher` | Looks things up (vault first, then web, Norwegian sources for local topics) and saves a note to `obsidian/Research/` | Vault only |
| `health-content-reviewer` | Checks user-facing text and training content against the Product principles in `AGENTS.md` | No |
| `copywriter` | Writes bokmål and English product text into `web/app/[lang]/dictionaries/` | Dictionaries |
| `code-reviewer` | Reviews the current diff, and runs lint and build | No |
| `vault-keeper` | Fixes outdated notes, broken links, duplicates and privacy problems in the vault | Vault |

## Slash commands (`commands/`)

| Command | What it does |
|---------|--------------|
| `/research <topic>` | Runs the researcher |
| `/update-vault [focus]` | Syncs the vault with the code |
| `/log-session [title]` | Writes a session log note |
| `/add-source <material>` | Saves pasted material to `obsidian/Sources/` and summarises it |
| `/add-person <details>` | Adds or updates a person in `obsidian/People/` |
| `/decision <title>` | Records a decision in `obsidian/Decisions/` |

## Plugins

Enabled in `settings.json` (`enabledPlugins`), so everyone who opens the project is offered them.

| Plugin | What it gives you |
|--------|-------------------|
| `claude-seo` ([AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo)) | SEO skills and subagents: `/seo audit <url>`, `/seo page`, `/seo technical`, `/seo schema`, `/seo geo` and more (type `/seo` for the list). Its Python scripts need Python 3.11–3.14. |
