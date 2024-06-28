import { reorganizeString } from '../src/701-800/767.reorganize-string';

describe( 'Reorganize String', () => {

  it( 'aab', () => {
    const s = 'aab';
    expect( reorganizeString( s ) ).toBe( 'aba' );
  } );

  it( 'aaab', () => {
    const s = 'aaab';
    expect( reorganizeString( s ) ).toBe( '' );
  } );

} );
