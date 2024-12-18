import { ChangeDetectionStrategy, Component, InputSignal, forwardRef, input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

import { FormControlAbstractDirective } from '../directives';

@Component({
  selector: 'app-text-control',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextControlComponent),
      multi: true,
    },
  ],
  templateUrl: './text-control.component.html',
  styleUrl: './text-control.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextControlComponent extends FormControlAbstractDirective {
  id: InputSignal<string> = input.required<string>();
  label: InputSignal<string> = input.required<string>();
  placeholder: InputSignal<string> = input<string>('');
}
