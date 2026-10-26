import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CheckIcon, InfoIcon, XIcon } from "lucide-react"

import { FacebookCta, SecondaryCta } from "@/components/brand/cta-button"
import { LanguageToggle } from "@/components/brand/language-toggle"
import { Logo, LogoMark } from "@/components/brand/logo"
import { Section } from "@/components/brand/section"
import { SectionHeading } from "@/components/brand/section-heading"
import { ThemeToggle } from "@/components/brand/theme-toggle"
import { ValueCard } from "@/components/brand/value-card"
import { Visual } from "@/components/brand/visual"
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

// Core brand colours. Values mirror app/globals.css.
const brandColors = [
  { name: "Fjord", token: "--fjord", className: "bg-fjord", hex: "#264653", dark: "#264653", role: "Text (light) · background (dark)", text: "text-mist" },
  { name: "Sun", token: "--sun", className: "bg-sun", hex: "#E9C46A", dark: "#E9C46A", role: "Actions and highlights: buttons, badges, icon tiles", text: "text-fjord" },
  { name: "Mist", token: "--mist", className: "bg-mist", hex: "#F4F8F8", dark: "#F4F8F8", role: "Background (light) · text (dark)", text: "text-fjord" },
  { name: "Link", token: "--link", className: "bg-link", hex: "#264653", dark: "#E9C46A", role: "Link text: fjord on light, sun on dark", text: "text-background" },
]

// Semantic shadcn tokens. Contrast = foreground on background, light / dark.
const semanticTokens = [
  { token: "background / foreground", bg: "bg-background", fg: "text-foreground", light: "#F4F8F8 / #264653", dark: "#264653 / #F4F8F8", contrast: ["9.4", "9.4"] },
  { token: "card / card-foreground", bg: "bg-card", fg: "text-card-foreground", light: "#FFFFFF / #264653", dark: "#2F5564 / #F4F8F8", contrast: ["10.1", "7.5"] },
  { token: "primary / primary-foreground", bg: "bg-primary", fg: "text-primary-foreground", light: "#E9C46A / #264653", dark: "#E9C46A / #264653", contrast: ["6.0", "6.0"] },
  { token: "secondary / secondary-foreground", bg: "bg-secondary", fg: "text-secondary-foreground", light: "#E3ECEE / #264653", dark: "#2F5564 / #F4F8F8", contrast: ["8.4", "7.5"] },
  { token: "muted / muted-foreground", bg: "bg-muted", fg: "text-muted-foreground", light: "#E3ECEE / #4F6B76", dark: "#2F5564 / #B9CED4", contrast: ["4.7", "4.9"] },
  { token: "accent / accent-foreground", bg: "bg-accent", fg: "text-accent-foreground", light: "#E9C46A / #264653", dark: "#E9C46A / #264653", contrast: ["6.0", "6.0"] },
  { token: "background / link", bg: "bg-background", fg: "text-link", light: "#F4F8F8 / #264653", dark: "#264653 / #E9C46A", contrast: ["9.4", "6.0"] },
]

const rules = {
  do: [
    "Use sun for the one main action on screen (join the group) and for small highlights.",
    "Always put fjord text on sun (6.0:1).",
    "Write text in fjord (light) or mist (dark) – the foreground token.",
    "Underline links: in light mode they share the text colour.",
    "Alternate section tones (default → muted → fjord → sun) for rhythm.",
  ],
  dont: [
    "Never put white or mist text on sun (1.7:1, fails WCAG).",
    "Never use sun for text on light backgrounds – it's a fill colour there.",
    "Don't put a sun button on a sun section – use the inverse (fjord) CTA.",
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
          <SectionHeading eyebrow="1 · Palette" title="Brand colours" lead="From the bootcamp punch card: fjord for calm and trust, sun for joy and action, mist for air." />
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
          <SectionHeading eyebrow="3 · Typography" title="Type scale" lead="One family: Geist. Headings are semibold with tight tracking (tracking-tighter); body is regular. Calm and minimal, like the wordmark." />
          <div className="mt-10 grid gap-6 rounded-3xl bg-card p-6 ring-1 ring-foreground/10 md:p-10">
            <p className="text-xs font-mono text-muted-foreground">h1 · text-5xl sm:text-6xl md:text-8xl semibold tracking-tighter</p>
            <p className="text-5xl leading-[0.98] font-semibold tracking-tighter sm:text-6xl md:text-8xl">Trening som gjør deg glad.</p>
            <Separator />
            <p className="text-xs font-mono text-muted-foreground">h2 · text-4xl md:text-6xl semibold tracking-tighter</p>
            <p className="text-4xl leading-[1.05] font-semibold tracking-tighter md:text-6xl">En leken, intensiv time</p>
            <Separator />
            <p className="text-xs font-mono text-muted-foreground">h3 · text-2xl semibold</p>
            <p className="text-2xl font-semibold tracking-tight">Klassisk sirkel</p>
            <Separator />
            <p className="text-xs font-mono text-muted-foreground">h4 · text-xl semibold</p>
            <p className="text-xl font-semibold">Mestring</p>
            <Separator />
            <p className="text-xs font-mono text-muted-foreground">lead · text-lg md:text-xl muted</p>
            <p className="text-lg text-muted-foreground md:text-xl">Ingen krav til form – bare lyst til å bevege deg.</p>
            <Separator />
            <p className="text-xs font-mono text-muted-foreground">body · text-base</p>
            <p className="max-w-prose text-base">Funksjonell trening med egen kroppsvekt og enkelt utstyr. Vi utfordrer komfortsonen med enkle, effektive øvelser.</p>
            <Separator />
            <p className="text-xs font-mono text-muted-foreground">small · text-sm muted</p>
            <p className="text-sm text-muted-foreground">Øktene varer ca. 60 minutter.</p>
            <Separator />
            <p className="text-xs font-mono text-muted-foreground">link · text-link</p>
            <p><a href="#type" className="font-medium text-link underline underline-offset-4">Les mer om øktene</a></p>
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
                <Visual scene="sun" alt={dict.sessions.imageLabel} className="aspect-4/5" />
                <Visual scene="mist" alt="Mist" className="aspect-4/5 ring-1 ring-foreground/10" />
              </div>
            </div>

            <div className="grid gap-3">
              <p className="font-mono text-sm text-muted-foreground">&lt;LanguageToggle /&gt; · &lt;ThemeToggle /&gt;</p>
              <div className="flex items-center gap-3">
                <LanguageToggle lang={lang} label={dict.ui.language} />
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
