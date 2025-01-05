import React from 'react';
import { Strategy } from '../types/trading';
import { Plus } from 'lucide-react';

export function Playbook() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Trading Playbook</h1>
        <button className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          <Plus className="h-5 w-5 mr-2" />
          Add Strategy
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Strategy cards will be rendered here */}
      </div>
    </div>
  );
}