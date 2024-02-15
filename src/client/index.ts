import { Collection } from '../collections';
import { Config } from '../config/types';
import { CollectionConfig } from '../collections/types';
import { SingletonConfig } from '../singletons/types';
import { Singleton } from '../singletons';

export class Client {
  [key: CollectionConfig['name'] | SingletonConfig['name']]:
    | Collection
    | Singleton;

  constructor(config: Config) {
    config.schema.collections.forEach((collection) => {
      this[collection.name] = new Collection(collection);
    });
    config.schema.singletons.forEach((singleton) => {
      this[singleton.name] = new Singleton(singleton);
    });
  }
}
