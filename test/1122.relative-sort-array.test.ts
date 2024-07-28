import { relativeSortArray } from '../src/1000/1122.relative-sort-array';

describe( 'Relative Sort Array', () => {

  it( 'e.g 1', () => {
    const arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6];
    expect( relativeSortArray( arr1, arr2 ) ).toStrictEqual( [2,2,2,1,4,3,3,9,6,7,19] );
  } );

  it( 'e.g 2', () => {
    const arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6];
    expect( relativeSortArray( arr1, arr2 ) ).toStrictEqual( [22,28,8,6,17,44] );
  } );

} );
