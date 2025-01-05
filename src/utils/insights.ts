import { Trade, TradingStats } from '../types/trading';

interface Insight {
  title: string;
  description: string;
  icon: 'trending-up' | 'alert-circle' | 'calendar' | 'dollar-sign';
  color: string;
}

export function generateInsights(trades: Trade[], stats: TradingStats): Insight[] {
  const insights: Insight[] = [];

  // Manejo de arrays vacíos
  if (trades.length === 0) {
    return [
      {
        title: 'No Trading Data',
        description: 'You don’t have any trades yet. Start trading to see insights!',
        icon: 'alert-circle',
        color: 'bg-gray-500',
      },
    ];
  }

  // Best performing asset
  const assetPerformance = trades.reduce((acc, trade) => {
    acc[trade.asset] = (acc[trade.asset] || 0) + trade.result;
    return acc;
  }, {} as Record<string, number>);

  const bestAsset = Object.entries(assetPerformance).reduce(
    (a, b) => (a[1] > b[1] ? a : b),
    ['', 0] as [string, number] // Valor inicial para evitar errores
  );

  if (bestAsset[0]) {
    insights.push({
      title: 'Best Performing Asset',
      description: `${bestAsset[0]} has generated the highest profit of $${bestAsset[1].toFixed(2)}`,
      icon: 'trending-up',
      color: 'bg-green-500',
    });
  }

  // Win rate trend
  const recentWinRate =
    trades.slice(-10).filter((t) => t.result > 0).length / Math.min(10, trades.length);

  if (recentWinRate > stats.winRate) {
    insights.push({
      title: 'Improving Performance',
      description: 'Your recent win rate is higher than your overall average',
      icon: 'trending-up',
      color: 'bg-blue-500',
    });
  }

  // Risk management
  const highRiskTrades = trades.filter(
    (t) => Math.abs(t.result) > stats.averageDailyPnL * 2
  ).length;

  if (highRiskTrades > 0) {
    insights.push({
      title: 'Risk Management Alert',
      description: `You have ${highRiskTrades} trades with unusually high risk`,
      icon: 'alert-circle',
      color: 'bg-red-500',
    });
  }

  // Best trading day
  const dayPerformance = trades.reduce((acc, trade) => {
    const day = new Date(trade.date).getDay();
    acc[day] = (acc[day] || 0) + trade.result;
    return acc;
  }, {} as Record<number, number>);

  const bestDay = Object.entries(dayPerformance).reduce(
    (a, b) => (a[1] > b[1] ? a : b),
    [0, 0] as [number, number] // Valor inicial para evitar errores
  );

  if (bestDay[1] !== 0) {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    insights.push({
      title: 'Best Trading Day',
      description: `${days[Number(bestDay[0])]} is your most profitable trading day`,
      icon: 'calendar',
      color: 'bg-indigo-500',
    });
  }

  return insights;
}
