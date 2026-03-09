import { AssessmentResult, CareTypeId } from '@/types';
import { assessmentQuestions } from '@/data/assessmentQuestions';

const careTypeNames: Record<CareTypeId, string> = {
  'in-home': 'In-Home Care',
  'adult-day': 'Adult Day Programs',
  'independent-living': 'Independent Living',
  'assisted-living': 'Assisted Living',
  'memory-care': 'Memory Care',
  'skilled-nursing': 'Skilled Nursing Facility',
  'hospice': 'Hospice Care',
};

function buildMatchReason(
  careTypeId: CareTypeId,
  answers: Record<string, string>
): string {
  const independence = answers['independence'];
  const medical = answers['medical'];
  const living = answers['living'];
  const caregiver = answers['caregiver'];
  const budget = answers['budget'];

  const reasons: string[] = [];

  switch (careTypeId) {
    case 'in-home':
      if (living === 'stay-home') reasons.push('aligns with the preference to stay at home');
      if (caregiver === 'full-time-family') reasons.push('family support makes in-home care viable');
      if (independence === 'some-help-daily') reasons.push('suitable for moderate daily assistance needs');
      break;
    case 'adult-day':
      if (caregiver === 'part-time-family') reasons.push('fills gaps when family caregivers are unavailable');
      if (medical === 'memory-issues') reasons.push('provides structure beneficial for memory care');
      if (budget === 'under-2000') reasons.push('one of the most affordable professional care options');
      break;
    case 'independent-living':
      if (independence === 'fully-independent') reasons.push('matches a high level of independence');
      if (living === 'small-community') reasons.push('fits the preference for a community setting');
      if (medical === 'no-conditions') reasons.push('appropriate for those in good health');
      break;
    case 'assisted-living':
      if (caregiver === 'minimal-family' || caregiver === 'no-support') reasons.push('provides professional oversight when family support is limited');
      if (independence === 'substantial-help') reasons.push('offers the daily assistance needed');
      if (living === 'structured-facility') reasons.push('matches the preference for structured care');
      break;
    case 'memory-care':
      if (medical === 'memory-issues') reasons.push('specialized staff and environment for memory impairments');
      if (caregiver === 'no-support' || caregiver === 'minimal-family') reasons.push('24/7 supervision addresses safety concerns');
      break;
    case 'skilled-nursing':
      if (medical === 'skilled-nursing-need') reasons.push('meets the need for ongoing skilled medical care');
      if (independence === 'fully-dependent') reasons.push('equipped for full-dependency care needs');
      if (caregiver === 'no-support') reasons.push('provides comprehensive care when no family support exists');
      break;
    case 'hospice':
      if (medical === 'terminal-illness') reasons.push('focuses on comfort and quality of life for end-of-life care');
      reasons.push('provides holistic support for both patient and family');
      break;
  }

  if (reasons.length === 0) {
    reasons.push(`may be worth exploring based on the overall care profile`);
  }

  return `This option ${reasons.slice(0, 2).join(' and ')}.`;
}

export function computeRecommendations(
  answers: Record<string, string>
): AssessmentResult[] {
  const allCareTypeIds: CareTypeId[] = [
    'in-home',
    'adult-day',
    'independent-living',
    'assisted-living',
    'memory-care',
    'skilled-nursing',
    'hospice',
  ];

  // Initialize scores
  const scores: Record<CareTypeId, number> = {} as Record<CareTypeId, number>;
  for (const id of allCareTypeIds) {
    scores[id] = 0;
  }

  // Accumulate weights from each answer
  for (const question of assessmentQuestions) {
    const selectedOptionId = answers[question.id];
    if (!selectedOptionId) continue;

    const option = question.options.find((o) => o.id === selectedOptionId);
    if (!option) continue;

    for (const [careTypeId, weight] of Object.entries(option.weights)) {
      scores[careTypeId as CareTypeId] += weight ?? 0;
    }
  }

  // Sort all types by score descending
  const sorted = allCareTypeIds
    .map((id) => ({ id, score: scores[id] }))
    .sort((a, b) => b.score - a.score);

  // Take top 3 and assign tiers
  const top3 = sorted.slice(0, 3);
  const maxScore = top3[0]?.score ?? 1;

  const results: AssessmentResult[] = top3
    .filter((entry) => entry.score > 0)
    .map((entry, index) => ({
      careTypeId: entry.id,
      score: entry.score,
      matchReason: buildMatchReason(entry.id, answers),
      tier: index === 0 ? 'best' : index === 1 ? 'consider' : 'aware',
    }));

  return results;
}
