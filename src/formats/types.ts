import { Data } from '../data/types';

export interface Format {
  readonly name: string;
  readonly extension: string;
  readonly execute: (relativePath: string) => Promise<Data>;
}
