# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
People aged 18–44 in and around Øygarden and Bergen who care about both mental and physical health and want to be true to themselves. Many in the upper half of the range are parents. Beginners and very fit people alike: the first contact is usually through word of mouth, Instagram or the local Facebook group, and the visitor is deciding whether this is "for someone like me" before trying a free class.

## Product Purpose
Happy Human is a lifestyle brand for health and happiness, run by Happy Human AS (Øygarden) and its two founders. It exists to create more happy, true people who are kind to each other ("the Happy Human movement"). Three parts, launched in this order:
1. **Training (now):** free group classes, starting from Bootcamp i Blomvåg, and paid personal training.
2. **Clothing (later):** casual wear and athleisure with minimal print or logo, sold online only on Shopify.
3. **Blog (later):** mental health, nutrition, workout and outdoor tips, and success stories.

Success for the website: a first-time visitor understands the movement and its founders, believes there is room for them, and joins a free class.

## Positioning
A genuine, local, founder-led movement where body and mind are treated as one. Run by a sport scientist who works in anti-doping and eating-disorder prevention (Kaja Haugen) and a serial founder with a PT background (Hoang "Hogi" Minh Trinh). It grew from a free community bootcamp where kids are welcome and every exercise has an easier and a harder version. No other gym makes clothes or carries this whole-person message, and no clothing brand runs training.

## Operating Context
- Classes are announced and sign-up happens in the Bootcamp i Blomvåg Facebook group (94 members, Oct 2026). Sessions: ~60 min, circuits of 8–10 stations, indoors at Blomvåg Barnehage in winter, outdoors in spring and summer; weekday evenings and weekend mornings, irregular.
- Marketing runs mainly through Instagram, influencers, ambassadors and meet-ups.
- Domain: happyhuman.no.

## Capabilities and Constraints
- Web app: `web/` (Next.js 16, React 19, Tailwind v4, shadcn/ui). Pages under `app/[lang]/`, Norwegian bokmål first (`no`), English secondary (`en`). All user-facing text lives in the dictionaries.
- Group classes are free and stay free; personal training is paid.
- The shop is on Shopify, not in `web/`.
- **Undecided:** PT prices, packages and payment (Vipps?); the Instagram handle (@happyhuman.no not confirmed); class schedule and sign-up in `web/` (today: the Facebook group); when the clothing line and blog launch.

## Brand Commitments
- Name "Happy Human"; logo is the H monogram + two-line "Happy Human" wordmark, always one colour.
- Voice: warm, playful, inclusive. "Vi har plass til alle." Address the reader as "du", speak as "vi". Goals are *mestring* (mastery) and *treningsglede* (joy in training), never pressure.
- Health-safe: no weight-loss, body-shaming, calorie-counting or "earn your food" framing; no before/after or appearance goals; never promote supplements or performance enhancers; holistic view of body and mind; easier and harder alternatives for exercises.
- Families: kids are welcome; flows allow "I'm bringing children".
- "Sustainable" is a regulated marketing claim in Norway: only specific, documented facts.

## Evidence on Hand
- Founder portraits: `obsidian/Attachments/Kaja Haugen - portrait.jpg`, `obsidian/Attachments/Hoang Minh Trinh - portrait.jpg` (sports jerseys, not training context).
- Founder backgrounds: `obsidian/People/`.
- Openly licensed photos of Blomvåg and the coast in `web/public/images/place/`, credited in `web/lib/photo-credits.ts`.
- Bootcamp facts (60 min, 8–10 stations, free, kids welcome): `obsidian/Bootcamp i Blomvåg.md`.
- **Absent, never fabricate:** photos of classes or members, testimonials, member counts beyond the Facebook group, clothing products, blog posts, PT prices.

## Product Principles
1. Room for everyone: every page and exercise works for a beginner, a very fit person and a parent with kids.
2. Body and mind together: talk about energy, strength, fun and community, never appearance.
3. Low barrier first: free to try, no account needed to understand the offer.
4. Real over polished: show the actual founders, place and community; claim only what is true.
5. Training first; clothing and blog are announced, not sold, until they exist.

## Accessibility & Inclusion
WCAG AA contrast (4.5:1 text), full keyboard access with visible focus, screen-reader hints on external links, mobile first (375px) with no horizontal scroll, light and dark mode, `prefers-reduced-motion` respected.
