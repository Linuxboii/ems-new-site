export const serviceIntro =
  'Complete solutions across the full conformal coating process: operating the coating machine, application, UV optical inspection, touch-up, drying/curing, thickness testing, removal, reworking and final inspection. EMS has partnered with Lackwerke Peters since 2011 and deploys 30+ trained B.Tech engineers on-site.';

// The six steps of the job work process, in the order a board passes through them.
// `detail` and `points` are revealed when a card is expanded.
export const services = [
  {
    title: 'Application of Conformal Coating',
    img: '2019-services-hires-coating.jpg',
    body: 'All major application methods: brush, pneumatic spray gun, dip coating (manual / semi-automated / automated) and automatic selective coating equipment.',
    detail: 'How the coating goes on is decided by the board and the volume, not by the method we happen to prefer. A prototype or a repair is often quickest by brush; a mixed-batch run suits spray; boards that need coating on every surface suit dipping; and a repeating production line is best served by selective equipment that needs no masking at all. Our engineers work at your line with the ELPEGUARD system chosen for the assembly.',
    points: [
      'Brush application for prototypes, touch-up and repair work',
      'Pneumatic spray gun for batches and mixed board types',
      'Dip coating, manual through to automated, for full coverage',
      'Automatic selective coating for repeat production runs',
      'Masking of connectors, test points and gold fingers where the method needs it',
    ],
  },
  {
    title: 'UV Optical Inspection',
    img: 'hero_circuit_board.jpeg',
    body: 'Inspection under UV light to verify coating uniformity, coverage and thickness across the assembly.',
    detail: 'ELPEGUARD coatings carry a UV tracer, so a film that is invisible in normal light fluoresces under UV. That turns an unverifiable process into a visible one: thin patches, missed areas, runs and coating that has crept onto a keep-out area all show up before the board moves on. Anything found is touched up and re-checked rather than passed down the line.',
    points: [
      'Coverage confirmed across the whole assembly, not sampled',
      'Thin spots, pinholes, bridging and runs identified under UV',
      'Keep-out areas checked to confirm they stayed clear',
      'Touch-up applied and re-inspected before the board proceeds',
    ],
  },
  {
    title: 'Drying / Curing',
    img: 'selective-conformal-coating-640_sch-uk-2.jpeg',
    body: 'Controlled drying and curing to achieve full coating performance and adhesion.',
    detail: 'A coating only reaches its stated protection once it has cured properly; handled too early it stays soft, marks easily and never develops the adhesion or the insulation the datasheet promises. Each ELPEGUARD system has its own route to full cure, and we run the boards to the method that matches the chemistry rather than to the clock.',
    points: [
      'Air drying, heat curing or UV curing to suit the coating chosen',
      'Cure schedule taken from the Peters technical datasheet for that product',
      'Boards racked so the film sets without contact marks',
      'Handling and packing only once the coating has fully cured',
    ],
  },
  {
    title: 'Coating Thickness Testing',
    img: 'automated-conformal-coating-2.jpg',
    body: 'Precise thickness measurement to confirm conformance to specification.',
    detail: 'Thickness is where conformal coating quietly fails. Too thin and the board is not protected against moisture or contamination; too thick and the film can stress solder joints and crack as it moves through temperature cycles. Measuring it turns "the board is coated" into a figure that can be recorded and compared against the specification for the job.',
    points: [
      'Readings taken at defined points across the assembly',
      'Compared against the thickness stated for that coating and application',
      'Results recorded per batch for your quality records',
      'Out-of-tolerance boards routed back for touch-up or rework',
    ],
  },
  {
    title: 'Removal & Reworking',
    img: 'a84c75762407-Conformal-Coating-Tool-Removal.jpg',
    body: 'Selective removal and rework of coated areas for repair and component replacement.',
    detail: 'Coated boards still need repairs, and a failed component under a cured film is not a reason to scrap the assembly. The coating is removed only over the area being worked on, the repair is made, and that area is re-coated and re-inspected so the board leaves with the same protection as the rest of the batch.',
    points: [
      'Localised removal over the component or joint being repaired',
      'Method matched to the coating: acrylics rework far more readily than silicones or thick-film systems',
      'Surrounding coating left intact rather than stripping the whole board',
      'Re-coating, curing and UV re-inspection of the reworked area',
    ],
  },
  {
    title: 'Final Inspection',
    img: 'home-intro.jpg',
    body: 'Complete final inspection ensuring every board meets quality and reliability requirements.',
    detail: 'The last check before the boards go back to you: cured film, correct coverage, connectors and test points clean, thickness recorded and any reworked area indistinguishable from the rest. It is also where the job work is signed off as a batch, so what you receive comes with a clear account of what was done to it.',
    points: [
      'Full visual and UV check on every board, not a sample',
      'Connectors, test points and mating surfaces confirmed clear of coating',
      'Thickness and inspection results compiled for the batch',
      'Boards packed in ESD packing from our own plants for return',
    ],
  },
];

