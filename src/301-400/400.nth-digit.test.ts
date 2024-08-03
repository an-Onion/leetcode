function findNthDigit( n: number ): number {
    let base = 1,
        d = 1;

    while ( n > base * 9 * d ) {
        n -= base * 9 * d;
        base *= 10, d++;
    }

    n--;

    return getKth( base + Math.floor( n / d ), n % d );

    function getKth( digit: number, k: number ): number {
        return parseInt( `${digit}`.charAt( k ) );
    }
}

describe( '400. nth-digit', () => {
    it( '3', () => {
        expect( findNthDigit( 3 ) ).toBe( 3 );
    } );

    it( '11', () => {
        expect( findNthDigit( 11 ) ).toBe( 0 );
    } );
} );
