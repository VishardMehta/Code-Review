
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { LanguageSelector } from './components/LanguageSelector';
import { CodeInput } from './components/CodeInput';
import { FeedbackDisplay } from './components/FeedbackDisplay';
import { reviewCode } from './services/geminiService';
import { PROGRAMMING_LANGUAGES } from './constants';
import { CodeIcon } from './components/Icon';

const App: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const [language, setLanguage] = useState<string>(PROGRAMMING_LANGUAGES[0]);
  const [feedback, setFeedback] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleReview = useCallback(async () => {
    if (!code) {
      setError('Please enter some code to review.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setFeedback('');

    try {
      const result = await reviewCode(code, language);
      setFeedback(result);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Failed to get code review: ${errorMessage}`);
      setFeedback('');
    } finally {
      setIsLoading(false);
    }
  }, [code, language]);

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-200 selection:bg-cyan-500/30">
      <Header />
      <main className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 sm:p-6 overflow-hidden">
        {/* Left Panel */}
        <div className="flex flex-col h-full overflow-hidden bg-gray-800/50 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between p-4 border-b border-gray-700 flex-wrap gap-2">
            <LanguageSelector
              selectedLanguage={language}
              onLanguageChange={setLanguage}
            />
            <button
              onClick={handleReview}
              disabled={isLoading || !code.trim()}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-cyan-600 text-white font-semibold rounded-md hover:bg-cyan-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <CodeIcon className="w-5 h-5" />
              {isLoading ? 'Reviewing...' : 'Review Code'}
            </button>
          </div>
          <CodeInput code={code} onCodeChange={setCode} />
        </div>
        
        {/* Right Panel */}
        <div className="h-full overflow-y-auto bg-gray-800/50 rounded-lg border border-gray-700 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          <FeedbackDisplay
            feedback={feedback}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
