import { Section } from "@/components/brand/section"
import { SunArch } from "@/components/brand/visual"
import type { Dictionary } from "@/app/[lang]/dictionaries"

// The band that splits the page: the four values in large type on fjord,
// with the sun rising out of the bottom edge as you scroll
export function Values({ dict }: { dict: Dictionary }) {
  const { why } = dict

  return (
    <Section id="verdier" tone="fjord" aria-labelledby="why-title" className="overflow-hidden pb-0 md:pb-0">
      <h2 id="why-title" data-reveal className="text-4xl leading-[1.05] font-semibold tracking-tighter text-balance md:text-6xl">
        {why.title}
      </h2>
      <ul data-reveal className="mt-14 grid gap-x-16 gap-y-12 md:mt-20 md:grid-cols-2">
        {why.items.map((item) => (
          <li key={item.title} className="flex flex-col gap-3">
            <p className="text-4xl font-semibold tracking-tighter md:text-5xl lg:text-6xl">{item.title}</p>
            <p className="max-w-md text-base text-pretty md:text-lg">{item.text}</p>
          </li>
        ))}
      </ul>
      <div className="relative mx-auto mt-20 w-full max-w-4xl md:mt-28">
        <SunArch className="hh-sunrise aspect-2/1 w-full" />
        <p className="absolute inset-x-0 bottom-0 mx-auto max-w-[22ch] px-6 pb-[9%] text-center text-xl leading-snug font-semibold tracking-tight text-balance text-fjord md:text-3xl">
          {why.lead}
        </p>
      </div>
    </Section>
  )
}
