import { slugify } from '../../src/utilities/slugify';

describe('slugify', () => {
  test('should transform into slug format', () => {
    expect(slugify('my first article')).toBe('my-first-article');
    expect(slugify("c'est bientôt l'été")).toBe('cest-bientot-lete');
  });
});
