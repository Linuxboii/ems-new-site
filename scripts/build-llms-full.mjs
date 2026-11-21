// Post-build step: writes dist/llms-full.txt, the plain-text body of every
// /resources/ guide plus the services pages, so AI answer engines can read the
// technical content in one fetch without parsing HTML.
// Runs after `astro build` (see package.json "build").
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');
const SITE = 'https://emstechnologies.in';
const PAGES = [
  '/resources/conformal-coating-selection-guide/',
  '/resources/acrylic-vs-polyurethane-vs-silicone/',
  '/resources/conformal-coating-standards/',
  '/resources/conformal-coating-vs-encapsulation/',
  '/resources/electronics-packing-bags/',
  '/resources/esd-packaging-glossary/',
  '/services/conformal-coating-job-work/',
  '/services/esd-paint-job-work/',
];

const decode = (s) =>
  s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)));

function toText(html) {
  const main = (html.match(/<main[^>]*>([\s\S]*?)<\/main>/) ?? [, html])[1];
  return decode(
    main
      .replace(/<(script|style|svg|noscript)[\s\S]*?<\/\1>/g, '')
      .replace(/<h1[^>]*>/g, '\n# ')
      .replace(/<h2[^>]*>/g, '\n\n## ')
      .replace(/<h3[^>]*>/g, '\n\n### ')
      .replace(/<li[^>]*>/g, '\n- ')
      .replace(/<\/(td|th)>/g, ' | ')
      .replace(/<(p|tr|div|section|article|br)[^>]*>/g, '\n')
      .replace(/<[^>]+>/g, '')
  )
    .split('\n')
    .map((l) => l.replace(/[ \t]+/g, ' ').trim())
    .filter((l, i, a) => l || (a[i - 1] && a[i - 1].trim()))
    .join('\n')
    .trim();
}

const parts = [
  '# EMS Technologies: full technical content',
  '',
  `> Plain-text copy of the technical guides and service pages on ${SITE}. Summary and facts: ${SITE}/llms.txt`,
];
for (const p of PAGES) {
  const file = path.join(DIST, p, 'index.html');
  if (!fs.existsSync(file)) {
    console.warn(`[llms-full] missing ${p}`);
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');
  const title = decode((html.match(/<title>([^<]*)<\/title>/) ?? [, p])[1]);
  parts.push('', '---', '', `Source: ${SITE}${p}`, `Title: ${title}`, '', toText(html));
}
fs.writeFileSync(path.join(DIST, 'llms-full.txt'), parts.join('\n') + '\n');
console.log(`[llms-full] wrote ${PAGES.length} pages to dist/llms-full.txt`);
