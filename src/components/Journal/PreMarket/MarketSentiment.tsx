import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const sentiments = [
  { value: 'bullish', icon: TrendingUp, color: 'text-green-500' },
  { value: 'neutral', icon: Minus, color: 'text-yellow-500' },
  { value: 'bearish', icon: TrendingDown, color: 'text-red-500' }
] as const;

interface MarketSentimentProps {
  value?: typeof sentiments[number]['value'];
  onChange?: (value: typeof sentiments[number]['value']) => void;
}

export function MarketSentiment({ value, onChange }: MarketSentimentProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Market Sentiment
      </label>
      <div className="flex gap-2">
        {sentiments.map((sentiment) => {
          const Icon = sentiment.icon;
          const isSelected = value === sentiment.value;
          return (
            <button
              key={sentiment.value}
              onClick={() => onChange?.(sentiment.value)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                isSelected
                  ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900'
                  : 'border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700'
              }`}
              aria-pressed={isSelected}
              aria-label={`Set market sentiment to ${sentiment.value}`}
            >
              <Icon className={`h-4 w-4 ${sentiment.color}`} />
              <span className="capitalize">{sentiment.value}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}