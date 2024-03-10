import { simplifyPath } from '../src/71.simplify-path';

describe( 'Simplify Path', () => {

  it( '/home/', () => {
    expect( simplifyPath( '/home/' ) ).toBe( '/home' );
  } );

  it( '/../', () => {
    expect( simplifyPath( '/../' ) ).toBe( '/' );
  } );

  it( '/home//foo/', () => {
    expect( simplifyPath( '/home//foo/' ) ).toBe( '/home/foo' );
  } );

  it( '/a/./b/../../c/', () => {
    expect( simplifyPath( '/a/./b/../../c/' ) ).toBe( '/c' );
  } );

  it( '/a/.../b/', () => {
    expect( simplifyPath( '/a/.../b/' ) ).toBe( '/a/.../b' );
  } );
} );
