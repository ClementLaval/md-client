import { getClientConfigPath } from './find';
import { Config } from './types';

export const loadClientConfig = async () => {
  const configPath = await getClientConfigPath();

  return (await import(configPath)).default as Config;
};
