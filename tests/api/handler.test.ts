import {describe, expect, test} from '@jest/globals';
import { hello } from '../../api/handler';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    const foo = 1 + 2;
    expect(foo).toBe(3);
  });
});
