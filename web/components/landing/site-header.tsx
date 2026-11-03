import Link from "next/link"

import { Logo } from "@/components/brand/logo"
import type { Dictionary } from "@/app/[lang]/dictionaries"
import type { Locale } from "@/lib/i18n"

// No menu: just the logo, linking home. The front page puts it inside its hero instead.
export function SiteHeader({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <header className="bg-background px-4 sm:px-8">
      <Link href={`/${lang}`} aria-label={dict.ui.home} className="flex h-20 w-fit items-center">
        <Logo />
      </Link>
    </header>
  )
}
