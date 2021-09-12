import { maxTurbulenceSize } from '../src/978.longest-turbulent-subarray';

describe( 'Longest Turbulent Subarray', () => {

  it( 'e.g. 1', () => {
    const arr = [9,4,2,10,7,8,8,1,9];
    expect( maxTurbulenceSize( arr ) ).toBe( 5 );
  } );

  it( 'e.g. 2', () => {
    const arr = [4,8,12,16];
    expect( maxTurbulenceSize( arr ) ).toBe( 2 );
  } );

  it( 'e.g. 3', () => {
    const arr = [100];
    expect( maxTurbulenceSize( arr ) ).toBe( 1 );
  } );

} );
