import { ArrowRightIcon, ExternalLinkIcon } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { FACEBOOK_GROUP_URL } from "@/lib/site"
import { cn } from "@/lib/utils"

// Brand-size pill on top of shadcn's button styles
const ctaBase = "h-12 gap-2 rounded-full px-6 text-base font-semibold"

const tones = {
  // Sun (yellow) button: the default call to action
  primary: "",
  // Fjord button: for use on sun sections, where a sun button would disappear
  inverse: "bg-fjord text-mist hover:bg-fjord/85",
}

export function CtaLink({
  tone = "primary",
  variant = "default",
  className,
  children,
  ...props
}: React.ComponentProps<"a"> & {
  tone?: keyof typeof tones
  variant?: "default" | "outline" | "ghost"
}) {
  return (
    <a
      className={cn(buttonVariants({ variant }), ctaBase, tones[tone], className)}
      {...props}
    >
      {children}
    </a>
  )
}

export function FacebookCta({
  label,
  srHint,
  tone = "primary",
  variant = "default",
  className,
}: {
  label: string
  /** Screen-reader note that the link leaves the site, e.g. "opens on Facebook" */
  srHint: string
  tone?: keyof typeof tones
  /** "outline" for repeat CTAs (e.g. the header), so only one sun button shows per view */
  variant?: "default" | "outline"
  className?: string
}) {
  return (
    <CtaLink
      href={FACEBOOK_GROUP_URL}
      target="_blank"
      rel="noopener noreferrer"
      tone={tone}
      variant={variant}
      className={className}
    >
      {label}
      <ExternalLinkIcon aria-hidden />
      <span className="sr-only">({srHint})</span>
    </CtaLink>
  )
}

export function SecondaryCta({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <CtaLink href={href} variant="outline" className={className}>
      {children}
      <ArrowRightIcon aria-hidden />
    </CtaLink>
  )
}
