import { JSONFile } from './types';
import { Document } from '../../documents/types';

export function retrieveRef(jsonFile: JSONFile, document: Document): JSONFile {
  console.log(document);
  return jsonFile;
}
