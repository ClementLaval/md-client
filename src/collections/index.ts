import { find } from './operations/find';
import { findAll } from './operations/findAll';
import { DocumentConfig } from '../documents/types';
import { Document } from '../documents';

export class Collection extends Document {
  constructor(config: DocumentConfig) {
    super(config);
  }

  public find(fileName: string) {
    return find(fileName, this);
  }

  public findAll() {
    return findAll(this);
  }
}
