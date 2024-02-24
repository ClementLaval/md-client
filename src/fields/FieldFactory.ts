import { Field, FieldConfig } from './types';
import { FIELDS } from './index';

export class FieldFactory {
  public static build(field: FieldConfig): Field {
    const builder = FIELDS[field.type];

    if (!builder) {
      throw new Error(`Unknown field type: '${field.type}' (${field.name})`);
    }

    return new builder(field);
  }
}
