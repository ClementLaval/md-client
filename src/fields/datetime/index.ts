import { FieldConfig } from '../types';
import { BaseField } from '../base';
import vine from '@vinejs/vine';

export class DatetimeField extends BaseField {
  public readonly type = 'datetime';
  public readonly parse: (data: any) => Promise<string>;

  constructor(config: FieldConfig) {
    super(config);
    this.parse = this._parse;
  }

  private async _parse(data: any): Promise<string> {
    const schema = vine.string();
    return await vine.validate({ schema, data });
  }
}
