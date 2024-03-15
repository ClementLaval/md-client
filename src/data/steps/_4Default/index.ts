import { DataConfig } from '../../types';
import { Document } from '../../../documents';
import { getPaths } from '../_2Config/getPaths';

export function _4Default(
  configs: DataConfig[],
  document: Document
): DataConfig[] {
  const missingFields = getPaths(document.fields);

  return configs.map((config) => ({
    ...config,
    value:
      !config.value && config.field?.default
        ? config.field.default({ document })
        : config.value,
  }));
}
