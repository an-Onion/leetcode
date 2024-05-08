function nthUglyNumber( n: number ): number {

    const dp = new Array( n ).fill( 1 );

    let [p2, p3, p5] = [0, 0, 0];

    for ( let i = 1; i < n; i++ ) {
        dp[i] = Math.min( dp[p2] * 2, dp[p3] * 3, dp[p5] * 5 );
        if ( dp[i] === dp[p2] * 2 ) p2++;
        if ( dp[i] === dp[p3] * 3 ) p3++;
        if ( dp[i] === dp[p5] * 5 ) p5++;
    }

    return dp[n-1];
}

describe( '264. ugly-number-ii', () => {
    it( '10', () => {
        expect( nthUglyNumber( 10 ) ).toBe( 12 );
    } );

    it( '1', () => {
        expect( nthUglyNumber( 1 ) ).toBe( 1 );
    } );
} );