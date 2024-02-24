import { BaseField, Field, FieldConfig } from '../types';
import { AbstractField } from '../base';
import { FieldFactory } from '../FieldFactory';

export class ArrayField extends AbstractField implements BaseField {
  public readonly type = 'array';
  public of: Field[];

  constructor(config: FieldConfig) {
    super(config);
    this.of =
      config.type === 'array'
        ? config.of.map((field) => FieldFactory.build(field))
        : [];
  }

  public parse(value: any): boolean {
    return true;
  }
}
