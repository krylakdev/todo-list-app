import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withHooks, withMethods } from '@ngrx/signals';
import { addEntities, addEntity, withEntities } from '@ngrx/signals/entities';

import { LocalStorageService } from '@core/data-access';
import { Task } from '@core/models';

export const TasksStore = signalStore(
  { providedIn: 'root' },
  withEntities<Task>(),
  withComputed(({ entities }) => ({
    tasksCountAll: computed((): number => entities().length),
    tasksCountIsImportant: computed((): number => entities().filter(task => task.isImportant).length),
    tasksCountUncompleted: computed((): number => entities().filter(task => !task.dateCompleted).length),
    tasksCountCompleted: computed((): number => entities().filter(task => !!task.dateCompleted).length),
  })),
  withMethods((store, localStorageService = inject(LocalStorageService)) => ({
    load(): void {
      const tasks: Task[] | null = localStorageService.getItem('tasks');

      if (tasks) patchState(store, addEntities(tasks));
    },
    add(task: Task): void {
      const newTasks: Task[] = [...store.entities(), task];

      localStorageService.setItem('tasks', newTasks);

      patchState(store, addEntity(task));
    },
  })),
  withHooks({
    onInit({ load }): void {
      load();
    },
  })
);
