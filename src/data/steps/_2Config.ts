import { Data, DataConfig, DataPath } from '../types';
import { Document } from '../../documents/';
import { Field } from '../../fields/types';

export function _2Config(data: Data, document: Document): DataConfig[] {
  return Object.entries(data).flatMap(([key, value]) =>
    getFieldConfig([key], value, document)
  );
}

/**
 * From any data return an array of paths representing his structure
 */
export function getPaths(data: any, path: DataPath = []): DataPath[] {
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

/**
 * Retrieve value from object with a specific path
 */

export function getPathValue(obj: object, path: DataPath): any {
  return path.reduce((acc, key) => {
    return acc[key];
  }, obj);
}

export function getFieldConfig(
  path: (string | number)[] = [],
  value: Data,
  document: Document
): DataConfig[] {
  // if array, pass each object into function
  if (Array.isArray(value)) {
    return value.flatMap((item, index) =>
      getFieldConfig([...path, index], item, document)
    );
  }

  if (typeof value === 'object') {
    return Object.entries(value).flatMap(([_key, _value]) => {
      // retrieve object _type to get kind of section
      if ('_type' in value) {
        return getFieldConfig(
          [...path, `type_${value._type}`, _key],
          _value,
          document
        );
      } else {
        return getFieldConfig([...path, _key], _value, document);
      }
    });
  }

  return [
    {
      path,
      value,
      field: getDataField(path, document),
    },
  ];
}

/**
 * Retrieve the field config from a data and his object path comparing to his collection
 */
export function getDataField(
  path: (string | number)[],
  document: Document
): Field {
  return path.reduce((acc: any, key, index) => {
    if (key.toString().startsWith('type_')) {
      return acc;
    }

    // if path key is string
    if (typeof key === 'string') {
      if (acc?.type === 'object') {
        return acc.fields.find((field) => field?.name === key);
      }
      return acc?.find((field) => field?.name === key);
    }

    if (typeof key === 'number') {
      const isType = path[index + 1]?.toString().includes('type_');
      if (isType) {
        const type = path[index + 1].toString().replace('type_', '');
        return acc?.of.find((field) => field?.name === type);
      }
      if (acc?.type === 'array') {
        return acc.of;
      }
      if (acc?.type === 'object') {
        return acc.fields.find((field) => field?.name === key);
      }
    }
  }, document.fields);
}
