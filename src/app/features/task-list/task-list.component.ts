import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';

import { Task } from '@core/models';
import { TasksStore } from '@core/stores';
import { ColumnConfig, GenericTableComponent } from '@features/shared';

import { TaskListStatsComponent } from './components';
import { TASK_LIST_COLUMN_CONFIG } from './configs';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [GenericTableComponent, TaskListStatsComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent {
  readonly #tasksStore = inject(TasksStore);

  readonly taskListColumnConfig: ColumnConfig<Task>[] = TASK_LIST_COLUMN_CONFIG;
  tasksList: Signal<Task[]> = this.#tasksStore.tasks;
}