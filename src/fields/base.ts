import { Document } from '../documents';
import { FieldConfig } from './types';

export abstract class AbstractField {
  public readonly name: string;
  public readonly required?: boolean;
  public readonly validate?: ({ value }: { value: any }) => Boolean;
  public readonly default?: ({
    value,
    document,
  }: {
    value: any;
    document: Document;
  }) => Promise<any>;

  protected constructor(config: FieldConfig) {
    this.name = config.name;
    this.required = config.required;
    this.validate = config.validate;
    this.default = config.default;
  }
}
