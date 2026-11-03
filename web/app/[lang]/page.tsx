import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Reveal } from "@/components/brand/reveal"
import { Faq } from "@/components/home/faq"
import { Hero } from "@/components/home/hero"
import { Join } from "@/components/home/join"
import { Offer } from "@/components/home/offer"
import { Why } from "@/components/home/why"
import { SiteFooter } from "@/components/landing/site-footer"
import { hasLocale } from "@/lib/i18n"
import { getDictionary } from "./dictionaries"

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return { title: { absolute: dict.home.metaTitle }, description: dict.home.metaDescription }
}

// Front page: what Happy Human is and why, what we offer (free bootcamp, paid personal training),
// a few answers and the way in. No menu. Text from the dictionary; Norwegian only.
export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {dict.ui.skipToContent}
      </a>
      <main id="main" className="flex-1">
        <Hero lang={lang} dict={dict} />
        <Why dict={dict} />
        <Offer lang={lang} dict={dict} />
        <Faq dict={dict} />
        <Join dict={dict} />
      </main>
      <SiteFooter lang={lang} dict={dict} />
      <Reveal />
    </>
  )
}
