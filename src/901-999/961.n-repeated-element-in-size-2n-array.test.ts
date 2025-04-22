function repeatedNTimes( nums: number[] ): number {
    const n = nums.length;

    while ( true ) {
        const x = ( Math.random() * n ) | 0;
        const y = ( Math.random() * n ) | 0;
        if ( x !== y && nums[x] === nums[y] ) {
            return nums[x];
        }
    }
}

describe( '961. N-Repeated Element in Size 2N Array', () => {
    it( 'case 1', () => {
        expect( repeatedNTimes( [1, 2, 3, 3] ) ).toBe( 3 );
    } );
    it( 'case 2', () => {
        expect( repeatedNTimes( [2, 1, 2, 5, 3, 2] ) ).toBe( 2 );
    } );
    it( 'case 3', () => {
        expect( repeatedNTimes( [5, 1, 5, 2, 5, 3, 5, 4] ) ).toBe( 5 );
    } );
} );
