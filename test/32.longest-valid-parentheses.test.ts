import { longestValidParentheses } from '../src/32.longest-valid-parentheses';

describe( 'Longest Valid Parentheses', () => {

  it( '(()', () => {
    expect( longestValidParentheses( '(()' ) ).toBe( 2 );
  } );

  it( '()()', () => {
    expect( longestValidParentheses( '()()' ) ).toBe( 4 );
  } );

  it( ')()())', () => {
    expect( longestValidParentheses( ')()())' ) ).toBe( 4 );
  } );

  it( 'empty', () => {
    expect( longestValidParentheses( '' ) ).toBe( 0 );
  } );
} );
