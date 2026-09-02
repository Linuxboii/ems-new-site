/** Leadership shown on /about-us/ and emitted as schema.org Person nodes.
 *
 *  `bio` and `linkedin` are the demonstrated-expertise (E-E-A-T) signals the SEO
 *  audit asked for. They are deliberately left empty rather than invented — fill
 *  them in with real credentials and profile URLs and both the page and the
 *  Person schema pick them up automatically, no code change needed.
 */
export interface TeamMember {
  name: string;
  role: string;
  email?: string;
  img: string;
  /** One or two sentences: background, years in the field, qualifications. */
  bio?: string;
  /** Full https:// URL to the person's LinkedIn profile. */
  linkedin?: string;
}

export const team: TeamMember[] = [
  { name: 'Mr. Vikram Chakravarthy Phanibatla', role: 'Principal Founder', email: 'vikramp@emstechnologies.in', img: 'IMG-20230510-WA0001.jpg' },
  { name: 'Mr. Srikant Sharma', role: 'Finance Head', email: 'info@emstechnologies.in', img: 'IMG-20230510-WA0004.jpg' },
  { name: 'Mr. Gajendra', role: 'Marketing Head (Kerala)', email: 'info@emstechnologies.in', img: 'IMG-20230510-WA0005.jpg' },
  { name: 'Mr. Nitin', role: 'Production Manager', img: 'IMG-20230510-WA0006.jpg' },
];
