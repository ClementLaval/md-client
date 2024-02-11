import { Config } from './types';

export const defaults: Config = {
  logger: false,
  media: {
    mediatRoot: 'content/uploads',
    publicFolder: 'public',
  },
  typescript: {
    path: 'scr/types',
  },
  schema: {
    collections: [],
  },
};
