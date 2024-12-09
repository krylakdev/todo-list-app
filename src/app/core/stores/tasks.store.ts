import { computed } from '@angular/core';
import { signalStore, withComputed, withState } from '@ngrx/signals';

import { Task } from '@core/models';

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
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
