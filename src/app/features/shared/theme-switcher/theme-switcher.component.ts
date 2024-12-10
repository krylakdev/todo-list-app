import { ChangeDetectionStrategy, Component, Signal, computed, inject } from '@angular/core';

import { ThemeSwitcherService } from '@core/services';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcherComponent {
  readonly #themeSwitcher = inject(ThemeSwitcherService);

  isChecked: Signal<boolean> = computed(() => this.#themeSwitcher.theme() === 'dark');

  handleToggleTheme(): void {
    this.#themeSwitcher.toggleTheme();
  }
}
