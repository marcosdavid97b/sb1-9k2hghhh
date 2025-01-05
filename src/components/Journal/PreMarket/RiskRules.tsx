import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface RiskRulesProps {
  value?: string[];
  onChange?: (value: string[]) => void;
}

export function RiskRules({ value = [], onChange }: RiskRulesProps) {
  const [newRule, setNewRule] = useState('');

  const handleAdd = () => {
    if (newRule.trim()) {
      onChange?.([...value, newRule.trim()]);
      setNewRule('');
    }
  };

  const handleRemove = (index: number) => {
    onChange?.(value.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Risk Management Rules
      </label>
      
      <div className="flex gap-2">
        <input
          type="text"
          value={newRule}
          onChange={(e) => setNewRule(e.target.value)}
          placeholder="Add a risk rule..."
          className="flex-1 px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
        />
        <button
          onClick={handleAdd}
          disabled={!newRule.trim()}
          className="p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>

      <ul className="space-y-2">
        {value.map((rule, index) => (
          <li
            key={index}
            className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-md"
          >
            <span className="flex-1 text-sm">{rule}</span>
            <button
              onClick={() => handleRemove(index)}
              className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full"
            >
              <X className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}