import { OmitConfig } from '../types';
import { BaseField } from '../base';
import vine from '@vinejs/vine';

export class StringField extends BaseField {
  public readonly type = 'string';
  public readonly parse: (value: any) => Promise<string>;

  constructor(config: OmitConfig<StringField>) {
    super(config);
    this.parse = this._parse;
  }

  private async _parse(data: unknown): Promise<string> {
    const schema = vine.string();
    return await vine.validate({ schema, data });
  }
}
