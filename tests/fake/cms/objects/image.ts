import { BaseField } from '../../../../src/fields/base';
import { FieldConfig } from '../../../../src';

export const image = ({
  name = 'image',
}: Partial<BaseField> = {}): FieldConfig => ({
  name: 'image',
  type: 'object',
  fields: [
    {
      name: 'src',
      type: 'string',
    },
    {
      name: 'alt',
      type: 'string',
    },
  ],
});
