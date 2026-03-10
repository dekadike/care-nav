'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ChecklistItem from './ChecklistItem';
import { ChecklistSection as ChecklistSectionType } from '@/types';

interface Props {
  section: ChecklistSectionType;
  checkedIds: Set<string>;
  onToggle: (id: string) => void;
}

export default function ChecklistSection({ section, checkedIds, onToggle }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  const checkedCount = section.items.filter((item) => checkedIds.has(item.id)).length;
  const total = section.items.length;
  const allDone = checkedCount === total;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-500"
      >
        {/* Progress circle */}
        <div className="relative shrink-0 w-10 h-10">
          <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="15" fill="none" stroke="#e2e8f0" strokeWidth="3" />
            <circle
              cx="18"
              cy="18"
              r="15"
              fill="none"
              stroke={allDone ? '#10b981' : '#0d9488'}
              strokeWidth="3"
              strokeDasharray={`${(checkedCount / total) * 94.2} 94.2`}
              strokeLinecap="round"
              className="transition-all duration-500"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-slate-600">
            {checkedCount}/{total}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-semibold text-slate-800 text-sm md:text-base">{section.title}</p>
          {section.description && (
            <p className="text-slate-500 text-xs md:text-sm truncate">{section.description}</p>
          )}
        </div>

        <ChevronDown
          className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="accordion-inner">
          <ul className="px-2 pb-3 border-t border-slate-100">
            {section.items.map((item) => (
              <ChecklistItem
                key={item.id}
                item={item}
                checked={checkedIds.has(item.id)}
                onToggle={onToggle}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
