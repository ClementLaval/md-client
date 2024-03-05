import { Document } from '../documents';

export abstract class BaseField {
  public readonly name: string;
  public readonly required?: boolean;
  public readonly validate?: ({ value }: { value: any }) => Boolean;
  public readonly default?: ({ document }: { document: Document }) => any;

  protected constructor(config: BaseField) {
    this.name = config.name;
    this.required = config.required;
    this.validate = config.validate;
    this.default = config.default;
  }
}
