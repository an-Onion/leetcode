import { isNStraightHand } from '../src/846.hand-of-straights';

describe( 'Hand of Straights', () => {

  it( 'hand = [1,2,3,6,2,3,4,7,8], groupSize = 3', ()=>{
    const hand = [1,2,3,6,2,3,4,7,8], groupSize = 3;
    expect( isNStraightHand( hand, groupSize ) ).toBeTruthy();
  } );

  it( 'hand = [8,8,9,7,7,7,6,7,10,6], groupSize = 2', ()=>{
    const hand = [8,8,9,7,7,7,6,7,10,6], groupSize = 2;
    expect( isNStraightHand( hand, groupSize ) ).toBeTruthy();
  } );

  it( 'hand = [1,2,3,4,5], groupSize = 4', ()=>{
    const hand = [1,2,3,4,5], groupSize = 4;
    expect( isNStraightHand( hand, groupSize ) ).toBeFalsy();
  } );

  it( 'hand = [7,6,9,7,884543359,387569973,6,8,9,8], groupSize = 4', ()=>{
    const hand = [7,6,9,7,884543359,387569973,6,8,9,8], groupSize = 4;
    expect( isNStraightHand( hand, groupSize ) ).toBeFalsy();
  } );

  it( 'hand = [7,6,9,7,884543359,387569973,6,8,9,8], groupSize = 4', ()=>{
    const hand = [7,6,9,7,884543359,387569973,6,8,9,8], groupSize = 4;
    expect( isNStraightHand( hand, groupSize ) ).toBeFalsy();
  } );

} );
