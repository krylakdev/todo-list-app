import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';

import { TasksStore } from '@core/stores';

@Component({
  selector: 'app-task-list-stats',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './task-list-stats.component.html',
  styleUrl: './task-list-stats.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListStatsComponent {
  readonly #tasksStore = inject(TasksStore);

  tasksCountAll: Signal<number> = this.#tasksStore.tasksCountAll;
  tasksCountIsImportant: Signal<number> = this.#tasksStore.tasksCountIsImportant;
  tasksCountUncompleted: Signal<number> = this.#tasksStore.tasksCountUncompleted;
  tasksCountCompleted: Signal<number> = this.#tasksStore.tasksCountCompleted;
}
