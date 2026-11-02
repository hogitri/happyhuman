import { FacebookCta } from "@/components/brand/cta-button"
import { LogoMark } from "@/components/brand/logo"
import { SunArch, Visual } from "@/components/brand/visual"
import type { Dictionary } from "@/app/[lang]/dictionaries"

// One row of tiles cropped from a longer one: the fjord photo and a flat fjord tile run off
// the screen edges, the sun tile in the middle holds the action
export function FinalCta({ dict }: { dict: Dictionary }) {
  return (
    <section aria-labelledby="cta-title" className="overflow-hidden py-20 md:py-32">
      <div className="grid grid-cols-2 gap-3 px-4 sm:px-6 lg:grid-cols-[1fr_minmax(0,64rem)_1fr] lg:px-0">
        <Visual
          src="/images/place/hjeltefjorden-seen-from-rong-pier.jpg"
          alt={dict.finalCta.imageAlt}
          shape="arch"
          sizes="(min-width: 1024px) 20vw, 50vw"
          className="order-2 h-36 lg:order-none lg:-ml-6 lg:h-96"
        />
        <div className="relative col-span-2 flex min-h-80 items-center overflow-hidden rounded-3xl bg-sun p-8 text-fjord sm:p-12 lg:col-span-1 lg:h-96 lg:p-14">
          <div data-reveal className="relative z-10 flex flex-col items-start gap-6 lg:max-w-[55%]">
          <h2 id="cta-title" className="max-w-[14ch] text-4xl leading-[1.05] font-semibold tracking-tighter text-balance md:text-6xl">
            {dict.finalCta.title}
          </h2>
          <p className="max-w-md text-lg text-pretty md:text-xl">{dict.finalCta.lead}</p>
          <FacebookCta tone="inverse" label={dict.cta.join} srHint={dict.ui.opensFacebook} />
          </div>
          {/* The monogram, oversized and cropped by the tile, closes the tile's right side */}
          <LogoMark className="absolute top-1/2 -right-[10%] hidden h-[125%] w-auto -translate-y-1/2 text-fjord lg:block" />
        </div>
        <div aria-hidden className="relative order-3 h-36 overflow-hidden rounded-3xl bg-fjord dark:bg-card lg:order-none lg:-mr-6 lg:h-96">
          <SunArch className="absolute inset-x-[18%] bottom-0 aspect-2/1" />
        </div>
      </div>
    </section>
  )
}
