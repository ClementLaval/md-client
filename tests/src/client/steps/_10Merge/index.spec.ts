import { describe, expect, test } from 'vitest';
import { DataConfig } from '../../../../../src';
import { StringField } from '../../../../../src/fields/string';
import { _10Merge } from '../../../../../src/data/steps/_10Merge';
import { _2Result } from '../_2Config/index.spec';
import home from '../../../../fake/content/pages/home';

describe('_10Merge', () => {
  test('should merge whole data of home page', () => {
    expect(_10Merge(_2Result)).toEqual({
      _slug: 'home',
      _type: 'page',
      ...home,
    });
  });

  test('should merge primitive value', () => {
    const data: DataConfig[] = [
      {
        path: ['#page', '_slug'],
        value: 'home',
        field: new StringField({
          name: '_slug',
          type: 'string',
        }),
      },
    ];
    const result = { _slug: 'home' };

    expect(_10Merge(data)).toEqual(result);
  });

  test('should merge object children', () => {
    const data: DataConfig[] = [
      {
        path: ['#page', 'image', 'src'],
        value:
          'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

        field: new StringField({
          name: 'src',
          type: 'string',
        }),
      },
      {
        path: ['#page', 'image', 'alt'],
        value: 'alt text image',
        field: new StringField({
          name: 'alt',
          type: 'string',
        }),
      },
    ];
    const result = {
      image: {
        src: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'alt text image',
      },
    };

    expect(_10Merge(data)).toEqual(result);
  });

  test('should merge array children', () => {
    const data: DataConfig[] = [
      {
        path: ['#page', 'keywords', 0],
        value: 'keyword 1',
        field: new StringField({
          name: 'keyword',
          type: 'string',
        }),
      },
      {
        path: ['#page', 'keywords', 1],
        value: 'keyword 2',
        field: new StringField({
          name: 'keyword',
          type: 'string',
        }),
      },
    ];
    const result = {
      keywords: ['keyword 1', 'keyword 2'],
    };

    expect(_10Merge(data)).toEqual(result);
  });

  test('should merge nested values', () => {
    const data: DataConfig[] = [
      {
        path: ['#page', 'seo', 'title'],
        value: 'Site title',
        field: new StringField({
          name: 'title',
          type: 'string',
        }),
      },
      {
        path: ['#page', 'seo', 'image', 'src'],
        value:
          'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        field: new StringField({
          name: 'src',
          type: 'string',
        }),
      },
      {
        path: ['#page', 'seo', 'keywords', 0],
        value: 'keyword 1',
        field: new StringField({
          name: 'keyword',
          type: 'string',
        }),
      },
    ];
    const result = {
      seo: {
        title: 'Site title',
        image: {
          src: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        keywords: ['keyword 1'],
      },
    };

    expect(_10Merge(data)).toEqual(result);
  });
});
