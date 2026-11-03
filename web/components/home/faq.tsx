import { PlusIcon } from "lucide-react"

import type { Dictionary } from "@/app/[lang]/dictionaries"

// Three short answers; native <details>, one open at a time, keyboard friendly without script
export function Faq({ dict }: { dict: Dictionary }) {
  const { faq } = dict.home

  return (
    <section aria-labelledby="faq-title" className="px-4 py-28 sm:px-8 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12">
        <h2 id="faq-title" data-reveal className="text-title font-semibold tracking-[-0.03em] lg:col-span-4">
          {faq.title}
        </h2>
        <div data-reveal className="flex flex-col gap-2 lg:col-span-8">
          {faq.items.map((item) => (
            <details key={item.q} name="faq" className="group rounded-2xl bg-card text-card-foreground">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-6 py-5 text-lead font-medium [&::-webkit-details-marker]:hidden">
                {item.q}
                <PlusIcon aria-hidden className="size-5 shrink-0 transition-transform duration-300 ease-out group-open:rotate-45" />
              </summary>
              <p className="px-6 pb-6 text-base text-pretty text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
