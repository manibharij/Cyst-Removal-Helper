import React from 'react';
import { QuestionNode } from '../types';
import { ChevronRight } from 'lucide-react';

interface QuestionViewProps {
  node: QuestionNode;
  onSelectOption: (nextId: string) => void;
  onBack: () => void;
  canGoBack: boolean;
}

const QuestionView: React.FC<QuestionViewProps> = ({ node, onSelectOption, onBack, canGoBack }) => {
  return (
    <div className="max-w-2xl mx-auto fade-enter-active py-4 px-4">
      {/* Top Navigation Row */}
      <div className="flex items-center justify-between mb-8">
        {canGoBack ? (
          <button 
            onClick={onBack}
            className="text-sm text-[#4A5568] hover:text-[#0B1220] flex items-center gap-1 transition-colors"
          >
            &larr; Back
          </button>
        ) : <div></div>}
        
        {node.stageLabel && (
          <span className="text-xs font-semibold tracking-wider text-[#94A3B8] uppercase">
            {node.stageLabel}
          </span>
        )}
      </div>

      {/* Main Content Area */}
      <div className="mb-8">
        {/* Educational Context */}
        {node.educationalContext && (
          <div className="mb-6 text-[#4A5568] text-sm leading-relaxed border-l-2 border-[#1C6F6A] bg-[#F0F5F5] p-4 rounded-r-lg">
            {node.educationalContext}
          </div>
        )}

        <h2 className="text-xl sm:text-2xl font-medium text-[#0B1220] mb-2 leading-snug">
          {node.questionText}
        </h2>
        
        {node.subText && (
          <p className="text-[#4A5568] mt-2 text-lg">
            {node.subText}
          </p>
        )}
      </div>

      {/* Options */}
      <div className="space-y-3">
        {node.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelectOption(option.nextId)}
            className="w-full text-left p-5 rounded-lg border border-[#E5E9F0] bg-white hover:border-[#0F5C5C] hover:bg-[#F0F5F5] transition-all group flex items-start justify-between gap-4 shadow-sm"
          >
            <div>
              <div className="font-medium text-[#0B1220] text-lg mb-1 group-hover:text-[#0F5C5C]">
                {option.label}
              </div>
              {option.description && (
                <div className="text-[#4A5568] text-sm font-normal">
                  {option.description}
                </div>
              )}
            </div>
            <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
               <ChevronRight className="w-5 h-5 text-[#0F5C5C]" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionView;