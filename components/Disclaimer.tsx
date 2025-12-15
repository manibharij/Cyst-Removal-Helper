import React from 'react';

const Disclaimer: React.FC = () => {
  return (
    <div className="mt-12 text-center max-w-2xl mx-auto px-6 pb-12">
      <p className="text-xs text-[#4A5568] leading-relaxed opacity-75">
        <strong>Note:</strong> This content is for general information only. It explores common medical patterns but cannot diagnose a specific condition. Always consult a qualified medical professional for personal advice.
      </p>
    </div>
  );
};

export default Disclaimer;