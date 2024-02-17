import { JSONFile } from '../jsonFile/types';
import { Format } from '../types';
import { formatVFileMeta } from '../utils/formatVFileMeta';

export const execute: Format['execute'] = async (
  relativePath,
  document
): Promise<JSONFile> => {
  const file = await import(`/${relativePath}`).then((module) =>
    JSON.stringify(module.default)
  );

  const { _slug, _type } = formatVFileMeta(relativePath, document);

  return {
    _slug,
    _type,
    ...JSON.parse(file.toString()),
  };
};
