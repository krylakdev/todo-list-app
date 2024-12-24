export interface RowConfig<T extends object> {
  highlight?: (row: T) => boolean;
  lineThrough?: (row: T) => boolean;
}
