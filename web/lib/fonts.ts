import { Albert_Sans, Geist_Mono, Source_Serif_4 } from "next/font/google"

// Headings and body: a calm Scandinavian geometric sans, set at regular weight
export const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
})

// Leads, quotes and the founders' letter: a light serif with optical sizes
export const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  axes: ["opsz"],
})

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const fontVariables = `${albertSans.variable} ${sourceSerif.variable} ${geistMono.variable}`
