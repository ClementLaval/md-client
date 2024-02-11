import { read } from 'to-vfile';
import { matter } from 'vfile-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { generateFileInfo } from './generateFileInfo';
import { File } from '../../types/File';

export async function mdToJson(relativePath: string): Promise<File> {
  const vfile = await read(relativePath);
  matter(vfile, { strip: false });

  const body = unified().use(remarkParse).parse(vfile);

  return {
    file: generateFileInfo(vfile.history[0]),
    data: {
      ...Object(vfile.data.matter),
      body,
    },
  };
}
