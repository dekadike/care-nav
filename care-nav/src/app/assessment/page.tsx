import type { Metadata } from 'next';
import AssessmentWizard from '@/components/assessment/AssessmentWizard';

export const metadata: Metadata = {
  title: 'Care Needs Assessment – CareNav',
  description:
    'Answer 5 questions about your loved one\'s care needs and get personalized recommendations for the right type of elder care.',
};

export default function AssessmentPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-2">5-Minute Tool</p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Care Needs Assessment</h1>
        <p className="text-slate-500 text-lg leading-relaxed">
          Answer a few questions about your loved one&apos;s situation and we&apos;ll recommend the care types that best fit their needs.
        </p>
      </div>

      <AssessmentWizard />

      <p className="text-center text-xs text-slate-400 mt-6">
        Your answers are not stored or shared. This tool provides general guidance only.
      </p>
    </div>
  );
}
