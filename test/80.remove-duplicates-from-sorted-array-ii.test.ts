import { removeDuplicates } from '../src/80.remove-duplicates-from-sorted-array-ii';

describe( 'Remove Duplicates from Sorted Array II', () => {

  it( '[1,1,1,2,2,3]', () => {
    const input = [1,1,1,2,2,3];
    expect( removeDuplicates( input ) ).toBe( 5 );
    expect( input ).toStrictEqual( [1,1,2,2,3] );
  } );

  it( '[0,0,1,1,1,1,2,3,3]', () => {
    const input = [0,0,1,1,1,1,2,3,3];
    expect( removeDuplicates( input ) ).toBe( 7 );
    expect( input ).toStrictEqual( [0,0,1,1,2,3,3] );
  } );

} );
