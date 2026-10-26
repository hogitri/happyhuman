import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { BrandIcon } from "./icons"

const iconTones = {
  sun: "bg-sun text-fjord",
  fjord: "bg-fjord text-mist",
}

export function ValueCard({
  icon,
  title,
  text,
  iconTone = "sun",
  className,
}: {
  icon: string
  title: string
  text: string
  iconTone?: keyof typeof iconTones
  className?: string
}) {
  return (
    <Card className={cn("h-full gap-3 p-2 transition-transform hover:-translate-y-1", className)}>
      <CardHeader className="gap-4">
        <span
          className={cn(
            "flex size-12 items-center justify-center rounded-2xl",
            iconTones[iconTone]
          )}
        >
          <BrandIcon name={icon} aria-hidden className="size-6" />
        </span>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-base text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  )
}
