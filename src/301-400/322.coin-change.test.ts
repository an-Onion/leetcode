function coinChange( coins: number[], amount: number ): number {

    const dp: number[] = new Array( amount + 1 ).fill( Infinity );

    dp[amount] = 0;

    for ( let i = amount; i > 0; --i ) {
        if ( dp[i] === Infinity ) continue;
        for ( const c of coins ) {
            if ( c > i ) continue;
            dp[i - c] = Math.min( dp[i - c], dp[i] + 1 );
        }
    }
    return dp[0] === Infinity ? -1 : dp[0];
}

describe( '322. coin-change', () => {

    it( 'case 1', () => {
        expect( coinChange( [1, 2, 5], 11 ) ).toBe( 3 );
    } );

    it( 'case 2', () => {
        expect( coinChange( [2], 3 ) ).toBe( -1 );
    } );

    it( 'case 3', () => {
        expect( coinChange( [1], 0 ) ).toBe( 0 );
    } );
} );