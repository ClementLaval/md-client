import { Data, DataConfig } from '../../types';
import { Document } from '../../../documents';
import { getPaths } from './getPaths';
import { getPathValue } from './getPathValue';
import { getDataField } from './getDataField';

export function _2Config(
  data: Data,
  relativePath: string,
  document: Document
): DataConfig[] {
  const paths = getPaths(data);

  return paths.map((path) => ({
    path,
    value: getPathValue(data, path),
    field: getDataField(document, relativePath, path),
  }));
}
