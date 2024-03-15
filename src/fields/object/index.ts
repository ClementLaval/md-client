import { Field, FieldConfig, OmitConfig } from '../types';
import { BaseField } from '../base';
import { FieldFactory } from '../FieldFactory';
import vine from '@vinejs/vine';
import { StringField } from '../string';
import { ParsingException } from '../../exceptions/ParsingException';

export class ObjectField extends BaseField {
  public readonly type = 'object';
  public fields: FieldConfig[];

  constructor(config: OmitConfig<ObjectField>) {
    super(config);
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

  public async parse(
    value: unknown,
    relativePath: string
  ): Promise<object | undefined> {
    try {
      const schema = vine.record(vine.any());
      return await vine.validate({ schema, data: value });
    } catch (error) {
      new ParsingException(this.name, value, relativePath, 'object');
      return undefined;
    }
  }

  private _fields(config: OmitConfig<ObjectField>): Field[] {
    return config.type === 'object'
      ? config.fields.map((field) => FieldFactory.build(field))
      : [];
  }
}
