import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CheckIcon, InfoIcon, XIcon } from "lucide-react"

import { FacebookCta, SecondaryCta } from "@/components/brand/cta-button"
import { Logo, LogoMark } from "@/components/brand/logo"
import { Section } from "@/components/brand/section"
import { SectionHeading } from "@/components/brand/section-heading"
import { ThemeToggle } from "@/components/brand/theme-toggle"
import { ValueCard } from "@/components/brand/value-card"
import { SunArch, Visual } from "@/components/brand/visual"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { hasLocale } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { getDictionary } from "../dictionaries"

export const metadata: Metadata = {
  title: "Style guide",
  robots: { index: false, follow: false },
}

// Core brand colours. Values mirror app/globals.css ("sea and buoy", 2026-11-03).
const brandColors = [
  { name: "Foam", token: "--foam", className: "bg-foam", hex: "#F2F5F3", dark: "#0B2026 (background)", role: "Page ground", text: "text-deep" },
  { name: "Sea glass", token: "--glass", className: "bg-glass", hex: "#D3E6E0", dark: "#123039 (secondary)", role: "Quiet bands and cards", text: "text-deep" },
  { name: "Deep sea", token: "--deep", className: "bg-deep", hex: "#0F2B33", dark: "#F2F5F3 (foreground)", role: "Text; deep fields (hero, footer)", text: "text-foam" },
  { name: "Sun", token: "--buoy", className: "bg-buoy", hex: "#F3D88A", dark: "#F3D88A", role: "The one main action; the closing panel; illustration suns", text: "text-deep" },
  { name: "Seaglass", token: "--seaglass", className: "bg-seaglass", hex: "#9FD3C7", dark: "#9FD3C7", role: "Small calm accents, selection", text: "text-deep" },
]

// Semantic shadcn tokens. Contrast = foreground on background, light / dark.
const semanticTokens = [
  { token: "background / foreground", bg: "bg-background", fg: "text-foreground", light: "#F2F5F3 / #0F2B33", dark: "#0B2026 / #F2F5F3", contrast: ["13.5", "15.3"] },
  { token: "secondary / secondary-foreground", bg: "bg-secondary", fg: "text-secondary-foreground", light: "#D3E6E0 / #0F2B33", dark: "#123039 / #F2F5F3", contrast: ["11.4", "13.0"] },
  { token: "primary / primary-foreground", bg: "bg-primary", fg: "text-primary-foreground", light: "#F3D88A / #0F2B33", dark: "#F3D88A / #0F2B33", contrast: ["10.6", "10.6"] },
  { token: "muted / muted-foreground", bg: "bg-muted", fg: "text-muted-foreground", light: "#D3E6E0 / #4B6168", dark: "#123039 / #A9C0C2", contrast: ["5.0", "7.8"] },
  { token: "hh-deep field / text, muted text", bg: "hh-deep", fg: "", light: "#0F2B33 / #F2F5F3, #A9C0C2", dark: "same", contrast: ["13.5", "7.8"] },
  { token: "background / link", bg: "bg-background", fg: "text-link", light: "#F2F5F3 / #0F2B33", dark: "#0B2026 / #F2F5F3", contrast: ["13.5", "15.3"] },
]

const rules = {
  do: [
    "Use the sun yellow only for the one main action on screen (join the group), the closing panel and the illustration suns.",
    "Always put deep-sea text on the sun yellow (10.6:1).",
    "Set everything in Albert Sans; headings semibold with tight tracking.",
    "Use pill buttons and large rounded media; keep photographs still.",
    "Let deep, foam and sea-glass fields carry the rhythm; less is more.",
    "Underline links: they share the text colour.",
  ],
  dont: [
    "Never put white or foam text on the sun yellow.",
    "No eyebrow labels, hairlines, outlined boxes, gradients or shadows.",
    "No crossfading or changing pictures.",
    "Don't hard-code hex values in components – use the tokens/utilities.",
  ],
}

