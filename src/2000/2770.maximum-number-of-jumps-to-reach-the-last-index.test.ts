function maximumJumps( nums: number[], target: number ): number {
    const dp = Array( nums.length ).fill( Number.MIN_SAFE_INTEGER );

    dp[0] = 0;
    for ( let j = 1; j < nums.length; ++j ) {
        for ( let i = 0; i < j; ++i ) {
            if ( Math.abs( nums[i] - nums[j] ) <= target ) {
                dp[j] = Math.max( dp[j], dp[i] + 1 );
            }
        }
    }
    return dp[nums.length - 1] < 0 ? -1 : dp[nums.length - 1];
}

describe( '2770. maximum-number-of-jumps-to-reach-the-last-index', () => {
    it( 'case 1', () => {
        const nums = [1, 3, 6, 4, 1, 2],
            target = 2;
        expect( maximumJumps( nums, target ) ).toBe( 3 );
    } );

    it( 'case 2', () => {
        const nums = [1, 3, 6, 4, 1, 2],
            target = 3;
        expect( maximumJumps( nums, target ) ).toBe( 5 );
    } );

    it( 'case 3', () => {
        const nums = [1, 3, 6, 4, 1, 2],
            target = 0;
        expect( maximumJumps( nums, target ) ).toBe( -1 );
    } );
} );
