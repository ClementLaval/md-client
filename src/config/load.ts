import { findConfig } from './find';

export const loadConfig = async () => {
  const configPath = await findConfig();

  const config = await import(configPath);
};