export default async function StyleguidePage({ params }: PageProps<"/[lang]/styleguide">) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Logo />
            <Badge variant="outline" className="hidden sm:inline-flex">Style guide</Badge>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle labels={dict.ui.theme} />
          </div>
        </div>
      </header>

      <main>
        <Section>
          <SectionHeading
            as="h1"
            eyebrow="Happy Human"
            title="Colour guide & components"
            lead="The single source of truth for colours, type and components. Every page is built from these tokens and the brand components below. Switch theme in the header to check dark mode."
          />
        </Section>

        {/* 1. Palette */}
        <Section tone="muted" id="palette">
          <SectionHeading eyebrow="1 · Palette" title="Brand colours" lead="The calm of the coast (foam, sea glass, deep sea) with a warm sun yellow for the one main action." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {brandColors.map((c) => (
              <div key={c.name} className="overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/10">
                <div className={cn("flex h-28 items-end p-3 font-heading text-lg font-bold", c.className, c.text)}>
                  {c.name}
                </div>
                <dl className="grid gap-1 p-3 text-sm">
                  <div className="flex justify-between gap-2"><dt className="text-muted-foreground">Light</dt><dd className="font-mono">{c.hex}</dd></div>
                  <div className="flex justify-between gap-2"><dt className="text-muted-foreground">Dark</dt><dd className="font-mono">{c.dark}</dd></div>
                  <div className="flex justify-between gap-2"><dt className="text-muted-foreground">Class</dt><dd className="font-mono">{c.className}</dd></div>
                  <dd className="pt-1 text-xs text-muted-foreground">{c.role}</dd>
                </dl>
              </div>
            ))}
          </div>

          <h3 className="mt-14 text-2xl font-bold">Semantic tokens</h3>
          <p className="mt-2 text-muted-foreground">
            shadcn component tokens mapped to the palette. Ratios are WCAG contrast (light / dark); body text needs ≥ 4.5.
          </p>
          <div className="mt-6 grid gap-3">
            {semanticTokens.map((t) => (
              <div key={t.token} className="grid items-center gap-3 rounded-2xl bg-card p-3 ring-1 ring-foreground/10 sm:grid-cols-[10rem_1fr_auto]">
                <div className={cn("flex h-14 items-center justify-center rounded-xl text-sm font-semibold ring-1 ring-foreground/10", t.bg, t.fg)}>
                  Aa Tekst
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-sm font-medium">{t.token}</p>
                  <p className="font-mono text-xs text-muted-foreground">light {t.light} · dark {t.dark}</p>
                </div>
                <div className="flex gap-2">
                  {t.contrast.map((ratio, i) => (
                    <Badge key={i} variant={Number(ratio) >= 4.5 ? "secondary" : "destructive"} className="font-mono">
                      {i === 0 ? "☀" : "☾"} {ratio}:1
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 2. Rules */}
        <Section id="rules">
          <SectionHeading eyebrow="2 · Usage" title="Do's and don'ts" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card className="p-2">
              <CardHeader><CardTitle className="text-xl font-bold">Do</CardTitle></CardHeader>
              <CardContent>
                <ul className="grid gap-3">
                  {rules.do.map((r) => (
                    <li key={r} className="flex gap-3 text-base">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-sun text-fjord"><CheckIcon className="size-4" aria-hidden /></span>
                      {r}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="p-2">
              <CardHeader><CardTitle className="text-xl font-bold">Don&apos;t</CardTitle></CardHeader>
              <CardContent>
                <ul className="grid gap-3">
                  {rules.dont.map((r) => (
                    <li key={r} className="flex gap-3 text-base">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-destructive/15 text-destructive"><XIcon className="size-4" aria-hidden /></span>
                      {r}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* 3. Typography */}
        <Section tone="muted" id="type">
          <SectionHeading eyebrow="3 · Typography" title="Type scale" lead="Two faces: Albert Sans at regular weight for headings and body, Source Serif 4 light for leads, the letter and sign-offs. Tracking -0.02em on headings." />
          <div className="mt-10 grid gap-6 bg-card p-6 ring-1 ring-foreground/10 md:p-10">
            <p className="text-xs font-mono text-muted-foreground">h1 · text-[2.75rem] sm:text-6xl lg:text-7xl font-normal tracking-[-0.025em]</p>
            <p className="text-[2.75rem] leading-[1.04] font-normal tracking-[-0.025em] sm:text-6xl lg:text-7xl">Trening og livsstil for glade mennesker.</p>
            <Separator />
            <p className="text-xs font-mono text-muted-foreground">h2 · text-4xl md:text-6xl font-normal tracking-[-0.02em]</p>
            <p className="text-4xl font-normal tracking-[-0.02em] md:text-6xl">Kaja og Hoang</p>
            <Separator />
            <p className="text-xs font-mono text-muted-foreground">h3 · text-2xl–4xl font-normal</p>
            <p className="text-3xl font-normal tracking-[-0.02em]">Bootcamp i Blomvåg</p>
            <Separator />
            <p className="text-xs font-mono text-muted-foreground">lead / letter · font-serif text-xl md:text-2xl font-light</p>
            <p className="font-serif text-xl font-light md:text-2xl">Vi tror kropp og hode henger sammen.</p>
            <Separator />
            <p className="text-xs font-mono text-muted-foreground">body · text-base</p>
            <p className="max-w-prose text-base">Funksjonell trening med egen kroppsvekt og enkelt utstyr, med en lettere og en tøffere variant av hver øvelse.</p>
            <Separator />
            <p className="text-xs font-mono text-muted-foreground">button · text-base font-medium, sentence case</p>
            <p className="text-base font-medium">Bli med på en gratis time</p>
            <Separator />
            <p className="text-xs font-mono text-muted-foreground">link · text-link, always underlined</p>
            <p><a href="#type" className="text-link underline underline-offset-4">Les om timene</a></p>
          </div>
        </Section>

        {/* 4. shadcn components in brand colours */}
        <Section id="components">
          <SectionHeading eyebrow="4 · Components" title="shadcn/ui, on brand" lead="The installed components pick up the palette from the theme tokens automatically." />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card className="p-2">
              <CardHeader><CardTitle className="text-lg font-bold">Buttons</CardTitle></CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Button size="xs">xs</Button>
                  <Button size="sm">sm</Button>
                  <Button>default</Button>
                  <Button size="lg">lg</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="p-2">
              <CardHeader><CardTitle className="text-lg font-bold">Badges & avatar</CardTitle></CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="accent">Accent</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
                <div className="flex items-center gap-3">
                  <Avatar size="lg"><AvatarFallback className="bg-sun font-bold text-fjord">KH</AvatarFallback></Avatar>
                  <Avatar><AvatarFallback className="bg-fjord font-bold text-mist">HH</AvatarFallback></Avatar>
                  <Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
                </div>
              </CardContent>
            </Card>

            <Card className="p-2">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Card</CardTitle>
                <CardDescription>With header, content and footer.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-base">Neste økt: torsdag kl. 17.30 i gymsalen.</p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button>Jeg kommer!</Button>
                <Button variant="outline">Kanskje</Button>
              </CardFooter>
            </Card>

            <Card className="p-2">
              <CardHeader><CardTitle className="text-lg font-bold">Form fields</CardTitle></CardHeader>
              <CardContent className="grid gap-5">
                <Field>
                  <FieldLabel htmlFor="sg-email">E-post</FieldLabel>
                  <Input id="sg-email" type="email" placeholder="deg@eksempel.no" />
                  <FieldDescription>Helper text uses muted-foreground.</FieldDescription>
                </Field>
                <Field orientation="horizontal">
                  <Switch id="sg-switch" defaultChecked />
                  <FieldLabel htmlFor="sg-switch">Varsle meg om nye økter</FieldLabel>
                </Field>
              </CardContent>
            </Card>

            <Card className="p-2">
              <CardHeader><CardTitle className="text-lg font-bold">Tabs & tooltip</CardTitle></CardHeader>
              <CardContent className="grid gap-4">
                <Tabs defaultValue="circuit">
                  <TabsList>
                    <TabsTrigger value="circuit">Sirkeltrening</TabsTrigger>
                    <TabsTrigger value="split">Todelt time</TabsTrigger>
                  </TabsList>
                  <TabsContent value="circuit" className="pt-2 text-base">8–10 stasjoner og en morsom finisher.</TabsContent>
                  <TabsContent value="split" className="pt-2 text-base">30 min puls + 30 min mobilitet.</TabsContent>
                </Tabs>
                <Tooltip>
                  <TooltipTrigger render={<Button variant="outline" className="w-fit" />}>Hover me</TooltipTrigger>
                  <TooltipContent>Tooltips use the foreground token.</TooltipContent>
                </Tooltip>
              </CardContent>
            </Card>

            <Card className="p-2">
              <CardHeader><CardTitle className="text-lg font-bold">Accordion & alert</CardTitle></CardHeader>
              <CardContent className="grid gap-4">
                <Accordion>
                  <AccordionItem value="a">
                    <AccordionTrigger>Må jeg være i god form?</AccordionTrigger>
                    <AccordionContent>Nei! Alle øvelser har lettere og tøffere varianter.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="b">
                    <AccordionTrigger>Hva koster det?</AccordionTrigger>
                    <AccordionContent>Ingenting. Det er gratis.</AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Alert>
                  <InfoIcon />
                  <AlertTitle>Økta flyttes ut</AlertTitle>
                  <AlertDescription>Når været tillater det, trener vi ute.</AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* 5. Brand components */}
        <Section tone="muted" id="brand">
          <SectionHeading eyebrow="5 · Brand components" title="Building blocks" lead="components/brand/* – use these for every page instead of styling from scratch." />

          <div className="mt-10 grid gap-10">
            <div className="grid gap-3">
              <p className="font-mono text-sm text-muted-foreground">&lt;Logo /&gt; sm · lg · &lt;LogoMark /&gt; – always one colour</p>
              <div className="flex flex-wrap items-center gap-8">
                <Logo />
                <Logo size="lg" />
                <span className="text-sm text-muted-foreground">size=&quot;xl&quot; – footer, built large across the page</span>
                <LogoMark className="h-12 w-auto" />
                <span className="flex size-16 items-center justify-center rounded-2xl bg-fjord text-mist"><LogoMark className="h-8 w-auto" /></span>
                <span className="flex size-16 items-center justify-center rounded-2xl bg-sun text-fjord"><LogoMark className="h-8 w-auto" /></span>
              </div>
            </div>

            <div className="grid gap-3">
              <p className="font-mono text-sm text-muted-foreground">&lt;FacebookCta /&gt; · &lt;SecondaryCta /&gt;</p>
              <div className="flex flex-wrap gap-3">
                <FacebookCta label={dict.cta.join} srHint={dict.ui.opensFacebook} />
                <SecondaryCta href="#brand">{dict.cta.how}</SecondaryCta>
              </div>
            </div>

            <div className="grid gap-3">
              <p className="font-mono text-sm text-muted-foreground">&lt;ValueCard /&gt; · iconTone sun | fjord</p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {dict.why.items.map((item, i) => (
                  <ValueCard key={item.title} {...item} iconTone={i % 2 ? "fjord" : "sun"} />
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              <p className="font-mono text-sm text-muted-foreground">&lt;Visual scene=&quot;sunrise&quot; | &quot;sun&quot; | &quot;mist&quot; /&gt; – illustrations until photos exist; pass src for a photo</p>
              <div className="grid gap-4 sm:grid-cols-3">
                <Visual scene="sunrise" alt={dict.hero.imageLabel} className="aspect-4/5" />
                <Visual scene="sun" alt={dict.hero.imageLabel} className="aspect-4/5" />
                <Visual scene="mist" alt="Mist" className="aspect-4/5 ring-1 ring-foreground/10" />
              </div>
            </div>

            <div className="grid gap-3">
              <p className="font-mono text-sm text-muted-foreground">&lt;Visual shape=&quot;arch&quot; src=&#123;[…]&#125; /&gt; – the motif as a photo mask; several srcs crossfade · &lt;SunArch /&gt; – the motif as bullet or band</p>
              <div className="grid items-end gap-4 sm:grid-cols-2">
                <Visual src={["/images/home/ill-blomvaag-tall.webp", "/images/home/ill-ulvsund-tall.webp"]} alt={dict.hero.imageAlt} shape="arch" sizes="33vw" className="aspect-4/5" />
                <div className="flex flex-col gap-4">
                  <SunArch className="aspect-2/1 w-12" />
                  <SunArch className="aspect-2/1 w-full" />
                </div>
              </div>
            </div>

            <div className="grid gap-3">
              <p className="font-mono text-sm text-muted-foreground">&lt;ThemeToggle /&gt;</p>
              <div className="flex items-center gap-3">
                <ThemeToggle labels={dict.ui.theme} />
              </div>
            </div>
          </div>
        </Section>

        <p className="px-4 py-6 font-mono text-sm text-muted-foreground sm:px-6">&lt;Section tone=&quot;fjord&quot; | &quot;sun&quot;&gt; ↓</p>
        <Section tone="fjord">
          <SectionHeading eyebrow="tone=fjord" title={dict.finalCta.title} lead={dict.finalCta.lead} />
          <div className="mt-8"><FacebookCta label={dict.cta.join} srHint={dict.ui.opensFacebook} /></div>
        </Section>
        <Section tone="sun">
          <SectionHeading eyebrow="tone=sun" title={dict.finalCta.title} lead={dict.finalCta.lead} />
          <div className="mt-8"><FacebookCta tone="inverse" label={dict.cta.join} srHint={dict.ui.opensFacebook} /></div>
        </Section>
      </main>
    </>
  )
}
