import { Format } from '../types';
import { execute } from './execute';

export const TsFormat: Format = {
  name: 'TS',
  extension: '.ts',
  execute: execute,
};

export const JsFormat: Format = {
  name: 'Js',
  extension: '.js',
  execute: execute,
};
