import { BaseField, FieldConfig } from '../types';
import { AbstractField } from '../base';

export class SlugField extends AbstractField implements BaseField {
  public readonly type = 'slug';

  constructor(config: FieldConfig) {
    super(config);
  }

  public parse(value: any): boolean {
    return true;
  }
}
