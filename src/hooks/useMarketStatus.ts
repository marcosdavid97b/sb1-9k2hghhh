import { useState, useEffect } from 'react';

type MarketStatus = 'open' | 'closed' | 'pre-market' | 'after-hours';

export function useMarketStatus(): MarketStatus {
  const [status, setStatus] = useState<MarketStatus>('closed');

  useEffect(() => {
    const checkMarketStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const day = now.getDay();
      
      // Weekend check
      if (day === 0 || day === 6) {
        setStatus('closed');
        return;
      }

      // Convert to market time (EST)
      const marketTime = hours * 60 + minutes - 240; // EST offset

      if (marketTime >= 570 && marketTime < 600) { // 9:30 AM - 10:00 AM
        setStatus('open');
      } else if (marketTime >= 480 && marketTime < 570) { // 8:00 AM - 9:30 AM
        setStatus('pre-market');
      } else if (marketTime >= 600 && marketTime < 960) { // 10:00 AM - 4:00 PM
        setStatus('open');
      } else if (marketTime >= 960 && marketTime < 1200) { // 4:00 PM - 8:00 PM
        setStatus('after-hours');
      } else {
        setStatus('closed');
      }
    };

    checkMarketStatus();
    const interval = setInterval(checkMarketStatus, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return status;
}