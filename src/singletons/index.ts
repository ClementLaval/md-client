import { Types } from '../fields/types';
import { SingletonConfig } from './types';
import { trimSlashPath } from '../utillities/trimSlashPath';
import { find } from './operations/find';
import { Document } from '../documents/types';

export class Singleton implements Document {
  name: string;
  _type?: string;
  path: string;
  fields: Types[];
  computedFields: any[];

  constructor(config: SingletonConfig) {
    this.name = config.name;
    this._type = config._type;
    this.path = trimSlashPath(config.path);
    this.fields = config.fields || [];
    this.computedFields = config.computedFields || [];
  }

  public find() {
    return find(this);
  }
}
