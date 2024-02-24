import { BaseField, FieldConfig } from '../types';
import { AbstractField } from '../base';

export class DateField extends AbstractField implements BaseField {
  public readonly type = 'date';

  constructor(config: FieldConfig) {
    super(config);
  }

  public parse(value: any): boolean {
    return true;
  }
}
