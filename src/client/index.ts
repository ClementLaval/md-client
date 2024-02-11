import { Collection } from '../collections';
import { Config } from '../config/types';
import { CollectionConfig } from '../collections/types';

export class Client {
  [key: CollectionConfig['name']]: Collection;

  constructor(config: Config) {
    config.schema.collections.forEach((collection) => {
      this[collection.name] = new Collection(collection);
    });
  }
}
