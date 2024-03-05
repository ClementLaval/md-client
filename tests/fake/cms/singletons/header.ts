import { DocumentConfig } from '../../../../src';
import { image } from '../objects/image';
import { link } from '../objects/link';

export const header: DocumentConfig = {
  name: 'header',
  path: 'content/singletons',

  fields: [
    {
      ...image({ name: 'logo' }),
    },
    {
      name: 'navigation',
      type: 'array',
      of: [
        {
          ...link,
        },
      ],
    },
  ],
};
