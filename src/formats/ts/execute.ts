import { Data } from '../../data/types';
import { Format } from '../types';

export const execute: Format['execute'] = async (
  relativePath
): Promise<Data> => {
  const file = await import(`/${relativePath}`).then((module) =>
    JSON.stringify(module.default)
  );

  return {
    ...JSON.parse(file.toString()),
  };
};
