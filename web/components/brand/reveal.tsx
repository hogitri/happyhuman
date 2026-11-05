"use client"

import { useEffect } from "react"

// Section entrances: the parts of every [data-reveal] block rise in, staggered, the first time the
// block enters the screen. Content is only hidden once this has run, so without JavaScript or with
// reduced motion everything is simply shown.
export function Reveal() {
  // Pause looping motion (the hero photo drift) while the tab is hidden
  useEffect(() => {
    const sync = () => document.documentElement.toggleAttribute("data-tab-hidden", document.hidden)
    document.addEventListener("visibilitychange", sync)
    return () => document.removeEventListener("visibilitychange", sync)
  }, [])

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const root = document.documentElement
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add("is-revealed")
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    )

    root.classList.add("hh-reveal-ready")
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
