import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { ExportConfig } from '../../types/export';
import { formatExportData } from './formatters';

export async function exportToPDF(data: any[], config: ExportConfig): Promise<void> {
  try {
    const formattedData = formatExportData(data, config.fields);
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(16);
    doc.text('Trading Journal Export', 20, 20);
    
    // Add date range
    doc.setFontSize(12);
    doc.text(`Period: ${config.dateRange.start} to ${config.dateRange.end}`, 20, 30);
    
    // Create table
    const headers = config.fields.map(field => ({ 
      header: field, 
      dataKey: field 
    }));
    
    doc.autoTable({
      head: [headers.map(h => h.header)],
      body: formattedData.map(row => headers.map(h => row[h.dataKey])),
      startY: 40,
      theme: 'grid'
    });
    
    doc.save('trading-journal.pdf');
  } catch (error) {
    console.error('PDF export failed:', error);
    throw new Error('Failed to generate PDF file');
  }
}