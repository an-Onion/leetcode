function maxProfit( prices: number[] ): number {

    const N = prices.length + 2;
    const dp = new Array( N ).fill( 0 );
    let sofar = -prices[0];

    for( let i = 2; i < N; ++i ){
        dp[i] = Math.max( dp[i-1], prices[i-2] + sofar );
        sofar = Math.max( sofar, dp[i-2] - prices[i-2] );
    }

    return dp[N-1];
}

describe( '309. best-time-to-buy-and-sell-stock-with-cooldown', () => {
    it( '[1,2,3,0,2]', () => {
        expect( maxProfit( [1,2,3,0,2] ) ).toEqual( 3 );
    } );
    it( '[1]', () => {
        expect( maxProfit( [1] ) ).toEqual( 0 );
    } );
    it( '[0,1,2,3]', () => {
        expect( maxProfit( [0,1,2,3] ) ).toEqual( 3 );
    } );
} );