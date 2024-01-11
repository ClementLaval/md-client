// https://github.com/vfile/vfile

import { read } from 'to-vfile';
import { matter } from 'vfile-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { Root } from 'mdast';

export async function getMdDocument({
  relativePath,
}: {
  relativePath: string;
}): Promise<{
  // File path
  file: string;
  // Parsed data from frontmatter
  data: any;
  // Markdown body as AST format
  body: Root;
}> {
  const vfile = await read(relativePath);
  matter(vfile, { strip: false });

  const body = unified().use(remarkParse).parse(vfile);

  return {
    file: vfile.history[0],
    data: vfile.data.matter,
    body,
  };
}