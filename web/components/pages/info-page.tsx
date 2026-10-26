import { Section } from "@/components/brand/section"
import { SectionHeading } from "@/components/brand/section-heading"
import { SiteFooter } from "@/components/landing/site-footer"
import { SiteHeader } from "@/components/landing/site-header"
import type { Dictionary } from "@/app/[lang]/dictionaries"
import { htmlLang, type Locale } from "@/lib/i18n"
import { RichText } from "./rich-text"

export type InfoSection = { heading: string; paragraphs?: string[]; items?: string[] }

// Shared layout for about, contact and the legal pages: one heading band, then a single readable column
export function InfoPage({
  lang,
  dict,
  title,
  lead,
  updated,
  sections,
  children,
}: {
  lang: Locale
  dict: Dictionary
  title: string
  lead: string
  /** For legal texts: label and ISO date, shown under the lead */
  updated?: { label: string; date: string }
  sections: InfoSection[]
  children?: React.ReactNode
}) {
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
        <Section className="break-words hyphens-auto">
          <SectionHeading as="h1" title={title} lead={lead} />
          {updated && (
            <p className="mt-6 text-sm text-muted-foreground">
              {updated.label}{" "}
              <time dateTime={updated.date}>
                {new Intl.DateTimeFormat(htmlLang[lang], { dateStyle: "long", timeZone: "UTC" }).format(new Date(updated.date))}
              </time>
            </p>
          )}

          {children && <div className="mt-14 max-w-3xl md:mt-20">{children}</div>}

          {sections.length > 0 && (
            <div className="mt-14 max-w-3xl md:mt-20">
              {sections.map((section) => (
                <section key={section.heading} className="border-t border-border py-8 md:py-10">
                  <h2 className="font-heading text-2xl font-semibold tracking-tight">{section.heading}</h2>
                  <div className="mt-4 grid gap-4 text-base text-pretty md:text-lg">
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph}>
                        <RichText text={paragraph} lang={lang} />
                      </p>
                    ))}
                    {section.items && (
                      <ul className="grid list-disc gap-2 pl-5 marker:text-muted-foreground">
                        {section.items.map((item) => (
                          <li key={item}>
                            <RichText text={item} lang={lang} />
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              ))}
            </div>
          )}
        </Section>
      </main>
      <SiteFooter lang={lang} dict={dict} />
    </>
  )
}
