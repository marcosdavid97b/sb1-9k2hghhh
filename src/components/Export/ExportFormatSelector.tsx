import React from 'react';
import { ExportFormat } from '../../types/export';

interface ExportFormatSelectorProps {
  value: ExportFormat;
  onChange: (format: ExportFormat) => void;
}

export function ExportFormatSelector({ value, onChange }: ExportFormatSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Export Format
      </label>
      <div className="grid grid-cols-3 gap-3">
        {(['csv', 'json', 'pdf'] as ExportFormat[]).map((format) => (
          <button
            key={format}
            onClick={() => onChange(format)}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              value === format
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700'
            }`}
          >
            {format.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}