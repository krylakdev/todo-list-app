import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericTableComponent {}
