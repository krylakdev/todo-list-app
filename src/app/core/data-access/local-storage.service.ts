import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setItem<T>(key: string, value: T): void {
    try {
      const serializedValue: string = JSON.stringify(value);

      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error when saving to LocalStorage:', error);
    }
  }

  getItem<T>(key: string): T | null {
    try {
      const item: string | null = localStorage.getItem(key);

      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error while reading from LocalStorage:', error);

      return null;
    }
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
