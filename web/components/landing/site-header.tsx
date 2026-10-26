import Link from "next/link"

import { FacebookCta } from "@/components/brand/cta-button"
import { Logo } from "@/components/brand/logo"
import type { Dictionary } from "@/app/[lang]/dictionaries"
import type { Locale } from "@/lib/i18n"

// Logo and the yellow join button, the page's main call to action. The page is short enough not to need section links.
export function SiteHeader({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <header className="bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href={`/${lang}`} aria-label={dict.ui.home} className="rounded-md">
          <Logo />
        </Link>
        <FacebookCta
          label={dict.cta.join}
          srHint={dict.ui.opensFacebook}
          className="h-10 px-4 text-sm"
        />
      </div>
    </header>
  )
}
