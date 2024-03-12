import { FieldConfig } from '../types';
import { BaseField } from '../base';
import vine from '@vinejs/vine';

export class RichtextField extends BaseField {
  public readonly type = 'richtext';
  public readonly parse: (data: any) => Promise<Object>;

  constructor(config: FieldConfig) {
    super(config);
    this.parse = this._parse;
  }

  private async _parse(data: any): Promise<Object> {
    const schema = vine.any();
    return await vine.validate({ schema, data });
  }
}
