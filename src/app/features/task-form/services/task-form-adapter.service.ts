import { Injectable, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

import { TaskForm } from '../models';

@Injectable()
export class TaskFormAdapterService {
  #fb = inject(NonNullableFormBuilder);

  createForm(): FormGroup<TaskForm> {
    return this.#fb.group<TaskForm>({
      taskContent: this.#fb.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(128)]),
      isImportant: this.#fb.control(false),
    });
  }
}
