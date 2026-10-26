import { Section } from "@/components/brand/section"
import { SectionHeading } from "@/components/brand/section-heading"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { Dictionary } from "@/app/[lang]/dictionaries"

export function Faq({ dict }: { dict: Dictionary }) {
  const { faq } = dict

  return (
    <Section id="faq">
      <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-20">
        <SectionHeading title={faq.title} />
        <Accordion className="border-b border-border">
          {faq.items.map((item, i) => (
            <AccordionItem key={item.q} value={`q${i}`} className="border-t border-border">
              <AccordionTrigger className="py-6 text-lg font-medium md:text-xl">{item.q}</AccordionTrigger>
              <AccordionContent className="pb-6 text-base text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}
