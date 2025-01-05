import React, { useState } from 'react';
import { Header } from './Header';
import { GamePlan } from './PreMarket/GamePlan';
import { useMarketStatus } from '../../hooks/useMarketStatus';

export function Journal() {
  const [date, setDate] = useState(new Date());
  const marketStatus = useMarketStatus();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Header
        date={date}
        onDateChange={setDate}
        marketStatus={marketStatus}
      />
      <GamePlan onSave={() => console.log('Saving game plan...')} />
    </div>
  );
}