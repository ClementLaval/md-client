import { Field } from '../fields/field';

export interface Document {
  name: string;
  _type?: string;
  path: string;
  fields: Field[];
  computedFields: any[];
}
