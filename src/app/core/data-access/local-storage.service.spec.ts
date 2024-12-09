import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

interface TestObject {
  name: string;
  age: number;
}

describe(LocalStorageService.name, () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);

    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save an item in LocalStorage', () => {
    const key = 'testKey';
    const value: TestObject = { name: 'Test', age: 25 };

    service.setItem(key, value);
    const storedValue: string | null = localStorage.getItem(key);

    expect(storedValue).toBe(JSON.stringify(value));
  });

  it('should retrieve an item from LocalStorage', () => {
    const key = 'testKey';
    const value: TestObject = { name: 'Test', age: 25 };

    localStorage.setItem(key, JSON.stringify(value));
    const result: TestObject | null = service.getItem<TestObject>(key);

    expect(result).toEqual(value);
  });

  it('should return null if the key does not exist', () => {
    const result: TestObject | null = service.getItem<TestObject>('nonExistingKey');

    expect(result).toBeNull();
  });

  it('should remove an item from LocalStorage', () => {
    const key = 'testKey';
    const value: TestObject = { name: 'Test', age: 25 };

    localStorage.setItem(key, JSON.stringify(value));
    service.removeItem(key);

    const result: string | null = localStorage.getItem(key);

    expect(result).toBeNull();
  });

  it('should clear all data from LocalStorage', () => {
    localStorage.setItem('key1', 'value1');
    localStorage.setItem('key2', 'value2');

    service.clear();

    expect(localStorage.length).toBe(0);
  });

  it('should handle invalid JSON data during retrieval', () => {
    const key = 'invalidJSON';
    localStorage.setItem(key, '{invalidJson}');

    const result: string | null = service.getItem<string>(key);

    expect(result).toBeNull();
  });
});
