import Link from "next/link"

import { FacebookCta } from "@/components/brand/cta-button"
import { Logo } from "@/components/brand/logo"
import type { Dictionary } from "@/app/[lang]/dictionaries"
import type { Locale } from "@/lib/i18n"

const sections = [
  ["session", "timen"],
  ["stations", "stasjoner"],
  ["trainer", "kaja"],
  ["faq", "faq"],
] as const

// Logo, links to the landing page's sections, and the join button.
// The landing hero carries the sun button, so the header repeats it as an outline pill.
export function SiteHeader({
  lang,
  dict,
  ctaVariant = "default",
}: {
  lang: Locale
  dict: Dictionary
  ctaVariant?: "default" | "outline"
}) {
  return (
    <header className="bg-background">
      <div className="flex h-16 items-center justify-between gap-6 px-4 sm:px-6">
        <Link href={`/${lang}`} aria-label={dict.ui.home} className="rounded-md">
          <Logo />
        </Link>
        <nav aria-label={dict.nav.label} className="ml-auto hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-medium">
            {sections.map(([key, id]) => (
              <li key={id}>
                <Link
                  href={`/${lang}#${id}`}
                  className="rounded-sm underline decoration-foreground/30 underline-offset-6 transition-[text-decoration-color] hover:decoration-foreground"
                >
                  {dict.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <FacebookCta
          label={dict.cta.join}
          srHint={dict.ui.opensFacebook}
          variant={ctaVariant}
          className="h-10 px-4 text-sm"
        />
      </div>
    </header>
  )
}
