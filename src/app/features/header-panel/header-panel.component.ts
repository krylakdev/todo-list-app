import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ThemeSwitcherComponent } from '@features/shared';

@Component({
  selector: 'app-header-panel',
  standalone: true,
  imports: [ThemeSwitcherComponent],
  templateUrl: './header-panel.component.html',
  styleUrl: './header-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderPanelComponent {}
