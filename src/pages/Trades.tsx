import React from 'react';
import { FilterBar } from '../components/FilterBar';
import { TradeList } from '../components/Trades/TradeList';
import { TradeModal } from '../components/TradeModal/TradeModal';

export function Trades() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <FilterBar />
      <TradeList />
    </div>
  );
}