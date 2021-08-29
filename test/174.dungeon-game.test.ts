import { calculateMinimumHP } from '../src/174.dungeon-game';

describe('Dungeon Game', () => {

  it('e.g. 1', () => {
    const dungeon = [[-2,-3,3],[-5,-10,1],[10,30,-5]];
    expect(calculateMinimumHP(dungeon)).toBe(7);
  });

  it('e.g. 2', () => {
    const dungeon = [[0]];
    expect(calculateMinimumHP(dungeon)).toBe(1);
  });

});
