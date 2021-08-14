import { combinationSum2 } from '../src/40.combination-sum-ii';

describe('Combination Sum II', () => {

  it('candidates = [10,1,2,7,6,1,5], target = 8', () => {
    expect(combinationSum2([10,1,2,7,6,1,5], 8).sort())
    .toStrictEqual(
      [
        [6,1,1],
        [5,2,1],
        [7, 1],
        [6, 2],
      ].sort()
    );
  });


  it('candidates = [2,5,2,1,2], target = 5', () => {
    expect(combinationSum2([2,5,2,1,2], 5).sort())
    .toStrictEqual(
      [
        [2,2,1],
        [5],
      ].sort()
    );
  });
});
