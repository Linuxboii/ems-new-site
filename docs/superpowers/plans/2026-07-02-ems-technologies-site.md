# EMS Technologies Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a modern, responsive, SEO/GEO-optimized recreation of `emstechnologies.in` in Astro that builds to static HTML and drops onto the current host.

**Architecture:** Astro 4 with `output: 'static'` and Tailwind CSS. Data-driven pages map over typed data modules (`src/data/*.ts`) through a shared `Layout.astro` that injects an `SEO.astro` head (meta + Open Graph + JSON-LD). Interactive bits (nav drawer, count-up stats, logo marquee, contact form) are small client islands. Live-site images are downloaded once into `src/assets/` and served through Astro's `<Image>` for WebP + responsive `srcset`.

**Tech Stack:** Astro 4, TypeScript, Tailwind CSS, `@astrojs/sitemap`, `@astrojs/tailwind`, `sharp` (Astro image optimization).

## Global Constraints

- Node ≥ 18.20 (Astro 4 floor).
- `output: 'static'` — no SSR, no server runtime. Build output must be plain static files.
- URL routes must mirror the original exactly: `/`, `/about-us/`, `/products/`, `/conformal/`, `/EsdBags/`, `/SCMachines/`, `/services/`, `/contact-us/`, `/404`. Astro `build.format: 'directory'` so each page emits `index.html` in its folder.
- `<html lang="en-IN">` on every page.
- Company facts are fixed values — copy verbatim from `src/data/company.ts`; never invent contact details. Canonical values: phones `+91-9866157789`, `+91-9394116660`; email `info@emstechnologies.in`; location `Hyderabad, Telangana, India`; distributor since `2011`.
- Stats copy (approved): `500+` Projects Completed, `100+` Products, `50+` Clients.
- Every page: unique `<title>`, meta description, canonical, Open Graph, Twitter card. Site-wide `Organization` + `LocalBusiness` JSON-LD.
- Every `<img>`/`<Image>` has descriptive `alt`. Interactive targets ≥ 44px. No horizontal scroll 360px→1920px.

---

### Task 1: Scaffold Astro project

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `tailwind.config.mjs`, `src/env.d.ts`, `.gitignore`, `src/pages/index.astro` (temporary placeholder)

**Interfaces:**
- Produces: a buildable Astro project. Later tasks add pages/components under `src/`.

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "ems-technologies-site",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check",
    "assets": "node scripts/download-assets.mjs"
  },
  "dependencies": {
    "astro": "^4.16.0",
    "@astrojs/tailwind": "^5.1.2",
    "@astrojs/sitemap": "^3.2.0",
    "@astrojs/check": "^0.9.4",
    "tailwindcss": "^3.4.13",
    "typescript": "^5.6.0",
    "sharp": "^0.33.5"
  }
}
```

- [ ] **Step 2: Create `astro.config.mjs`**

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://emstechnologies.in',
  output: 'static',
  build: { format: 'directory' },
  integrations: [tailwind(), sitemap()],
});
```

- [ ] **Step 3: Create `tsconfig.json`**

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["src/*"] }
  }
}
```

- [ ] **Step 4: Create `tailwind.config.mjs`**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff', 100: '#d9ebff', 500: '#1e63c4',
          600: '#164fa0', 700: '#123f80', 900: '#0b2545',
        },
        accent: { 500: '#f5a524', 600: '#d98a12' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      maxWidth: { content: '1200px' },
    },
  },
  plugins: [],
};
```

- [ ] **Step 5: Create `src/env.d.ts`**

```ts
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
```

- [ ] **Step 6: Create `.gitignore`**

```
node_modules/
dist/
.astro/
.DS_Store
*.log
```

- [ ] **Step 7: Create temporary `src/pages/index.astro`**

```astro
---
---
<html lang="en-IN"><body><h1>EMS scaffold OK</h1></body></html>
```

- [ ] **Step 8: Install and build**

Run: `npm install && npm run build`
Expected: `dist/index.html` produced, exit 0, no errors.

- [ ] **Step 9: Commit**

```bash
git add package.json astro.config.mjs tsconfig.json tailwind.config.mjs src/env.d.ts .gitignore src/pages/index.astro package-lock.json
git commit -m "chore: scaffold Astro + Tailwind project"
```

---

### Task 2: Asset download script

**Files:**
- Create: `scripts/download-assets.mjs`, `src/assets/.gitkeep`

**Interfaces:**
- Produces: image files in `src/assets/` referenced by later tasks. Missing/failed downloads are logged, not fatal.

- [ ] **Step 1: Create `scripts/download-assets.mjs`**

```js
import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const BASE = 'https://emstechnologies.in/include/images/';
const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets');

// Named assets used across pages.
const named = [
  'logo.png', 'hero1.png', 'home-about.jpg', 'home-intro.jpg', 'home-intro2.jpg',
  '2019-services-hires-coating.jpg', 'bubblebags.jpg', 'bins.png', 'antistatic-pp.png',
  'uv-oven.png', 'bps.png', 'Static-Shielding-bags.jpeg', 'pinkbag.png', 'conductbag.png',
  'a84c75762407-Conformal-Coating-Tool-Removal.jpg', 'hero_circuit_board.jpeg',
  'selective-conformal-coating-640_sch-uk-2.jpeg', 'automated-conformal-coating-2.jpg',
  'ALTD-450B.png', 'ALTD-450J.png',
  'IMG-20230510-WA0001.jpg', 'IMG-20230510-WA0002.jpg', 'IMG-20230510-WA0003.jpg',
  'IMG-20230510-WA0004.jpg', 'IMG-20230510-WA0005.jpg', 'IMG-20230510-WA0006.jpg',
];
// Client logos 1..20 are .png, 21..30 are .jpg (per live markup).
const clients = [
  ...Array.from({ length: 20 }, (_, i) => `${i + 1}.png`),
  ...Array.from({ length: 10 }, (_, i) => `${i + 21}.jpg`),
];

async function grab(name) {
  const url = BASE + encodeURIComponent(name);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const dest = join(OUT, name);
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    console.log(`ok   ${name} (${buf.length}b)`);
  } catch (e) {
    console.warn(`FAIL ${name}: ${e.message}`);
  }
}

await mkdir(OUT, { recursive: true });
for (const n of [...named, ...clients]) await grab(n);
console.log('done');
```

- [ ] **Step 2: Create `src/assets/.gitkeep`** (empty file so the dir exists).

- [ ] **Step 3: Run the script**

Run: `npm run assets`
Expected: majority `ok` lines; note any `FAIL` names (those get SVG placeholders when referenced).

- [ ] **Step 4: Commit**

```bash
git add scripts/download-assets.mjs src/assets
git commit -m "chore: add asset download script and fetch live images"
```

---

### Task 3: Data modules

**Files:**
- Create: `src/data/company.ts`, `src/data/nav.ts`, `src/data/products.ts`, `src/data/coatings.ts`, `src/data/esdBags.ts`, `src/data/machines.ts`, `src/data/services.ts`, `src/data/team.ts`, `src/data/clients.ts`

