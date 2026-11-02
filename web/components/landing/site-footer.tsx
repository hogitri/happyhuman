import Link from "next/link"

import { LanguageToggle } from "@/components/brand/language-toggle"
import { Logo } from "@/components/brand/logo"
import { getPagesDictionary, type Dictionary } from "@/app/[lang]/dictionaries"
import type { Locale } from "@/lib/i18n"
import { PHOTO_CREDITS } from "@/lib/photo-credits"
import { COMPANY, CONTACT_EMAIL, FACEBOOK_GROUP_URL, infoPages, type InfoPage } from "@/lib/site"

const pageOrder: InfoPage[] = ["about", "contact", "privacy", "terms", "sales"]

const linkClass = "underline decoration-foreground/30 underline-offset-4 transition-[text-decoration-color] hover:decoration-foreground"

// The page closes with the mark built large, then plain columns of links and contact details
export async function SiteFooter({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const pages = await getPagesDictionary(lang)

  return (
    <footer className="bg-secondary px-4 pt-16 pb-10 text-secondary-foreground sm:px-6 md:pt-24">
      <div className="flex flex-col gap-14 md:gap-20">
        <Logo size="xl" className="w-full" />

        <div className="grid gap-10 text-base sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            <p className="font-semibold">{dict.footer.tagline}</p>
            <p>{dict.footer.place}</p>
          </div>
          <nav aria-label={pages.footer.pagesLabel} className="flex flex-col gap-3">
            <p className="font-semibold">{dict.footer.pagesTitle}</p>
            <ul className="flex flex-col gap-2">
              {pageOrder.map((page) => (
                <li key={page}>
                  <Link href={`/${lang}/${infoPages[page]}`} className={linkClass}>
                    {pages.nav[page]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-3">
            <p className="font-semibold">{dict.footer.contactTitle}</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>{CONTACT_EMAIL}</a>
            <a href={FACEBOOK_GROUP_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {dict.footer.facebook}
              <span className="sr-only"> ({dict.ui.opensFacebook})</span>
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold">{dict.footer.photos}</p>
            <ul className="flex flex-col gap-1.5 text-sm">
              {PHOTO_CREDITS.map((credit) => (
                <li key={credit.page}>
                  <a href={credit.page} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {credit.title}
                  </a>{" "}
                  · {credit.creator} · {credit.license}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
          <p>
            {dict.footer.copyright} · {COMPANY.name} · {pages.footer.orgNr} {COMPANY.orgNr} · {COMPANY.address}
          </p>
          <LanguageToggle lang={lang} label={dict.ui.language} />
        </div>
      </div>
    </footer>
  )
}
