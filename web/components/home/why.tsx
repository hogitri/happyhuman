import Image from "next/image"

import type { Dictionary } from "@/app/[lang]/dictionaries"
import { images } from "./images"

// What Happy Human is and why: the four values, a wide illustration and a short description
// of the sessions.
export function Why({ dict }: { dict: Dictionary }) {
  const { why } = dict.home

  return (
    <section id="bevegelsen" aria-labelledby="why-title" className="scroll-mt-4 py-28 md:py-40">
      <div className="px-4 sm:px-8">
        <h2 id="why-title" data-reveal className="max-w-[18ch] text-display leading-[1.02] font-semibold tracking-[-0.04em] text-balance">
          {why.title}
        </h2>
        <ul data-reveal className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 md:mt-24 lg:grid-cols-4">
          {why.items.map((item) => (
            <li key={item.title} className="flex flex-col gap-3">
              <h3 className="text-title font-semibold tracking-[-0.03em]">{item.title}</h3>
              <p className="text-base text-pretty text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-24 px-4 sm:px-8 md:mt-32">
        <div className="relative aspect-4/3 overflow-hidden rounded-[1.75rem] sm:aspect-21/9">
          <Image src={images.ulvsund} alt={why.imageAlt} fill sizes="100vw" className="hh-drift-y object-cover" />
        </div>
      </div>

      <p data-reveal className="mx-auto mt-20 max-w-[34ch] px-4 text-center text-title leading-snug font-medium tracking-[-0.02em] text-pretty sm:px-8">
        {why.promise}
      </p>
    </section>
  )
}
