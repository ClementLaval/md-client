import { Collection, CollectionConfig } from './collection';

export type MdClientConfig = {
  studio: {
    outputFolder: string;
    publicFolder: string;
  };
  media: {
    mediatRoot: string;
    publicFolder: string;
  };
  schema: {
    collections: CollectionConfig[];
  };
};

export class MdClient {
  [key: CollectionConfig['name']]: Collection;

  constructor(config: MdClientConfig) {
    config.schema.collections.forEach((collection) => {
      this[collection.name] = new Collection(collection);
    });
  }
}