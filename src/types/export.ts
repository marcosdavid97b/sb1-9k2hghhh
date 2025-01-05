export type ExportFormat = 'json' | 'pdf';

export interface DateRange {
  start: string;
  end: string;
}

export interface ExportConfig {
  format: ExportFormat;
  dateRange: DateRange;
  fields: string[];
  filters: Record<string, any>;
}

export interface ExportField {
  id: string;
  label: string;
  value: string;
}