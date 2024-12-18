import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';

import { TaskForm } from '../models';
import { TaskFormAdapterService } from './task-form-adapter.service';

describe(TaskFormAdapterService.name, () => {
  let service: TaskFormAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskFormAdapterService],
    });

    service = TestBed.inject(TaskFormAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('createForm', () => {
    it('should create a form group with the expected controls', () => {
      const form: FormGroup<TaskForm> = service.createForm();

      expect(form.contains('taskContent')).toBe(true);
      expect(form.contains('isImportant')).toBe(true);

      expect(form.controls.taskContent.value).toBe('');
      expect(form.controls.isImportant.value).toBe(false);
    });

    it('should validate taskContent correctly', () => {
      const form: FormGroup<TaskForm> = service.createForm();
      const taskContentControl: FormControl<string> = form.controls.taskContent;

      expect(taskContentControl.valid).toBe(false);
      expect(taskContentControl.errors).toEqual({ required: true });

      taskContentControl.setValue('A');
      expect(taskContentControl.valid).toBe(false);
      expect(taskContentControl.errors).toEqual({ minlength: { requiredLength: 2, actualLength: 1 } });

      taskContentControl.setValue('Task content');
      expect(taskContentControl.valid).toBe(true);

      const longText: string = 'A'.repeat(129);
      taskContentControl.setValue(longText);
      expect(taskContentControl.valid).toBe(false);
      expect(taskContentControl.errors).toEqual({ maxlength: { requiredLength: 128, actualLength: 129 } });
    });

    it('should validate isImportant correctly', () => {
      const form: FormGroup<TaskForm> = service.createForm();
      const isImportantControl: FormControl<boolean> = form.controls.isImportant;

      expect(isImportantControl.value).toBe(false);

      isImportantControl.setValue(true);

      expect(isImportantControl.value).toBe(true);
    });
  });
});
