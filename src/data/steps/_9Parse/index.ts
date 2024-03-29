import { DataConfig } from '../../types';

export async function _9Parse(
  configs: DataConfig[],
  relativePath: string
): Promise<DataConfig[]> {
  return await Promise.all(
    configs.map(async (config) => ({
      ...config,
      value: await config.field?.parse(config.value, relativePath),
    }))
  );
}
