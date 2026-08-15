function longestSubsequence( nums: number[] ): number {
    if ( nums.every( ( num ) => num === 0 ) ) {
        return 0;
    }

    if ( nums.reduce( ( prev, cur ) => prev ^ cur, 0 ) === 0 ) {
        return nums.length - 1;
    }

    return nums.length;
}

describe( '3702.longest-subsequence-with-non-zero-bitwise-xor', () => {
    it( 'case 1', () => {
        expect( longestSubsequence( [1, 2, 3] ) ).toBe( 2 );
    } );

    it( 'case 2', () => {
        expect( longestSubsequence( [2, 3, 4] ) ).toBe( 3 );
    } );
} );
