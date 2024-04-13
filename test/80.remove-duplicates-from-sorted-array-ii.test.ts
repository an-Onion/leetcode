import { removeDuplicates } from '../src/1-100/80.remove-duplicates-from-sorted-array-ii';

describe( 'Remove Duplicates from Sorted Array II', () => {

  it( '[1,1,1,2,2,3]', () => {
    const input = [1,1,1,2,2,3];
    const k = removeDuplicates( input );
    expect( k ).toBe( 5 );
    input.length = k;
    expect( input ).toStrictEqual( [1,1,2,2,3] );
  } );

  it( '[0,0,1,1,1,1,2,3,3]', () => {
    const input = [0,0,1,1,1,1,2,3,3];
    const k = removeDuplicates( input );
    expect( k ).toBe( 7 );
    input.length = k;
    expect( input ).toStrictEqual( [0,0,1,1,2,3,3] );
  } );

} );
