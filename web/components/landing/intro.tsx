import Image from "next/image"

import { Section } from "@/components/brand/section"
import type { Dictionary } from "@/app/[lang]/dictionaries"

const thumbs: Record<string, string> = {
  sea: "/images/place/hjeltefjorden-seen-from-rong-pier.jpg",
  kettlebell: "/images/place/kettlebell-truebalance-romeike.jpg",
  village: "/images/place/blomvaag.jpg",
}

// One statement with small arch-shaped photos set into the line, previewing the page
export function Intro({ dict }: { dict: Dictionary }) {
  const { intro } = dict

  return (
    <Section aria-labelledby="intro-title">
      <h2 id="intro-title" className="sr-only">{intro.title}</h2>
      <p
        data-reveal
        className="mx-auto max-w-3xl text-2xl leading-[1.25] font-semibold tracking-tight text-pretty md:text-center md:text-[2rem] md:leading-[1.2] lg:text-4xl"
      >
        {intro.parts.map((part, i) =>
          "image" in part && part.image ? (
            <span
              key={i}
              className="relative mx-[0.15em] inline-block h-[0.95em] w-[1.6em] overflow-hidden rounded-t-full align-[-0.08em]"
            >
              <Image src={thumbs[part.image]} alt={part.alt} fill sizes="96px" className="object-cover" />
            </span>
          ) : (
            <span key={i}>{"text" in part ? part.text : null} </span>
          )
        )}
      </p>
    </Section>
  )
}
