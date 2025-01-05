import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FilterMenuProps {
  label: string;
  options: string[];
}

export function FilterMenu({ label, options }: FilterMenuProps) {
  return (
    <div className="relative">
      <button className="flex items-center gap-2 px-3 py-2 text-sm border rounded-md hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
        <span className="text-gray-700 dark:text-gray-300">{label}</span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>
    </div>
  );
}