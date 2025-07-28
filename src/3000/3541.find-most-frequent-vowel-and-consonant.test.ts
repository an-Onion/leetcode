function maxFreqSum( s: string ): number {
    const map = Array.from( { length: 26 }, () => 0 );
    const vowel = [0, 4, 8, 14, 20];
    for ( let i = 0; i < s.length; i++ ) {
        const code = s.charCodeAt( i ) - 97;
        map[code]++;
    }
    let maxV = 0,
        maxC = 0;
    for ( let i = 0; i < 26; i++ ) {
        if ( vowel.includes( i ) ) {
            maxV = Math.max( maxV, map[i] );
        } else {
            maxC = Math.max( maxC, map[i] );
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
