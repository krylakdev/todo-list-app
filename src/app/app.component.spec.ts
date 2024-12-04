import { render } from '@testing-library/angular';

import { AppComponent } from './app.component';

describe(AppComponent.name, () => {
  it('should create the app', async () => {
    const { fixture } = await render(AppComponent);
    const app: AppComponent = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
