import { _1Meta } from '../../../../src/data/steps/_1Meta';
import { describe, expect, test } from 'vitest';
import { Collection } from '../../../../src/collections';
import home from '../../../fake/content/pages/home';
import { page } from '../../../fake/cms/collections/page';

export const _1MetaResult = {
  _slug: 'home',
  _type: 'page',
  ...home,
};
describe('_1Meta', () => {
  test('should add meta data', () => {
    expect(_1Meta(home, 'content/pages/home.ts', new Collection(page))).toEqual(
      _1MetaResult
    );
  });
});
