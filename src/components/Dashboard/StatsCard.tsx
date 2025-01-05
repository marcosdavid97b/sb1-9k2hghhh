import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  prefix?: string;
  suffix?: string;
}

export function StatsCard({ title, value, change, prefix = '', suffix = '' }: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-semibold mt-1">
            {prefix}{value}{suffix}
          </p>
        </div>
        {change !== undefined && (
          <div className={`flex items-center ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {change >= 0 ? (
              <ArrowUpIcon className="w-4 h-4 mr-1" />
            ) : (
              <ArrowDownIcon className="w-4 h-4 mr-1" />
            )}
            <span className="text-sm font-medium">{Math.abs(change)}%</span>
          </div>
        )}
      </div>
    </div>
  );
}