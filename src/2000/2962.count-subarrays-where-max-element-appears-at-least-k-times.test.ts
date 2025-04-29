function countSubarrays( nums: number[], k: number ): number {
    let count = 0,
        ret = 0,
        left = 0;
    const max = Math.max( ...nums );
    for ( const num of nums ) {
        if ( num === max ) {
            count++;
        }
        while ( count === k ) {
            if ( nums[left++] === max ) {
                count--;
            }
        }
        ret += left;
    }
    return ret;
}

describe( '2962. countSubarrays', () => {
    it( 'case 1', () => {
        expect( countSubarrays( [1, 3, 2, 3, 3], 2 ) ).toBe( 6 );
    } );

    it( 'case 2', () => {
        expect( countSubarrays( [1, 1, 1, 1], 1 ) ).toBe( 10 );
    } );
} );
