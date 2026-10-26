import { cn } from "@/lib/utils"

// Background bands. "fjord" reuses the dark theme tokens so every component inside adapts.
const tones = {
  default: "bg-background text-foreground",
  muted: "bg-secondary text-secondary-foreground",
  fjord: "dark bg-background text-foreground",
  sun: "bg-sun text-fjord [--muted-foreground:var(--fjord)]",
}

export type SectionTone = keyof typeof tones

export function Section({
  tone = "default",
  className,
  children,
  ...props
}: React.ComponentProps<"section"> & { tone?: SectionTone }) {
  return (
    <section
      data-tone={tone}
      className={cn("scroll-mt-16 px-4 py-20 sm:px-6 md:py-32", tones[tone], className)}
      {...props}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}
