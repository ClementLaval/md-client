import { Root } from 'mdast';

export type File = {
  // File path
  file: {
    filename: string;
    basename: string;
    breadcrumbs: string[];
    path: string;
    relativePath: string;
    extension: string;
  };
  data: {
    // Parsed data from frontmatter
    [key: string]: any;
    // Markdown body as AST format
    body: Root;
  };
};