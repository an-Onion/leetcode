import { permute } from '../src/46.permutations';

describe('Permutations', () => {

  it('[1,2,3]', () => {
    expect(permute([1,2,3]).sort()).toStrictEqual(
      [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]].sort()
    );
  });

  it('[0,1]', () => {
    expect(permute([0,1]).sort()).toStrictEqual(
      [[0,1],[1,0]].sort()
    );
  });

  it('[1]', () => {
    expect(permute([1]).sort()).toStrictEqual(
      [[1]].sort()
    );
  });

});
