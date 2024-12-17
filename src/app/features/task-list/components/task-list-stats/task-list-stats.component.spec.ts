import { WritableSignal, signal } from '@angular/core';
import { render, screen } from '@testing-library/angular';

import { TasksStore } from '@core/stores';

import { TaskListStatsComponent } from './task-list-stats.component';

class MockTasksStore {
  tasksCountAll: WritableSignal<number> = signal(10);
  tasksCountIsImportant: WritableSignal<number> = signal(3);
  tasksCountUncompleted: WritableSignal<number> = signal(9);
  tasksCountCompleted: WritableSignal<number> = signal(1);
}

describe(TaskListStatsComponent.name, () => {
  beforeEach(async () => {
    await render(TaskListStatsComponent, {
      providers: [{ provide: TasksStore, useClass: MockTasksStore }],
    });
  });

  it('should display the total tasks count', () => {
    const totalTasksElement = screen.getByAltText('icon of total tasks count');
    expect(totalTasksElement).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('should display the uncompleted tasks count', () => {
    const uncompletedTasksElement = screen.getByAltText('icon of uncompleted tasks count');
    expect(uncompletedTasksElement).toBeInTheDocument();
    expect(screen.getByText('9')).toBeInTheDocument();
  });

  it('should display the completed tasks count', () => {
    const completedTasksElement = screen.getByAltText('icon of completed tasks count');
    expect(completedTasksElement).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('should display the important tasks count', () => {
    const importantTasksElement = screen.getByAltText('icon of important tasks count');
    expect(importantTasksElement).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});
