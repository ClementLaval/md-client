import { Collection } from './index';

export type CollectionConfig = {
  name: Collection['name'];
  path: Collection['path'];
  fields: Collection['fields'];
  computedFields?: Collection['computedFields'];
};
