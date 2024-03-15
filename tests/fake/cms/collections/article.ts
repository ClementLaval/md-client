import { DocumentConfig } from '../../../../src';

export const article: DocumentConfig = {
  name: 'article',
  path: 'tests/fake/content/blogs',
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
