import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Task } from '@core/models';
import { TasksStore } from '@core/stores';
import { TextControlComponent } from '@features/shared';

import { TaskForm, TaskFormValues } from './models';
import { TaskFormAdapterService } from './services';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [TextControlComponent, ReactiveFormsModule],
  providers: [TaskFormAdapterService],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskFormComponent {
  readonly #tasksStore = inject(TasksStore);
  readonly #taskFormAdapter = inject(TaskFormAdapterService);

  form: FormGroup<TaskForm> = this.#taskFormAdapter.createForm();

  handleSubmitForm(): void {
    if (this.form.invalid) return;

    const payload: Task = this.#generatePayload(this.form.value as TaskFormValues);

    this.#tasksStore.add(payload);

    this.#resetForm();
  }

  #generatePayload(formValues: TaskFormValues): Task {
    const { name, isImportant } = formValues;

    return {
      name,
      isImportant,
      id: crypto.randomUUID(),
      dateCreated: new Date(),
      dateCompleted: null,
    };
  }

  #resetForm(): void {
    this.form.reset();
  }
}
