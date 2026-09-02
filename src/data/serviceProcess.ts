/** Process and QC detail for the Services page.
 *
 *  Every statement here must be traceable to something EMS has confirmed it does.
 *  Do not add turnaround windows, capacity figures or an SLA table without a
 *  signed-off source from EMS operations — an invented lead time reads as a
 *  commitment.
 */

export interface ProcessStage {
  stage: string;
  what: string;
  output: string;
}

/** The route a customer's boards take from enquiry to despatch. */
export const engagement: ProcessStage[] = [
  {
    stage: '01 — Enquiry & assembly review',
    what: 'You send the board details: substrate, component mix, connectors and keep-out areas, expected volume and the environment the assembly has to survive. Our engineers review whether the requirement is best met by acrylic, polyurethane, silicone, thick-film or aqua ELPEGUARD chemistry.',
    output: 'A recommended coating system and application method, in writing.',
  },
  {
    stage: '02 — Sample / pilot lot',
    what: 'A small lot is coated first at your line and inspected end to end so masking, coverage, thickness and cure behaviour are proven on your actual assembly before a production commitment is made.',
    output: 'A coated sample with its UV inspection and thickness record.',
  },
  {
    stage: '03 — Process sign-off',
    what: 'The proven parameters are fixed: coating system, application method, masking scheme, thickness target and band, cure schedule and the inspection criteria the lot will be judged against.',
    output: 'An agreed process sheet used for every subsequent lot.',
  },
  {
    stage: '04 — Production job work',
    what: 'Our engineers run the agreed process on site at your facility, with the same masking and inspection steps applied lot after lot.',
    output: 'Coated assemblies, lot-traceable to the process sheet.',
  },
  {
    stage: '05 — Inspection & release',
    what: 'Every lot is inspected under UV for coverage, checked for thickness, and confirmed clear on keep-out areas. Anything outside the band is touched up and re-inspected rather than passed on.',
    output: 'An inspection record accompanying the released lot.',
  },
  {
    stage: '06 — Rework & aftercare',
    what: 'Boards needing a component change come back for selective coating removal, repair support and re-coating, so a coated assembly is not a one-way decision.',
    output: 'Re-coated, re-inspected boards and a rework record.',
  },
];

/** Inspection and quality benchmarks applied to coated work. */
export const qc = [
  {
    title: 'UV coverage inspection, 100% of boards',
    body: 'ELPEGUARD coatings carry a UV tracer, so every coated board is inspected under UV light rather than sampled. Thin patches, pinholes, bridging, runs and coating that has crept onto a keep-out area are all visible before the board moves on.',
  },
  {
    title: 'Coating thickness measurement',
    body: 'Dry film thickness is measured against the band agreed at process sign-off. IPC-CC-830B and IPC-A-610 both treat thickness as a measured property, not a visual one, and lots outside the band are reworked rather than released.',
  },
  {
    title: 'Keep-out and connector verification',
    body: 'Connectors, test points, gold fingers, sockets and heatsink interfaces are masked before coating and verified clear afterwards, because a coated contact is a field failure that inspection at the customer rarely catches in time.',
  },
  {
    title: 'Cure confirmation before handling',
    body: 'Boards are released for handling and packing only after the cure schedule for that chemistry has completed — tack-free is not the same as cured, and moving a board too early is a common source of surface defects.',
  },
  {
    title: 'Workmanship criteria: IPC-A-610',
    body: 'Coated assemblies are judged against IPC-A-610 conformal coating workmanship criteria at the acceptance class agreed for the product — Class 2 for most industrial and automotive electronics, Class 3 where the assembly is life- or safety-critical.',
  },
  {
    title: 'Material qualification: IPC-CC-830B',
    body: 'The ELPEGUARD systems we apply come from Lackwerke Peters with their own qualification data. IPC-CC-830B is the current qualification standard for conformal coating material, having superseded the withdrawn MIL-I-46058C QPL.',
  },
  {
    title: 'ESD-controlled handling throughout',
    body: 'Boards are handled, staged and packed under ESD control using EMS-manufactured anti-static bags, bins and trays, so the assembly is not put at risk between coating and despatch.',
  },
];
