export const company = {
  name: 'EMS Technologies',
  legalName: 'EMS Technologies',
  tagline: 'India distributor for Lackwerke Peters high-tech electronics coatings',
  since: 2011,
  /** Year the in-house ESD packing plants (Hyderabad + Cochin) started up. */
  manufacturingSince: 2015,
  location: 'Maheswaram, Ranga Reddy District, Hyderabad, Telangana 501510, India',
  phones: ['+91-9394116660'],
  email: 'info@emstechnologies.in',
  principalEmail: 'vikramp@emstechnologies.in',
  /* `district`, `metro` and `postalCode` are consumed by the PostalAddress node in
     SEO.astro; `mapUrl` / `plusCode` by the Place node and the footer map link. */
  address: {
    locality: 'Maheswaram',
    district: 'Ranga Reddy District',
    metro: 'Hyderabad',
    region: 'Telangana',
    regionCode: 'IN-TG',
    postalCode: '501510',
    country: 'IN',
  },
  geo: { lat: 17.1815452, lng: 78.506483 },
  plusCode: '7J9W5GJ4+JH9',
  mapUrl: 'https://maps.app.goo.gl/iiCpggDXyqzfSdMC7',
  /** Principal whose range EMS distributes in India — a key entity link for AI answer engines. */
  principal: {
    name: 'Lackwerke Peters GmbH & Co. KG',
    country: 'Germany',
    city: 'Kempen',
    founded: 1955,
    url: 'https://www.peters.de/',
  },
  /** Official profiles for Organization.sameAs (Google Business Profile, LinkedIn
   *  company page, IndiaMART, Justdial, YouTube…). Emitted only when non-empty, so
   *  add real URLs here as each profile goes live. Never add a profile that EMS doesn't control. */
  sameAs: [] as readonly string[],
  plants: ['Hyderabad, Telangana', 'Cochin, Kerala'],
  engineers: '30+',
  stats: { clients: '500+', materials: '50+', products: '200+' },
  description:
    'EMS Technologies, based in Hyderabad, Telangana, is an India distributor for M/s Lackwerke Peters GmbH & Co. KG (Germany) since 2011, supplying ELPEGUARD conformal coatings, ESD packing solutions, and selective coating machines, and providing on-site conformal coating job work.',
} as const;
