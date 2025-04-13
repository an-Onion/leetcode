function myPow( x: number, n: number ): number {
    let ans = 1;
    const min = -2147483648; // - 2**31

    if ( n === min ) {
        ( ans = x ), ( n = min + 1 );
    }

    let exp = Math.abs( n );

    while ( exp > 0 ) {
        if ( exp & 1 ) ans *= x;
        exp >>= 1;
        x *= x;
    }

    return n > 0 ? ans : 1 / ans;
}

describe( 'Pow(x, n)', () => {
    it( '2, 10', () => {
        expect( myPow( 2, 10 ) ).toBe( 1024 );
    } );

    it( '2.1, 3', () => {
        expect( myPow( 2.1, 3 ).toFixed( 3 ) ).toBe( '9.261' );
    } );

    it( '2, -2', () => {
        expect( myPow( 2, -2 ) ).toBe( 0.25 );
    } );

    it( '2, -2147483648', () => {
        expect( myPow( 2, -2147483648 ) ).toBe( 0 );
    } );
} );
