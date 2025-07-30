function longestSubarray( nums: number[] ): number {
    const max = Math.max( ...nums );
    let count = 0,
        ret = 0;

    for ( const num of nums ) {
        if ( num !== max ) {
            count = 0;
            continue;
        }
        ret = Math.max( ret, ++count );
    }
    return ret;
}

describe( '2419. longest-subarray-with-maximum-bitwise-and', () => {
    it( 'case 1', () => {
        expect( longestSubarray( [1, 2, 3, 3, 2, 2] ) ).toBe( 2 );
    } );

    it( 'case 2', () => {
        expect( longestSubarray( [1, 2, 3, 4, 5] ) ).toBe( 1 );
    } );
} );
