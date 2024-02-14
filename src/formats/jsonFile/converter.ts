import { Format } from '../types';
import { validate } from './validate';
import { sanitize } from './sanitize';

export const converter = async (relativePath: string, format: Format) => {
  const data = await format.retrieve(relativePath);

  let jsonFile = await format.convert(data);

  jsonFile = validate(jsonFile);

  jsonFile = sanitize(jsonFile);

  return jsonFile;
};
