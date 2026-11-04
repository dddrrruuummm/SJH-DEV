# SJH DEV — Food Ingredients

Complete source delivery, consolidated 2026-11-04. This replaces the earlier incremental food, SEO and favicon packages. It is not a patch.

## Business and scope
SJH DEV LIMITED, Hong Kong. Commercial inquiries: contact@sjhdev.com. Canonical domain: https://www.sjhdev.com.

An English company showcase and sourcing catalogue: 28 food products across eight ingredient categories, six illustrative warehouse/packing scenes, and an email-draft inquiry form. No hardware or electronics business, shopping cart, payment flow, accounts, database or form backend is included. The form opens a draft in the visitor's email application for review and sending.

## Run and deploy
The existing Next.js 16 / React / TypeScript / Tailwind / Vercel workflow is retained. No environment variables or API keys are required. Run `npm ci`, then `npm run build -- --webpack`. Vercel should use its existing Next.js framework detection and this repository root as the project root. Keep the current domain and Vercel project connection.

This folder's contents belong directly in the repository root alongside `package.json`. Do not upload its enclosing folder or the ZIP itself. Uploading matching paths replaces those files but does not delete older repository files. For an exact replacement, use a local clone and GitHub Desktop: preserve `.git`, replace the project contents, review additions/deletions, and commit/push once. The Chinese delivery guide and obsolete-file checklist are provided outside this source folder.

## Content locations
- `lib/foods.ts`: 28 product records, eight categories, units and product images.
- `lib/site.ts`: company identity, contact details and navigation.
- `components/industry-home.tsx`: food homepage.
- `components/collection-explorer.tsx`: catalogue search and filters.
- `components/food-product-grid.tsx`: product listing cards.
- `app/contact/page.tsx` and `components/inquiry-form.tsx`: food inquiry draft.
- `app/globals.css` and `app/food.css`: established food theme and responsive layout.
- `public/foods/`: 28 compressed product images.
- `public/food-scenes/` and `lib/food-scenes.ts`: six generic operational scenes.
- `public/brand-*.svg`: seed-and-bowl food logo and its light variants.
- `app/icon.svg`, `app/icon.png` and `app/favicon.ico`: matching food favicons.
- `public/organization-logo.png`: structured-data organization logo.
- `lib/seo.ts`, `lib/food-category-seo.ts`: canonical metadata and structured data.
- `app/products/[category]/page.tsx`: eight static food category pages.
- `app/sitemap.ts`, `app/robots.ts`: 15 canonical URLs, 56 food-image references and crawler rules.
- `docs/food-imagery-2026-11-03.json`, `docs/food-scenes-2026-11-03.json`: generation prompts and provenance.

## Withdrawn URLs
The two entry points under `app/hardware/` deliberately return 404. They provide withdrawal behavior for previously indexed URLs and do not contain any hardware business. `next.config.ts` supplies a `noindex, follow` header for this old path family. The sitemap excludes it. Obsolete product modules, duplicate source copies, unused components, old technology media and unused serif fonts are omitted from this full delivery.

## Imagery and commercial limits
All product and operational images are generated generic illustrations, not photographs of actual stock, batches, company-owned facilities or employees. Specifications, grade, origin, packing, documentation, availability, pricing and shipment arrangements require inquiry confirmation. No certification, stock level or fulfillment guarantee is implied. Crossed-out beans and raw grains from the supplied shortlist are excluded; canned sweet corn is included.

## Verification
See `docs/QA.md`. Production build and source checks do not imply live browser verification or immediate Google reindexing. No local preview service, remote repository change or public deployment is part of this delivery task.
