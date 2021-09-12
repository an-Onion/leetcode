import { totalFruit } from '../src/904.fruit-into-baskets';

describe( 'Fruit Into Baskets', () => {

  it( '[0]', () => {
    expect( totalFruit( [0] ) ).toBe( 1 );
  } );

  it( '[1,1,1]', () => {
    expect( totalFruit( [1,1,1] ) ).toBe( 3 );
  } );

  it( '[1,2,1]', () => {
    expect( totalFruit( [1,2,1] ) ).toBe( 3 );
  } );

  it( '[0,1,2,2]', () => {
    expect( totalFruit( [0,1,2,2] ) ).toBe( 3 );
  } );

  it( '[1,2,3,2,2]', () => {
    expect( totalFruit( [1,2,3,2,2] ) ).toBe( 4 );
  } );

  it( '[3,3,3,1,2,1,1,2,3,3,4]', () => {
    expect( totalFruit( [3,3,3,1,2,1,1,2,3,3,4] ) ).toBe( 5 );
  } );

} );
