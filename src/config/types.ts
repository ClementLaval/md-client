import { CollectionConfig } from '../collections/types';
import { SingletonConfig } from '../singletons/types';

export type Config = {
  // studio: {
  //   outputFolder: string;
  //   publicFolder: string;
  // };
  logger?: boolean;
  media?: {
    mediatRoot: string;
    publicFolder: string;
  };
  typescript?: {
    path: string;
  };
  schema: {
    collections: CollectionConfig[];
    singletons: SingletonConfig[];
  };
};
