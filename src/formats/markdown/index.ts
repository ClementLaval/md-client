import { Format } from '../types';
import { mdToJson } from './mdToJson';

export const MdFormat: Format = {
  name: 'Markdown',
  extension: '.md',
  convert: mdToJson,
  execute: mdToJson,
};
