function superPow( a: number, b: number[] ): number {
    const MOD = 1337;

    function pow( x: number, n: number ): number {
        let res = 1;
        x %= MOD;
        while ( n ) {
            if ( n & 1 ) {
                res = ( res * x ) % MOD;
            }
            x = ( x * x ) % MOD;
            n >>= 1;
        }

        return res;
    }

    let ret = 1;
    for ( let i = b.length - 1; i >= 0; --i ) {
        ret = ( ret * pow( a, b[i] ) ) % MOD;
        a = pow( a, 10 );
    }

    return ret;
}

describe( '372. super-pow', () => {
    it( '2 ** 3', () => {
        expect( superPow( 2, [3] ) ).toBe( 8 );
    } );

    it( ' 2 ** 10', () => {
        expect( superPow( 2, [1, 0] ) ).toBe( 1024 );
    } );

    it( '1 ** 433852', () => {
        expect( superPow( 1, [4, 3, 3, 8, 5, 2] ) ).toBe( 1 );
    } );

    it( '2147483647 ** 200', () => {
        expect( superPow( 2147483647, [2, 0, 0] ) ).toBe( 1198 );
    } );
} );
