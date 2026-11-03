import { NextResponse, type NextRequest } from "next/server"

import { defaultLocale, hasLocale } from "@/lib/i18n"

// Norwegian only: every path without /no gets it, and old /en links move to the same page in Norwegian
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const [, first = "", ...rest] = pathname.split("/")
  if (hasLocale(first)) return

  const tail = first === "en" ? rest.join("/") : pathname.replace(/^\//, "")
  request.nextUrl.pathname = `/${defaultLocale}${tail ? `/${tail}` : ""}`
  return NextResponse.redirect(request.nextUrl, first === "en" ? 308 : 307)
}

export const config = {
  // Skip Next internals and files with an extension (favicon, images, …)
  matcher: ["/((?!_next|api|.*\\..*).*)"],
}
