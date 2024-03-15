import { FieldConfig, OmitConfig } from '../types';
import { BaseField } from '../base';
import { Document } from '../../documents';
import vine from '@vinejs/vine';
import { ParsingException } from '../../exceptions/ParsingException';

export type DocReference<T> = T | string;

export class ReferenceField extends BaseField {
  public readonly type = 'reference';
  public to: Document['name'][];

  constructor(config: OmitConfig<ReferenceField>) {
    super(config);
    this.to = this._to(config);
  }

  public async parse(
    value: unknown,
    relativePath: string
  ): Promise<string | undefined> {
    try {
      const schema = vine.any();
      return await vine.validate({ schema, data: value });
    } catch (error) {
      new ParsingException(this.name, value, relativePath, 'reference');
      return undefined;
    }
  }

  private _to(config: FieldConfig): string[] {
    return config.type === 'reference' ? config.to : [];
  }
}
