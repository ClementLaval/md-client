import { FieldConfig } from '../types';
import { BaseField } from '../base';
import vine from '@vinejs/vine';

export class SlugField extends BaseField {
  public readonly type = 'slug';
  public readonly parse: (data: any) => Promise<string>;

  constructor(config: FieldConfig) {
    super(config);
    this.parse = this._parse;
  }

  private async _parse(data: any): Promise<string> {
    const schema = vine.string();
    if (!vine.helpers.isSlug(data)) {
      throw new Error(`Invalid slug format: ${data}`);
    }
    return await vine.validate({ schema, data });
  }
}
