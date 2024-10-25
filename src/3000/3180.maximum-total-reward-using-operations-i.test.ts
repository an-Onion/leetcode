function maxTotalReward( rewardValues: number[] ): number {
    rewardValues.sort( ( a, b ) => a - b );

    const m = rewardValues.at( -1 );
    const dp = Array( 2 * m ).fill( false );
    dp[0] = true;
    for ( const reward of rewardValues ) {
        for ( let x = 2 * reward - 1; x >= reward; x-- ) {
            if ( dp[x - reward] ) {
                dp[x] = true;
            }
        }
    }

    let ret = 0;
    for ( let x = 0; x < dp.length; x++ ) {
        if ( dp[x] ) {
            ret = x;
        }
    }
    return ret;
}

describe( '3180.maximum-total-reward-using-operations-i', () => {
    it( 'e.g. 1', () => {
        expect( maxTotalReward( [1, 1, 3, 3] ) ).toBe( 4 );
    } );

    it( 'e.g. 2', () => {
        expect( maxTotalReward( [1, 6, 4, 3, 2] ) ).toBe( 11 );
    } );
} );
