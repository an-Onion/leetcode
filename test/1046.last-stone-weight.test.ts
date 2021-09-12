import { lastStoneWeight } from '../src/1046.last-stone-weight';

describe( 'Last Stone Weight', () => {

  it( '[2,7,4,1,8,1]', () => {
    expect( lastStoneWeight( [2,7,4,1,8,1] ) ).toBe( 1 );
  } );

  it( '[1,1]', () => {
    expect( lastStoneWeight( [1,1] ) ).toBe( 0 );
  } );

} );
