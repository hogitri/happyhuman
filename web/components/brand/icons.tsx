import { createElement } from "react"
import {
  BackpackIcon,
  CalendarDaysIcon,
  HeartIcon,
  MapPinIcon,
  SmileIcon,
  TrophyIcon,
  UsersIcon,
  WalletIcon,
  type LucideIcon,
} from "lucide-react"

// Icon names used in the dictionaries (JSON can't hold components)
export const brandIcons = {
  trophy: TrophyIcon,
  smile: SmileIcon,
  users: UsersIcon,
  heart: HeartIcon,
  map: MapPinIcon,
  calendar: CalendarDaysIcon,
  wallet: WalletIcon,
  backpack: BackpackIcon,
} satisfies Record<string, LucideIcon>

export type BrandIconName = keyof typeof brandIcons

// Renders an icon by its dictionary name, falling back to a smile
export function BrandIcon({
  name,
  ...props
}: { name: string } & React.ComponentProps<LucideIcon>) {
  return createElement(brandIcons[name as BrandIconName] ?? SmileIcon, props)
}
