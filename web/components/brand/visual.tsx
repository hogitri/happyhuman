import Image from "next/image"

import { cn } from "@/lib/utils"
import { LogoMark } from "./logo"

// Brand illustrations that stand in for photos. Pass `src` once real photos exist.
const scenes = {
  // Sun rising over the fjord, with the monogram as a small stamp
  sunrise: (
    <>
      <div className="absolute inset-0 bg-fjord dark:bg-card" />
      <div className="absolute top-[30%] left-1/2 aspect-square w-[min(70%,32rem)] -translate-x-1/2 rounded-full bg-sun" />
      <div className="absolute inset-x-0 bottom-0 h-[38%] bg-[color-mix(in_oklch,var(--fjord),black_22%)]" />
      <div className="absolute inset-x-[18%] bottom-[24%] h-1.5 rounded-full bg-sun/50" />
      <div className="absolute inset-x-[28%] bottom-[16%] h-1.5 rounded-full bg-sun/30" />
      <div className="absolute inset-x-[38%] bottom-[9%] h-1.5 rounded-full bg-sun/15" />
      <LogoMark className="absolute top-5 left-5 h-6 w-auto text-mist/80 md:top-8 md:left-8 md:h-8" />
    </>
  ),
  // Oversized monogram, cropped, on sun
  sun: (
    <>
      <div className="absolute inset-0 bg-sun" />
      <LogoMark className="absolute top-1/2 -right-[22%] h-[78%] w-auto -translate-y-1/2 text-fjord" />
    </>
  ),
  // Quiet monogram on mist
  mist: (
    <>
      <div className="absolute inset-0 bg-mist" />
      <LogoMark className="absolute -bottom-[12%] -left-[14%] h-[72%] w-auto text-fjord" />
      <div className="absolute top-[14%] right-[14%] aspect-square w-[22%] rounded-full bg-sun" />
    </>
  ),
}

export type VisualScene = keyof typeof scenes

export function Visual({
  scene = "sunrise",
  src,
  alt,
  priority,
  className,
}: {
  scene?: VisualScene
  src?: string
  /** Describes the photo; illustrations are decorative and hidden from screen readers */
  alt: string
  priority?: boolean
  className?: string
}) {
  return (
    <div className={cn("relative isolate overflow-hidden rounded-3xl", className)}>
      {src ? (
        <Image src={src} alt={alt} fill priority={priority} sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
      ) : (
        <div aria-hidden className="absolute inset-0">
          {scenes[scene]}
        </div>
      )}
    </div>
  )
}
