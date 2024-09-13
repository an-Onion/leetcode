function minCostII( costs: number[][] ): number {
    const N = costs.length,
        K = costs[0].length;

    const dp = Array.from( { length: N + 1 }, () => Array( K ).fill( 0 ) );

    for ( let i = 1; i <= N; i++ ) {
        let min1 = Infinity,
            min2 = Infinity,
            min1Index = -1;
        for ( let j = 0; j < K; j++ ) {
            if ( dp[i - 1][j] < min1 ) {
                min2 = min1;
                min1 = dp[i - 1][j];
                min1Index = j;
            } else if ( dp[i - 1][j] < min2 ) {
                min2 = dp[i - 1][j];
            }
        }
        for ( let j = 0; j < K; j++ ) {
            if ( j === min1Index ) {
                dp[i][j] = min2 + costs[i - 1][j];
            } else {
                dp[i][j] = min1 + costs[i - 1][j];
            }
        }
    }
    return Math.min( ...dp[N] );
}

describe( '265. Paint House II', () => {
    it( 'e.g. 1', () => {
        expect(
            minCostII( [
                [1, 5, 3],
                [2, 9, 4],
            ] ),
        ).toEqual( 5 );
    } );
    it( 'e.g. 2', () => {
        expect(
            minCostII( [
                [1, 3],
                [2, 4],
            ] ),
        ).toEqual( 5 );
    } );
} );
