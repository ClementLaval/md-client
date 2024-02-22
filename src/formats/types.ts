import { Data } from '../data/types';

export interface Format {
  name: string;
  extension: string;
  execute: (relativePath: string) => Promise<Data>;
}
