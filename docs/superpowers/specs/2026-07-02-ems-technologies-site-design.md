# EMS Technologies Website — Modern Recreation Design

**Date:** 2026-07-02
**Status:** Approved
**Goal:** Recreate `emstechnologies.in` as a modern, highly responsive, SEO/GEO-optimized site that is a drop-in replacement for the current static site.

## Context

EMS Technologies (Hyderabad, Telangana) is the exclusive India distributor for Lackwerke Peters GmbH (Germany) high-tech electronics coatings, operating since 2011. Also manufactures ESD packing materials (Hyderabad + Cochin plants since 2015) and supplies selective coating machines. The current site is a plain multi-folder static HTML site.

**Business facts (verbatim from live site):**
- Exclusive distributor of M/s Lackwerke Peters GmbH & Co. KG products in India since 2011.
- Team of 30+ B.Tech engineers, trained by Lackwerke Peters, doing on-site conformal coating job work.
- Also supplies Selective Conformal Coating Line Equipment (AUTOLEADER, China), glue dispensing / screwdriver / soldering machines (Topbest, China).
- Own manufacturing plants: Hyderabad, Telangana & Cochin, Kerala.
- Contact: Hyderabad, Telangana, India. Phones +91-9866157789, +91-9394116660. Email info@emstechnologies.in.
- Team: Vikram Chakravarthy Phanibatla (Principal Founder, vikramp@emstechnologies.in), Vikramkumar Bhatt (Key Accounts / Marketing Head), Vamsi Vogate (Process Engineering Head), Srikant Sharma (Finance Head), Gajendra (Marketing Head, Kerala), Nitin (Production Manager).

## Decisions (locked)

| Decision | Choice | Rationale |
|---|---|---|
| Stack | **Astro 4, static output** | Component DX + builds to plain static HTML → true drop-in on any host, best SEO. |
| Styling | **Tailwind CSS** | Fast, consistent, small purged output. |
| Assets | **Download & reuse live assets** | Visual parity; Astro optimizes to WebP + responsive `srcset`. |
| Content | **Sensible real copy** | Fill empty stats (500+ projects / 100+ products / 50+ clients) + real contact copy replacing lorem ipsum. |
| Language | TypeScript + `lang="en-IN"` | Local-region signal, type-safe data. |

## Architecture

- `astro.config.mjs`: `output: 'static'`, integrations `@astrojs/tailwind`, `@astrojs/sitemap`.
- Data-driven: `src/data/*.ts` holds nav, products, coatings, esd-bags, machines, services, team, clients, company. Pages map over data — no duplicated markup, single source of truth.
- Shared `src/layouts/Layout.astro` wraps every page, injects `<SEO>` head.
- Interactive bits as small client islands only where needed (`client:visible` / `client:load`).

### URL structure (mirrors original for drop-in parity)
```
/                 index
/about-us/        about + team + stats
/products/        product category grid
/conformal/       conformal coatings (Acrylic, Polyurethane, Silicon, Thick Film Curing, Aqua)
/EsdBags/         ESD bags (Bubble, Static Shielding, LDPE Pink, Conductive Grid)
/SCMachines/      selective coating machines (ALTD-450B, ALTD-450J, ...)
/services/        conformal coating job work
/contact-us/      contact form + info
/404
```

### Components (`src/components/`)
| Component | Purpose | Island? |
|---|---|---|
| `Header.astro` | Sticky responsive nav, dropdown menus, hamburger drawer <1024px | drawer = client island |
| `Footer.astro` | Address, phones, email, nav, copyright | no |
| `Hero.astro` | Home hero w/ headline + CTA | no |
| `StatCounter` | Count-up on scroll (projects/products/clients) | `client:visible` |
| `ProductCard.astro` | Image + title + link card | no |
| `TeamCard.astro` | Photo + name + role + email | no |
| `ClientMarquee` | Scrolling logo strip (30 logos) | `client:visible` |
| `ContactForm` | Name/email/mobile/company/message, client-side validation | `client:load` |
| `SEO.astro` | title, meta, canonical, OG, Twitter, JSON-LD | no |

### Pages content
- **index**: Hero → about intro → stats → products & services cards → client marquee → contact CTA.
- **about-us**: Company story (verbatim facts above), stats, 6-member team grid.
- **products**: 7 category cards (Conformal Coatings, ESD Bags, PP Corrugated Trays & Bins, EVA Conductive Foam Tray, Pallets, ESD Thermoforming Trays, Selective Coating Machines).
- **conformal**: intro (ELPEGUARD®) + 5 coating-type cards.
- **EsdBags**: 4 bag-type cards + filter tabs.
- **SCMachines**: machine models with feature lists + data-sheet links.
- **services**: Conformal Coating Job Work — process steps (Application, UV Optical Inspection, Touch-up, Drying/Curing, Thickness Testing, Removal/Reworking, Final Inspection).
- **contact-us**: real intro copy, form, address/phones/email, map embed.

## SEO + GEO strategy

- Per-page unique `<title>`, meta description, canonical URL.
- Open Graph + Twitter Card tags, share image.
- **JSON-LD structured data:**
  - `Organization` (site-wide): name, logo, url, contact points, sameAs.
  - `LocalBusiness` (home + contact): Hyderabad geo coordinates, address, phones, email, opening hours → local + GEO/AI-answer optimization.
  - `Product` per coating/machine, `BreadcrumbList` per deep page.
- `sitemap.xml` via `@astrojs/sitemap`, `robots.txt` pointing to it.
- Semantic HTML5 landmarks, descriptive alt text, `lang="en-IN"`.
- Performance: preloaded/`display:swap` fonts, lazy images, responsive `srcset`, Tailwind purge → Lighthouse SEO/Perf/A11y/Best-Practices 95+ target.

## Responsive design

- Mobile-first. Breakpoints: hamburger drawer <1024px, fluid grids `repeat(auto-fit, minmax())`, `clamp()` fluid type scale.
- Touch-friendly targets (44px min), no horizontal scroll, tested 360px→1920px.

## Asset pipeline

- Node script downloads live images (logo, hero1, home-about, home-intro/intro2, product images, machine renders, team photos, 30 client logos) into `src/assets/`.
- Import through Astro `<Image>` → auto WebP + width variants.
- Fallback: any missing/broken remote asset → clean SVG placeholder.

## Out of scope (YAGNI)

- No CMS, no backend. Contact form posts to a configurable endpoint (Formspree-style) or `mailto` fallback — no server.
- No blog, no i18n, no e-commerce.
- Deep sub-category leaf pages (e.g. individual coating chemistry pages) stubbed as sections, not separate routes, unless assets warrant.

## Success criteria

1. `astro build` produces static `dist/` deployable to current host, same top-level URLs.
2. All original pages represented; all real business facts + contact details present.
3. Fully responsive 360px→1920px, no layout breakage.
4. Lighthouse ≥95 SEO & Performance; valid JSON-LD (Rich Results test passes).
5. Visual parity via reused assets; modern polish (motion, spacing, type).
