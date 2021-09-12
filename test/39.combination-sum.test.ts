import { combinationSum } from '../src/39.combination-sum';

describe( 'Combination Sum', () => {

  it( 'candidates = [2], target = 1', () => {
    expect( combinationSum( [2], 1 ) ).toStrictEqual( [] );
  } );

  it( 'candidates = [1], target = 1', () => {
    expect( combinationSum( [1], 1 ) ).toStrictEqual( [[1]] );
  } );

  it( 'candidates = [1], target = 2', () => {
    expect( combinationSum( [1], 2 ) ).toStrictEqual( [[1,1]] );
  } );

  it( 'candidates = [2,3,6,7], target = 7', () => {
    expect( combinationSum( [2,3,6,7], 7 ) ).toStrictEqual( [[3,2,2],[7]] );
  } );

  it( 'candidates = [2,3,5], target = 8', () => {
    expect( combinationSum( [2,3,5], 8 ) ).toStrictEqual( [[2,2,2,2],[3,3,2],[5,3]] );
  } );



} );
