import { FormControl } from '@angular/forms';

export interface TaskForm {
  name: FormControl<string>;
  isImportant: FormControl<boolean>;
}

export interface TaskFormValues {
  name: string;
  isImportant: boolean;
}
