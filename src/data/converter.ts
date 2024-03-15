import { Format } from '../formats/types';
import { _7Validate } from './steps/_7Validate';
import { _8Sanitize } from './steps/_8Sanitize';
import { Data } from './types';
import { _10Merge } from './steps/_10Merge';
import { Document } from '../documents';
import { _6Required } from './steps/_6Required';
import { _9Parse } from './steps/_9Parse';
import { _1Meta } from './steps/_1Meta';
import { _2Config } from './steps/_2Config';
import { _3Reference } from './steps/_3Reference';
import { _4Default } from './steps/_4Default';
import { _5Computed } from './steps/_5Computed';

export const converter = async (
  relativePath: string,
  document: Document,
  format: Format
): Promise<Data> => {
  let data = await format.execute(relativePath, document);

  data = _1Meta(data, relativePath, document);

  let configs = _2Config(data, relativePath, document);

  configs = await _3Reference(configs);

  configs = _4Default(configs, document);

  configs = _5Computed(configs);

  configs = _6Required(configs);

  configs = _7Validate(relativePath, configs);

  configs = _8Sanitize(configs);

  configs = await _9Parse(configs);

  return _10Merge(configs);
};
