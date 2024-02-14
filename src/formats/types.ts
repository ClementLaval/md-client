import type { JSONFile } from './jsonFile/types';
import { VFile } from 'vfile';

export interface Format {
  name: string;
  extension: string;
  retrieve: (relativePath: string) => Promise<VFile>;
  convert: (vFile: VFile) => Promise<JSONFile>;
}
