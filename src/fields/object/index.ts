import { Field, FieldConfig } from '../types';
import { BaseField } from '../base';
import { FieldFactory } from '../FieldFactory';
import vine from '@vinejs/vine';

export class ObjectField extends BaseField {
  public readonly type = 'object';
  public readonly parse: (data: any) => Promise<Object>;
  public fields: FieldConfig[];

  constructor(config: FieldConfig) {
    super(config);
    this.parse = this._parse;
    this.fields = this._fields(config);
  }

  private async _parse(data: any): Promise<Object> {
    const schema = vine.record(vine.any());
    return await vine.validate({ schema, data });
  }

  private _fields(config: FieldConfig): Field[] {
    return config.type === 'object'
      ? config.fields.map((field) => FieldFactory.build(field))
      : [];
  }
}
