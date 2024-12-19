import { ValidationErrors } from '@angular/forms';

import { formControlErrorMessages } from '../constants';
import { FormControlErrorPipe } from './form-control-error.pipe';

describe(FormControlErrorPipe.name, () => {
  let pipe: FormControlErrorPipe;

  beforeEach(() => {
    pipe = new FormControlErrorPipe();
  });

  it('should return an empty string if errors are null', () => {
    const result = pipe.transform(null);
    expect(result).toBe('');
  });

  it('should return the correct error message for a known key with boolean value', () => {
    const errors: ValidationErrors = { required: true };
    const result = pipe.transform(errors);
    expect(result).toBe(formControlErrorMessages['required']);
  });

  it('should return the correct error message for a known key with string value', () => {
    const errors: ValidationErrors = { customError: 'Custom error message' };
    const result = pipe.transform(errors);
    expect(result).toBe('Custom error message');
  });

  it('should return the unknown error message for an unknown key with boolean value', () => {
    const errors: ValidationErrors = { unknownKey: true };
    const result = pipe.transform(errors);
    expect(result).toBe(formControlErrorMessages['unknown']);
  });

  it('should join multiple error messages with a dot and a space', () => {
    const errors: ValidationErrors = {
      required: true,
      maxLength: true,
      customError: 'Custom message',
    };
    const result = pipe.transform(errors);
    expect(result).toBe(
      `${formControlErrorMessages['required']}. ${formControlErrorMessages['maxLength']}. Custom message`
    );
  });

  it('should return the unknown error message for unknown keys without specific value', () => {
    const errors: ValidationErrors = { anotherUnknownKey: {} };
    const result = pipe.transform(errors);
    expect(result).toBe(formControlErrorMessages['unknown']);
  });
});
