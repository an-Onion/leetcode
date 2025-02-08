function uniquePathsWithObstacles( obstacleGrid: number[][] ): number {
    const M = obstacleGrid.length,
        N = obstacleGrid[0].length;
    const dp = new Array( N ).fill( 0 );
    dp[0] = 1;

    for ( let i = 0; i < M; i++ ) {
        for ( let j = 0; j < N; j++ ) {
            if ( obstacleGrid[i][j] === 1 ) {
                dp[j] = 0;
                continue;
            }
            dp[j] += dp[j - 1] || 0;
        }
    }
    return dp[dp.length - 1];
}
describe( '63. Unique Paths II', () => {
    it( '[[0,0,0],[0,1,0],[0,0,0]]', () => {
        expect(
            uniquePathsWithObstacles( [
                [0, 0, 0],
                [0, 1, 0],
                [0, 0, 0],
            ] ),
        ).toBe( 2 );
    } );

    it( '[[0,1],[0,0]]', () => {
        expect(
            uniquePathsWithObstacles( [
                [0, 1],
                [0, 0],
            ] ),
        ).toBe( 1 );
    } );
} );
