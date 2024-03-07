import { Field } from '../../../fields/types';
import { DataPath } from '../../types';
import { Document } from '../../../documents';

/**
 * Retrieve the field config from a data and his object path comparing to his collection
 */
export function getDataField(document: Document, path: DataPath): Field {
  return path.reduce((acc: any, key, index) => {
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
