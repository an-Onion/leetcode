function maxProfit( K: number, prices: number[] ): number {
    const N = prices.length;

    const dp = Array.from( { length: K + 1 }, () => Array( N ).fill( 0 ) );

    for ( let i = 1; i <= K; i++ ) {
        let maxSell = -prices[0];
        for ( let j = 1; j < N; j++ ) {
            dp[i][j] = Math.max( dp[i][j - 1], prices[j] + maxSell );
            maxSell = Math.max( maxSell, dp[i - 1][j - 1] - prices[j] );
        }
    }
    return dp[K][N - 1];
}

describe( '188. best-time-to-buy-and-sell-stock-iv', () => {

    it( 'k = 2, prices = [2,4,1]', () => {
        expect( maxProfit( 2, [2, 4, 1] ) ).toEqual( 2 );
    } );

    it( 'k = 2, prices = [3,2,6,5,0,3]', () => {
        expect( maxProfit( 2, [3, 2, 6, 5, 0, 3] ) ).toEqual( 7 );
    } );
} );