import { BaseField, Field, FieldConfig } from '../types';
import { AbstractField } from '../base';
import { FieldFactory } from '../FieldFactory';

export class ObjectField extends AbstractField implements BaseField {
  public readonly type = 'object';
  public fields: Field[];

  constructor(config: FieldConfig) {
    super(config);
    this.fields =
      config.type === 'object'
        ? config.fields.map((field) => FieldFactory.build(field))
        : [];
  }

  public parse(value: any): boolean {
    return true;
  }
}
