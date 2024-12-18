import { TestBed } from '@angular/core/testing';

import { TaskFormAdapterService } from 'src/app/features/task-form/services/task-form-adapter.service';

describe('TaskFormAdapterService', () => {
  let service: TaskFormAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskFormAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
