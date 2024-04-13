function maxProfit( prices: number[] ): number {
    const dp = Array.from( Array( 2 ), () => Array( prices.length ).fill( 0 ) );

    let min = prices[0];
    for( let j = 0; j < prices.length; j++ ){
        min = Math.min( min, prices[j] );
        dp[0][j] = Math.max( dp[0][j-1] ?? 0, prices[j] - min );
    }

    let max = prices[prices.length-1];
    for( let j = prices.length - 1; j >= 0; j-- ){
        max = Math.max( max, prices[j] );
        dp[1][j] = Math.max( dp[1][j+1] ?? 0, max - prices[j] );
    }

    let ret = 0;
    for( let k = 0; k < prices.length; k++ ){
        ret = Math.max( ret, dp[0][k] + dp[1][k] );
    }

    return ret;
}

describe( '123. best-time-to-buy-and-sell-stock-iii', () => {
    
    it( 'example 1', () => {
        const prices = [3,3,5,0,0,3,1,4];
        expect( maxProfit( prices ) ).toBe( 6 );
    } );

    it( 'example 2', () => {
        const prices = [1,2,3,4,5];
        expect( maxProfit( prices ) ).toBe( 4 );
    } );

    it( 'example 3', () => {
        const prices = [7,6,4,3,1];
        expect( maxProfit( prices ) ).toBe( 0 );
    } );

    it( 'example 4', () => {
        const prices = [1];
        expect( maxProfit( prices ) ).toBe( 0 );
    } );

    it( 'example 5', () => {
        const prices = [2,1,2,0,1];
        expect( maxProfit( prices ) ).toBe( 2 );
    } );

} );