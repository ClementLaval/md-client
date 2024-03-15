import { Logger } from '../utilities/logger';

export class ParsingException {
  constructor(
    private fieldName: string,
    private value: unknown,
    private relativePath: string,
    private exceptedType: string
  ) {
    this.execute();
  }

  private execute() {
    Logger.error({
      name: 'PARSING',
      msg: `Unexpected value for field "${this.fieldName}" in ${this.relativePath}. Received: ${this.value} of type ${typeof this.value}, expected type "${this.exceptedType}".
`,
    });
  }
}
