import { DataPath } from '../../types';
import { isRichtextData } from '../../../fields/richtext/isRichtextData';

/**
 * From any data return an array of paths representing his structure
 */
export function getPaths(data: any, path: DataPath = []): DataPath[] {
  if (data === undefined || data === null) {
    return [];
  }

  /**
   * Array
   */
  if (Array.isArray(data)) {
    return data.flatMap((item, index) => getPaths(item, [...path, index]));
  }

  /**
   * Object
   */
  if (typeof data === 'object') {
    if (isRichtextData(data)) {
      // break the loop
      return [path];
    }

    return Object.entries(data).flatMap(([key, value]) => {
      if ('_type' in data) {
        // set template tag for _type
        return getPaths(value, [...path, `#${data._type}`, key]);
      }

      return getPaths(value, [...path, key]);
    });
  }

  return [path];
}
