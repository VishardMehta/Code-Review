
import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';
import { MarkdownRenderer } from './MarkdownRenderer';

interface FeedbackDisplayProps {
  feedback: string;
  isLoading: boolean;
  error: string | null;
}

export const FeedbackDisplay: React.FC<FeedbackDisplayProps> = ({ feedback, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6 text-center">
        <LoadingSpinner />
        <p className="mt-4 text-lg text-gray-400 animate-pulse">Analyzing your code...</p>
        <p className="mt-2 text-sm text-gray-500">This may take a few moments.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full p-6">
        <div className="bg-red-900/50 border border-red-700 text-red-300 p-4 rounded-lg">
          <p className="font-semibold">An Error Occurred</p>
          <p className="mt-1 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (!feedback) {
    return (
      <div className="flex items-center justify-center h-full p-6 text-center">
        <div className="text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          <h3 className="mt-2 text-lg font-medium text-gray-300">Awaiting Code Review</h3>
          <p className="mt-1 text-sm text-gray-400">
            Paste your code in the editor, select the language, and click "Review Code" to get started.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6">
       <MarkdownRenderer content={feedback} />
    </div>
  );
};
