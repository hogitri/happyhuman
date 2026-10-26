"use client"

import { useSyncExternalStore } from "react"
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

const order = ["light", "dark", "system"] as const
const icons = { light: SunIcon, dark: MoonIcon, system: MonitorIcon }

const subscribe = () => () => {}

// Cycles light → dark → system. The theme is only known on the client.
export function ThemeToggle({
  labels,
}: {
  labels: { toggle: string; light: string; dark: string; system: string }
}) {
  const { theme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(subscribe, () => true, () => false)

  const current = mounted ? ((theme as (typeof order)[number]) ?? "system") : "system"
  const next = order[(order.indexOf(current) + 1) % order.length]
  const Icon = icons[current]

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant="ghost"
            size="icon-lg"
            className="rounded-full"
            aria-label={`${labels.toggle}: ${labels[current]}`}
            onClick={() => setTheme(next)}
          />
        }
      >
        <Icon aria-hidden />
      </TooltipTrigger>
      <TooltipContent>{`${labels.toggle} (${labels[current]})`}</TooltipContent>
    </Tooltip>
  )
}
