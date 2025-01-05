import React from 'react';
import { FilterBar } from '../components/FilterBar';
import { StatsCard } from '../components/Dashboard/StatsCard';
import { Chart } from '../components/Dashboard/Chart';
import { PerformanceInsights } from '../components/Insights/PerformanceInsights';

export function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <FilterBar />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard title="Total P&L" value="8,708.83" change={17} prefix="$" />
        <StatsCard title="Win Rate" value="39.1" change={5} suffix="%" />
        <StatsCard title="Profit Factor" value="1.53" change={3} />
        <StatsCard title="Expectancy" value="75.73" change={3} prefix="$" />
      </div>

      <div className="mb-8">
        <Chart
          data={[]}
          lines={[
            { key: 'pnl', color: '#4F46E5', name: 'Net P&L' },
            { key: 'winRate', color: '#10B981', name: 'Win Rate' }
          ]}
        />
      </div>

      <PerformanceInsights trades={[]} stats={{} as any} />
    </div>
  );
}