import { rotate } from '../src/48.rotate-image';

describe('Rotate Image', () => {

  it('1', () => {
    const matrix =[[1]];
    rotate(matrix);
    expect(matrix).toStrictEqual(
      [[1]]
    );
  });

  it('2', () => {
    const matrix = [[1,2],[3,4]];
    rotate(matrix);
    expect(matrix).toStrictEqual(
      [[3,1],[4,2]]
    );
  });

  it('3', () => {
    const matrix = [[1,2,3],[4,5,6],[7,8,9]];
    rotate(matrix);
    expect(matrix).toStrictEqual(
      [[7,4,1],[8,5,2],[9,6,3]]
    );
  });

  it('4', () => {
    const matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
    rotate(matrix);
    expect(matrix).toStrictEqual(
      [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
    );
  });
});
