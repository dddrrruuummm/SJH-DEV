# SJH DEV — hardware procurement catalog

## Client direction — 2026-10-17
Replace the simple corporate-business-unit homepage with a richer server, hardware and electronics presentation. Preserve the legal identity, Hong Kong location, contact email, fresh produce business, SVG logo, self-hosted fonts and Next.js/Vercel workflow.

## Reference research
Thinkmate (https://www.thinkmate.com/): official homepage read and viewed in Chrome; separate server/storage/workstation/hardware departments and system-finding logic.
Supermicro: official server category information read through web results (https://www.supermicro.com/en/products). Category and configuration information informed product requirements; the browser product route returned 404 and the eStore timed out, so those were not treated as successful visual references.
ServerMonkey (https://www.servermonkey.com/): official readable search content supported server/storage/network category breadth and quote discovery. Chrome encountered an automated security challenge; no challenge bypassed and no visual-reference claim made.
CDW official homepage search content was reviewed for electronics breadth; Chrome returned an empty page, so no visual layout was inferred from it.
No competitor logo, product photo, proprietary copy, stock claim, warranty, client list, certification or ecommerce process copied.

## Chosen world and visitor path
The buyer begins with a hardware category or part requirement. A compact white brand/navigation header sits between a navy utility strip and a product search band. On desktop, a department rail sits beside a large rack-server product feature, storage and network panels. The home continues through real component photography, a workload/configuration section, drive categories, everyday electronics and produce.

The new /hardware catalog has five groups and 12 product categories, search, category counts, sorting, empty state/reset and query-string navigation. Static detail pages explain applications and the fields to supply with a quotation. The request link carries the chosen category into an editable contact email draft. This is a commercial showcase and inquiry site; no price, inventory or checkout invented.

## Page argument
Hardware is now prominent → show the server itself and browsable departments immediately. A buyer needs to identify a part → provide actual category images, search and detail pages. Specification determines fit → use workload and requirement tables rather than fake technical specs. Quote review is the next step → carry the product name into the inquiry. Produce remains a real trade line → keep its own lower-home photo section and direct navigation.

## Image system
12 added hardware assets: nine real Pexels photographs and three generated unbranded studio visualizations (rack server, storage enclosure, network switch). Sources and prompts recorded in docs/photo-sources.json and docs/generated-imagery.json. Generated visuals are category depictions, not real SKUs. Desktop GeForce photography is used for the general graphics-card category; it is not labeled an enterprise accelerator. Original produce and infrastructure photography retained. Home: 17 content images; full trade archive: 27 entries.

## Craft and behavior
Technical clarity through the buying information, not decorative code motifs. Navy/white/slate surfaces, flat controls, square product windows, real requirements tables, 16–18px body copy, restrained hover and reduced-motion support. Search is a native GET form. Mobile category filters wrap, the header collapses to a native details menu and the largest compositions stack. No external runtime images/fonts, new dependencies, hooks, telemetry or backend.

