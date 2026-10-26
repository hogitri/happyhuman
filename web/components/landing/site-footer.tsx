import Link from "next/link"

import { LanguageToggle } from "@/components/brand/language-toggle"
import { Logo } from "@/components/brand/logo"
import { getPagesDictionary, type Dictionary } from "@/app/[lang]/dictionaries"
import type { Locale } from "@/lib/i18n"
import { COMPANY, FACEBOOK_GROUP_URL, infoPages, type InfoPage } from "@/lib/site"

const pageOrder: InfoPage[] = ["about", "contact", "privacy", "terms", "sales"]

export async function SiteFooter({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const pages = await getPagesDictionary(lang)

  return (
    <footer className="px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <Logo />
          <p className="text-muted-foreground">{dict.footer.tagline}</p>
        </div>
        <nav aria-label={pages.footer.pagesLabel}>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {pageOrder.map((page) => (
              <li key={page}>
                <Link
                  href={`/${lang}/${infoPages[page]}`}
                  className="text-muted-foreground underline underline-offset-4 hover:text-foreground"
                >
                  {pages.nav[page]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-sm">
          <div className="grid gap-1 text-muted-foreground">
            <p>{dict.footer.copyright}</p>
            <p>
              {COMPANY.name} · {pages.footer.orgNr} {COMPANY.orgNr} · {COMPANY.address}
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={FACEBOOK_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-link underline underline-offset-4 hover:decoration-2"
            >
              Facebook<span className="sr-only"> ({dict.ui.opensFacebook})</span>
            </a>
            <LanguageToggle lang={lang} label={dict.ui.language} />
          </div>
        </div>
      </div>
    </footer>
  )
}
