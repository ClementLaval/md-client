import { FieldConfig } from '../../../../src';

export const seo: FieldConfig = {
  name: 'seo',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      required: true,
    },
    {
      name: 'description',
      type: 'string',
    },
    {
      name: 'noIndex',
      type: 'boolean',
      default: () => false,
    },
    {
      name: 'keywords',
      type: 'array',
      of: [
        {
          name: 'keyword',
          type: 'string',
        },
      ],
    },
  ],
};
