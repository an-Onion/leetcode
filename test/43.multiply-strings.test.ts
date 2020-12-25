import { multiply } from '../src/43.multiply-strings';

describe('Multiply Strings', () => {

  it('2 * 3', () => {
    expect(multiply('2', '3')).toBe('6');
  });

  it('123 * 456', () => {
    expect(multiply('123', '456')).toBe('56088');
  });
});
