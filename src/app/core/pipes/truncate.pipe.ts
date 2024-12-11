import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true,
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, maxLength = 20, suffix = '...'): string {
    if (!value || value.length <= maxLength) return value;

    return `${value.slice(0, maxLength)}${suffix}`;
  }
}
