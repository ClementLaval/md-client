import { Format } from '../types';
import { retrieve } from './retrieve';
import { convert } from './convert';

export const JSONFormat: Format = {
  name: 'JSON',
  extension: '.json',
  retrieve: retrieve,
  convert: convert,
};
