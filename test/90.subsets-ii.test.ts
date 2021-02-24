import { subsetsWithDup } from '../src/90.subsets-ii';

describe('Subsets II', () => {

  it('[1,2,2]', () => {
    const output = subsetsWithDup([1,2,2]).sort();
    expect(output)
    .toStrictEqual([[],[1],[1,2],[1,2,2],[2],[2,2]].sort());
  });

  it('[1,2]', () => {
    const output = subsetsWithDup([1,2]).sort();
    expect(output)
    .toStrictEqual([[],[1],[2],[1,2]].sort());
  });

  it('[2,2]', () => {
    const output = subsetsWithDup([2,2]).sort();
    expect(output)
    .toStrictEqual([[],[2],[2,2]].sort());
  });

  it('[0]', () => {
    expect(subsetsWithDup([0])).toStrictEqual([[],[0]]);
  });
});
