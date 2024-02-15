import { Singleton } from './index';

export type SingletonConfig = {
  name: Singleton['name'];
  path: Singleton['path'];
  fields: Singleton['fields'];
  computedFields?: Singleton['computedFields'];
};
