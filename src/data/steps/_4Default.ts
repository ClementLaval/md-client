import { DataConfig } from '../types';
import { Document } from '../../documents';

export function _4Default(
  configs: DataConfig[],
  document: Document
): DataConfig[] {
  return configs.map((config) => ({
    ...config,
    value:
      !config.value && config.field?.default
        ? config.field.default({ document })
        : config.value,
  }));
}
