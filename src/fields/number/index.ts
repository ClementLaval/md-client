import { FieldConfig } from '../types';
import { BaseField } from '../base';
import vine from '@vinejs/vine';

export class NumberField extends BaseField {
  public readonly type = 'number';
  public readonly parse: (data: any) => Promise<number>;

  constructor(config: FieldConfig) {
    super(config);
    this.parse = this._parse;
  }

  private async _parse(data: any): Promise<number> {
    const schema = vine.number();
    return await vine.validate({ schema, data });
  }
}
