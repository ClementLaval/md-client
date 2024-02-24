import { BaseField, FieldConfig } from '../types';
import { AbstractField } from '../base';

export class BooleanField extends AbstractField implements BaseField {
  public readonly type = 'boolean';

  constructor(config: FieldConfig) {
    super(config);
  }

  public parse(value: any): boolean {
    return true;
  }
}
