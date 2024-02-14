import { Format } from './types';
import { MdFormat } from './markdown';
import { JSONFormat } from './json';
import { TsFormat } from './ts';

export const FORMATS: Format[] = [MdFormat, JSONFormat, TsFormat];
