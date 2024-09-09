function minNonZeroProduct( p: number ): number {
    const MOD = BigInt( 10 ** 9 + 7 );

    if ( p === 1 ) return 1;
    const x = fastPow( BigInt( 2 ), BigInt( p ) ) - BigInt( 1 );
    const y = BigInt( 1 ) << BigInt( p - 1 );
    return Number( ( fastPow( x - BigInt( 1 ), y - BigInt( 1 ) ) * x ) % MOD );

    function fastPow( x: bigint, n: bigint ): bigint {
        let ret: bigint = BigInt( 1 );

        while ( n > 0 ) {
            if ( n & BigInt( 1 ) ) {
                ret = ( ret * x ) % MOD;
            }
            x = ( x * x ) % MOD;
            n >>= BigInt( 1 );
        }
        return ret;
    }
}

describe( '1969. Minimum Non-Zero Product of the Array Elements', () => {
    it( 'e.g. 1', () => {
        expect( minNonZeroProduct( 1 ) ).toEqual( 1 );
    } );

    it( 'e.g. 2', () => {
        expect( minNonZeroProduct( 2 ) ).toEqual( 6 );
    } );

    it( 'e.g. 3', () => {
        expect( minNonZeroProduct( 3 ) ).toEqual( 1512 );
    } );
} );
