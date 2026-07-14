export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us/' },
  {
    label: 'Products', href: '/products/',
    children: [
      { label: 'Conformal Coatings', href: '/conformal/' },
      { label: 'ESD Bags', href: '/EsdBags/' },
      { label: 'PP Corrugated Trays & Bins', href: '/products/pp-bins/' },
      { label: 'EVA Conductive Foam Trays', href: '/products/conductive-foam-trays/' },
      { label: 'ESD Thermoforming Trays', href: '/products/thermoforming-trays/' },
      { label: 'Selective Coating Machines', href: '/SCMachines/' },
    ],
  },
  { label: 'Services', href: '/services/' },
  { label: 'Contact', href: '/contact-us/' },
];
