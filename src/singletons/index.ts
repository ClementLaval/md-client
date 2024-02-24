import { find } from './operations/find';
import { Document } from '../documents';
import { DocumentConfig } from '../documents/types';

export class Singleton extends Document {
  constructor(config: DocumentConfig) {
    super(config);
  }

  public find() {
    return find(this);
  }
}
