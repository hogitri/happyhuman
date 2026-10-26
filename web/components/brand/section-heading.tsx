import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "start",
  as: Heading = "h2",
  className,
}: {
  eyebrow?: string
  title: string
  lead?: string
  align?: "start" | "center"
  as?: "h1" | "h2"
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col items-start gap-5",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <Badge variant="accent" className="h-6 px-3 text-xs font-semibold uppercase tracking-wide">
          {eyebrow}
        </Badge>
      )}
      <Heading
        className={cn(
          "font-heading font-semibold tracking-tighter text-balance",
          Heading === "h1"
            ? "text-5xl leading-[0.98] sm:text-6xl md:text-8xl"
            : "text-4xl leading-[1.05] md:text-6xl"
        )}
      >
        {title}
      </Heading>
      {lead && (
        <p className="text-lg text-pretty text-muted-foreground md:text-xl">{lead}</p>
      )}
    </div>
  )
}
