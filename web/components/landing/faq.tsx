import { Section } from "@/components/brand/section"
import type { Dictionary } from "@/app/[lang]/dictionaries"

// Filled tiles, one open at a time (native <details name>), the open one turns sun
export function Faq({ dict }: { dict: Dictionary }) {
  const { faq } = dict

  return (
    <Section id="faq" aria-labelledby="faq-title">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <h2
          id="faq-title"
          className="text-4xl leading-[1.05] font-semibold tracking-tighter text-balance md:text-6xl lg:sticky lg:top-24 lg:self-start"
        >
          {faq.title}
        </h2>
        <div data-reveal className="flex flex-col gap-2">
          {faq.items.map((item, i) => (
            <details
              key={item.q}
              name="faq"
              open={i === 0}
              className="hh-details group rounded-3xl bg-secondary transition-colors open:bg-sun open:text-fjord"
            >
              <summary className="flex min-h-18 cursor-pointer list-none items-center justify-between gap-6 rounded-3xl px-6 py-5 text-lg font-medium transition-transform active:scale-[0.99] md:text-xl [&::-webkit-details-marker]:hidden">
                {item.q}
                <span aria-hidden className="relative size-4 shrink-0">
                  <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-current" />
                  <span className="absolute inset-y-0 left-1/2 w-[3px] -translate-x-1/2 rounded-full bg-current transition-transform duration-300 group-open:rotate-90" />
                </span>
              </summary>
              <p className="max-w-[52ch] px-6 pb-6 text-base text-pretty md:text-lg">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  )
}
