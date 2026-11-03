import Link from "next/link"

import { Logo } from "@/components/brand/logo"
import { getPagesDictionary, type Dictionary } from "@/app/[lang]/dictionaries"
import type { Locale } from "@/lib/i18n"
import { COMPANY, CONTACT_EMAIL, FACEBOOK_GROUP_URL, infoPages, type InfoPage } from "@/lib/site"

const pageOrder: InfoPage[] = ["about", "contact", "privacy", "terms", "sales"]

const linkClass = "underline decoration-foreground/30 underline-offset-4 transition-[text-decoration-color] hover:decoration-foreground"

// A calm close on the deep-sea field: the mark, the ways to reach us and the pages.
// Photo credits live on the about page (/om-oss), as CC BY-SA requires a credit somewhere on the site.
export async function SiteFooter({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const pages = await getPagesDictionary(lang)

  return (
    <footer className="hh-deep px-4 pt-20 pb-8 sm:px-8 md:pt-28">
      <Logo size="lg" />
      <div className="mt-12 grid gap-14 lg:grid-cols-12">
        <div className="flex flex-col gap-8 lg:col-span-5">
          <div className="flex flex-col gap-1 text-base">
            <a href={`mailto:${CONTACT_EMAIL}`} className={`w-fit ${linkClass}`}>{CONTACT_EMAIL}</a>
            <a href={FACEBOOK_GROUP_URL} target="_blank" rel="noopener noreferrer" className={`w-fit ${linkClass}`}>
              {dict.footer.facebook}
              <span className="sr-only"> ({dict.ui.opensFacebook})</span>
            </a>
            <p className="text-muted-foreground">{dict.footer.place}</p>
          </div>
        </div>

        <nav aria-label={pages.footer.pagesLabel} className="flex flex-col gap-3 text-base lg:col-span-3">
          <p className="text-muted-foreground">{dict.footer.pagesTitle}</p>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href={`/${lang}/trening`} className={linkClass}>{dict.nav.training}</Link>
            </li>
            {pageOrder.map((page) => (
              <li key={page}>
                <Link href={`/${lang}/${infoPages[page]}`} className={linkClass}>
                  {pages.nav[page]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>

      <div className="mt-20 flex flex-wrap items-center justify-between gap-4 text-small text-muted-foreground">
        <p>
          {dict.footer.copyright} · {COMPANY.name} · {pages.footer.orgNr} {COMPANY.orgNr} · {COMPANY.address}
        </p>
        <a href="#" className={linkClass}>{dict.home.footer.backToTop}</a>
      </div>
    </footer>
  )
}
