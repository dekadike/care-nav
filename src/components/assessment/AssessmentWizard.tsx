'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { assessmentQuestions } from '@/data/assessmentQuestions';
import { computeRecommendations } from '@/lib/assessmentEngine';
import { AssessmentResult } from '@/types';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Button } from '@/components/ui/Button';
import StepCard from './StepCard';
import ResultsPanel from './ResultsPanel';

export default function AssessmentWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<AssessmentResult[] | null>(null);

  const totalSteps = assessmentQuestions.length;
  const question = assessmentQuestions[currentStep];
  const currentAnswer = answers[question?.id ?? ''];
  const isLastStep = currentStep === totalSteps - 1;

  const handleSelect = (questionId: string, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleNext = () => {
    if (isLastStep) {
      const recs = computeRecommendations(answers);
      setResults(recs);
    } else {
      setCurrentStep((s) => s + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((s) => Math.max(0, s - 1));
  };

  const handleRetake = () => {
    setCurrentStep(0);
    setAnswers({});
    setResults(null);
  };

  if (results) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
        <ResultsPanel results={results} onRetake={handleRetake} />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
      {/* Progress */}
      <div className="mb-7">
        <ProgressBar current={currentStep + 1} total={totalSteps} />
      </div>

      {/* Question */}
      {question && (
        <StepCard
          question={question}
          selectedOptionId={currentAnswer}
          onSelect={handleSelect}
        />
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between mt-7 pt-5 border-t border-slate-100">
        <Button
          variant="ghost"
          size="md"
          onClick={handleBack}
          disabled={currentStep === 0}
          className="text-slate-500 hover:text-slate-800 disabled:opacity-30"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </Button>

        <Button
          variant="primary"
          size="md"
          onClick={handleNext}
          disabled={!currentAnswer}
          className="group"
        >
          {isLastStep ? 'Get Recommendations' : 'Next'}
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </div>
  );
}
