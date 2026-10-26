import { Section } from "@/components/brand/section"
import type { Dictionary } from "@/app/[lang]/dictionaries"

// The four values as large type: one line each, with a short explanation
export function Values({ dict }: { dict: Dictionary }) {
  const { why } = dict

  return (
    <Section id="why" aria-labelledby="why-title" className="pt-0 md:pt-0">
      <h2 id="why-title" className="sr-only">{why.title}</h2>
      <ul>
        {why.items.map((item) => (
          <li
            key={item.title}
            className="grid gap-3 border-t border-border py-8 md:grid-cols-[1fr_minmax(0,22rem)] md:items-end md:gap-10 md:py-10"
          >
            <p className="text-4xl font-semibold tracking-tighter md:text-7xl">{item.title}</p>
            <p className="text-base text-pretty text-muted-foreground md:pb-2">{item.text}</p>
          </li>
        ))}
      </ul>
      <p className="border-t border-border pt-8 text-lg text-pretty md:text-xl">{why.lead}</p>
    </Section>
  )
}
