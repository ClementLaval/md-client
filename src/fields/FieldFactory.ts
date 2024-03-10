import { Field, FieldConfig } from './types';
import { FIELDS } from './index';

export class FieldFactory {
  public static build(field: FieldConfig): Field {
    const FieldClass = FIELDS[field.type];

    if (!FieldClass) {
      throw new Error(`Unknown field type: '${field.type}' (${field.name})`);
    }

    return new FieldClass(field);
  }
}
