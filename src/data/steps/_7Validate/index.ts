import { DataConfig } from '../../types';
import { Logger } from '../../../utilities/logger';

export function _7Validate(
  relativePath: string,
  configs: DataConfig[]
): DataConfig[] {
  configs.forEach(async (config) => {
    if (config.field?.validate) {
      const result = config.field.validate({ value: config.value });
      if (!result) {
        Logger.error(
          `[VALIDATION]: error on ${relativePath}: field name (${config.field.name}) with value (${config.value})`
        );
      }
    }
  });

  return configs;
}
