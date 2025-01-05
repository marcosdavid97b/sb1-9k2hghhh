import React from 'react';
import { TrendingUp, AlertCircle, Calendar, DollarSign } from 'lucide-react';
import { Trade, TradingStats } from '../../types/trading';
import { generateInsights } from '../../utils/insights';

interface PerformanceInsightsProps {
  trades: Trade[];
  stats: TradingStats;
}

export function PerformanceInsights({ trades, stats }: PerformanceInsightsProps) {
  const insights = generateInsights(trades, stats);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      {insights.map((insight, index) => (
        <div
          key={index}
          className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
        >
          <div className="flex items-start gap-3">
            <div className={`p-2 rounded-lg ${insight.color}`}>
              {insight.icon === 'trending-up' && <TrendingUp className="h-5 w-5 text-white" />}
              {insight.icon === 'alert-circle' && <AlertCircle className="h-5 w-5 text-white" />}
              {insight.icon === 'calendar' && <Calendar className="h-5 w-5 text-white" />}
              {insight.icon === 'dollar-sign' && <DollarSign className="h-5 w-5 text-white" />}
            </div>
            <div>
              <h3 className="font-medium mb-1 dark:text-white">{insight.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{insight.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}