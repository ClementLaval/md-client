import { DataPath } from '../../types';

export function setObjectValue(
  obj: object,
  path: DataPath,
  value: any
): Record<string, any> {
  return path.reduce((acc: Record<string, any>, key, index) => {
    // Skip iteration for _type
    if (key.toString().startsWith('#')) {
      return acc;
    }

    // If key doesn't exist
    if (acc[key] === undefined) {
      if (typeof path?.[index + 1] === 'string') {
        acc[key] = {};
      }
      if (typeof path?.[index + 1] === 'number') {
        acc[key] = [];
      }
    }

    // Set value at last iteration
    if (index === path.length - 1) {
      acc[key] = value;
    }

    return acc[key];
  }, obj);
}