**Interfaces:**
- Produces (imported by many later tasks):
  - `company: { name, legalName, tagline, since, location, phones: string[], email, principalEmail, address: { locality, region, country }, geo: { lat, lng }, stats: { projects, products, clients }, description: string }`
  - `nav: { label: string; href: string; children?: { label: string; href: string }[] }[]`
  - `products: { title: string; href: string; img: string; blurb: string }[]`
  - `coatings: { title: string; slug: string; img: string; blurb: string }[]`
  - `esdBags: { title: string; img: string; blurb: string }[]`
  - `machines: { model: string; img: string; features: string[]; datasheet?: string }[]`
  - `services: { title: string; img: string; body: string }[]` and `serviceIntro: string`
  - `team: { name: string; role: string; email?: string; img: string }[]`
  - `clients: string[]` (asset filenames)

- [ ] **Step 1: Create `src/data/company.ts`**

```ts
export const company = {
  name: 'EMS Technologies',
  legalName: 'EMS Technologies',
  tagline: 'Exclusive India distributor for Lackwerke Peters high-tech electronics coatings',
  since: 2011,
  location: 'Hyderabad, Telangana, India',
  phones: ['+91-9866157789', '+91-9394116660'],
  email: 'info@emstechnologies.in',
  principalEmail: 'vikramp@emstechnologies.in',
  address: { locality: 'Hyderabad', region: 'Telangana', country: 'IN' },
  geo: { lat: 17.385, lng: 78.4867 },
  stats: { projects: '500+', products: '100+', clients: '50+' },
  description:
    'EMS Technologies, based in Hyderabad, Telangana, is the exclusive India distributor for M/s Lackwerke Peters GmbH & Co. KG (Germany) since 2011, supplying ELPEGUARD conformal coatings, ESD packing solutions, and selective coating machines, and providing on-site conformal coating job work.',
} as const;
```

- [ ] **Step 2: Create `src/data/nav.ts`**

```ts
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us/' },
  {
    label: 'Products', href: '/products/',
    children: [
      { label: 'Conformal Coatings', href: '/conformal/' },
      { label: 'ESD Bags', href: '/EsdBags/' },
      { label: 'Selective Coating Machines', href: '/SCMachines/' },
    ],
  },
  { label: 'Services', href: '/services/' },
  { label: 'Contact', href: '/contact-us/' },
];
```

- [ ] **Step 3: Create `src/data/products.ts`**

```ts
export const products = [
  { title: 'Conformal Coatings', href: '/conformal/', img: '2019-services-hires-coating.jpg', blurb: 'ELPEGUARD® coatings that protect and insulate assembled PCBs for higher reliability and service life.' },
  { title: 'ESD Bags', href: '/EsdBags/', img: 'bubblebags.jpg', blurb: 'Bubble, static-shielding, LDPE pink and conductive grid bags for safe electronics packing.' },
  { title: 'PP Corrugated Trays & Bins', href: '/products/', img: 'bins.png', blurb: 'Durable polypropylene corrugated trays and bins for component storage and transport.' },
  { title: 'EVA Conductive Foam Tray', href: '/products/', img: 'antistatic-pp.png', blurb: 'Conductive EVA foam trays for secure, static-safe device handling.' },
  { title: 'Pallets', href: '/products/', img: 'bps.png', blurb: 'ESD-safe pallets for bulk electronics logistics.' },
  { title: 'ESD Thermoforming Trays', href: '/products/', img: 'antistatic-pp.png', blurb: 'Custom thermoformed anti-static trays tailored to component geometry.' },
  { title: 'Selective Coating Machines', href: '/SCMachines/', img: 'uv-oven.png', blurb: 'Automated selective conformal coating line equipment for precision and throughput.' },
];
```

- [ ] **Step 4: Create `src/data/coatings.ts`**

```ts
export const coatingIntro =
  'ELPEGUARD® conformal coatings are used to protect and insulate assembled PCBs so they can meet higher requirements for reliability and service life.';

export const coatings = [
  { title: 'Acrylic', slug: 'acrylic', img: 'a84c75762407-Conformal-Coating-Tool-Removal.jpg', blurb: 'Fast-drying acrylic coatings offering easy rework and reliable moisture protection.' },
  { title: 'Polyurethane', slug: 'polyurethane', img: '2019-services-hires-coating.jpg', blurb: 'Tough polyurethane coatings with excellent chemical and abrasion resistance.' },
  { title: 'Silicon', slug: 'silicon', img: 'hero_circuit_board.jpeg', blurb: 'Silicone coatings for high-temperature stability and flexible protection.' },
  { title: 'Thick Film Curing', slug: 'dsl', img: 'selective-conformal-coating-640_sch-uk-2.jpeg', blurb: 'Thick-film curing systems for demanding insulation requirements.' },
  { title: 'Aqua', slug: 'aqua', img: 'automated-conformal-coating-2.jpg', blurb: 'Water-based, low-VOC coatings for environmentally conscious production.' },
];
```

- [ ] **Step 5: Create `src/data/esdBags.ts`**

```ts
export const esdBags = [
  { title: 'Bubble Bags', img: 'bubblebags.jpg', blurb: 'Cushioned anti-static bubble bags protecting components from shock and static.' },
  { title: 'Static Shielding Bags', img: 'Static-Shielding-bags.jpeg', blurb: 'Metallised shielding bags forming a Faraday cage around sensitive electronics.' },
  { title: 'LDPE Pink Bags', img: 'pinkbag.png', blurb: 'Anti-static pink LDPE bags for general electronics packing.' },
  { title: 'Conductive Grid Bags', img: 'conductbag.png', blurb: 'Conductive grid bags dissipating static during storage and transit.' },
];
```

- [ ] **Step 6: Create `src/data/machines.ts`**

```ts
export const machines = [
  {
    model: 'ALTD-450B',
    img: 'ALTD-450B.png',
    datasheet: 'https://emstechnologies.in/include/images/atld-450b-selective-coating-machine-page3.pdf',
    features: [
      'Sheet-metal welded frame for a stable, durable structure.',
      'Industrial-computer control with an intuitive operating system.',
      'On-line and off-line programming supported.',
      'Auto accuracy calibration for precise running.',
      'Imported pneumatic components with precision pressure regulation for clean edge definition.',
      'Auto exhaust-emission collection protects the working environment.',
      'Low-pressure protection and alarm safeguard the machine and parts.',
      'Integrated UV inspection for coating verification.',
    ],
  },
  {
    model: 'ALTD-450J',
    img: 'ALTD-450J.png',
    datasheet: 'https://emstechnologies.in/include/images/atld-450b-selective-coating-machine-page3.pdf',
    features: [
      'High-grade aluminium frame — light, durable, easy to maintain.',
      'PLC-controlled for simple operation.',
      'Auto accuracy calibration for perfect precision.',
      'Intelligent PCB-width inspection with four-direction compensation.',
      'Precision pressure regulation balances atomised airflow for sharp edges.',
      'Adjustable conveyor speed fits all PCB sizes for best coating results.',
      'Auto exhaust collection, low-pressure protection and alarm.',
      'Integrated UV inspection.',
    ],
  },
];
```

- [ ] **Step 7: Create `src/data/services.ts`**

