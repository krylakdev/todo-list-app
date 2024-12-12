import { computed } from '@angular/core';
import { signalStore, withComputed, withState } from '@ngrx/signals';

import { Task } from '@core/models';

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [
    // TODO temp data -> remove after implementation Add Task
    {
      id: crypto.randomUUID(),
      isImportant: false,
      name: 'task 1',
      description: 'Lorem Impsum Dolores...',
      dateCreated: new Date(),
      dateCompleted: null,
    },
    {
      id: crypto.randomUUID(),
      isImportant: true,
      name: 'task 2',
      description: '',
      dateCreated: new Date(),
      dateCompleted: null,
    },
    {
      id: crypto.randomUUID(),
      isImportant: false,
      name: 'task 3',
      description: 'Lorem Impsum Dolores...',
      dateCreated: new Date(),
      dateCompleted: null,
    },
  ],
};

export const TasksStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ tasks }) => ({
    tasksCountAll: computed((): number => tasks().length),
    tasksCountIsImportant: computed((): number => tasks().filter(task => task.isImportant).length),
    tasksCountUncompleted: computed((): number => tasks().filter(task => !task.dateCompleted).length),
    tasksCountCompleted: computed((): number => tasks().filter(task => !!task.dateCompleted).length),
  }))
);
