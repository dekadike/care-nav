import { AssessmentQuestion } from '@/types';
import QuestionOption from './QuestionOption';

interface Props {
  question: AssessmentQuestion;
  selectedOptionId: string | undefined;
  onSelect: (questionId: string, optionId: string) => void;
}

export default function StepCard({ question, selectedOptionId, onSelect }: Props) {
  return (
    <div
      role="group"
      aria-labelledby={`question-${question.id}`}
    >
      <h2
        id={`question-${question.id}`}
        className="text-lg md:text-xl font-bold text-slate-800 mb-2 leading-snug"
      >
        {question.question}
      </h2>
      {question.helpText && (
        <p className="text-sm text-slate-500 mb-5 leading-relaxed">{question.helpText}</p>
      )}

      <div role="radiogroup" aria-label={question.question} className="flex flex-col gap-3">
        {question.options.map((option) => (
          <QuestionOption
            key={option.id}
            option={option}
            selected={selectedOptionId === option.id}
            onSelect={(optionId) => onSelect(question.id, optionId)}
          />
        ))}
      </div>
    </div>
  );
}
