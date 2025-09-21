
import React from 'react';
import { PROGRAMMING_LANGUAGES } from '../constants';

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ selectedLanguage, onLanguageChange }) => {
  return (
    <div>
      <label htmlFor="language-select" className="sr-only">Select Language</label>
      <select
        id="language-select"
        value={selectedLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
        className="bg-gray-700 border border-gray-600 text-white text-sm rounded-md focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 transition-colors"
      >
        {PROGRAMMING_LANGUAGES.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};
