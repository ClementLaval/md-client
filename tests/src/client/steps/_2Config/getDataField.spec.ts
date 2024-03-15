import { describe, expect, test } from 'vitest';
import { Collection } from '../../../../../src/collections';
import { page } from '../../../../fake/cms/collections/page';
import { StringField } from '../../../../../src/fields/string';
import { getDataField } from '../../../../../src/data/steps/_2Config/getDataField';
import { DataConfig } from '../../../../../src';
import { DateField } from '../../../../../src/fields/date';
import { BooleanField } from '../../../../../src/fields/boolean';
import { NumberField } from '../../../../../src/fields/number';
import { RichtextField } from '../../../../../src/fields/richtext';
import { ReferenceField } from '../../../../../src/fields/reference';
import { objectPaths } from './getPaths.spec';

export const objectFields: DataConfig['field'][] = [
  new StringField({
    name: 'title',
    type: 'string',
  }),
  new DateField({
    name: 'publishedAt',
    type: 'date',
  }),
  // new BooleanField({
  //   name: 'isPublished',
  //   type: 'boolean',
  //   default: () => true,
  // }),
  new NumberField({
    name: 'views',
    type: 'number',
  }),
  new RichtextField({
    name: 'description',
    type: 'richtext',
  }),
  //--- HERO BANNER ---//
  new StringField({
    name: '_type',
    type: 'string',
  }),
  new StringField({
    name: 'title',
    type: 'string',
  }),
  new StringField({
    name: 'src',
    type: 'string',
  }),
  new StringField({
    name: 'alt',
    type: 'string',
  }),
  new ReferenceField({
    name: 'link',
    type: 'reference',
    to: ['article'],
  }),
  //--- END: HERO BANNER ---//
  new StringField({
    name: 'title',
    type: 'string',
    required: true,
  }),
  new StringField({
    name: 'description',
    type: 'string',
  }),
  new BooleanField({
    name: 'noIndex',
    type: 'boolean',
    default: () => false,
  }),
  new StringField({
    name: 'keyword',
    type: 'string',
  }),
  new StringField({
    name: 'keyword',
    type: 'string',
  }),
];

describe('getDataField', () => {
  test('should return full fields config from home page', () => {
    const document = new Collection(page);
    const result = objectPaths.map((path) =>
      getDataField(document, 'content/pages/home', path)
    );
    const expected = objectFields;
    expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
  });

  test('should return field config for simple type as string, boolean, date', () => {
    const document = new Collection(page);
    const path = ['title'];
    const result = new StringField({
      name: 'title',
      type: 'string',
    });

    expect(getDataField(document, 'content/pages/home', path)).toEqual(result);
  });
});
