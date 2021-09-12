import { longestPalindrome } from '../src/5.longest-palindromic-substring';

describe( 'Longest Palindromic Substring', () => {
  it( 'babad', () => {
    expect( longestPalindrome( 'babad' ) ).toBe( 'bab' );
  } );

  it( 'cbbd', () => {
    expect( longestPalindrome( 'cbbd' ) ).toBe( 'bb' );
  } );

  it( 'ac', () => {
    expect( longestPalindrome( 'ac' ) ).toBe( 'a' );
  } );

  it( 'a', () => {
    expect( longestPalindrome( 'a' ) ).toBe( 'a' );
  } );

  it( 'aa', () => {
    expect( longestPalindrome( 'aa' ) ).toBe( 'aa' );
  } );

  it( 'aaa', () => {
    expect( longestPalindrome( 'aaa' ) ).toBe( 'aaa' );
  } );

  it( 'aaaa', () => {
    expect( longestPalindrome( 'aaaa' ) ).toBe( 'aaaa' );
  } );

  it( 'aaaaa', () => {
    expect( longestPalindrome( 'aaaaa' ) ).toBe( 'aaaaa' );
  } );

  it( 'aacabdkacaa', () => {
    expect( longestPalindrome( 'aacabdkacaa' ) ).toBe( 'aca' );
  } );
} );
