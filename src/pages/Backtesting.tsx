import React from 'react';
import { FilterBar } from '../components/FilterBar';
import { Chart } from '../components/Dashboard/Chart';

export function Backtesting() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Backtesting</h1>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          New Backtest
        </button>
      </div>

      <FilterBar />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Performance Metrics</h2>
          <Chart
            data={[]}
            lines={[
              { key: 'equity', color: '#4F46E5', name: 'Equity Curve' }
            ]}
          />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Trade Distribution</h2>
          {/* Trade distribution chart will go here */}
        </div>
      </div>
    </div>
  );
}