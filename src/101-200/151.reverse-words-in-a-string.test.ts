function reverseWords( s: string ): string {
    return s.trim().split( /\s+/ ).reverse().join( ' ' );
}

describe( '151. reverse-words-in-a-string', () => {
    it( '"the sky is blue"', () => {
        const input = 'the sky is blue';
        const output = reverseWords( input );
        expect( output ).toStrictEqual( 'blue is sky the' );
    } );

    it( '"  hello world!  "', () => {
        const input = '  hello world!  ';
        const output = reverseWords( input );
        expect( output ).toStrictEqual( 'world! hello' );
    } );

    it( '"a good   example"', () => {
        const input = 'a good   example';
        const output = reverseWords( input );
        expect( output ).toStrictEqual( 'example good a' );
    } );

} );