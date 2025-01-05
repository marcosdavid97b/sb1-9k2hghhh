import React from 'react';
import { Calendar } from 'lucide-react';

export function DateRangePicker() {
  return (
    <div className="relative">
      <button className="flex items-center gap-2 px-3 py-2 text-sm border rounded-md hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
        <Calendar className="w-4 h-4 text-gray-500" />
        <span className="text-gray-700 dark:text-gray-300">Last 30 Days</span>
      </button>
    </div>
  );
}