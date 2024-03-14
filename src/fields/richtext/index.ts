import { FieldConfig } from '../types';
import { BaseField } from '../base';
import vine from '@vinejs/vine';
import { unified } from 'unified';
import remarkParse from 'remark-parse';

export class RichtextField extends BaseField {
  public readonly type = 'richtext';
  public readonly parse: (data: any) => Promise<Object>;

  constructor(config: FieldConfig) {
    super(config);
    this.parse = this._parse;
  }

  private async _parse(data: any): Promise<Object> {
    // parse markdown into MAST
    const parsedData = unified().use(remarkParse).parse(data);
    const schema = vine.any();

    return await vine.validate({
      schema,
      data: parsedData,
    });
  }
}
