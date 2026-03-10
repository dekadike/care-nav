export interface CalAIMService {
  id: string;
  name: string;
  type: 'ecm' | 'community-support' | 'program';
  description: string;
  whoQualifies: string[];
  howToAccess: string;
  icon?: string;
}

export const calaimServices: CalAIMService[] = [
  // Enhanced Care Management
  {
    id: 'ecm',
    name: 'Enhanced Care Management (ECM)',
    type: 'ecm',
    description:
      'A high-touch care management benefit for Medi-Cal members with complex needs. A dedicated Care Manager coordinates all health and social services, ensuring nothing falls through the cracks.',
    whoQualifies: [
      'Adults with multiple chronic conditions (e.g., diabetes + heart disease)',
      'People experiencing homelessness or at risk of homelessness',
      'Adults with serious mental illness or substance use disorder',
      'People recently released from incarceration',
      'Adults with complex needs transitioning from nursing facilities',
    ],
    howToAccess:
      'Contact your Medi-Cal managed care plan and ask for Enhanced Care Management. Your plan will conduct an assessment to determine eligibility.',
    icon: '🤝',
  },

  // Community Supports
  {
    id: 'cs-housing-nav',
    name: 'Housing Navigation & Tenancy Support',
    type: 'community-support',
    description:
      'Help finding and maintaining safe, stable housing — including searching for units, completing applications, and resolving tenancy issues that could lead to eviction.',
    whoQualifies: [
      'Medi-Cal members who are homeless or at risk of homelessness',
      'Adults transitioning from nursing facilities or institutions',
    ],
    howToAccess: 'Ask your ECM Care Manager or Medi-Cal managed care plan to connect you with this service.',
    icon: '🏠',
  },
  {
    id: 'cs-home-mods',
    name: 'Home Modifications',
    type: 'community-support',
    description:
      'Safety modifications to your home such as grab bars, ramps, non-slip flooring, and door widening to help you live safely at home and avoid falls or injuries.',
    whoQualifies: [
      'Medi-Cal members with physical disabilities or functional limitations',
      'Older adults at risk of nursing facility placement',
    ],
    howToAccess: 'Request through your Medi-Cal managed care plan. May require a needs assessment.',
    icon: '🔧',
  },
  {
    id: 'cs-meals',
    name: 'Meals & Medically Tailored Nutrition',
    type: 'community-support',
    description:
      'Home-delivered meals or medically tailored food for members with specific health conditions such as diabetes, heart disease, kidney disease, or HIV/AIDS.',
    whoQualifies: [
      'Members with qualifying chronic conditions where nutrition is a key treatment component',
      'Members who cannot safely prepare food at home',
    ],
    howToAccess: 'Ask your doctor or care manager for a referral to this Community Support.',
    icon: '🍽️',
  },
  {
    id: 'cs-transport',
    name: 'Non-Medical Transportation',
    type: 'community-support',
    description:
      'Rides to social services, community resources, or activities that support your health — beyond medical appointments covered by standard Medi-Cal transport.',
    whoQualifies: [
      'Members who lack transportation access for essential community activities',
    ],
    howToAccess: 'Request through your Medi-Cal plan or ECM Care Manager.',
    icon: '🚗',
  },
  {
    id: 'cs-respite',
    name: 'Caregiver Respite Services',
    type: 'community-support',
    description:
      'Temporary relief for unpaid caregivers (family members) who provide ongoing care. Allows caregivers to take a break while the member continues to receive care.',
    whoQualifies: [
      'Members who rely on an unpaid family or informal caregiver',
      'Caregivers at risk of burnout',
    ],
    howToAccess: 'Contact your Medi-Cal managed care plan and ask about Caregiver Respite.',
    icon: '💙',
  },
  {
    id: 'cs-personal-care',
    name: 'Personal Care / Habilitation',
    type: 'community-support',
    description:
      'Help with daily activities such as bathing, dressing, grooming, and mobility to support independence and avoid nursing facility placement.',
    whoQualifies: [
      'Members with functional limitations in activities of daily living (ADLs)',
      'Members not currently receiving IHSS for the same services',
    ],
    howToAccess: 'Request through your Medi-Cal managed care plan.',
    icon: '🧑‍⚕️',
  },
  {
    id: 'cs-nursing-transition',
    name: 'Nursing Facility Transition & Diversion',
    type: 'community-support',
    description:
      'Support for members leaving or seeking to avoid nursing facility placement, including care coordination, home setup, and community resource connections.',
    whoQualifies: [
      'Members currently in a nursing facility wishing to return home',
      'Members at high risk of nursing facility admission',
    ],
    howToAccess: 'Ask your managed care plan social worker or ECM Care Manager.',
    icon: '🏡',
  },

  // Key Medi-Cal Programs for Seniors
  {
    id: 'ihss',
    name: 'IHSS – In-Home Supportive Services',
    type: 'program',
    description:
      'California\'s flagship program providing in-home care hours for eligible Medi-Cal beneficiaries. Services include personal care, domestic tasks, and paramedical services. A family member can often be paid as the provider.',
    whoQualifies: [
      'Medi-Cal beneficiaries age 65+ or with qualifying disability',
      'People who need assistance with daily activities to remain safely at home',
      'Must be a California resident and meet functional need criteria',
    ],
    howToAccess:
      'Apply through your county\'s IHSS office or Department of Social Services. A social worker will conduct a home visit to assess need.',
    icon: '🏠',
  },
  {
    id: 'mssp',
    name: 'MSSP – Multipurpose Senior Services Program',
    type: 'program',
    description:
      'A Medi-Cal waiver providing case management and community services to frail elderly Californians who would otherwise require nursing facility care. Services include adult day health care, respite, and more.',
    whoQualifies: [
      'Medi-Cal beneficiaries age 65+ who are at risk of nursing facility placement',
      'Must meet nursing facility level of care criteria',
      'Available in participating California counties',
    ],
    howToAccess:
      'Contact your local Area Agency on Aging (AAA) or your county\'s MSSP site. A needs assessment will be conducted.',
    icon: '👴',
  },
  {
    id: 'pace',
    name: 'PACE – Program of All-Inclusive Care for the Elderly',
    type: 'program',
    description:
      'An all-inclusive managed care program for people 55+ who qualify for nursing home care but wish to live in the community. PACE covers all Medicare and Medi-Cal services through one coordinated team.',
    whoQualifies: [
      'Age 55 or older',
      'Live in a PACE service area in California',
      'Qualify for nursing facility level of care',
      'Eligible for Medi-Cal and/or Medicare',
    ],
    howToAccess:
      'Find a PACE organization in California at npaonline.org or contact your county health department.',
    icon: '🌟',
  },
];
