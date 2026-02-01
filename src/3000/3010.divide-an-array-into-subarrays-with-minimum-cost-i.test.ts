function minimumCost( nums: number[] ): number {
    let first = nums[1],
        second = Infinity;

    for ( let i = 2; i < nums.length; ++i ) {
        if ( first > nums[i] ) {
            second = first;
            first = nums[i];
        } else {
            second = Math.min( second, nums[i] );
        }
    }

    return nums[0] + first + second;
}

describe( '3010. Divide an Array Into Subarrays With Minimum Cost I', () => {
    it( 'case 1', () => {
        expect( minimumCost( [1, 2, 3, 12] ) ).toBe( 6 );
    } );

    it( 'case 2', () => {
        expect( minimumCost( [5, 4, 3] ) ).toBe( 12 );
    } );

    it( 'case 3', () => {
        expect( minimumCost( [10, 3, 1, 1] ) ).toBe( 12 );
    } );
} );
