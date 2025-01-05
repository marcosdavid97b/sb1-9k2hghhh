import { useState } from 'react';
import { ExportConfig } from '../types/export';
import { exportToJSON, exportToPDF } from '../utils/exporters';

export function useExport() {
  const [isExporting, setIsExporting] = useState(false);

  const exportData = async (config: ExportConfig) => {
    setIsExporting(true);
    try {
      switch (config.format) {
  case 'json':
    await exportToJSON(config);
    break;
  case 'pdf':
    await exportToPDF(config);
    break;
  default:
    console.warn(`Unsupported format: ${config.format}`);
    break;
}
    } finally {
      setIsExporting(false);
    }
  };

  return { exportData, isExporting };
}