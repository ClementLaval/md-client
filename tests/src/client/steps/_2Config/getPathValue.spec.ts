import { describe, expect, test } from 'vitest';
import { getPathValue } from '../../../../../src/data/steps/_2Config/getPathValue';
import home from '../../../../fake/content/pages/home';
import { objectPaths } from './getPaths.spec';
import { DataConfig } from '../../../../../src';

export const objectValues: DataConfig['value'][] = [
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
  test('should return full home page values', () => {
    expect(objectPaths.map((path) => getPathValue(home, path))).toEqual(
      objectValues
    );
  });

  test('should return data from simple object', () => {
    const data = { title: 'Hello World', isPublished: true };

    expect(getPathValue(data, ['title'])).toEqual('Hello World');
    expect(getPathValue(data, ['isPublished'])).toEqual(true);
  });

  test('should return data from nested object', () => {
    const data = {
      image: {
        src: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'alt text image',
      },
    };

    expect(getPathValue(data, ['image', 'alt'])).toEqual('alt text image');
  });

  test('should return data from array', () => {
    const data = { keywords: ['keyword 1', 'keyword 2'] };

    expect(getPathValue(data, ['keywords', 0])).toEqual('keyword 1');
    expect(getPathValue(data, ['keywords', 1])).toEqual('keyword 2');
  });

  test('should return data from nested elements', () => {
    const data = {
      features: [
        {
          title: 'feature 1',
          image: {
            src: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'alt text image',
          },
        },
        {
          title: 'feature 2',
          labels: [
            {
              title: 'My Label',
              value: 'my-label',
              array: [true, false],
            },
          ],
        },
      ],
    };

    expect(getPathValue(data, ['features', 0, 'title'])).toEqual('feature 1');
    expect(getPathValue(data, ['features', 0, 'image', 'src'])).toEqual(
      'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    );
    expect(getPathValue(data, ['features', 0, 'image', 'alt'])).toEqual(
      'alt text image'
    );
    expect(getPathValue(data, ['features', 1, 'title'])).toEqual('feature 2');
    expect(getPathValue(data, ['features', 1, 'labels', 0, 'title'])).toEqual(
      'My Label'
    );
    expect(getPathValue(data, ['features', 1, 'labels', 0, 'value'])).toEqual(
      'my-label'
    );
    expect(
      getPathValue(data, ['features', 1, 'labels', 0, 'array', 0])
    ).toEqual(true);
    expect(
      getPathValue(data, ['features', 1, 'labels', 0, 'array', 1])
    ).toEqual(false);
  });

  test('should return data when section _type are detected in array', () => {
    const data = {
      sections: [
        {
          _type: 'heroBanner',
          title: 'Hello World',
        },
        {
          _type: 'twoColumns',
          image: {
            src: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'alt text image',
          },
        },
      ],
    };
    expect(
      getPathValue(data, ['sections', 0, 'type_heroBanner', '_type'])
    ).toEqual('heroBanner');
    expect(
      getPathValue(data, ['sections', 0, 'type_heroBanner', 'title'])
    ).toEqual('Hello World');
    expect(
      getPathValue(data, ['sections', 1, 'type_twoColumns', '_type'])
    ).toEqual('twoColumns');
    expect(
      getPathValue(data, ['sections', 1, 'type_twoColumns', 'image', 'src'])
    ).toEqual(
      'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    );
    expect(
      getPathValue(data, ['sections', 1, 'type_twoColumns', 'image', 'alt'])
    ).toEqual('alt text image');
  });
});
