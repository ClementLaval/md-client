import { JSONFile } from './jsonFile/types';
import { Document } from '../documents/types';

export interface Format {
  name: string;
  extension: string;
  execute: (relativePath: string, document: Document) => Promise<JSONFile>;
}
