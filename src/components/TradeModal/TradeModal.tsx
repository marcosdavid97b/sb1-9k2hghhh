import React from 'react';
import { X, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';
import { Trade } from '../../types/trading';
import { formatCurrency, formatDate, calculateRR } from '../../utils/formatters';

interface TradeModalProps {
  trade: Trade;
  onClose: () => void;
}

export function TradeModal({ trade, onClose }: TradeModalProps) {
  const isWin = trade.result > 0;
  const rr = calculateRR(trade);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
        
        <div className="relative w-full max-w-2xl rounded-lg bg-white dark:bg-gray-800 shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b p-4 dark:border-gray-700">
            <div className="flex items-center gap-3">
              {isWin ? (
                <TrendingUp className="h-5 w-5 text-green-500" />
              ) : (
                <TrendingDown className="h-5 w-5 text-red-500" />
              )}
              <h2 className="text-lg font-semibold dark:text-white">
                {trade.asset} Trade Details
              </h2>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Trade Details */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Date</p>
                <p className="font-medium dark:text-white">{formatDate(trade.date)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Setup</p>
                <p className="font-medium dark:text-white">{trade.setup}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Entry Price</p>
                <p className="font-medium dark:text-white">{formatCurrency(trade.entryPrice)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Exit Price</p>
                <p className="font-medium dark:text-white">{formatCurrency(trade.exitPrice)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Stop Loss</p>
                <p className="font-medium dark:text-white">{formatCurrency(trade.stopLoss)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Take Profit</p>
                <p className="font-medium dark:text-white">{formatCurrency(trade.takeProfit)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">R:R Ratio</p>
                <p className="font-medium dark:text-white">{rr.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Result</p>
                <p className={`font-medium ${isWin ? 'text-green-500' : 'text-red-500'}`}>
                  {formatCurrency(trade.result)}
                </p>
              </div>
            </div>

            {/* Notes & Emotions */}
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2 dark:text-white">Emotions</h3>
                <p className="text-gray-600 dark:text-gray-300">{trade.emotions}</p>
              </div>
              <div>
                <h3 className="font-medium mb-2 dark:text-white">Lessons Learned</h3>
                <p className="text-gray-600 dark:text-gray-300">{trade.lessons}</p>
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="font-medium mb-2 dark:text-white">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {trade.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}