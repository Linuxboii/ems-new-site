/** Index of the buyer-education library. Each entry has its own page under
 *  /resources/; this array drives the hub page, the nav and the sitemap ordering. */
export const resources = [
  {
    title: 'How to choose a conformal coating for your PCB',
    href: '/resources/conformal-coating-selection-guide/',
    kind: 'Buyer’s guide',
    blurb: 'A decision path from the environment the board has to survive, through chemistry and application method, to the thickness and inspection regime that follows from it.',
  },
  {
    title: 'Acrylic vs polyurethane vs silicone conformal coating',
    href: '/resources/acrylic-vs-polyurethane-vs-silicone/',
    kind: 'Comparison',
    blurb: 'Side-by-side on temperature range, chemical and moisture resistance, reworkability, cure behaviour and what each chemistry actually costs you in production.',
  },
  {
    title: 'Conformal coating standards: IPC-A-610, IPC-CC-830B and MIL-I-46058C',
    href: '/resources/conformal-coating-standards/',
    kind: 'Standards explainer',
    blurb: 'What each standard governs, how acceptance classes work, why MIL-I-46058C is no longer the reference it once was, and what to put on a drawing.',
  },
  {
    title: 'Conformal coating vs potting and encapsulation',
    href: '/resources/conformal-coating-vs-encapsulation/',
    kind: 'Comparison',
    blurb: 'Two different answers to environmental protection. Where a thin film is enough, where a potted assembly is the only option, and what each costs in weight, heat and repairability.',
  },
  {
    title: 'ESD and electronics packaging glossary',
    href: '/resources/esd-packaging-glossary/',
    kind: 'Glossary',
    blurb: 'ESD, MBB, VCI, EPE, thermoforming, Faraday cage, surface resistivity — the terms that appear on an ESD packing quotation, defined plainly.',
  },
] as const;
