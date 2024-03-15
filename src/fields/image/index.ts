import { OmitConfig } from '../types';
import { BaseField } from '../base';
import vine from '@vinejs/vine';

export class ImageField extends BaseField {
  public readonly type = 'image';
  public readonly parse: (data: any) => Promise<string>;

  constructor(config: OmitConfig<ImageField>) {
    super(config);
    this.parse = this._parse;
  }

  private async _parse(data: unknown): Promise<string> {
    const schema = vine.string();
    return await vine.validate({ schema, data });
  }
}
