import type { Locale } from "@/lib/i18n"

const dictionaries = {
  no: () => import("./dictionaries/no.json").then((module) => module.default),
  en: () => import("./dictionaries/en.json").then((module) => module.default),
}

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["no"]>>

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]()

// Text for the info pages (about, contact, privacy, terms), kept apart from the landing page
const pagesDictionaries = {
  no: () => import("./dictionaries/pages/no.json").then((module) => module.default),
  en: () => import("./dictionaries/pages/en.json").then((module) => module.default),
}

export type PagesDictionary = Awaited<ReturnType<(typeof pagesDictionaries)["no"]>>

export const getPagesDictionary = async (locale: Locale): Promise<PagesDictionary> =>
  pagesDictionaries[locale]()
