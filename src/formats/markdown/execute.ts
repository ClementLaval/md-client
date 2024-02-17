import { read } from 'to-vfile';
import { matter } from 'vfile-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { formatVFileMeta } from '../utils/formatVFileMeta';
import { JSONFile } from '../jsonFile/types';
import { Format } from '../types';

export const execute: Format['execute'] = async (
  relativePath,
  document
): Promise<JSONFile> => {
  const vfile = await read(relativePath);

  matter(vfile, { strip: false });
  const body = unified().use(remarkParse).parse(vfile);

  const { _slug, _type } = formatVFileMeta(relativePath, document);

  return {
    _slug,
    _type,
    body,
    ...Object(vfile.data.matter),
  };
};
