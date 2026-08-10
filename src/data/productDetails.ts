// Expanded copy shown when a product card is opened, keyed by product rather
// than by card. Where the same product appears in more than one list — often
// with a different photo — every card points at the same key, so the matter
// stays identical and is edited in one place.
export interface ProductDetail {
  detail: string;
  points: string[];
}

export const productDetails: Record<string, ProductDetail> = {
  // ---- Coatings and coating work -------------------------------------------
  'conformal-coatings': {
    detail:
      'A conformal coating is a thin polymer film applied over a populated board, following the contours of the PCB and its components. That film insulates the conductors and shields the assembly from moisture, dust, condensation, salt spray and chemical attack — the conditions that shorten the service life of electronics once they leave the factory. EMS supplies the complete ELPEGUARD® range as an India distributor for Lackwerke Peters.',
    points: [
      'Acrylic, polyurethane, silicone, thick-film and aqua systems',
      'Matched to temperature range, chemical exposure and rework needs',
      'Solvent-based and water-based chemistries for either line setup',
      'UV tracer in the film so coverage can be verified under UV light',
    ],
  },
  'acrylic': {
    detail:
      'Acrylic coatings dry fast and rework easily, which is why they are the usual starting point for general-purpose PCB protection. The film gives reliable protection against moisture and contamination, and because it dissolves readily it can be removed over a single joint for repair without disturbing the rest of the board — a real advantage on assemblies that are expected to be serviced.',
    points: [
      'Fast drying, so boards move through the line quickly',
      'The easiest of the ELPEGUARD systems to rework and repair',
      'Reliable moisture and contamination protection for general use',
      'Well suited to high-volume production and serviceable assemblies',
    ],
  },
  'polyurethane': {
    detail:
      'Polyurethane coatings are chosen when the board will meet something harsher than damp air. The cured film resists solvents, fuels and abrasion far better than an acrylic, holding up where boards are exposed to chemicals in service or to handling that would scuff a softer coating. The trade-off is that rework is more demanding, so they suit assemblies not expected to be opened up again.',
    points: [
      'Strong resistance to solvents, fuels and chemical attack',
      'Hard-wearing film that resists abrasion and handling damage',
      'Suited to automotive, industrial and harsh-environment boards',
      'Harder to rework than acrylic — best where repair is unlikely',
    ],
  },
  'silicone': {
    detail:
      'Silicone coatings stay flexible across a very wide temperature range, which makes them the answer for boards that run hot or cycle repeatedly between extremes. Because the film moves with the assembly instead of resisting it, thermal expansion does not crack the coating or stress solder joints, and the coating keeps insulating on high-temperature and high-voltage assemblies.',
    points: [
      'Stable across a wide high- and low-temperature range',
      'Stays flexible, so thermal cycling does not crack the film',
      'Good choice for power, LED and high-voltage assemblies',
      'Protects without stressing joints on boards that expand and contract',
    ],
  },
  'thick-film': {
    detail:
      'Thick-film lacquers lay down a substantially heavier film than a standard conformal coating, which is what demanding insulation requirements call for. The extra build gives greater dielectric strength and a more robust barrier over conductors and component edges, and the UV-curing grades reach full cure in seconds under a UV source rather than waiting on an oven.',
    points: [
      'Heavier film build for demanding insulation requirements',
      'Greater dielectric strength over conductors and component edges',
      'UV-curing grades cure in seconds for fast line throughput',
      'Applied selectively where the higher build is actually needed',
    ],
  },
  'aqua': {
    detail:
      'Aqua coatings are water-based, so they carry a fraction of the solvent of a conventional system. That cuts VOC emissions and the handling, storage and extraction burden that comes with solvents, without giving up the protective film — the practical route for plants working to tighter environmental limits or trying to improve conditions on the shop floor.',
    points: [
      'Water-based chemistry with substantially lower VOC content',
      'Reduced solvent handling, storage and extraction requirements',
      'Better working conditions around the coating area',
      'Protective performance retained for general PCB coating',
    ],
  },
  'coating-job-work': {
    detail:
      'Rather than supplying the coating and leaving you to run it, EMS puts trained engineers on your line and takes the whole process: operating the coating machine, application, UV optical inspection, touch-up, drying and curing, thickness testing, removal, reworking and final inspection. The team is 30+ trained B.Tech engineers, all trained under Lackwerke Peters, working at client locations across India.',
    points: [
      'Brush, spray, dip and automatic selective application methods',
      'UV optical inspection of every board, with touch-up and re-check',
      'Cure schedules run to the Peters datasheet for the coating used',
      'Thickness measured and recorded, with rework where needed',
      '30+ trained engineers deployed on site at your own line',
    ],
  },
  'esd-paint-job-work': {
    detail:
      'On-site application of ProtectA Pro ESD conductive and anti-static paints across floors, walls, work surfaces, conveyor systems and polypropylene bins. Built on a conductive polymer matrix, the system gives a charge a controlled path to ground instead of letting it build until it discharges into a component. We prepare the substrate, lay earthing bonded to the facility ground, apply the topcoat and test the result.',
    points: [
      'Surface preparation, conductive primer and copper earthing',
      'Floors, walls, benches, conveyors, bins and racking',
      'Point-to-point and point-to-ground resistance testing on completion',
      'Applied under your site’s own permit-to-work and safety procedures',
    ],
  },
  'esd-paints': {
    detail:
      'ProtectA Pro is an advanced range of ESD conductive and anti-static paints for floors, walls, work surfaces, conveyor systems, polypropylene bins and EVA foam packaging. Built on a conductive polymer matrix, it holds a stable, durable surface resistance rather than relying on a humidity-dependent anti-static agent, so static control across a plant stays consistent through the year. Supplied on its own, or applied on site by our own teams.',
    points: [
      'Conductive polymer matrix for stable, durable surface resistance',
      'Floors, walls, benches, conveyors, bins, racking and EVA foam packaging',
      'Roller or spray applied, matched to the substrate',
      'Extends ESD control from the packing to the environment around it',
      'Available as a supply-only product or as an on-site job work service',
    ],
  },
  'selective-machines': {
    detail:
      'Selective coating puts conformal coating only where it is wanted, leaving connectors, test points and gold fingers clear. There is no masking and no de-masking, and no operator judgement about where the coating should stop, which removes the slowest and least repeatable part of the process once volumes go beyond a handful of boards. EMS supplies and supports the ALTD-450GS and ALTD-450U locally.',
    points: [
      'No masking or de-masking anywhere in the process',
      'Industrial-computer control with on-line and off-line programming',
      'Auto accuracy calibration and precision pressure regulation for clean edges',
      'Integrated UV inspection so coverage is verified before a board leaves',
      'ALTD-450GS coats panelised boards in one pass; ALTD-450U tilts 0–45° for no dead corners',
    ],
  },

  // ---- ESD packing ---------------------------------------------------------
  'esd-packing': {
    detail:
      'The complete ESD packing range, manufactured at our own plants in Hyderabad, Telangana and Cochin, Kerala since 2015: bags, bins, foam and thermoformed trays. Most of it is made to your component geometry rather than pulled off a shelf, so a drawing or a sample is usually the fastest way to start a quote.',
    points: [
      'Bags: bubble, static shielding, aluminium MBB, conductive grid and LDPE pink',
      'EVA and PP corrugated bins for line-side storage and transport',
      'EPE foam inserts and PET / HIPS thermoformed trays cut to your part',
      'Made in-house at Hyderabad and Cochin, not imported and resold',
    ],
  },
  'esd-bags': {
    detail:
      'A static discharge too small for a person to feel can still damage or quietly degrade a semiconductor. ESD packing bags are the first line of defence: they stop a charge building on the packaging surface and, in the shielding grades, stop an external discharge reaching the contents at all. We supply bags for bare boards, populated assemblies and loose components, in transit and in store.',
    points: [
      'Five types covering cushioning, shielding, moisture barrier and general packing',
      'Plain or zip-lock grades for packs that are opened repeatedly',
      'Heat-sealable, and supplied with desiccant for moisture-sensitive assemblies',
      'Sizes made to suit the board or component being packed',
    ],
  },
  'bubble-bags': {
    detail:
      'Pink bubble bags do two jobs in one wall: the bubble layer absorbs impact and vibration in transit while the anti-static film stops a charge building on the surface. That makes them the choice where a board needs physical protection as well as ESD safety, and it saves double-packing an assembly in a bag and then a separate bubble wrap.',
    points: [
      'Cushions against shock and vibration in transit',
      'Anti-static film prevents surface charge build-up',
      'One bag instead of a separate anti-static bag plus bubble wrap',
      'Suits populated boards and assemblies with protruding parts',
    ],
  },
  'grid-bags': {
    detail:
      'Conductive grid bags carry a printed diamond pattern that holds the whole surface at an even potential, dissipating charge continuously through storage and transit. The pattern is visible and the film is hard-wearing, which makes them a low-cost, durable everyday bag for moving bare boards and loose components around the shop floor.',
    points: [
      'Printed conductive diamond grid dissipates charge continuously',
      'Contents stay identifiable through the bag',
      'Hard-wearing enough for repeated shop-floor handling',
      'Economical choice for bare boards and loose components',
    ],
  },
  'shielding-bags': {
    detail:
      'Static shielding bags carry a metallised layer that forms a Faraday cage around the contents, so an external discharge travels around the bag rather than through what is inside. This is the grade to use when a bag has to protect against a discharge event, not merely avoid generating one. The semi-transparent film lets you identify a board without opening the pack.',
    points: [
      'Metallised layer forms a Faraday cage around the contents',
      'Blocks an external discharge from reaching the electronics inside',
      'Semi-transparent, so boards can be identified unopened',
      'Supplied plain or zip-lock for repeated opening and resealing',
    ],
  },
  'mbb-bags': {
    detail:
      'Aluminium bags — also called MBB, or moisture barrier bags — are the silver, aluminium-laminated grade. On top of the static-shielding Faraday cage they add a barrier against humidity, so moisture-sensitive assemblies stay dry as well as protected from discharge. They are the usual choice for long-term storage and export packing, heat-sealed with a desiccant inside.',
    points: [
      'Aluminium laminate barrier against humidity and moisture ingress',
      'Static shielding as well, so no separate bag is needed',
      'Heat-sealed, normally with a desiccant pack enclosed',
      'The standard for long-term storage and export consignments',
    ],
  },
  'pink-bags': {
    detail:
      'LDPE pink bags are the everyday anti-static bag for general electronics packing and storage, where shielding and cushioning are not required. The pink anti-static film prevents charge building on the bag surface, giving an economical way to handle boards, sub-assemblies and components in bulk without leaving them in ordinary polythene.',
    points: [
      'Anti-static film prevents charge building on the bag surface',
      'Economical for bulk packing and internal storage',
      'For boards, sub-assemblies and loose components',
      'Use a shielding or MBB grade instead where discharge or humidity is a risk',
    ],
  },
  'vci-bags': {
    detail:
      'VCI stands for vapour corrosion inhibitor. The film is loaded with a compound that releases a vapour inside the sealed bag, settling as a molecular layer on every exposed metal surface and stopping the reaction that produces rust. It is the answer to a different problem from the rest of the bag range — corrosion rather than static — so it is the grade to reach for on bare metal: leads, connectors, contacts, fasteners, tooling and machined parts. The layer leaves no residue and needs no oil or wrapping, and the part is ready to use straight out of the bag.',
    points: [
      'Vapour inhibitor protects every exposed metal surface inside the sealed bag',
      'Prevents rust and oxidation in storage, transit and export consignments',
      'No oiling, greasing or unwrapping — parts are used straight from the bag',
      'Leaves no residue on the part and needs no removal step',
      'Available in anti-static grades where the contents are also ESD-sensitive',
    ],
  },
  'eva-bins': {
    detail:
      'EVA bins are reusable containers for moving and storing populated boards and loose components between processes. The bin body is anti-static, so parts are not left sitting against a surface that can hold a charge, and each bin carries the electrostatic-sensitive-device marking that tells anyone on the floor what is inside before they open it.',
    points: [
      'Built for repeated handling: stacking, line-side storage, transport',
      'Anti-static body with ESD marking on every unit',
      'Sizes and internal layouts matched to the components carried',
      'Dividers and foam inserts where parts need to be held apart',
    ],
  },
  'pp-corrugated': {
    detail:
      'PP corrugated trays and bins are made from twin-wall polypropylene sheet, giving a rigid but lightweight container that stands up to repeated handling far better than card. The material is anti-static, so boards are not resting against a surface that can hold a charge, and each unit carries the electrostatic-sensitive-device marking so the floor knows what is inside before it is opened.',
    points: [
      'Twin-wall PP sheet: rigid, light and far more durable than card',
      'Anti-static material with ESD marking on every unit',
      'Dividers, partitions and foam inserts to hold parts apart',
      'Footprint, wall height and layout matched to your components',
    ],
  },
  'eva-foam-trays': {
    detail:
      'EVA conductive foam trays pair a formed tray body with a conductive foam layer, so a part is cradled rather than resting on hard plastic. The foam takes up the shock and vibration a bin cannot, while conducting a charge away instead of letting it sit on the surface — the combination to reach for when a component is both delicate and static-sensitive.',
    points: [
      'Conductive foam layer dissipates charge continuously',
      'Cushions parts against knocks in handling and transport',
      'Foam cut to the component so each part is located, not loose',
      'Reusable across storage, transport and line-side presentation',
    ],
  },
  'epe-foam-trays': {
    detail:
      'EPE foam trays and inserts are cut to the geometry of the component they carry, so each part sits in its own pocket instead of shifting against its neighbours. The foam absorbs shock and vibration in transit while dissipating static continuously, which matters for parts with exposed pins or connectors that bend easily and are sensitive to discharge.',
    points: [
      'Pockets routed to a drawing, so each part is located and held',
      'Cushions against shock and vibration while dissipating static',
      'Same tray works for handling, storage and operator presentation',
      'Pocket layout, depth and footprint all worked to suit your part',
    ],
  },
  'thermoforming-trays': {
    detail:
      'Thermoformed trays are vacuum-formed from sheet into a tooled shape, giving a rigid tray whose pockets match your component exactly. Compared with cut foam the pocket walls are thin and consistent, which suits automated line feeding, pick-and-place presentation and dense stacking where every millimetre of height matters.',
    points: [
      'Formed to your component drawing, not adapted from stock',
      'Thin, consistent pocket walls for automated feeding and dense stacking',
      'Clear PET keeps contents visible for inspection and counting',
      'Black HIPS in conductive and anti-static grades for reusable protection',
    ],
  },
  'conductive-foam-packing': {
    detail:
      'Conductive foam is cut and routed to the part rather than formed over a tool, which suits low and medium volumes and anything with an awkward outline. The foam takes up shock and vibration while conducting a charge away instead of holding it on the surface, so components with exposed pins or fragile connectors are cushioned and grounded at the same time. It is supplied as loose inserts to drop into a bin, or as a lined box that is the complete pack on its own.',
    points: [
      'Pockets routed to a drawing, so each part sits located and separated',
      'Cushions against shock and vibration while dissipating charge',
      'Supplied as inserts for a bin, or as a complete lined box',
      'Practical at low and medium volumes with no tooling to pay for',
    ],
  },
  'white-trays': {
    detail:
      'White thermoformed trays are the opaque counterpart to the clear PET range, used where a light background makes a part easier to see and inspect than a black tray does, and where the tray itself needs to carry a moulded part number. The pockets are tooled to the component outline so each part is located rather than loose, and the trays nest empty and stack loaded, which is what makes them practical for line feeding and for shipping in volume.',
    points: [
      'Pockets tooled to the component outline, so parts cannot shift',
      'Light background makes parts and their orientation easy to check',
      'Part numbers embossed into the tray rim for identification',
      'Nests empty for return, stacks loaded for transport',
    ],
  },
  'esd-pallets': {
    detail:
      'ESD pallets are built from PP honeycomb sheet on moulded feet, so the deck is rigid and light and the whole unit is anti-static rather than a piece of bare timber under sensitive stock. They do not splinter, absorb moisture or shed dust the way a wooden pallet does, they do not need fumigation or heat treatment for export, and they wash down and go back into service instead of being scrapped after a trip.',
    points: [
      'PP honeycomb deck on moulded feet: rigid, light and reusable',
      'Anti-static throughout, unlike timber or plain plastic pallets',
      'No splinters, no moisture absorption and no dust into a clean area',
      'Exempt from the fumigation and heat treatment timber needs for export',
      'Deck size, foot layout and load rating made to suit your handling',
    ],
  },
  'custom-packing': {
    detail:
      'Work that does not fit a standard tray or bin: packs cut to a shape the customer has asked for, and conductive reels for tape-and-reel components. All of it starts the same way — from your drawing or a sample — and is made in the same conductive and anti-static materials as the rest of the range, so a presentation pack protects the contents as seriously as a production tray does.',
    points: [
      'Shaped and branded presentation packs cut from conductive foam',
      'Conductive thermoformed reels for tape-and-reel component packing',
      'Made from your drawing or a sample, in the material the job needs',
      'Printed and finished to your branding where the pack is seen by a customer',
    ],
  },
  'material-swatches': {
    detail:
      'The materials the ESD packing range is made from, shown as swatches. Choosing the right one is usually a question of what the part has to survive: whether it needs cushioning or only a barrier, whether a charge has to be dissipated or an external discharge blocked, and whether the pack is opened once or handled daily for years. Send the part and how it travels, and we will match the material to it.',
    points: [
      'Anti-static, conductive and metallised grades across bags, bins and trays',
      'Colour and finish samples so a pack can be matched or identified on sight',
      'Physical swatches available on request before you commit to tooling',
      'Material chosen from the part, its handling and its shelf or transit life',
    ],
  },
  'pet-trays': {
    detail:
      'PET is the clear grade of thermoformed tray, used wherever the contents need to be seen without being unpacked — inspection, counting and goods-in checks all happen through the tray. The same tooling covers plain pocket trays, anti-static trays formed as a matrix of identical pockets, and blister packs where a base and lid are tooled as a matched pair around a single component.',
    points: [
      'Transparent, so parts are inspected and counted without unpacking',
      'Anti-static grades where the tray must not hold a charge',
      'Pocket matrices nest for storage and stack for transport',
      'Blister base and lid tooled together to close around the part',
    ],
  },
  'anti-static-pet': {
    detail:
      'Anti-static PET trays are formed as a matrix of identical pockets, each holding one component in a fixed position. Because every pocket sits on the same pitch, the tray suits counting, kitting and automated pick-up, and the anti-static grade means the part is not resting against a surface that can build a charge. Trays nest empty for storage and are often supplied on a black conductive base tray.',
    points: [
      'A matrix of identical pockets on a fixed pitch',
      'Anti-static material, so no charge builds against the part',
      'Nests empty for storage, stacks loaded for transport',
      'Supplied on a conductive base tray where required',
    ],
  },
  'pet-blister': {
    detail:
      'ESD PET blister packing is the single-part end of the range: a base and a lid tooled as a matched pair, formed to close around one component and hold it with no room to move. It is the format to use when a part travels on its own and must arrive in exactly the position it left in, with the clear PET keeping it identifiable through the pack.',
    points: [
      'Base and lid tooled as a matched pair around the component',
      'Part held with no free movement inside the pack',
      'Clear PET keeps the contents identifiable unopened',
      'Formed from your part drawing or a physical sample',
    ],
  },
  'hips-trays': {
    detail:
      'Black HIPS is the rugged, reusable grade of thermoformed tray. Supplied in conductive and anti-static formulations, the material carries charge away rather than holding it, and the heavier sheet takes daily handling on a production floor for years rather than a single trip. Trays are formed with slots, channels or pockets to suit whether you are carrying boards on edge or components lying flat.',
    points: [
      'Conductive and anti-static grades for continuous charge dissipation',
      'Heavier sheet built for years of repeated line-side handling',
      'Slots, channels or pockets formed to your board or component',
      'Stacks loaded and nests empty to save storage space',
    ],
  },
  'hips-pet-lid': {
    detail:
      'A black HIPS base tray with a clear PET lid, sold as a pair. The base is slotted so boards stand on edge, separated and located, while the lid closes over the top to keep dust out and stop anything lifting in transit — and because it is clear, the contents can still be identified and counted without opening the tray.',
    points: [
      'Slotted HIPS base holds boards on edge, separated and located',
      'Clear PET lid keeps out dust and holds the contents down',
      'Contents identified and counted without opening the tray',
      'Base and lid tooled together, and stack once closed',
    ],
  },
};
