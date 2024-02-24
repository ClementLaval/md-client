import { BaseField, FieldConfig } from '../types';
import { AbstractField } from '../base';

export class StringField extends AbstractField implements BaseField {
  public readonly type = 'string';

  constructor(config: FieldConfig) {
    super(config);
  }

  public parse(value: any): boolean {
    const isStringType = typeof value === 'string';
    const isUndefined = typeof value === 'undefined';

    if (this.required === true) {
      return isStringType;
    } else {
      return isStringType || isUndefined;
    }
  }
}
