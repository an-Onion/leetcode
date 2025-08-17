function new21Game( n: number, k: number, maxPts: number ): number {
    const dp = new Array( k + maxPts ).fill( 0 );

    let s = 0;
    for ( let i = k; i < k + maxPts; i++ ) {
        dp[i] = i <= n ? 1 : 0;
        s += dp[i];
    }

    for ( let i = k - 1; i >= 0; i-- ) {
        dp[i] = s / maxPts;
        s += dp[i] - dp[i + maxPts];
    }

    return dp[0];
}

describe( '837. new 21 game', () => {
    it( 'case 1', () => {
        expect( new21Game( 10, 1, 10 ) ).toBeCloseTo( 1.0, 5 );
    } );

    it( 'case 2', () => {
        expect( new21Game( 6, 1, 10 ) ).toBeCloseTo( 0.6, 5 );
    } );

    it( 'case 3', () => {
        expect( new21Game( 21, 17, 10 ) ).toBeCloseTo( 0.73278, 5 );
    } );
} );
