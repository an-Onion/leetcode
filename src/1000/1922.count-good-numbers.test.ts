function countGoodNumbers( n: number ): number {
    const mod = 1000000007n;

    const even = BigInt( Math.ceil( n / 2 ) );
    const odd = BigInt( Math.floor( n / 2 ) );

    return Number( ( pow( 5n, even ) * pow( 4n, odd ) ) % mod );

    function pow( x: bigint, y: bigint ): bigint {
        let res = 1n;
        while ( y > 0 ) {
            if ( y % 2n === 1n ) {
                res = ( res * x ) % mod;
            }
            x = ( x * x ) % mod;
            y /= 2n;
        }
        return res;
    }
}

describe( '1922. count good numbers', () => {
    it( 'case 1', () => {
        expect( countGoodNumbers( 1 ) ).toBe( 5 );
    } );
    it( 'case 2', () => {
        expect( countGoodNumbers( 4 ) ).toBe( 400 );
    } );

    it( 'case 3', () => {
        expect( countGoodNumbers( 50 ) ).toBe( 564908303 );
    } );
} );
