import { matter } from 'vfile-matter';
import { JSONFile } from '../jsonFile/types';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { generateFileInfo } from '../jsonFile/generateFileInfo';
import { VFile } from 'vfile';

export async function convert(vfile: VFile): Promise<JSONFile> {
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
