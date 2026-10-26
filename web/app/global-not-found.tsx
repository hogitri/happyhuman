import type { Metadata } from "next"
import Link from "next/link"

import "./globals.css"
import { Logo } from "@/components/brand/logo"
import { buttonVariants } from "@/components/ui/button"
import { fontVariables } from "@/lib/fonts"

export const metadata: Metadata = {
  title: "404 · Happy Human",
}

export default function GlobalNotFound() {
  return (
    <html lang="nb" className={`${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col items-center justify-center gap-6 px-4 text-center">
        <Logo size="lg" />
        <h1 className="text-3xl font-bold">Fant ikke siden · Page not found</h1>
        <Link href="/" className={buttonVariants({ size: "lg" })}>
          Til forsiden · Home
        </Link>
      </body>
    </html>
  )
}
