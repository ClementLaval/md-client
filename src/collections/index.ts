import { find } from './operations/find';
import { trimSlashPath } from '../utillities/trimSlashPath';
import { findAll } from './operations/findAll';
import { Types } from '../fields/types';
import { CollectionConfig } from './types';
import { Document } from '../documents/types';

export class Collection implements Document {
  name: string;
  _type?: string;
  path: string;
  fields: Types[];
  computedFields: any[];

  constructor(config: CollectionConfig) {
    this.name = config.name;
    this._type = config._type;
    this.path = trimSlashPath(config.path);
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
