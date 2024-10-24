function commonFactors( a: number, b: number ): number {
    const k = gcd( a, b );
    let ret = 0;

    for ( let i = 1; i * i <= k; ++i ) {
        if ( k % i !== 0 ) continue;
        ret++;
        if ( i * i !== k ) ret++;
    }
    return ret;

    function gcd( x: number, y: number ): number {
        if ( y === 0 ) return x;
        return gcd( y, x % y );
    }
}

describe( '2427.number-of-common-factors', () => {
    it( 'e.g. 1', () => {
        expect( commonFactors( 12, 6 ) ).toBe( 4 );
    } );

    it( 'e.g. 2', () => {
        expect( commonFactors( 25, 30 ) ).toBe( 2 );
    } );
} );
