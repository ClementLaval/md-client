import { Document } from './index';
import { FieldConfig } from '../fields/types';

export type DocumentConfig = {
  name: Document['name'];
  path: Document['path'];
  fields: FieldConfig[];
};
