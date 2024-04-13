import { singleNumber } from '../src/101-200/136.single-number';

describe( 'Single Number', () => {

  it( '[2,2,1]', () => {
    expect( singleNumber( [2,2,1] ) ).toBe( 1 );
  } );

  it( '[4,1,2,1,2]', () => {
    expect( singleNumber( [4,1,2,1,2] ) ).toBe( 4 );
  } );

  it( '[1]', () => {
    expect( singleNumber( [1] ) ).toBe( 1 );
  } );

} );
