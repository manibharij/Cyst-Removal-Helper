import React from 'react';
import { OutcomeNode } from '../types';
import { RefreshCw, Info, HelpCircle, Activity, BookOpen, Stethoscope } from 'lucide-react';

interface OutcomeViewProps {
  node: OutcomeNode;
  onRestart: () => void;
}

const OutcomeView: React.FC<OutcomeViewProps> = ({ node, onRestart }) => {
  return (
    <div className="max-w-3xl mx-auto fade-enter-active py-8 px-4 bg-white rounded-xl border border-[#E5E9F0] shadow-sm">
      
      {/* Informational Header */}
      <div className="mb-10 border-b border-[#E5E9F0] pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F0F5F5] text-[#0F5C5C] text-xs font-semibold uppercase tracking-wide mb-4">
          <Info className="w-3 h-3" />
          Pattern Recognition
        </div>
        <h2 className="text-2xl sm:text-3xl font-medium text-[#0B1220] mb-6">{node.title}</h2>
        <div className="text-lg text-[#4A5568] leading-relaxed">
          {node.summary}
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-[#F7F9FC] p-6 rounded-lg border border-[#E5E9F0]">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-4 h-4 text-[#0F5C5C]" />
            <h3 className="text-sm font-semibold text-[#0B1220] uppercase tracking-wider">The Physiology</h3>
          </div>
          <p className="text-[#4A5568] text-sm leading-relaxed">
            {node.physiology}
          </p>
        </div>
        <div className="bg-[#F7F9FC] p-6 rounded-lg border border-[#E5E9F0]">
          <div className="flex items-center gap-2 mb-4">
             <Activity className="w-4 h-4 text-[#0F5C5C]" />
             <h3 className="text-sm font-semibold text-[#0B1220] uppercase tracking-wider">Medical Context</h3>
          </div>
          <ul className="space-y-3">
            {node.medicalContext.map((item, idx) => (
              <li key={idx} className="text-[#4A5568] text-sm leading-relaxed flex items-start gap-2">
                <span className="block w-1 h-1 rounded-full bg-[#1C6F6A] mt-2 shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Treatment Options Section - NEW */}
      {node.treatmentOptions && node.treatmentOptions.length > 0 && (
        <div className="mb-12 border border-[#E5E9F0] rounded-lg p-6 bg-white">
          <div className="flex items-center gap-2 mb-6">
            <Stethoscope className="w-5 h-5 text-[#0F5C5C]" />
            <h3 className="text-lg font-medium text-[#0B1220]">Typical Treatment Approaches</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
            {node.treatmentOptions.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#1C6F6A] mt-2 shrink-0"></div>
                 <span className="text-[#4A5568] text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <HelpCircle className="w-5 h-5 text-[#1C6F6A]" />
          <h3 className="text-lg font-medium text-[#0B1220]">Common Questions</h3>
        </div>
        <div className="space-y-6">
          {node.commonQuestions.map((qa, index) => (
            <div key={index} className="border-l-2 border-[#E5E9F0] pl-4">
              <div className="font-medium text-[#0B1220] mb-1">{qa.q}</div>
              <div className="text-[#4A5568] text-sm leading-relaxed">{qa.a}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps Note */}
      <div className="mb-12 bg-[#F0F5F5] p-6 rounded-lg border border-[#E5E9F0]">
         <h3 className="text-sm font-bold text-[#0F5C5C] uppercase tracking-wider mb-2">Next Steps</h3>
         <p className="text-[#0B1220] text-base">
           "{node.managementInfo}"
         </p>
      </div>

      {/* Restart */}
      <div className="flex justify-start pt-4">
        <button 
          onClick={onRestart}
          className="text-[#4A5568] hover:text-[#0F5C5C] font-medium text-sm flex items-center gap-2 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Start Over
        </button>
      </div>
    </div>
  );
};

export default OutcomeView;