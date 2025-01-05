import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

interface FilterMenuProps {
  label: string;
  options: string[];
  value?: string[];
  onChange?: (value: string[]) => void;
}

export function FilterMenu({ label, options, value = [], onChange }: FilterMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (option: string) => {
    if (value.includes(option)) {
      onChange?.(value.filter(v => v !== option));
    } else {
      onChange?.([...value, option]);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm border rounded-md hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-gray-700 dark:text-gray-300">
          {value.length > 0 ? `${label} (${value.length})` : label}
        </span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute left-0 z-20 mt-1 w-48 rounded-md bg-white dark:bg-gray-800 shadow-lg border dark:border-gray-700">
            <div className="py-1">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => toggleOption(option)}
                  className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {option}
                  {value.includes(option) && (
                    <Check className="w-4 h-4 text-indigo-600" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}