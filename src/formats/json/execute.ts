import { read } from 'to-vfile';
import { JSONFile } from '../jsonFile/types';
import { Format } from '../types';
import { formatVFileMeta } from '../utils/formatVFileMeta';

export const execute: Format['execute'] = async (
  relativePath,
  document
): Promise<JSONFile> => {
  const vfile = await read(relativePath);

  const { _slug, _type } = formatVFileMeta(relativePath, document);

  return {
    _slug,
    _type,
    ...JSON.parse(vfile.toString()),
  };
};
