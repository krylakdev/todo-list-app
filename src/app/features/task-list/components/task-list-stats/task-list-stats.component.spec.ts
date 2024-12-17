import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListStatsComponent } from './task-list-stats.component';

describe('TaskListStatsComponent', () => {
  let component: TaskListStatsComponent;
  let fixture: ComponentFixture<TaskListStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListStatsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskListStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
