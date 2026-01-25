function minimumDifference( nums: number[], k: number ): number {
    nums.sort( ( a, b ) => a - b );
    let ret = Number.MAX_SAFE_INTEGER;
    for ( let i = 0; i <= nums.length - k; ++i ) {
        ret = Math.min( ret, nums[i + k - 1] - nums[i] );
    }
    return ret;
}

describe( '1948. minimum-difference-between-highest-and-lowest-of-k-scores', () => {
    it( 'case 1', () => {
        expect( minimumDifference( [90], 1 ) ).toBe( 0 );
    } );
    it( 'case 2', () => {
        expect( minimumDifference( [9, 4, 1, 7], 2 ) ).toBe( 2 );
    } );
} );
