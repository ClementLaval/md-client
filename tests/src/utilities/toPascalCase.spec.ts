import { toPascalCase } from '../../../src/utilities/toPascalCase';
import { describe, expect, test } from 'vitest';

describe('toPascaleCase', () => {
  test('should transform into PascalCase format', () => {
    expect(toPascalCase('my-first-article')).toBe('MyFirstArticle');
  });
});
