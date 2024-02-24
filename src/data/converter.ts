import { Format } from '../formats/types';
import { validate } from './steps/validate';
import { sanitize } from './steps/sanitize';
import { parse } from './steps/parse';
import { Data } from './types';
import { fillReference } from './steps/fillReference';
import { injectMeta } from './steps/injectMeta';
import { getDataConfig } from './steps/getDataConfig';
import { merge } from './steps/merge';
import { Document } from '../documents';

export const converter = async (
  relativePath: string,
  document: Document,
  format: Format
): Promise<Data> => {
  let inputData = await format.execute(relativePath);

  inputData = injectMeta(inputData, relativePath, document);

  let dataConfig = getDataConfig(inputData, document);
  console.log(dataConfig);

  dataConfig = fillReference(dataConfig);

  dataConfig = parse(dataConfig);

  dataConfig = validate(dataConfig);

  dataConfig = sanitize(dataConfig);

  const outputData = merge(dataConfig);

  return outputData;
};
