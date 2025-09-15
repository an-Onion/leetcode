function canBeTypedWords( text: string, brokenLetters: string ): number {
    const words = text.split( ' ' );
    const letterSet = new Set( brokenLetters );
    let count = 0;
    for ( const word of words ) {
        if ( !word.split( '' ).some( ( letter ) => letterSet.has( letter ) ) ) {
            count++;
        }
    }
    return count;
}

describe( '1935. Maximum Number of Words You Can Type', () => {
    it( 'case 1', () => {
        const text = 'hello world';
        const brokenLetters = 'ad';
        const result = canBeTypedWords( text, brokenLetters );
        expect( result ).toBe( 1 );
    } );
} );
