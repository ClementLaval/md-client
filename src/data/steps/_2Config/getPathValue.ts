import { DataPath } from '../../types';

/**
 * Retrieve value from object with a specific path
 */
export function getPathValue(obj: Record<string, any>, path: DataPath): any {
  return path.reduce((acc, key) => {
    if (key.toString().startsWith('type_')) {
      return acc;
    }

    return acc[key];
  }, obj);
}
