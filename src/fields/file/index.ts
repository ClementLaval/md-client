import { BaseField, FieldConfig } from '../types';
import { AbstractField } from '../base';

export class FileField extends AbstractField implements BaseField {
  public readonly type = 'file';

  constructor(config: FieldConfig) {
    super(config);
  }

  public parse(value: any): boolean {
    return true;
  }
}
