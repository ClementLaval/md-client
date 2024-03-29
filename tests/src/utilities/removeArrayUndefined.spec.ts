import { removeArrayUndefined } from '../../../src/utilities/removeArrayUndefined';
import { describe, expect, test } from 'vitest';

describe('removeArrayUndefined', () => {
  const array = ['test1', 32, undefined, 'test2', undefined];

  test('Should remove all undefined in array', () => {
    const result = removeArrayUndefined(array);
    expect(result).toEqual(['test1', 32, 'test2']);
  });
});
