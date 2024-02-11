import { CollectionConfig } from '../collections/types';

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
  };
};
