import { Collection } from './index';

export type CollectionConfig = {
  name: Collection['name'];
  _type: Collection['_type'];
  path: Collection['path'];
  fields: Collection['fields'];
  computedFields?: Collection['computedFields'];
};
