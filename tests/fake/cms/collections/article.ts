import { DocumentConfig } from '../../../../src';

export const article: DocumentConfig = {
  name: 'article',
  path: 'content/blogs',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'body',
      type: 'richtext',
      isBody: true,
    },
  ],
};
