import React, { useState } from 'react';
import Disclaimer from './components/Disclaimer';
import IntroView from './components/IntroView';
import QuestionView from './components/QuestionView';
import OutcomeView from './components/OutcomeView';
import { CLINIC_DATA } from './data';
import { AppNode } from './types';

const App: React.FC = () => {
  // --- STATE ---
  const [currentNodeId, setCurrentNodeId] = useState<string>(CLINIC_DATA.initialNodeId);
  
  // History stack to allow "Back" functionality
  const [history, setHistory] = useState<string[]>([]);

  // --- DERIVED STATE ---
  const currentNode: AppNode | undefined = CLINIC_DATA.nodes[currentNodeId];

  // Safety check: if code refers to a missing node ID
  if (!currentNode) {
    return (
      <div className="p-10 text-center text-red-600 font-mono text-sm bg-red-50 rounded-lg border border-red-100 m-4">
        Error: Node "{currentNodeId}" not found in data structure.
      </div>
    );
  }

  // --- ACTIONS ---

  const handleStart = (nextId: string) => {
    setHistory([currentNodeId]);
    setCurrentNodeId(nextId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnswer = (nextId: string) => {
    // Push current ID to history
    setHistory((prev) => [...prev, currentNodeId]);
    // Advance to next
    setCurrentNodeId(nextId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    if (history.length === 0) return;
    
    // Create copy
    const newHistory = [...history];
    // Pop last item
    const previousId = newHistory.pop();
    
    if (previousId) {
      setHistory(newHistory);
      setCurrentNodeId(previousId);
    }
  };

  const handleRestart = () => {
    setHistory([]);
    setCurrentNodeId(CLINIC_DATA.initialNodeId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- RENDER ---

  const renderCurrentView = () => {
    switch (currentNode.type) {
      case 'intro':
        return (
          <IntroView 
            node={currentNode} 
            onStart={handleStart} 
          />
        );
      
      case 'question':
        return (
          <QuestionView 
            node={currentNode} 
            onSelectOption={handleAnswer} 
            onBack={handleBack}
            canGoBack={history.length > 0}
          />
        );
      
      case 'outcome':
        return (
          <OutcomeView 
            node={currentNode} 
            onRestart={handleRestart} 
          />
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] flex flex-col items-center font-sans">
      <main className="w-full max-w-4xl mx-auto px-4 py-8 sm:py-12 flex flex-col min-h-screen">
        {/* Main interactive area */}
        <div key={currentNodeId} className="w-full flex-grow"> 
          {renderCurrentView()}
        </div>

        {/* Footer Area */}
        <div className="mt-auto">
          {/* Persistent Disclaimer */}
          <div className="mt-8 opacity-80 hover:opacity-100 transition-opacity">
            <Disclaimer />
          </div>

          {/* Branding Footer */}
          <div className="pb-8 flex justify-center items-center">
            <div className="flex items-center gap-2 opacity-70 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100">
              <span className="text-xs text-[#4A5568] font-medium uppercase tracking-wide">Powered by</span>
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 bg-[#0F5C5C] rounded flex items-center justify-center text-white text-[10px] font-bold">
                  C
                </div>
                <span className="text-sm font-bold text-[#0B1220] tracking-tight">Cyst Removal Clinic</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;