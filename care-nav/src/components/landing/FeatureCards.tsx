import Link from 'next/link';
import { ClipboardList, BookOpen, FolderSearch, CheckSquare, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: ClipboardList,
    title: 'Care Needs Assessment',
    description: 'Answer 5 questions about your loved one\'s situation and get personalized care type recommendations tailored to their needs.',
    href: '/assessment',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
  {
    icon: BookOpen,
    title: 'Care Types Guide',
    description: 'Explore all 7 major types of elder care — from in-home support to memory care — with costs, pros, cons, and who each option is best for.',
    href: '/care-types',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: FolderSearch,
    title: 'Resource Directory',
    description: 'Find government programs, financial aid, caregiver support, legal help, and medical resources — all in one searchable directory.',
    href: '/resources',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    icon: CheckSquare,
    title: 'Care Planning Checklist',
    description: 'Work through a comprehensive checklist covering documents to gather, questions for facilities, financial planning, and medical coordination.',
    href: '/checklist',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
];

export default function FeatureCards() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
          Everything you need in one place
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto">
          Four tools designed to guide you through every stage of the senior care decision-making process.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <Link
              key={f.href}
              href={f.href}
              className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col"
            >
              <div className={`w-11 h-11 rounded-xl ${f.bg} flex items-center justify-center mb-4`}>
                <Icon className={`w-5 h-5 ${f.color}`} />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2 text-sm">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-1">{f.description}</p>
              <div className={`flex items-center gap-1 text-xs font-semibold mt-4 ${f.color}`}>
                Get started
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
