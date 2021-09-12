import { deleteAndEarn } from '../src/740.delete-and-earn';

describe( 'Delete and Earn', () => {

  it( '[3,4,2]', () => {
    const nums = [3,4,2];
    expect( deleteAndEarn( nums ) ).toBe( 6 );
  } );

  it( '[2,2,3,3,3,4]', () => {
    const nums = [2,2,3,3,3,4];
    expect( deleteAndEarn( nums ) ).toBe( 9 );
  } );

} );
