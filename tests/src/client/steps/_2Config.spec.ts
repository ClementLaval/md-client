import { describe, expect, test } from 'vitest';
import { _2Config } from '../../../../src/data/steps/_2Config';
import { DataConfig } from '../../../../src';
import { _1MetaResult } from './_1Meta.spec';
import { Collection } from '../../../../src/collections';
import { page } from '../../../fake/cms/collections/page';
import { StringField } from '../../../../src/fields/string';
import { DateField } from '../../../../src/fields/date';
import { BooleanField } from '../../../../src/fields/boolean';
import { NumberField } from '../../../../src/fields/number';
import { RichtextField } from '../../../../src/fields/richtext';
import { ReferenceField } from '../../../../src/fields/reference';

export const _2Result: DataConfig[] = [
  {
    path: ['_slug'],
    value: 'home',
    field: new StringField({
      name: '_slug',
      type: 'string',
      required: true,
    }),
  },
  {
    path: ['_type'],
    value: 'page',
    field: new StringField({
      name: '_type',
      type: 'string',
      required: true,
    }),
  },
  {
    path: ['title'],
    value: 'Home',
    field: new StringField({
      name: 'title',
      type: 'string',
    }),
  },
  {
    path: ['publishedAt'],
    value: '2024-01-02T23:00:00.000Z',
    field: new DateField({
      name: 'publishedAt',
      type: 'date',
    }),
  },
  {
    path: ['isPublished'],
    value: true,
    field: new BooleanField({
      name: 'isPublished',
      type: 'boolean',
      default: () => true,
    }),
  },
  {
    path: ['views'],
    value: 236,
    field: new NumberField({
      name: 'views',
      type: 'number',
    }),
  },
  {
    path: ['description'],
    value: 'Lorem ipsum dolor sit amet lobortis tempus fusce.',
    field: new RichtextField({
      name: 'description',
      type: 'richtext',
    }),
  },
  {
    path: ['sections', 0, 'type_heroBanner', '_type'],
    value: 'heroBanner',
    field: new StringField({
      name: '_type',
      type: 'string',
    }),
  },
  {
    path: ['sections', 0, 'type_heroBanner', 'title'],
    value: 'Welcome!',
    field: new StringField({
      name: 'title',
      type: 'string',
    }),
  },
  {
    path: ['sections', 0, 'type_heroBanner', 'coverImage', 'src'],
    value: '/uploads/pexels-vedanti-239975.jpg',
    field: new StringField({
      name: 'src',
      type: 'string',
    }),
  },
  {
    path: ['sections', 0, 'type_heroBanner', 'coverImage', 'alt'],
    value: 'Alt text image',
    field: new StringField({
      name: 'alt',
      type: 'string',
    }),
  },
  {
    path: ['sections', 0, 'type_heroBanner', 'link'],
    value: 'content/blogs/article-1.md',
    field: new ReferenceField({
      name: 'link',
      type: 'reference',
      to: ['article'],
    }),
  },
  {
    path: ['seo', 'title'],
    value: 'Site title',
    field: new StringField({
      name: 'title',
      type: 'string',
      required: true,
    }),
  },
  {
    path: ['seo', 'description'],
    value: 'Site description',
    field: new StringField({
      name: 'description',
      type: 'string',
    }),
  },
  {
    path: ['seo', 'noIndex'],
    value: false,
    field: new BooleanField({
      name: 'noIndex',
      type: 'boolean',
      default: () => false,
    }),
  },
  {
    path: ['seo', 'keywords', 0],
    value: 'keyword 1',
    field: new StringField({
      name: 'keyword',
      type: 'string',
    }),
  },
  {
    path: ['seo', 'keywords', 1],
    value: 'keyword 2',
    field: new StringField({
      name: 'keyword',
      type: 'string',
    }),
  },
];
describe('_2Config', () => {
  test.skip('should retrieve config for each field', () => {
    expect(_2Config(_1MetaResult, new Collection(page))).toEqual(_2Result);
  });
});
