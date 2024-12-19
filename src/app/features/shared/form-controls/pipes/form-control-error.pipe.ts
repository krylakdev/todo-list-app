import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

import { formControlErrorMessages } from '../constants';

@Pipe({
  name: 'formControlError',
  standalone: true,
})
export class FormControlErrorPipe implements PipeTransform {
  transform(errors: ValidationErrors | null): string {
    return errors
      ? Object.entries(errors)
          .map(([key, value]) =>
            typeof value === 'string' && value.length > 0
              ? value
              : value === true && formControlErrorMessages[key]
                ? formControlErrorMessages[key]
                : formControlErrorMessages['unknown']
          )
          .join('. ')
      : '';
  }
}
