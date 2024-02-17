import { Format } from '../types';
import { execute } from './execute';

export const JSONFormat: Format = {
  name: 'JSON',
  extension: '.json',
  execute: execute,
};
