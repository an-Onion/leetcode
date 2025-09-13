function maxFreqSum( s: string ): number {
    const map = new Map();
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    s.split( '' ).forEach( ( c ) => {
        map.set( c, ( map.get( c ) || 0 ) + 1 );
    } );
    let maxV = 0,
        maxC = 0;
    for ( const [c, freq] of map ) {
        if ( vowel.includes( c ) ) {
            maxV = Math.max( maxV, freq );
        } else {
            maxC = Math.max( maxC, freq );
        }
    }
    return maxV + maxC;
}

describe( '3541. find-most-frequent-vowel-and-consonant', () => {
    it( 'case 1', () => {
        expect( maxFreqSum( 'successes' ) ).toBe( 6 );
    } );

    it( 'case 2', () => {
        expect( maxFreqSum( 'aeiaeia' ) ).toBe( 3 );
    } );
} );
