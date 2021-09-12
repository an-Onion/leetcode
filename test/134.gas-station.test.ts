import { canCompleteCircuit } from '../src/134.gas-station';

describe( 'Gas Station', () => {

  it( 'gas = [1,2,3,4,5], cost = [3,4,5,1,2]', () => {
    expect( canCompleteCircuit( [1,2,3,4,5], [3,4,5,1,2] ) ).toBe( 3 );
  } );

  it( 'gas = [2,3,4], cost = [3,4,3]', () => {
    expect( canCompleteCircuit( [2,3,4], [3,4,3] ) ).toBe( -1 );
  } );

  it( 'gas = [2], cost = [3]', () => {
    expect( canCompleteCircuit( [2], [3] ) ).toBe( -1 );
  } );

  it( 'gas = [2], cost = [2]', () => {
    expect( canCompleteCircuit( [2], [2] ) ).toBe( 0 );
  } );


  it( 'gas = [5,1,2,3,4], cost = [4,4,1,5,1]', () => {
    expect( canCompleteCircuit( [5,1,2,3,4], [4,4,1,5,1] ) ).toBe( 4 );
  } );

  it( 'gas = [4,5,2,6,5,3], cost = [3,2,7,3,2,9]', () => {
    expect( canCompleteCircuit( [4,5,2,6,5,3], [3,2,7,3,2,9] ) ).toBe( -1 );
  } );


  it( 'gas = [3,1,1], cost = [1,2,2]', () => {
    expect( canCompleteCircuit( [3,1,1], [1,2,2] ) ).toBe( 0 );
  } );

} );
