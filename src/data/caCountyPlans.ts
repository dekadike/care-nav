export interface MediCalPlan {
  name: string;
  phone: string;
  website: string;
}

export interface CountyInfo {
  county: string;
  ihssPhone: string;
  ihssWebsite: string;
  plans: MediCalPlan[];
}

// Major California counties with Medi-Cal managed care plans and IHSS offices
export const countyData: Record<string, CountyInfo> = {
  'Los Angeles': {
    county: 'Los Angeles',
    ihssPhone: '(888) 944-4477',
    ihssWebsite: 'https://dpss.lacounty.gov/ihss',
    plans: [
      { name: 'L.A. Care Health Plan', phone: '(888) 452-2273', website: 'https://www.lacare.org' },
      { name: 'Anthem Blue Cross', phone: '(800) 407-4627', website: 'https://www.anthem.com/ca/medi-cal' },
      { name: 'Blue Shield Promise', phone: '(800) 541-4519', website: 'https://www.blueshieldca.com/bscca/public/promise-health-plan' },
      { name: 'Health Net', phone: '(800) 675-6110', website: 'https://www.healthnet.com/medi-cal' },
      { name: 'Molina Healthcare', phone: '(888) 665-4621', website: 'https://www.molinahealthcare.com/en-US/members/ca/medi-cal' },
      { name: 'Kaiser Permanente', phone: '(800) 464-4000', website: 'https://healthy.kaiserpermanente.org/southern-california/front-door' },
    ],
  },
  'Orange': {
    county: 'Orange',
    ihssPhone: '(800) 496-4477',
    ihssWebsite: 'https://www.occr.ocgov.com/programs-services/IHSS',
    plans: [
      { name: 'CalOptima Health', phone: '(855) 877-3885', website: 'https://www.caloptima.org' },
      { name: 'Anthem Blue Cross', phone: '(800) 407-4627', website: 'https://www.anthem.com/ca/medi-cal' },
      { name: 'Health Net', phone: '(800) 675-6110', website: 'https://www.healthnet.com/medi-cal' },
      { name: 'Kaiser Permanente', phone: '(800) 464-4000', website: 'https://healthy.kaiserpermanente.org/southern-california/front-door' },
      { name: 'Molina Healthcare', phone: '(888) 665-4621', website: 'https://www.molinahealthcare.com/en-US/members/ca/medi-cal' },
    ],
  },
  'San Diego': {
    county: 'San Diego',
    ihssPhone: '(800) 339-4477',
    ihssWebsite: 'https://www.sandiegocounty.gov/hhsa/programs/ais/ihss',
    plans: [
      { name: 'Community Health Group', phone: '(800) 224-7766', website: 'https://www.chgsd.com' },
      { name: 'Health Net', phone: '(800) 675-6110', website: 'https://www.healthnet.com/medi-cal' },
      { name: 'Molina Healthcare', phone: '(888) 665-4621', website: 'https://www.molinahealthcare.com/en-US/members/ca/medi-cal' },
      { name: 'Kaiser Permanente', phone: '(800) 464-4000', website: 'https://healthy.kaiserpermanente.org/southern-california/front-door' },
      { name: 'Anthem Blue Cross', phone: '(800) 407-4627', website: 'https://www.anthem.com/ca/medi-cal' },
    ],
  },
  'San Francisco': {
    county: 'San Francisco',
    ihssPhone: '(415) 557-6200',
    ihssWebsite: 'https://www.sfhsa.org/services/seniors-adults-disabilities/in-home-supportive-services',
    plans: [
      { name: 'San Francisco Health Plan', phone: '(415) 547-7800', website: 'https://www.sfhp.org' },
      { name: 'Anthem Blue Cross', phone: '(800) 407-4627', website: 'https://www.anthem.com/ca/medi-cal' },
      { name: 'Health Net', phone: '(800) 675-6110', website: 'https://www.healthnet.com/medi-cal' },
      { name: 'Molina Healthcare', phone: '(888) 665-4621', website: 'https://www.molinahealthcare.com/en-US/members/ca/medi-cal' },
      { name: 'Kaiser Permanente', phone: '(800) 464-4000', website: 'https://healthy.kaiserpermanente.org/northern-california/front-door' },
    ],
  },
  'Alameda': {
    county: 'Alameda',
    ihssPhone: '(510) 577-1900',
    ihssWebsite: 'https://www.alamedasocialservices.org/public/services/independence/in_home_support.cfm',
    plans: [
      { name: 'Alameda Alliance for Health', phone: '(510) 747-4500', website: 'https://www.alamedaalliance.org' },
      { name: 'Anthem Blue Cross', phone: '(800) 407-4627', website: 'https://www.anthem.com/ca/medi-cal' },
      { name: 'Health Net', phone: '(800) 675-6110', website: 'https://www.healthnet.com/medi-cal' },
      { name: 'Kaiser Permanente', phone: '(800) 464-4000', website: 'https://healthy.kaiserpermanente.org/northern-california/front-door' },
      { name: 'Molina Healthcare', phone: '(888) 665-4621', website: 'https://www.molinahealthcare.com/en-US/members/ca/medi-cal' },
    ],
  },
  'Santa Clara': {
    county: 'Santa Clara',
    ihssPhone: '(408) 792-1600',
    ihssWebsite: 'https://www.sccgov.org/sites/ssa/daas/Pages/in-home-supportive-services.aspx',
    plans: [
      { name: 'Santa Clara Family Health Plan', phone: '(408) 376-7200', website: 'https://www.scfhp.com' },
      { name: 'Anthem Blue Cross', phone: '(800) 407-4627', website: 'https://www.anthem.com/ca/medi-cal' },
      { name: 'Health Net', phone: '(800) 675-6110', website: 'https://www.healthnet.com/medi-cal' },
      { name: 'Kaiser Permanente', phone: '(800) 464-4000', website: 'https://healthy.kaiserpermanente.org/northern-california/front-door' },
      { name: 'Molina Healthcare', phone: '(888) 665-4621', website: 'https://www.molinahealthcare.com/en-US/members/ca/medi-cal' },
    ],
  },
  'Sacramento': {
    county: 'Sacramento',
    ihssPhone: '(916) 874-9471',
    ihssWebsite: 'https://www.dhhs.saccounty.gov/DAAS/Pages/In-Home-Supportive-Services.aspx',
    plans: [
      { name: 'Molina Healthcare', phone: '(888) 665-4621', website: 'https://www.molinahealthcare.com/en-US/members/ca/medi-cal' },
      { name: 'Health Net', phone: '(800) 675-6110', website: 'https://www.healthnet.com/medi-cal' },
      { name: 'Anthem Blue Cross', phone: '(800) 407-4627', website: 'https://www.anthem.com/ca/medi-cal' },
      { name: 'Kaiser Permanente', phone: '(800) 464-4000', website: 'https://healthy.kaiserpermanente.org/northern-california/front-door' },
    ],
  },
  'Riverside': {
    county: 'Riverside',
    ihssPhone: '(888) 960-4477',
    ihssWebsite: 'https://www.dpss.co.riverside.ca.us/adult-services/in-home-supportive-services-ihss',
    plans: [
      { name: 'Inland Empire Health Plan (IEHP)', phone: '(800) 440-4347', website: 'https://www.iehp.org' },
      { name: 'Molina Healthcare', phone: '(888) 665-4621', website: 'https://www.molinahealthcare.com/en-US/members/ca/medi-cal' },
    ],
  },
  'San Bernardino': {
    county: 'San Bernardino',
    ihssPhone: '(877) 481-4477',
    ihssWebsite: 'https://hss.sbcounty.gov/DAAS/IHSS',
    plans: [
      { name: 'Inland Empire Health Plan (IEHP)', phone: '(800) 440-4347', website: 'https://www.iehp.org' },
      { name: 'Molina Healthcare', phone: '(888) 665-4621', website: 'https://www.molinahealthcare.com/en-US/members/ca/medi-cal' },
    ],
  },
  'Fresno': {
    county: 'Fresno',
    ihssPhone: '(559) 600-3569',
    ihssWebsite: 'https://www.co.fresno.ca.us/departments/employment-and-temporary-assistance/ihss',
    plans: [
      { name: 'Health Plan of San Joaquin', phone: '(888) 936-7526', website: 'https://www.hpsj.com' },
      { name: 'Anthem Blue Cross', phone: '(800) 407-4627', website: 'https://www.anthem.com/ca/medi-cal' },
      { name: 'Health Net', phone: '(800) 675-6110', website: 'https://www.healthnet.com/medi-cal' },
      { name: 'Molina Healthcare', phone: '(888) 665-4621', website: 'https://www.molinahealthcare.com/en-US/members/ca/medi-cal' },
    ],
  },
  'Kern': {
    county: 'Kern',
    ihssPhone: '(661) 631-6000',
    ihssWebsite: 'https://www.kernpublichealth.com/ihss',
    plans: [
      { name: 'Kern Health Systems', phone: '(800) 391-2000', website: 'https://www.kernhealthsystems.com' },
      { name: 'Anthem Blue Cross', phone: '(800) 407-4627', website: 'https://www.anthem.com/ca/medi-cal' },
      { name: 'Health Net', phone: '(800) 675-6110', website: 'https://www.healthnet.com/medi-cal' },
    ],
  },
  'Contra Costa': {
    county: 'Contra Costa',
    ihssPhone: '(925) 313-1717',
    ihssWebsite: 'https://www.cchealth.org/social-services/ihss.php',
    plans: [
      { name: 'Contra Costa Health Plan', phone: '(877) 661-6230', website: 'https://cchealth.org/healthplan' },
      { name: 'Anthem Blue Cross', phone: '(800) 407-4627', website: 'https://www.anthem.com/ca/medi-cal' },
      { name: 'Health Net', phone: '(800) 675-6110', website: 'https://www.healthnet.com/medi-cal' },
      { name: 'Kaiser Permanente', phone: '(800) 464-4000', website: 'https://healthy.kaiserpermanente.org/northern-california/front-door' },
    ],
  },
  'San Mateo': {
    county: 'San Mateo',
    ihssPhone: '(650) 595-7555',
    ihssWebsite: 'https://www.smchealth.org/ihss',
    plans: [
      { name: 'Health Plan of San Mateo', phone: '(800) 750-4776', website: 'https://www.hpsm.org' },
      { name: 'Anthem Blue Cross', phone: '(800) 407-4627', website: 'https://www.anthem.com/ca/medi-cal' },
      { name: 'Health Net', phone: '(800) 675-6110', website: 'https://www.healthnet.com/medi-cal' },
      { name: 'Kaiser Permanente', phone: '(800) 464-4000', website: 'https://healthy.kaiserpermanente.org/northern-california/front-door' },
    ],
  },
};

