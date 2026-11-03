import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Faq } from "@/components/landing/faq"
import { FinalCta } from "@/components/landing/final-cta"
import { Hero } from "@/components/landing/hero"
import { Session } from "@/components/landing/session"
import { Stations } from "@/components/landing/stations"
import { SiteFooter } from "@/components/landing/site-footer"
import { SiteHeader } from "@/components/landing/site-header"
import { Reveal } from "@/components/brand/reveal"
import { hasLocale } from "@/lib/i18n"
import { getDictionary } from "../dictionaries"

export async function generateMetadata({ params }: PageProps<"/[lang]/trening">): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return { title: dict.training.metaTitle, description: dict.meta.description }
}

// The training page for Bootcamp i Blomvåg (was the front page until 2026-11-03):
// every section's text comes from the dictionary
export default async function TrainingPage({ params }: PageProps<"/[lang]/trening">) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {dict.ui.skipToContent}
      </a>
      <SiteHeader lang={lang} dict={dict} />
      <main id="main" className="flex-1">
        <Hero dict={dict} />
        <Session dict={dict} />
        <Stations dict={dict} />
        <Faq dict={dict} />
        <FinalCta dict={dict} />
      </main>
      <SiteFooter lang={lang} dict={dict} />
      <Reveal />
    </>
  )
}
