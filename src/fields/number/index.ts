import { BaseField, FieldConfig } from '../types';
import { AbstractField } from '../base';

export class NumberField extends AbstractField implements BaseField {
  public readonly type = 'number';

  constructor(config: FieldConfig) {
    super(config);
  }

  public parse(value: any): boolean {
    return true;
  }
}
