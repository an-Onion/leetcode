function maximumLength( nums: number[], k: number ): number {
    const dp: number[][] = Array.from( { length: k }, () =>
        new Array( k ).fill( 0 ),
    );
    let res = 0;
    for ( const num of nums ) {
        const mod = num % k;
        for ( let prev = 0; prev < k; prev++ ) {
            dp[prev][mod] = dp[mod][prev] + 1;
            res = Math.max( res, dp[prev][mod] );
        }
    }
    return res;
}

describe( '3202.find-the-maximum-length-of-valid-subsequence-ii', () => {
    it( 'case 1', () => {
        const nums = [1, 2, 3, 4, 5],
            k = 2;
        expect( maximumLength( nums, k ) ).toBe( 5 );
    } );

    it( 'case 2', () => {
        const nums = [1, 4, 2, 3, 1, 4],
            k = 3;
        expect( maximumLength( nums, k ) ).toBe( 4 );
    } );
} );
