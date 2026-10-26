"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { toggleVariants } from "@/components/ui/toggle"
import { localeLabels, locales, type Locale } from "@/lib/i18n"
import { cn } from "@/lib/utils"

// Links (not buttons) so each language version is a real, crawlable URL
export function LanguageToggle({
  lang,
  label,
  className,
}: {
  lang: Locale
  label: string
  className?: string
}) {
  const pathname = usePathname()
  const rest = pathname.split("/").slice(2).join("/")

  return (
    <nav
      aria-label={label}
      className={cn("inline-flex items-center rounded-full border border-border p-0.5", className)}
    >
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${rest ? `/${rest}` : ""}`}
          hrefLang={locale === "no" ? "nb" : "en"}
          aria-current={locale === lang ? "true" : undefined}
          className={cn(
            toggleVariants({ size: "sm" }),
            "rounded-full px-3 font-semibold aria-[current]:bg-foreground aria-[current]:text-background"
          )}
        >
          {localeLabels[locale]}
        </Link>
      ))}
    </nav>
  )
}
