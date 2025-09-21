
import React from 'react';

interface CodeInputProps {
  code: string;
  onCodeChange: (code: string) => void;
}

export const CodeInput: React.FC<CodeInputProps> = ({ code, onCodeChange }) => {
  return (
    <div className="relative flex-grow">
      <textarea
        value={code}
        onChange={(e) => onCodeChange(e.target.value)}
        placeholder="Paste your code here..."
        className="w-full h-full p-4 bg-transparent text-gray-300 font-mono text-sm resize-none focus:outline-none placeholder-gray-500 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
        spellCheck="false"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
      />
    </div>
  );
};
