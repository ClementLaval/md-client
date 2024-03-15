import { describe, expect, test } from 'vitest';
import { Collection } from '../../../../../src/collections';
import { page } from '../../../../fake/cms/collections/page';
import { _4Default } from '../../../../../src/data/steps/_4Default';
import { _2Result } from '../_2Config/index.spec';
import { BooleanField } from '../../../../../src/fields/boolean';

export const _4Result = [
  ..._2Result,
  {
    path: ['#page', 'isPublished'],
    value: true,
    field: new BooleanField({
      name: 'isPublished',
      type: 'boolean',
      default: () => true,
    }),
  },
];
describe('_4Default', () => {
  test.skip('should return the default value if not set', () => {
    const document = new Collection(page);

    expect(_4Default(_2Result, document)).toEqual(_4Result);
  });
});
