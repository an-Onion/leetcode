import { isIdealPermutation } from '../src/701-800/775.global-and-local-inversions';

describe( 'Global and Local Inversions', () => {
  it( 'e.g. 1', () => {
    const nums = [1,0,2];
    expect( isIdealPermutation( nums ) ).toBeTruthy();
  } );

  it( 'e.g. 2', () => {
    const nums = [1,2,0];
    expect( isIdealPermutation( nums ) ).toBeFalsy();
  } );

} );
