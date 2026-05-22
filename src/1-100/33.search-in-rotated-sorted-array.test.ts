function search( nums: number[], target: number ): number {
    let [low, up] = [0, nums.length - 1];

    while ( low <= up ) {
        const mid = ( low + up ) >> 1;

        if ( nums[mid] === target ) return mid;

        if ( nums[mid] >= nums[low] ) {
            if ( nums[low] <= target && target < nums[mid] ) up = mid - 1;
            else low = mid + 1;
        } else {
            if ( nums[mid] < target && target <= nums[up] ) low = mid + 1;
            else up = mid - 1;
        }
    }
    return -1;
}

describe( '33. Search in Rotated Sorted Array', () => {
    it( 'case 1', () => {
        expect( search( [4, 5, 6, 7, 8, 1, 2, 3], 8 ) ).toBe( 4 );
    } );

    it( 'case 2', () => {
        expect( search( [5, 1, 3], 5 ) ).toBe( 0 );
    } );

    it( 'case 3', () => {
        expect( search( [4, 5, 6, 7, 0, 1, 2], 0 ) ).toBe( 4 );
    } );

    it( 'case 4', () => {
        expect( search( [4, 5, 6, 7, 0, 1, 2], 3 ) ).toBe( -1 );
    } );

    it( 'case 5', () => {
        expect( search( [1], 0 ) ).toBe( -1 );
    } );
} );
