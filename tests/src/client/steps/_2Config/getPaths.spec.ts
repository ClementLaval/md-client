import { describe, expect, test } from 'vitest';
import home from '../../../../fake/content/pages/home';
import { getPaths } from '../../../../../src/data/steps/_2Config/getPaths';
import { DataConfig } from '../../../../../src';

export const objectPaths: DataConfig['path'][] = [
  ['title'],
  ['publishedAt'],
  ['isPublished'],
  ['views'],
  ['description'],
  ['sections', 0, '#heroBanner', '_type'],
  ['sections', 0, '#heroBanner', 'title'],
  ['sections', 0, '#heroBanner', 'coverImage', 'src'],
  ['sections', 0, '#heroBanner', 'coverImage', 'alt'],
  ['sections', 0, '#heroBanner', 'link'],
  ['seo', 'title'],
  ['seo', 'description'],
  ['seo', 'noIndex'],
  ['seo', 'keywords', 0],
  ['seo', 'keywords', 1],
];
describe('getPaths', () => {
  test('should return full home page paths', () => {
    expect(getPaths(home)).toEqual(objectPaths);
  });

  test('should return number for array', () => {
    const data = [{ title: 'Hello World' }, { isPublished: true }];
    const result = [
      [0, 'title'],
      [1, 'isPublished'],
    ];
    expect(getPaths(data)).toEqual(result);
  });

  test('should return empty array for empty data', () => {
    const object = {};
    const array: [] = [];
    const result: [] = [];

    expect(getPaths(object)).toEqual(result);
    expect(getPaths(array)).toEqual(result);
    expect(getPaths(undefined)).toEqual(result);
  });

  test('should detect _type field when using array of sections templates', () => {
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

    const result = [
      ['sections', 0, '#heroBanner', '_type'],
      ['sections', 0, '#heroBanner', 'title'],
      ['sections', 1, '#twoColumns', '_type'],
      ['sections', 1, '#twoColumns', 'image', 'src'],
      ['sections', 1, '#twoColumns', 'image', 'alt'],
    ];

    expect(getPaths(data)).toEqual(result);
  });

  test('should pass multiple nested layers', () => {
    const data = {
      title: 'Hello World',
      links: [
        {
          title: 'My Article',
          image: {
            src: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'alt text image',
          },
          document: {
            _slug: 'my-article',
            isPublished: true,
            image: {
              src: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              alt: 'alt text image',
            },
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
            keywords: ['keyword 1', 'keyword 2'],
          },
        },
      ],
    };
    const result = [
      ['title'],
      ['links', 0, 'title'],
      ['links', 0, 'image', 'src'],
      ['links', 0, 'image', 'alt'],
      ['links', 0, 'document', '_slug'],
      ['links', 0, 'document', 'isPublished'],
      ['links', 0, 'document', 'image', 'src'],
      ['links', 0, 'document', 'image', 'alt'],
      ['links', 0, 'document', 'sections', 0, '#heroBanner', '_type'],
      ['links', 0, 'document', 'sections', 0, '#heroBanner', 'title'],
      ['links', 0, 'document', 'sections', 1, '#twoColumns', '_type'],
      ['links', 0, 'document', 'sections', 1, '#twoColumns', 'image', 'src'],
      ['links', 0, 'document', 'sections', 1, '#twoColumns', 'image', 'alt'],
      ['links', 0, 'document', 'keywords', 0],
      ['links', 0, 'document', 'keywords', 1],
    ];

    expect(getPaths(data)).toEqual(result);
  });

  test('should detect richtext type and dont go further in object structure', () => {
    const data = {
      body: {
        type: 'root',
        children: [],
        position: { start: {}, end: {} },
      },
    };
    const result = [['body']];

    expect(getPaths(data)).toEqual(result);
  });
});
