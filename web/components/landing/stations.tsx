import { Section } from "@/components/brand/section"
import { SunArch } from "@/components/brand/visual"
import type { Dictionary } from "@/app/[lang]/dictionaries"

// The page's one live thing: switch every station between its easier and harder version.
// Pure CSS (radio inputs + :has() in globals.css), so it works without JavaScript;
// browsers without :has() simply show both versions.
export function Stations({ dict }: { dict: Dictionary }) {
  const { stations } = dict
  const levels = [
    ["easier", stations.easier],
    ["harder", stations.harder],
  ] as const

  return (
    <Section id="stasjoner" aria-labelledby="stations-title">
      <div className="hh-level">
        <div data-reveal className="grid gap-8 lg:grid-cols-[5fr_7fr] lg:items-end lg:gap-20">
          <h2 id="stations-title" className="text-4xl leading-[1.05] font-semibold tracking-tighter text-balance md:text-6xl">
            {stations.title}
          </h2>
          <div className="flex flex-col items-start gap-6">
            <p className="max-w-xl text-lg text-pretty md:text-xl">{stations.lead}</p>
            <fieldset className="inline-flex rounded-full bg-secondary p-1">
              <legend className="sr-only">{stations.levelLabel}</legend>
              {levels.map(([value, label], i) => (
                <label
                  key={value}
                  className="relative flex h-12 cursor-pointer items-center rounded-full px-6 text-base font-semibold transition-[background-color,color,transform] active:scale-[0.97] has-checked:bg-foreground has-checked:text-background has-focus-visible:ring-3 has-focus-visible:ring-ring has-focus-visible:ring-offset-2 has-focus-visible:ring-offset-background"
                >
                  <input type="radio" name="level" value={value} defaultChecked={i === 0} className="sr-only" />
                  {label}
                </label>
              ))}
            </fieldset>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-3xl font-semibold tracking-tighter md:text-5xl">{stations.listTitle}</h3>
            <p className="text-base">{stations.count}</p>
          </div>
          <ul data-reveal className="mt-10 grid gap-x-16 gap-y-9 md:grid-cols-2">
            {stations.items.map((item) => (
              <li key={item.name} className="grid grid-cols-[3.25rem_1fr] items-start gap-5">
                <SunArch className="hh-level-sun mt-1 aspect-2/1 w-full" />
                <div>
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p data-level="easier" className="mt-1 max-w-[40ch] text-base text-pretty">{item.easier}</p>
                  <p data-level="harder" className="mt-1 max-w-[40ch] text-base text-pretty">{item.harder}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-muted-foreground">{stations.note}</p>
        </div>

        <div className="mt-20 md:mt-28">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-3xl font-semibold tracking-tighter md:text-5xl">{stations.practicalTitle}</h3>
            <p className="text-base">{stations.practicalCount}</p>
          </div>
          <dl data-reveal className="mt-10 grid gap-x-16 gap-y-9 md:grid-cols-2">
            {stations.practical.map((item) => (
              <div key={item.label} className="grid grid-cols-[3.25rem_1fr] items-start gap-5">
                <SunArch className="mt-1 aspect-2/1 w-full" />
                <div>
                  <dt className="text-lg font-semibold">{item.label}</dt>
                  <dd className="mt-1 max-w-[40ch] text-base text-pretty">{item.text}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
