import { Format } from '../types';
import { retrieve } from './retrieve';
import { convert } from './convert';

export const TsFormat: Format = {
  name: 'TS',
  extension: '.ts',
  retrieve: retrieve,
  convert: convert,
};
