import { Check } from 'lucide-react';
import { AssessmentOption } from '@/types';

interface Props {
  option: AssessmentOption;
  selected: boolean;
  onSelect: (id: string) => void;
}

export default function QuestionOption({ option, selected, onSelect }: Props) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={() => onSelect(option.id)}
      className={`w-full text-left flex items-start gap-4 p-4 rounded-xl border-2 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 ${
        selected
          ? 'border-teal-500 bg-teal-50'
          : 'border-slate-200 bg-white hover:border-teal-300 hover:shadow-sm'
      }`}
    >
      <div
        className={`w-5 h-5 rounded-full border-2 shrink-0 mt-0.5 flex items-center justify-center transition-all duration-150 ${
          selected ? 'border-teal-500 bg-teal-500' : 'border-slate-300'
        }`}
      >
        {selected && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
      </div>
      <div className="flex-1 min-w-0">
        <p className={`font-medium text-sm ${selected ? 'text-teal-900' : 'text-slate-800'}`}>
          {option.label}
        </p>
        {option.description && (
          <p className={`text-xs mt-0.5 leading-relaxed ${selected ? 'text-teal-700' : 'text-slate-500'}`}>
            {option.description}
          </p>
        )}
      </div>
    </button>
  );
}
