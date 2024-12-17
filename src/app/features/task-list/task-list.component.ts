import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';

import { Task } from '@core/models';
import { TasksStore } from '@core/stores';
import { ColumnConfig, GenericTableComponent } from '@features/shared';

import { TASK_LIST_COLUMN_CONFIG } from './configs';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [GenericTableComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent {
  readonly #tasksStore = inject(TasksStore);

  readonly taskListColumnConfig: ColumnConfig<Task>[] = TASK_LIST_COLUMN_CONFIG;
  tasksList: Signal<Task[]> = this.#tasksStore.tasks;
  tasksCountAll: Signal<number> = this.#tasksStore.tasksCountAll;
  tasksCountIsImportant: Signal<number> = this.#tasksStore.tasksCountIsImportant;
  tasksCountUncompleted: Signal<number> = this.#tasksStore.tasksCountUncompleted;
  tasksCountCompleted: Signal<number> = this.#tasksStore.tasksCountCompleted;
}
