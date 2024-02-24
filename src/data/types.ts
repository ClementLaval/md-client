import { Root } from 'mdast';
import { Field } from '../fields/types';

export type CollectionMeta = {
  _slug: string;
  _type: string;
};

export type Data = CollectionMeta & {
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
