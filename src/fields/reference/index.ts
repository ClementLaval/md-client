import { FieldConfig, OmitConfig } from '../types';
import { BaseField } from '../base';
import { Document } from '../../documents';
import vine from '@vinejs/vine';

export type DocReference<T> = T | string;

export class ReferenceField extends BaseField {
  public readonly type = 'reference';
  public readonly parse: (data: any) => Promise<string>;
  public to: Document['name'][];

  constructor(config: OmitConfig<ReferenceField>) {
    super(config);
    this.parse = this._parse;
    this.to = this._to(config);
  }

  private async _parse(data: unknown): Promise<string> {
    const schema = vine.any();
    return await vine.validate({ schema, data });
  }

  private _to(config: FieldConfig): string[] {
    return config.type === 'reference' ? config.to : [];
  }
}
