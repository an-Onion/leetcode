function combinationSum4( nums: number[], target: number ): number {
    const dp = Array( target + 1 ).fill( 0 );
    dp[0] = 1;

    for ( let i = 1; i <= target; i++ ) {
        for ( const num of nums ) {
            if ( num > i ) continue;
            dp[i] += dp[i - num];
        }
    }

    return dp[target];
}

describe( '377. Combination Sum IV', () => {
    it( 'e.g. 1', () => {
        expect( combinationSum4( [1, 2, 3], 4 ) ).toBe( 7 ); // 1+1+1+1, 1+1+2, 1+2+1, 1+3, 2+1+1, 2+2, 3+1
    } );

    it( ' e.g. 2', () => {
        expect( combinationSum4( [9], 3 ) ).toBe( 0 );
    } );
} );
