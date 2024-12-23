import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { ColumnConfig } from './models';

@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericTableComponent<T extends { id: string }> {
  columnsConfig = input.required<ColumnConfig<T>[]>();
  rowsData = input.required<T[]>();

  rowClick = output<string>();
}
