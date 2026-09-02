export interface Machine {
  model: string;
  img: string;
  summary: string;
  /** Nozzle configuration, surfaced in the model comparison and Product schema. */
  nozzle: string;
  boards: string;
  features: string[];
  /** Path under /public once a machine specification PDF is published. */
  datasheet?: string;
}

export const machines: Machine[] = [
  {
    model: 'ALTD-450GS',
    img: 'Selective_Coating_Machine1.png',
    summary:
      'A high-throughput selective coating platform: it coats jointed (panelised) boards in a single pass as well as coating single boards precisely, which is where its speed advantage comes from on a repeating production run.',
    nozzle: 'Fixed vertical, precision atomisation with pressure-regulated airflow',
    boards: 'Jointed (panelised) boards in a single pass, and single boards',
    features: [
      'Sheet-metal welded frame for an attractive shape and stable operation.',
      'Industrial-computer control with a convenient, operator-friendly interface.',
      'On-line and off-line programming both supported.',
      'Auto accuracy calibration guarantees precise running.',
      'Imported pneumatic components throughout the control system.',
      'Precision pressure regulating valve on the atomisation adjustment balances the atomised airflow and improves edge definition.',
      'Uniquely mounted electric eye that effectively prevents mis-triggered actions.',
      'Auto-collection of exhaust emissions better protects the working environment.',
      'Low-pressure protection prevents damage to the machine and parts.',
      'Connection port for automatic hand-shaking with in-line signals.',
      'Pneumatic filter with automatic drainage.',
      'Low-pressure alarm for safer operation.',
      'Integrated UV inspection for coating verification.',
      'High speed and near-silent: coats jointed (panelised) boards in a single pass for higher throughput, and coats single boards precisely.',
    ],
  },
  {
    model: 'ALTD-450U',
    img: 'Selective_Coating_Machine2.png',
    summary:
      'The same platform with a nozzle that tilts through 0–45°, so it reaches shadowed areas beside tall components and coats a board with no dead corners — the model to choose when board geometry, not throughput, is the constraint.',
    nozzle: 'Tilting 0–45°, precision atomisation with pressure-regulated airflow',
    boards: 'Single boards, including geometry a vertical nozzle cannot reach',
    features: [
      'Sheet-metal welded frame for an attractive shape and stable operation.',
      'Industrial-computer control with a convenient, operator-friendly interface.',
      'On-line and off-line programming both supported.',
      'Auto accuracy calibration guarantees precise running.',
      'Imported pneumatic components throughout the control system.',
      'Precision pressure regulating valve on the atomisation adjustment balances the atomised airflow and improves edge definition.',
      'Uniquely mounted electric eye that prevents mis-triggered actions and extends service life.',
      'Auto-collection of exhaust emissions better protects the working environment.',
      'Low-pressure protection prevents damage to the machine and parts.',
      'Connection port for automatic hand-shaking with in-line signals.',
      'Pneumatic filter with automatic drainage.',
      'Low-pressure alarm for safer operation.',
      'Integrated UV inspection for coating verification.',
      'Nozzle tilts through 0–45° so the board can be coated with no dead corners.',
      'High speed and near-silent: coats single boards precisely, and inclined coating reaches the whole board with no dead corners.',
    ],
  },
];

/** Row-per-capability comparison rendered on /SCMachines/. Drawn only from the
 *  feature lists above — no capability is claimed here that is not stated there. */
export const comparison = [
  { capability: 'Frame and build', gs: 'Sheet-metal welded frame', u: 'Sheet-metal welded frame' },
  { capability: 'Control system', gs: 'Industrial computer, operator-friendly interface', u: 'Industrial computer, operator-friendly interface' },
  { capability: 'Programming', gs: 'On-line and off-line', u: 'On-line and off-line' },
  { capability: 'Accuracy calibration', gs: 'Automatic', u: 'Automatic' },
  { capability: 'Atomisation control', gs: 'Precision pressure regulating valve; improved edge definition', u: 'Precision pressure regulating valve; improved edge definition' },
  { capability: 'Nozzle', gs: 'Fixed vertical', u: 'Tilts 0–45° for coating with no dead corners' },
  { capability: 'Board handling', gs: 'Jointed (panelised) boards in a single pass, plus single boards', u: 'Single boards, including geometry a vertical nozzle cannot reach' },
  { capability: 'Electric eye', gs: 'Uniquely mounted; prevents mis-triggered actions', u: 'Uniquely mounted; prevents mis-triggering and extends service life' },
  { capability: 'UV inspection', gs: 'Integrated', u: 'Integrated' },
  { capability: 'Exhaust handling', gs: 'Auto-collection of emissions', u: 'Auto-collection of emissions' },
  { capability: 'Pneumatics', gs: 'Imported components, filter with automatic drainage', u: 'Imported components, filter with automatic drainage' },
  { capability: 'Safety interlocks', gs: 'Low-pressure protection and alarm', u: 'Low-pressure protection and alarm' },
  { capability: 'Line integration', gs: 'Connection port for automatic hand-shaking with in-line signals', u: 'Connection port for automatic hand-shaking with in-line signals' },
  { capability: 'Chosen when', gs: 'Panelised volume and throughput govern', u: 'Board geometry and full coverage govern' },
];
