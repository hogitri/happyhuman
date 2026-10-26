import { Section } from "@/components/brand/section"
import { SectionHeading } from "@/components/brand/section-heading"
import { Visual } from "@/components/brand/visual"
import type { Dictionary } from "@/app/[lang]/dictionaries"

export function Hero({ dict }: { dict: Dictionary }) {
  const { hero } = dict

  return (
    <Section className="pt-10 pb-20 md:pt-16 md:pb-28">
      <div className="flex flex-col gap-8 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
        <SectionHeading as="h1" title={hero.title} className="max-w-5xl" />
        <p className="max-w-md text-lg text-pretty text-muted-foreground md:text-xl">{hero.lead}</p>
      </div>

      <Visual
        scene="sunrise"
        alt={hero.imageLabel}
        priority
        className="mt-12 aspect-4/5 sm:aspect-video lg:aspect-21/9 md:mt-16"
      />

      <dl className="mt-8 grid grid-cols-3 gap-4 md:mt-10">
        {hero.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse gap-1">
            <dt className="text-sm text-muted-foreground">{stat.label}</dt>
            <dd className="text-3xl font-semibold tracking-tighter md:text-5xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
