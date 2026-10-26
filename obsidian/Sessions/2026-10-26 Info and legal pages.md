---
type: session
date: 2026-10-26
---
# 2026-10-26 — Info and legal pages

## What changed
- Added five pages in bokmål and English: about, contact, privacy, terms of participation, and terms of sale for PT. See [[Features/Info Pages]].
- The footer now links to them and shows "HAPPY HUMAN AS · Org.nr. 933 037 495 · Dammane 19, 5337 Rong".
- Added `sitemap.xml` and `robots.txt`.
- Company details and the contact email (`post@happyhuman.no`) are in `web/lib/site.ts`.

## Why
A public website in Norway needs a privacy policy, and paid PT needs terms of sale with information about the right of withdrawal. The free group classes needed simple participation terms (health, children, photos). The founders asked for these plus about and contact pages.

## Verified
- `npm run lint` and `npm run build` pass, and all 10 pages plus sitemap and robots are generated.
- Checked in a production server: every page returns 200 with the company details and date filled in.
- Screenshots: light and dark mode, 375px (no horizontal scroll, Norwegian hyphenation works) and 1280px.
- The shared dev server on :3000 returned 404 for `personvern` and `salgsvilkar` until it picked up the new folders. The production build serves them fine.

## Follow-ups
- [ ] Founders: the "Before going live" checklist in [[Features/Info Pages]] (mailbox, data processing agreements, PT policies, legal review).
- [ ] Add a withdrawal form and withdrawal information to the PT checkout when booking is built.
