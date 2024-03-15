import { Field } from '../fields/types';

export type DocumentMeta = {
  _slug: string;
  _type: string;
};

export type Data = DocumentMeta & {
  // Parsed data from frontmatter
  [key: string]: any;
};

export type DataPath = (string | number)[];

export type DataConfig = {
  path: DataPath;
  value: any;
  field: Field;
};
