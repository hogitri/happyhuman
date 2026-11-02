import { Section } from "@/components/brand/section"
import type { Dictionary } from "@/app/[lang]/dictionaries"

type Dot = { x: number; y: number; zone: 0 | 1 | 2; tone: number }

// Deterministic pseudo-random numbers, so the server and every visit draw the same picture
function random(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }
}

// Many into one: people arriving on their own (scattered), the warm-up (a tight ribbon),
// the stations (neat rows in sun). Drawn along a 1200 × 260 track.
function buildDots(): Dot[] {
  const rand = random(42)
  const dots: Dot[] = []
  for (let i = 0; i < 44; i++) {
    dots.push({ x: 20 + rand() * 340, y: 24 + rand() * 216, zone: 0, tone: rand() > 0.5 ? 1 : 0 })
  }
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 15; col++) {
      dots.push({ x: 430 + col * 22 + (row % 2) * 11, y: 108 + row * 20, zone: 1, tone: 1 })
    }
  }
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 9; col++) {
      dots.push({ x: 850 + col * 40, y: 40 + row * 46, zone: 2, tone: 2 })
    }
  }
  return dots
}

const dots = buildDots()
const toneClass = ["fill-foreground/20", "fill-foreground/40", "fill-sun"]

// A half sun of radius r standing on (x, y): the page's motif at diagram size
const arch = (x: number, y: number, r = 7) => `M${x - r} ${y}A${r} ${r} 0 0 1 ${x + r} ${y}Z`

function Diagram({ vertical, label }: { vertical?: boolean; label: string }) {
  return (
    <svg
      role="img"
      aria-label={label}
      viewBox={vertical ? "0 0 260 1200" : "0 0 1200 260"}
      className={vertical ? "h-full w-full md:hidden" : "hidden w-full md:block"}
    >
      {dots.map((dot, i) => (
        <path
          key={i}
          d={vertical ? arch(dot.y, dot.x, 9) : arch(dot.x, dot.y)}
          className={toneClass[dot.tone]}
        />
      ))}
    </svg>
  )
}

export function Session({ dict }: { dict: Dictionary }) {
  const { session } = dict

  return (
    <Section id="timen" tone="muted" aria-labelledby="session-title">
      <div data-reveal className="grid gap-6 lg:grid-cols-[5fr_7fr] lg:items-end lg:gap-20">
        <h2 id="session-title" className="text-4xl leading-[1.05] font-semibold tracking-tighter text-balance md:text-6xl">
          {session.title}
        </h2>
        <p className="max-w-xl text-lg text-pretty md:text-xl">{session.lead}</p>
      </div>

      <div className="mt-14 grid grid-cols-[6.5rem_1fr] gap-6 md:mt-20 md:block">
        <Diagram vertical label={session.diagramLabel} />
        <Diagram label={session.diagramLabel} />
        <ol data-reveal className="grid gap-10 md:mt-12 md:grid-cols-3 md:gap-10">
          {session.steps.map((step) => (
            <li key={step.title} className="flex flex-col justify-center gap-2 md:justify-start">
              <h3 className="text-xl font-semibold md:text-2xl">{step.title}</h3>
              <p className="max-w-xs text-base text-pretty">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
