---
type: decision
date: 2026-10-26
status: accepted
---
# Shopify for the online store

## Context
The clothing line is sold online only ([[Decisions/2026-10-26 Online store only]]). The open question was whether to build the store into the Next.js web app (`web/`) or use an e-commerce platform.

## Decision
The online store runs on **Shopify**.

## Alternatives considered
- Building the store into `web/`: full control, but means building and maintaining payments, stock, shipping, tax and returns ourselves.
- Other platforms: not evaluated.

## Consequences
- **No shop logic in `web/`.** Products, checkout, payments, stock and orders all live in Shopify.
- How `web/` and Shopify fit together isn't decided yet. Options:
  1. Shopify hosts the shop on its own (sub)domain, and `web/` links to it.
  2. `web/` shows products through Shopify's Storefront API (headless), with checkout on Shopify.
  The simple option (1) is enough at launch. Decide when the clothing line is closer ([[Decisions/2026-10-26 Launch training first, clothing second]]).
- The shop should follow the same brand (logo, colours, tone) as `web/`.
- Payment options for Norway (Vipps, Klarna, cards) need checking in Shopify.

## Related
- [[Brand Strategy]]
- [[Decisions/2026-10-26 Online store only]]
