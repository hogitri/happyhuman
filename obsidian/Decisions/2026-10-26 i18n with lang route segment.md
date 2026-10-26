---
type: decision
date: 2026-10-26
status: accepted
---
# Norwegian + English with a `[lang]` route segment

## Context
The user wants the site in Norwegian and English with a language toggle.

## Decision
Follow the Next.js 16 guide (`web/node_modules/next/dist/docs/01-app/02-guides/internationalization.md`):
- URLs start with the locale: `/no/...`, `/en/...`. Norwegian is the default.
- `web/proxy.ts` (Next 16's name for middleware) redirects URLs without a locale, picking the language from the browser's `Accept-Language` header.
- All text lives in JSON dictionaries in `web/app/[lang]/dictionaries/` (`no.json`, `en.json`), loaded by `getDictionary`.
- The root layout is `web/app/[lang]/layout.tsx`. Unknown URLs are handled by `web/app/global-not-found.tsx` (enabled with `experimental.globalNotFound` in `next.config.ts`).

## Alternatives considered
- An i18n library (next-intl): more features than two static languages need.
- Toggling language client-side without URLs: worse for SEO, and you can't share a link in a given language.

## Consequences
- Both languages are prerendered (`generateStaticParams`).
- Every new piece of copy must be added to both dictionaries. They must have the same keys, and the `Dictionary` type comes from `no.json`.

## Related
- [[Features/Landing Page]]
- [[Architecture/Overview]]
