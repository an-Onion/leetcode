function maxCoins( nums: number[] ): number {

    const val = ( idx: number ) => nums[ idx-1 ] ?? 1;

    const N = nums.length + 2;
    const dp = Array.from( { length: N }, () => Array( N ).fill( 0 ) );

    for( let delta = 2; delta < N; delta++ ){
        for( let left = 0; left+delta < N; left++ ){
            const right = left + delta;
            for( let k = left+1; k < right; k++ ){
                dp[left][right] = Math.max( dp[left][right], dp[left][k] + dp[k][right] + val( left ) * val( k ) * val( right ) );
            }
        }
    }
    return dp[0][N-1];
}

describe( '312. burst-balloons', () => {
    it( '[3,1,5,8]', () => {
        expect( maxCoins( [3,1,5,8] ) ).toBe( 167 );
    } );

    it( '[1,5]', () => {
        expect( maxCoins( [1,5] ) ).toBe( 10 );
    } );
} );