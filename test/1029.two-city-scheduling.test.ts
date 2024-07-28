import { twoCitySchedCost } from '../src/1000/1029.two-city-scheduling';

describe( 'Two City Scheduling', () => {

  it( '[[10,20],[30,200],[400,50],[30,20]]', () => {
    const costs = [[10,20],[30,200],[400,50],[30,20]];
    expect( twoCitySchedCost( costs ) ).toBe( 110 );
  } );

  it( '[[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]', () => {
    const costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]];
    expect( twoCitySchedCost( costs ) ).toBe( 1859 );
  } );

  it( '[[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]', () => {
    const costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]];
    expect( twoCitySchedCost( costs ) ).toBe( 3086 );
  } );

} );

