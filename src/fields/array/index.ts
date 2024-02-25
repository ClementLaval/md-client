import { Field, FieldConfig } from '../types';
import { BaseField } from '../base';
import { FieldFactory } from '../FieldFactory';
import vine from '@vinejs/vine';

export class ArrayField extends BaseField {
  public readonly type = 'array';
  public readonly parse: (data: any) => Promise<any[]>;
  public readonly of: Field[];

  constructor(config: FieldConfig) {
    super(config);
    this.parse = this._parse;
    this.of = this._of(config);
  }

  private async _parse(data: any): Promise<any[]> {
    const schema = vine.array(vine.any());
    return await vine.validate({ schema, data });
  }

  private _of(config: FieldConfig): Field[] {
    return config.type === 'array'
      ? config.of.map((field) => FieldFactory.build(field))
      : [];
  }
}
