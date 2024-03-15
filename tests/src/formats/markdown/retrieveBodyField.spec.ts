import { describe, expect, test } from 'vitest';
import { retrieveBodyField } from '../../../../src/formats/markdown/retrieveBodyField';
import { FieldConfig } from '../../../../src';

describe('retrieveBodyField', () => {
  test('should return empty array', () => {
    const fields: FieldConfig[] = [
      {
        name: 'title',
        type: 'string',
      },
      {
        name: 'description',
        type: 'richtext',
      },
    ];
    const result = retrieveBodyField(fields);

    expect(result).toEqual([]);
  });

  test('should return one field', () => {
    const fields: FieldConfig[] = [
      {
        name: 'title',
        type: 'string',
      },
      {
        name: 'description',
        type: 'richtext',
      },
      {
        name: 'content',
        type: 'richtext',
        isBody: true,
      },
    ];
    const result = retrieveBodyField(fields);

    expect(result).toEqual([
      {
        name: 'content',
        type: 'richtext',
        isBody: true,
      },
    ]);
  });

  test('should return boths fields with nested one', () => {
    const fields: FieldConfig[] = [
      {
        name: 'title',
        type: 'string',
      },
      {
        name: 'description',
        type: 'richtext',
      },
      {
        name: 'content',
        type: 'richtext',
        isBody: true,
      },
      {
        name: 'details',
        type: 'object',
        fields: [
          {
            name: 'info',
            type: 'richtext',
            isBody: true,
          },
        ],
      },
    ];
    const result = retrieveBodyField(fields);

    expect(result).toEqual([
      {
        name: 'content',
        type: 'richtext',
        isBody: true,
      },
      {
        name: 'info',
        type: 'richtext',
        isBody: true,
      },
    ]);
  });
});
