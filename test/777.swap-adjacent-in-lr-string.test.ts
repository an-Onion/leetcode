import { canTransform } from '../src/701-800/777.swap-adjacent-in-lr-string';

describe( 'Swap Adjacent in LR String', () => {

  it( 'e.g. 1', () => {
    const start = 'RXXLRXRXL', end = 'XRLXXRRLX';
    expect( canTransform( start, end ) ).toBeTruthy();
  } );

  it( 'e.g. 2', () => {
    const start = 'X', end = 'L';
    expect( canTransform( start, end ) ).toBeFalsy();
  } );

  it( 'e.g. 3', () => {
    const start = 'LLR', end = 'RRL';
    expect( canTransform( start, end ) ).toBeFalsy();
  } );

  it( 'e.g. 4', () => {
    const start = 'XL', end = 'LX';
    expect( canTransform( start, end ) ).toBeTruthy();
  } );

  it( 'e.g. 2', () => {
    const start = 'XLLR', end = 'LXLX';
    expect( canTransform( start, end ) ).toBeFalsy();
  } );

} );
