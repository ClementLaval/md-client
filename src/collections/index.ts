import { find } from './operations/find';
import { trimCollectionPath } from './utils/trimCollectionPath';
import { findAll } from './operations/findAll';
import { Types } from '../fields/types';
import { CollectionConfig } from './types';

export class Collection {
  name: string;
  path: string;
  fields: Types[];
  computedFields: any[];

  constructor(config: CollectionConfig) {
    this.name = config.name;
    this.path = trimCollectionPath(config.path);
    this.fields = config.fields || [];
    this.computedFields = config.computedFields || [];
  }

  public find(fileName: string) {
    return find(fileName, this);
  }

  public findAll() {
    return findAll(this);
  }
}
