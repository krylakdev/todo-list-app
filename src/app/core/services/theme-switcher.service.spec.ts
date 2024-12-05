import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { ThemeSwitcherService } from './theme-switcher.service';

describe(ThemeSwitcherService.name, () => {
  let service: ThemeSwitcherService;
  let mockDocument: Document;

  beforeEach(() => {
    mockDocument = document.implementation.createHTMLDocument('test');

    TestBed.configureTestingModule({
      providers: [
        ThemeSwitcherService,
        {
          provide: DOCUMENT,
          useValue: mockDocument,
        },
      ],
    });
    service = TestBed.inject(ThemeSwitcherService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('initializePreferredTheme', () => {
    it('should set theme to "dark" if user prefers dark mode', () => {
      const matchMediaMock = jest.spyOn(window, 'matchMedia').mockReturnValue({
        matches: true,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      } as unknown as MediaQueryList);

      service.initializePreferredTheme();

      expect(service.theme()).toBe('dark');
      expect(matchMediaMock).toHaveBeenCalledWith('(prefers-color-scheme: dark)');
    });

    it('should set theme to "light" if user prefers light mode', () => {
      jest.spyOn(window, 'matchMedia').mockReturnValue({
        matches: false,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      } as unknown as MediaQueryList);

      service.initializePreferredTheme();

      expect(service.theme()).toBe('light');
    });
  });
});
