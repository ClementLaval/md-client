import { Root } from 'mdast';

export type CollectionMeta = {
  _slug: string;
  _type: string;
};

export type JSONFile = CollectionMeta & {
  // Parsed data from frontmatter
  [key: string]: any;
  // Markdown body as AST format
  body?: Root;
};
