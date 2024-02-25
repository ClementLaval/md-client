import { toPascalCase } from '../../src/utilities/toPascalCase';

describe('toPascaleCase', () => {
  test('should transform into PascalCase format', () => {
    expect(toPascalCase('my-first-article')).toBe('MyFirstArticle');
  });
});
