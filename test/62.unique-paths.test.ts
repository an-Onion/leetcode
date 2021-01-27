import { uniquePaths } from '../src/62.unique-paths';

describe('Unique Paths', () => {

  it('m = 3, n = 7', () => {
    expect(uniquePaths(3,7)).toBe(28);
  });

  it('m = 3, n = 2', () => {
    expect(uniquePaths(3,2)).toBe(3);
  });

});
