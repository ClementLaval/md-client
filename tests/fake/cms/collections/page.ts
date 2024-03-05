import { seo } from '../objects/seo';
import { DocumentConfig } from '../../../../src';
import { heroBanner } from '../sections/heroBanner';

export const page: DocumentConfig = {
  name: 'page',
  path: 'content/pages',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'publishedAt',
      type: 'date',
    },
    {
      name: 'isPublished',
      type: 'boolean',
      default: () => true,
    },
    {
      name: 'views',
      type: 'number',
    },
    {
      name: 'description',
      type: 'richtext',
    },
    {
      name: 'sections',
      type: 'array',
      of: [heroBanner],
    },
    {
      ...seo,
    },
  ],
};
