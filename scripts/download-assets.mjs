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
