import { Section } from "@/components/brand/section"
import { SectionHeading } from "@/components/brand/section-heading"
import { Visual } from "@/components/brand/visual"
import type { Dictionary } from "@/app/[lang]/dictionaries"

// What a session is, plus the practical details, next to one big visual
export function Sessions({ dict }: { dict: Dictionary }) {
  const { sessions } = dict

  return (
    <Section id="sessions" tone="muted">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Visual scene="sun" alt={sessions.imageLabel} className="aspect-4/5" />
        <div className="flex flex-col gap-10">
          <SectionHeading title={sessions.title} lead={sessions.lead} />
          <dl>
            {sessions.details.map((detail) => (
              <div
                key={detail.label}
                className="grid gap-1 border-t border-foreground/15 py-4 sm:grid-cols-[7rem_1fr] sm:gap-6"
              >
                <dt className="text-sm font-medium text-muted-foreground">{detail.label}</dt>
                <dd className="text-base">{detail.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
