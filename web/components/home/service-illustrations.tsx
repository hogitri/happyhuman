// Flat illustrations of the two services, in the palette of the place illustrations:
// sea glass sky, a sun-yellow sun, deep teal hills, seaglass ground, people in deep sea.
// People are drawn from joints (head, neck, hip, elbows, hands, knees, feet) with thick round strokes.

type Point = readonly [number, number]
type Pose = {
  head: Point
  neck: Point
  hip: Point
  elbows: readonly [Point, Point]
  hands: readonly [Point, Point]
  knees: readonly [Point, Point]
  feet: readonly [Point, Point]
}

const line = (...points: Point[]) => `M${points.map(([x, y]) => `${x} ${y}`).join("L")}`

function Person({ pose, scale = 1 }: { pose: Pose; scale?: number }) {
  const { head, neck, hip, elbows, hands, knees, feet } = pose
  return (
    <g className="stroke-deep" strokeWidth={15 * scale} strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d={line(neck, hip)} />
      <path d={line(neck, elbows[0], hands[0])} />
      <path d={line(neck, elbows[1], hands[1])} />
      <path d={line(hip, knees[0], feet[0])} />
      <path d={line(hip, knees[1], feet[1])} />
      <circle cx={head[0]} cy={head[1]} r={13 * scale} className="fill-deep" stroke="none" />
    </g>
  )
}

function Coast({ sun }: { sun: Point }) {
  return (
    <>
      <rect width="800" height="500" className="fill-glass" />
      <circle cx={sun[0]} cy={sun[1]} r="44" className="fill-buoy" />
      <path d="M0 300 C90 250 170 262 250 288 C330 312 400 250 500 262 C590 272 680 236 800 270 V340 H0Z" className="fill-tide" />
      <rect y="320" width="800" height="24" className="fill-foam" />
      <path d="M0 340 C200 330 600 330 800 340 V500 H0Z" className="fill-seaglass" />
    </>
  )
}

const Kettlebell = ({ at }: { at: Point }) => (
  <g>
    <path d={`M${at[0] - 9} ${at[1] - 10}a9 9 0 0 1 18 0`} className="fill-none stroke-buoy" strokeWidth="6" />
    <circle cx={at[0]} cy={at[1] + 4} r="14" className="fill-buoy" />
  </g>
)

const Cone = ({ x }: { x: number }) => <path d={`M${x - 12} 444 L${x} 418 L${x + 12} 444Z`} className="fill-buoy" />

// Bootcamp: a group at the stations by the sea, big and small, each on their own level
export function BootcampIllustration({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 800 500" role="img" aria-label={label} className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <Coast sun={[640, 120]} />
      <Cone x={205} />
      <Cone x={345} />
      <Cone x={565} />
      {/* Squat */}
      <g>
        <Person pose={{ head: [128, 332], neck: [126, 352], hip: [98, 402], elbows: [[152, 362], [156, 368]], hands: [[178, 360], [182, 366]], knees: [[140, 404], [150, 400]], feet: [[136, 442], [150, 442]] }} />
      </g>
      {/* Jumping jack */}
      <g>
      <Person pose={{ head: [272, 288], neck: [272, 310], hip: [272, 376], elbows: [[246, 284], [298, 284]], hands: [[230, 258], [314, 258]], knees: [[257, 410], [287, 410]], feet: [[244, 442], [300, 442]] }} />
      </g>
      {/* Plank */}
      <Person pose={{ head: [402, 398], neck: [418, 408], hip: [482, 420], elbows: [[424, 440], [432, 440]], hands: [[446, 440], [454, 440]], knees: [[512, 428], [516, 430]], feet: [[540, 440], [544, 440]] }} />
      {/* Kettlebell swing */}
      <g>
      <Person pose={{ head: [628, 320], neck: [628, 340], hip: [610, 394], elbows: [[650, 362], [652, 364]], hands: [[672, 374], [674, 376]], knees: [[628, 414], [640, 414]], feet: [[620, 442], [648, 442]] }} />
      <Kettlebell at={[684, 388]} />
      </g>
      {/* A kid, jumping along */}
      <g>
      <Person scale={0.62} pose={{ head: [738, 368], neck: [738, 382], hip: [738, 414], elbows: [[726, 368], [750, 368]], hands: [[718, 352], [758, 352]], knees: [[732, 428], [744, 428]], feet: [[728, 442], [748, 442]] }} />
      </g>
    </svg>
  )
}