// Map zip code prefixes (first 3 digits) to California county
// Each prefix assigned to the primary county for that range
export const zipToCounty: Record<string, string> = {
  // Los Angeles County (900–918 range, excl. overlaps)
  '900': 'Los Angeles', '901': 'Los Angeles', '902': 'Los Angeles', '903': 'Los Angeles',
  '904': 'Los Angeles', '905': 'Los Angeles', '906': 'Los Angeles', '907': 'Los Angeles',
  '908': 'Los Angeles', '910': 'Los Angeles', '911': 'Los Angeles', '912': 'Los Angeles',
  '913': 'Los Angeles', '914': 'Los Angeles', '915': 'Los Angeles', '916': 'Los Angeles',
  '917': 'Los Angeles', '918': 'Los Angeles',
  // San Diego County
  '919': 'San Diego', '920': 'San Diego', '921': 'San Diego',
  // Riverside County
  '922': 'Riverside', '923': 'Riverside',
  // San Bernardino County
  '924': 'San Bernardino',
  // Orange County
  '925': 'Orange', '926': 'Orange', '927': 'Orange', '928': 'Orange', '929': 'Orange',
  // Kern County
  '932': 'Kern', '933': 'Kern', '934': 'Kern',
  // Fresno County
  '936': 'Fresno', '937': 'Fresno',
  // San Mateo County
  '940': 'San Mateo',
  // San Francisco County
  '941': 'San Francisco',
  // Contra Costa County
  '942': 'Contra Costa', '943': 'Contra Costa', '944': 'Contra Costa',
  // Alameda County
  '945': 'Alameda', '946': 'Alameda', '947': 'Alameda', '948': 'Alameda',
  // Santa Clara County
  '950': 'Santa Clara', '951': 'Santa Clara', '952': 'Santa Clara',
  '953': 'Santa Clara', '954': 'Santa Clara', '955': 'Santa Clara',
  // Sacramento County
  '956': 'Sacramento', '957': 'Sacramento', '958': 'Sacramento',
};

export function getCountyFromZip(zip: string): string | null {
  if (!/^\d{5}$/.test(zip)) return null;
  const prefix = zip.slice(0, 3);
  return zipToCounty[prefix] || null;
}
