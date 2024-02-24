import { BaseField, FieldConfig } from '../types';
import { AbstractField } from '../base';

export class ImageField extends AbstractField implements BaseField {
  public readonly type = 'image';

  constructor(config: FieldConfig) {
    super(config);
  }

  public parse(value: any): boolean {
    return true;
  }
}
