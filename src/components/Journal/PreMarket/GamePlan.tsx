import React, { useState } from 'react';
import { MarketSentiment } from './MarketSentiment';
import { Watchlist } from './Watchlist';
import { DailyGoals } from './DailyGoals';
import { SetupFocus } from './SetupFocus';
import { RiskRules } from './RiskRules';
import { Loader2 } from 'lucide-react';

interface GamePlanProps {
  onSave: () => void;
}

export function GamePlan({ onSave }: GamePlanProps) {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await onSave();
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Pre-Market Game Plan
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MarketSentiment />
        <Watchlist />
        <DailyGoals />
        <SetupFocus />
        <RiskRules />
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Save game plan"
        >
          {isSaving ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Saving...
            </>
          ) : (
            'Save Game Plan'
          )}
        </button>
      </div>
    </div>
  );
}