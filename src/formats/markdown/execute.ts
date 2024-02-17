import { read } from 'to-vfile';
import { matter } from 'vfile-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { formatVFileMeta } from '../jsonFile/formatVFileMeta';
import { JSONFile } from '../jsonFile/types';
import { Format } from '../types';
import { slugify } from '../../utillities/slugify';

export const execute: Format['execute'] = async (
  relativePath,
  collection
): Promise<JSONFile> => {
  const vfile = await read(relativePath);

  matter(vfile, { strip: false });

  const body = unified().use(remarkParse).parse(vfile);
  const { filename } = formatVFileMeta(vfile.history[0]);

  return {
    _slug: slugify(filename),
    _type: collection._type || collection.name,
    body,
    ...Object(vfile.data.matter),
  };
};
