import { FieldConfig } from '../../../../src';
import { image } from '../objects/image';

export const heroBanner: FieldConfig = {
  name: 'heroBanner',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      ...image({ name: 'coverImage' }),
    },
    {
      name: 'link',
      type: 'reference',
      to: ['article'],
    },
  ],
};
