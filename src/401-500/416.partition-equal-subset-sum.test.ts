function canPartition( nums: number[] ): boolean {
    const sum = nums.reduce( ( a, b ) => a + b, 0 );

    if ( sum % 2 !== 0 ) return false;

    const target = sum / 2;
    const dp = Array( target + 1 ).fill( false );
    dp[0] = true;

    for ( let i = 0; i < nums.length; i++ ) {
        for ( let j = target; j >= nums[i]; j-- ) {
            dp[j] ||= dp[j - nums[i]] ?? false;
        }
    }
    return dp[target];
}

describe( '416. Partition Equal Subset Sum', () => {
    it( '[1,5,11,5]', () => {
        expect( canPartition( [1, 5, 11, 5] ) ).toBeTruthy();
    } );

    it( '[1,2,3,5]', () => {
        expect( canPartition( [1, 2, 3, 5] ) ).toBeFalsy();
    } );
} );
