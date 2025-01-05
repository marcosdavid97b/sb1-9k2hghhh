export interface Trade {
  id: string;
  date: string;
  asset: string;
  entryPrice: number;
  exitPrice: number;
  stopLoss: number;
  takeProfit: number;
  riskRewardRatio: number;
  setup: string;
  emotions: string;
  lessons: string;
  tags: string[];
  result: number;
  volume: number;
}

export interface TradingStats {
  totalPnL: number;
  totalTrades: number;
  winningTrades: number;
  losingTrades: number;
  breakEvenTrades: number;
  winRate: number;
  profitFactor: number;
  averageDailyPnL: number;
  averageDailyVolume: number;
  largestProfit: number;
  largestLoss: number;
  maxConsecutiveWins: number;
  maxConsecutiveLosses: number;
  tradeExpectancy: number;
}

export interface Strategy {
  id: string;
  name: string;
  description: string;
  marketType: string;
  pattern: string;
  setupRules: string[];
  entryRules: string[];
  exitRules: string[];
  riskManagement: {
    maxRiskPerTrade: number;
    stopLossRules: string[];
    takeProfitRules: string[];
  };
  images: string[];
  notes: string;
}