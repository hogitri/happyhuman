---
type: feature
status: done
updated: 2026-10-26
---
# Info Pages

## Purpose
The pages every website needs besides the landing page: who we are, how to reach us, and the legal texts required in Norway (privacy, terms for the group classes, and terms of sale for personal training). Search engines also get a sitemap and robots.txt.

## Pages
| Page | URL (`no` / `en`) | What it covers |
|------|-------------------|----------------|
| Om oss / About us | `/no/om-oss`, `/en/om-oss` | What Happy Human does, the body-and-mind philosophy, both founders, how to join |
| Kontakt / Contact | `/no/kontakt`, `/en/kontakt` | Email (`post@happyhuman.no`), Facebook group, company details |
| Personvern / Privacy | `/no/personvern`, `/en/personvern` | GDPR privacy policy: controller, website logs, no tracking cookies, email, group classes and Facebook, photos, PT incl. health data, processors, rights, Datatilsynet |
| Vilkår for deltakelse / Terms of participation | `/no/vilkar`, `/en/vilkar` | Free group classes: own risk and pace, health, children under parents' responsibility, venue, liability, photos, cancellations, respect |
| Salgsvilkår / Terms of sale | `/no/salgsvilkar`, `/en/salgsvilkar` | Paid PT: parties, agreement, prices, 24-hour cancellation, 14-day right of withdrawal, complaints, disputes. Says PT isn't on sale yet |

The slugs are Norwegian and the same in both languages, so the language toggle keeps you on the same page. The footer links all five pages and shows the company line.

## How it works
- **Text** lives in a separate dictionary, `web/app/[lang]/dictionaries/pages/{no,en}.json`, loaded with `getPagesDictionary`. It's kept apart from the landing page dictionary so the two can change independently.
- **Company data** (`COMPANY`, `CONTACT_EMAIL`, `SITE_URL`, `infoPages`, `LEGAL_UPDATED`) lives in `web/lib/site.ts`. Dictionary text uses tokens (`{company}`, `{orgNr}`, `{address}`, `{email}`, `{lang}`) that `fillTokens` replaces when the page renders. Links in text are written as `[label](href)`.
- **Components** in `web/components/pages/`:
  - `info-page.tsx`: the shared layout (header, h1 band, single readable column with `border-t` sections, footer)
  - `rich-text.tsx`: token filling and links
  - `info-route.tsx`: makes `generateMetadata` and the page component for a text page, so each route file is a few lines
- **Contact page** (`app/[lang]/kontakt/page.tsx`) adds the email, Facebook and company blocks. The email button is the page's one sun button.
- **Legal date:** change `LEGAL_UPDATED` in `lib/site.ts` whenever privacy, terms or terms of sale change. The pages show it as "Sist oppdatert".
- **SEO:** `web/app/sitemap.ts` lists every page in both languages with `hreflang` alternates; `web/app/robots.ts` allows everything except the style guide.

## Before going live (founders to check)
These texts are a careful starting point, **not legal advice**. Check them, or have a lawyer read them, before launch.
- [ ] Set up the **post@happyhuman.no** mailbox.
- [ ] Choose the **hosting provider** and the email and payment providers, and make sure there is a **data processing agreement** (databehandleravtale) with each. Check whether any of them store data outside the EU/EEA.
- [ ] Confirm the **photo practice** the texts promise: no publishing recognisable people without a yes, and children only with parents' consent.
- [ ] Confirm the **PT policies** in the terms of sale before selling: 24-hour cancellation, package validity, payment methods (Vipps?). Add prices.
- [ ] At checkout, give buyers the **standard withdrawal form** and information about the right of withdrawal, as angrerettloven requires.
- [ ] Check the **health-data** promise (explicit consent, deleted when the PT programme ends) fits how Kaja actually keeps client notes.
- [ ] The company's street address is shown publicly (founders said yes, 2026-10-26).

## Related
- [[Features/Landing Page]]
- [[Decisions/2026-10-26 Free group classes, paid personal training]]
- [[Project Overview#Company]]
- [[Brand Strategy]]
