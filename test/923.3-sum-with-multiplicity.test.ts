import { threeSumMulti } from '../src/901-999/923.3-sum-with-multiplicity';

describe( '3Sum With Multiplicity' ,() => {

  it( 'e.g. 1', () => {
    const arr = [1,1,2,2,3,3,4,4,5,5], target = 8;
    expect( threeSumMulti( arr, target ) ).toBe( 20 );
  } );

  it( 'e.g. 2', () => {
    const arr = [1,1,2,2,2,2], target = 5;
    expect( threeSumMulti( arr, target ) ).toBe( 12 );
  } );

} );
