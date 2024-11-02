function minChanges( n: number, k: number ): number {
    if ( ( n & k ) !== k ) return -1;
    let xor = n ^ k;
    let cnt = 0;

    while ( xor ) {
        cnt++;
        xor &= xor - 1;
    }

    return cnt;
}

describe( '3226.number-of-bit-changes-to-make-two-integers-equal', () => {
    it( 'e.g. 1', () => {
        const n = 13,
            k = 4;
        expect( minChanges( n, k ) ).toBe( 2 );
    } );

    it( 'e.g. 2', () => {
        const n = 21,
            k = 21;
        expect( minChanges( n, k ) ).toBe( 0 );
    } );

    it( 'e.g. 3', () => {
        const n = 14,
            k = 13;
        expect( minChanges( n, k ) ).toBe( -1 );
    } );
} );
