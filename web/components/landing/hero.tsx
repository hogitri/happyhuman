import { FacebookCta } from "@/components/brand/cta-button"
import { SunArch, Visual } from "@/components/brand/visual"
import type { Dictionary } from "@/app/[lang]/dictionaries"

const heroPhotos = ["/images/home/ill-blomvaag-tall.webp", "/images/home/ill-ulvsund-tall.webp"]

// The H monogram split in two: the photo of Blomvåg under the top arch on the right,
// the sun rising from the bottom of the card on the left, carrying three words about the class.
export function Hero({ dict }: { dict: Dictionary }) {
  const { hero } = dict

  return (
    <section aria-labelledby="hero-title" className="px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="grid gap-3 lg:h-[calc(100svh-5.5rem)] lg:min-h-[40rem] lg:max-h-[60rem] lg:grid-cols-2">
        <Visual
          src={heroPhotos}
          alt={hero.imageAlt}
          shape="arch"
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="h-[52svh] min-h-80 lg:order-last lg:h-full"
          imageClassName="hh-drift object-[50%_70%]"
        />

        <div className="relative isolate flex min-h-[34rem] flex-col overflow-hidden rounded-3xl bg-card p-7 sm:p-10 lg:min-h-0 lg:p-14">
          <div data-reveal className="relative z-10 flex flex-col items-start gap-6 md:gap-8">
            <h1
              id="hero-title"
              className="max-w-[12ch] text-5xl leading-[0.98] font-semibold tracking-tighter text-balance sm:text-6xl lg:text-[clamp(3.75rem,5.6vw,6rem)]"
            >
              {hero.title}
            </h1>
            <p className="max-w-md text-lg text-pretty md:text-xl">{hero.lead}</p>
            <FacebookCta label={dict.cta.join} srHint={dict.ui.opensFacebook} />
          </div>

          <div className="relative mt-auto -mx-7 -mb-7 pt-12 sm:-mx-10 sm:-mb-10 lg:-mx-14 lg:-mb-14">
            <SunArch className="hh-rise-in aspect-2/1 w-full" />
            {/* Centred on the half disc's visual middle (about 62% down), not its flat bottom edge */}
            <dl className="absolute inset-x-0 top-[28%] bottom-[4%] grid grid-cols-3 content-center gap-2 px-[12%] text-center text-fjord">
              {hero.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse justify-end gap-0.5">
                  <dt className="text-sm font-medium">{stat.label}</dt>
                  <dd className="text-xl font-semibold tracking-tight sm:text-2xl lg:text-3xl xl:text-4xl">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
