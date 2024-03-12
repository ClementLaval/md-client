import { read } from 'to-vfile';
import { Data } from '../../data/types';
import { Format } from '../types';
import { matter } from 'vfile-matter';

export const execute: Format['execute'] = async (
  relativePath
): Promise<Data> => {
  const vfile = await read(relativePath);

  // transform frontmatter into parsed data
  // strip: remove matter.data from markdown body result
  matter(vfile, { strip: true });

  // retrieve string from body, markdown is not parsed at this moment
  // check richtext > parse method
  const body =
    typeof vfile.value === 'string'
      ? vfile.value
      : new TextDecoder('utf-8').decode(vfile.value);

  return {
    ...Object(vfile.data.matter),
    body,
  };
};
