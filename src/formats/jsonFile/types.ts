import { Root } from 'mdast';

export type JSONFile = {
  // File path
  file: JSONFileInfo;
  data: {
    // Parsed data from frontmatter
    [key: string]: any;
    // Markdown body as AST format
    body: Root;
  };
};

export type JSONFileInfo = {
  filename: string;
  basename: string;
  breadcrumbs: string[];
  path: string;
  relativePath: string;
  extension: string;
};
