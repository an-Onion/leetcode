function singleNonDuplicate( nums: number[] ): number {
    let l = 0,
        u = nums.length - 1;

    while ( l <= u ) {
        const m = ( l + u ) >> 1;

        nums[m] === nums[m ^ 1] ? ( l = m + 1 ) : ( u = m - 1 );
    }

    return nums[l];
}

describe( '540.single-element-in-a-sorted-array.test', () => {
    it( 'case 1', () => {
        expect( singleNonDuplicate( [1, 1, 2, 3, 3, 4, 4, 8, 8] ) ).toBe( 2 );
    } );

    it( 'case 2', () => {
        expect( singleNonDuplicate( [3, 3, 7, 7, 10, 11, 11] ) ).toBe( 10 );
    } );
} );
