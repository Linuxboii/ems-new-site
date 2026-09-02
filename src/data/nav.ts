export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us/' },
  {
    label: 'Products', href: '/products/',
    children: [
      { label: 'Conformal Coatings', href: '/conformal/' },
      { label: 'ESD Bags', href: '/EsdBags/' },
      { label: 'EVA Bins/Trays', href: '/products/pp-bins/' },
      { label: 'PP Corrugated Trays and Bins', href: '/products/pp-corrugated/' },
      { label: 'EPE Foam Trays', href: '/products/conductive-foam-trays/' },
      { label: 'ESD Thermoforming Trays', href: '/products/thermoforming-trays/' },
      { label: 'Selective Coating Machines', href: '/SCMachines/' },
    ],
  },
  {
    label: 'Services', href: '/services/',
    children: [
      { label: 'Conformal Coating Job Work', href: '/services/conformal-coating-job-work/' },
      { label: 'ESD Paint Job Work', href: '/services/esd-paint-job-work/' },
    ],
  },
  {
    label: 'Industries', href: '/industries/',
    children: [
      { label: 'Automotive Electronics', href: '/industries/automotive/' },
      { label: 'Aerospace & Defence', href: '/industries/aerospace-defence/' },
      { label: 'Medical Devices', href: '/industries/medical-devices/' },
      { label: 'LED & Lighting', href: '/industries/led-lighting/' },
    ],
  },
  {
    label: 'Resources', href: '/resources/',
    children: [
      { label: 'Coating Selection Guide', href: '/resources/conformal-coating-selection-guide/' },
      { label: 'Acrylic vs PU vs Silicone', href: '/resources/acrylic-vs-polyurethane-vs-silicone/' },
      { label: 'Coating Standards Explained', href: '/resources/conformal-coating-standards/' },
      { label: 'Coating vs Encapsulation', href: '/resources/conformal-coating-vs-encapsulation/' },
      { label: 'ESD Glossary', href: '/resources/esd-packaging-glossary/' },
      { label: 'Datasheets & Downloads', href: '/downloads/' },
    ],
  },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Contact', href: '/contact-us/' },
];
