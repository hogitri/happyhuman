import { Section } from "@/components/brand/section"
import { Visual } from "@/components/brand/visual"
import type { Dictionary } from "@/app/[lang]/dictionaries"

// Led by Kaja's own words; credentials stay small
export function Trainer({ dict }: { dict: Dictionary }) {
  const { trainer } = dict

  return (
    <Section id="trainer" tone="fjord" aria-labelledby="trainer-name">
      <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:items-center lg:gap-20">
        <Visual scene="mist" alt={trainer.imageLabel} className="aspect-4/5 w-full max-w-md" />
        <figure className="flex flex-col gap-10">
          <blockquote className="text-3xl leading-tight font-semibold tracking-tighter text-balance md:text-5xl">
            «{trainer.quote}»
          </blockquote>
          <figcaption className="flex flex-col gap-4">
            <div>
              <h2 id="trainer-name" className="text-xl font-semibold">{trainer.name}</h2>
              <p className="text-muted-foreground">{trainer.role}</p>
            </div>
            <p className="max-w-xl text-base text-pretty text-muted-foreground">{trainer.bio}</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {trainer.facts.map((fact) => (
                <li key={fact.label}>
                  <span className="font-semibold text-sun">{fact.value}</span>{" "}
                  <span className="text-muted-foreground">{fact.label}</span>
                </li>
              ))}
            </ul>
          </figcaption>
        </figure>
      </div>
    </Section>
  )
}
