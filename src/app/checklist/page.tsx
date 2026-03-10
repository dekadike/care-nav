'use client';

import { useState, useMemo } from 'react';
import ChecklistSection from '@/components/checklist/ChecklistSection';
import { checklistSections } from '@/data/checklistItems';
import { ProgressBar } from '@/components/ui/ProgressBar';
import PageHero from '@/components/ui/PageHero';

export default function ChecklistPage() {
  const [checkedIds, setCheckedIds] = useState<Set<string>>(new Set());

  const handleToggle = (id: string) => {
    setCheckedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const allItems = useMemo(() => checklistSections.flatMap((s) => s.items), []);
  const totalItems = allItems.length;
  const checkedCount = checkedIds.size;

  return (
    <div>
      <PageHero
        eyebrow="Planning Tool"
        title="Care Planning Checklist"
        subtitle="Work through key areas — documents, finances, medical coordination, and Medi-Cal enrollment — to prepare for your loved one's care transition."
        photoId="photo-1556742049-0cfed4f6a45d"
        photoAlt="Family members sitting together warmly, reviewing care planning documents at home"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <p className="text-slate-500 text-lg mb-8">
          Work through these <strong className="text-slate-700">{totalItems} tasks</strong> across five key areas to prepare for your loved one&apos;s care transition. Check off items as you complete them.
        </p>

        {/* Overall progress */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-slate-700">Overall Progress</p>
            <p className="text-sm text-slate-500">{checkedCount} of {totalItems} completed</p>
          </div>
          <ProgressBar current={checkedCount} total={totalItems} label={`${checkedCount} of ${totalItems} tasks done`} />
          {checkedCount === totalItems && totalItems > 0 && (
            <p className="mt-3 text-sm text-emerald-700 font-semibold flex items-center gap-2">
              <span>✓</span> You&apos;ve completed all checklist items — great work!
            </p>
          )}
        </div>

        <div className="flex flex-col gap-4">
          {checklistSections.map((section) => (
            <ChecklistSection
              key={section.id}
              section={section}
              checkedIds={checkedIds}
              onToggle={handleToggle}
            />
          ))}
        </div>

        <div className="mt-8 bg-slate-100 rounded-2xl p-5 text-sm text-slate-500">
          <strong className="text-slate-700">Tip:</strong> Progress is saved in your browser session. For a permanent record, use your browser&apos;s print function to save this checklist as a PDF.
        </div>
      </div>
    </div>
  );
}
