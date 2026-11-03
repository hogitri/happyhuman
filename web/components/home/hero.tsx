import Image from "next/image"
import Link from "next/link"

import { FacebookCta } from "@/components/brand/cta-button"
import { Logo } from "@/components/brand/logo"
import type { Dictionary } from "@/app/[lang]/dictionaries"
import type { Locale } from "@/lib/i18n"
import { images } from "./images"

// First screen on the deep-sea field: the promise set large and centred, the two ways in,
// then one still photograph of the coast that opens to the full width as you scroll.
// There is no menu: the logo sits at the top of this field.
export function Hero({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const { hero } = dict.home

  return (
    <section aria-labelledby="hero-title" className="hh-deep overflow-hidden pb-4 sm:pb-8">
      <div className="flex h-24 items-center justify-center">
        <Link href={`/${lang}`} aria-label={dict.ui.home}>
          <Logo />
        </Link>
      </div>
      <div className="hh-rise mx-auto mt-12 flex max-w-5xl flex-col items-center gap-7 px-4 text-center sm:mt-20 sm:px-8">
        <h1 id="hero-title" className="text-display leading-[0.98] font-semibold tracking-[-0.04em] text-balance">
          {hero.title}
        </h1>
        <p className="max-w-[34rem] text-lead text-pretty text-muted-foreground">{hero.lead}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <FacebookCta label={dict.cta.join} srHint={dict.ui.opensFacebook} />
          <a
            href="#tilbud"
            className="inline-flex h-12 items-center rounded-full px-6 text-base font-medium underline decoration-foreground/40 underline-offset-6 transition-[text-decoration-color] hover:decoration-foreground"
          >
            {hero.secondary}
          </a>
        </div>
      </div>

      <div className="mt-20 sm:mt-28">
        <div className="hh-open relative aspect-4/5 origin-top overflow-hidden sm:aspect-21/9">
          <Image src={images.hero} alt={hero.imageAlt} fill priority sizes="100vw" className="object-cover object-[50%_70%]" />
        </div>
      </div>

    </section>
  )
}
