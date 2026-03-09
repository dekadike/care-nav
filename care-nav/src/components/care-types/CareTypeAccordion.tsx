'use client';

import { useState } from 'react';
import { ChevronDown, Check, X } from 'lucide-react';
import { CareType } from '@/types';

interface Props {
  careTypes: CareType[];
}

export default function CareTypeAccordion({ careTypes }: Props) {
  const [expandedId, setExpandedId] = useState<string | null>(careTypes[0]?.id ?? null);

  const toggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-3">
      {careTypes.map((ct) => {
        const isOpen = expandedId === ct.id;
        return (
          <div
            key={ct.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-shadow hover:shadow-sm"
          >
            <button
              onClick={() => toggle(ct.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-body-${ct.id}`}
              id={`accordion-header-${ct.id}`}
              className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-500"
            >
              <span className="text-2xl shrink-0" aria-hidden="true">{ct.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-800 text-sm md:text-base">{ct.name}</p>
                <p className="text-slate-500 text-xs md:text-sm truncate">{ct.tagline}</p>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            {/* Accordion body with grid trick for smooth animation */}
            <div
              id={`accordion-body-${ct.id}`}
              role="region"
              aria-labelledby={`accordion-header-${ct.id}`}
              className={`accordion-content ${isOpen ? 'open' : ''}`}
            >
              <div className="accordion-inner">
                <div className="px-5 pb-6 pt-1 border-t border-slate-100">
                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{ct.description}</p>

                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Best For */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">Best For</h4>
                      <ul className="flex flex-col gap-1.5">
                        {ct.bestFor.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cost */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">Typical Cost</h4>
                      <p className="text-sm font-semibold text-slate-800 mb-1">{ct.typicalCost.range}</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{ct.typicalCost.note}</p>
                    </div>
                  </div>

                  {/* Pros & Cons */}
                  <div className="grid md:grid-cols-2 gap-5 mt-5">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-2">Pros</h4>
                      <ul className="flex flex-col gap-1.5">
                        {ct.pros.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                            <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-2">Cons</h4>
                      <ul className="flex flex-col gap-1.5">
                        {ct.cons.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                            <X className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
