import { Data } from '../data/types';
import { Document } from '../documents';

export interface Format {
  readonly name: string;
  readonly extension: string;
  readonly execute: (relativePath: string, document: Document) => Promise<Data>;
}
