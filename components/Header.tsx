
import React from 'react';
import { BrainCircuitIcon } from './Icon';

export const Header: React.FC = () => {
  return (
    <header className="flex-shrink-0 bg-gray-800/50 border-b border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center space-x-3">
          <BrainCircuitIcon className="w-8 h-8 text-cyan-400" />
          <h1 className="text-2xl font-bold text-white tracking-tight">
            AI Code Reviewer
          </h1>
        </div>
      </div>
    </header>
  );
};
