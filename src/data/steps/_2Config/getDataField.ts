import { Field } from '../../../fields/types';
import { DataPath } from '../../types';
import { Document } from '../../../documents';
import { Logger } from '../../../utilities/logger';

/**
 * Retrieve the field config from a data and his object path comparing to his collection
 */
export function getDataField(
  document: Document,
  path: DataPath
): Field | undefined {
  const result = path.reduce((acc: Field | Field[] | undefined, key, index) => {
    /**
     * If not field corresponding
     */
    if (!acc) {
      Logger.error(
        `No field config corresponding to path [${path}] at field (${path[index]})`
      );
      return undefined;
    }

    /**
     * String key
     */
    if (typeof key === 'string') {
      // Skip iteration if key isType
      if (key.toString().startsWith('#')) {
        return acc;
      }

      if ('type' in acc && acc.type === 'array') {
        return acc.of.find((field) => field?.name === key);
      }

      if ('type' in acc && acc.type === 'object') {
        return acc.fields.find((field) => field?.name === key);
      }

      // TODO: check if needed
      // if ('type' in acc && acc.type === 'reference') {
      //   return acc.to.find((reference) => reference === key);
      // }

      if (Array.isArray(acc)) {
        return acc?.find((field) => field?.name === key);
      }
    }

    /**
     * Number key
     */
    if (typeof key === 'number') {
      // Mean that index is related to an object template in array
      const isObjectWithType = Boolean(
        path[index + 1] && path[index + 1].toString().startsWith('#')
      );

      // If is object template, directly return the next path element
      if (isObjectWithType && 'type' in acc && acc.type === 'array') {
        const objectType = path[index + 1].toString().replace('#', '');
        return acc?.of.find((field) => field?.name === objectType);
      }

      // If next key doesn't correspond to object with #
      // Return first field schema
      // If we want use separate object type in array, must use # on each object
      // otherwise we cannot detect what kind of object the data is, as we don't have his type, only key value
      if (!isObjectWithType && 'type' in acc && acc.type === 'array') {
        return acc.of?.at(0);
      }

      // TODO: check if needed
      // if ('type' in acc && acc.type === 'object') {
      //   return acc.fields;
      // }

      return acc;
    }
  }, document.fields);

  if (Array.isArray(result)) {
    return result.length ? result[0] : undefined;
  }

  return result;
}
