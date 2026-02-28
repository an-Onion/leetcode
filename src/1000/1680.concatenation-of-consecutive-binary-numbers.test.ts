function concatenatedBinary( n: number ): number {
    const mod = 1_000_000_007;
    let ret = 0,
        w = 0;
    for ( let i = 1; i <= n; ++i ) {
        if ( ( i & ( i - 1 ) ) === 0 ) ++w;

        ret = ( ret * 2 ** w + i ) % mod;
    }
    return ret;
}

describe( '1680. concatenation-of-consecutive-binary-numbers', () => {
    it( 'case 1', () => {
        expect( concatenatedBinary( 1 ) ).toBe( 1 );
    } );

    it( 'case 2', () => {
        expect( concatenatedBinary( 3 ) ).toBe( 27 );
    } );

    it( 'case 3', () => {
        expect( concatenatedBinary( 12 ) ).toBe( 505379714 );
    } );
} );
