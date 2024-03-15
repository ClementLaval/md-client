import { OmitConfig } from '../types';
import { BaseField } from '../base';
import vine from '@vinejs/vine';
import { ParsingException } from '../../exceptions/ParsingException';

export class NumberField extends BaseField {
  public readonly type = 'number';

  constructor(config: OmitConfig<NumberField>) {
    super(config);
  }

  public async parse(
    value: unknown,
    relativePath: string
  ): Promise<number | undefined> {
    try {
      const schema = vine.number();
      return await vine.validate({ schema, data: value });
    } catch (error) {
      new ParsingException(this.name, value, relativePath, 'number');
      return undefined;
    }
  }
}
