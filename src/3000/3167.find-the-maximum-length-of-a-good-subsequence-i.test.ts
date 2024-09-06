function maximumLength( nums: number[], k: number ): number {
    const dp: number[][] = Array.from( { length: nums.length }, () =>
        Array( k + 1 ).fill( 1 ),
    );

    let ans = 0;

    for ( let i = 0; i < nums.length; i++ ) {
        dp[i][0] = 1;
        for ( let l = 0; l <= k; l++ ) {
            for ( let j = 0; j < i; j++ ) {
                const add = nums[i] !== nums[j] ? 1 : 0;
                if ( l - add >= 0 ) {
                    dp[i][l] = Math.max( dp[i][l], dp[j][l - add] + 1 );
                }
            }
            ans = Math.max( ans, dp[i][l] );
        }
    }

    return ans;
}

describe( '3167. Find the Maximum Length of a Good Subsequence', () => {
    it( 'e.g. 1', () => {
        const nums = [1, 2, 1, 1, 3],
            k = 2;
        expect( maximumLength( nums, k ) ).toEqual( 4 );
    } );

    it( 'e.g. 2', () => {
        const nums = [1, 2, 3, 4, 5, 1],
            k = 0;
        expect( maximumLength( nums, k ) ).toEqual( 2 );
    } );

    it( 'e.g. 3', () => {
        const nums = [30, 30, 29],
            k = 0;
        expect( maximumLength( nums, k ) ).toEqual( 2 );
    } );
} );
