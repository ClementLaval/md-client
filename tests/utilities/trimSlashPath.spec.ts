import { trimSlashPath } from '../../src/utilities/trimSlashPath';

describe('trimSlashPath', () => {
  test('should trim slash before and after', () => {
    expect(trimSlashPath('/content/articles/')).toBe('content/articles');
    expect(trimSlashPath('/content/articles')).toBe('content/articles');
    expect(trimSlashPath('content/articles/')).toBe('content/articles');
    expect(trimSlashPath('content/articles')).toBe('content/articles');
  });
});
