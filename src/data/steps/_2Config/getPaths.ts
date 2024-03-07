import { DataPath } from '../../types';

/**
 * From any data return an array of paths representing his structure
 */
export function getPaths(data: any, path: DataPath = []): DataPath[] {
  if (data === undefined || data === null) {
    return [];
  }

  if (Array.isArray(data)) {
    return data.flatMap((item, index) => getPaths(item, [...path, index]));
  }

  if (typeof data === 'object') {
    return Object.entries(data).flatMap(([key, value]) => {
      if ('_type' in data) {
        return getPaths(value, [...path, `type_${data._type}`, key]);
      } else {
        return getPaths(value, [...path, key]);
      }
    });
  }

  return [path];
}
