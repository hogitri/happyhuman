import { Section } from "@/components/brand/section"
import type { Dictionary } from "@/app/[lang]/dictionaries"

// Three small flat illustrations, one per part of the class. People are simple circles:
// big ones for adults, small ones for kids. Colours come from the palette tokens.

// Arriving: people come on their own, big and small, from all sides
function Arrive() {
  return (
    <svg viewBox="0 0 240 160" aria-hidden="true" className="h-auto w-full">
      <circle cx="46" cy="58" r="14" className="fill-foreground" />
      <circle cx="104" cy="104" r="14" className="fill-foreground" />
      <circle cx="150" cy="44" r="9" className="fill-seaglass" />
      <circle cx="190" cy="98" r="14" className="fill-foreground" />
      <circle cx="70" cy="122" r="9" className="fill-seaglass" />
      <circle cx="200" cy="40" r="5" className="fill-primary" />
    </svg>
  )
}

// Warm-up: everyone in one ring
function WarmUp() {
  const ring = Array.from({ length: 10 }, (_, i) => {
    const angle = (i / 10) * Math.PI * 2 - Math.PI / 2
    return { x: 120 + Math.cos(angle) * 52, y: 80 + Math.sin(angle) * 52, small: i % 3 === 2 }
  })
  return (
    <svg viewBox="0 0 240 160" aria-hidden="true" className="h-auto w-full">
      <circle cx="120" cy="80" r="52" className="fill-none stroke-seaglass" strokeWidth="6" />
      {ring.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={p.small ? 8 : 12} className={p.small ? "fill-seaglass" : "fill-foreground"} />
      ))}
      <circle cx="120" cy="80" r="6" className="fill-primary" />
    </svg>
  )
}

// Stations: the same exercise at two levels, an easier step and a harder one
function Levels() {
  return (
    <svg viewBox="0 0 240 160" aria-hidden="true" className="h-auto w-full">
      <rect x="36" y="104" width="72" height="28" rx="6" className="fill-seaglass" />
      <rect x="132" y="64" width="72" height="68" rx="6" className="fill-primary" />
      <circle cx="72" cy="84" r="14" className="fill-foreground" />
      <circle cx="168" cy="44" r="14" className="fill-foreground" />
    </svg>
  )
}

const illustrations = [Arrive, WarmUp, Levels]

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

      <ol data-reveal className="mt-14 grid gap-4 md:mt-20 md:grid-cols-3">
        {session.steps.map((step, i) => {
          const Illustration = illustrations[i] ?? Arrive
          return (
            <li key={step.title} className="flex flex-col gap-6 rounded-[1.75rem] bg-card p-6 text-card-foreground transition-transform duration-300 ease-out hover:-translate-y-1 sm:p-8">
              <div className="rounded-2xl bg-background px-6 py-4">
                <Illustration />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold md:text-2xl">{step.title}</h3>
                <p className="max-w-xs text-base text-pretty text-muted-foreground">{step.text}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