const Dumbbell = ({ at }: { at: Point }) => (
  <g className="fill-deep">
    <rect x={at[0] - 16} y={at[1] - 3} width="32" height="6" rx="3" />
    <rect x={at[0] - 22} y={at[1] - 9} width="9" height="18" rx="3" />
    <rect x={at[0] + 13} y={at[1] - 9} width="9" height="18" rx="3" />
  </g>
)

// Personal training, indoors in the home gym: one person squats in the rack, seen from the front,
// while the trainer stands beside them and coaches; a bench and dumbbells along the wall, the sun in the window
export function PersonalTrainingIllustration({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 800 500" role="img" aria-label={label} className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <clipPath id="pt-window">
          <rect x="70" y="80" width="150" height="190" rx="10" />
        </clipPath>
      </defs>
      {/* Wall, floor and the window */}
      <rect width="800" height="500" className="fill-glass" />
      <rect y="432" width="800" height="68" className="fill-seaglass" />
      <g clipPath="url(#pt-window)">
        <rect x="70" y="80" width="150" height="190" className="fill-foam" />
        <circle cx="160" cy="150" r="36" className="fill-buoy" />
        <path d="M70 230 C110 210 160 222 220 206 V270 H70Z" className="fill-tide" />
      </g>
      <path d="M145 80V270M70 175H220" className="stroke-glass" strokeWidth="8" />
      <rect x="70" y="80" width="150" height="190" rx="10" className="fill-none stroke-tide" strokeWidth="8" />

      {/* Squat rack */}
      <g className="fill-tide">
        <rect x="292" y="130" width="14" height="302" rx="3" />
        <rect x="454" y="130" width="14" height="302" rx="3" />
        <rect x="286" y="126" width="188" height="12" rx="4" />
        <rect x="276" y="428" width="208" height="10" rx="4" />
      </g>

      <g>
      {/* The client, seen straight from the front in a deep, upright back squat: chest up, bar on
          the upper back, hips down between the knees, knees pushed out over the toes, feet flat */}
      <Person pose={{ head: [380, 258], neck: [380, 282], hip: [380, 352], elbows: [[340, 314], [420, 314]], hands: [[330, 290], [430, 290]], knees: [[334, 376], [426, 376]], feet: [[348, 432], [412, 432]] }} />
      <path d="M348 432l-14 4M412 432l14 4" className="stroke-deep" strokeWidth="12" strokeLinecap="round" />
      <path d="M262 288H498" className="stroke-deep" strokeWidth="8" strokeLinecap="round" />
      <rect x="268" y="256" width="18" height="64" rx="4" className="fill-buoy" />
      <rect x="474" y="256" width="18" height="64" rx="4" className="fill-buoy" />
      </g>

      {/* The trainer, beside the rack, coaching */}
      <Person pose={{ head: [540, 276], neck: [540, 298], hip: [540, 368], elbows: [[514, 318], [560, 334]], hands: [[490, 312], [566, 356]], knees: [[532, 400], [548, 400]], feet: [[526, 432], [554, 432]] }} />

      {/* Bench and dumbbells along the wall */}
      <rect x="600" y="380" width="160" height="16" rx="6" className="fill-tide" />
      <g className="fill-deep">
        <rect x="616" y="396" width="10" height="36" rx="3" />
        <rect x="734" y="396" width="10" height="36" rx="3" />
      </g>
      <Dumbbell at={[650, 448]} />
      <Dumbbell at={[720, 448]} />
    </svg>
  )
}
