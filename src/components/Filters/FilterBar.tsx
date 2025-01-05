import React from 'react';
import { Filter, Calendar, ChevronDown } from 'lucide-react';
import { DateRangePicker } from './DateRangePicker';
import { FilterMenu } from './FilterMenu';

export function FilterBar() {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="flex items-center gap-2">
        <Filter className="w-4 h-4 text-gray-500" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filters</span>
      </div>
      
      <DateRangePicker />
      
      <FilterMenu
        label="Asset"
        options={['AAPL', 'GOOGL', 'MSFT', 'AMZN']}
      />
      
      <FilterMenu
        label="Setup"
        options={['Breakout', 'Pullback', 'Trend Following', 'Range Trading']}
      />
      
      <FilterMenu
        label="Outcome"
        options={['Win', 'Loss', 'Break Even']}
      />
      
      <button className="ml-auto text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
        Save Filter
      </button>
    </div>
  );
}