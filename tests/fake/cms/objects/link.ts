import { FieldConfig } from '../../../../src';

export const link: FieldConfig = {
  name: 'link',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'linkType',
      type: 'string',
    },
    {
      name: 'document',
      type: 'reference',
      to: ['page', 'article'],
    },
    {
      name: 'url',
      type: 'string',
    },
    {
      name: 'newTab',
      type: 'boolean',
    },
    {
      name: 'noFollow',
      type: 'boolean',
    },
  ],
};
