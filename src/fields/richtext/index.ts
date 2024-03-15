import { OmitConfig } from '../types';
import { BaseField } from '../base';
import vine from '@vinejs/vine';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { Compatible } from 'vfile';

export class RichtextField extends BaseField {
  public readonly type = 'richtext';
  // select a field to receive body data from md files
  public readonly isBody?: boolean = false;
  public readonly parse: (data: any) => Promise<Object>;

  constructor(config: OmitConfig<RichtextField>) {
    super(config);
    this.isBody = config.isBody;
    this.parse = this._parse;
  }

  private async _parse(data: unknown): Promise<Object> {
    // parse markdown into MAST
    const parsedData = unified()
      .use(remarkParse)
      .parse(data as Compatible);
    const schema = vine.any();

    return await vine.validate({
      schema,
      data: parsedData,
    });
  }
}
