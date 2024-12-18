import { Component, OnInit, inject } from '@angular/core';

import { ThemeSwitcherService } from '@core/services';
import { HeaderPanelComponent } from '@features/header-panel';
import { TaskFormComponent } from '@features/task-form';
import { TaskListComponent } from '@features/task-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListComponent, HeaderPanelComponent, TaskFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  #themeSwitcher = inject(ThemeSwitcherService);

  ngOnInit(): void {
    this.#themeSwitcher.initializePreferredTheme();
  }
}
