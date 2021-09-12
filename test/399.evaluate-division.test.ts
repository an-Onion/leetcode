import { calcEquation } from '../src/399.evaluate-division';

describe( 'Evaluate Division', () => {

  it( 'e.g. 1', () => {
    const equations = [['a','b'],['b','c']], values = [2.0,3.0], queries = [['a','c'],['b','a'],['a','e'],['a','a'],['x','x']];
    expect( calcEquation( equations, values, queries ) ).toStrictEqual( [6.0, 0.5, -1.0, 1.0, -1.0 ] );
  } );

  it( 'e.g. 2', () => {
    const equations = [['a','b'],['b','c'],['bc','cd']], values = [1.5,2.5,5.0], queries = [['a','c'],['c','b'],['bc','cd'],['cd','bc']];
    expect( calcEquation( equations, values, queries ) ).toStrictEqual( [3.75000,0.40000,5.00000,0.20000] );
  } );

  it( 'e.g. 3', () => {
    const equations = [['a','b']], values = [0.5], queries = [['a','b'],['b','a'],['a','c'],['x','y']];
    expect( calcEquation( equations, values, queries ) ).toStrictEqual( [0.50000,2.00000,-1.00000,-1.00000] );
  } );

} );
