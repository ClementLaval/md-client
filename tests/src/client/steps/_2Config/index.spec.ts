import { describe, expect, test } from 'vitest';
import { _2Config } from '../../../../../src/data/steps/_2Config';
import { DataConfig } from '../../../../../src';
import { Collection } from '../../../../../src/collections';
import { page } from '../../../../fake/cms/collections/page';
import { StringField } from '../../../../../src/fields/string';
import { DateField } from '../../../../../src/fields/date';
import { BooleanField } from '../../../../../src/fields/boolean';
import { NumberField } from '../../../../../src/fields/number';
import { RichtextField } from '../../../../../src/fields/richtext';
import { ReferenceField } from '../../../../../src/fields/reference';
import { _1MetaResult } from '../_1Meta/index.spec';

export const _2Result: DataConfig[] = [
  {
    path: ['#page', '_slug'],
    value: 'home',
    field: new StringField({
      name: '_slug',
      type: 'string',
      required: true,
    }),
  },
  {
    path: ['#page', '_type'],
    value: 'page',
    field: new StringField({
      name: '_type',
      type: 'string',
      required: true,
    }),
  },
  {
    path: ['#page', 'title'],
    value: 'Home',
    field: new StringField({
      name: 'title',
      type: 'string',
    }),
  },
  {
    path: ['#page', 'publishedAt'],
    value: '2024-01-02T23:00:00.000Z',
    field: new DateField({
      name: 'publishedAt',
      type: 'date',
    }),
  },
  {
    path: ['#page', 'isPublished'],
    value: true,
    field: new BooleanField({
      name: 'isPublished',
      type: 'boolean',
      default: () => true,
    }),
  },
  {
    path: ['#page', 'views'],
    value: 236,
    field: new NumberField({
      name: 'views',
      type: 'number',
    }),
  },
  {
    path: ['#page', 'description'],
    value: 'Lorem ipsum dolor sit amet lobortis tempus fusce.',
    field: new RichtextField({
      name: 'description',
      type: 'richtext',
    }),
  },
  {
    path: ['#page', 'sections', 0, '#heroBanner', '_type'],
    value: 'heroBanner',
    field: new StringField({
      name: '_type',
      type: 'string',
    }),
  },
  {
    path: ['#page', 'sections', 0, '#heroBanner', 'title'],
    value: 'Welcome!',
    field: new StringField({
      name: 'title',
      type: 'string',
    }),
  },
  {
    path: ['#page', 'sections', 0, '#heroBanner', 'coverImage', 'src'],
    value: '/uploads/pexels-vedanti-239975.jpg',
    field: new StringField({
      name: 'src',
      type: 'string',
    }),
  },
  {
    path: ['#page', 'sections', 0, '#heroBanner', 'coverImage', 'alt'],
    value: 'Alt text image',
    field: new StringField({
      name: 'alt',
      type: 'string',
    }),
  },
  {
    path: ['#page', 'sections', 0, '#heroBanner', 'link'],
    value: 'content/blogs/article-1.md',
    field: new ReferenceField({
      name: 'link',
      type: 'reference',
      to: ['article'],
    }),
  },
  {
    path: ['#page', 'seo', 'title'],
    value: 'Site title',
    field: new StringField({
      name: 'title',
      type: 'string',
      required: true,
    }),
  },
  {
    path: ['#page', 'seo', 'description'],
    value: 'Site description',
    field: new StringField({
      name: 'description',
      type: 'string',
    }),
  },
  {
    path: ['#page', 'seo', 'noIndex'],
    value: false,
    field: new BooleanField({
      name: 'noIndex',
      type: 'boolean',
      default: () => false,
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
  {
    path: ['#page', 'seo', 'keywords', 1],
    value: 'keyword 2',
    field: new StringField({
      name: 'keyword',
      type: 'string',
    }),
  },
];
describe('_2Config', () => {
  test('should retrieve config for each field', () => {
    const result = _2Config(_1MetaResult, new Collection(page));
    expect(JSON.stringify(result)).toEqual(JSON.stringify(_2Result));
  });
});
