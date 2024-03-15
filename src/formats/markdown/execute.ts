import { read } from 'to-vfile';
import { Data } from '../../data/types';
import { Format } from '../types';
import { matter } from 'vfile-matter';
import { retrieveBodyField } from './retrieveBodyField';
import { Logger } from '../../utilities/logger';

export const execute: Format['execute'] = async (
  relativePath,
  document
): Promise<Data> => {
  const vfile = await read(relativePath);

  // transform frontmatter into parsed data
  // strip: remove matter.data from markdown body result
  matter(vfile, { strip: true });

  // retrieve string from body, markdown is not parsed at this moment
  // check richtext > parse method
  const bodyData =
    typeof vfile.value === 'string'
      ? vfile.value
      : new TextDecoder('utf-8').decode(vfile.value);

  const bodyField = retrieveBodyField(document.fields);
  const bodyKey = bodyField[0]?.name;

  if (!bodyField.length) {
    Logger.warn(
      `No "body" field setted on document #${document.name}, while processing ${relativePath}. Please use "isBody" on a richtext field.`
    );
  }

  if (bodyField.length > 1) {
    Logger.warn(`Only on body field can be set: ${document.name}`);
  }

  return {
    ...Object(vfile.data.matter),
    // TODO: add nested path
    ...(bodyKey ? { [bodyKey]: bodyData } : {}),
  };
};
