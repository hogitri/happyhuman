import { notFound } from "next/navigation"

import { Faq } from "@/components/landing/faq"
import { FinalCta } from "@/components/landing/final-cta"
import { Hero } from "@/components/landing/hero"
import { Sessions } from "@/components/landing/sessions"
import { SiteFooter } from "@/components/landing/site-footer"
import { SiteHeader } from "@/components/landing/site-header"
import { Trainer } from "@/components/landing/trainer"
import { Values } from "@/components/landing/values"
import { hasLocale } from "@/lib/i18n"
import { getDictionary } from "./dictionaries"

// Landing page for Bootcamp i Blomvåg: every section's text comes from the dictionary
export default async function HomePage({ params }: PageProps<"/[lang]">) {
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
        <Values dict={dict} />
        <Sessions dict={dict} />
        <Trainer dict={dict} />
        <Faq dict={dict} />
        <FinalCta dict={dict} />
      </main>
      <SiteFooter lang={lang} dict={dict} />
    </>
  )
}