```ts
export const serviceIntro =
  'Complete solutions across the full conformal coating process — operating the coating machine, application, UV optical inspection, touch-up, drying/curing, thickness testing, removal, reworking and final inspection. EMS has partnered with Lackwerke Peters since 2011 and deploys 30+ trained B.Tech engineers on-site.';

export const services = [
  { title: 'Application of Conformal Coating', img: '2019-services-hires-coating.jpg', body: 'All major application methods: brush, pneumatic spray gun, dip coating (manual / semi-automated / automated) and automatic selective coating equipment.' },
  { title: 'UV Optical Inspection', img: 'hero_circuit_board.jpeg', body: 'Inspection under UV light to verify coating uniformity, coverage and thickness across the assembly.' },
  { title: 'Drying / Curing', img: 'selective-conformal-coating-640_sch-uk-2.jpeg', body: 'Controlled drying and curing to achieve full coating performance and adhesion.' },
  { title: 'Coating Thickness Testing', img: 'automated-conformal-coating-2.jpg', body: 'Precise thickness measurement to confirm conformance to specification.' },
  { title: 'Removal & Reworking', img: 'a84c75762407-Conformal-Coating-Tool-Removal.jpg', body: 'Selective removal and rework of coated areas for repair and component replacement.' },
  { title: 'Final Inspection', img: 'home-intro.jpg', body: 'Complete final inspection ensuring every board meets quality and reliability requirements.' },
];
```

- [ ] **Step 8: Create `src/data/team.ts`**

```ts
export const team = [
  { name: 'Mr. Vikram Chakravarthy Phanibatla', role: 'Principal Founder', email: 'vikramp@emstechnologies.in', img: 'IMG-20230510-WA0001.jpg' },
  { name: 'Mr. Vikramkumar Bhatt', role: 'Key Accounts Manager / Marketing Head', email: 'vikramsbhatt@emstechnologies.in', img: 'IMG-20230510-WA0002.jpg' },
  { name: 'Mr. Vamsi Vogate', role: 'Process Engineering Head', email: 'info@emstechnologies.in', img: 'IMG-20230510-WA0003.jpg' },
  { name: 'Mr. Srikant Sharma', role: 'Finance Head', email: 'info@emstechnologies.in', img: 'IMG-20230510-WA0004.jpg' },
  { name: 'Mr. Gajendra', role: 'Marketing Head (Kerala)', email: 'info@emstechnologies.in', img: 'IMG-20230510-WA0005.jpg' },
  { name: 'Mr. Nitin', role: 'Production Manager', img: 'IMG-20230510-WA0006.jpg' },
];
```

- [ ] **Step 9: Create `src/data/clients.ts`**

```ts
export const clients: string[] = [
  ...Array.from({ length: 20 }, (_, i) => `${i + 1}.png`),
  ...Array.from({ length: 10 }, (_, i) => `${i + 21}.jpg`),
];
```

- [ ] **Step 10: Typecheck and commit**

Run: `npm run check`
Expected: 0 errors (unused-export warnings acceptable at this stage).

```bash
git add src/data
git commit -m "feat: add typed data modules for company, products, coatings, ESD, machines, services, team, clients"
```

---

### Task 4: SEO component + base Layout

**Files:**
- Create: `src/components/SEO.astro`, `src/layouts/Layout.astro`, `src/styles/global.css`

**Interfaces:**
- Consumes: `company` from `src/data/company.ts`.
- Produces:
  - `SEO.astro` props: `{ title: string; description: string; path: string; image?: string; jsonLd?: object[] }`. Emits title/description/canonical/OG/Twitter + always-on `Organization` & `LocalBusiness` JSON-LD, merged with any page `jsonLd`.
  - `Layout.astro` props: `{ title: string; description: string; path: string; image?: string; jsonLd?: object[] }`. Renders `<html lang="en-IN">`, `<head>` via `SEO`, `<Header/>`, `<slot/>`, `<Footer/>`. (Header/Footer added in Task 5; use placeholder `<header>`/`<footer>` now and wire real components in Task 5.)

- [ ] **Step 1: Create `src/styles/global.css`**

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');

:root { scroll-behavior: smooth; }
body { @apply font-sans text-brand-900 bg-white antialiased; }
.container-x { @apply mx-auto w-full max-w-content px-5 sm:px-6 lg:px-8; }
.btn { @apply inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition min-h-[44px]; }
.btn-primary { @apply btn bg-brand-500 text-white hover:bg-brand-600; }
.btn-outline { @apply btn border border-brand-500 text-brand-600 hover:bg-brand-50; }
.section { @apply py-16 sm:py-20 lg:py-24; }
.heading { @apply font-display font-bold tracking-tight; }
```

- [ ] **Step 2: Create `src/components/SEO.astro`**

```astro
---
import { company } from '@/data/company';
interface Props { title: string; description: string; path: string; image?: string; jsonLd?: object[]; }
const { title, description, path, image = '/social-card.jpg', jsonLd = [] } = Astro.props;
const site = 'https://emstechnologies.in';
const canonical = new URL(path, site).href;
const ogImage = new URL(image, site).href;

const organization = {
  '@context': 'https://schema.org', '@type': 'Organization',
  name: company.name, url: site, logo: `${site}/logo.png`,
  email: company.email, telephone: company.phones[0],
  description: company.description,
  address: { '@type': 'PostalAddress', addressLocality: company.address.locality, addressRegion: company.address.region, addressCountry: company.address.country },
};
const localBusiness = {
  '@context': 'https://schema.org', '@type': 'LocalBusiness',
  name: company.name, image: ogImage, url: site,
  telephone: company.phones[0], email: company.email,
  address: { '@type': 'PostalAddress', addressLocality: company.address.locality, addressRegion: company.address.region, addressCountry: company.address.country },
  geo: { '@type': 'GeoCoordinates', latitude: company.geo.lat, longitude: company.geo.lng },
  areaServed: 'IN',
};
const graph = [organization, localBusiness, ...jsonLd];
---
<title>{title}</title>
<meta name="description" content={description} />
<link rel="canonical" href={canonical} />
<meta name="robots" content="index,follow" />
<meta property="og:type" content="website" />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content={canonical} />
<meta property="og:image" content={ogImage} />
<meta property="og:site_name" content={company.name} />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={ogImage} />
<script type="application/ld+json" set:html={JSON.stringify(graph)} />
```

- [ ] **Step 3: Create `src/layouts/Layout.astro`** (placeholder header/footer, replaced in Task 5)

```astro
---
import SEO from '@/components/SEO.astro';
import '@/styles/global.css';
interface Props { title: string; description: string; path: string; image?: string; jsonLd?: object[]; }
const { title, description, path, image, jsonLd } = Astro.props;
---
<!doctype html>
<html lang="en-IN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <SEO title={title} description={description} path={path} image={image} jsonLd={jsonLd} />
  </head>
  <body>
    <header class="container-x py-4">EMS placeholder header</header>
    <main><slot /></main>
    <footer class="container-x py-6">EMS placeholder footer</footer>
  </body>
</html>
```

- [ ] **Step 4: Replace temporary home page to use Layout**

Overwrite `src/pages/index.astro`:

```astro
---
import Layout from '@/layouts/Layout.astro';
---
<Layout title="EMS Technologies — Peters Conformal Coatings India" description="Exclusive India distributor for Lackwerke Peters conformal coatings, ESD packing solutions and selective coating machines. Hyderabad, since 2011." path="/">
  <section class="section container-x"><h1 class="heading text-4xl">Home WIP</h1></section>
