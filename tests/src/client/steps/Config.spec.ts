import { describe, expect, test } from 'vitest';
import home from '../../../fake/content/pages/home';
import { getPaths, getPathValue } from '../../../../src/data/steps/_2Config';

const objectPaths: Array<(string | number)[]> = [
  ['title'],
  ['publishedAt'],
  ['isPublished'],
  ['views'],
  ['description'],
  ['sections', 0, 'type_heroBanner', '_type'],
  ['sections', 0, 'type_heroBanner', 'title'],
  ['sections', 0, 'type_heroBanner', 'coverImage', 'src'],
  ['sections', 0, 'type_heroBanner', 'coverImage', 'alt'],
  ['sections', 0, 'type_heroBanner', 'link'],
  ['seo', 'title'],
  ['seo', 'description'],
  ['seo', 'noIndex'],
  ['seo', 'keywords', 0],
  ['seo', 'keywords', 1],
];
describe('Test', () => {
  test('getObjectPaths', () => {
    expect(getPaths(home)).toEqual(objectPaths);
    expect(getPaths([{ test: 'ok' }])).toEqual([[0, 'test']]);
    expect(getPaths({ _type: 'sectionTest' })).toEqual([
      ['type_sectionTest', '_type'],
    ]);
    expect(getPaths([])).toEqual([]);
  });
});

const objectValues = [
  'Home',
  '2024-01-02T23:00:00.000Z',
  true,
  236,
  'Lorem ipsum dolor sit amet lobortis tempus fusce.',
  'heroBanner',
  'Welcome!',
  '/uploads/pexels-vedanti-239975.jpg',
  'Alt text image',
  'content/blogs/article-1.md',
  'Site title',
  'Site description',
  false,
  'keyword 1',
  'keyword 2',
];
describe('getPathValue', () => {
  test('test', () => {
    expect(objectPaths.map((path) => getPathValue(home, path))).toEqual(
      objectValues
    );
    expect(getPathValue({ test: 'ok' }, ['test'])).toEqual('ok');
    expect(
      getPathValue(
        {
          test: {
            item: 'ok',
          },
        },
        ['test', 'item']
      )
    ).toEqual('ok');
  });
});
