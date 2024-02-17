import { Format } from '../types';
import { validate } from './validate';
import { sanitize } from './sanitize';
import { Collection } from '../../collections';
import { Singleton } from '../../singletons';

export const converter = async (
  relativePath: string,
  collection: Collection | Singleton,
  format: Format
) => {
  let jsonFile = await format.execute(relativePath, collection);

  jsonFile = validate(jsonFile);

  jsonFile = sanitize(jsonFile);

  return jsonFile;
};
