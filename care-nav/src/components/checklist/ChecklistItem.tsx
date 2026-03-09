'use client';

import { Info } from 'lucide-react';
import { useState } from 'react';
import { ChecklistItemData } from '@/types';

interface Props {
  item: ChecklistItemData;
  checked: boolean;
  onToggle: (id: string) => void;
}

export default function ChecklistItem({ item, checked, onToggle }: Props) {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <li className="group">
      <label className="flex items-start gap-3 cursor-pointer py-2.5 px-3 rounded-xl hover:bg-slate-50 transition-colors">
        <div className="relative mt-0.5 shrink-0">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => onToggle(item.id)}
            className="sr-only"
            aria-label={item.text}
          />
          <div
            className={`w-5 h-5 rounded flex items-center justify-center border-2 transition-all duration-150 ${
              checked
                ? 'bg-teal-600 border-teal-600'
                : 'border-slate-300 bg-white group-hover:border-teal-400'
            }`}
          >
            {checked && (
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
                <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <span
            className={`text-sm leading-relaxed transition-all duration-150 ${
              checked ? 'line-through text-slate-400' : 'text-slate-700'
            }`}
          >
            {item.text}
          </span>

          {item.helpText && (
            <div className="mt-1">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setShowHelp((v) => !v);
                }}
                className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-teal-600 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-500 rounded"
              >
                <Info className="w-3 h-3" />
                {showHelp ? 'Hide tip' : 'Show tip'}
              </button>
              {showHelp && (
                <p className="text-xs text-slate-500 mt-1 leading-relaxed bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
                  {item.helpText}
                </p>
              )}
            </div>
          )}
        </div>
      </label>
    </li>
  );
}
