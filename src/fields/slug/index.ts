import { OmitConfig } from '../types';
import { BaseField } from '../base';
import vine from '@vinejs/vine';
import { ParsingException } from '../../exceptions/ParsingException';

export class SlugField extends BaseField {
  public readonly type = 'slug';

  constructor(config: OmitConfig<SlugField>) {
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
      new ParsingException(this.name, value, relativePath, 'slug');
      return undefined;
    }
  }
}
