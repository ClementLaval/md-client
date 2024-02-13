import { Format } from '../types';
import { retrieve } from './retrieve';
import { convert } from './convert';
import { validate } from './validate';
import { sanitize } from './sanitize';

export const execute: Format['execute'] = async (relativePath: string) => {
  const data = await retrieve(relativePath);

  let jsonFile = await convert(data);

  jsonFile = validate(jsonFile);

  jsonFile = sanitize(jsonFile);

  return jsonFile;
};
