function nthSuperUglyNumber( n: number, primes: number[] ): number {
    const dp = Array( n + 1 ).fill( Infinity );
    const M = primes.length;
    const pointers = Array( M ).fill( 0 );

    const nums = new Array( M ).fill( 1 );

    for ( let i = 1; i <= n; i++ ) {
        for ( let j = 0; j < M; j++ ) {
            dp[i] = Math.min( dp[i], nums[j] );
        }
        for ( let j = 0; j < M; j++ ) {
            if ( nums[j] === dp[i] ) {
                pointers[j]++;
                nums[j] = dp[pointers[j]] * primes[j];
            }
        }
    }
    return dp[n];
}

describe( '313, super ugly number', () => {
    it( 'case 1', () => {
        expect( nthSuperUglyNumber( 12, [2, 7, 13, 19] ) ).toBe( 32 );
    } );

    it( 'case 2', () => {
        expect( nthSuperUglyNumber( 1, [2, 3, 5] ) ).toBe( 1 );
    } );
} );
