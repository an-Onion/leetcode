function balancedStringSplit( s: string ): number {
    let count = 0,
        ret = 0;
    for ( let i = 0; i < s.length; i++ ) {
        if ( s[i] === 'L' ) {
            count--;
        } else {
            count++;
        }
        if ( count === 0 ) {
            ret++;
        }
    }
    return ret;
}

describe( '1221. split-a-string-in-balanced-strings', () => {
    it( 'case 1', () => {
        expect( balancedStringSplit( 'RLRRLLRLRL' ) ).toBe( 4 );
    } );
    it( 'case 2', () => {
        expect( balancedStringSplit( 'RLLLLRRRLR' ) ).toBe( 3 );
    } );
    it( 'case 3', () => {
        expect( balancedStringSplit( 'LLLLRRRR' ) ).toBe( 1 );
    } );
} );
