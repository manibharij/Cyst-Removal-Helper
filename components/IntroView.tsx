import React from 'react';
import { IntroNode } from '../types';

interface IntroViewProps {
  node: IntroNode;
  onStart: (nextId: string) => void;
}

const IntroView: React.FC<IntroViewProps> = ({ node, onStart }) => {
  return (
    <div className="max-w-2xl mx-auto py-12 px-6 fade-enter-active flex flex-col items-start text-left bg-white rounded-xl border border-[#E5E9F0] shadow-sm">
      <h1 className="text-2xl sm:text-3xl font-medium text-[#0B1220] mb-6 tracking-tight leading-snug">
        {node.title}
      </h1>
      
      <div className="text-[#4A5568] text-lg leading-relaxed mb-10 max-w-none">
        <p>{node.content}</p>
      </div>

      <button
        onClick={() => onStart(node.nextId)}
        className="bg-[#0F5C5C] hover:bg-[#1C6F6A] text-white font-medium px-8 py-3 rounded-lg transition-all shadow-sm hover:shadow-md"
      >
        {node.startButtonText}
      </button>
    </div>
  );
};

export default IntroView;