import { JSONFile } from '../jsonFile/types';
import { Format } from '../types';

export const execute: Format['execute'] = async (
  relativePath,
  collection
): Promise<JSONFile> => {
  const file = await import(`/${relativePath}`).then((module) =>
    JSON.stringify(module.default)
  );

  return {
    ...JSON.parse(file.toString()),
  };
};
