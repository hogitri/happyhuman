export const FACEBOOK_GROUP_URL = "https://www.facebook.com/groups/1110397380364877"

export const SITE_URL = "https://www.happyhuman.no"

export const CONTACT_EMAIL = "post@happyhuman.no"

// From Brønnøysundregistrene (checked 2026-10-26)
export const COMPANY = {
  name: "HAPPY HUMAN AS",
  orgNr: "933 037 495",
  address: "Dammane 19, 5337 Rong",
} as const

// Info pages: the same slug in every locale, so the language toggle keeps the page
export const infoPages = {
  about: "om-oss",
  contact: "kontakt",
  privacy: "personvern",
  terms: "vilkar",
  sales: "salgsvilkar",
} as const

export type InfoPage = keyof typeof infoPages

// Date the legal texts (privacy, terms, terms of sale) were last changed
export const LEGAL_UPDATED = "2026-10-26"
