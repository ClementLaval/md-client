import { DataConfig } from '../../types';
import { Logger } from '../../../utilities/logger';

export function _6Required(configs: DataConfig[]): DataConfig[] {
  // TODO: Need to retrieve all document configs to see if config are missing (like default)
  configs.forEach((config) => {
    config.field?.required === true &&
      !config.value &&
      Logger.error({
        name: 'REQUIRED',
        msg: `${config.field.name} data is missing but required`,
      });
  });

  return configs;
}
