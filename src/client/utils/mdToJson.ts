import { read } from 'to-vfile';
import { matter } from 'vfile-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { Root } from 'mdast';

export type File = {
  // File path
  file: string;
  data: {
    // Parsed data from frontmatter
    matter: any;
    // Markdown body as AST format
    body: Root;
  };
};

export async function mdToJson(relativePath: string): Promise<File> {
  const vfile = await read(relativePath);
  matter(vfile, { strip: false });

  const body = unified().use(remarkParse).parse(vfile);

  return {
    file: vfile.history[0],
    data: {
      matter: vfile.data.matter,
      body,
    },
  };
}