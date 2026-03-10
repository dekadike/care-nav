import type { Metadata } from 'next';
import CareTypeAccordion from '@/components/care-types/CareTypeAccordion';
import { careTypes } from '@/data/careTypes';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Care Types Guide – Omatochi Family App',
  description: 'Explore all types of California elder care including IHSS in-home support, assisted living, memory care, MSSP, and PACE — with costs, eligibility, and who each is best for.',
};

export default function CareTypesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Guide"
        title="Care Types Explained"
        subtitle="From IHSS in-home support to memory care, explore every California care setting with costs, Medi-Cal eligibility, and who each option is best for."
        photoId="photo-1558618666-fcd25c85cd64"
        photoAlt="A compassionate caregiver helping an elderly person walk safely and comfortably at home"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <CareTypeAccordion careTypes={careTypes} />

        <div className="mt-10 bg-teal-50 border border-teal-200 rounded-2xl p-6">
          <p className="text-sm font-semibold text-teal-800 mb-1">Not sure which type fits your situation?</p>
          <p className="text-sm text-teal-700">
            Take our <a href="/assessment" className="underline font-medium hover:text-teal-900">5-question assessment</a> and get personalized recommendations based on your loved one&apos;s needs and circumstances.
          </p>
        </div>
      </div>
    </div>
  );
}
