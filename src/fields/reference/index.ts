import { BaseField, FieldConfig } from '../types';
import { AbstractField } from '../base';
import { Document } from '../../documents';

export type DocReference<T> = T | string;

export class ReferenceField extends AbstractField implements BaseField {
  public readonly type = 'reference';
  public to: Document['name'][];

  constructor(config: FieldConfig) {
    super(config);
    this.to = config.type === 'reference' ? config.to : [];
  }

  public parse(value: any): boolean {
    return true;
  }
}
