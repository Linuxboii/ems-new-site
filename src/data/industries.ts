/** Sector landing pages. Each named market on the homepage gets a page that
 *  answers the question that sector actually arrives with, rather than repeating
 *  the general product copy with a different noun swapped in. */

export interface Industry {
  slug: string;
  name: string;
  /** <title> and H1 material. */
  seoTitle: string;
  seoDescription: string;
  heading: string;
  lead: string;
  img: string;
  imgAlt: string;
  /** What the environment does to an assembly in this sector. */
  stresses: { title: string; body: string }[];
  /** Coating chemistries typically specified here, and why. */
  coatings: { name: string; why: string }[];
  /** ESD packing considerations specific to the sector. */
  packing: string[];
  /** Standards and specification context. */
  standards: string;
  faqs: { q: string; a: string }[];
}

export const industries: Industry[] = [
  {
    slug: 'automotive',
    name: 'Automotive electronics',
    seoTitle: 'Conformal Coating for Automotive PCB Assemblies | EMS Technologies',
    seoDescription:
      'Automotive PCB conformal coating in India: ELPEGUARD polyurethane and silicone for ECUs, EV power electronics and sensors, applied on site with UV inspection.',
    heading: 'Automotive electronics',
    lead: 'Under-bonnet heat, fuel and fluid exposure, salt spray, condensation cycling and constant vibration — automotive is the environment that finds every weakness in a coating specification.',
    img: 'automated-conformal-coating-2.jpg',
    imgAlt: 'Automated conformal coating line running PCB assemblies during EMS Technologies job work',
    stresses: [
      {
        title: 'Thermal cycling, not just temperature',
        body: 'An engine-bay assembly swings from ambient to well above 100 °C and back, thousands of times over its life. Each cycle drives differential expansion between the coating, the laminate and the solder joints. A film that goes hard and brittle transfers that stress straight into the fillets; a flexible one absorbs it.',
      },
      {
        title: 'Fluids and vapours',
        body: 'Fuel, engine oil, brake and transmission fluid, screen wash, battery electrolyte and workshop cleaning chemicals all reach electronics that were never meant to meet them. This is the exposure acrylic chemistry cannot survive and polyurethane was made for.',
      },
      {
        title: 'Salt, humidity and condensation',
        body: 'Coastal operation and monsoon humidity mean repeated condensation on a cold board in warm wet air. That cycle finds every pinhole and every thin edge, which is why coverage verification matters at least as much as material choice.',
      },
      {
        title: 'Continuous vibration',
        body: 'Road-induced vibration runs for the life of the vehicle. It argues for a coating that stays elastic, and it raises the cost of any coating defect that concentrates stress at a joint.',
      },
      {
        title: 'EV-specific stress',
        body: 'Traction inverters, BMS boards and on-board chargers combine high voltage with high heat density. Creepage and clearance are being managed at the same time as thermal load, and the coating is part of both calculations.',
      },
    ],
    coatings: [
      { name: 'Polyurethane (UR)', why: 'The default for under-bonnet and fluid-exposed assemblies: excellent resistance to fuels, oils, solvents and abrasion, with a strong moisture barrier.' },
      { name: 'Silicone (SR)', why: 'Where high temperature and thermal cycling dominate over chemical attack — power electronics, assemblies mounted close to heat sources, anything cycling hard.' },
      { name: 'UV thick-film (DSL)', why: 'High-volume repeat production on selective coating lines, where seconds-fast cure removes the coating step from the critical path.' },
    ],
    packing: [
      'Static shielding bags for ECUs and sensor modules moving between tiers.',
      'Aluminium moisture barrier bags with desiccant for moisture sensitive devices and export consignments.',
      'ESD thermoformed trays with cavities matched to connector geometry, so modules cannot shift in transit or in automated handling.',
      'Returnable PP corrugated bins and dividers for shop-floor circulation between plants.',
    ],
    standards:
      'Automotive programmes usually specify IPC-A-610 Class 2 acceptance, with Class 3 invoked for safety-critical control. Coating material is qualified against IPC-CC-830B. Expect the OEM or tier-one customer to layer their own specification on top — read it before quoting, because it almost always tightens something. The Peters ELPEGUARD and ELPECAST ranges EMS supplies are approved by the automotive industry.',
    faqs: [
      {
        q: 'What is the best conformal coating for automotive PCB assemblies?',
        a: 'Polyurethane is the usual answer for under-bonnet and fluid-exposed assemblies, because fuel, oil and cleaning chemicals are precisely what it resists. Silicone is preferred where the dominant stress is high temperature, thermal cycling or vibration rather than chemical attack — power electronics and assemblies mounted near heat sources. The environment specification, not the sector label, should make the choice.',
      },
      {
        q: 'Does EMS coat automotive assemblies on site?',
        a: 'Yes. EMS deploys 30+ trained engineers to run the agreed coating process on site at customer facilities across India. For automotive volumes, selective coating integrated into the line is usually the lower-cost route once masking labour is counted honestly.',
      },
      {
        q: 'What coating is used for EV power electronics?',
        a: 'Traction inverters, BMS boards and on-board chargers combine high heat density with high voltage, which typically points to silicone for its temperature range and flexibility, or to a polyurethane system where fluid exposure is also present. Because creepage and clearance are being managed alongside thermal load, the coating specification should be reviewed with the isolation design rather than after it.',
      },
    ],
  },
  {
    slug: 'aerospace-defence',
    name: 'Aerospace & defence',
    seoTitle: 'Conformal Coating for Aerospace & Defence Electronics | EMS',
    seoDescription:
      'Aerospace and defence PCB conformal coating in India: ELPEGUARD systems for altitude, thermal cycling and condensation, to IPC-A-610 Class 3, 100% UV inspected.',
    heading: 'Aerospace & defence',
    lead: 'Wide thermal excursions, low-pressure operation, sustained vibration and a documentation trail that matters as much as the coating itself.',
    img: 'selective-conformal-coating-640_sch-uk-2.jpeg',
    imgAlt: 'Selective conformal coating applied to a printed circuit board assembly',
    stresses: [
      {
        title: 'Altitude and reduced pressure',
        body: 'Lower air pressure reduces the voltage at which air breaks down between conductors. A conformal coating that fills the gap with solid dielectric rather than air is part of how an assembly keeps its creepage and clearance margins at altitude.',
      },
      {
        title: 'Wide, repeated thermal excursions',
        body: 'Ground-to-altitude cycling covers a far wider range than most industrial equipment sees, and repeats it constantly. Coating flexibility across that whole range matters more than performance at any single temperature.',
      },
      {
        title: 'Condensation on descent',
        body: 'A cold assembly meeting warmer, moister air condenses water directly onto the board. Coverage at board edges, under tall components and at connector shrouds is where that condensation does its damage.',
      },
      {
        title: 'Vibration and mechanical shock',
        body: 'Airframe and vehicle vibration runs continuously, with shock events on top. A brittle film concentrates that energy at solder fillets, which is why elasticity is valued over hardness here.',
      },
      {
        title: 'Traceability',
        body: 'In this sector the record of what was applied, at what thickness, inspected how, and by whom is part of the deliverable. A coating process that cannot produce that record is not usable regardless of how well it performs.',
      },
    ],
    coatings: [
      { name: 'Silicone (SR)', why: 'The widest temperature range with retained flexibility — the usual choice where thermal excursion and vibration dominate.' },
      { name: 'Polyurethane (UR)', why: 'Where fluid, solvent or abrasion exposure is present alongside the environmental load.' },
      { name: 'Acrylic (AR)', why: 'Where field repairability and rapid rework outweigh chemical exposure — common on ground support and test equipment.' },
    ],
    packing: [
      'Static shielding bags and aluminium MBB with desiccant and humidity indicator cards for controlled storage.',
      'ESD thermoformed trays holding assemblies in fixed orientation for handling and inspection.',
      'Conductive foam inserts for boards and modules with exposed connector pins.',
      'VCI packaging where machined metal parts and hardware ship alongside the electronics.',
    ],
    standards:
      'Aerospace and defence programmes typically specify IPC-A-610 Class 3 acceptance — continued performance on demand, no tolerable downtime. Material is qualified against IPC-CC-830B; legacy drawings frequently still call out the cancelled MIL-I-46058C, which should be resolved in writing to an IPC-CC-830B equivalent before work starts. Expect a customer or programme specification on top of both.',
    faqs: [
      {
        q: 'What acceptance class applies to aerospace conformal coating?',
        a: 'IPC-A-610 Class 3 is the usual requirement for aerospace and defence assemblies: high-performance electronics where continued performance on demand is essential and downtime cannot be tolerated. Class 3 tightens the acceptance criteria for coverage, thickness and defects, and it should be stated on the drawing rather than assumed by the supplier.',
      },
      {
        q: 'Our drawing calls out MIL-I-46058C. Is that still usable?',
        a: 'MIL-I-46058C was cancelled and its Qualified Products List discontinued, with IPC-CC-830 named as the superseding specification. Legacy drawings still reference it constantly. The practical route is to treat the callout as a request for an equivalently qualified material, agree in writing that the lot will be judged against IPC-CC-830B, and record that on the process sheet before any board is coated.',
      },
      {
        q: 'What documentation does EMS provide with coated aerospace assemblies?',
        a: 'Each lot is run to the process sheet agreed at sign-off — coating system, application method, masking scheme, thickness target and band, cure schedule and acceptance class — and the UV inspection and thickness results are compiled for the batch. Any record format a programme specification requires beyond that should be raised at enquiry so it can be agreed before production.',
      },
    ],
  },
  {
    slug: 'medical-devices',
    name: 'Medical device electronics',
    seoTitle: 'Conformal Coating for Medical Device PCBs | EMS Technologies',
    seoDescription:
      'Medical device PCB conformal coating in India: ELPEGUARD for disinfectants, sterilisation, humidity and leakage current, 100% UV inspected and traceable.',
    heading: 'Medical device electronics',
    lead: 'Repeated disinfection, sterilisation cycles, body fluids and humidity — against a regulatory expectation that the process is documented as tightly as the product.',
    img: '2019-services-hires-coating.jpg',
    imgAlt: 'ELPEGUARD conformal coating applied to an assembled printed circuit board, EMS Technologies',
    stresses: [
      {
        title: 'Cleaning and disinfection chemistry',
        body: 'Alcohols, quaternary ammonium compounds, hypochlorite and hydrogen peroxide are applied to equipment surfaces daily, sometimes hourly. Ingress at a seam puts an aggressive chemical directly onto a board that was specified for humidity, not for solvent attack.',
      },
      {
        title: 'Sterilisation cycles',
        body: 'Autoclave, ethylene oxide and gamma routes each stress a coating differently — steam and pressure, chemical attack, or polymer chain damage. Which route the device sees has to be part of the coating specification, not discovered during validation.',
      },
      {
        title: 'Leakage current and patient isolation',
        body: 'Where an assembly sits inside a patient-connected circuit, the coating contributes to the insulation system. Dielectric performance and coverage at the isolation barrier stop being a reliability question and become a safety one.',
      },
      {
        title: 'Humidity and body fluids',
        body: 'Handheld and bedside equipment meets condensation, spills and aerosols routinely. Coverage at connectors, button apertures and enclosure seams is where the protection is actually won or lost.',
      },
      {
        title: 'Traceability and change control',
        body: 'A coating process feeding a regulated device is part of the device master record. An undocumented change of chemistry or thickness band is a compliance event, not a process improvement.',
      },
    ],
    coatings: [
      { name: 'Polyurethane (UR)', why: 'Strong resistance to cleaning and disinfection chemistry, plus a robust moisture barrier — the usual choice where surfaces are wiped down constantly.' },
      { name: 'Silicone (SR)', why: 'Where sterilisation heat, thermal cycling or flexibility over a wide range is the governing requirement.' },
      { name: 'Acrylic (AR)', why: 'Non-patient-contact and lower-exposure assemblies where serviceability and rework speed matter more than chemical resistance.' },
    ],
    packing: [
      'Static shielding bags for assemblies moving between contract manufacturer and device assembly.',
      'Aluminium MBB with desiccant and humidity indicator for moisture sensitive devices and controlled shelf life.',
      'ESD thermoformed trays that hold sub-assemblies in fixed orientation through inspection and kitting.',
      'Clean, particle-controlled handling and clearly labelled lot identification throughout.',
    ],
    standards:
      'Medical assemblies commonly specify IPC-A-610 Class 3 where the device is life-supporting or life-sustaining, and Class 2 for lower-risk equipment. Material qualification is against IPC-CC-830B. Because the coating process sits inside the device master record, the process sheet, thickness band and inspection method should be fixed and change-controlled rather than left to the supplier’s discretion.',
    faqs: [
      {
        q: 'Which conformal coating survives medical disinfectants?',
        a: 'Polyurethane is generally the most resistant of the common families to alcohols, quaternary ammonium compounds and hypochlorite-based cleaners, which is why it is the frequent choice for equipment wiped down constantly. The specific disinfectants and their contact frequency should be listed in the specification, because compatibility is a property of the grade rather than of the family as a whole.',
      },
      {
        q: 'Can conformal coating survive autoclaving?',
        a: 'It depends on the chemistry and on how the assembly is protected within the device. Steam autoclaving combines heat, pressure and moisture, and silicone systems generally handle that combination better than acrylic. The sterilisation route — autoclave, ethylene oxide or gamma — must be stated in the coating specification, since each one stresses the polymer differently.',
      },
      {
        q: 'Does the coating affect patient leakage current?',
        a: 'It can, where the coated assembly forms part of a patient-connected circuit. The coating adds dielectric across conductor spacings and contributes to the isolation barrier, so coverage and thickness at that barrier become safety-relevant rather than merely reliability-relevant, and should be verified as part of the isolation design.',
      },
    ],
  },
  {
    slug: 'led-lighting',
    name: 'LED & lighting electronics',
    seoTitle: 'Conformal Coating for LED & Lighting PCBs | EMS Technologies',
    seoDescription:
      'LED and lighting conformal coating in India: non-yellowing, low-outgassing ELPEGUARD for LED modules and drivers facing heat, humidity, UV and outdoor use.',
    heading: 'LED & lighting electronics',
    lead: 'Continuous heat at the junction, outdoor humidity and UV exposure, and one requirement the other sectors do not have: the coating must not discolour or dim the light it sits near.',
    img: 'uv-oven.png',
    imgAlt: 'UV curing oven used to cure conformal coated PCB assemblies, EMS Technologies',
    stresses: [
      {
        title: 'Sustained junction heat',
        body: 'LED modules and their drivers run hot continuously rather than in bursts. Sustained temperature ages a coating faster than any single peak, and a chemistry chosen for its maximum rating may still discolour after a year at 85 °C.',
      },
      {
        title: 'Optical clarity and yellowing',
        body: 'A coating anywhere near the emitter must stay clear. Yellowing costs measurable lumen output and shifts colour temperature — a warranty problem in luminaires sold on a specified CCT.',
      },
      {
        title: 'Outdoor exposure',
        body: 'Street lighting, façade and signage assemblies face UV, rain, dust, temperature swing and condensation continuously. Coverage at the driver board edges and connector entries is where ingress starts.',
      },
      {
        title: 'Outgassing and contamination',
        body: 'Volatiles released from a curing or ageing coating can deposit on optics and reflectors inside a sealed luminaire, dimming the fixture without any component failing. Low-outgassing behaviour is a real selection criterion here.',
      },
      {
        title: 'Driver-side stress',
        body: 'The driver board carries the mains-side voltage, the heat and the electrolytic capacitors. It is frequently the assembly that fails first, and frequently the one whose coating specification received the least attention.',
      },
    ],
    coatings: [
      { name: 'Silicone (SR)', why: 'Wide temperature range, retained flexibility and good optical stability — the usual choice on and around the LED module itself.' },
      { name: 'Polyurethane (UR)', why: 'Outdoor drivers and control gear where moisture, dust and chemical exposure govern.' },
      { name: 'UV thick-film (DSL)', why: 'High-volume module production on selective coating lines, where cure time dictates throughput.' },
    ],
    packing: [
      'Anti-static bubble bags and dissipative trays for populated LED boards, which are easily damaged by point contact.',
      'ESD thermoformed trays with cavities matched to module outline, protecting the emitter surface from contact.',
      'PP corrugated bins and dividers for driver assemblies circulating between plants.',
      'Moisture barrier packing where modules are stored before final assembly.',
    ],
    standards:
      'Lighting assemblies usually sit at IPC-A-610 Class 2, with material qualified to IPC-CC-830B. The sector-specific requirements are commonly imposed by the luminaire specification rather than the coating standard — non-yellowing behaviour, low outgassing and compatibility with optical components sealed in the same enclosure. State them explicitly; no IPC class covers them.',
    faqs: [
      {
        q: 'Will conformal coating reduce LED light output?',
        a: 'A correctly selected coating should not. The risks are two: a coating that yellows with sustained heat and UV, which reduces output and shifts colour temperature; and one that outgasses volatiles inside a sealed luminaire, which deposit on optics and dim the fixture without any component failing. Both are selection criteria that need to be stated, because no IPC class covers them.',
      },
      {
        q: 'What coating is best for outdoor LED drivers?',
        a: 'Polyurethane is the common choice for outdoor driver and control-gear boards, where moisture, dust, temperature swing and chemical exposure govern. Where the board also runs hot continuously or cycles hard, silicone is preferred for its temperature range and retained flexibility. In practice the driver deserves at least as much specification attention as the LED module, since it usually fails first.',
      },
      {
        q: 'Can the LED emitter area be left uncoated?',
        a: 'Yes, and it usually should be. The emitter surface, optical interfaces, thermal pads and connectors are treated as keep-out areas, marked on the drawing and either masked or programmed around on selective coating equipment — then verified clear after cure rather than only after masking.',
      },
    ],
  },
];
