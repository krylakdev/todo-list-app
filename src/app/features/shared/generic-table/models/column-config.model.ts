export interface ColumnConfig<T extends object> {
  label: string;
  property: keyof T;
}
