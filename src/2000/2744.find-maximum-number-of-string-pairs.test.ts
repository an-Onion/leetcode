function maximumNumberOfStringPairs( words: string[] ): number {
    const set = new Set<string>();
    let count = 0;
    for ( const word of words ) {
        const reverseWord = word.split( '' ).reverse().join( '' );
        if ( set.has( reverseWord ) ) {
            count++;
        }
        set.add( word );
    }
    return count;
}

describe( '2744. Find Maximum Number of String Pairs', () => {
    it( 'case 1', () => {
        const words = ['cd', 'ac', 'dc', 'ca', 'zz'];
        const result = maximumNumberOfStringPairs( words );
        expect( result ).toBe( 2 );
    } );
} );
