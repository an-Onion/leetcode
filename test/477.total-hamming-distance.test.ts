import { totalHammingDistance } from '../src/401-500/477.total-hamming-distance';

describe( 'Total Hamming Distance', () => {

  it( '[4,14,2]', () => {
    expect( totalHammingDistance( [4,14,2] ) ).toBe( 6 );
  } );

  it( '[4,14,4]', () => {
    expect( totalHammingDistance( [4,14,4] ) ).toBe( 4 );
  } );

} );
