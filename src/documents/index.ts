import { FieldConfig } from '../fields/types';
import { trimSlashPath } from '../utillities/trimSlashPath';
import { DocumentConfig } from './types';
import { FieldFactory } from '../fields/FieldFactory';

export abstract class Document {
  // _slug: string;
  // _type: string;
  name: string;
  path: string;
  fields: FieldConfig[];

  protected constructor(config: DocumentConfig) {
    this.name = config.name;
    this.path = trimSlashPath(config.path);
    this.fields = this.setFields(config.fields);
  }

  private setFields(fields: FieldConfig[]): any {
    const metaFields: FieldConfig[] = [
      {
        name: '_slug',
        type: 'string',
        required: true,
      },
      {
        name: '_type',
        type: 'string',
        required: true,
      },
    ];
    return [...metaFields, ...fields].map((field) => FieldFactory.build(field));
  }
}
