import { expressiveWords } from '../src/801-900/809.expressive-words';

describe( 'Expressive Words', () => {

  it( 'e.g. 1', () => {
    const s = 'heeellooo', words = ['hello', 'hi', 'helo'];
    expect( expressiveWords( s, words ) ).toBe( 1 );
  } );

  it( 'e.g. 2', () => {
    const s = 'zzzzzyyyyy', words = ['zzyy','zy','zyy'];
    expect( expressiveWords( s, words ) ).toBe( 3 );
  } );

  it( 'e.g. 3', () => {
    const s = 'dddiiiinnssssssoooo', words = ['dinnssoo','ddinso','ddiinnso','ddiinnssoo','ddiinso','dinsoo','ddiinsso','dinssoo','dinso'];
    expect( expressiveWords( s, words ) ).toBe( 3 );
  } );

} );
