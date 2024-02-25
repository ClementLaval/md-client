import { FieldConfig } from '../types';
import { BaseField } from '../base';
import vine from '@vinejs/vine';

export class DateField extends BaseField {
  public readonly type = 'date';
  public readonly parse: (data: any) => Promise<Date>;

  constructor(config: FieldConfig) {
    super(config);
    this.parse = this._parse;
  }

  private async _parse(data: any): Promise<Date> {
    const schema = vine.date();
    return await vine.validate({ schema, data });
  }
}
