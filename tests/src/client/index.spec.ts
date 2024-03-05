import { config } from '../../fake/cms/md-client.config';
import { describe, expect, test } from 'vitest';
import { Client } from '../../../src';

describe('client', () => {
  test('should init client with all config', () => {
    const client = new Client(config);

    expect(client.config).toEqual(config);
  });
});
