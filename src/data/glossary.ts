/** Terms that appear on an ESD packing or conformal coating quotation.
 *  Rendered on /resources/esd-packaging-glossary/ and emitted as a
 *  schema.org DefinedTermSet, which answer engines cite readily. */
export interface GlossaryTerm {
  term: string;
  group: 'ESD & packaging' | 'Conformal coating';
  definition: string;
}

export const glossary: GlossaryTerm[] = [
  {
    term: 'ESD (electrostatic discharge)',
    group: 'ESD & packaging',
    definition:
      'The sudden transfer of charge between two objects at different electrical potentials. In electronics it is a failure mechanism: a discharge of a few hundred volts — far below what a person can feel — can puncture a gate oxide or fuse a track inside an integrated circuit, sometimes causing a latent defect that survives test and fails months later in the field.',
  },
  {
    term: 'ESDS (electrostatic-sensitive device)',
    group: 'ESD & packaging',
    definition:
      'A component or assembly that can be damaged by electrostatic discharge. ESDS items must be handled inside an EPA and packed in materials that either dissipate charge or shield against it, and their packaging is marked with the ESD susceptibility symbol.',
  },
  {
    term: 'EPA (ESD protected area)',
    group: 'ESD & packaging',
    definition:
      'A defined workspace in which every surface, tool, chair, floor and person is bonded to a common ground so no significant potential difference can build up. ESD-safe flooring, work-surface paint, wrist straps and dissipative bins are what make an area an EPA — and packaging is what protects the part once it leaves one.',
  },
  {
    term: 'Anti-static',
    group: 'ESD & packaging',
    definition:
      'A material that resists the build-up of a static charge on its own surface, usually via an added or inherent surface treatment. Pink LDPE bags and pink bubble film are anti-static. Note what this does not mean: an anti-static bag does not shield its contents from an external discharge.',
  },
  {
    term: 'Static dissipative',
    group: 'ESD & packaging',
    definition:
      'A material whose surface resistance lets charge bleed away in a controlled, gradual manner rather than in a fast discharge — conventionally between 1 × 10⁴ and 1 × 10¹¹ ohms per square. Most ESD work surfaces, bins and trays are dissipative rather than conductive by design, because a controlled bleed is safer than a rapid one.',
  },
  {
    term: 'Conductive',
    group: 'ESD & packaging',
    definition:
      'A material with low surface resistance — conventionally below 1 × 10⁴ ohms per square — that moves charge quickly to ground. Conductive grid bags, carbon-loaded foam and conductive bins are used where charge must be equalised across a surface rather than merely prevented from accumulating.',
  },
  {
    term: 'Surface resistivity',
    group: 'ESD & packaging',
    definition:
      'The measured resistance across a square of a material surface, expressed in ohms per square, and the number that decides whether a material is classed as conductive, dissipative, anti-static or insulative. It is what a resistance test on an ESD floor, work surface or bin is actually measuring.',
  },
  {
    term: 'Faraday cage',
    group: 'ESD & packaging',
    definition:
      'A conductive enclosure that keeps an external electric field away from whatever is inside it. This is the working principle of a static shielding bag: the metallised layer carries a discharge around the outside of the bag so it never reaches the board within. It is the property that separates a shielding bag from a merely anti-static one.',
  },
  {
    term: 'Static shielding bag',
    group: 'ESD & packaging',
    definition:
      'A multi-layer metallised bag that forms a Faraday cage around its contents, blocking external discharge, while its inner layer prevents charge generation against the part. Usually semi-transparent so a board can be identified without opening, and supplied plain or zip-lock. This is the correct bag for transporting an unprotected ESDS assembly outside an EPA.',
  },
  {
    term: 'MBB (moisture barrier bag)',
    group: 'ESD & packaging',
    definition:
      'An aluminium-laminated bag — often called an aluminium or silver bag — that adds a humidity barrier on top of static shielding. Used with a desiccant and a humidity indicator card for moisture-sensitive devices, long-term storage and export packing, and heat-sealed rather than folded closed.',
  },
  {
    term: 'MSD (moisture sensitive device) / MSL',
    group: 'ESD & packaging',
    definition:
      'A component whose plastic package absorbs atmospheric moisture that can flash to steam during reflow soldering and crack the package internally. Moisture Sensitivity Level classifies how long such a part may be exposed to factory air before it must be baked or reflowed, and it is the reason MSDs ship dry-packed in an MBB with desiccant.',
  },
  {
    term: 'VCI (vapour corrosion inhibitor)',
    group: 'ESD & packaging',
    definition:
      'A packaging film that releases an inhibiting vapour inside the sealed bag which settles on every exposed metal surface and stops corrosion forming. It protects leads, connectors, contacts, fasteners and machined parts through storage and long export runs with no oiling, no unwrapping and no residue to clean off.',
  },
  {
    term: 'EPE foam',
    group: 'ESD & packaging',
    definition:
      'Expanded polyethylene: a light, resilient closed-cell foam that recovers its shape after repeated impacts, which makes it suited to reusable trays and inserts. In ESD grades it is treated or loaded so it dissipates charge rather than generating it against the part it is cushioning.',
  },
  {
    term: 'Conductive foam',
    group: 'ESD & packaging',
    definition:
      'Carbon-loaded foam, usually black, used for component inserts and pin-in-foam packing. It holds every part of the packed item at the same potential, which is why IC leads have traditionally been pushed into it — the foam shorts the pins together and removes any potential difference across the device.',
  },
  {
    term: 'Thermoforming',
    group: 'ESD & packaging',
    definition:
      'A process in which a plastic sheet — commonly PET or HIPS in ESD grades — is heated and formed over a tool into a tray with cavities matched to a specific component or assembly. It produces packaging that holds parts in a fixed position and orientation, which matters for automated handling as much as for protection.',
  },
  {
    term: 'PP corrugated (polypropylene corrugated)',
    group: 'ESD & packaging',
    definition:
      'A twin-wall fluted polypropylene sheet, the plastic analogue of corrugated cardboard: light, rigid, washable and durable across many trips. In ESD grades it is used for returnable bins, dividers and tote boxes on the shop floor, where cardboard would shed fibres and fail on the second wash.',
  },
  {
    term: 'Desiccant',
    group: 'ESD & packaging',
    definition:
      'A moisture-absorbing agent, usually silica gel, sealed inside a moisture barrier bag to hold the internal humidity down for the life of the pack. Quantity is calculated from the bag area and the intended storage period rather than guessed, and it is paired with a humidity indicator card so the condition of the pack can be read without opening it.',
  },
  {
    term: 'Bubble bag',
    group: 'ESD & packaging',
    definition:
      'A bag made from anti-static bubble film — pink or metallised — that combines cushioning with static protection. The bubble layer absorbs shock and vibration in transit while the anti-static film prevents charge building on the surface, covering assemblies that need physical protection as well as ESD safety in a single bag.',
  },

  {
    term: 'Conformal coating',
    group: 'Conformal coating',
    definition:
      'A thin polymeric film applied over an assembled PCB that follows — conforms to — the contours of the board and its components. Typically 25–75 µm thick, it excludes moisture, dust, contamination and conductive debris, and raises the voltage the assembly can stand off between adjacent conductors.',
  },
  {
    term: 'ELPEGUARD®',
    group: 'Conformal coating',
    definition:
      'The conformal coating range from Lackwerke Peters GmbH & Co. KG of Kempen, Germany, covering acrylic, polyurethane, silicone, UV-curing thick-film and water-based systems. EMS Technologies is an India distributor for Peters and supplies the full range.',
  },
  {
    term: 'ELPECAST®',
    group: 'Conformal coating',
    definition:
      'The Lackwerke Peters casting and potting compound range, used where an assembly needs bulk encapsulation rather than a surface film — for mechanical support, high-voltage isolation, tamper resistance or immersion service.',
  },
  {
    term: 'Selective coating',
    group: 'Conformal coating',
    definition:
      'Applying coating along a programmed nozzle path that covers the areas requiring protection and avoids keep-out areas entirely. Because it largely removes the need for masking, it is normally the lowest-labour route for repeating production runs — which is what justifies the programming effort.',
  },
  {
    term: 'Keep-out area',
    group: 'Conformal coating',
    definition:
      'A region of the assembly that must remain free of coating: connectors and mating surfaces, test points, programming headers, gold fingers, sockets, adjustable components, sensor apertures, heatsink interfaces and grounding points. Marked on the drawing, masked or programmed around, and verified clear after cure.',
  },
  {
    term: 'Masking',
    group: 'Conformal coating',
    definition:
      'Temporarily covering keep-out areas with tape, boots, caps or peelable latex before coating, then removing it after cure. On a connector-heavy board masking and de-masking labour can exceed the coating operation itself, which is the usual economic argument for moving to selective coating equipment.',
  },
  {
    term: 'UV tracer',
    group: 'Conformal coating',
    definition:
      'A fluorescent additive in the coating that makes an otherwise invisible film glow under UV light. It is what makes coating inspection possible at all: thin patches, pinholes, bridging, runs and coating that has crept onto a keep-out area become visible before the board moves on.',
  },
  {
    term: 'DFT (dry film thickness)',
    group: 'Conformal coating',
    definition:
      'The thickness of the coating after solvent flash-off and cure — the number that is specified and measured, as distinct from the wet film applied. Conventional systems are usually specified in a 25–75 µm band, and IPC-CC-830B and IPC-A-610 both treat DFT as a measured property rather than a visual judgement.',
  },
  {
    term: 'Dewetting',
    group: 'Conformal coating',
    definition:
      'Coating pulling back from an area instead of forming a continuous film, leaving it bare or thin. It is almost always a cleanliness defect rather than a coating defect: flux residue, handling oils, mould release or fingerprints on the board surface before coating.',
  },
  {
    term: 'IPC-A-610',
    group: 'Conformal coating',
    definition:
      'The workmanship standard used to judge whether a coated assembly is acceptable — coverage, thickness, bridging, keep-out clearance and defects — at a stated acceptance Class 1, 2 or 3. The class is chosen by the product and belongs on the drawing.',
  },
  {
    term: 'IPC-CC-830B',
    group: 'Conformal coating',
    definition:
      'The qualification and performance specification for the coating material itself, covering dielectric withstand, insulation resistance, thermal shock, humidity, flexibility, fungus resistance and flammability. It superseded the cancelled MIL-I-46058C.',
  },
];
