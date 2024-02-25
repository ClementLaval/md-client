import { Format } from '../formats/types';
import { _7Validate } from './steps/_7Validate';
import { _8Sanitize } from './steps/_8Sanitize';
import { Data } from './types';
import { _3Reference } from './steps/_3Reference';
import { _1Meta } from './steps/_1Meta';
import { _2Config } from './steps/_2Config';
import { _10Merge } from './steps/_10Merge';
import { Document } from '../documents';
import { _4Default } from './steps/_4Default';
import { _5Computed } from './steps/_5Computed';
import { _6Required } from './steps/_6Required';
import { _9Parse } from './steps/_9Parse';

export const converter = async (
  relativePath: string,
  document: Document,
  format: Format
): Promise<Data> => {
  let data = await format.execute(relativePath);

  data = _1Meta(data, relativePath, document);

  let configs = _2Config(data, document);

  configs = _3Reference(configs);

  configs = _4Default(configs, document);

  configs = _5Computed(configs);

  configs = _6Required(configs);

  configs = _7Validate(configs);

  configs = _8Sanitize(configs);

  configs = await _9Parse(configs);
  console.log(configs);

  return _10Merge(configs);
};
