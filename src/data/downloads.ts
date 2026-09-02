/** The downloadable technical library.
 *
 *  `available` entries point at a real file in /public/datasheets/ and are the
 *  ones emitted as schema.org DigitalDocument nodes. `onRequest` entries are
 *  documents EMS supplies on request — mostly Peters TDS/SDS sheets that are not
 *  ours to republish — and are listed so the page answers the question honestly
 *  rather than pretending the library is bigger than it is.
 *
 *  To publish a new document: drop the PDF in /public/datasheets/ and move its
 *  entry from `onRequest` to `available` with the file path filled in.
 */

export interface Download {
  name: string;
  description: string;
  /** Path under /public. Present only on published documents. */
  file?: string;
  kind: 'Datasheet' | 'Technical data sheet' | 'Safety data sheet' | 'Brochure' | 'Specification';
  category: 'Conformal coatings' | 'ESD paints' | 'ESD packing' | 'Coating equipment';
}

export const available: Download[] = [
  {
    name: 'ProtectA Pro ESD conductive & anti-static paint',
    description:
      'Product datasheet for the ProtectA Pro range of ESD conductive and anti-static paints for floors, walls, work surfaces and polypropylene bins, including the conductive polymer matrix, surface preparation and application detail.',
    file: '/datasheets/protecta-pro-esd-conductive-paint.pdf',
    kind: 'Datasheet',
    category: 'ESD paints',
  },
];

export const onRequest: Download[] = [
  {
    name: 'ELPEGUARD® acrylic conformal coating — TDS & SDS',
    description:
      'Technical and safety data sheets for the ELPEGUARD acrylic (AR) systems, including solids content, viscosity, recommended dry film thickness, flash-off and cure schedule, dielectric data and handling requirements. Issued per grade.',
    kind: 'Technical data sheet',
    category: 'Conformal coatings',
  },
  {
    name: 'ELPEGUARD® polyurethane conformal coating — TDS & SDS',
    description:
      'Technical and safety data sheets for the ELPEGUARD polyurethane (UR) systems, including chemical and solvent resistance data, cure schedule, thickness guidance and rework notes. Issued per grade.',
    kind: 'Technical data sheet',
    category: 'Conformal coatings',
  },
  {
    name: 'ELPEGUARD® silicone conformal coating — TDS & SDS',
    description:
      'Technical and safety data sheets for the ELPEGUARD silicone (SR) systems, including operating temperature range, flexibility and thermal-cycling data, cure mechanism and removal guidance. Issued per grade.',
    kind: 'Technical data sheet',
    category: 'Conformal coatings',
  },
  {
    name: 'ELPEGUARD® UV-curing thick-film lacquer — TDS & SDS',
    description:
      'Technical and safety data sheets for the thick-film UV-curing (DSL) systems, including cure energy requirements, secondary cure mechanism for shadowed areas, film build and equipment compatibility.',
    kind: 'Technical data sheet',
    category: 'Conformal coatings',
  },
  {
    name: 'ELPEGUARD® aqua water-based coating — TDS & SDS',
    description:
      'Technical and safety data sheets for the water-based (aqua) systems, including VOC content, dry-off schedule, board cleanliness requirements and protection data.',
    kind: 'Technical data sheet',
    category: 'Conformal coatings',
  },
  {
    name: 'IPC-CC-830B qualification data — ELPEGUARD systems',
    description:
      'Qualification and test documentation from Lackwerke Peters for the ELPEGUARD grade proposed for your assembly, covering the IPC-CC-830B property set.',
    kind: 'Specification',
    category: 'Conformal coatings',
  },
  {
    name: 'ALTD-450GS selective coating machine — specification',
    description:
      'Machine specification for the ALTD-450GS: working envelope, axis configuration, atomisation and pressure control, programming modes, UV inspection integration, utilities and footprint.',
    kind: 'Specification',
    category: 'Coating equipment',
  },
  {
    name: 'ALTD-450U selective coating machine — specification',
    description:
      'Machine specification for the ALTD-450U, including the 0–45° tilting nozzle for inclined coating with no dead corners, working envelope, utilities and footprint.',
    kind: 'Specification',
    category: 'Coating equipment',
  },
  {
    name: 'ESD packing materials — resistance and material data',
    description:
      'Surface resistance ranges, material construction and dimensional data for EMS-manufactured static shielding bags, aluminium MBB, anti-static bubble, LDPE pink, conductive grid and VCI bags, EPE and conductive foam, PP corrugated bins and thermoformed PET/HIPS trays.',
    kind: 'Datasheet',
    category: 'ESD packing',
  },
];
