import type { MetadataRoute } from "next"

import { SITE_URL } from "@/lib/site"

export default function robots(): MetadataRoute.Robots {
  return {
    // The style guide is an internal tool, not content
    rules: { userAgent: "*", allow: "/", disallow: ["/no/styleguide"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
