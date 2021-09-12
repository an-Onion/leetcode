import { letterCombinations } from '../src/17.letter-combinations-of-a-phone-number';


describe( 'Letter Combinations of a Phone Number', () => {

  it( '23', () => {
    expect( letterCombinations( '23' ).sort() ).toStrictEqual(
      ['ad','ae','af','bd','be','bf','cd','ce','cf'].sort()
    );
  } );

  it( 'empty', () => {
    expect( letterCombinations( '' ) ).toStrictEqual( [] );
  } );

  it( '2', () => {
    expect( letterCombinations( '2' ) ).toStrictEqual( ['a','b','c'] );
  } );
} );
