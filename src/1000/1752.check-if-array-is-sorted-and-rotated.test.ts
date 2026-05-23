function check( nums: number[] ): boolean {
    let isSorted = nums[0] >= nums[nums.length - 1];

    for ( let i = 0; i < nums.length - 1; i++ ) {
        const x = nums[i];
        const y = nums[i + 1];

        if ( x > y ) {
            if ( !isSorted ) {
                return false;
            }
            isSorted = false;
        }
    }

    return true;
}

describe( '1752. check-if-array-is-sorted-and-rotated', () => {
    it( 'case 1', () => {
        expect( check( [3, 4, 5, 1, 2] ) ).toBe( true );
    } );

    it( 'case 2', () => {
        expect( check( [2, 1, 3, 4] ) ).toBe( false );
    } );

    it( 'case 3', () => {
        expect( check( [1, 2, 3] ) ).toBe( true );
    } );
} );
