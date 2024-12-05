import { Component, OnInit, inject } from '@angular/core';

import { ThemeSwitcherService } from '@core/services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  #themeSwitcher = inject(ThemeSwitcherService);

  ngOnInit(): void {
    this.#themeSwitcher.initializePreferredTheme();
  }
}
