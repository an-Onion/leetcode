function longestBalanced( nums: number[] ): number {
    let len = 0;

    for ( let left = 0; left < nums.length; left++ ) {
        const odd = new Map<number, number>();
        const even = new Map<number, number>();

        for ( let right = left; right < nums.length; right++ ) {
            const c = nums[right] & 1 ? odd : even;

            c.set( nums[right], ( c.get( nums[right] ) ?? 0 ) + 1 );

            if ( odd.size === even.size ) {
                len = Math.max( len, right - left + 1 );
            }
        }
    }

    return len;
}

describe( '3719. longest-balanced-subarray-i', () => {
    it( 'case 1', () => {
        expect( longestBalanced( [2, 5, 4, 3] ) ).toBe( 4 );
    } );

    it( 'case 2', () => {
        expect( longestBalanced( [3, 2, 2, 5, 4] ) ).toBe( 5 );
    } );

    it( 'case 3', () => {
        expect( longestBalanced( [1, 2, 3, 2] ) ).toBe( 3 );
    } );
} );
