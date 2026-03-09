import type { Metadata } from 'next';
import CareTypeAccordion from '@/components/care-types/CareTypeAccordion';
import { careTypes } from '@/data/careTypes';

export const metadata: Metadata = {
  title: 'Care Types Guide – CareNav',
  description: 'Explore all 7 types of elder care including in-home care, assisted living, memory care, and more — with costs, pros, cons, and who each is best for.',
};

export default function CareTypesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-2">Guide</p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Care Types Explained</h1>
        <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
          From staying at home with a caregiver to specialized memory care, each care setting offers different levels of support. Click any option below to learn what it includes, who it&apos;s best for, and what it typically costs.
        </p>
      </div>

      <CareTypeAccordion careTypes={careTypes} />

      <div className="mt-10 bg-teal-50 border border-teal-200 rounded-2xl p-6">
        <p className="text-sm font-semibold text-teal-800 mb-1">Not sure which type fits your situation?</p>
        <p className="text-sm text-teal-700">
          Take our <a href="/assessment" className="underline font-medium hover:text-teal-900">5-question assessment</a> and get personalized recommendations based on your loved one&apos;s needs and circumstances.
        </p>
      </div>
    </div>
  );
}
