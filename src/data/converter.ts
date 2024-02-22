import { Format } from '../formats/types';
import { validate } from './steps/validate';
import { sanitize } from './steps/sanitize';
import { parse } from './steps/parse';
import { Data } from './types';
import { fillReference } from './steps/fillReference';
import { Document } from '../documents/types';
import { injectMeta } from './steps/injectMeta';
import { getDataConfig } from './steps/getDataConfig';
import { merge } from './steps/merge';

export const converter = async (
  relativePath: string,
  document: Document,
  format: Format
): Promise<Data> => {
  const inputData = await format.execute(relativePath);

  let dataConfig = getDataConfig(inputData, document);

  dataConfig = fillReference(dataConfig);

  dataConfig = injectMeta(dataConfig, relativePath, document);

  dataConfig = parse(dataConfig);

  dataConfig = validate(dataConfig);

  dataConfig = sanitize(dataConfig);

  const outputData = merge(dataConfig);

  return outputData;
};