</Layout>
```

- [ ] **Step 5: Build and verify SEO output**

Run: `npm run build`
Expected: exit 0. Open `dist/index.html`; confirm it contains `<title>`, `<link rel="canonical">`, and a `application/ld+json` block with `Organization` and `LocalBusiness`.

- [ ] **Step 6: Commit**

```bash
git add src/components/SEO.astro src/layouts/Layout.astro src/styles/global.css src/pages/index.astro
git commit -m "feat: add SEO component, base layout, and global styles"
```

---

### Task 5: Header and Footer

**Files:**
- Create: `src/components/Header.astro`, `src/components/NavDrawer.tsx` (island script, plain TS in `<script>` — see below), `src/components/Footer.astro`
- Modify: `src/layouts/Layout.astro` (swap placeholders for real components)

**Interfaces:**
- Consumes: `nav` from `src/data/nav.ts`, `company` from `src/data/company.ts`, logo from `src/assets/logo.png`.
- Produces: `<Header />` and `<Footer />` used by `Layout.astro`.

- [ ] **Step 1: Create `src/components/Header.astro`**

```astro
---
import { Image } from 'astro:assets';
import logo from '@/assets/logo.png';
import { nav } from '@/data/nav';
---
<header class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-brand-100">
  <div class="container-x flex items-center justify-between h-16">
    <a href="/" class="flex items-center gap-2">
      <Image src={logo} alt="EMS Technologies logo" height={40} class="h-10 w-auto" />
    </a>
    <nav class="hidden lg:flex items-center gap-7" aria-label="Primary">
      {nav.map((item) => (
        <div class="relative group">
          <a href={item.href} class="font-medium text-brand-900 hover:text-brand-500 py-2 inline-block">{item.label}</a>
          {item.children && (
            <div class="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-lg py-2 min-w-56 border border-brand-100">
              {item.children.map((c) => (
                <a href={c.href} class="block px-4 py-2 text-sm hover:bg-brand-50">{c.label}</a>
              ))}
            </div>
          )}
        </div>
      ))}
      <a href="/contact-us/" class="btn-primary text-sm">Get a Quote</a>
    </nav>
    <button id="navToggle" class="lg:hidden p-2 min-h-[44px] min-w-[44px]" aria-label="Open menu" aria-expanded="false">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>
  </div>
  <div id="navDrawer" class="lg:hidden hidden border-t border-brand-100 bg-white">
    <nav class="container-x py-4 flex flex-col gap-1" aria-label="Mobile">
      {nav.map((item) => (
        <a href={item.href} class="py-3 font-medium border-b border-brand-50">{item.label}</a>
      ))}
      <a href="/contact-us/" class="btn-primary mt-3">Get a Quote</a>
    </nav>
  </div>
</header>
<script>
  const btn = document.getElementById('navToggle');
  const drawer = document.getElementById('navDrawer');
  btn?.addEventListener('click', () => {
    const open = drawer?.classList.toggle('hidden') === false;
    btn.setAttribute('aria-expanded', String(open));
  });
</script>
```

(Note: no separate `NavDrawer.tsx` needed — inline `<script>` handles the island. Do not create that file.)

- [ ] **Step 2: Create `src/components/Footer.astro`**

```astro
---
import { company } from '@/data/company';
import { nav } from '@/data/nav';
---
<footer class="bg-brand-900 text-white mt-8">
  <div class="container-x py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
    <div>
      <div class="font-display text-xl font-bold">{company.name}</div>
      <p class="mt-3 text-sm text-brand-100/80">{company.tagline}.</p>
    </div>
    <div>
      <h3 class="font-semibold mb-3">Explore</h3>
      <ul class="space-y-2 text-sm text-brand-100/80">
        {nav.map((n) => (<li><a class="hover:text-white" href={n.href}>{n.label}</a></li>))}
      </ul>
    </div>
    <div>
      <h3 class="font-semibold mb-3">Contact</h3>
      <ul class="space-y-2 text-sm text-brand-100/80">
        <li>{company.location}</li>
        {company.phones.map((p) => (<li><a class="hover:text-white" href={`tel:${p.replaceAll('-', '')}`}>{p}</a></li>))}
        <li><a class="hover:text-white" href={`mailto:${company.email}`}>{company.email}</a></li>
      </ul>
    </div>
    <div>
      <h3 class="font-semibold mb-3">Partner</h3>
      <p class="text-sm text-brand-100/80">Exclusive India distributor for M/s Lackwerke Peters GmbH &amp; Co. KG, Germany, since {company.since}.</p>
    </div>
  </div>
  <div class="border-t border-white/10 py-5 text-center text-xs text-brand-100/60">
    © {new Date().getFullYear()} {company.name}. All rights reserved.
  </div>
</footer>
```

- [ ] **Step 3: Wire into `src/layouts/Layout.astro`**

Replace the placeholder `<header>`/`<footer>` lines with imports + components:

```astro
---
import SEO from '@/components/SEO.astro';
import Header from '@/components/Header.astro';
import Footer from '@/components/Footer.astro';
import '@/styles/global.css';
interface Props { title: string; description: string; path: string; image?: string; jsonLd?: object[]; }
const { title, description, path, image, jsonLd } = Astro.props;
---
<!doctype html>
<html lang="en-IN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <SEO title={title} description={description} path={path} image={image} jsonLd={jsonLd} />
  </head>
  <body>
    <Header />
    <main><slot /></main>
    <Footer />
  </body>
</html>
```

- [ ] **Step 4: Build and manually verify**

Run: `npm run build && npm run preview`
Expected: header shows logo + nav; at <1024px hamburger toggles the drawer; footer shows real phones/email. No console errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/Header.astro src/components/Footer.astro src/layouts/Layout.astro
git commit -m "feat: add responsive header with mobile drawer and footer"
```

---

### Task 6: Reusable UI components (cards, stats, marquee)

**Files:**
- Create: `src/components/ProductCard.astro`, `src/components/TeamCard.astro`, `src/components/StatCounter.astro`, `src/components/ClientMarquee.astro`, `src/components/AssetImage.astro`

**Interfaces:**
- Consumes: `clients` from `src/data/clients.ts`.
- Produces:
  - `AssetImage.astro` props `{ name: string; alt: string; class?: string; width?: number; height?: number }` — resolves `src/assets/<name>` via a `import.meta.glob` map; falls back to an inline SVG placeholder if the asset is missing.
  - `ProductCard.astro` props `{ title: string; href: string; img: string; blurb?: string }`.
  - `TeamCard.astro` props `{ name: string; role: string; email?: string; img: string }`.
  - `StatCounter.astro` props `{ value: string; label: string }` — count-up on scroll.
  - `ClientMarquee.astro` — no props; renders scrolling `clients` logos.

- [ ] **Step 1: Create `src/components/AssetImage.astro`**

```astro
---
import { Image } from 'astro:assets';
interface Props { name: string; alt: string; class?: string; width?: number; height?: number; }
const { name, alt, class: cls = '', width = 800, height = 600 } = Astro.props;
const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/*.{png,jpg,jpeg,webp}', { eager: true });
const match = images[`/src/assets/${name}`]?.default;
---
{match ? (
  <Image src={match} alt={alt} width={width} height={height} class={cls} loading="lazy" />
) : (
  <div class={`grid place-items-center bg-brand-50 text-brand-500 ${cls}`} style={`aspect-ratio:${width}/${height}`} role="img" aria-label={alt}>
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="m3 15 5-5 4 4 3-3 6 6"/></svg>
  </div>
)}
```

- [ ] **Step 2: Create `src/components/ProductCard.astro`**