export const esdPaintIntro =
  'On-site application of ProtectA Pro ESD conductive and anti-static paints for floors, walls, work surfaces and polypropylene bins. Built on a conductive polymer matrix, the system delivers stable, durable electrostatic protection across industrial and electronics manufacturing environments.';

// Application areas, mirroring the APPLICATIONS page of the ProtectA Pro datasheet
// (public/datasheets/protecta-pro-esd-conductive-paint.pdf) — same six, same images.
// `detail` and `points` are revealed when a card is expanded.
export const esdPaintApplications = [
  {
    title: 'Floors, Walls & Surfaces',
    img: 'esd-floors-walls-surfaces.jpg',
    body: 'ESD-safe flooring, walls and work surfaces for cleanrooms and production areas, applied by roller or spray for a uniform, hard-wearing finish.',
    detail: 'The floor is the largest charge-generating surface in most plants: every footstep and every trolley movement builds a charge that eventually finds a path to ground, often through a component. A conductive floor coating gives that charge a controlled path instead. We prepare and prime the substrate, lay copper earthing strips bonded to the facility ground, then apply the ProtectA Pro topcoat.',
    points: [
      'Cleanroom, SMT and general production floors',
      'Walls and partitions in static-controlled areas',
      'Workbenches, racks and inspection surfaces',
      'Point-to-point and point-to-ground resistance testing on completion',
    ],
  },
  {
    title: 'Conveyor Belt Systems',
    img: 'esd-conveyor-belt-systems.jpg',
    body: 'Conductive coating of belts and conveyor structures so charge cannot accumulate along the line as product moves through it.',
    detail: 'Belts run continuously against rollers and product, which makes them one of the most dependable charge generators on a line. Coating the belt surface and the surrounding structure lets charge dissipate as it forms, rather than building until it discharges into whatever passes next.',
    points: [
      'Belt surfaces, conveyor frames and guide rails',
      'Transfer and buffer sections between machines',
      'Spray-applied for an even film across a running surface',
      'Selected for adhesion and durability under continuous operation',
    ],
  },
  {
    title: 'Plastic Bins & Polypropylene Materials',
    img: 'esd-plastic-bins-polypropylene.jpg',
    body: 'Anti-static coating for polypropylene bins, crates and racking used to store and move components between processes.',
    detail: 'Polypropylene is an excellent insulator, which is exactly the problem: an untreated bin holds charge and passes it to whatever is placed inside. Coating bins, crates and racking turns the storage system into part of your ESD control plan rather than a gap in it.',
    points: [
      'Bins, crates and totes used between processes',
      'Racking, shelving, trolleys and fixtures',
      'Extends ESD control beyond the floor to everything parts touch',
      'Existing bins can be coated in place of replacement',
    ],
  },
  {
    title: 'EVA Foams & Packaging',
    img: 'esd-eva-foams-packaging.jpg',
    body: 'Conductive coating on EVA foam inserts and packaging that holds ESD-sensitive boards and components in transit and storage.',
    detail: 'Foam inserts sit in direct, sustained contact with boards and components, so an insulating foam is in the worst possible position to hold a charge. A conductive coating on the foam and the surrounding packaging keeps the pack at the same potential as the part it carries.',
    points: [
      'EVA foam inserts and cut trays',
      'Outer boxes and packaging carrying ESD-sensitive assemblies',
      'Complements the ESD packing range EMS supplies',
      'Suited to reusable packaging that stays in circulation',
    ],
  },
  {
    title: 'Flammable Storage & Transport Systems',
    img: 'esd-flammable-storage-transport.jpg',
    body: 'Static-controlled protection for petroleum storage, fuel handling and other environments where an electrostatic discharge is a safety hazard.',
    detail: 'Here the risk is not a damaged component but ignition. A static discharge inside a tank, a compartment or a transport vessel holding flammable vapour is a safety event, so static control becomes a safety control rather than a quality one.',
    points: [
      'Petroleum and solvent storage tanks and compartments',
      'Fuel handling areas and transport vessels',
      'Hazardous and explosive-atmosphere industrial areas',
      'Applied under the site’s own permit-to-work and safety procedures',
    ],
  },
  {
    title: 'Industrial Manufacturing Environments',
    img: 'esd-industrial-manufacturing.jpg',
    body: 'ESD-safe factory floors and production environments across electronics, automotive, aerospace, warehousing and logistics facilities.',
    detail: 'Beyond electronics assembly, static control matters wherever product quality, instrumentation or operator safety is sensitive to discharge. ProtectA Pro can be applied across a whole facility rather than a single room, giving one consistent standard from goods-in through to dispatch.',
    points: [
      'Semiconductor and electronics manufacturing',
      'Automotive and EV component assembly',
      'Aerospace and defence facilities',
      'Warehousing and logistics floors',
    ],
  },
];
