import { Format } from '../types';
import { execute } from './execute';

export const MdFormat: Format = {
  name: 'Markdown',
  extension: '.md',
  execute: execute,
};
