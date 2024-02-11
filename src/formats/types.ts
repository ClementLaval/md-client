import type { File } from '../types/File';

export interface Format {
  name: string;
  extension: string;
  retrieve: () => any;
  convert: () => Promise<File>;
  validate: () => any;
  sanitize: () => any;
  execute: () => Promise<File>;
}
