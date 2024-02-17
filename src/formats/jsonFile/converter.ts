import { Format } from '../types';
import { validate } from './validate';
import { sanitize } from './sanitize';
import { parse } from './parse';
import { JSONFile } from './types';
import { retrieveRef } from './retrieveRef';
import { Document } from '../../documents/types';

export const converter = async (
  relativePath: string,
  document: Document,
  format: Format
): Promise<JSONFile> => {
  let jsonFile = await format.execute(relativePath, document);

  jsonFile = retrieveRef(jsonFile, document);

  jsonFile = parse(jsonFile);

  jsonFile = validate(jsonFile);

  jsonFile = sanitize(jsonFile);

  return jsonFile;
};
