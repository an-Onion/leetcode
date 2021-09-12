import { removeDuplicates } from '../src/26.remove-duplicates-from-sorted-array';


describe( 'Remove Duplicates from Sorted Array', () => {
  it( '[1,1,2] => [1,2]', () => {
    const nums = [1,1,2];
    const len = removeDuplicates( nums );
    nums.length = len;
    expect( len ).toBe( 2 );
    expect( nums ).toStrictEqual( [1,2] );
  } );

  it( '[0,0,1,1,1,2,2,3,3,4] => [0,1,2,3,4]', () => {
    const nums = [0,0,1,1,1,2,2,3,3,4];
    const len = removeDuplicates( nums );
    nums.length = len;
    expect( len ).toBe( 5 );
    expect( nums ).toStrictEqual( [0,1,2,3,4] );
  } );
} );
