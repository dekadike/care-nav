'use client';

import { useState, useMemo } from 'react';
import ChecklistSection from '@/components/checklist/ChecklistSection';
import { checklistSections } from '@/data/checklistItems';
import { ProgressBar } from '@/components/ui/ProgressBar';

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
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-2">Planning Tool</p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Care Planning Checklist</h1>
        <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
          Work through these {totalItems} tasks across four key areas to prepare for your loved one&apos;s care transition. Check off items as you complete them.
        </p>
      </div>

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
  );
}
