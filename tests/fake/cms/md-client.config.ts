import { Client, Config } from '../../../src';
import { page } from './collections/page';
import { article } from './collections/article';
import { header } from './singletons/header';

export const config: Config = {
  logger: true,
  schema: {
    collections: [page, article],
    singletons: [header],
  },
};

const client = new Client(config);

export default client;
