import { lengthOfLastWord } from '../src/58.length-of-last-word';

describe( 'Length of Last Word', () => {
  it( 'Hello World', ()=>{
    expect( lengthOfLastWord( 'Hello World' ) ).toBe( 5 );
  } );

  it( ' ', ()=>{
    expect( lengthOfLastWord( ' ' ) ).toBe( 0 );
  } );


  it( 'a ', ()=>{
    expect( lengthOfLastWord( 'a ' ) ).toBe( 1 );
  } );

  it( 'the moon  ', ()=>{
    expect( lengthOfLastWord( 'the moon  ' ) ).toBe( 4 );
  } );
} );
