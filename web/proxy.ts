import { NextResponse, type NextRequest } from "next/server"

import { defaultLocale, hasLocale, type Locale } from "@/lib/i18n"

// Pick the first supported language from Accept-Language, in the browser's order
function getLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language") ?? ""
  for (const part of header.split(",")) {
    const tag = part.split(";")[0].trim().toLowerCase()
    if (/^(no|nb|nn)\b/.test(tag)) return "no"
    if (/^en\b/.test(tag)) return "en"
  }
  return defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (hasLocale(pathname.split("/")[1] ?? "")) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  // Skip Next internals and files with an extension (favicon, images, …)
  matcher: ["/((?!_next|api|.*\\..*).*)"],
}
