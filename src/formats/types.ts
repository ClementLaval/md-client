import type { JSONFile } from './jsonFile/types';

export interface Format {
  name: string;
  extension: string;
  execute: (relativePath: string) => Promise<JSONFile | undefined>;
}

export interface Execute {
  retrieve: () => any;
  convert: () => Promise<JSONFile>;
  validate: () => Promise<JSONFile>;
  sanitize: () => Promise<JSONFile>;
}
