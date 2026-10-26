import Link from "next/link"

import type { Locale } from "@/lib/i18n"
import { COMPANY, CONTACT_EMAIL } from "@/lib/site"

const linkClass = "font-medium text-link underline underline-offset-4 hover:decoration-2"

// Fills {company}, {orgNr}, {address}, {email} and {lang} from lib/site, so company details live in one place
export function fillTokens(text: string, lang: Locale) {
  const values: Record<string, string> = {
    company: COMPANY.name,
    orgNr: COMPANY.orgNr,
    address: COMPANY.address,
    email: CONTACT_EMAIL,
    lang,
  }
  return text.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match)
}

// Dictionary text with [label](href) links: internal paths use next/link, external ones open in a new tab
export function RichText({ text, lang }: { text: string; lang: Locale }) {
  const parts = fillTokens(text, lang).split(/(\[[^\]]+\]\([^)]+\))/g)

  return parts.map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (!link) return part
    const [, label, href] = link

    if (href.startsWith("/")) {
      return (
        <Link key={i} href={href} className={linkClass}>
          {label}
        </Link>
      )
    }
    const external = href.startsWith("http")
    return (
      <a
        key={i}
        href={href}
        className={linkClass}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {label}
      </a>
    )
  })
}
