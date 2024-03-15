import { OmitConfig } from '../types';
import { BaseField } from '../base';
import vine from '@vinejs/vine';
import { ParsingException } from '../../exceptions/ParsingException';

export class StringField extends BaseField {
  public readonly type = 'string';

  constructor(config: OmitConfig<StringField>) {
    super(config);
  }

  public async parse(
    value: unknown,
    relativePath: string
  ): Promise<string | undefined> {
    try {
      const schema = vine.string();
      return await vine.validate({ schema, data: value });
    } catch (error) {
      new ParsingException(this.name, value, relativePath, 'string');
      return undefined;
    }
  }
}
