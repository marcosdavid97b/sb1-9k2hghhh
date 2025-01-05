import { downloadFile } from './download';
import { formatExportData } from './formatters';
import { ExportConfig } from '../../types/export';

export async function exportToJSON(data: any[], config: ExportConfig): Promise<void> {
  try {
    const formattedData = formatExportData(data, config.fields);
    const json = JSON.stringify(formattedData, null, 2);
    downloadFile(json, 'trading-journal.json', 'application/json');
  } catch (error) {
    console.error('JSON export failed:', error);
    throw new Error('Failed to generate JSON file');
  }
}