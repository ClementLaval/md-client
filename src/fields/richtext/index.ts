import { OmitConfig } from '../types';
import { BaseField } from '../base';
import vine from '@vinejs/vine';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { Compatible } from 'vfile';
import { ParsingException } from '../../exceptions/ParsingException';

export class RichtextField extends BaseField {
  public readonly type = 'richtext';
  // select a field to receive body data from md files
  public readonly isBody?: boolean = false;

  constructor(config: OmitConfig<RichtextField>) {
    super(config);
    this.isBody = config.isBody;
  }

  public async parse(
    value: unknown,
    relativePath: string
  ): Promise<string | undefined> {
    try {
      // parse markdown into MAST
      const parsedData = unified()
        .use(remarkParse)
        .parse(value as Compatible);
      const schema = vine.any();

      return await vine.validate({
        schema,
        data: parsedData,
      });
    } catch (error) {
      new ParsingException(this.name, value, relativePath, 'richtext');
      return undefined;
    }
  }
}
