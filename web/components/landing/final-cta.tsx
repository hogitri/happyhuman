import { FacebookCta } from "@/components/brand/cta-button"
import { Section } from "@/components/brand/section"
import { SectionHeading } from "@/components/brand/section-heading"
import type { Dictionary } from "@/app/[lang]/dictionaries"

export function FinalCta({ dict }: { dict: Dictionary }) {
  return (
    <Section tone="sun">
      <div className="flex flex-col items-center gap-10">
        <SectionHeading align="center" title={dict.finalCta.title} lead={dict.finalCta.lead} />
        <FacebookCta tone="inverse" label={dict.cta.join} srHint={dict.ui.opensFacebook} />
      </div>
    </Section>
  )
}
