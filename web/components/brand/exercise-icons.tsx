import { cn } from "@/lib/utils"

// Simple line pictograms for the bootcamp's stations, drawn to match lucide's 24 × 24 grid,
// 2px round strokes and currentColor. One person (a head and a few lines) per exercise.
function Pictogram({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("size-6", className)}
    >
      {children}
    </svg>
  )
}

type IconProps = { className?: string }

// Knebøy: hips back, thighs level, arms forward
export const SquatIcon = ({ className }: IconProps) => (
  <Pictogram className={className}>
    <circle cx="9" cy="4" r="2" />
    <path d="M9 7l1 6h6l-1 7" />
    <path d="M9.5 9H17" />
  </Pictogram>
)

// Armhevinger: a straight body on straight arms
export const PushUpIcon = ({ className }: IconProps) => (
  <Pictogram className={className}>
    <circle cx="4" cy="9" r="2" />
    <path d="M6 11l15 5" />
    <path d="M8 12v6" />
    <path d="M2 20h20" />
  </Pictogram>
)

// Utfall: one long step, both knees bent
export const LungeIcon = ({ className }: IconProps) => (
  <Pictogram className={className}>
    <circle cx="12" cy="3.5" r="2" />
    <path d="M12 6.5v6" />
    <path d="M12 12.5l5 2v5.5" />
    <path d="M12 12.5l-4 5-3 2.5" />
  </Pictogram>
)

// Planke: on the forearms, body in one line
export const PlankIcon = ({ className }: IconProps) => (
  <Pictogram className={className}>
    <circle cx="4" cy="11" r="2" />
    <path d="M6 13l15 3" />
    <path d="M7 14v4h4" />
    <path d="M2 20h20" />
  </Pictogram>
)

// Kettlebellsving: the kettlebell itself
export const KettlebellIcon = ({ className }: IconProps) => (
  <Pictogram className={className}>
    <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
    <circle cx="12" cy="15" r="6" />
  </Pictogram>
)

// Hoppetau: a person in the air, the rope swinging under the feet
export const JumpRopeIcon = ({ className }: IconProps) => (
  <Pictogram className={className}>
    <circle cx="12" cy="3.5" r="2" />
    <path d="M12 6.5v7l-2 4M12 13.5l2 4" />
    <path d="M12 9l-5 2M12 9l5 2" />
    <path d="M7 11c-2 9 12 9 10 0" />
  </Pictogram>
)

// Fjellklatrer: push-up position with one knee driven forward
export const ClimberIcon = ({ className }: IconProps) => (
  <Pictogram className={className}>
    <circle cx="4" cy="8" r="2" />
    <path d="M6 10l10 4 5 4" />
    <path d="M8 11v7" />
    <path d="M16 14l-4 1 1 4" />
  </Pictogram>
)

// Mobilitet: a long stretch, arms up and feet apart
export const MobilityIcon = ({ className }: IconProps) => (
  <Pictogram className={className}>
    <circle cx="12" cy="4" r="2" />
    <path d="M12 7v7" />
    <path d="M12 9l-5-4M12 9l5-4" />
    <path d="M12 14l-4 6M12 14l4 6" />
  </Pictogram>
)

// In the order of `stations.items` in the dictionary
export const stationIcons = [SquatIcon, PushUpIcon, LungeIcon, PlankIcon, KettlebellIcon, JumpRopeIcon, ClimberIcon, MobilityIcon]
