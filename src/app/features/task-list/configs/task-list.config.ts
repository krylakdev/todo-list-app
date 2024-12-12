import { Task } from '@core/models';
import { ColumnConfig } from '@features/shared';

export const TASK_LIST_COLUMN_CONFIG: ColumnConfig<Task>[] = [
  {
    type: 'text',
    label: 'is important',
    property: 'isImportant',
    computeValue: ({ isImportant }) => (isImportant ? 'Yes' : 'No'),
  },
  {
    type: 'text',
    label: 'name',
    property: 'name',
  },
  {
    type: 'text',
    label: 'description man',
    property: 'description',
  },
  {
    type: 'date',
    label: 'date created',
    property: 'dateCreated',
  },
];
