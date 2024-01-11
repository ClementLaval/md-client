import { getOneDocument } from './utils/getOneDocument';
import { trimCollectionPath } from './utils/trimCollectionPath';
import { getAllDocuments } from './utils/getAllDocuments';

export type FieldType = 'string' | 'number' | 'boolean' | 'object';

export type Format = 'md';

export type Field = {
  name: string;
  type: FieldType;
};

export type CollectionConfig = {
  name: string;
  path: string;
  format: Format;
  fields: Field[];
  computedFields?: any[];
};

export class Collection {
  name: string;
  path: string;
  format: Format;
  fields: Field[];
  computedFields: any[];

  constructor(config: CollectionConfig) {
    this.name = config.name;
    this.path = trimCollectionPath(config.path);
    this.format = config.format;
    this.fields = config.fields || [];
    this.computedFields = config.computedFields || [];
  }

  public one(file: string) {
    return getOneDocument(this.getFullPath(file));
  }

  public all() {
    return getAllDocuments(this);
  }

  public getFullPath(file: string) {
    return `${this.path}/${file}`;
  }
}