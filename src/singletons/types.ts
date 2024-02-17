import { Singleton } from './index';

export type SingletonConfig = {
  name: Singleton['name'];
  _type: Singleton['_type'];
  path: Singleton['path'];
  fields: Singleton['fields'];
  computedFields?: Singleton['computedFields'];
};
