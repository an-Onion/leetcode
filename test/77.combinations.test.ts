import { combine } from '../src/77.combinations';

describe('Combinations',() => {

  it('4,2', () => {
    const output = combine(4,2).sort();
    expect(output).toStrictEqual(
      [
        [2,4],
        [3,4],
        [2,3],
        [1,2],
        [1,3],
        [1,4],
      ].sort()
    );
  });

  it('1,1', () => {
    const output = combine(1,1).sort();
    expect(output).toStrictEqual([[1]]);
  });

});
