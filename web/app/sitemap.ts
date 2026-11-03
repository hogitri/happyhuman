import type { MetadataRoute } from "next"

import { locales } from "@/lib/i18n"
import { infoPages, SITE_URL } from "@/lib/site"

const paths = ["", "/trening", ...Object.values(infoPages).map((slug) => `/${slug}`)]

// Every page (the site is Norwegian only)
export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      changeFrequency: path === "" || path === "/trening" ? "weekly" : "yearly",
      priority: path === "" ? 1 : 0.5,
    }))
  )
}
