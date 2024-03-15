import { describe, expect, test } from 'vitest';
import { _3Reference } from '../../../../../src/data/steps/_3Reference';
import { _2Result } from '../_2Config/index.spec';
import { Client, ReferenceField } from '../../../../../src';
import { config } from '../../../../fake/cms/md-client.config';

export const _3Result = [..._2Result].map((item) => {
  if (
    JSON.stringify(item.path) ===
    JSON.stringify(['#page', 'sections', 0, '#heroBanner', 'link'])
  ) {
    return {
      path: ['#page', 'sections', 0, '#heroBanner', 'link'],
      field: new ReferenceField({
        name: 'link',
        type: 'reference',
        to: ['article'],
      }),
      value: {
        _slug: 'article-1',
        _type: 'article',
        body: {
          children: [
            {
              children: [
                {
                  position: {
                    end: {
                      column: 77,
                      line: 2,
                      offset: 77,
                    },
                    start: {
                      column: 1,
                      line: 2,
                      offset: 1,
                    },
                  },
                  type: 'text',
                  value:
                    'Lorem ipsum dolor sit amet sagittis pulvinar sollicitudin aliquam porttitor.',
                },
              ],
              position: {
                end: {
                  column: 77,
                  line: 2,
                  offset: 77,
                },
                start: {
                  column: 1,
                  line: 2,
                  offset: 1,
                },
              },
              type: 'paragraph',
            },
          ],
          position: {
            end: {
              column: 1,
              line: 3,
              offset: 78,
            },
            start: {
              column: 1,
              line: 1,
              offset: 0,
            },
          },
          type: 'root',
        },
        title: 'Article 1',
      },
    };
  }
  return item;
});

describe('_3Reference', () => {
  test('should return article refence and fill main object with collection data', async () => {
    // init Client singleton
    new Client(config);
    expect(await _3Reference(_2Result)).toEqual(_3Result);
  });
});