```astro
---
import AssetImage from '@/components/AssetImage.astro';
interface Props { title: string; href: string; img: string; blurb?: string; }
const { title, href, img, blurb } = Astro.props;
---
<a href={href} class="group block overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm hover:shadow-lg transition">
  <div class="aspect-[4/3] overflow-hidden">
    <AssetImage name={img} alt={title} width={640} height={480} class="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
  </div>
  <div class="p-5">
    <h3 class="heading text-lg text-brand-900">{title}</h3>
    {blurb && <p class="mt-2 text-sm text-brand-900/70">{blurb}</p>}
    <span class="mt-3 inline-block text-sm font-semibold text-brand-500">Learn more →</span>
  </div>
</a>
```

- [ ] **Step 3: Create `src/components/TeamCard.astro`**

```astro
---
import AssetImage from '@/components/AssetImage.astro';
interface Props { name: string; role: string; email?: string; img: string; }
const { name, role, email, img } = Astro.props;
---
<div class="rounded-2xl border border-brand-100 bg-white p-5 text-center shadow-sm">
  <div class="mx-auto h-28 w-28 overflow-hidden rounded-full">
    <AssetImage name={img} alt={name} width={160} height={160} class="h-full w-full object-cover" />
  </div>
  <h3 class="mt-4 font-semibold text-brand-900">{name}</h3>
  <p class="text-sm text-brand-500">{role}</p>
  {email && <a href={`mailto:${email}`} class="mt-1 inline-block text-xs text-brand-900/60 hover:text-brand-500 break-all">{email}</a>}
</div>
```

- [ ] **Step 4: Create `src/components/StatCounter.astro`**

```astro
---
interface Props { value: string; label: string; }
const { value, label } = Astro.props;
const num = parseInt(value.replace(/\D/g, ''), 10) || 0;
const suffix = value.replace(/[0-9]/g, '');
---
<div class="text-center">
  <div class="heading text-4xl sm:text-5xl text-brand-500" data-count={num} data-suffix={suffix}>0{suffix}</div>
  <div class="mt-2 text-sm font-medium uppercase tracking-wide text-brand-900/70">{label}</div>
</div>
<script>
  const els = document.querySelectorAll<HTMLElement>('[data-count]');
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const el = e.target as HTMLElement;
      const target = Number(el.dataset.count), suffix = el.dataset.suffix ?? '';
      let cur = 0; const step = Math.max(1, Math.ceil(target / 40));
      const tick = () => { cur = Math.min(target, cur + step); el.textContent = cur + suffix; if (cur < target) requestAnimationFrame(tick); };
      tick(); io.unobserve(el);
    }
  }, { threshold: 0.4 });
  els.forEach((el) => io.observe(el));
</script>
```

- [ ] **Step 5: Create `src/components/ClientMarquee.astro`**

```astro
---
import AssetImage from '@/components/AssetImage.astro';
import { clients } from '@/data/clients';
const loop = [...clients, ...clients];
---
<div class="relative overflow-hidden py-4" aria-label="Our clients">
  <div class="flex w-max animate-[marquee_40s_linear_infinite] gap-10">
    {loop.map((c, i) => (
      <div class="grid h-16 w-32 shrink-0 place-items-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition">
        <AssetImage name={c} alt={`Client ${(i % clients.length) + 1}`} width={128} height={64} class="max-h-16 w-auto object-contain" />
      </div>
    ))}
  </div>
</div>
<style>
  @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
</style>
```

- [ ] **Step 6: Build and commit**

Run: `npm run build`
Expected: exit 0.

```bash
git add src/components/AssetImage.astro src/components/ProductCard.astro src/components/TeamCard.astro src/components/StatCounter.astro src/components/ClientMarquee.astro
git commit -m "feat: add reusable card, stat counter, marquee, and asset-image components"
```

---

### Task 7: Home page

**Files:**
- Modify: `src/pages/index.astro` (full build-out)

**Interfaces:**
- Consumes: `company`, `products`, `services`, `ProductCard`, `StatCounter`, `ClientMarquee`, `AssetImage`, `Layout`.

- [ ] **Step 1: Build out `src/pages/index.astro`**

```astro
---
import Layout from '@/layouts/Layout.astro';
import AssetImage from '@/components/AssetImage.astro';
import ProductCard from '@/components/ProductCard.astro';
import StatCounter from '@/components/StatCounter.astro';
import ClientMarquee from '@/components/ClientMarquee.astro';
import { company } from '@/data/company';
import { products } from '@/data/products';

const title = 'EMS Technologies — Peters Conformal Coatings & ESD Solutions, India';
const description = 'Exclusive India distributor for Lackwerke Peters ELPEGUARD® conformal coatings, ESD packing solutions and selective coating machines. Hyderabad-based, since 2011.';
---
<Layout title={title} description={description} path="/">
  <!-- Hero -->
  <section class="relative overflow-hidden bg-gradient-to-br from-brand-900 to-brand-600 text-white">
    <div class="container-x grid lg:grid-cols-2 gap-10 items-center py-20 lg:py-28">
      <div>
        <p class="text-accent-500 font-semibold uppercase tracking-wider text-sm">Exclusive Peters distributor · India</p>
        <h1 class="heading mt-4 text-4xl sm:text-5xl leading-tight">High-tech conformal coatings & ESD solutions for electronics</h1>
        <p class="mt-5 text-lg text-brand-100/90">EMS Technologies has been efficiently penetrating the Indian market with Peters products at a high success rate — coatings, packing and coating job work under one roof.</p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a href="/products/" class="btn-primary bg-accent-500 hover:bg-accent-600">Explore Products</a>
          <a href="/contact-us/" class="btn-outline border-white text-white hover:bg-white/10">Contact Us</a>
        </div>
      </div>
      <div class="relative">
        <AssetImage name="hero1.png" alt="Conformal coated printed circuit board" width={640} height={520} class="rounded-2xl shadow-2xl w-full object-cover" />
      </div>
    </div>
  </section>

  <!-- About intro -->
  <section class="section container-x grid lg:grid-cols-2 gap-12 items-center">
    <AssetImage name="home-about.jpg" alt="EMS Technologies conformal coating operations" width={600} height={450} class="rounded-2xl shadow-md w-full object-cover" />
    <div>
      <h2 class="heading text-3xl text-brand-900">Global-leader coatings, delivered and supported in India</h2>
      <p class="mt-4 text-brand-900/75">EMS Technologies, based in Hyderabad, Telangana, is the exclusive India distributor for M/s Lackwerke Peters GmbH &amp; Co. KG. From coatings for PCB manufacture to protection of assembled electronics, Peters is a global leader in electronics-related high-tech coatings for automotive, aerospace, industrial, medical and LED applications.</p>
      <a href="/about-us/" class="btn-primary mt-6">Know more</a>
    </div>
  </section>

  <!-- Stats -->
  <section class="section bg-brand-50">
    <div class="container-x">
      <h2 class="heading text-center text-3xl text-brand-900">We are experts in this field</h2>
      <div class="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <StatCounter value={company.stats.projects} label="Projects Completed" />
        <StatCounter value={company.stats.products} label="Number of Products" />
        <StatCounter value={company.stats.clients} label="Number of Clients" />
      </div>
    </div>
  </section>

  <!-- Products grid -->
  <section class="section container-x">
    <h2 class="heading text-3xl text-brand-900 text-center">Our Products & Services</h2>
    <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => <ProductCard title={p.title} href={p.href} img={p.img} blurb={p.blurb} />)}
    </div>
  </section>

  <!-- Clients -->
  <section class="section bg-brand-50">
    <div class="container-x">
      <h2 class="heading text-3xl text-brand-900 text-center">Our Clients</h2>
      <div class="mt-10"><ClientMarquee /></div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section container-x">
    <div class="rounded-3xl bg-brand-900 text-white px-8 py-14 text-center">
      <h2 class="heading text-3xl">Need conformal coating or ESD packing?</h2>
      <p class="mt-3 text-brand-100/85">Talk to our engineers for the right solution for your assembly.</p>
      <a href="/contact-us/" class="btn-primary bg-accent-500 hover:bg-accent-600 mt-6">Get in touch</a>
    </div>
  </section>
</Layout>
```

