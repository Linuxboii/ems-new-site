/** Shared JSON-LD builders.
 *
 *  Every page passes its nodes to `<Layout jsonLd={[...]} />`, which merges them
 *  into the same @graph as the sitewide Organization / LocalBusiness / Place
 *  nodes emitted by SEO.astro. Product, Service and Article nodes reference the
 *  organization by @id rather than repeating it, so an answer engine resolves
 *  "who sells this" to one entity instead of several near-duplicates.
 */

export const SITE = 'https://emstechnologies.in';
export const ORG_ID = `${SITE}/#organization`;
export const PRINCIPAL_ID = `${SITE}/#principal`;

const abs = (path: string) => new URL(path, SITE).href;

export function breadcrumb(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: abs(t.path),
    })),
  };
}

export interface ProductNode {
  name: string;
  description: string;
  /** Anchor or page the product is described on. */
  path: string;
  /** ELPEGUARD for the Peters coatings; otherwise the EMS house brand. */
  brand?: string;
  /** true when Lackwerke Peters manufactures it, false when EMS does. */
  peters?: boolean;
  category?: string;
  material?: string;
  additionalProperty?: { name: string; value: string }[];
}

/** A Product node. Pricing is quote-only, and Google's Rich Results Test flags
 *  every Offer that has no `price` as invalid, so no Offer is emitted.
 *  Inventing a price would be worse than leaving the Offer out. The seller
 *  relationship is carried by `manufacturer` / the sitewide Organization instead. */
export function product(p: ProductNode) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${abs(p.path)}#${p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    name: p.name,
    description: p.description,
    url: abs(p.path),
    ...(p.category ? { category: p.category } : {}),
    ...(p.material ? { material: p.material } : {}),
    brand: { '@type': 'Brand', name: p.brand ?? 'EMS Technologies' },
    manufacturer: p.peters ? { '@id': PRINCIPAL_ID } : { '@id': ORG_ID },
    ...(p.additionalProperty?.length
      ? {
          additionalProperty: p.additionalProperty.map((a) => ({
            '@type': 'PropertyValue',
            name: a.name,
            value: a.value,
          })),
        }
      : {}),
  };
}

/** Wraps a set of Product nodes in an ItemList so a category page describes a
 *  range rather than pretending to be a single SKU. */
export function productList(name: string, path: string, items: ProductNode[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    url: abs(path),
    numberOfItems: items.length,
    itemListElement: items.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: product(p),
    })),
  };
}

export interface ServiceNode {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  /** Named steps, rendered separately as a HowTo-style process list on the page. */
  steps?: { name: string; description: string }[];
}

export function service(s: ServiceNode) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${abs(s.path)}#service`,
    name: s.name,
    description: s.description,
    url: abs(s.path),
    ...(s.serviceType ? { serviceType: s.serviceType } : {}),
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'India' },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: abs(s.path),
      servicePhone: '+91-9394116660',
    },
    ...(s.steps?.length
      ? {
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${s.name} — process`,
            itemListElement: s.steps.map((st, i) => ({
              '@type': 'Offer',
              position: i + 1,
              itemOffered: { '@type': 'Service', name: st.name, description: st.description },
            })),
          },
        }
      : {}),
  };
}

export function faq(entries: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((e) => ({
      '@type': 'Question',
      name: e.q,
      acceptedAnswer: { '@type': 'Answer', text: e.a },
    })),
  };
}

/** Editorial / buyer-education content. `datePublished` and an author that
 *  resolves to the organization are the E-E-A-T signals the audit called out. */
export function article(a: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  section?: string;
  keywords?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${abs(a.path)}#article`,
    headline: a.headline,
    description: a.description,
    url: abs(a.path),
    mainEntityOfPage: abs(a.path),
    datePublished: a.datePublished,
    dateModified: a.dateModified ?? a.datePublished,
    inLanguage: 'en-IN',
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    ...(a.section ? { articleSection: a.section } : {}),
    ...(a.keywords?.length ? { keywords: a.keywords.join(', ') } : {}),
  };
}

/** Definitions page (glossary). DefinedTermSet is well understood by answer
 *  engines and is a cheap way to own a wide net of informational queries. */
export function definedTermSet(name: string, path: string, terms: { term: string; definition: string }[]) {
  const setId = `${abs(path)}#glossary`;
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': setId,
    name,
    url: abs(path),
    hasDefinedTerm: terms.map((t) => ({
      '@type': 'DefinedTerm',
      name: t.term,
      description: t.definition,
      inDefinedTermSet: { '@id': setId },
    })),
  };
}

/** A downloadable document (TDS/SDS/brochure) — the form answer engines cite
 *  directly when asked a specification question. */
export function digitalDocument(d: { name: string; description: string; file: string; format?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DigitalDocument',
    name: d.name,
    description: d.description,
    url: abs(d.file),
    encodingFormat: d.format ?? 'application/pdf',
    publisher: { '@id': ORG_ID },
    isAccessibleForFree: true,
  };
}

export function collectionPage(c: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: c.name,
    description: c.description,
    url: abs(c.path),
    isPartOf: { '@id': `${SITE}/#website` },
    publisher: { '@id': ORG_ID },
  };
}
