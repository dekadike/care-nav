import Link from 'next/link';
import { RotateCcw, Printer, ArrowRight, Star, ThumbsUp, Info } from 'lucide-react';
import { AssessmentResult } from '@/types';
import { careTypes } from '@/data/careTypes';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface Props {
  results: AssessmentResult[];
  onRetake: () => void;
}

const tierConfig = {
  best: {
    label: 'Best Match',
    variant: 'teal' as const,
    icon: Star,
    border: 'border-teal-300 bg-teal-50/50',
  },
  consider: {
    label: 'Also Consider',
    variant: 'blue' as const,
    icon: ThumbsUp,
    border: 'border-blue-200 bg-blue-50/30',
  },
  aware: {
    label: 'Worth Knowing',
    variant: 'slate' as const,
    icon: Info,
    border: 'border-slate-200 bg-white',
  },
};

export default function ResultsPanel({ results, onRetake }: Props) {
  return (
    <div>
      <div className="text-center mb-8">
        <p className="text-3xl mb-3">✅</p>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Your Personalized Recommendations</h2>
        <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
          Based on your answers, here are the care options that best match your loved one&apos;s situation. Explore each to learn more.
        </p>
      </div>

      <div className="flex flex-col gap-4 mb-8">
        {results.map((result) => {
          const config = tierConfig[result.tier];
          const careType = careTypes.find((ct) => ct.id === result.careTypeId);
          if (!careType) return null;
          const TierIcon = config.icon;

          return (
            <div
              key={result.careTypeId}
              className={`rounded-2xl border-2 p-5 ${config.border}`}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">{careType.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="font-bold text-slate-800">{careType.name}</h3>
                    <Badge variant={config.variant}>
                      <TierIcon className="w-3 h-3 mr-1" />
                      {config.label}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-500 mb-2 leading-relaxed">{result.matchReason}</p>
                  <p className="text-xs text-slate-400 italic">{careType.tagline}</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-200/60">
                <Link
                  href="/care-types"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-900 transition-colors"
                >
                  Learn more about {careType.name}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {results.length === 0 && (
        <div className="text-center py-8 text-slate-400">
          <p>No strong matches found. Try adjusting your answers or explore all care types.</p>
        </div>
      )}

      <div className="flex flex-wrap gap-3 justify-center">
        <Button
          variant="ghost"
          size="md"
          onClick={onRetake}
          className="text-slate-600 hover:text-slate-800 hover:bg-slate-100"
        >
          <RotateCcw className="w-4 h-4" />
          Retake Assessment
        </Button>
        <Button
          variant="ghost"
          size="md"
          onClick={() => window.print()}
          className="text-slate-600 hover:text-slate-800 hover:bg-slate-100"
        >
          <Printer className="w-4 h-4" />
          Print Results
        </Button>
      </div>

      <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-5 text-sm text-slate-500">
        <strong className="text-slate-700">Next steps:</strong> Review the{' '}
        <Link href="/care-types" className="text-teal-600 underline">Care Types Guide</Link> for your top matches, then explore the{' '}
        <Link href="/resources" className="text-teal-600 underline">Resource Directory</Link> and work through the{' '}
        <Link href="/checklist" className="text-teal-600 underline">Planning Checklist</Link>.
      </div>
    </div>
  );
}
