
import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const parts = content.split(/(```[\s\S]*?```)/g);

  return (
    <div className="prose prose-invert max-w-none prose-p:text-gray-300 prose-h3:text-cyan-400 prose-li:text-gray-300">
      {parts.map((part, i) => {
        if (part.startsWith('```')) {
          const lang = part.match(/```(\w+)?\n/)?.[1] || '';
          const code = part.replace(/```\w*\n?/, '').replace(/```$/, '');
          return (
            <div key={i} className="bg-gray-900/70 p-4 rounded-lg my-4 border border-gray-700 overflow-x-auto">
              <pre><code className={`language-${lang} text-sm font-mono`}>{code.trim()}</code></pre>
            </div>
          );
        } else {
          return part.split('\n').map((line, j) => {
            if (line.startsWith('### ')) {
              return <h3 key={`${i}-${j}`} className="text-xl font-semibold mt-6 mb-2 text-cyan-400 border-b border-gray-700 pb-2">{line.substring(4)}</h3>;
            }
            if (line.startsWith('## ')) {
              return <h2 key={`${i}-${j}`} className="text-2xl font-bold mt-8 mb-3 text-cyan-300 border-b-2 border-cyan-800 pb-2">{line.substring(3)}</h2>;
            }
            if (line.match(/^(\s*)\* /)) {
              return <li key={`${i}-${j}`} className="ml-6 my-1 list-disc">{line.replace(/^\s*\*\s/, '')}</li>;
            }
            if (line.trim() === '---') {
              return <hr key={`${i}-${j}`} className="my-6 border-gray-700" />;
            }
            if (line.trim() === '') {
              return <div key={`${i}-${j}`} className="h-4" />;
            }
            return <p key={`${i}-${j}`} className="leading-relaxed text-gray-300 my-2">{line}</p>;
          });
        }
      })}
    </div>
  );
};
