import { FacebookCta } from "@/components/brand/cta-button"
import type { Dictionary } from "@/app/[lang]/dictionaries"

// The close: one whole field of sun yellow, one sentence and the way in
export function Join({ dict }: { dict: Dictionary }) {
  const { join } = dict.home

  return (
    <section aria-labelledby="join-title" className="px-4 pb-4 sm:px-8 sm:pb-8">
      <div className="hh-buoy flex flex-col items-center gap-7 rounded-[1.75rem] px-6 py-24 text-center md:py-36">
        <h2 id="join-title" data-reveal className="text-display leading-[1.02] font-semibold tracking-[-0.04em] text-balance">
          {join.title}
        </h2>
        <p className="max-w-[34rem] text-lead text-pretty">{join.lead}</p>
        <FacebookCta label={dict.cta.join} srHint={dict.ui.opensFacebook} />
      </div>
    </section>
  )
}