- [ ] **Step 2: Build and verify**

Run: `npm run build && npm run preview`
Expected: hero, stats counting on scroll, product cards, client marquee all render; responsive at 360px and 1440px.

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: build out home page"
```

---

### Task 8: About page

**Files:**
- Create: `src/pages/about-us/index.astro`

**Interfaces:**
- Consumes: `company`, `team`, `StatCounter`, `TeamCard`, `AssetImage`, `Layout`.

- [ ] **Step 1: Create `src/pages/about-us/index.astro`**

```astro
---
import Layout from '@/layouts/Layout.astro';
import AssetImage from '@/components/AssetImage.astro';
import StatCounter from '@/components/StatCounter.astro';
import TeamCard from '@/components/TeamCard.astro';
import { company } from '@/data/company';
import { team } from '@/data/team';

const title = 'About EMS Technologies — Peters Distributor in India Since 2011';
const description = 'EMS Technologies is the exclusive India distributor for Lackwerke Peters, with 10+ years in conformal coating, 30+ trained engineers, and manufacturing plants in Hyderabad and Cochin.';
---
<Layout title={title} description={description} path="/about-us/">
  <section class="bg-brand-900 text-white">
    <div class="container-x py-16"><h1 class="heading text-4xl">About Us</h1></div>
  </section>

  <section class="section container-x grid lg:grid-cols-2 gap-12 items-start">
    <AssetImage name="home-intro.jpg" alt="EMS Technologies team at work" width={600} height={450} class="rounded-2xl shadow-md w-full object-cover" />
    <div class="space-y-4 text-brand-900/80">
      <p class="text-lg font-semibold text-brand-900">EMS Technologies, based in Hyderabad, Telangana, is the exclusive India distributor for M/s Lackwerke Peters GmbH &amp; Co. KG.</p>
      <p>EMS Technologies is a proprietary concern and the exclusive distributor for M/s Lackwerke Peters GmbH, Germany, in India since 2011. Lackwerke Peters is part of the Peters Group based in Kempen, Germany; EMS represents them in India and supports all leading clients locally. Peters is a global leader in electronics-related high-tech coatings for automotive, aerospace, industrial, medical and LED applications.</p>
      <p>Headed by electronics professionals with in-depth knowledge of conformal coating products and processes, EMS brings 10+ years of expertise, supplying coatings and delivering conformal coating job work. Our qualified team of 30+ members handles job work at multiple client locations, all trained under the guidance of experts from Lackwerke Peters.</p>
      <p>EMS also supplies selective conformal coating line equipment from AUTOLEADER (China) and glue dispensing, screwdriver and soldering machines from Topbest (China). We operate our own manufacturing plants in Hyderabad, Telangana and Cochin, Kerala for ESD PET/HIPS trays, anti-static bubble bags, metallic static bags and all electronics packing materials since 2015.</p>
    </div>
  </section>

  <section class="section bg-brand-50">
    <div class="container-x grid grid-cols-1 sm:grid-cols-3 gap-10">
      <StatCounter value={company.stats.projects} label="Projects Completed" />
      <StatCounter value={company.stats.products} label="Number of Products" />
      <StatCounter value={company.stats.clients} label="Number of Clients" />
    </div>
  </section>

  <section class="section container-x">
    <h2 class="heading text-3xl text-brand-900 text-center">Our Team</h2>
    <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {team.map((m) => <TeamCard name={m.name} role={m.role} email={m.email} img={m.img} />)}
    </div>
  </section>
</Layout>
```

- [ ] **Step 2: Build and commit**

Run: `npm run build`
Expected: `/about-us/` renders story + stats + 6 team cards.

```bash
git add src/pages/about-us/index.astro
git commit -m "feat: build out about page with company story and team"
```

---

### Task 9: Products page

**Files:**
- Create: `src/pages/products/index.astro`

**Interfaces:**
- Consumes: `products`, `ProductCard`, `Layout`.

- [ ] **Step 1: Create `src/pages/products/index.astro`**

```astro
---
import Layout from '@/layouts/Layout.astro';
import ProductCard from '@/components/ProductCard.astro';
import { products } from '@/data/products';

const title = 'Products — Conformal Coatings, ESD Bags & Coating Machines | EMS';
const description = 'EMS Technologies products: ELPEGUARD conformal coatings, ESD bags, PP corrugated trays & bins, EVA conductive foam trays, pallets, ESD thermoforming trays and selective coating machines.';
---
<Layout title={title} description={description} path="/products/">
  <section class="bg-brand-900 text-white"><div class="container-x py-16"><h1 class="heading text-4xl">Products</h1></div></section>
  <section class="section container-x">
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => <ProductCard title={p.title} href={p.href} img={p.img} blurb={p.blurb} />)}
    </div>
  </section>
</Layout>
```

- [ ] **Step 2: Build and commit**

Run: `npm run build`
Expected: `/products/` shows 7 cards.

```bash
git add src/pages/products/index.astro
git commit -m "feat: build out products category page"
```

---

### Task 10: Conformal Coatings page

**Files:**
- Create: `src/pages/conformal/index.astro`

**Interfaces:**
- Consumes: `coatings`, `coatingIntro`, `ProductCard`, `Layout`. Adds `Product` + `BreadcrumbList` JSON-LD.

- [ ] **Step 1: Create `src/pages/conformal/index.astro`**

```astro
---
import Layout from '@/layouts/Layout.astro';
import ProductCard from '@/components/ProductCard.astro';
import { coatings, coatingIntro } from '@/data/coatings';

const title = 'ELPEGUARD® Conformal Coatings — Acrylic, PU, Silicone | EMS';
const description = 'Peters ELPEGUARD conformal coatings distributed in India by EMS Technologies: acrylic, polyurethane, silicone, thick-film curing and aqua coatings for PCB protection.';
const jsonLd = [{
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://emstechnologies.in/' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://emstechnologies.in/products/' },
    { '@type': 'ListItem', position: 3, name: 'Conformal Coatings', item: 'https://emstechnologies.in/conformal/' },
  ],
}];
---
<Layout title={title} description={description} path="/conformal/" jsonLd={jsonLd}>
  <section class="bg-brand-900 text-white"><div class="container-x py-16">
    <h1 class="heading text-4xl">Conformal Coatings</h1>
    <p class="mt-4 max-w-2xl text-brand-100/85">{coatingIntro}</p>
  </div></section>
  <section class="section container-x">
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {coatings.map((c) => <ProductCard title={c.title} href="/contact-us/" img={c.img} blurb={c.blurb} />)}
    </div>
  </section>
