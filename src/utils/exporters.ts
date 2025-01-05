import { ExportConfig } from '../types/export';
import { getTrades } from '../services/trades';
import { exportToJSON } from './export/json';
import { exportToPDF } from './export/pdf';

export async function handleExport(config: ExportConfig): Promise<void> {
  try {
    const data = await getTrades(config.filters);
    
    switch (config.format) {
      case 'json':
        await exportToJSON(data, config);
        break;
      case 'pdf':
        await exportToPDF(data, config);
        break;
      default:
        throw new Error(`Unsupported export format: ${config.format}`);
    }
  } catch (error) {
    console.error('Export failed:', error);
    throw error;
  }
}

// Exporta solo las funciones necesarias
export { exportToJSON, exportToPDF };
