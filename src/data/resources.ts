import { Resource } from '@/types';

export const resources: Resource[] = [
  // Government
  {
    id: 'medicare',
    name: 'Medicare',
    category: 'government',
    categoryLabel: 'Government',
    description:
      'Federal health insurance for people 65+ and certain younger people with disabilities. Covers hospital stays, short-term skilled nursing, home health, and more.',
    actionItems: [
      'Review what Medicare Part A and B cover',
      'Compare Medicare Advantage (Part C) plans in your area',
      'Use Medicare Care Compare to rate nursing facilities',
      'Sign up at medicare.gov during open enrollment',
    ],
    website: 'https://www.medicare.gov',
    phone: '1-800-633-4227',
  },
  {
    id: 'medicaid',
    name: 'Medicaid',
    category: 'government',
    categoryLabel: 'Government',
    description:
      'Joint federal and state health coverage for those with limited income. Many states offer Medicaid waivers that fund in-home care and assisted living as an alternative to nursing homes.',
    actionItems: [
      'Contact your state Medicaid office to check eligibility',
      'Ask specifically about Home and Community-Based Services (HCBS) waivers',
      'Understand how asset limits may affect eligibility',
      'Work with an elder law attorney if spend-down planning is needed',
    ],
    website: 'https://www.medicaid.gov',
  },
  {
    id: 'eldercare-locator',
    name: 'Eldercare Locator',
    category: 'government',
    categoryLabel: 'Government',
    description:
      'A free public service of the U.S. Administration on Aging that connects older adults and caregivers to local services including transportation, meals, housing, and caregiver support.',
    actionItems: [
      'Call or go online to find your local Area Agency on Aging',
      'Search for free or low-cost local services',
      'Ask about caregiver support programs in your community',
    ],
    website: 'https://eldercare.acl.gov',
    phone: '1-800-677-1116',
  },
  {
    id: 'benefits-gov',
    name: 'Benefits.gov',
    category: 'government',
    categoryLabel: 'Government',
    description:
      'Official U.S. government website where you can screen for 1,000+ federal and state benefit programs including health, housing, food, and financial assistance.',
    actionItems: [
      'Complete the online benefit screening questionnaire',
      'Identify programs your loved one may qualify for',
      'Follow links to apply for benefits directly',
    ],
    website: 'https://www.benefits.gov',
  },
  // Financial Aid
  {
    id: 'va-benefits',
    name: 'VA Aid & Attendance Benefit',
    category: 'financial-aid',
    categoryLabel: 'Financial Aid',
    description:
      'Veterans and surviving spouses who need help with daily activities may qualify for the VA Aid & Attendance benefit, which can significantly offset the cost of in-home care, assisted living, or nursing home care.',
    actionItems: [
      'Confirm the veteran meets service and discharge requirements',
      'Gather DD-214 discharge papers',
      'Contact your local VA regional office or Veterans Service Organization',
      'Apply through the VA Pension program',
    ],
    website: 'https://www.va.gov/pension/aid-attendance-housebound',
    phone: '1-800-827-1000',
  },
  {
    id: 'ncoa-benefitscheckup',
    name: 'BenefitsCheckUp (NCOA)',
    category: 'financial-aid',
    categoryLabel: 'Financial Aid',
    description:
      'Run by the National Council on Aging, BenefitsCheckUp is a free screening tool that identifies federal, state, and local benefits programs for adults 55+ covering prescriptions, health care, food, utilities, and more.',
    actionItems: [
      'Complete the free online screening at benefitscheckup.org',
      'Review the personalized list of programs',
      'Get enrollment assistance through the site',
    ],
    website: 'https://www.benefitscheckup.org',
  },
  {
    id: 'ltc-insurance',
    name: 'Long-Term Care Insurance',
    category: 'financial-aid',
    categoryLabel: 'Financial Aid',
    description:
      'Long-term care insurance policies help cover costs of in-home care, assisted living, and nursing homes. Review existing policies carefully — benefit triggers, daily benefit amounts, and inflation protection all vary widely.',
    actionItems: [
      'Locate any existing long-term care insurance policies',
      'Review the elimination period (how long before benefits begin)',
      'Contact the insurer to understand the claims process',
      'Consult a financial advisor if considering purchasing a policy',
    ],
  },
  {
    id: 'medicaid-planning',
    name: 'Medicaid Planning Resources',
    category: 'financial-aid',
    categoryLabel: 'Financial Aid',
    description:
      'Medicaid has strict asset and income limits for long-term care coverage. Legal strategies like spend-down planning, spousal protections, and trusts may help families qualify without depleting all savings.',
    actionItems: [
      'Understand your state\'s Medicaid asset limits',
      'Consult a certified elder law attorney before spending down assets',
      'Learn about the Community Spouse Resource Allowance',
      'Review the 5-year look-back period for asset transfers',
    ],
    website: 'https://www.medicaidplanningassistance.org',
  },
  // Caregiver Support
  {
    id: 'family-caregiver-alliance',
    name: 'Family Caregiver Alliance',
    category: 'caregiver-support',
    categoryLabel: 'Caregiver Support',
    description:
      'A national nonprofit providing education, services, research, and advocacy for the 53 million Americans who provide unpaid care for a chronically ill or disabled adult. Offers extensive free online resources and a national call center.',
    actionItems: [
      'Explore caregiver guides by condition (dementia, stroke, Parkinson\'s, etc.)',
      'Find local respite care resources',
      'Connect with a care consultant for personalized guidance',
    ],
    website: 'https://www.caregiver.org',
    phone: '1-800-445-8106',
  },
  {
    id: 'aarp-caregiving',
    name: 'AARP Caregiving Resources',
    category: 'caregiver-support',
    categoryLabel: 'Caregiver Support',
    description:
      'AARP offers a comprehensive suite of caregiving tools including a care guide, local resource finder, online community forums, and the AARP Caregiving app to help coordinate care among family members.',
    actionItems: [
      'Create a free AARP account to access caregiving tools',
      'Use the caregiving app to coordinate with family',
      'Join local caregiver support groups listed on AARP',
    ],
    website: 'https://www.aarp.org/caregiving',
  },
  {
    id: 'alzheimers-assoc',
    name: "Alzheimer's Association Helpline",
    category: 'caregiver-support',
    categoryLabel: 'Caregiver Support',
    description:
      "The Alzheimer's Association provides 24/7 support through their helpline, connecting families and caregivers with specialists, local chapters, support groups, and care consultations.",
    actionItems: [
      'Call the 24/7 helpline for immediate support',
      'Find a local support group near you',
      'Use the online care planning tools',
      'Access free educational programs',
    ],
    website: 'https://www.alz.org',
    phone: '1-800-272-3900',
  },
  // Legal
  {
    id: 'power-of-attorney',
    name: 'Durable Power of Attorney',
    category: 'legal',
    categoryLabel: 'Legal',
    description:
      'A Durable Power of Attorney (DPOA) grants a trusted person the legal authority to manage financial and legal affairs if the senior becomes incapacitated. This document must be created while the senior still has decision-making capacity.',
    actionItems: [
      'Identify a trusted person to serve as agent',
      'Consult an elder law or estate planning attorney to draft the document',
      'Ensure the document is witnessed and notarized as required by your state',
      'Store copies in a safe, accessible location and share with key parties',
    ],
    website: 'https://www.naela.org',
  },
  {
    id: 'advance-directive',
    name: 'Advance Directives & Living Wills',
    category: 'legal',
    categoryLabel: 'Legal',
    description:
      'Advance directives are legal documents that specify a person\'s medical treatment wishes if they cannot communicate. A living will details specific treatment preferences; a Healthcare Proxy names a medical decision-maker.',
    actionItems: [
      'Download your state\'s advance directive form (often free)',
      'Discuss wishes with family and the primary physician',
      'Complete the Healthcare Proxy / Medical Power of Attorney',
      'Provide copies to doctors, hospitals, and family members',
    ],
    website: 'https://www.caringinfo.org',
  },
  {
    id: 'naela',
    name: 'National Academy of Elder Law Attorneys',
    category: 'legal',
    categoryLabel: 'Legal',
    description:
      'NAELA is a professional association of attorneys who specialize in elder law, including Medicaid planning, guardianship, estate planning, and protecting seniors from financial exploitation.',
    actionItems: [
      'Use the NAELA directory to find a certified elder law attorney (CELA)',
      'Schedule an initial consultation (some offer free consultations)',
      'Bring key financial documents to your first meeting',
    ],
    website: 'https://www.naela.org',
  },
  // Housing
  {
    id: 'hud-housing',
    name: 'HUD Housing Counseling',
    category: 'housing',
    categoryLabel: 'Housing',
    description:
      'The U.S. Department of Housing and Urban Development offers free or low-cost housing counseling through approved agencies. Counselors can help seniors explore reverse mortgages, rental assistance, and housing options.',
    actionItems: [
      'Call the HUD-approved housing counselor hotline',
      'Ask about Section 202 Supportive Housing for the Elderly',
      'Explore reverse mortgage options (HECM program)',
    ],
    website: 'https://www.hud.gov/program_offices/housing/sfh/hcc',
    phone: '1-800-569-4287',
  },
  {
    id: 'norcs',
    name: 'NORCs – Aging in Place Communities',
    category: 'housing',
    categoryLabel: 'Housing',
    description:
      'Naturally Occurring Retirement Communities (NORCs) are neighborhoods where a large proportion of residents are older adults. Many receive public funding to coordinate services (health, social work, activities) to help seniors age in place.',
    actionItems: [
      'Search for NORC programs in your city or county',
      'Contact your local Area Agency on Aging to ask about NORC funding',
      'Explore Village Network programs in your area as an alternative',
    ],
    website: 'https://www.norcs.com',
  },
  // Medical
  {
    id: 'care-compare',
    name: 'Medicare Care Compare',
    category: 'medical',
    categoryLabel: 'Medical',
    description:
      "Medicare's Care Compare tool lets you research and compare nursing homes, home health agencies, hospices, and other providers based on quality ratings, inspection reports, and staffing levels.",
    actionItems: [
      'Search for nursing homes or home health agencies in your area',
      'Review the 5-star quality rating system',
      'Read the most recent state inspection reports',
      'Compare staffing hours per resident per day',
    ],
    website: 'https://www.medicare.gov/care-compare',
  },
  {
    id: 'geriatric-care-managers',
    name: 'Geriatric Care Managers',
    category: 'medical',
    categoryLabel: 'Medical',
    description:
      'Aging Life Care Professionals (formerly Geriatric Care Managers) are specialists — often nurses or social workers — who assess needs, coordinate care, and serve as local advocates for seniors, especially valuable when family lives far away.',
    actionItems: [
      'Find a member through the Aging Life Care Association directory',
      'Ask about their credentials and areas of specialization',
      'Consider a one-time assessment to get a professional care plan',
    ],
    website: 'https://www.aginglifecare.org',
  },
  {
    id: 'nhpco',
    name: 'National Hospice and Palliative Care Org.',
    category: 'medical',
    categoryLabel: 'Medical',
    description:
      'NHPCO is the largest nonprofit membership organization representing hospice and palliative care programs in the U.S. Their consumer site CaringInfo offers free resources and a hospice locator.',
    actionItems: [
      'Visit CaringInfo to learn what hospice and palliative care involve',
      'Use the hospice locator to find Medicare-certified hospices nearby',
      'Download free advance care planning guides',
    ],
    website: 'https://www.nhpco.org',
    phone: '1-800-658-8898',
  },

  // California / Medi-Cal
  {
    id: 'dhcs-calaim',
    name: 'DHCS – CalAIM Program Info',
    category: 'california',
    categoryLabel: 'California',
    description:
      'The California Department of Health Care Services (DHCS) oversees CalAIM — the initiative transforming Medi-Cal with Enhanced Care Management, Community Supports, and more. Find official program details, eligibility guides, and managed care plan information.',
    actionItems: [
      'Learn about Enhanced Care Management (ECM) eligibility',
      'Find your Medi-Cal managed care plan to request CalAIM services',
      'Review the Community Supports your plan offers',
    ],
    website: 'https://www.dhcs.ca.gov/calaim',
  },
  {
    id: 'ihss-program',
    name: 'IHSS – In-Home Supportive Services',
    category: 'california',
    categoryLabel: 'California',
    description:
      'California\'s IHSS program pays for in-home care services for eligible Medi-Cal beneficiaries so they can remain safely at home. A family member can often be hired and paid as the IHSS provider.',
    actionItems: [
      'Apply through your county IHSS office or CDSS website',
      'Request a home visit assessment from a social worker',
      'Ask about the IHSS Protective Supervision program for those with cognitive issues',
      'Learn how to become your loved one\'s paid provider',
    ],
    website: 'https://www.cdss.ca.gov/in-home-supportive-services',
    phone: '1-916-651-8848',
  },
  {
    id: 'mssp',
    name: 'MSSP – Multipurpose Senior Services Program',
    category: 'california',
    categoryLabel: 'California',
    description:
      'MSSP is a Medi-Cal waiver providing case management and community services to frail older Californians who would otherwise need nursing facility care. Contact your local Area Agency on Aging to apply.',
    actionItems: [
      'Find your local MSSP site through the California Department of Aging',
      'Request a needs assessment to determine eligibility',
      'Ask about services like adult day health care, respite, and meal delivery',
    ],
    website: 'https://www.aging.ca.gov/Providers_and_Partners/MSSP_Site_Agencies',
    phone: '1-800-510-2020',
  },
  {
    id: 'pace-california',
    name: 'PACE – Program of All-Inclusive Care',
    category: 'california',
    categoryLabel: 'California',
    description:
      'PACE provides comprehensive managed care for adults 55+ who qualify for nursing home care but wish to live in the community. In California, PACE covers all Medicare and Medi-Cal services through one coordinated team.',
    actionItems: [
      'Find a California PACE organization at npaonline.org',
      'Confirm your address is within a PACE service area',
      'Request an enrollment assessment from the PACE organization',
    ],
    website: 'https://npaonline.org/find-a-pace-program',
  },
  {
    id: 'medi-cal-enroll',
    name: 'Medi-Cal Enrollment (Covered California)',
    category: 'california',
    categoryLabel: 'California',
    description:
      'Apply for Medi-Cal — California\'s Medicaid program — through Covered California or your county\'s social services office. Most Californians 65+ with limited income qualify. No cost-sharing for most covered services.',
    actionItems: [
      'Apply online at coveredca.com or call the Medi-Cal helpline',
      'Gather proof of income, residency, and identity',
      'Ask about the Senior Medi-Cal program and the MAGI Medi-Cal pathways',
      'Enroll any time — Medi-Cal has no open enrollment period',
    ],
    website: 'https://www.coveredca.com/medi-cal',
    phone: '1-800-300-1506',
  },
  {
    id: 'ca-dept-aging',
    name: 'California Department of Aging',
    category: 'california',
    categoryLabel: 'California',
    description:
      'The California Department of Aging administers programs that serve older adults, adults with disabilities, and caregivers — including the Area Agencies on Aging network, MSSP, and the Long-Term Care Ombudsman.',
    actionItems: [
      'Find your local Area Agency on Aging (AAA)',
      'Contact the Long-Term Care Ombudsman for facility complaints',
      'Explore the California Master Plan for Aging resources',
    ],
    website: 'https://www.aging.ca.gov',
    phone: '1-800-510-2020',
  },
  {
    id: 'we-are-medi-cal',
    name: 'We Are Medi-Cal Partners for Senior Care',
    category: 'california',
    categoryLabel: 'California',
    description:
      'We are your local Medi-Cal partners — helping California families navigate enrollment, CalAIM services, IHSS, and senior care coordination. Reach out for personalized guidance on Medi-Cal programs for your loved one.',
    actionItems: [
      'Contact us for a free Medi-Cal eligibility consultation',
      'Ask about CalAIM Enhanced Care Management referrals',
      'Get help navigating IHSS applications and managed care enrollment',
    ],
  },
];

export const resourceCategories: { id: string; label: string }[] = [
  { id: 'all', label: 'All Resources' },
  { id: 'california', label: '🌟 California / Medi-Cal' },
  { id: 'government', label: 'Government' },
  { id: 'financial-aid', label: 'Financial Aid' },
  { id: 'caregiver-support', label: 'Caregiver Support' },
  { id: 'legal', label: 'Legal' },
  { id: 'housing', label: 'Housing' },
  { id: 'medical', label: 'Medical' },
];
