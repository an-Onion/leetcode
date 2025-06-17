function tribonacci( n: number ): number {
    const dp = [0, 1, 1];
    for ( let i = 3; i <= n; i++ ) {
        dp[i % 3] = dp[( i + 2 ) % 3] + dp[( i + 1 ) % 3] + dp[i % 3];
    }
    return dp[n % 3];
}

describe( '1137. N-th Tribonacci Number', () => {
    it( 'case 1', () => {
        expect( tribonacci( 4 ) ).toEqual( 4 );
    } );
    it( 'case 2', () => {
        expect( tribonacci( 25 ) ).toEqual( 1389537 );
    } );
} );
