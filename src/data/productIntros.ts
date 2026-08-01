// Opening copy for each Products nav page, rendered by `ProductIntro.astro`
// directly under the hero. Keyed by route so a page pulls its own intro.
export const productIntros: Record<string, string[]> = {
  '/products/': [
    'EMS Technologies supplies two connected halves of PCB protection: the coatings and equipment that protect a board in service, and the ESD packing that protects it on the way there. We have been an India distributor for Lackwerke Peters GmbH & Co. KG of Germany since 2011, working out of Hyderabad, Telangana.',
    'The range below covers ELPEGUARD® conformal coatings, selective coating machines, and ESD packing in bag, bin, foam and thermoformed tray form. Most of the packing is made to your component geometry rather than pulled from a shelf, so a drawing or a sample is usually the fastest way to start.',
  ],

  '/conformal/': [
    'A conformal coating is a thin polymer film applied over a populated board, following the contours of the PCB and its components. That film insulates the conductors and shields the assembly from moisture, dust, condensation, salt spray and chemical attack, which are the conditions that shorten the service life of electronics once they leave the factory.',
    'The ELPEGUARD® range spans acrylic, polyurethane, silicone, thick-film curing and water-based aqua systems, so the coating can be matched to the job rather than the other way round. Which one suits depends on the temperature range the board will see, the chemicals it will meet, whether the assembly has to be reworked later, and whether your line is set up for solvent or water-based chemistry.',
  ],

  '/EsdBags/': [
    'A static discharge too small for a person to feel can still damage or quietly degrade a semiconductor. ESD packing bags are the first line of defence: they stop a charge building on the packaging surface and, in the shielding grades, stop an external discharge reaching the contents at all. We supply bags for bare boards, populated assemblies and loose components, both in transit and in store.',
    'Five types cover most requirements. Pink bubble bags add cushioning against shock alongside an anti-static surface. Static shielding bags carry a metallised layer that forms a Faraday cage around the contents. Aluminium bags — also known as MBB (moisture barrier bags) — are the silver, aluminium-laminated grade that adds a barrier against humidity on top of that shielding. Conductive grid bags use a printed diamond pattern to dissipate charge during storage and transit. LDPE pink bags handle general anti-static packing where shielding and cushioning are not needed.',
    'Alongside them we supply VCI bags, which answer a different problem: corrosion rather than static. The film releases a vapour inside the sealed bag that settles on exposed metal and stops rust forming, so bare leads, connectors, contacts, fasteners and machined parts survive long storage and export runs without being oiled or wrapped.',
  ],

  '/products/pp-bins/': [
    'EVA bins are reusable containers for moving and storing populated boards and loose components between processes. The bin body is anti-static, so parts are not left sitting against a surface that can hold a charge, and each bin carries the electrostatic-sensitive-device marking that tells anyone on the floor what is inside before they open it.',
    'They are built for repeated handling rather than single use: stacking, line-side storage and transport between units. Sizes and internal layouts can be matched to the components they carry, including dividers and foam inserts where parts need to be held apart.',
  ],

  '/products/pp-corrugated/': [
    'PP corrugated trays and bins are made from twin-wall polypropylene sheet, giving a rigid but lightweight container that stands up to repeated handling far better than card. The material is anti-static, so boards and components are not left resting against a surface that can hold a charge, and each unit carries the electrostatic-sensitive-device marking so the floor knows what is inside before it is opened.',
    'They suit line-side storage, stacking and transport between processes, and can be supplied with dividers, partitions and foam inserts to hold parts apart. Footprint, wall height and internal layout are matched to the components they carry, so a drawing or a sample is the fastest way to start.',
  ],

  '/products/conductive-foam-trays/': [
    'EPE foam trays and inserts are cut to the geometry of the component they carry, so each part sits in its own pocket instead of shifting against its neighbours. The foam absorbs shock and vibration in transit while dissipating static continuously, which matters for parts with exposed pins or connectors that bend easily and are sensitive to discharge.',
    'Because the foam is routed to a drawing, the same tray can locate parts for handling, for storage and for presentation to an assembly operator. Pocket layout, depth and tray footprint are all worked to suit your part, so send a drawing or a sample to start.',
  ],

  '/products/thermoforming-trays/': [
    'Thermoformed trays are vacuum-formed from sheet into a tooled shape, giving a rigid tray whose pockets match your component exactly. Compared with cut foam, the pocket walls are thin and consistent, which suits automated line feeding, pick-and-place presentation and dense stacking where every millimetre of height matters.',
    'We form trays in both PET and HIPS. Clear PET keeps the contents visible for inspection and counting without breaking down the stack. Black HIPS is supplied in conductive and anti-static grades for ESD-sensitive parts that need robust, reusable protection. Both are formed to your component drawing.',
  ],

  '/SCMachines/': [
    'Selective coating puts conformal coating only where it is wanted, leaving connectors, test points and gold fingers clear. There is no masking and no de-masking, and no operator judgement about where the coating should stop, which removes the slowest and least repeatable part of the coating process once volumes go beyond a handful of boards.',
    'We supply the ALTD-450GS and the ALTD-450U. Both are built on a welded sheet-metal frame under industrial-computer control, with on-line and off-line programming, automatic accuracy calibration, precision pressure regulation for clean edge definition, automatic exhaust collection and integrated UV inspection so coverage can be verified before a board leaves the machine. The 450GS coats jointed, panelised boards in a single pass for throughput; the 450U adds a nozzle that tilts through 0–45°, reaching the whole board with no dead corners.',
  ],
};
