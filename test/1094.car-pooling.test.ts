import { carPooling } from '../src/1094.car-pooling';

describe( 'Car Pooling', () => {

  it( 'trips = [[2,1,5],[3,3,7]], capacity = 4', () => {
    const trips = [[2,1,5],[3,3,7]], capacity = 4;
    expect( carPooling( trips, capacity ) ).toBeFalsy();
  } );

  it( 'trips = [[2,1,5],[3,3,7]], capacity = 5', () => {
    const trips = [[2,1,5],[3,3,7]], capacity = 5;
    expect( carPooling( trips, capacity ) ).toBeTruthy();
  } );

  it( 'trips = [[2,1,5],[3,5,7]], capacity = 3', () => {
    const trips = [[2,1,5],[3,5,7]], capacity = 3;
    expect( carPooling( trips, capacity ) ).toBeTruthy();
  } );

  it( 'trips = [[3,2,7],[3,7,9],[8,3,9]], capacity = 11', () => {
    const trips = [[3,2,7],[3,7,9],[8,3,9]], capacity = 11;
    expect( carPooling( trips, capacity ) ).toBeTruthy();
  } );
} );
