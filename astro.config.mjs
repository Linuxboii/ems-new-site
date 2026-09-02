import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://emstechnologies.in';

// Pages that should carry more weight than the default 0.7 in the sitemap.
// Everything else falls back to the value set in `serialize` below.
const PRIORITY = {
  '/': 1.0,
  '/conformal/': 0.9,
  '/EsdBags/': 0.9,
  '/services/': 0.9,
  '/products/': 0.9,
  '/services/conformal-coating-job-work/': 0.85,
  '/services/esd-paint-job-work/': 0.85,
  '/SCMachines/': 0.8,
  '/contact-us/': 0.8,
  '/about-us/': 0.8,
};

export default defineConfig({
  site: SITE,
  output: 'static',
  build: { format: 'directory' },
  // Stale URL still indexed by Google but no longer in the nav or sitemap.
  // Static output renders these as a meta-refresh stub with a canonical link,
  // which is the strongest redirect available on static hosting.
  redirects: {
    '/our-equipment/': '/SCMachines/',
    '/our-equipment': '/SCMachines/',
  },
  integrations: [
    tailwind(),
    sitemap({
      // Search Console and AI crawlers both use lastmod to decide what to re-fetch;
      // the previous sitemap shipped none at all.
      lastmod: new Date(),
      changefreq: 'monthly',
      // Keep the redirect stub out of the index — it exists only for old inbound links.
      filter: (page) => !page.includes('/our-equipment'),
      serialize(item) {
        const path = new URL(item.url).pathname;
        item.priority = PRIORITY[path] ?? 0.7;
        return item;
      },
    }),
  ],
});
