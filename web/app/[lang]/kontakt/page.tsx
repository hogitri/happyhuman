import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CtaLink, FacebookCta } from "@/components/brand/cta-button"
import { InfoPage } from "@/components/pages/info-page"
import { hasLocale } from "@/lib/i18n"
import { COMPANY, CONTACT_EMAIL } from "@/lib/site"
import { getDictionary, getPagesDictionary } from "../dictionaries"

export async function generateMetadata({ params }: PageProps<"/[lang]/kontakt">): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const { meta } = (await getPagesDictionary(lang)).pages.contact
  return { title: meta.title, description: meta.description }
}

export default async function ContactPage({ params }: PageProps<"/[lang]/kontakt">) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const [dict, pages] = await Promise.all([getDictionary(lang), getPagesDictionary(lang)])
  const { contact } = pages.pages
  const { details } = contact

  return (
    <InfoPage lang={lang} dict={dict} title={contact.title} lead={contact.lead} sections={contact.sections}>
      <dl className="grid">
        <div className="grid gap-4 border-t border-border py-8 md:py-10">
          <dt className="font-heading text-2xl font-semibold tracking-tight">{details.emailTitle}</dt>
          <dd className="grid justify-items-start gap-5">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-lg font-medium text-link underline underline-offset-4 hover:decoration-2 md:text-xl"
            >
              {CONTACT_EMAIL}
            </a>
            {/* Sun button: the one main action on this page */}
            <CtaLink href={`mailto:${CONTACT_EMAIL}`}>{details.emailCta}</CtaLink>
          </dd>
        </div>

        <div className="grid gap-4 border-t border-border py-8 md:py-10">
          <dt className="font-heading text-2xl font-semibold tracking-tight">{details.groupTitle}</dt>
          <dd className="grid justify-items-start gap-5 text-base md:text-lg">
            <p className="text-pretty">{details.groupText}</p>
            <FacebookCta label={details.groupCta} srHint={dict.ui.opensFacebook} variant="outline" />
          </dd>
        </div>

        <div className="grid gap-4 border-t border-border py-8 md:py-10">
          <dt className="font-heading text-2xl font-semibold tracking-tight">{details.companyTitle}</dt>
          <dd className="text-base md:text-lg">
            <address className="not-italic">
              {COMPANY.name}
              <br />
              {pages.footer.orgNr} {COMPANY.orgNr}
              <br />
              {COMPANY.address}
            </address>
          </dd>
        </div>
      </dl>
    </InfoPage>
  )
}
