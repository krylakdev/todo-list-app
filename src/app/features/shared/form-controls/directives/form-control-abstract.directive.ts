import { Directive, Injector, OnInit, inject } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  NgControl,
} from '@angular/forms';

@Directive()
export class FormControlAbstractDirective implements OnInit, ControlValueAccessor {
  readonly #injector = inject(Injector);

  formControl!: FormControl<string>;
  value!: string;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: (value: string) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: () => void = () => {};

  public ngOnInit(): void {
    const ngControl: NgControl = this.#injector.get(NgControl);

    if (ngControl instanceof FormControlName) {
      this.formControl = this.#injector.get(FormGroupDirective).getControl(ngControl);
    } else {
      this.formControl = (ngControl as FormControlDirective).form as FormControl;
    }
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
