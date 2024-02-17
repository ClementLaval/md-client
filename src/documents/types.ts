import { Types } from '../fields/types';

export interface Document {
  name: string;
  _type?: string;
  path: string;
  fields: Types[];
  computedFields: any[];
}
