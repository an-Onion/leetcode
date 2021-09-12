import { longestCommonPrefix } from '../src/14.longest-common-prefix';


describe( 'longest common prefix', () => {

  it( 'fl', () => {
    expect( longestCommonPrefix( ['flower','flow','flight'] ) ).toBe( 'fl' );
  } );

  it( 'lee', () => {
    expect( longestCommonPrefix( ['leets','leetcode','leetc','leedc'] ) ).toBe( 'lee' );
  } );

  it( 'empty', () => {
    expect( longestCommonPrefix( ['dog','racecar','car'] ) ).toBe( '' );
    expect( longestCommonPrefix( ['reflower','flow','flight'] ) ).toBe( '' );
  } );
} );

