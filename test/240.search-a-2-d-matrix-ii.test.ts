import { searchMatrix } from '../src/240.search-a-2-d-matrix-ii';

describe('Search a 2D Matrix II', () => {

  it('Example 1', () => {
    const matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5;
    expect(searchMatrix(matrix, target)).toBeTruthy();
  });

  it('Example 2', () => {
    const matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20;
    expect(searchMatrix(matrix, target)).toBeFalsy();
  });

  it('Example 3', () => {
    const matrix = [[1,3,5,7,9],[2,4,6,8,10],[11,13,15,17,19],[12,14,16,18,20],[21,22,23,24,25]], target = 13;
    expect(searchMatrix(matrix, target)).toBeTruthy();
  });

  it('Example 4', () => {
    const matrix = [[5],[6]], target = 5;
    expect(searchMatrix(matrix, target)).toBeTruthy();
  });
});
