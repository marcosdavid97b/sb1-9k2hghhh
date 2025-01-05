import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';

interface WatchlistProps {
  value?: string[];
  onChange?: (value: string[]) => void;
}

export function Watchlist({ value = [], onChange }: WatchlistProps) {
  const [input, setInput] = useState('');
  const isValidInput = input.trim().length > 0 && !value.includes(input.toUpperCase());

  const handleAdd = () => {
    if (isValidInput) {
      const newValue = [...value, input.toUpperCase()];
      onChange?.(newValue);
      setInput('');
    }
  };

  const handleRemove = (symbol: string) => {
    onChange?.(value.filter((s) => s !== symbol));
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Watchlist
      </label>
      
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value.toUpperCase())}
          placeholder="Add symbol..."
          className="flex-1 px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
        />
        <button
          onClick={handleAdd}
          disabled={!isValidInput}
          className="p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Add symbol to watchlist"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        {value.map((symbol) => (
          <div
            key={symbol}
            className="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md"
          >
            <span className="text-sm font-medium">{symbol}</span>
            <button
              onClick={() => handleRemove(symbol)}
              className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
              aria-label={`Remove ${symbol} from watchlist`}
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}