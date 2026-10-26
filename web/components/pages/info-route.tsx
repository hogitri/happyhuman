import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getDictionary, getPagesDictionary } from "@/app/[lang]/dictionaries"
import { hasLocale } from "@/lib/i18n"
import { LEGAL_UPDATED } from "@/lib/site"
import { InfoPage } from "./info-page"

type Params = { params: Promise<{ lang: string }> }
type TextPage = "about" | "privacy" | "terms" | "sales"

const legalPages: TextPage[] = ["privacy", "terms", "sales"]

// generateMetadata + page component for a text-only info page, so each route file stays two lines
export function infoRoute(key: TextPage) {
  async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { lang } = await params
    if (!hasLocale(lang)) return {}
    const { meta } = (await getPagesDictionary(lang)).pages[key]
    return { title: meta.title, description: meta.description }
  }

  async function Page({ params }: Params) {
    const { lang } = await params
    if (!hasLocale(lang)) notFound()
    const [dict, pages] = await Promise.all([getDictionary(lang), getPagesDictionary(lang)])
    const page = pages.pages[key]

    return (
      <InfoPage
        lang={lang}
        dict={dict}
        title={page.title}
        lead={page.lead}
        updated={legalPages.includes(key) ? { label: pages.updated, date: LEGAL_UPDATED } : undefined}
        sections={page.sections}
      />
    )
  }

  return { generateMetadata, Page }
}
