import { Format } from '../formats/types';
import { _7Validate } from './steps/_7Validate';
import { _8Sanitize } from './steps/_8Sanitize';
import { Data } from './types';
import { _10Merge } from './steps/_10Merge';
import { Document } from '../documents';
import { _6Required } from './steps/_6Required';
import { _9Parse } from './steps/_9Parse';

export const converter = async (
  relativePath: string,
  document: Document,
  format: Format
): Promise<Data> => {
  let data = await format.execute(relativePath);

  data = _6Required(data, relativePath, document);

  let configs = _6Required(data, document);

  configs = await _6Required(configs);

  configs = _6Required(configs, document);

  configs = _6Required(configs);

  configs = _6Required(configs);

  configs = _7Validate(relativePath, configs);

  configs = _8Sanitize(configs);

  configs = await _9Parse(configs);

  return _10Merge(configs);
};
