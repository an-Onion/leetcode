import { sortColors } from '../src/75.sort-colors';

describe( 'Sort Colors', () => {

  it( '[2,0,2,1,1,0]', () => {
    const nums = [2,0,2,1,1,0];
    sortColors( nums );
    expect( nums ).toStrictEqual( [0,0,1,1,2,2] );
  } );

  it( '[2,0,1]', () => {
    const nums = [2,0,1];
    sortColors( nums );
    expect( nums ).toStrictEqual( [0,1,2] );
  } );

  it( '[0,0,1]', () => {
    const nums = [0,0,1];
    sortColors( nums );
    expect( nums ).toStrictEqual( [0,0,1] );
  } );

} );
