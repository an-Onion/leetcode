function secondsToRemoveOccurrences( s: string ): number {
    let ret = 0,
        zero = 0;

    for ( let i = 0; i < s.length; i++ ) {
        if ( s[i] === '0' ) {
            zero++;
            continue;
        }
        if ( zero > 0 ) {
            ret = Math.max( ret + 1, zero );
        }
    }
    return ret;
}

describe( '2380. Time Needed to Rearrange a Binary String', () => {
    it( 'e.g. 1', () => {
        expect( secondsToRemoveOccurrences( '0110101' ) ).toBe( 4 );
    } );
    it( 'e.g. 2', () => {
        expect( secondsToRemoveOccurrences( '11100' ) ).toBe( 0 );
    } );

    it( 'e.g. 3', () => {
        // 001011 -> 010101 -> 101010 -> 110010 -> 111010
        expect( secondsToRemoveOccurrences( '001011' ) ).toBe( 4 );
    } );
} );
