import { removeStones } from '../src/947.most-stones-removed-with-same-row-or-column';

describe('Most Stones Removed with Same Row or Column', () => {

  it('e.g. 1', () => {
    const stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]];
    expect(removeStones(stones)).toBe(5);
  });

  it('e.g. 2', () => {
    const stones = [[0,0],[0,2],[1,1],[2,0],[2,2]];
    expect(removeStones(stones)).toBe(3);
  });

  it('e.g. 3', () => {
    const stones = [[0,0]];
    expect(removeStones(stones)).toBe(0);
  });

});
