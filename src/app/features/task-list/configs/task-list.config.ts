import { Task } from '@core/models';
import { ColumnConfig } from '@features/shared';

import { format } from 'date-fns';

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
    computeValue: ({ dateCreated }) => format(dateCreated, 'dd-MM-yyyy hh:mm'),
  },
  {
    type: 'date',
    label: 'date completed',
    property: 'dateCompleted',
    computeValue: ({ dateCompleted }) => (dateCompleted ? format(dateCompleted, 'dd-MM-yyyy hh:mm') : '-'),
  },
];