</Layout>
```

- [ ] **Step 2: Build and commit**

Run: `npm run build`
Expected: `/conformal/` shows intro + 5 coating cards; JSON-LD includes BreadcrumbList.

```bash
git add src/pages/conformal/index.astro
git commit -m "feat: build out conformal coatings page with breadcrumb schema"
```

---

### Task 11: ESD Bags page

**Files:**
- Create: `src/pages/EsdBags/index.astro`

**Interfaces:**
- Consumes: `esdBags`, `ProductCard`, `Layout`.

- [ ] **Step 1: Create `src/pages/EsdBags/index.astro`**

```astro
---
import Layout from '@/layouts/Layout.astro';
import ProductCard from '@/components/ProductCard.astro';
import { esdBags } from '@/data/esdBags';

const title = 'ESD Bags — Bubble, Static Shielding, LDPE Pink & Conductive | EMS';
const description = 'ESD packing bags manufactured by EMS Technologies: anti-static bubble bags, static shielding bags, LDPE pink bags and conductive grid bags for safe electronics packing.';
---
<Layout title={title} description={description} path="/EsdBags/">
  <section class="bg-brand-900 text-white"><div class="container-x py-16"><h1 class="heading text-4xl">ESD Bags</h1></div></section>
  <section class="section container-x">
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {esdBags.map((b) => <ProductCard title={b.title} href="/contact-us/" img={b.img} blurb={b.blurb} />)}
    </div>
  </section>
</Layout>
```

- [ ] **Step 2: Build and commit**

Run: `npm run build`
Expected: `/EsdBags/` shows 4 cards.

```bash
git add src/pages/EsdBags/index.astro
git commit -m "feat: build out ESD bags page"
```

---

### Task 12: Selective Coating Machines page

**Files:**
- Create: `src/pages/SCMachines/index.astro`

**Interfaces:**
- Consumes: `machines`, `AssetImage`, `Layout`.

- [ ] **Step 1: Create `src/pages/SCMachines/index.astro`**

```astro
---
import Layout from '@/layouts/Layout.astro';
import AssetImage from '@/components/AssetImage.astro';
import { machines } from '@/data/machines';

