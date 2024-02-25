import { FieldConfig } from '../types';
import { BaseField } from '../base';
import vine from '@vinejs/vine';

export class FileField extends BaseField {
  public readonly type = 'file';
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
