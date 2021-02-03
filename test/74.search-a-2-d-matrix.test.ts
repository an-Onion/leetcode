import { searchMatrix } from '../src/74.search-a-2-d-matrix';

describe('Search a 2D Matrix', () => {

  it('3', () => {
    const matrix = [[1,3,5,7],[10,11,16,20], [23,30,34,60]];

    expect(searchMatrix(matrix, 3)).toBeTruthy();
  });

  it('10', () => {
    const matrix = [[1,3,5,7],[10,11,16,20], [23,30,34,60]];

    expect(searchMatrix(matrix, 10)).toBeTruthy();
  });

  it('60', () => {
    const matrix = [[1,3,5,7],[10,11,16,20], [23,30,34,60]];

    expect(searchMatrix(matrix, 60)).toBeTruthy();
  });


  it('13', () => {
    const matrix = [[1,3,5,7],[10,11,16,20], [23,30,34,60]];

    expect(searchMatrix(matrix, 13)).toBeFalsy();
  });

  it('31', () => {
    const matrix = [[1,3,5,7],[10,11,16,20], [23,30,34,60]];

    expect(searchMatrix(matrix, 31)).toBeFalsy();
  });

});
