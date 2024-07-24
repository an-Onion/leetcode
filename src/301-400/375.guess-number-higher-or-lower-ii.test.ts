function getMoneyAmount( n: number ): number {
    const dp = Array.from( { length: n + 1 }, () => Array( n + 1 ).fill( 0 ) );

    function DP( i: number, j: number ) {
        return i >= j ? 0 : dp[i][j];
    }

    for ( let i = n - 1; i >= 1; --i ) {
        for ( let j = i + 1; j <= n; j++ ) {
            let min = Number.MAX_SAFE_INTEGER;

            for ( let k = i; k <= j; k++ ) {
                const max = k + Math.max( DP( i, k - 1 ), DP( k + 1, j ) );
                min = Math.min( min, max );
            }

            dp[i][j] = min;
        }
    }
    return DP( 1, n );
}

describe( '375. Guess Number Higher or Lower II', () => {
    it( '10', () => {
        expect( getMoneyAmount( 10 ) ).toBe( 16 );
    } );


    it( '1', () => {
        expect( getMoneyAmount( 1 ) ).toBe( 0 );
    } );

    it( '2', () => {
        expect( getMoneyAmount( 2 ) ).toBe( 1 );
    } );

} );