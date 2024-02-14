import { Format } from '../types';
import { retrieve } from './retrieve';
import { convert } from './convert';

export const MdFormat: Format = {
  name: 'Markdown',
  extension: '.md',
  retrieve: retrieve,
  convert: convert,
};
