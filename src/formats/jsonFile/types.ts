import { Root } from 'mdast';

export type JSONFileMeta = {
  _slug: string;
  _type: string;
};

export type JSONFile = JSONFileMeta & {
  // Parsed data from frontmatter
  [key: string]: any;
  // Markdown body as AST format
  body?: Root;
};

export type VFileMeta = {
  filename: string;
  basename: string;
  breadcrumbs: string[];
  path: string;
  relativePath: string;
  extension: string;
};
