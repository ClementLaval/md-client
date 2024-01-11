// https://github.com/vfile/vfile

import { File, mdToJson } from './mdToJson';

export async function getOneDocument(relativePath: string): Promise<File> {
  return mdToJson(relativePath);
}