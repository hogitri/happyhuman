import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { CtaLink, FacebookCta } from "@/components/brand/cta-button"
import type { Dictionary } from "@/app/[lang]/dictionaries"
import type { Locale } from "@/lib/i18n"
import { CONTACT_EMAIL } from "@/lib/site"
import { cn } from "@/lib/utils"
import { BootcampIllustration, PersonalTrainingIllustration } from "./service-illustrations"

type Detail = { label: string; text: string }

function Card({
  title,
  lead,
  details,
  illustration,
  tone,
  children,
}: {
  title: string
  lead: string
  details: Detail[]
  illustration: React.ReactNode
  tone: string
  children: React.ReactNode
}) {
  return (
    <article className={cn("flex flex-col overflow-hidden rounded-[1.75rem] transition-transform duration-300 ease-out hover:-translate-y-1", tone)}>
      <div className="relative aspect-16/10 overflow-hidden">
        {illustration}
      </div>
      <div className="flex flex-1 flex-col gap-6 p-6 sm:p-10">
        <h3 className="text-title font-semibold tracking-[-0.03em]">{title}</h3>
        <p className="text-base text-pretty">{lead}</p>
        <dl className="grid gap-4 sm:grid-cols-[7rem_1fr]">
          {details.map((detail) => (
            <div key={detail.label} className="contents">
              <dt className="text-small text-muted-foreground sm:pt-0.5">{detail.label}</dt>
              <dd className="-mt-3 text-base sm:mt-0">{detail.text}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-4">{children}</div>
      </div>
    </article>
  )
}

// What we offer: the free bootcamp and paid personal training, side by side
export function Offer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const { offer } = dict.home
  const { bootcamp, pt } = offer

  return (
    <section id="tilbud" aria-labelledby="offer-title" className="scroll-mt-4 px-4 pb-28 sm:px-8 md:pb-40">
      <h2 id="offer-title" data-reveal className="text-display leading-[1.02] font-semibold tracking-[-0.04em]">
        {offer.title}
      </h2>
      <div data-reveal className="mt-12 grid gap-4 md:mt-16 lg:grid-cols-2">
        <Card {...bootcamp} illustration={<BootcampIllustration label={bootcamp.imageAlt} />} tone="hh-deep">
          <FacebookCta label={dict.cta.join} srHint={dict.ui.opensFacebook} />
          <Link
            href={`/${lang}/trening`}
            className="group inline-flex items-center gap-2 text-base underline decoration-foreground/40 underline-offset-6 transition-[text-decoration-color] hover:decoration-foreground"
          >
            {bootcamp.more}
            <ArrowRightIcon aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </Card>
        <Card {...pt} illustration={<PersonalTrainingIllustration label={pt.imageAlt} />} tone="hh-glass">
          <CtaLink
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(pt.mailSubject)}`}
            className="bg-deep text-foam hover:bg-deep/90"
          >
            {pt.cta}
          </CtaLink>
        </Card>
      </div>
    </section>
  )
}
