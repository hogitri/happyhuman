# Project Overview

## What it is
Happy Human is a **lifestyle brand for health and happiness** with three parts:
1. **Fitness services (launching first):** free group classes and paid personal training with a holistic wellness approach, growing out of [[Bootcamp i Blomvåg]].
2. **A clothing line (second):** casual wear and athleisure with minimal print or logo, sold online only through Shopify.
3. **A blog:** mental health, nutrition, workout and outdoor tips, and success stories.

It's for people aged 18–44 who care about mental and physical health and want to be true to themselves and spread happiness. Full details in [[Brand Strategy]].

- The founders combine training and health expertise ([[People/Kaja Haugen|Kaja]]) with startup and growth experience ([[People/Hoang Minh Trinh|Hoang]]).
- The product will be in Norwegian bokmål first, with English as secondary. See [[Decisions/2026-10-26 Norwegian bokmål as primary language]].

## Company
**HAPPY HUMAN AS** (aksjeselskap), org.nr. 933 037 495, Øygarden. Founded 2024-01-31. Registered business: "Undervisning innen sport og idrett" (teaching sport and recreation). Kaja Haugen is daglig leder and a board member; Hoang Trinh is chair of the board. Checked in Brønnøysundregistrene on 2026-10-26.

## Founders
- [[People/Kaja Haugen|Kaja Haugen]]: co-founder. Trainer and sport scientist (NIH), County Coordinator at Antidoping Norge, runs [[Bootcamp i Blomvåg]].
- [[People/Hoang Minh Trinh|Hoang "Hogi" Minh Trinh]]: co-founder. Serial founder (Firi), Head of Ventures at Agens, Founding Partner at Atlas Accelerator, PT qualification from NIH.

## Background
Context collected so far: [[Bootcamp i Blomvåg]], a free community bootcamp in Blomvåg run by trainer Kaja Haugen and organised through a Facebook group. See that note for the offer, the trainer, the tone, and pain points in the current setup.

## Goals
- **Vision:** make the world a better place with more happy, true people who are kind to each other.
- **Build a community,** "the Happy Human movement", through Instagram, influencers, ambassadors, meet-ups and group workouts.
- **Launch an online clothing store** with high-quality, sustainable, well-designed casual wear and athleisure ([[Decisions/2026-10-26 Online store only]]).
- **Offer group classes and personal training** built on holistic wellness, starting from [[Bootcamp i Blomvåg]].
- **Publish content** on mental health, nutrition, training and the outdoors.

## Status
Project just started. The Next.js app in `web/` is set up with the full shadcn/ui component library; and a landing page for the bootcamp ([[Features/Landing Page]]). Early (2025) logo and merch mockups exist; the logo is now decided: the H monogram ([[Decisions/2026-10-26 H monogram as the logo]]). See [[Features/Brand Identity]].

**Next up:** training first ([[Decisions/2026-10-26 Launch training first, clothing second]]), with a group class schedule and sign-up (free) and PT info and booking (paid). The clothing store comes later, on Shopify.

## Tech stack
- Next.js 16 + React 19 + TypeScript (`web/`)
- Tailwind CSS v4
- shadcn/ui (`base-nova` preset, Base UI) — see [[Features/UI Components]]
