export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(date));
}

export function calculateRR(trade: { takeProfit: number; entryPrice: number; stopLoss: number }): number {
  const potentialProfit = Math.abs(trade.takeProfit - trade.entryPrice);
  const potentialLoss = Math.abs(trade.entryPrice - trade.stopLoss);
  return potentialLoss === 0 ? 0 : potentialProfit / potentialLoss;
}