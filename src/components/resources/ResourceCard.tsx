import { ExternalLink, Phone, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Resource } from '@/types';

const categoryBadgeVariants: Record<string, 'teal' | 'blue' | 'slate' | 'amber' | 'emerald'> = {
  government: 'teal',
  'financial-aid': 'emerald',
  'caregiver-support': 'blue',
  legal: 'amber',
  housing: 'slate',
  medical: 'blue',
};

interface Props {
  resource: Resource;
}

export default function ResourceCard({ resource }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col h-full hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-semibold text-slate-800 text-sm leading-snug">{resource.name}</h3>
        <Badge variant={categoryBadgeVariants[resource.category] ?? 'slate'} className="shrink-0">
          {resource.categoryLabel}
        </Badge>
      </div>

      <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{resource.description}</p>

      {resource.actionItems.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Action Steps</p>
          <ul className="flex flex-col gap-1.5">
            {resource.actionItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                <ChevronRight className="w-3.5 h-3.5 text-teal-500 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-slate-100">
        {resource.website && (
          <a
            href={resource.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-700 hover:text-teal-900 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Visit Website
          </a>
        )}
        {resource.phone && (
          <a
            href={`tel:${resource.phone}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            {resource.phone}
          </a>
        )}
      </div>
    </div>
  );
}
