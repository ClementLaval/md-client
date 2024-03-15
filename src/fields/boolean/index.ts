import { OmitConfig } from '../types';
import { BaseField } from '../base';
import vine from '@vinejs/vine';
import { ParsingException } from '../../exceptions/ParsingException';

export class BooleanField extends BaseField {
  public readonly type = 'boolean';

  constructor(config: OmitConfig<BooleanField>) {
    super(config);
  }

  public async parse(
    value: unknown,
    relativePath: string
  ): Promise<boolean | undefined> {
    try {
      const schema = vine.boolean();
      return await vine.validate({ schema, data: value });
    } catch (error) {
      new ParsingException(this.name, value, relativePath, 'boolean');
      return undefined;
    }
  }
}
