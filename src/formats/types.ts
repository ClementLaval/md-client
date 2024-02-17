import type { JSONFile } from './jsonFile/types';
import { Collection } from '../collections';
import { Singleton } from '../singletons';

export interface Format {
  name: string;
  extension: string;
  execute: (
    relativePath: string,
    collection: Collection | Singleton
  ) => Promise<JSONFile>;
}
