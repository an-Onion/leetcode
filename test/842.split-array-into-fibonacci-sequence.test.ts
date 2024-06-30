import { splitIntoFibonacci } from '../src/801-900/842.split-array-into-fibonacci-sequence';

describe( 'Split Array into Fibonacci Sequence', () => {

  it( '123456579', () => {
    const num = '123456579';
    expect( splitIntoFibonacci( num ) ).toStrictEqual( [123,456,579] );
  } );

  it( '11235813', () => {
    const num = '11235813';
    expect( splitIntoFibonacci( num ) ).toStrictEqual( [1,1,2,3,5,8,13] );
  } );

  it( '112358130', () => {
    const num = '112358130';
    expect( splitIntoFibonacci( num ) ).toStrictEqual( [] );
  } );

  it( '0123', () => {
    const num = '0123';
    expect( splitIntoFibonacci( num ) ).toStrictEqual( [] );
  } );

  it( '1101111', () => {
    const num = '1101111';
    expect( splitIntoFibonacci( num ) ).toStrictEqual( [11,0,11,11] );
  } );

} );

