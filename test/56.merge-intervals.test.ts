import { merge } from '../src/56.merge-intervals';

describe('Merge Intervals', () => {
  it('[[1,3],[2,6],[8,10],[15,18]]', () => {
    expect(
      merge([[1,3],[2,6],[8,10],[15,18]])
    )
    .toStrictEqual(
      [[1,6],[8,10],[15,18]]
    );
  });

  it('[[1,4],[4,5]]', () => {
    expect(
      merge([[1,4],[4,5]])
    )
    .toStrictEqual(
      [[1,5]]
    );
  });

  it('[[1,4],[2,3]]', () => {
    expect(
      merge([[1,4],[2,3]])
    )
    .toStrictEqual(
      [[1,4]]
    );
  });
});
