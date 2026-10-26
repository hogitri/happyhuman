---
type: decision
date: 2026-10-26
status: accepted
---
# Norwegian bokmål as primary language

## Context
Happy Human starts from a Norwegian community ([[Bootcamp i Blomvåg]]), and both founders are based in the Bergen region. The web app already had `no`/`en` locale routing in place (`web/lib/i18n.ts`, `web/proxy.ts`, `web/app/[lang]/dictionaries/`).

## Decision
- All user-facing text is written in **Norwegian bokmål** first. `no` is the default locale (`<html lang="nb">`).
- English (`en`) is kept as a secondary locale, and both dictionaries are kept in sync.
- Code, comments, commit messages and this vault are in English.

## Alternatives considered
- Bokmål only: simpler, but the English routing already exists and costs little to keep.
- English first: doesn't fit the local, community-based audience.

## Consequences
- No hard-coded text in components; everything goes through the dictionaries.
- New text needs a bokmål version that reads naturally, not a translation from English. Use the `copywriter` agent.

## Related
- [[Project Overview]]
- [[Bootcamp i Blomvåg]]
