function minRemoval( nums: number[], k: number ): number {
    nums.sort( ( a, b ) => a - b );
    const n = nums.length;

    let right = 0,
        maxLen = 0;
    for ( let left = 0; left < n; left++ ) {
        while ( right < n && nums[right] <= k * nums[left] ) {
            right++;
        }
        maxLen = Math.max( maxLen, right - left );
    }
    return n - maxLen;
}

describe( '3634. Minimum Removals to Balance Array', () => {
    it( 'case 1', () => {
        expect( minRemoval( [2, 1, 5], 2 ) ).toBe( 1 );
    } );

    it( 'case 2', () => {
        expect( minRemoval( [1, 6, 2, 9], 3 ) ).toBe( 2 );
    } );

    it( 'case 3', () => {
        expect( minRemoval( [4, 6], 2 ) ).toBe( 0 );
    } );
} );
