import { DataPath } from '../../types';

/**
 * Retrieve value from object with a specific path
 */
export function getPathValue(obj: Record<string, any>, path: DataPath): any {
  return path.reduce((acc, key) => {
    // Skip and continue
    if (key.toString().startsWith('#')) {
      return acc;
    }

    return acc[key];
  }, obj);
}
