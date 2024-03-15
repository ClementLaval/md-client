import { Field, FieldConfig, OmitConfig } from '../types';
import { BaseField } from '../base';
import { FieldFactory } from '../FieldFactory';
import vine from '@vinejs/vine';
import { ParsingException } from '../../exceptions/ParsingException';

export class ArrayField extends BaseField {
  public readonly type = 'array';
  public readonly of: FieldConfig[];

  constructor(config: OmitConfig<ArrayField>) {
    super(config);
    this.of = this._of(config);
  }

  public async parse(
    value: unknown,
    relativePath: string
  ): Promise<any[] | undefined> {
    try {
      const schema = vine.array(vine.any());
      return await vine.validate({ schema, data: value });
    } catch (error) {
      new ParsingException(this.name, value, relativePath, 'array');
      return undefined;
    }
  }

  private _of(config: FieldConfig): Field[] {
    return config.type === 'array'
      ? config.of.map((field) => FieldFactory.build(field))
      : [];
  }
}
