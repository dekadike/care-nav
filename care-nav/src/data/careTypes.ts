import { CareType } from '@/types';

export const careTypes: CareType[] = [
  {
    id: 'in-home',
    name: 'In-Home Care',
    tagline: 'Professional care delivered in the comfort of home',
    icon: '🏠',
    description:
      'In-home care allows seniors to remain in their own residence while receiving assistance from trained caregivers. Services range from companionship and light housekeeping to personal care and skilled nursing visits.',
    bestFor: [
      'Seniors who want to maintain independence at home',
      'Those with manageable daily care needs',
      'People with strong family support networks',
      'Early-to-moderate stages of cognitive decline',
    ],
    typicalCost: {
      range: '$20–$35/hour or $4,000–$6,000/month for full-time care',
      note: 'Medicaid may cover some in-home services depending on your state.',
    },
    pros: [
      'Familiar, comfortable home environment',
      'One-on-one personalized attention',
      'Flexible scheduling that adapts to needs',
      'Preserves independence and daily routines',
    ],
    cons: [
      'Can become expensive for round-the-clock care',
      'Home may need accessibility modifications',
      'Caregiver turnover can be disruptive',
      'Limited social interaction compared to facilities',
    ],
  },
  {
    id: 'adult-day',
    name: 'Adult Day Programs',
    tagline: 'Structured daytime care with social activities',
    icon: '☀️',
    description:
      'Adult day programs provide supervised daytime care in a community setting, typically weekdays. They offer social activities, meals, health monitoring, and therapeutic programs, allowing family caregivers to work or take a break.',
    bestFor: [
      'Seniors who benefit from structured routines',
      'Those whose family caregivers work during the day',
      'People with mild-to-moderate cognitive impairment',
      'Seniors who need socialization but can still live at home',
    ],
    typicalCost: {
      range: '$70–$150/day (varies widely by location)',
      note: 'Some Medicaid programs and Veterans benefits may cover adult day services.',
    },
    pros: [
      'Much less expensive than full-time residential care',
      'Provides vital social engagement',
      'Gives family caregivers needed respite',
      'Professional health monitoring in a safe setting',
    ],
    cons: [
      'Requires reliable transportation to and from the center',
      'Not suitable for those needing overnight or round-the-clock care',
      'May be stressful for seniors resistant to change',
      'Center hours may not align with work schedules',
    ],
  },
  {
    id: 'independent-living',
    name: 'Independent Living',
    tagline: 'Active senior communities with amenities and social life',
    icon: '🏘️',
    description:
      'Independent living communities are designed for active, largely self-sufficient seniors who want a maintenance-free lifestyle. They offer private apartments or cottages with amenities like dining, fitness centers, and organized activities.',
    bestFor: [
      'Active seniors who are essentially self-sufficient',
      'Those who want social connection with peers',
      'People who want to downsize from home maintenance',
      'Seniors planning ahead for potential future needs',
    ],
    typicalCost: {
      range: '$1,500–$4,000/month (all-inclusive varies)',
      note: 'Generally not covered by Medicare or Medicaid; typically paid out of pocket.',
    },
    pros: [
      'Rich social environment with built-in community',
      'No home maintenance responsibilities',
      'Wide range of amenities and activities',
      'Often located near assisted living for future needs',
    ],
    cons: [
      'Does not provide personal care or medical services',
      'May need to move again if care needs increase',
      'Can be costly without insurance coverage',
      'Not appropriate for those with significant health issues',
    ],
  },
  {
    id: 'assisted-living',
    name: 'Assisted Living',
    tagline: 'Residential care with daily assistance and community',
    icon: '🤝',
    description:
      'Assisted living facilities provide residential care for seniors who need help with daily activities like bathing, dressing, and medications, while still maintaining some independence. They offer private or semi-private rooms and a range of support services.',
    bestFor: [
      'Seniors who need regular help with daily activities',
      'Those who require medication management',
      'People with limited or no family caregiver support',
      'Seniors who would benefit from a structured social community',
    ],
    typicalCost: {
      range: '$3,500–$6,000/month (national median ~$4,800)',
      note: 'Medicaid covers assisted living in some states through waiver programs.',
    },
    pros: [
      'Balance of independence and available support',
      'Professional staff available around the clock',
      'Social activities and community dining',
      'Safer environment with reduced fall risks',
    ],
    cons: [
      'Significant monthly cost without insurance coverage',
      'Level of care may not meet complex medical needs',
      'Quality varies widely between facilities',
      'Leaving a longtime home can be emotionally difficult',
    ],
  },
  {
    id: 'memory-care',
    name: 'Memory Care',
    tagline: "Specialized, secure care for Alzheimer's and dementia",
    icon: '🧠',
    description:
      "Memory care communities are dedicated units or stand-alone facilities designed specifically for people with Alzheimer's disease, dementia, and other memory impairments. They feature secured environments, structured routines, and staff with specialized dementia training.",
    bestFor: [
      "Seniors diagnosed with Alzheimer's or moderate-to-severe dementia",
      'Individuals who wander or have safety risks at home',
      'Families who need specialized staff available 24/7',
      'Those requiring consistent, structured daily routines',
    ],
    typicalCost: {
      range: '$4,500–$8,000+/month',
      note: 'Typically not covered by Medicare long-term; Medicaid coverage varies by state.',
    },
    pros: [
      'Secure environment prevents wandering',
      'Staff specially trained in dementia care',
      'Structured routines reduce anxiety and confusion',
      'Therapeutic activities designed for cognitive needs',
    ],
    cons: [
      'Among the higher-cost care options',
      'Transition may be difficult for the senior',
      'Can feel restrictive compared to other settings',
      'Limited by what Medicare and insurance covers',
    ],
  },
  {
    id: 'skilled-nursing',
    name: 'Skilled Nursing Facility',
    tagline: '24/7 medical care and rehabilitation services',
    icon: '🏥',
    description:
      'Skilled nursing facilities (SNFs), also called nursing homes, provide the highest level of non-hospital care. They offer 24/7 licensed nursing, physician oversight, rehabilitation therapy, and medical management for complex or chronic conditions.',
    bestFor: [
      'Seniors with complex, ongoing medical needs',
      'Post-hospital patients requiring rehabilitation',
      'Those who need continuous nursing supervision',
      'People who cannot safely be cared for at home or in assisted living',
    ],
    typicalCost: {
      range: '$8,000–$12,000+/month (semi-private to private room)',
      note: 'Medicare covers short-term skilled nursing after a qualifying hospital stay (up to 100 days).',
    },
    pros: [
      'Highest level of medical care outside a hospital',
      'Skilled therapy services (PT, OT, speech)',
      'Round-the-clock nursing coverage',
      'Appropriate for the most complex care needs',
    ],
    cons: [
      'Most expensive long-term care option',
      'Can feel institutional; less home-like',
      'Long-term costs usually require Medicaid planning',
      'Medicare coverage is limited to short-term stays',
    ],
  },
  {
    id: 'hospice',
    name: 'Hospice Care',
    tagline: 'Compassionate comfort care focused on quality of life',
    icon: '💙',
    description:
      'Hospice care is a specialized form of support for people with a terminal illness who are expected to live six months or less. The focus shifts from curative treatment to comfort, pain management, and emotional/spiritual support for the patient and family.',
    bestFor: [
      'Individuals with a terminal diagnosis and limited life expectancy',
      'Those who have decided to stop curative treatments',
      'Families seeking support and guidance during end of life',
      'Patients whose goal is comfort and dignity over treatment',
    ],
    typicalCost: {
      range: 'Largely covered by Medicare Part A and most Medicaid programs',
      note: 'The Medicare Hospice Benefit covers most services when eligibility criteria are met.',
    },
    pros: [
      'Can be provided at home, in a facility, or in a hospice center',
      'Comprehensive team support (nurses, social workers, chaplains)',
      'Focus on comfort, dignity, and quality of life',
      'Family caregiver support and bereavement counseling included',
    ],
    cons: [
      'Requires giving up curative treatment to qualify',
      'Some families struggle with the finality of hospice enrollment',
      'Inpatient hospice beds can be limited in some areas',
      'Not appropriate for those still pursuing treatment',
    ],
  },
];
