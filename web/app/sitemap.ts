import type { MetadataRoute } from "next"

import { locales } from "@/lib/i18n"
import { infoPages, SITE_URL } from "@/lib/site"

const paths = ["", ...Object.values(infoPages).map((slug) => `/${slug}`)]

// Every page in every locale, with the other language versions as alternates
export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      changeFrequency: path === "" ? "weekly" : "yearly",
      priority: path === "" ? 1 : 0.5,
      alternates: {
        languages: {
          nb: `${SITE_URL}/no${path}`,
          en: `${SITE_URL}/en${path}`,
        },
      },
    }))
  )
}
