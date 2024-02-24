import { Collection } from '../collections';
import { Config } from '../config/types';
import { Singleton } from '../singletons';

export class Client {
  collections: Record<Collection['name'], Collection>;
  singletons: Record<Singleton['name'], Singleton>;

  constructor(config: Config) {
    this.collections = config.schema.collections.reduce(
      (acc: Record<Collection['name'], Collection>, collection) => {
        acc[collection.name] = new Collection(collection);
        return acc;
      },
      {}
    );
    this.singletons = config.schema.singletons.reduce(
      (acc: Record<Singleton['name'], Singleton>, singleton) => {
        acc[singleton.name] = new Singleton(singleton);
        return acc;
      },
      {}
    );
  }
}
