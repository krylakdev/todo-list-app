import { FormControl } from '@angular/forms';

export interface TaskForm {
  taskContent: FormControl<string>;
  isImportant: FormControl<boolean>;
}
