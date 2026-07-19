export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us/' },
  {
    label: 'Products', href: '/products/',
    children: [
      { label: 'Conformal Coatings', href: '/conformal/' },
      { label: 'ESD Bags', href: '/EsdBags/' },
      { label: 'EVA Bins', href: '/products/pp-bins/' },
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
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Contact', href: '/contact-us/' },
];
