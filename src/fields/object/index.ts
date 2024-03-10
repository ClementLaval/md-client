import { Field, FieldConfig } from '../types';
import { BaseField } from '../base';
import { FieldFactory } from '../FieldFactory';
import vine from '@vinejs/vine';
import { StringField } from '../string';

export class ObjectField extends BaseField {
  public readonly type = 'object';
  public readonly parse: (data: any) => Promise<Object>;
  public fields: Field[];

  constructor(config: FieldConfig) {
    super(config);
    this.parse = this._parse;
    this.fields = [
      /**
       * Add _type field that should get the config.name as value
       * Help to detect type of object used in array
       */
      new StringField({
        name: '_type',
        type: 'string',
      }),
      ...this._fields(config),
    ];
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
