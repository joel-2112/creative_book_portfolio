import React from 'react';

export function CodeSketch({
  title = '',
  code = '',
  language = 'go',
  annotation = '',
  className = ''
}) {
  return (
    <div className={`relative my-3 ${className}`}>
      {/* Optional Title Tab */}
      {title && (
        <div className="inline-block px-3 py-0.5 mb-[-2px] bg-sky-100 border-2 border-b-0 border-zinc-800 rounded-t-md font-hand text-xs font-bold text-sky-900 z-10 relative">
          {title}
        </div>
      )}

      {/* Code Card Box */}
      <div className="bg-[#FAF8F5] border-2 border-zinc-800 rounded-lg p-3.5 shadow-sm font-code text-xs sm:text-sm text-zinc-900 leading-relaxed overflow-x-auto">
        <pre className="font-code">
          <code>{code}</code>
        </pre>
      </div>

      {/* Handwritten Annotation Arrow / Note if provided */}
      {annotation && (
        <div className="mt-1 flex items-center gap-1.5 text-xs font-script text-sky-700">
          <span className="text-sm">↳</span>
          <span>{annotation}</span>
        </div>
      )}
    </div>
  );
}
