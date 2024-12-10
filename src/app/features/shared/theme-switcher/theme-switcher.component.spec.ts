import { WritableSignal, signal } from '@angular/core';
import { fireEvent, render, screen } from '@testing-library/angular';

import { ThemeSwitcherService } from '@core/services';

import { ThemeSwitcherComponent } from './theme-switcher.component';

describe(ThemeSwitcherComponent.name, () => {
  let mockThemeSwitcherService: Partial<ThemeSwitcherService>;

  beforeEach(() => {
    const themeSignal: WritableSignal<'light' | 'dark'> = signal('light');

    mockThemeSwitcherService = {
      theme: themeSignal,
      toggleTheme: jest.fn(),
    };
  });

  it('should render the component', async () => {
    const { fixture } = await render(ThemeSwitcherComponent);

    const component: ThemeSwitcherComponent = fixture.componentInstance;

    expect(component).toBeTruthy();
  });

  it('should correctly bind isChecked signal for light theme', async () => {
    mockThemeSwitcherService.theme!.set('light');

    await render(ThemeSwitcherComponent, {
      providers: [{ provide: ThemeSwitcherService, useValue: mockThemeSwitcherService }],
    });

    const checkbox: HTMLInputElement = screen.getByRole('checkbox');

    expect(checkbox.checked).toBe(false);
  });

  it('should correctly bind isChecked signal for dark theme', async () => {
    mockThemeSwitcherService.theme!.set('dark');

    await render(ThemeSwitcherComponent, {
      providers: [{ provide: ThemeSwitcherService, useValue: mockThemeSwitcherService }],
    });

    const checkbox: HTMLInputElement = screen.getByRole('checkbox');

    expect(checkbox.checked).toBe(true);
  });

  it('should call toggleTheme on checkbox change', async () => {
    await render(ThemeSwitcherComponent, {
      providers: [{ provide: ThemeSwitcherService, useValue: mockThemeSwitcherService }],
    });

    const checkbox: HTMLInputElement = screen.getByRole('checkbox');

    fireEvent.change(checkbox);

    expect(mockThemeSwitcherService.toggleTheme).toHaveBeenCalledTimes(1);
  });
});
