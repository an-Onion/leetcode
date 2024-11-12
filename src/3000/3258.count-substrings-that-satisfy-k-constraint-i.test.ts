function countKConstraintSubstrings( s: string, k: number ): number {
    let l = 0,
        r = 0,
        one = 0,
        ret = 0;
    const zero = () => r - l - one;
    while ( r < s.length ) {
        if ( s[r++] === '1' ) one++;

        while ( one > k && zero() > k ) {
            if ( s[l++] === '1' ) one--;
        }
        ret += r - l;
    }
    return ret;
}

describe( '3258.count-substrings-that-satisfy-k-constraint-i', () => {
    it( 'case 1', () => {
        expect( countKConstraintSubstrings( '10101', 1 ) ).toBe( 12 );
    } );

    it( 'case 2', () => {
        expect( countKConstraintSubstrings( '1010101', 2 ) ).toBe( 25 );
    } );

    it( 'case 3', () => {
        expect( countKConstraintSubstrings( '11111', 1 ) ).toBe( 15 );
    } );
} );
