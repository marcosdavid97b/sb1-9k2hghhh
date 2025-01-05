import React from 'react';

const SETUPS = [
  'Breakout',
  'Reversal',
  'Trend Following',
  'Range',
  'Other'
] as const;

interface SetupFocusProps {
  value?: string[];
  onChange?: (value: string[]) => void;
}

export function SetupFocus({ value = [], onChange }: SetupFocusProps) {
  const toggleSetup = (setup: string) => {
    if (value.includes(setup)) {
      onChange?.(value.filter(s => s !== setup));
    } else {
      onChange?.([...value, setup]);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Setup Focus
      </label>
      <div className="flex flex-wrap gap-2">
        {SETUPS.map((setup) => (
          <button
            key={setup}
            onClick={() => toggleSetup(setup)}
            className={`px-3 py-1.5 text-sm rounded-md border transition-colors ${
              value.includes(setup)
                ? 'border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300'
                : 'border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700'
            }`}
          >
            {setup}
          </button>
        ))}
      </div>
    </div>
  );
}