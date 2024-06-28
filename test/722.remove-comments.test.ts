import { removeComments } from '../src/701-800/722.remove-comments';

describe( 'Remove Comments', () => {

  it( 'e.g. 1', () => {
    const source = ['/*Test program */', 'int main()', '{ ', '  // variable declaration ', 'int a, b, c;', '/* This is a test', '   multiline  ', '   comment for ', '   testing */', 'a = b + c;', '}'];
    const output = ['int main()','{ ','  ','int a, b, c;','a = b + c;','}'];
    expect( removeComments( source ) ).toStrictEqual( output );
  } );

  it( 'e.g. 2', () => {
    const source = ['a/*comment', 'line', 'more_comment*/b'];
    const output = ['ab'];
    expect( removeComments( source ) ).toStrictEqual( output );
  } );

} );
