import { Types } from '../fields/types';
import { SingletonConfig } from './types';
import { trimSlashPath } from '../utillities/trimSlashPath';
import { find } from './operations/find';

export class Singleton {
  name: string;
  path: string;
  fields: Types[];
  computedFields: any[];

  constructor(config: SingletonConfig) {
    this.name = config.name;
    this.path = trimSlashPath(config.path);
    this.fields = config.fields || [];
    this.computedFields = config.computedFields || [];
  }

  public find() {
    return find(this);
  }
}
