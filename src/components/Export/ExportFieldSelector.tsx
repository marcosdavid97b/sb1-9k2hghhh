import React from 'react';

const AVAILABLE_FIELDS = [
  { id: 'date', label: 'Date' },
  { id: 'asset', label: 'Asset' },
  { id: 'entryPrice', label: 'Entry Price' },
  { id: 'exitPrice', label: 'Exit Price' },
  { id: 'stopLoss', label: 'Stop Loss' },
  { id: 'takeProfit', label: 'Take Profit' },
  { id: 'result', label: 'P&L' },
  { id: 'volume', label: 'Volume' },
  { id: 'setup', label: 'Setup' },
  { id: 'emotions', label: 'Emotions' },
  { id: 'lessons', label: 'Lessons' },
  { id: 'tags', label: 'Tags' }
];

interface ExportFieldSelectorProps {
  value: string[];
  onChange: (fields: string[]) => void;
}

export function ExportFieldSelector({ value, onChange }: ExportFieldSelectorProps) {
  const toggleField = (fieldId: string) => {
    if (value.includes(fieldId)) {
      onChange(value.filter(id => id !== fieldId));
    } else {
      onChange([...value, fieldId]);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Select Fields to Export
      </label>
      <div className="grid grid-cols-3 gap-2">
        {AVAILABLE_FIELDS.map((field) => (
          <label
            key={field.id}
            className="flex items-center space-x-2 text-sm"
          >
            <input
              type="checkbox"
              checked={value.includes(field.id)}
              onChange={() => toggleField(field.id)}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="text-gray-700 dark:text-gray-300">{field.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}