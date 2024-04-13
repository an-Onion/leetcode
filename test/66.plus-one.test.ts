import { plusOne } from '../src/1-100/66.plus-one';

describe( 'Plus One', () => {
  it( '[1,2,3]', () =>{
    expect( plusOne( [1,2,3] ) ).toStrictEqual( [1,2,4] );
  } );

  it( '[4,3,2,1]', () =>{
    expect( plusOne( [4,3,2,1] ) ).toStrictEqual( [4,3,2,2] );
  } );

  it( '[0]', () =>{
    expect( plusOne( [0] ) ).toStrictEqual( [1] );
  } );

  it( '[9]', () =>{
    expect( plusOne( [9] ) ).toStrictEqual( [1,0] );
  } );
} );
