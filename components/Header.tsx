import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="border-b border-slate-200 bg-white py-4 px-6 mb-8 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
          C
        </div>
        <span className="font-semibold text-slate-800 text-lg tracking-tight">CystRemoval <span className="text-slate-400 font-normal">UK</span></span>
      </div>
      <div className="text-xs font-medium text-slate-500 uppercase tracking-wider hidden sm:block">
        Patient Help Centre
      </div>
    </header>
  );
};

export default Header;