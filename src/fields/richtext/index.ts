import { BaseField, FieldConfig } from '../types';
import { AbstractField } from '../base';

export class RichtextField extends AbstractField implements BaseField {
  public readonly type = 'richtext';

  constructor(config: FieldConfig) {
    super(config);
  }

  public parse(value: any): boolean {
    return true;
  }
}
