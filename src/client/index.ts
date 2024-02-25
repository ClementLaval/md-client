import { Collection } from '../collections';
import { Config } from '../config/types';
import { Singleton } from '../singletons';
import { defaults } from '../config/defaults';

export class Client {
  public readonly collections: Record<Collection['name'], Collection>;
  public readonly singletons: Record<Singleton['name'], Singleton>;
  public readonly config: Config;

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

    this.config = config;
    // Init singleton instance
    Client.instance = this;
  }

  private static instance: Client;

  public static getInstance(): Client {
    if (!Client.instance) {
      Client.instance = new Client(defaults);
    }
    return Client.instance;
  }
}
