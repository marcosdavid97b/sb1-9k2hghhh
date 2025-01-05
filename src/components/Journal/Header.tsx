import React from 'react';
import { Calendar, Activity } from 'lucide-react';
import { format } from 'date-fns';

interface HeaderProps {
  date: Date;
  onDateChange: (date: Date) => void;
  marketStatus: 'open' | 'closed' | 'pre-market' | 'after-hours';
}

export function Header({ date, onDateChange, marketStatus }: HeaderProps) {
  const statusColors = {
    open: 'bg-green-500',
    closed: 'bg-red-500',
    'pre-market': 'bg-yellow-500',
    'after-hours': 'bg-blue-500'
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm mb-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-0">
        Daily Journal
      </h1>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="date"
            value={format(date, 'yyyy-MM-dd')}
            onChange={(e) => onDateChange(new Date(e.target.value))}
            className="pl-10 pr-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>

        <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-50 dark:bg-gray-700">
          <Activity className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <div className="flex items-center gap-2">
            <div className={`h-2 w-2 rounded-full ${statusColors[marketStatus]}`} />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
              {marketStatus.replace('-', ' ')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}