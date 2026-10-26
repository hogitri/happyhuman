export const locales = ["no", "en"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "no"

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value)

// Value for <html lang>: Norwegian Bokmål is "nb"
export const htmlLang: Record<Locale, string> = { no: "nb", en: "en" }

export const localeLabels: Record<Locale, string> = { no: "NO", en: "EN" }
