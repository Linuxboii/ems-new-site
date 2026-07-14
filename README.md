# EMS Technologies Website

Modern Astro recreation of emstechnologies.in — static, SEO/GEO-optimized, drop-in replacement.

## Develop

    npm install
    npm run assets   # download live images into src/assets (run once)
    npm run dev

## Build

    npm run build    # outputs static site to dist/

## Deploy

Upload the contents of `dist/` to the web host document root. Routes mirror the
original site (`/about-us/`, `/products/`, `/conformal/`, `/EsdBags/`,
`/SCMachines/`, `/services/`, `/contact-us/`).

## Contact form

Set `PUBLIC_CONTACT_ENDPOINT` (e.g. a Formspree URL) to POST submissions.
Without it, the form falls back to a prefilled `mailto:` to info@emstechnologies.in.

## Tech

Astro 4 (static output) · Tailwind CSS · TypeScript · `@astrojs/sitemap`.
Data-driven pages map over typed modules in `src/data/`. SEO (meta + Open Graph
+ Organization/LocalBusiness/BreadcrumbList JSON-LD) injected via
`src/components/SEO.astro` through `src/layouts/Layout.astro`.
