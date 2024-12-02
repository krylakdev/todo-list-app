import { render, screen } from '@testing-library/angular';

import { AppComponent } from './app.component';

describe(AppComponent.name, () => {
  it('should create the app', async () => {
    const { fixture } = await render(AppComponent);
    const app: AppComponent = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'todo-list-app' title`, async () => {
    const { fixture } = await render(AppComponent);
    const app: AppComponent = fixture.componentInstance;
    expect(app.title).toEqual('todo-list-app');
  });

  it('should render title', async () => {
    await render(AppComponent);
    const heading: HTMLElement = screen.getByRole('heading');
    expect(heading).toHaveTextContent('Hello, todo-list-app');
  });
});
