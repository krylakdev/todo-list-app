import { DOCUMENT } from '@angular/common';
import { Injectable, WritableSignal, effect, inject, signal } from '@angular/core';

type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeSwitcherService {
  readonly #document: Document = inject(DOCUMENT);
  theme: WritableSignal<Theme> = signal<Theme>('light');

  constructor() {
    effect((): void => {
      this.#setTheme(this.theme());
    });
  }

  initializePreferredTheme(): void {
    this.#handlePrefersColorSchemeChange();

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) this.theme.set('dark');
  }

  toggleTheme(): void {
    this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
  }

  #setTheme(theme: Theme): void {
    const bodyElement: HTMLElement = this.#document.body;
    const bodyClassListArray: string[] = Array.from(bodyElement.classList);

    bodyElement.classList.remove(...bodyClassListArray);
    bodyElement.classList.add(`${theme}-mode`);
  }

  #handlePrefersColorSchemeChange(): void {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches }): void => {
      let theme: Theme = 'light';

      if (matches) theme = 'dark';

      this.theme.set(theme);
    });
  }
}
