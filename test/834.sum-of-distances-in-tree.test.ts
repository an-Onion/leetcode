import { sumOfDistancesInTree } from '../src/834.sum-of-distances-in-tree';

describe('Sum of Distances in Tree', () => {

  it('e.g. 1', () => {
    const n = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]];
    expect(sumOfDistancesInTree(n, edges)).toStrictEqual([8,12,6,10,10,10]);
  });

  it('e.g. 2', () => {
    const n = 1, edges = [];
    expect(sumOfDistancesInTree(n, edges)).toStrictEqual([0]);
  });

  it('e.g. 3', () => {
    const n = 2, edges = [[1,0]];
    expect(sumOfDistancesInTree(n, edges)).toStrictEqual([1,1]);
  });
});

