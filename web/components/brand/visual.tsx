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

// The brand motif: the rising-sun arch from the H monogram (round top, flat base on the horizon)
const shapes = {
  rounded: "rounded-3xl",
  arch: "rounded-t-full",
}

export type VisualShape = keyof typeof shapes

export function Visual({
  scene = "sunrise",
  src,
  alt,
  shape = "rounded",
  sizes = "(min-width: 1024px) 60vw, 100vw",
  priority,
  className,
  imageClassName,
}: {
  scene?: VisualScene
  /** One photo, or several of the same framing that slowly crossfade (the first one is described by `alt`) */
  src?: string | string[]
  /** Describes the photo; illustrations are decorative and hidden from screen readers */
  alt: string
  shape?: VisualShape
  sizes?: string
  priority?: boolean
  className?: string
  imageClassName?: string
}) {
  const sources = src ? (Array.isArray(src) ? src : [src]) : []

  return (
    <div className={cn("relative isolate overflow-hidden", shapes[shape], className)}>
      {sources.length > 0 ? (
        <div className={cn("absolute inset-0", sources.length > 1 && "hh-crossfade")}>
          {sources.map((source, i) => (
            <Image
              key={source}
              src={source}
              alt={i === 0 ? alt : ""}
              fill
              priority={priority && i === 0}
              sizes={sizes}
              className={cn("object-cover", imageClassName)}
            />
          ))}
        </div>
      ) : (
        <div aria-hidden className="absolute inset-0">
          {scenes[scene]}
        </div>
      )}
    </div>
  )
}

// A half sun sitting on the bottom edge of its box: the motif at text size (list bullets) or poster size
export function SunArch({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn("relative block overflow-hidden", className)}>
      <span className="hh-sun absolute inset-x-0 top-0 block aspect-square rounded-full bg-sun" />
    </span>
  )
}