const title = 'Selective Coating Machines — ALTD-450B & ALTD-450J | EMS';
const description = 'Automated selective conformal coating machines supplied by EMS Technologies: ALTD-450B and ALTD-450J with precision atomization, auto calibration and integrated UV inspection.';
---
<Layout title={title} description={description} path="/SCMachines/">
  <section class="bg-brand-900 text-white"><div class="container-x py-16">
    <h1 class="heading text-4xl">Selective Coating Machines</h1>
    <p class="mt-4 max-w-2xl text-brand-100/85">Professional coating equipment offering complete automation, reliability, quality and efficiency to enhance the quality of your end product.</p>
  </div></section>
  <section class="section container-x space-y-16">
    {machines.map((m, i) => (
      <div class={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <AssetImage name={m.img} alt={`${m.model} selective coating machine`} width={560} height={480} class="rounded-2xl shadow-md w-full object-contain bg-white p-4" />
        <div>
          <h2 class="heading text-2xl text-brand-900">{m.model}</h2>
          <ul class="mt-4 space-y-2 text-sm text-brand-900/75">
            {m.features.map((f) => (<li class="flex gap-2"><span class="text-accent-500">▪</span><span>{f}</span></li>))}
          </ul>
          {m.datasheet && <a href={m.datasheet} class="btn-outline mt-6" target="_blank" rel="noopener">Data Sheet (PDF)</a>}
        </div>
      </div>
    ))}
  </section>
</Layout>
```

- [ ] **Step 2: Build and commit**

Run: `npm run build`
Expected: `/SCMachines/` shows both machines with feature lists and datasheet links, alternating layout.

```bash
git add src/pages/SCMachines/index.astro
git commit -m "feat: build out selective coating machines page"
```

---

### Task 13: Services page

**Files:**
- Create: `src/pages/services/index.astro`

**Interfaces:**
- Consumes: `services`, `serviceIntro`, `AssetImage`, `Layout`.

- [ ] **Step 1: Create `src/pages/services/index.astro`**

```astro
---
import Layout from '@/layouts/Layout.astro';
import AssetImage from '@/components/AssetImage.astro';
import { services, serviceIntro } from '@/data/services';

const title = 'Conformal Coating Job Work — On-Site Coating Services | EMS';
const description = 'EMS Technologies provides end-to-end conformal coating job work: application, UV optical inspection, curing, thickness testing, removal and final inspection by 30+ trained engineers.';
---
<Layout title={title} description={description} path="/services/">
  <section class="bg-brand-900 text-white"><div class="container-x py-16">
    <h1 class="heading text-4xl">Conformal Coating Job Work</h1>
    <p class="mt-4 max-w-3xl text-brand-100/85">{serviceIntro}</p>
  </div></section>
  <section class="section container-x">
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => (
        <article class="rounded-2xl border border-brand-100 bg-white shadow-sm overflow-hidden">
          <div class="aspect-[4/3] overflow-hidden">
            <AssetImage name={s.img} alt={s.title} width={480} height={360} class="h-full w-full object-cover" />
          </div>
          <div class="p-5">
            <h3 class="heading text-lg text-brand-900">{s.title}</h3>
            <p class="mt-2 text-sm text-brand-900/70">{s.body}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
</Layout>
```

- [ ] **Step 2: Build and commit**

Run: `npm run build`
Expected: `/services/` shows intro + 6 process cards.

```bash
git add src/pages/services/index.astro
git commit -m "feat: build out conformal coating job work services page"
```

---

### Task 14: Contact page + form

**Files:**
- Create: `src/pages/contact-us/index.astro`

**Interfaces:**
- Consumes: `company`, `Layout`. Form posts to a configurable endpoint via `PUBLIC_CONTACT_ENDPOINT` env (falls back to `mailto:`).

- [ ] **Step 1: Create `src/pages/contact-us/index.astro`**

```astro
---
import Layout from '@/layouts/Layout.astro';
import { company } from '@/data/company';

const title = 'Contact EMS Technologies — Hyderabad, Telangana';
const description = 'Contact EMS Technologies for Peters conformal coatings, ESD packing and coating job work. Call +91-9866157789 or email info@emstechnologies.in. Based in Hyderabad, Telangana.';
const endpoint = import.meta.env.PUBLIC_CONTACT_ENDPOINT ?? '';
---
<Layout title={title} description={description} path="/contact-us/">
  <section class="bg-brand-900 text-white"><div class="container-x py-16"><h1 class="heading text-4xl">Contact Us</h1>
    <p class="mt-3 text-brand-100/85 max-w-2xl">Tell us about your conformal coating or ESD packing requirement and our engineers will get back to you promptly.</p>
  </div></section>

  <section class="section container-x grid lg:grid-cols-2 gap-12">
    <div>
      <h2 class="heading text-2xl text-brand-900">Send us a message</h2>
      <p class="text-sm text-brand-900/60 mt-1">We'll get back to you as soon as possible.</p>
      <form id="contactForm" class="mt-6 space-y-4" method="POST" action={endpoint || undefined}>
        <div class="grid sm:grid-cols-2 gap-4">
          <input required name="name" placeholder="Full name" class="w-full rounded-lg border border-brand-100 px-4 py-3 min-h-[44px]" />
          <input required type="email" name="email" placeholder="Email" class="w-full rounded-lg border border-brand-100 px-4 py-3 min-h-[44px]" />
          <input name="mobile" placeholder="Mobile" class="w-full rounded-lg border border-brand-100 px-4 py-3 min-h-[44px]" />
          <input name="company" placeholder="Company name" class="w-full rounded-lg border border-brand-100 px-4 py-3 min-h-[44px]" />
        </div>
        <textarea required name="message" rows="5" placeholder="Message" class="w-full rounded-lg border border-brand-100 px-4 py-3"></textarea>
        <button type="submit" class="btn-primary">Send message</button>
        <p id="formNote" class="text-sm text-brand-500 hidden">Thanks — your message has been prepared.</p>
      </form>
    </div>

    <div class="space-y-6">
      <div>
        <h3 class="font-semibold text-brand-900">Address</h3>
        <p class="text-brand-900/75">{company.location}</p>
      </div>
      <div>
        <h3 class="font-semibold text-brand-900">Call us</h3>
        {company.phones.map((p) => (<p><a class="text-brand-500 hover:underline" href={`tel:${p.replaceAll('-', '')}`}>{p}</a></p>))}
      </div>
      <div>
        <h3 class="font-semibold text-brand-900">Mail us</h3>
        <a class="text-brand-500 hover:underline" href={`mailto:${company.email}`}>{company.email}</a>
      </div>
      <iframe title="EMS Technologies location" class="w-full h-64 rounded-2xl border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=Hyderabad,Telangana,India&output=embed"></iframe>
    </div>
  </section>
</Layout>
<script is:inline define:vars={{ endpoint, email: company.email }}>
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  form?.addEventListener('submit', (e) => {
    if (endpoint) return; // real endpoint handles POST
    e.preventDefault();
    const f = new FormData(form);
    const body = encodeURIComponent(`Name: ${f.get('name')}\nEmail: ${f.get('email')}\nMobile: ${f.get('mobile')}\nCompany: ${f.get('company')}\n\n${f.get('message')}`);
    note.classList.remove('hidden');
    window.location.href = `mailto:${email}?subject=Website enquiry&body=${body}`;
  });
</script>
```

- [ ] **Step 2: Build and verify**

Run: `npm run build && npm run preview`
Expected: `/contact-us/` shows form + real address/phones/email + map. With no endpoint set, submitting opens a prefilled `mailto:`.

- [ ] **Step 3: Commit**

```bash
git add src/pages/contact-us/index.astro
git commit -m "feat: build out contact page with form and mailto fallback"
```

---

### Task 15: 404, robots, static assets, favicon/social card

**Files:**
- Create: `src/pages/404.astro`, `public/robots.txt`, `public/favicon.png`, `public/logo.png`, `public/social-card.jpg`

**Interfaces:**
- Consumes: `Layout`. `public/logo.png` backs the `Organization` JSON-LD logo URL; `public/social-card.jpg` backs OG image.

- [ ] **Step 1: Create `src/pages/404.astro`**

```astro
---
import Layout from '@/layouts/Layout.astro';
---
<Layout title="Page not found — EMS Technologies" description="The page you are looking for could not be found." path="/404">
  <section class="section container-x text-center">
    <p class="text-accent-500 font-semibold">404</p>
    <h1 class="heading text-4xl mt-2 text-brand-900">Page not found</h1>
    <p class="mt-3 text-brand-900/70">The page you're looking for doesn't exist or has moved.</p>
    <a href="/" class="btn-primary mt-6">Back to home</a>
  </section>
</Layout>
```

- [ ] **Step 2: Create `public/robots.txt`**

```
User-agent: *
Allow: /
Sitemap: https://emstechnologies.in/sitemap-index.xml
```

- [ ] **Step 3: Provide `public/logo.png`, `public/favicon.png`, `public/social-card.jpg`**

Copy from downloaded assets:

```bash
cp src/assets/logo.png public/logo.png
cp src/assets/logo.png public/favicon.png
cp src/assets/home-about.jpg public/social-card.jpg
```

(If `src/assets/logo.png` is missing from the download, source a 512×512 PNG logo before proceeding — the JSON-LD and favicon reference it.)

- [ ] **Step 4: Build and verify sitemap + robots**

Run: `npm run build`
Expected: `dist/404.html`, `dist/robots.txt`, and `dist/sitemap-index.xml` all present.

- [ ] **Step 5: Commit**

```bash
git add src/pages/404.astro public/robots.txt public/logo.png public/favicon.png public/social-card.jpg
git commit -m "feat: add 404 page, robots.txt, favicon, logo and social card"
```

---

### Task 16: Final verification pass (responsive, SEO, build)

**Files:**
- Create: `README.md` (build/deploy instructions)

**Interfaces:** none — verification only.

- [ ] **Step 1: Full clean build**

Run: `rm -rf dist && npm run check && npm run build`
Expected: `astro check` 0 errors; build exit 0. All routes present: `dist/index.html`, `dist/about-us/index.html`, `dist/products/index.html`, `dist/conformal/index.html`, `dist/EsdBags/index.html`, `dist/SCMachines/index.html`, `dist/services/index.html`, `dist/contact-us/index.html`, `dist/404.html`.

- [ ] **Step 2: Verify SEO per page**

For each `dist/**/index.html`, confirm a unique `<title>`, a `<meta name="description">`, a `<link rel="canonical">`, and at least one `application/ld+json` block. Confirm `Organization` + `LocalBusiness` present site-wide and `BreadcrumbList` on `/conformal/`.

- [ ] **Step 3: Responsive smoke test**

Run: `npm run preview`
In browser devtools, test 360px, 768px, 1024px, 1440px on home, products, contact. Expected: no horizontal scroll, drawer works <1024px, grids reflow, tap targets ≥44px.

- [ ] **Step 4: Lighthouse**

Run Lighthouse (Chrome devtools) on the previewed home + a product page.
Expected: SEO ≥ 95, Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95. Fix any flagged alt-text/contrast/meta issues before committing.

- [ ] **Step 5: Create `README.md`**

```markdown
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
original site (/about-us/, /products/, /conformal/, /EsdBags/, /SCMachines/,
/services/, /contact-us/).

## Contact form
Set `PUBLIC_CONTACT_ENDPOINT` (e.g. a Formspree URL) to POST submissions.
Without it, the form falls back to a prefilled mailto: to info@emstechnologies.in.
```

- [ ] **Step 6: Commit**

```bash
git add README.md
git commit -m "docs: add build and deploy README; final verification pass"
```

---

## Self-Review

**Spec coverage:** Astro static (T1) ✓ · assets download/reuse (T2) ✓ · data modules (T3) ✓ · SEO + JSON-LD Organization/LocalBusiness/Breadcrumb (T4, T10) ✓ · sitemap + robots (T1, T15) ✓ · responsive header/drawer (T5) ✓ · all 9 routes (T7–T15) ✓ · stats real copy (T3/company) ✓ · team (T8) ✓ · client marquee (T6/T7) ✓ · machines feature lists (T12) ✓ · contact form + real info, lorem replaced (T14) ✓ · responsive + Lighthouse ≥95 (T16) ✓ · en-IN lang (T4) ✓.

**Placeholder scan:** No TBD/TODO. Every code step shows full content. AssetImage provides real SVG fallback for any missing download — not a placeholder deferral.

**Type consistency:** `AssetImage` prop `name` used consistently across ProductCard/TeamCard/StatCounter/marquee/pages. `company.stats.{projects,products,clients}` matches usage in T7/T8. `machines[].{model,img,features,datasheet}` matches T12. `SEO`/`Layout` prop shape `{title,description,path,image?,jsonLd?}` identical across all page calls. `nav` shape `{label,href,children?}` matches Header/Footer usage.
