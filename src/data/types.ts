import { Root } from 'mdast';
import { Field } from '../fields/types';

export type DocumentMeta = {
  _slug: string;
  _type: string;
};

export type Data = DocumentMeta & {
  // Parsed data from frontmatter
  [key: string]: any;
  // Markdown body as AST format
  body?: Root;
};

export type DataConfig = {
  path: (string | number)[];
  value: any;
  field: Field;
};
