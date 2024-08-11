function maxUncrossedLines( nums1: number[], nums2: number[] ): number {
    const M = nums1.length,
        N = nums2.length;

    const dp = Array.from( { length: M + 1 }, () => Array( N + 1 ).fill( 0 ) );

    for ( let i = 1; i <= M; ++i ) {
        for ( let j = 1; j <= N; ++j ) {
            if ( nums1[i - 1] === nums2[j - 1] ) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                continue;
            }
            dp[i][j] = Math.max( dp[i - 1][j], dp[i][j - 1] );
        }
    }
    return dp[M][N];
}

describe( '1035. uncrossed-lines', () => {
    it( 'e.g. 1', () => {
        const nums1 = [2, 5, 1, 2, 5],
            nums2 = [10, 5, 2, 1, 5, 2];
        expect( maxUncrossedLines( nums1, nums2 ) ).toBe( 3 );
    } );

    it( 'e.g. 2', () => {
        const nums1 = [1, 3, 7, 1, 7, 5],
            nums2 = [1, 9, 2, 5, 1];
        expect( maxUncrossedLines( nums1, nums2 ) ).toBe( 2 );
    } );
} );
