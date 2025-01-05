import React from 'react';

interface DailyGoalsProps {
  value?: string;
  onChange?: (value: string) => void;
}

export function DailyGoals({ value = '', onChange }: DailyGoalsProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Daily Goals
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder="Set your trading goals for today..."
        maxLength={500}
        rows={4}
        className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
      <div className="text-xs text-gray-500 dark:text-gray-400">
        {value.length}/500 characters
      </div>
    </div>
  );
}