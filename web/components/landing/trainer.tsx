import { Section } from "@/components/brand/section"
import { Visual } from "@/components/brand/visual"
import type { Dictionary } from "@/app/[lang]/dictionaries"

// An inset panel: the statement and Kaja's portrait under the arch on the left,
// cropped by the panel's bottom edge; her background and her why on the right
export function Trainer({ dict }: { dict: Dictionary }) {
  const { trainer } = dict

  return (
    <Section id="kaja" aria-labelledby="trainer-title" className="px-0 sm:px-0">
      <div className="mx-2.5 overflow-hidden rounded-3xl bg-secondary sm:mx-0">
        <div className="grid gap-12 px-6 pt-12 sm:px-10 md:pt-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-12 lg:px-14">
          <h2 id="trainer-title" data-reveal className="text-4xl leading-[1.05] font-semibold tracking-tighter text-balance md:text-6xl">
            {trainer.title}
          </h2>

          <div data-reveal className="flex flex-col gap-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:pt-4 lg:pb-16">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-semibold">{trainer.bioTitle}</h3>
              <p className="text-muted-foreground">{trainer.role}</p>
              <p className="max-w-lg text-base text-pretty md:text-lg">{trainer.bio}</p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-semibold">{trainer.whyTitle}</h3>
              <p className="max-w-lg text-base text-pretty md:text-lg">{trainer.why}</p>
              <blockquote className="mt-3 max-w-lg text-2xl leading-tight font-semibold tracking-tight text-balance md:text-3xl">
                «{trainer.quote}»
              </blockquote>
            </div>
            <dl className="grid grid-cols-3 gap-4">
              {trainer.facts.map((fact) => (
                <div key={fact.label} className="flex flex-col-reverse gap-1">
                  <dt className="text-sm">{fact.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tighter tabular-nums md:text-4xl">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* The panel's bottom edge crops the portrait's lowest fifth */}
          <Visual
            src="/images/people/kaja-haugen.jpg"
            alt={trainer.imageAlt}
            shape="arch"
            sizes="(min-width: 1024px) 34vw, 86vw"
            className="mx-auto -mb-[22%] aspect-[4/5] w-[86%] max-w-md self-end lg:col-start-1 lg:row-start-2 lg:mx-0 lg:mt-8 lg:w-[78%]"
            imageClassName="object-[50%_15%]"
          />
        </div>
      </div>
    </Section>
  )
}
