import { cn } from "@/lib/utils"

// The H monogram: two bars joined by two arches that meet in the middle.
// Redrawn from the punch card; swap for the designer's SVG when it arrives.
export function LogoMark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 176 152"
      fill="currentColor"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      <path
        fillRule="evenodd"
        d="M0 0H176V152H0Z M24 0H152V5A64.4 64.4 0 0 1 24 5Z M24 152V147A64.4 64.4 0 0 1 152 147V152Z M24 64L46 76L24 88Z M152 64L130 76L152 88Z"
      />
    </svg>
  )
}

const sizes = {
  sm: { mark: "h-7", text: "text-[0.95rem]/[0.95]" },
  lg: { mark: "h-14 md:h-16", text: "text-2xl/[0.95] md:text-3xl/[0.95]" },
  // Footer close: the mark built large across the page
  xl: { mark: "h-[24vw] lg:h-[min(21vw,20rem)]", text: "text-[13vw]/[0.95] lg:text-[min(11vw,10.5rem)]/[0.95]" },
}

// Monogram + two-line "Happy Human" wordmark, always one colour (currentColor)
export function Logo({
  size = "sm",
  className,
}: {
  size?: keyof typeof sizes
  className?: string
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", size === "xl" && "gap-[3vw]", className)}>
      <LogoMark className={cn("w-auto shrink-0", sizes[size].mark)} />
      <span className={cn("flex flex-col font-sans leading-[0.95] font-medium tracking-tight", sizes[size].text)}>
        <span>Happy</span>
        <span>Human</span>
      </span>
    </span>
  )
}
