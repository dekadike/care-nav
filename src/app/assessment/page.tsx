import type { Metadata } from 'next';
import AssessmentWizard from '@/components/assessment/AssessmentWizard';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Care Needs Assessment – Omatochi Family App',
  description:
    'Answer 5 questions about your loved one\'s care needs and get personalized recommendations — including Medi-Cal, IHSS, and CalAIM eligibility.',
};

export default function AssessmentPage() {
  return (
    <div>
      <PageHero
        eyebrow="5-Minute Tool"
        title="Care Needs Assessment"
        subtitle="Answer a few questions about your loved one's situation and we'll recommend the care options — including Medi-Cal and IHSS — that best fit their needs."
        photoId="photo-1516307365426-bea591f05011"
        photoAlt="A senior and their adult child having a warm, caring conversation about future care options"
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
        <AssessmentWizard />

        <p className="text-center text-xs text-slate-400 mt-6">
          Your answers are not stored or shared. This tool provides general guidance only.
        </p>
      </div>
    </div>
  );
}
