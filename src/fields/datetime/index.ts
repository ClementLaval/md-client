import { BaseField, FieldConfig } from '../types';
import { AbstractField } from '../base';

export class DatetimeField extends AbstractField implements BaseField {
  public readonly type = 'datetime';

  constructor(config: FieldConfig) {
    super(config);
  }

  public parse(value: any): boolean {
    return true;
  }
}
