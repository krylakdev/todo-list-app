import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

import { formControlErrorMessages } from '../constants';

@Pipe({
  name: 'formControlError',
  standalone: true,
})
export class FormControlErrorPipe implements PipeTransform {
  // transform(errors: ValidationErrors | null): unknown {
  //   return errors
  //     ? Object.entries(errors)
  //         .map(([key, value]) =>
  //           typeof value === 'string' && value.length > 0
  //             ? value
  //             : value === true && this.errorMessages[key]
  //               ? this.errorMessages[key]
  //               : this.errorMessages['unknown']
  //         )
  //         .join('. ')
  //     : '';
  // }

  transform(errors: ValidationErrors | null): string {
    console.log(
      errors
        ? Object.entries(errors)
            .map(([key, value]) =>
              typeof value === 'string' && value.length > 0
                ? value
                : value === true && formControlErrorMessages[key]
                  ? formControlErrorMessages[key]
                  : formControlErrorMessages['unknown']
            )
            .join('. ')
        : ''
    );
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
