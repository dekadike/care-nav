'use client';

interface Category {
  id: string;
  label: string;
}

interface Props {
  categories: Category[];
  selected: string;
  onSelect: (id: string) => void;
}

export default function ResourceFilter({ categories, selected, onSelect }: Props) {
  return (
    <div
      role="radiogroup"
      aria-label="Filter resources by category"
      className="flex flex-wrap gap-2"
    >
      {categories.map((cat) => {
        const isSelected = selected === cat.id;
        return (
          <button
            key={cat.id}
            role="radio"
            aria-checked={isSelected}
            onClick={() => onSelect(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 ${
              isSelected
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-teal-300 hover:text-teal-700'
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
