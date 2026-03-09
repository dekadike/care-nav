// ── Assessment ──────────────────────────────────────────────
export type CareTypeId =
  | 'in-home'
  | 'adult-day'
  | 'independent-living'
  | 'assisted-living'
  | 'memory-care'
  | 'skilled-nursing'
  | 'hospice';

export interface AssessmentOption {
  id: string;
  label: string;
  description?: string;
  weights: Partial<Record<CareTypeId, number>>;
}

export interface AssessmentQuestion {
  id: string;
  step: number;
  question: string;
  helpText?: string;
  options: AssessmentOption[];
}

export interface AssessmentResult {
  careTypeId: CareTypeId;
  score: number;
  matchReason: string;
  tier: 'best' | 'consider' | 'aware';
}

// ── Care Types ───────────────────────────────────────────────
export interface CareType {
  id: CareTypeId;
  name: string;
  tagline: string;
  icon: string;
  description: string;
  bestFor: string[];
  typicalCost: {
    range: string;
    note: string;
  };
  pros: string[];
  cons: string[];
}

// ── Resources ────────────────────────────────────────────────
export type ResourceCategory =
  | 'government'
  | 'financial-aid'
  | 'caregiver-support'
  | 'legal'
  | 'housing'
  | 'medical';

export interface Resource {
  id: string;
  name: string;
  category: ResourceCategory;
  categoryLabel: string;
  description: string;
  actionItems: string[];
  website?: string;
  phone?: string;
}

// ── Checklist ────────────────────────────────────────────────
export interface ChecklistItemData {
  id: string;
  text: string;
  helpText?: string;
}

export interface ChecklistSection {
  id: string;
  title: string;
  description?: string;
  items: ChecklistItemData[];
}
