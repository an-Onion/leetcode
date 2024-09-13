function minCost( costs: number[][] ): number {
    const dp = Array.from( { length: costs.length + 1 }, () => [0, 0, 0] );

    for ( let i = 0; i < costs.length; i++ ) {
        dp[i + 1][0] = costs[i][0] + Math.min( dp[i][1], dp[i][2] );
        dp[i + 1][1] = costs[i][1] + Math.min( dp[i][0], dp[i][2] );
        dp[i + 1][2] = costs[i][2] + Math.min( dp[i][0], dp[i][1] );
    }
    return Math.min( ...dp[costs.length] );
}

describe( '256.paint-house', () => {
    it( 'e.g. 1', () => {
        const costs = [
            [17, 2, 17],
            [16, 16, 5],
            [14, 3, 19],
        ];
        expect( minCost( costs ) ).toBe( 10 );
    } );

    it( 'e.g. 2', () => {
        const costs = [[7, 6, 2]];
        expect( minCost( costs ) ).toBe( 2 );
    } );
} );
