import { read } from 'to-vfile';
import { Format } from '../types';
import { Data } from '../../data/types';

export const execute: Format['execute'] = async (
  relativePath
): Promise<Data> => {
  const vfile = await read(relativePath);

  return {
    ...JSON.parse(vfile.toString()),
  };
};
