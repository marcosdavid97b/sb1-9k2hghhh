import { format } from 'date-fns';
import { EXPORT_FIELDS } from './constants';

export function formatExportData(data: any[], fields: string[]) {
  return data.map(item => {
    const formattedItem: Record<string, any> = {};
    
    fields.forEach(field => {
      let value = item[field];
      
      switch (field) {
        case 'date':
          value = format(new Date(value), 'yyyy-MM-dd HH:mm:ss');
          break;
        case 'tags':
          value = Array.isArray(value) ? value.join(', ') : value;
          break;
        case 'result':
        case 'entry_price':
        case 'exit_price':
        case 'stop_loss':
        case 'take_profit':
        case 'volume':
          value = typeof value === 'number' ? value.toFixed(2) : value;
          break;
      }
      
      formattedItem[EXPORT_FIELDS[field] || field] = value;
    });
    
    return formattedItem;
  });
}