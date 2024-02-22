import { read } from 'to-vfile';
import { matter } from 'vfile-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { Data } from '../../data/types';
import { Format } from '../types';

export const execute: Format['execute'] = async (
  relativePath
): Promise<Data> => {
  const vfile = await read(relativePath);

  matter(vfile, { strip: false });
  const body = unified().use(remarkParse).parse(vfile);

  return {
    body,
    ...Object(vfile.data.matter),
  };
};
