import { Format } from './types';
import { MdFormat } from './markdown';
import { JSONFormat } from './json';
import { JsFormat, TsFormat } from './ts';

export const FORMATS: Format[] = [MdFormat, JSONFormat, TsFormat, JsFormat];
