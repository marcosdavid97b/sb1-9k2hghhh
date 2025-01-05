import React, { useState } from 'react';
import { X } from 'lucide-react';
import { ExportConfig } from '../../types/export';
import { ExportFormatSelector } from './ExportFormatSelector';
import { ExportFieldSelector } from './ExportFieldSelector';
import { DateRangeSelector } from './DateRangeSelector';
import { useExport } from '../../hooks/useExport';
import { Toast } from '../UI/Toast';

interface ExportModalProps {
  onClose: () => void;
}

export function ExportModal({ onClose }: ExportModalProps) {
  const [config, setConfig] = useState<ExportConfig>({
    format: 'csv',
    dateRange: { start: '', end: '' },
    fields: [],
    filters: {}
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const { exportData, isExporting } = useExport();

  const handleExport = async () => {
    try {
      // Validate required fields
      if (!config.dateRange.start || !config.dateRange.end) {
        throw new Error('Please select a date range');
      }
      if (config.fields.length === 0) {
        throw new Error('Please select at least one field to export');
      }

      await exportData(config);
      setToastMessage('Export completed successfully');
      setToastType('success');
      setShowToast(true);
      onClose();
    } catch (error) {
      setToastMessage(error instanceof Error ? error.message : 'Export failed');
      setToastType('error');
      setShowToast(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h2 className="text-xl font-semibold dark:text-white">Export Trading Data</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <ExportFormatSelector
            value={config.format}
            onChange={(format) => setConfig({ ...config, format })}
          />
          
          <DateRangeSelector
            value={config.dateRange}
            onChange={(dateRange) => setConfig({ ...config, dateRange })}
          />
          
          <ExportFieldSelector
            value={config.fields}
            onChange={(fields) => setConfig({ ...config, fields })}
          />
        </div>

        <div className="flex justify-end gap-3 p-4 border-t dark:border-gray-700">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleExport}
            disabled={isExporting}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50"
          >
            {isExporting ? 'Exporting...' : 'Export'}
          </button>
        </div>
      </div>

      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}