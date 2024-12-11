export type ColumnType = 'text' | 'date';

export interface ColumnConfig<T extends object> {
  label: string;
  type: ColumnType;
  property: keyof T;
  computeValue?: (row: T) => string;
}
