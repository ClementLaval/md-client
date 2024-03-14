import { DataConfig } from '../../types';
import { retrieveDocReference } from './retrieveDocReference';

export async function _3Reference(
  configs: DataConfig[]
): Promise<DataConfig[]> {
  return Promise.all(
    configs.map(async (config) => {
      if (config.field?.type === 'reference') {
        const document = await retrieveDocReference(config.value);

        return {
          ...config,
          value: typeof document === 'object' ? document : config.value,
        };
      }

      return config;
    })
  );
}
