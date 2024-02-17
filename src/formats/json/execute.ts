import { read } from 'to-vfile';
import { JSONFile } from '../jsonFile/types';
import { Format } from '../types';

export const execute: Format['execute'] = async (
  relativePath,
  collection
): Promise<JSONFile> => {
  const vfile = await read(relativePath);

  return {
    ...JSON.parse(vfile.toString()),
  };
};
