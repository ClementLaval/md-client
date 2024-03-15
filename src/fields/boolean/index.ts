import { OmitConfig } from '../types';
import { BaseField } from '../base';
import vine from '@vinejs/vine';

export class BooleanField extends BaseField {
  public readonly type = 'boolean';
  public readonly parse: (data: any) => Promise<boolean>;

  constructor(config: OmitConfig<BooleanField>) {
    super(config);
    this.parse = this._parse;
  }

  private async _parse(data: unknown): Promise<boolean> {
    const schema = vine.boolean();
    return await vine.validate({ schema, data });
  }
}
