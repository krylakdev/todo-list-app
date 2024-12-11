import { TruncatePipe } from './truncate.pipe';

describe(TruncatePipe.name, () => {
  const pipe = new TruncatePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should not truncate if text is shorter than maxLength', () => {
    expect(pipe.transform('Short text')).toBe('Short text');
  });

  it('should truncate text to the specified length with default suffix', () => {
    expect(pipe.transform('This is a long text', 10)).toBe('This is a ...');
  });

  it('should truncate text and add custom suffix', () => {
    expect(pipe.transform('This is a long text', 10, '-')).toBe('This is a -');
  });

  it('should handle empty or null values', () => {
    expect(pipe.transform('', 10)).toBe('');
    expect(pipe.transform(null as unknown as string, 10)).toBe(null as unknown as string);
  });

  it('should handle edge cases like maxLength of 0', () => {
    expect(pipe.transform('Edge case', 0)).toBe('...');
  });
});
