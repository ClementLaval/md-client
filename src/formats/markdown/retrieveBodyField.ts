import { FieldConfig } from '../../fields/types';
import { DocumentConfig } from '../../documents/types';

export function retrieveBodyField(
  fields: DocumentConfig['fields']
): FieldConfig[] {
  return fields.reduce((acc: FieldConfig[], field) => {
    if (field.type === 'array') {
      acc.push(...field.of.reduce(retrieveBodyField, field.of));
    }

    if (field.type === 'object') {
      acc.push(
        ...Object.values(field.fields).reduce(retrieveBodyField, field.fields)
      );
    }

    if (field.type === 'richtext' && field.isBody === true) {
      acc.push(field);
    }

    return acc;
  }, []);
}
