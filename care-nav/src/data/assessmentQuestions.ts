import { AssessmentQuestion } from '@/types';

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: 'independence',
    step: 1,
    question: 'How independent is your loved one with daily activities?',
    helpText: 'Think about tasks like bathing, dressing, cooking, managing medications, and getting around the home.',
    options: [
      {
        id: 'fully-independent',
        label: 'Fully independent',
        description: 'Manages all daily tasks without assistance',
        weights: { 'in-home': 1, 'independent-living': 4, 'adult-day': 1 },
      },
      {
        id: 'some-help-daily',
        label: 'Needs some help with daily tasks',
        description: 'Manages most things but needs help with a few activities',
        weights: { 'in-home': 3, 'adult-day': 2, 'assisted-living': 2, 'independent-living': 1 },
      },
      {
        id: 'substantial-help',
        label: 'Needs substantial daily assistance',
        description: 'Requires help with most personal care and daily activities',
        weights: { 'assisted-living': 3, 'in-home': 2, 'adult-day': 1, 'memory-care': 1 },
      },
      {
        id: 'fully-dependent',
        label: 'Fully dependent on others',
        description: 'Needs help with all personal care and daily activities',
        weights: { 'skilled-nursing': 3, 'assisted-living': 2, 'memory-care': 1 },
      },
    ],
  },
  {
    id: 'medical',
    step: 2,
    question: "What best describes your loved one's medical situation?",
    helpText: 'Consider their diagnosed conditions, the complexity of their care, and any memory or cognitive changes.',
    options: [
      {
        id: 'no-conditions',
        label: 'Generally healthy, no major conditions',
        description: 'No significant chronic illnesses requiring ongoing medical management',
        weights: { 'independent-living': 4, 'in-home': 1, 'adult-day': 1 },
      },
      {
        id: 'managed-conditions',
        label: 'Has chronic conditions that are well managed',
        description: 'Conditions like diabetes, heart disease, or arthritis that require regular monitoring',
        weights: { 'in-home': 2, 'assisted-living': 2, 'adult-day': 2, 'independent-living': 1 },
      },
      {
        id: 'memory-issues',
        label: 'Has memory loss or cognitive decline',
        description: 'Diagnosed or suspected dementia, Alzheimer\'s, or significant memory problems',
        weights: { 'memory-care': 5, 'adult-day': 3, 'in-home': 1 },
      },
      {
        id: 'skilled-nursing-need',
        label: 'Has complex medical needs requiring skilled nursing',
        description: 'Needs wound care, IV therapy, feeding tube management, or similar skilled care',
        weights: { 'skilled-nursing': 5, 'in-home': 2 },
      },
      {
        id: 'terminal-illness',
        label: 'Has a terminal illness with limited prognosis',
        description: 'Focus has shifted to comfort and quality of life rather than curative treatment',
        weights: { 'hospice': 6, 'skilled-nursing': 1, 'in-home': 1 },
      },
    ],
  },
  {
    id: 'living',
    step: 3,
    question: 'What does your loved one prefer for their living situation?',
    helpText: 'This reflects their values and preferences — their wishes should weigh heavily in this decision.',
    options: [
      {
        id: 'stay-home',
        label: 'Stay in their own home as long as possible',
        description: 'Strong preference to remain in familiar surroundings',
        weights: { 'in-home': 5, 'adult-day': 3 },
      },
      {
        id: 'small-community',
        label: 'A smaller, residential community setting',
        description: 'Interested in a community but prefers a less clinical, home-like environment',
        weights: { 'independent-living': 3, 'assisted-living': 2 },
      },
      {
        id: 'structured-facility',
        label: 'A structured facility with consistent professional care',
        description: 'Comfort knowing staff and medical support are always available',
        weights: { 'assisted-living': 3, 'memory-care': 2, 'skilled-nursing': 2 },
      },
      {
        id: 'flexible',
        label: 'Open to any option that meets their needs',
        description: 'No strong preference — practicality and quality of care are the priorities',
        weights: { 'in-home': 2, 'adult-day': 2, 'independent-living': 2, 'assisted-living': 1 },
      },
    ],
  },
  {
    id: 'caregiver',
    step: 4,
    question: 'How much family or informal caregiver support is available?',
    helpText: 'Think realistically about who can provide ongoing hands-on help and how consistently.',
    options: [
      {
        id: 'full-time-family',
        label: 'Full-time family caregiver available',
        description: 'A family member can dedicate most of their time to caregiving',
        weights: { 'in-home': 4, 'independent-living': 2 },
      },
      {
        id: 'part-time-family',
        label: 'Family can help part-time or on weekends',
        description: 'Family is available some of the time but has other commitments',
        weights: { 'in-home': 2, 'adult-day': 4, 'assisted-living': 1 },
      },
      {
        id: 'minimal-family',
        label: 'Very limited family support available',
        description: 'Family lives far away or has major obligations that limit involvement',
        weights: { 'assisted-living': 3, 'skilled-nursing': 2, 'adult-day': 1 },
      },
      {
        id: 'no-support',
        label: 'No informal caregiver support',
        description: 'No family or friends available to provide care or oversight',
        weights: { 'assisted-living': 4, 'skilled-nursing': 3, 'memory-care': 1 },
      },
    ],
  },
  {
    id: 'budget',
    step: 5,
    question: "What is the approximate monthly budget for care?",
    helpText: 'Include income, savings, and any insurance benefits. Remember that Medicaid may help if assets are limited.',
    options: [
      {
        id: 'under-2000',
        label: 'Under $2,000/month',
        description: 'Budget is limited; will need to explore Medicaid or other assistance',
        weights: { 'in-home': 2, 'adult-day': 4, 'independent-living': 1 },
      },
      {
        id: '2000-4000',
        label: '$2,000–$4,000/month',
        description: 'Moderate budget with some flexibility',
        weights: { 'in-home': 2, 'independent-living': 3, 'adult-day': 2, 'assisted-living': 1 },
      },
      {
        id: '4000-7000',
        label: '$4,000–$7,000/month',
        description: 'Can consider most care options in most markets',
        weights: { 'assisted-living': 3, 'in-home': 2, 'memory-care': 2, 'independent-living': 1 },
      },
      {
        id: 'over-7000',
        label: 'Over $7,000/month',
        description: 'Can access higher-cost options including skilled nursing or memory care',
        weights: { 'skilled-nursing': 3, 'memory-care': 4, 'assisted-living': 2 },
      },
      {
        id: 'exploring',
        label: "Still figuring out the finances",
        description: "Haven't done the financial analysis yet",
        weights: { 'in-home': 1, 'adult-day': 1, 'independent-living': 1, 'assisted-living': 1 },
      },
    ],
  },
];
